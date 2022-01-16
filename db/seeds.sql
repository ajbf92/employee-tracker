INSERT INTO departments (dept_name)
VALUES
('Deli'),
('Customer Service'),
('Grocery');

INSERT INTO roles (title, salary, department_id)
VALUES
('Deli Manager', 80000.00, 1),
('Deli Assistant Manager', 60000.00, 1),
('Deli Associate', 27000, 1),
('Customer Service Manager', 85000.00, 2),
('Customer Service Assistant Manager', 65000.00, 2),
('cashier', 24000.00, 2),
('Grocery Manager', 90000.00, 3),
('Grocery Assistant Manager', 70000.00, 3),
('Grocery clerk', 30000.00, 3);

INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES
('Alex', 'B', 7, NULL),
('Chris', 'T', 4, NULL),
('Aaron', 'P', 1, NULL),
('Chris', 'G', 8, 1),
('Estaban', 'C', 5, 2),
('J', 'J', 9, 4),
('Jordan', 'R', 3, 9),
('Jordan', 'N', 6, 5),
('Adrian', 'M', 2, 3);






