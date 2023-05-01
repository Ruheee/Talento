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
  .listen(PORT, () => console.log(`Example app listening on port ${PORT}!`));

// Import the express-openid-connect module
const { auth, requiresAuth } = require('express-openid-connect');

// Configure the auth provider
const config = {
  authRequired: false,
  auth0Logout: true,
  secret: 'a long, randomly-generated string stored in env',
  baseURL: 'https://localhost:3000',
  clientID: 'spvFR3hekTCoajKUwC1DinYBuimjO18z',
  issuerBaseURL: 'https://dev-aqyh6g1cz81cmqbm.us.auth0.com'
};

// auth router attaches /login, /logout, and /callback routes to the baseURL
app.use(auth(config));

// req.isAuthenticated is provided from the auth router
app.get('/', (req, res) => {
  res.send(req.oidc.isAuthenticated() ? 'Logged in' : 'Logged out');
});

app.get('/profile', requiresAuth(), (req, res) => {
  res.send(JSON.stringify(req.oidc.user));
});
