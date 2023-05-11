const router = require("express").Router();

module.exports = db => {
  router.get("/employers", (request, response) => {
    db.query(
      `SELECT * FROM employers`
    ).then(({ rows: employers }) => {
      response.json(employers);
    });
  });

  return router;
};
