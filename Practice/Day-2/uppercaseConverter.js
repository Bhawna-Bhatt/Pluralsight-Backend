const fs = require("fs");

const read = fs.readFile("input.txt", "utf-8", (err, data) => {
  if (err) {
    console.log(err);
  } else {
    dataToUppercase = data.toUpperCase();
    fs.writeFile("output.txt", dataToUppercase, () => {
      console.log("File saved!");
    });
  }
});
