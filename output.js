// %s format variable to string
// %d format variable to number
// %i format variable to integer
// %o format variable to Object

// console.log("I am %s and my age is %d", "meera", 23);
// console.clear();

// console.count("hello")
// console.count("hello")
// console.count("hello")
// console.count("hi")

// console.countReset("hello")
// console.count("hello")

// const function1 = ()=> console.trace();
// const function2 = ()=> function1();

// function2();

// const sum = ()=> console.log(`sum 2 and 3 is ${2+3}`)
// const multiple = ()=> console.log(`multiple 2 and 3 is ${2*3}`)

// const measureTime = ()=>{
//     console.time("sum()");
//     sum();
//     console.timeEnd("sum()");

//     console.time("multiple()");
//     multiple();
//     console.timeEnd("multiple()");
// }
// measureTime()

// progress bar

const ProgressBar = require("progress");

const bar = new ProgressBar("downloading [:bar] :rate/bps :percent :etas", {
    total: 20,
})
const timer = setInterval(() => {
   bar.tick();
   if(bar.complete){
    clearInterval(timer)
   } 
}, 100);

const chalk = require("chalk");
console.log(chalk.yellow("download completed"))