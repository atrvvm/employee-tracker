import express from "express";
import { QueryResult } from "pg";
import { pool, connectToDb } from "./connection.js";

await connectToDb();

const PORT = process.env.PORT || 3001;
const app = express();

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Function to view all departments
export const viewDepartments = async () => {
  const results = await pool.query("SELECT * FROM department");
  return results.rows;
};

// Function to view all roles
export const viewRoles = async () => {
  const results =
    await pool.query(`SELECT role.id, role.title, department.name AS department, role.salary
        FROM role
        JOIN department ON role.department_id = department.id`);
  return results.rows;
};

// Function to view all employees
export const viewEmployees = async () => {
  const results =
    await pool.query(`SELECT employee.id, employee.first_name, employee.last_name, role.title, 
        department.name AS department, role.salary, 
        CONCAT(manager.first_name, ' ', manager.last_name) AS manager 
        FROM employee
        JOIN role ON employee.role_id = role.id
        JOIN department ON role.department_id = department.id
        LEFT JOIN employee manager ON employee.manager_id = manager.id`);
  return results.rows;
};
