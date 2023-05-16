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
      `SELECT * FROM messages`
    ).then(({ rows: messages }) => {
      console.log(res.json(messages));
    });
  })

  return router;
};



