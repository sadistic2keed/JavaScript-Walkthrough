const readlineSync = require("readline-sync");
const number = Number(readlineSync.question("Enter a number: "));

const anum = number % 2;

if (anum === 0 ) {
    console.log( ` ${number} is positive ` );
}
else {
    console.log( ` ${number} is negative `);
}