const express = require("express");

// Import the HTTPS module and File System module
const https = require("https");
const fs = require("fs");

// Import middleware modules
const cors = require("cors");
const bodyParser = require("body-parser");

// Instantiate an Express application and set the port number
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
  .listen(PORT, () => console.log(`Example app listening on port ${PORT}!`));

// Import the express-openid-connect module
const { auth, requiresAuth } = require('express-openid-connect');

// Configure the auth provider
const config = {
  authRequired: false,
  auth0Logout: true,
  secret: 'a long, randomly-generated string stored in env',
  baseURL: 'https://localhost:8000',
  clientID: 'spvFR3hekTCoajKUwC1DinYBuimjO18z',
  issuerBaseURL: 'https://dev-aqyh6g1cz81cmqbm.us.auth0.com'
};

// auth router attaches /login, /logout, and /callback routes to the baseURL
app.use(auth(config));
// middleware
app.use(cors());
app.use(bodyParser.json());

// req.isAuthenticated is provided from the auth router
app.get('/', (req, res) => {
  res.send(req.oidc.isAuthenticated() ? 'Logged in' : 'Logged out');
});

app.get('/profile', requiresAuth(), (req, res) => {
  res.send(JSON.stringify(req.oidc.user));
});


