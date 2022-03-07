const express = require("express");
const { notes } = require("./Develop/db/db.json");
const PORT = process.env.PORT || 3001;

const app = express();

app.get("/api/notes", (req, res) => {
  res.json(notes);
  console.log(notes);
});

app.listen(PORT, () => {
  console.log(`API server listening on port ${PORT}!`);
});
