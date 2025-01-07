INSERT INTO department (id, name)
VALUES (1, 'Engineering'),
       (2, 'UX Design'),
       (3, 'HR'),
       (4, 'Management');

INSERT INTO roles (role_id, title, department, salary)
VALUES (1, 'Senior Engineer', 1, 200000 ),
       (2, 'Lead Designer', 1, 150000),
       (3, 'Human Resources', 3, 70000),
       (4, 'Product Manager', 4, 400000);

INSERT INTO employees (id, first_name, last_name, role_id department, salary, manager_id)
VALUES (1, 'Mike', 'Chan', 1, 1, 200000, 4),
       (2, 'Lisa', 'Jewell', 2, 2, 150000, 4),
       (3, 'Amber', 'Doe', 3, 3, 70000, NULL),
       (4, 'Tina', 'Fey', 4, 4, 400000, NULL);
