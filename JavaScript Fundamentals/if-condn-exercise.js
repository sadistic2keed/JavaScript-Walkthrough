// A program to read 3 strings and print the smallest


const readlineSync = require("readline-sync");
const a = readlineSync.question("Enter first string: ");
const b = readlineSync.question("Enter second string: ");
const c = readlineSync.question("Enter third string: ");


if (a.length < b.length && a.length < c.length ) {
    console.log(a);
}
else if (b.length < a.length && b.length < c.length) {
    console.log(b);
}
else if (c.length < a.length && c.length < b.length) {
    console.log(c);
}
else {
    console.log("Invalid or some strings are equal");
}
