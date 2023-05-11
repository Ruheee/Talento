const PORT = process.env.PORT || 8005;
const ENV = require("./environment");

const app = require("./application")(ENV);
const server = require("http").Server(app);

const WebSocket = require("ws");
const wss = new WebSocket.Server({ server });

wss.on("connection", socket => {
  socket.onmessage = event => {
    console.log(`Message Received: ${event.data}`);

    if (event.data === "ping") {
      socket.send(JSON.stringify("pong"));
    }
  };
});

function updateAppointment(id, interview) {
  wss.clients.forEach(function eachClient(client) {
    if (client.readyState === WebSocket.OPEN) {
      client.send(
        JSON.stringify({
          type: "SET_INTERVIEW",
          id,
          interview
        })
      );
    }
  });
}

server.listen(PORT, () => {
  console.log(`Listening on port ${PORT} in ${ENV} mode.`);
});


app.get('/api/test', function (req, res) {
  res.json({ message: 'Hello from the backend!' });
});

//auth0
// const fs = require("fs");
// const https = require("https");
// const options = {
//   key: fs.readFileSync('./localhost-key.pem'),
//   cert: fs.readFileSync('./localhost.pem'),
// };
// const { auth, requiresAuth } = require('express-openid-connect');
// const config = {
//   authRequired: false,
//   auth0Logout: true,
//   secret: 'a long, randomly-generated string stored in env',
//   baseURL: 'https://localhost:8000',
//   clientID: 'spvFR3hekTCoajKUwC1DinYBuimjO18z',
//   issuerBaseURL: 'https://dev-aqyh6g1cz81cmqbm.us.auth0.com'
// };
// app.use(auth(config));
// app.get('/', (req, res) => {
//   res.send(req.oidc.isAuthenticated() ? 'Logged in' : 'Logged out');
// });
// app.get('/profile', requiresAuth(), (req, res) => {
//   res.send(JSON.stringify(req.oidc.user));
// });
// https
//   .createServer(options, app)
//   .listen(PORT, () => console.log(`Example app listening on port ${PORT}!`));
