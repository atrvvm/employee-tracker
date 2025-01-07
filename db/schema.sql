DROP DATABASE IF EXISTS employees_db;
CREATE DATABASE employees_db;

\c employees_db;

CREATE TABLE department (
    id SERIAL PRIMARY KEY,
    name VARCHAR(30) UNIQUE NOT NULL -- Holds department name
);

CREATE TABLE role (
    id SERIAL PRIMARY KEY,
    title VARCHAR(30) UNIQUE NOT NULL, -- Holds role title
    salary DECIMAL NOT NULL, -- Holds role salary
    department INTEGER NOT NULL -- Holds reference to department role belongs to
)

CREATE TABLE employee (
    id SERIAL PRIMARY KEY,
    first_name VARCHAR(30) NOT NULL, -- Holds employee first name
    last_name VARCHAR(30) NOT NULL, -- Holds employee last name
    role_id INTEGER NOT NULL, -- Holds reference to employee role
    manager_id INTEGER -- Holds reference to another employee that is the manager of the current employee (null if the employee has no manager)
)