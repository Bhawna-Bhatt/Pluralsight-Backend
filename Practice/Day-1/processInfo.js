// Use the process object to access and print the required information:
// process.version to get the Node.js version.
// process.platform to identify the operating system.
// process.pid to find the process ID.

// console.log(process.version);
// console.log(process.platform);
// console.log(process.pid);

function memUsage() {
  let count = 1;
  setInterval(() => {
    console.log(`Memory Usage: `, process.memoryUsage());
  }, 5000);
}
memUsage();
