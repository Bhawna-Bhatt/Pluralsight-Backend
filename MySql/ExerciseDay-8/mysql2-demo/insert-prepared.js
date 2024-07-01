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

  const sql2 =
    "INSERT INTO actor (actor_id,first_name,last_name,last_update) VALUES (?, ?,?,?)";
  const values = [1991, "Bhawna", "Doe", "2006-02-15"];
  connection.query(sql2, values, (err, results) => {
    if (err) {
      console.error("Error executing query:", err.stack);
      return;
    }
    console.log("Insert results:", results);
  });

  connection.end();
});
