// select-prepared.js
const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Ldbb@133385",
  database: "sakila",
});

connection.connect((err) => {
  if (err) {
    console.error("Error connecting to the database:", err.stack);
    return;
  }
  console.log("Connected to the database");

  const sql = "SELECT * FROM actor";
  connection.query(sql, (err, results) => {
    if (err) {
      console.error("Error executing query:", err.stack);
      return;
    }
    console.log("Query results:", results);
  });

  connection.end();
});
