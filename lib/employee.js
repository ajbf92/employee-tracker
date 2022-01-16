const db = require("../db/connection");
const inquirer = require("inquirer");
const cTable = require("console.table");

function viewEmployees() {
  const initHome = require("./home");
  const sql = `SELECT employees.id AS ID, employees.first_name AS First_Name, employees.last_name AS Last_Name,
    roles.title AS Title, departments.dept_name AS Department, roles.salary AS Salary, 
  CONCAT (manager.first_name,' ', manager.last_name) AS Manager
  FROM employees
  LEFT JOIN roles ON employees.role_id = roles.id
  LEFT JOIN departments ON roles.department_id = departments.id
  LEFT JOIN employees manager ON employees.manager_id = manager.id;`;

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

module.exports = { viewEmployees };