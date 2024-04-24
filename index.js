// console.log("This is Nodejs Learniang")
// console.log("This is Nodejs Learadning")
// console.log("This is Nodejs Leardaning")
// // process.exit(1)

// const _ = require("lodash")
// const arr = [1,2,3,4];
// console.log(_.last(arr))

// const cowsay = require("cowsay");
// console.log(
//     cowsay.say({
//         text: "I am Learning NPM module",
//         e: "^^",
//         t: "U"
//     })
// )

// const data = require("./arguments")
// console.log(data)

// const {data} = require("./arguments")
// console.log(data);

// const {car, car2} = require("./arguments")
// console.log(car)
// console.log(car2)
// console.log(JSON.stringify(car, undefined, 1))

// Node js Path Module
const path = require("path");

const filePath = "C:UsersSmileDesktop\node.js-learning\files\newText.txt";

// // dirname
// console.log(path.dirname(filePath));
// console.log(__dirname)

// // basename
// console.log(path.basename(filePath))
// console.log(__filename)

// // extension
// console.log(path.extname(filePath))

// const sampleFile = "sample.txt";

// console.log(path.join(path.dirname(filePath), sampleFile))

const fs = require("fs");
const fsPromise = require("fs").promises;

// // Reading file from Callback - Async
// fs.readFile(path.join(__dirname,"files", "sample.txt"),"UTF-8", (err, data) => {
//   if (err) throw new Error("Something went wrong..", err);
//   console.log(data.toString());
// });

// // Reading file - Sync
// try{
//   const data = fs.readFileSync(path.join(__dirname,"files", "sample.txt"), "UTF-8");
//   console.log(data);
// } catch(err){
//   console.log(err)
// }

// // Reading file - Promises(Async/ Await)
// const fileReading = async () => {
//   try {
//     const data = await fsPromise.readFile(path.join(__dirname,"files", "sample.txt"), { encoding: "utf-8" });
//     console.log(data);
//   } catch (err) {
//     console.log(err);
//   }
// };

// fileReading()

// // Write file from Callback - Async
const textFile = path.join(__dirname, "files", "newText.txt");
const content = "I love node js";

// fs.writeFile(textFile, content, (err) => {
//   if (err) throw new Error("Something went wrong..", err);
//   console.log("Succesfully written");

//   // // Nested Operations in Callback-hell
//   fs.readFile(textFile, "utf-8", (err, data) => {
//     if (err) throw new Error(err);

//     console.log(data);
//   });
// });

// // Nested Operations using Promises(Async/ Await)
// const writingInFile = async () => {
//   try {
//     await fsPromise.writeFile(textFile, "\n Hello Node js", {
//       // Options object with flag at the end
//       flag: "a+",
//     });
//     await fsPromise.appendFile(textFile, "\n This is append file")
//     await fsPromise.appendFile(textFile, "\n This is append file1")

//     await fs.promises.rename(textFile, path.join(__dirname, "files", "newText.txt"))
//     const data = await fsPromise.readFile(textFile, "utf-8")
//     console.log(data);
//   } catch (err) {
//     console.log(err);
//   }
// };
// writingInFile();
