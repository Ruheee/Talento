const router = require("express").Router();

module.exports = db => {
  router.get("/matches", (request, response) => {
    db.query(
      `SELECT * FROM matches`
    ).then(({ rows: matches }) => {
      response.json(matches);
    });
  });

  router.post("/matches", (request, response) => {
    db.query(
      `INSERT INTO matches (job_seeker_id, job_listing_id, seeker_status, employer_status)
      VALUES ($1, $2, $3, $4)
      ON CONFLICT (job_listing_id, job_seeker_id)
      DO UPDATE SET seeker_status = $3, employer_status = $4`,
      [request.body.job_seeker_id, request.body.job_listing_id, request.body.seeker_status, request.body.employer_status]
    ).then(() => {
      response.json('success');
    });
  });

  return router;
};
