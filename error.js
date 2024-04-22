// Error Handling

// // Error Objects
// const error = new Error("Something wrong");
// // console.log(error.stack)
// // console.log(error.message);
// throw new Error("Something wrong throw")

// Cusstom Error
const { CustomError } = require("./CustomError");
// throw new CustomError("this is custom error object")

// // Handle exception using try and catch
// try{
//     doSomething();
// } catch(err) {
//     console.log("Error Occurred:", err)
// }

function doSomething() {
  console.log("I am from doSomething()");
//   const data = fetch("localhost:300/api");
//   console.log(data);
}

// // Uncaught Exception
// process.on("uncaughtException", err =>{
//     console.log("There was an uncaught exception", err);
//     process.exit(1)
// })

// doSomething();

// // Exceptions with promises
// const promise = new Promise((resolve, reject) => {
//   if (false) {
//     resolve(doSomething());
//   } else {
//     reject(doSomething());
//   }
// });

// promise
//   .then((val) => {
//     console.log(val);
//   })
//   .catch((err) => {
//     console.log("error occured:", err);
//   });

// Exception with async/await
const someFunction = async ()=>{
    try{
        await doSomething();
    } catch (err){
        throw new CustomError(err.message)
    }
};
someFunction()