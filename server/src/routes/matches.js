const router = require("express").Router();

module.exports = db => {
  router.get("/matches", (request, response) => {
    db.query(
      `SELECT * FROM matches`
    ).then(({ rows: matches }) => {
      response.json(matches);
    });
  });

  return router;
};
