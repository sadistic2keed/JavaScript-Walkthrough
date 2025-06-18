// const readlineSync = require("readline-sync");

// const number = Number(readlineSync.question("What is the number: "));

// if (number>19) {
//     console.log("its nice");
// }
// else {
//     console.log("its not nice");
// }






const readlineSync = require("readline-sync");

const number = Number(readlineSync.question("Enter your number: "));

const after3 = number % 3;
const after5 = number % 5;

if ( after3 === 0 && after5 === 0) {
    console.log("Yay");
}
else {
    console.log("Nay");
}
