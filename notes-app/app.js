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
