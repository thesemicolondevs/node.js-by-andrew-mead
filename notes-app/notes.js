const chalk = require("chalk");
const fs = require("fs");

const getNotes = () => "Your Notes...";

/**
 * @function addNotes
 * @param {title} title of the note
 * @param {body} body of the note
 * @usage this function will add notes & store it into json file
 */
const addNote = (title, body) => {
  const notes = loadNotes();
  const duplicateNotes = notes.filter((note) => note.title == title);

  if (duplicateNotes.length === 0) {
    notes.push({
      title,
      body,
    });

    saveNotes(notes);
    console.log(chalk.green("New note added 😍."));
  } else {
    console.log(chalk.red("Opps, note already exists 😢."));
  }
};

/**
 * @function removeNote
 * @param {title} title of the note
 * @usage this function will remove note from json file
 */
const removeNote = (title) => {
  const notes = loadNotes();
  const notesToKeep = notes.filter((note) => note.title != title);

  if (notes.length > notesToKeep.length) {
    saveNotes(notesToKeep);
    console.log(chalk.green("Note removed 👌."));
    saveNotes(notesToKeep);
  } else {
    console.log(chalk.red("Opps, note doesn't exist 😢."));
  }
};

/**
 * @function saveNotes
 * @param {notes} notes are the data from json file
 * @usage this function will save notes into json file
 */
const saveNotes = (notes) => {
  const dataJSON = JSON.stringify(notes);

  fs.writeFileSync("./notes-app/notes.json", dataJSON);
};

/**
 * @function loadNotes
 * @returns {Array} array of notes
 * @usage this function will load notes from json file
 */
const loadNotes = () => {
  try {
    const dataBuffer = fs.readFileSync("./notes-app/notes.json");
    const dataJSON = dataBuffer.toString();

    return JSON.parse(dataJSON);
  } catch (e) {
    return [];
  }
};

module.exports = { getNotes, addNote, removeNote };
