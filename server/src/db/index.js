const pg = require("pg");

const client = new pg.Client({
  host: process.env.PGHOST || 'localhost',
  port: process.env.PGPORT || 5432,
  database: process.env.PGDATABASE || 'talentodev',
  user: process.env.PGUSER,
  password: process.env.PGPASSWORD,
});

client
  .connect()
  .then(() => console.log("Connected to Postgres server."))
  .catch(e => console.log(`Error connecting to Postgres server:\n${e}`));

module.exports = client;
