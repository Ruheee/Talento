const router = require("express").Router();

module.exports = db => {
  router.get("/favourites", (request, response) => {
    db.query(
      `SELECT * FROM favourites`
    ).then(({ rows: favourites }) => {
      response.json(favourites);
    });
  });

  return router;
};
