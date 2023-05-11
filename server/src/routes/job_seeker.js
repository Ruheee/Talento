const router = require("express").Router();

module.exports = db => {
  router.get("/job_seekers", (request, response) => {
    db.query(
      `SELECT * FROM job_seekers`
    ).then(({ rows: job_seekers }) => {
      response.json(job_seekers);
    });
  });

  return router;
};
