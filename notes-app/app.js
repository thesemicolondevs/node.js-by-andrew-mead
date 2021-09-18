const yargs = require("yargs");
const notes = require("./notes");

/**
 * @custiomize yargs version
 */
yargs.version("1.1.0");

/**
 * @create add command
 */

yargs.command({
  command: "add",
  describe: "Add a new note",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "string",
    },
    body: {
      describe: "Note body",
      demandOption: true,
      type: "string",
    },
  },
  handler: (argv) => {
    notes.addNote(argv.title, argv.body);
  },
});

/**
 * @create remove command
 */
yargs.command({
  command: "remove",
  describe: "Remove a note",
  handler: () => {
    console.log("Removing a note!");
  },
});

/**
 * @create list command
 */
yargs.command({
  command: "list",
  describe: "List your notes",
  handler: () => {
    console.log("List out all your notes!");
  },
});

/**
 * @create read command
 */
yargs.command({
  command: "read",
  describe: "Read a note",
  handler: () => {
    console.log("Reading a note!");
  },
});

yargs.parse();
