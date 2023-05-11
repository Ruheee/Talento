// Express Server
const express = require("express");
const app = express();

// Modules
const fs = require("fs");
const path = require("path");

// Middlewares
const bodyparser = require("body-parser");
const helmet = require("helmet");
const cors = require("cors");

// Import Routes
const db = require("./db");
const job_seekers = require("./routes/job_seekers");
const favourites = require("./routes/favourites");
const messages = require("./routes/messages");
const employers = require("./routes/employers");
const matches = require("./routes/matches");
const job_listings = require("./routes/job_listings");
const careers = require("./routes/careers");

function read(file) {
  return new Promise((resolve, reject) => {
    fs.readFile(
      file,
      {
        encoding: "utf-8"
      },
      (error, data) => {
        if (error) return reject(error);
        resolve(data);
      }
    );
  });
}

module.exports = function application(
  ENV,
  actions
) {
  app.use(cors());
  app.use(helmet());
  app.use(bodyparser.json());

  app.use("/api", job_seekers(db));
  app.use("/api", favourites(db));
  app.use("/api", messages(db));
  app.use("/api", employers(db));
  app.use("/api", matches(db));
  app.use("/api", job_listings(db));
  app.use("/api", careers(db));
  app.get("/", (req, res) => {
    res.send("Hello World!");
  })

  if (ENV === "development") {
    Promise.all([
      read(path.resolve(__dirname, `db/schema/create.sql`)),
      read(path.resolve(__dirname, `db/schema/${ENV}.sql`))
    ])
      .then(([create, seed]) => {
        app.get("/api/debug/reset", (request, response) => {
          db.query(create)
            .then(() => db.query(seed))
            .then(() => {
              console.log("Database Reset");
              response.status(200).send("Database Reset");
            });
        });
      })
      .catch(error => {
        console.log(`Error setting up the reset route: ${error}`);
      });
  }

  app.close = function() {
    return db.end();
  };

  return app;
};
