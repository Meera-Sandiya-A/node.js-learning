// // Promises
// const promise = new Promise((resolve, reject) => {
//   console.log("Async task execution-Promises");
//  throw "err"
//   if (false) {
//     const person = { name: "meera" };
//     resolve(person);
//   } else {
//     const error = { errCode: "404" };
//     reject(error);
//   }
// });

const { reject, values } = require("lodash")

// promise.then(
//   (val) => {
//     console.log(val);
//   }
// //   (err) => {
// //     console.log(err);
// //   }
// )
// .catch(()=> console.log("err"))
// .finally(()=> console.log("clean up"))

// // Another promise example
// // let p = Promise.resolve("execution is done");
// let p = Promise.reject("execution is rejected")

// p.then((val)=> console.log(val), (err)=> console.log(err))

// // return promises
// function asyncTask(){
//     return Promise.resolve()
// }

// asyncTask().then(()=> console.log(name));
// const name = "meera";

// // Promise Chaining
// const p = Promise.resolve("done");

// p.then((val) => {
//   console.log(val);
//   return "done2";
// })
//   .then((val) => {
//     console.log(val);
//     return "done3";
//   })
//   .then((val) => console.log(val))
//   .catch((val) => console.log(val));

// // Promise.all
// const makeApiCall = (time)=>{
//     return new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             resolve("This api executed in:" + time)
//         }, time)
//     })
// }

// let multiApiCall = [makeApiCall(1000), makeApiCall(5000), makeApiCall(100)];

// Promise.all(multiApiCall).then((values) => {
//     console.log(values)
// });

// // promise.race
// Promise.race(multiApiCall).then((values) => {
//     console.log(values)
// });

