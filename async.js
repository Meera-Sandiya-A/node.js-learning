// ASync vs Sync

// // Synchronous code executed line by line
// console.log("hello");
// console.log("hello1");
// console.log("hello2");

// console.log("start operation");

// function sleep(milliseconds) {
//   let startTime = new Date().getTime();
//   console.log("operation is running");
//   while (new Date().getTime() < startTime + milliseconds) {
//     console.log("in progress");
//   }
//   console.log("operation done");
// }
// sleep(1000);

// console.log("do something");

// // Asynchronous code
// console.log("start operation");

// function sleep(milliseconds) {
//   console.log("operation is running");

//   setTimeout(()=>{
//     console.log("operation done");
//   }, milliseconds)
//     console.log("in progress");
// }
// sleep(1000);

// console.log("do something");
