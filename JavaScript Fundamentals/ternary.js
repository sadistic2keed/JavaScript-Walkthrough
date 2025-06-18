// condition ? yes : no

const readlineSync = require("readline-sync");
const marks = Number(readlineSync.question("Enter your marks: "));

(marks < 40) ? console.log("Work hard") : (marks < 60) ? console.log("Nice") : (marks < 80) ? console.log("alright") : (marks <= 100) ? console.log("noice") : console.log("Invalid");