// Callbacks Async
// console.log("Task Start");
// function asyncTask(cb){
//     console.log("Task running")
//     setTimeout(cb, 0)
// }
// asyncTask(()=> console.log(name))
// console.log("task end");
// const name = "Meera"

// // Callbacks while handling errors
// function asyncTask(cb){
//     setTimeout(()=>{
//         // cb("!Error")
//         cb(null, "This is data from server")
//     },0)
// }

// asyncTask((err, data)=>{
//     if(err){
//         throw new Error(err);
//     } else{
//         console.log("data", data)
//     }
// })

// // Callback Hell
// function makeApiCall(cb) {
//   setTimeout(() => {
//     console.log("This is Async task execution");

//     setTimeout(() => {
//         console.log("This is Async task execution1");

//         setTimeout(() => {
//             console.log("This is Async task execution2");
//           }, 5000);
//       }, 7000);
//   }, 2000);
// }
// makeApiCall(()=>{
//     makeApiCall(()=>{
//         asynTask(()=>{
//             asynTask(()=>{})
//         })
//     })
// });
