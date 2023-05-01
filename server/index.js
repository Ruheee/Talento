// Import builtin NodeJS modules to instantiate the service
const https = require("https");
const fs = require("fs");

const express = require("express");
const app = express();
const PORT = process.env.PORT || 8000;

app.get("/", (req, res) => {
  res.send("Hello, Talento!");
});

app.listen(PORT, () => 
  console.log(`Server running on port ${PORT}`)
);
