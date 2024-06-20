// process.stdout.write(`Calculator Instructions :Please enter the operation
//  followed by number
//  e.g. - add 5 3`);

const args = process.argv.slice(2);

let op = args[0];
let num1 = args[1];
let num2 = args[2];
let ans = 0;

if (!Number.isNaN(num1) && !Number.isNaN(num2)) {
  if (Number.parseFloat(num1) == num1 && Number.parseFloat(num2) == num2) {
    num1 = Number(num1);
    num2 = Number(num2);
    //console.log("changed to number", typeof num1, num2);
  } else {
    console.log("Values are not numbers");
    process.exit();
  }
} else {
  console.log("Values are NaN");
  process.exit();
}

const add = (num1, num2) => {
  ans = num1 + num2;
};
const sub = (num1, num2) => {
  ans = num1 - num2;
};
const mul = (num1, num2) => {
  ans = num1 * num2;
};
const div = (num1, num2) => {
  if (num2 == 0) {
    console.log("The denomitaor is 0. Cannot divide by zero");
    process.exit();
  } else ans = num1 / num2;
};

if (op == "add") {
  add(num1, num2);
} else if (op == "subtract") {
  sub(num1, num2);
} else if (op == "multiply") {
  mul(num1, num2);
} else if (op === "divide") {
  div(num1, num2);
} else {
  process.stdout.write("Please provide correct operation");
  process.exit();
}

process.stdout.write(`The answer is ${ans}`);
