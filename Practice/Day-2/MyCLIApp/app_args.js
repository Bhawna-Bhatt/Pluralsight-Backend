//Command-line arguments are passed to Node.js applications via process.argv.
// This array contains the full command-line execution path. The first element
// is the path to the Node.js executable, the second is the path to the executed
// script, and the subsequent elements are the additional command-line arguments.
console.log(process.argv);

const args = process.argv.slice(2);
console.log("Arguments:", args.join(" "));
