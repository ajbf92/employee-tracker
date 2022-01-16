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

module.exports = { viewDepartments };
