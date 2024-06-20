// 1
// function toPrint(timer) {
//   console.log("Hello after " + timer + " seconds");
// }
// let timer = 4;
// setTimeout(toPrint, timer * 1000, timer);
// setTimeout(toPrint, timer * 2000, 2 * timer);

//2
//let count = 1;

// const intervalId = setInterval(() => {
//   console.log("hello world!");
//   count++;
//   if (count === 6) {
//     console.log("done");
//     clearInterval(intervalId);
//   }
// }, 1000);

//do challenges from file 1-9

//Challenge 1:

//Print "Hello World" forever. Starting with a delay of 1 second
//but then incrementing the delay by 1 second each time.
// The second time will have a delay of 2 seconds
// The third time will have a delay of 3 seconds.

// Include the delay in the printed message
// Hello World. 1
// Hello World. 2
// Hello World. 3
// ...

// Constraints: You can only use const (no let or var)

const greeting = (delay) =>
  setTimeout(() => {
    console.log("Hello World. " + delay);
    greeting(delay + 1);
  }, delay * 1000);

greeting(1);

// Challenge 2:

// Just like Challenge 1 but this time with repeated delay values.
// Print Hello World 5 times with a delay of 100 ms.
// Then Print it again 5 more times with a delay of 200 ms.
// Then print it again 5 more times with a delay of 300 ms.
// And so on until the program is killed.

// Include the delay in the printed message:
// Hello World. 100
// Hello World. 100
// Hello World. 100
// Hello World. 100
// Hello World. 100
// Hello World. 200
// Hello World. 200
// Hello World. 200
// ...

// Constraints:
//  - Only use setInterval (not setTimeout)
//  - Use only ONE if statement
