const express = require("express");
const { notes } = require("./Develop/db/db.json");

const app = express();

app.get("/api/notes", (req, res) => {
  res.json(notes);
  console.log(notes);
});

app.listen(3001, () => {
  console.log(`API server listening on port 3001!`);
});
