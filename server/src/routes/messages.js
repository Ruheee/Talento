const router = require("express").Router();

module.exports = db => {
  router.get("/messages", (request, response) => {
    db.query(
      `SELECT * FROM messages`
    ).then(({ rows: messages }) => {
      response.json(messages);
    });
  });

  router.post("/messages", (req, res) => {
    db.query(
      `
      INSERT INTO messages (user_id, message, time_stamp)
      VALUES ($1, $2, $3)
      `, [req.body.user_id, req.body.message, req.body.time_stamp])
      .then(({ rows: messages }) => {
      console.log(res.json(messages));
    });
  })

  return router;
};



