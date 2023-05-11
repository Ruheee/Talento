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
const job_seeker = require("./routes/job_seekers");

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

  app.use("/api", job_seeker(db));
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
