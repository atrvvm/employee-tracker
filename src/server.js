import express from "express";
import { pool, connectToDb } from "./connection.js";
import inquirer from "inquirer";
await connectToDb();

const db = connectToDb(
    startQuery()
);

// Query to the database
function startQuery() {
    inquirer.prompt([
        {
            type: 'list',
            name: 'intro',
            message: 'What would you like to do?',
            choices:[
                'View All Employees',
                'Add Employee',
                'Update Employee Role',
                'View All Roles',
                'Add Role',
                'View All Departments',
                'Add Department',
                'Quit'
            ]
        }
    ]).then((answer) => {
        switch(answer.intro) {
            case 'View All Employees':
                viewEmployees();
                break;
            case 'Add Employee':
                addEmployee();
                break;
            case 'Update Employee Role':
                updateRole();
                break;
            case 'View All Roles':
                viewRoles();
                break;
            case 'Add Role':
                addRole();
                break;
            case 'View All Departments':
                viewDepartments();
                break;
            case 'Add Department':
                addDepartment();
                break;
            case 'Quit':
                console.log('Goodbye!');
                db.end();
                break;
        }
    });
};

//Function to View All Employees
function viewEmployees() {
    const sql = `SELECT employee.id, employee.first_name, employee.last_name, role.title AS role, department.name AS department, role.salary, CONCAT(manager.first_name, ' ', manager.last_name) AS manager FROM employee LEFT JOIN employee manager on manager.id = employee.manager_id INNER JOIN role ON (role.id = employee.role_id) INNER JOIN department ON (department.id = role.department_id) ORDER BY employee.id;`
    pool.query(sql, (err, res) => {
        if (err) {
            console.log(err);
            return;
        }
        console.table(res);
        startQuery();
    });
};

// Fucntion to View All Departments
function viewDepartments() {
    const sql = `SELECT department.id, department.name AS Department FROM department;`;

    pool.query(sql, (err, result) => {
      if (err) {
        res.status(500).json({ error: err.message });
        return;
      }
      const { rows } = result;
      res.json({
        message: 'Success',
        data: rows,
      });
    });
};

