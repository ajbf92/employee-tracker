const mysql = require("mysql2");

// Connect to database
const db = mysql.createConnection(
  {
    // host has to be 127.0.0.1 instead of localhost
    host: "127.0.0.1",
    // Your MySQL username,
    user: "root",
    // Your MySQL password is commented out because I do not use a password
    // password: "",
    database: "employee_tracker",
  },
  console.log("Connected to the employee_tracker database."),
);

module.exports = db;
