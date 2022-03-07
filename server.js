const express = require("express");
const { notes } = require("./Develop/db/db.json");
const PORT = process.env.PORT || 3001;
const path = require("path");
const { createNewNote, findById } = require("./lib/notes.js");

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

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

app.post("/api/notes", (req, res) => {
  req.body.id = notes.length.toString();

  const note = createNewNote(req.body, notes);
  res.json(note);
});
/*
app.delete("api/notes/:id", function (req, res) {
  const result = findById(req.params.id, notes);
  if (result) {
    notes.remove(result);
  } else {
    res.send(404);
  }
});
*/
app.listen(PORT, () => {
  console.log(`API server listening on port ${PORT}!`);
});
