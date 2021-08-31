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
yargs.command({
  command: "add",
  describe: "Add a new note",
  handler: () => {
    console.log("Adding a new note!");
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
