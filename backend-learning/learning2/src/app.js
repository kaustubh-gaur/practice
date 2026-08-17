const express = require("express");
const noteModel = require("./models/note.model");

const app = express();
app.use(express.json());

/*
CRUD operation:

Create : POST
Read :   GET
Update : PATCH
Delete : DELETE

*/

app.post("/notes", async (req, res) => {
  const data = req.body;
  await noteModel.create({
    title: data.title,
    description: data.description,
  });
  res.status(201).json({
    message: "Note created successfully.",
  });
});

app.get("/notes", async (req, res) => {
  const title = req.query.title;
  const notes = await noteModel.find({
    title,
  });
  res.status(200).json({
    message: "Note fetched successfully.",
    notes: notes,
  });
});

app.delete("/notes/:id", async (req, res) => {
  const id = req.params.id;
  await noteModel.findOneAndDelete({
    _id: id,
  });
  res.status(200).json({
    message: "Note deleted successfully",
  });
});

app.patch("/notes/:id", async (req, res) => {
  const id = req.params.id;
  const description = req.body.description;
  await noteModel.findOneAndUpdate(
    {
      _id: id,
    },
    {
      description: "changed description",
    },
  );

  res.status(200).json({
    message: "Note updated successfully",
  });
});
module.exports = app;
