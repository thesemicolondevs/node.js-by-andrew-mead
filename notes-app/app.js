const yargs = require("yargs");
const chalk = require("chalk");
const getNotes = require("./notes");

const msg = getNotes();

console.log(msg);

/**
 * @author: @adityatheoctocatdev
 *
 * @challenge
 * @description: a simple challange that prints the colorized message
 * 1. install latest version of chalk
 * 2. load chalk in app.js
 * 3. use it to print "Success!" to the console in green
 * 4. use docs to mess around with the other styles. make text bold & inversed.
 * 5. test your work
 */

const greenMsg = chalk.green.inverse.bold("Success!");
console.log(greenMsg);

console.log(yargs.argv);

/**
 * @custiomize yargs version
 */
yargs.version("1.1.0");

/**
 * @create add command
 */

/**
 * @author: @adityatheoctocatdev
 *
 * @challenge
 * @description: add a option to yargs
 * 1. setup a body option for the add command
 * 2. configure description, make it required, and for it to be a string
 * 3. log the body value in the handler function
 * 4. test your work
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
    console.log(chalk.blueBright("\nAdding a new note!"));
    console.log(
      `Title: ${chalk.green(argv.title)}\nBody: ${chalk.green(argv.body)}`,
    );
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
 * @author: @adityatheoctocatdev
 *
 * @challange
 * @description: create two commands, one to list notes, one to read a note
 * 1. create a command to list notes
 * 2. create a command to read a note
 * 3. test your work
 */

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
