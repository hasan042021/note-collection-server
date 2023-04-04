const asyncHandler = require("express-async-handler");
const Note = require("../models/noteModel");
const getNotes = asyncHandler(async (req, res) => {
  console.log(req.user);
  const notes = await Note.find({ user: req.user._id });
  console.log(notes);
  res.json(notes);
});

const createNote = asyncHandler(async (req, res) => {
  const { title, content, category } = req.body;
  if (!title || !content || !category) {
    throw new Error("Please fill up the form");
  } else {
    const newNote = new Note({
      user: req.user._id,
      title,
      content,
      category,
    });
    const createdNote = await newNote.save();
    res.status(201).json(createdNote);
  }
});

const getNoteById = asyncHandler(async (req, res) => {
  const note = await Note.findById(req.params.id);
  if (note) {
    res.json(note);
  }
  res.status(404).json({ message: "note not found" });
});

const updateNote = asyncHandler(async (req, res) => {
  const { title, category, content } = req.body;
  const note = await Note.findById(req.params.id);

  if (note) {
    if (note.user.toString() !== req.user._id.toString()) {
      res.status(401);
      throw new Error("You can not perform this action");
    }
    note.title = title;
    note.content = content;
    note.category = category;

    const updatedNote = await note.save();
    res.json(updatedNote);
  }
  res.status(404);
  throw new Error("Note not found");
});

const deleteNote = asyncHandler(async (req, res) => {
  console.log(req.params.id);
  const note = await Note.findById(req.params.id);
  console.log(note);
  if (note) {
    if (note.user.toString() !== req.user._id.toString()) {
      res.status(401);
      throw new Error("You can not perform this action");
    }
    await note.remove();
    res.json({ message: "note removed" });
  } else {
    res.status(404);
    throw new Error("Note not found");
  }
});

module.exports = { getNotes, createNote, getNoteById, updateNote, deleteNote };
