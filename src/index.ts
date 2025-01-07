import inquirer from "inquirer";
import { viewDepartments, viewRoles, viewEmployees } from "./server.js";

// Method to start CLI
const menuCli = async () => {
  const answer = await inquirer.prompt([
    {
      type: "list",
      name: "action",
      message: "Welcome! What what you like to do?",
      choices: [
        "View All Departments",
        "View All Roles",
        "View All Employees",
        "Add Department",
        "Add Role",
        "Add Employee",
        "Update Employee Role",
        "Quit",
      ],
    },
  ]);

  // Swith statements
  switch (answer.action) {
    case "View All Departments":
      const departments = await viewDepartments();
      console.log(departments);
      break;
  }
};
