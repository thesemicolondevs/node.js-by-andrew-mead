const fs = require("fs");

fs.writeFileSync("notes.txt", "My Name is Aditya.");

/*
  @[Challange 1]: Append a message to notes.txt

  @[Steps]
  1) use appendFileSync to append in the file
  2) Run the script
  3) Check your work by opening the file & viewing the appended text
*/

fs.appendFileSync("notes.txt", " I live in India.");
