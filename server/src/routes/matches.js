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

    console.log(request.body);

    if (request.body.employer_status === null) {
      return db.query(
        `INSERT INTO matches (job_listing_id, seeker_status)
        VALUES ($1, $2)
        ON CONFLICT (job_listing_id)
        DO UPDATE SET seeker_status = $2`,
        [request.body.job_listing_id, request.body.seeker_status]
      ).then(() => {
        response.json('success');
      });
    }

    if (request.body.seeker_status === null) {
      return db.query(
        `INSERT INTO matches (job_seeker_id, employer_status)
        VALUES ($1, $2)
        ON CONFLICT (job_seeker_id)
        DO UPDATE SET employer_status = $2`,
        [request.body.job_seeker_id, request.body.employer_status]
      ).then(() => {
        response.json('success');
      });
    }
  });

  return router;
};
