const readline = require("readline");
const prompt = require("prompt-sync");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,

})

// rl.question(`what is your name?`, (name)=> {
//     console.log(`hi ${name}`);
//     rl.close()
// })

const name1 = prompt("What is your name?");
console.log(`Hi ${name1}`);