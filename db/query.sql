-- Return department data
SELECT * 
FROM department;

-- Return role data
SELECT role.id, role.title, department.name AS department, role.salary
FROM role
JOIN department ON role.department_id = department.id;

-- Return employee data
SELECT employee.id, employee.first_name, employee.last_name, role.title, 
    department.name AS department, role.salary, 
    CONCAT(manager.first_name, ' ', manager.last_name) AS manager 
FROM employee
JOIN role ON employee.role_id = role.id
JOIN department ON role.department_id = department.id
LEFT JOIN employee manager ON employee.manager_id = manager.id;