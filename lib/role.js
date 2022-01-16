const db = require("../db/connection");
const inquirer = require("inquirer");
const cTable = require("console.table");

function viewRoles() {
  const initHome = require("./home");
  const sql = `SELECT roles.id, roles.title, roles.salary,
   dept_name AS Department FROM roles LEFT JOIN departments on roles.department_id = departments.id;`;

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

module.exports = { viewRoles };
