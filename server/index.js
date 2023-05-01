// Import builtin NodeJS modules to instantiate the service
const https = require("https");
const fs = require("fs");

const express = require("express");
const app = express();
const PORT = process.env.PORT || 8000;

// Point location of SSL certificate and key
const options = {
  key: fs.readFileSync('./localhost-key.pem'),
  cert: fs.readFileSync('./localhost.pem'),
};

// Instantiate the HTTPS server
https
  .createServer(options, app)
  .listen(port, () => console.log(`Example app listening on port ${port}!`));

app.get("/", (req, res) => {
  res.send("Hello, Talento!");
});

app.listen(PORT, () => 
  console.log(`Server running on port ${PORT}`)
);
