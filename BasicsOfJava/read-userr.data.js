const readlinesync = require("readline-sync");
const username = readlinesync.question("What is your name? ");
const userage = readlinesync.question("What is your age? ");

console.log(`Your name is ${username}.`);
console.log(`Your age is ${userage}.`);
