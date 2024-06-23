const fs = require("fs");

//check if write file already exists
if (fs.existsSync("modifiedData.json")) {
  fs.unlink("modifiedData.json", () => {
    console.log("Deleted existing file");
  });
}

try {
  const data = fs.readFileSync("data.json", "utf-8");

  let splitRecord = data.split("}");

  for (let i = 0; i < splitRecord.length - 1; i++) {
    // get the property to be appened to json
    let currentDate = Date();
    let newProperty = `,"updatedAt": "${currentDate}"}`;

    let newRecord = splitRecord[i] + newProperty;

    fs.appendFileSync("modifiedData.json", newRecord, "utf-8", () => {
      console.log("Json modified");
    });
  }
  fs.appendFileSync("modifiedData.json", "]", "utf-8", () => {
    console.log("Bracket added");
  });
} catch (err) {
  console.log(err);
} finally {
  console.log("Json Updated");
}
