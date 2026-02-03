const express = require("express");
const router = express.Router();
const Note = require("../models/Note");
const notesController = require("../controllers/notesController");
const createLimiter = require("../middlewares/ratelimiter");

// Display all notes in recent updated orders
router.get("/notes", notesController.displayNotes);

// search notes
router.get("/notes/search", notesController.displaySearchedNotes);

// create new notes
router.post("/notes", createLimiter, notesController.createNotes);

// update existing notes
router.put("/notes/:id", notesController.updateNotes);

module.exports = router;
