const router = require("express").Router();

module.exports = db => {
  router.get("/job_listings", (request, response) => {
    db.query(
      `SELECT t1.*, t2.company_name AS employer_name, t2.company_logo AS employer_logo
      FROM job_listings t1
      JOIN employers t2 ON t2.id = t1.employer_id`
    ).then(({ rows: job_listings }) => {
      response.json(job_listings);
    });
  });

  return router;
};
