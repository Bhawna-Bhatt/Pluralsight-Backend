console.log("Hello, Node.js!");
console.log(process.version);
const buffer = Buffer.from("Hello, World!");
console.log(buffer.toString()); // Outputs: 'Hello, World!'
console.log(__dirname); // Outputs the path of the current directory
console.log(__filename); // Outputs the path of the current file
console.log("Debugging information");
exports.myFunction = function () {
  console.log("Hello, Module!");
};
