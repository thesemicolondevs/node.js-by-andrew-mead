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

const command = process.argv[2];

console.log(process.argv);

if (command === "add") {
  console.log(chalk.green("Adding note!"));
} else if (command === "remove") {
  console.log(chalk.red("Removing note!"));
} else {
  console.log(chalk.blueBright("Command not recognized!"));
}
