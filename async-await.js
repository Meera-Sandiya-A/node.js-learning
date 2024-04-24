// const userLogin = () => {
//   console.log("Enter Username and Password");

//   let username = "meera";
//   let password = "meers";

//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("Performing User Authentication");

//       if (username === "meera" && password === "meera") {
//         resolve("User Authenticated");
//       } else {
//         reject("Authentication Failed!");
//       }
//     }, 1000);
//   });
// };

// const goToHomePage = (userAuthStatus) => {
//   return Promise.resolve(`Go to Homepage as: ${userAuthStatus}`);
// };

// // Promise
// userLogin()
//   .then((response) => {
//     console.log("Validated User");
//     return goToHomePage(response);
//   })
//   .then((userAuthStatus) => {
//     console.log(userAuthStatus);
//   })
//   .catch((err) => {
//     console.log("Not a validated user");
//   });

// // async-await
// const performanceTask = async () => {
//   try {
//     const response = await userLogin();
//     console.log("validated user");
//     const userAuthStatus = await goToHomePage(response);
//     console.log(userAuthStatus);
//   } catch (err) {
//     console.log(err);
//   }
// };
// performanceTask()

// ==========================================================================

// // performance promise vs async await
// const makeApiCall = (time)=>{
//     return ()=> new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             resolve("This api executed in:" + time)
//         }, time)
//     })
// }

// let apiRequests = [makeApiCall(1000), makeApiCall(5000), makeApiCall(100)];

// Promise.all(apiRequests).then((values) => {
//     console.log(values)
// });

// // performance promise vs async await
// (async function (){
//     for(let request of apiRequests){
//         console.log(await request()
//         )
//     }
// })();