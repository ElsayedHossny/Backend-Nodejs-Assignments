const path = require("node:path");
const fs = require("node:fs");
const os = require("node:os");
const { EventEmitter } = require("node:events");
const emitter = new EventEmitter();

///////////////////////////////////////////////////////////////////////////////////////////////////////////

// 1- Write a function that logs the current file path and directory.(0.5 Grade)
// function Ex1() {
//   const Ex1 = path.resolve();
//   console.log(Ex1);
//   console.log(path.dirname(Ex1));
// }
// Ex1();

///////////////////////////////////////////////////////////////////////////////////////////////////////////

// 2- Write a function that takes a file path and returns its file name.(0.5 Grade)
// function Ex2(FilePath) {
//   return path.basename(FilePath);
// }
// const fileName = Ex2("/user/files/report.pdf");
// console.log(fileName);

///////////////////////////////////////////////////////////////////////////////////////////////////////////

// 3- Write a function that builds a path from an object (0.5 Grade)
// function Ex3(obj) {
//   console.log(path.format(obj));
// }
// Ex3({ dir: "/folder", name: "app", ext: ".js" });

///////////////////////////////////////////////////////////////////////////////////////////////////////////

// 4. Write a function that returns the file extension from a given file path.(0.5 Grade)
// function Ex4(p) {
//   return path.extname(p);
// }
// console.log(Ex4("/docs/readme.md"));

///////////////////////////////////////////////////////////////////////////////////////////////////////////

// 5. Write a function that parses a given path and returns its name and ext.(0.5 Grade)
// function Ex5(p) {
//   return { Name: path.basename(p, ".js"), Ext: path.extname(p) };
// }
// const obj = Ex5("/home/app/main.js");
// console.log(obj);

///////////////////////////////////////////////////////////////////////////////////////////////////////////

// 6. Write a function that checks whether a given path is absolute.(0.5 Grade)
// function Ex6(p) {
//   console.log(path.isAbsolute(p));
// }
// Ex6("/home/user/file.txt");

///////////////////////////////////////////////////////////////////////////////////////////////////////////

// 7. Write a function that joins multiple segments (0.5 Grade)
// function Ex7(...arr) {
//   console.log(path.join(...arr));
// }
// Ex7("src", "components", "App.js");

///////////////////////////////////////////////////////////////////////////////////////////////////////////

// 8. Write a function that resolves a relative path to an absolute one.(0.5 Grade)
// function Ex8(pa) {
//   console.log(path.resolve(pa));
// }
// Ex8("./index.js");

///////////////////////////////////////////////////////////////////////////////////////////////////////////

// 9. Write a function that joins two paths.(0.5 Grade)
// function Ex9(p1, p2) {
//   console.log(path.join(p1, p2));
// }
// Ex9("/folder1", "folder2/file.txt");

///////////////////////////////////////////////////////////////////////////////////////////////////////////

// 10. Write a function that deletes a file asynchronously.(0.5 Grade)
// function Ex10(pa) {
//   fs.unlink(pa, (err) => {
//     if (err) throw err;
//   });
//   console.log("The file.txt is deleted.");
// }
// Ex10("text.txt");

///////////////////////////////////////////////////////////////////////////////////////////////////////////

// 11. Write a function that creates a folder synchronously.(0.5 Grade)
// function Ex11(pa) {
//   fs.mkdirSync(pa, { recursive: true });
// }
// Ex11("Project1/sayed");

///////////////////////////////////////////////////////////////////////////////////////////////////////////

// 12. Create an event emitter that listens for a "start" event and logs a welcome message.(0.5 Grade)
// emitter.on("start", () => {
//   console.log("Welcome event triggered!");
// });
// emitter.emit("start");

///////////////////////////////////////////////////////////////////////////////////////////////////////////

// 13. Emit a custom "login" event with a username parameter.(0.5 Grade)
// emitter.on("login", (user) => {
//   console.log(`"User logged in: ${user}"`);
// });
// emitter.emit("login", "Elsayed");

///////////////////////////////////////////////////////////////////////////////////////////////////////////

// 14. Read a file synchronously and log its contents.(0.5 Grade)
// const data = fs.readFileSync("./notes.txt", "utf8");
// console.log(`the file content => "${data}"`);

///////////////////////////////////////////////////////////////////////////////////////////////////////////

// 15. Write asynchronously to a file.(0.5 Grade)
// const data = `path: "./async.txt",content: "Async save",`;
// fs.writeFile("File-Ex15.txt", data, "utf8", (err) => {
//   if (err) throw err;
//   console.log("Data is sucess Add");
// });

///////////////////////////////////////////////////////////////////////////////////////////////////////////

// 16. Check if a directory exists. (0.5 Grade)
// console.log(fs.existsSync("./notes.txt"));

///////////////////////////////////////////////////////////////////////////////////////////////////////////

// 17. Write a function that returns the OS platform and CPU architecture. (0.5 Grade)
// function Ex17() {
//   return {
//     Platform: os.platform(),
//     Arch: os.arch(),
//   };
// }
// console.log(Ex17());

///////////////////////////////////////////////////////////////////////////////////////////////////////////

// 18. Use a readable stream to read a file in chunks and log each chunk. (0.5 Grade)
// • Input Example: "./big.txt"
// • Output Example: log each chunk

///////////////////////////////////////////////////////////////////////////////////////////////////////////

// 19. Use readable and writable streams to copy content from one file to another. (0.5 Grade)
// • Input Example: "./source.txt", "./dest.txt"
// • Output Example: File copied using streams

///////////////////////////////////////////////////////////////////////////////////////////////////////////

// 20. Create a pipeline that reads a file, compresses it, and writes it to another file. (0.5 Grade)
// • Input Example: "./data.txt", "./data.txt.gz"
