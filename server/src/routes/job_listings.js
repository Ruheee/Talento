const router = require("express").Router();

module.exports = db => {
  router.get("/job_listings", (request, response) => {
    db.query(
      `SELECT * FROM job_listings`
    ).then(({ rows: job_listings }) => {
      response.json(job_listings);
    });
  });

  return router;
};
