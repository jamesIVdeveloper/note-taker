const express = require("express");
const { notes } = require("./Develop/db/db.json");
const PORT = process.env.PORT || 3001;
const path = require("path");

const app = express();

app.use(express.static("./Develop/public"));

app.get("/api/notes", (req, res) => {
  res.json(notes);
  console.log(notes);
});

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "./Develop/public/index.html"));
});

app.get("/notes", (req, res) => {
  res.sendFile(path.join(__dirname, "./Develop/public/notes.html"));
});

app.listen(PORT, () => {
  console.log(`API server listening on port ${PORT}!`);
});
