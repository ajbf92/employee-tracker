const db = require("../db/connection");
const inquirer = require("inquirer");
const cTable = require("console.table");

function viewDepartments() {
  const initHome = require("./home");
  const sql = `SELECT id, dept_name AS Department FROM departments;`;

  //   db.query(sql, (err, rows) => {
  //     if (err) {
  //       console.log(err);
  //       return;
  //     }
  //     console.log([rows]);
  //     initHome();
  //   });

  db.promise()
    .query(sql)
    .then(([rows]) => {
      console.table(rows);
      initHome();
    })
    .catch((err) => {
      if (err) throw err;
    });
}

function newDepartment() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "department",
        message: "Please enter the name of the new department.",
      },
    ])
    .then((answer) => {
      const sql = `INSERT INTO departments (dept_name)
        VALUES (?);`;
      const newDept = answer.department;
      db.promise()
        .query(sql, newDept)
        .then(
          console.log(`
        =================================
        SUCCESSFULLY ADDED NEW DEPARTMENT
        =================================
        `),
          viewDepartments()
        )
        .catch((err) => {
          if (err) throw err;
        });
    });
}

module.exports = { viewDepartments, newDepartment };
