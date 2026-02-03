const Note = require("../models/Note");

const displayNotes = async (req, res) => {
  try {
    const notes = await Note.find().sort({ updatedAt: -1 });
    res.json(notes);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const displaySearchedNotes = async (req, res) => {
  try {
    const { q } = req.query;

    // handle when nothing is passed in query
    if (!q || q.trim().length === 0) {
      return res.status(400).json({ error: "Search query 'q' is required" });
    }

    const searchTerm = q.trim();

    const notes = await Note.find({
      $or: [
        { title: { $regex: searchTerm, $options: "i" } },
        { content: { $regex: searchTerm, $options: "i" } },
      ],
    });

    res.json(notes);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const createNotes = async (req, res) => {
  try {
    const { title, content } = req.body;

    // check the content is not empty
    if (!title || title.trim().length === 0) {
      return res.status(400).json({ error: "Title cannot be empty" });
    }
    if (!content || content.trim().length === 0) {
      return res.status(400).json({ error: "Content cannot be empty" });
    }

    const newNote = await Note.create({
      title: title.trim(),
      content: content.trim(),
    });

    res.status(201).json(newNote);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

const updateNotes = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, content } = req.body || {};

    // find the existing note to update
    const note = await Note.findById(id);
    if (!note) return res.status(404).json({ error: "Note not found" });

    // check if anything is even changed or not
    const newTitle = title ? title.trim() : note.title;
    const newContent = content ? content.trim() : note.content;

    const isTitleChanged = newTitle !== note.title;
    const isContentChanged = newContent !== note.content;

    // if nothing changed then
    if (!isTitleChanged && !isContentChanged) {
      return res
        .status(200)
        .json({ message: "No changes detected. Note was not updated." });
    }

    note.title = newTitle;
    note.content = newContent;
    await note.save();

    res.json(note);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

module.exports = {
  displayNotes,
  displaySearchedNotes,
  createNotes,
  updateNotes,
};
