const router = require("express").Router();

module.exports = db => {
  router.get("/careers", (request, response) => {
    db.query(
      `SELECT * FROM careers`
    ).then(({ rows: careers }) => {
      response.json(careers);
    });
  });

  return router;
};
