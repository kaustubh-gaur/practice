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

module.exports = app;
