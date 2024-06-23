//For more interactive applications, process.stdin.on allows the
// program to handle input dynamically, responding to user input events.

process.stdout.write("What is your name? ");

process.stdin.on("data", (data) => {
  const name = data.toString().trim();
  process.stdout.write(`Hello ${name} !`);
  process.exit();
});
