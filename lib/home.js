const db = require("../db/connection");
const inquirer = require("inquirer");

const initHome = () => {
  return inquirer
    .prompt([
      {
        type: "list",
        name: "selection",
        message: "Welcome! Please choose from one of the following options.",
        choices: [
          "View all departments",
          "View all roles",
          "View all employees",
          "Add a department",
          "Add a role",
          "Add an employee",
          "Update an employee role",
        ],
      },
    ])
    .then((answer) => {
      console.log(answer);
      if (answer.selection == "View all departments") {
      } else if (answer.selection == "View all roles") {
      } else if (answer.selection == "View all employees") {
      } else if (answer.selection == "Add a department") {
      } else if (answer.selection == "Add a role") {
      } else if (answer.selection == "Add an employee") {
      } else if (answer.selection == "Update an employee role") {
      }
    });
};

module.exports = initHome;