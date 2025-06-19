// AND &&
// OR ||
// NOT !
// NULLISH COALESCING ??

// const name = "manas"
// const nickname = "sanoj";

// const username = name || nickname;


// console.log(Boolean("Manas")) //true

// console.log(Boolean("")); //false
// console.log(Boolean(null)); //false
// console.log(Boolean(undefined)); //false

const a = '';
const b = 2;
console.log(a || b);

const name = "Manash";
const nickname = "Sanoj";

const username = name && nickname; //prints sanoj
// const username = name || nickname; //prints Manash

console.log(`Name - ${username}`);