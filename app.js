const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

let employees = [
    { id: 1, name: 'John Doe', position: 'Software Engineer', email: 'john@example.com' },
    { id: 2, name: 'Jane Smith', position: 'Product Manager', email: 'jane@example.com' },
    { id: 3, name: 'Alex Johnson', position: 'Data Scientist', email: 'alex@example.com' },
    { id: 4, name: 'Emily Davis', position: 'UX Designer', email: 'emily@example.com' },
    { id: 5, name: 'Michael Brown', position: 'Network Administrator', email: 'michael@example.com' },
    { id: 6, name: 'Olivia White', position: 'Marketing Specialist', email: 'olivia@example.com' },
    { id: 7, name: 'Ethan Turner', position: 'Financial Analyst', email: 'ethan@example.com' },
    { id: 8, name: 'Sophia Hall', position: 'HR Manager', email: 'sophia@example.com' },
    { id: 9, name: 'William Clark', position: 'System Architect', email: 'william@example.com' },
    { id: 10, name: 'Ava Miller', position: 'Customer Support Representative', email: 'ava@example.com' },
    { id: 11, name: 'Benjamin Taylor', position: 'Database Administrator', email: 'benjamin@example.com' },
    { id: 12, name: 'Grace Anderson', position: 'Graphic Designer', email: 'grace@example.com' },
    { id: 13, name: 'Daniel Baker', position: 'Business Analyst', email: 'daniel@example.com' },
    { id: 14, name: 'Mia Brooks', position: 'Sales Manager', email: 'mia@example.com' },
    { id: 15, name: 'Christopher Wright', position: 'DevOps Engineer', email: 'christopher@example.com' },
    { id: 16, name: 'Ella Moore', position: 'Quality Assurance Tester', email: 'ella@example.com' },
    { id: 17, name: 'Jackson Rogers', position: 'IT Security Specialist', email: 'jackson@example.com' },
    { id: 18, name: 'Scarlett Green', position: 'Event Coordinator', email: 'scarlett@example.com' },
    { id: 19, name: 'Liam Bennett', position: 'Customer Success Manager', email: 'liam@example.com' },
    { id: 20, name: 'Chloe Foster', position: 'Content Writer', email: 'chloe@example.com' },
];
  

const authTokens = {};

const authenticate = (req, res, next) => {
  const token = req.headers.authorization;

  if (!token || !authTokens[token]) {
    return res.status(401).json({ message: 'Unauthorized' });
  }

  req.user = authTokens[token];
  next();
};

app.get('/api/employees', authenticate, (req, res) => {
  res.json(employees);
});

app.get('/api/employees/:id', authenticate, (req, res) => {
  const employeeId = parseInt(req.params.id);
  const employee = employees.find((emp) => emp.id === employeeId);

  if (employee) {
    res.json(employee);
  } else {
    res.status(404).json({ message: 'Employee not found' });
  }
});

app.post('/api/employees', (req, res) => {
  const { name, position, email } = req.body;

  const authToken = Buffer.from(`${name}:${email}`).toString('base64');
  authTokens[authToken] = { name, email };

  const newEmployee = { id: employees.length + 1, name, position, email };
  employees.push(newEmployee);

  res.status(201).json({
    message: 'Employee created successfully',
    authToken,
    employee: newEmployee,
  });
});

app.put('/api/employees/:id', authenticate, (req, res) => {
  const employeeId = parseInt(req.params.id);
  const updatedEmployee = req.body;

  employees = employees.map((emp) =>
    emp.id === employeeId ? { ...emp, ...updatedEmployee } : emp
  );

  res.json({ message: 'Employee updated successfully' });
});

app.delete('/api/employees/:id', authenticate, (req, res) => {
  const employeeId = parseInt(req.params.id);
  employees = employees.filter((emp) => emp.id !== employeeId);
  res.json({ message: 'Employee deleted successfully' });
});

app.get('/api/employees/search', authenticate, (req, res) => {
  const { query } = req.query;

  if (!query) {
    return res.status(400).json({ message: 'Query parameter is required' });
  }

  const results = employees.filter(
    (emp) =>
      emp.name.toLowerCase().includes(query.toLowerCase()) ||
      emp.position.toLowerCase().includes(query.toLowerCase())
  );

  res.json(results);
});

app.patch('/api/employees/:id/email', authenticate, (req, res) => {
  const employeeId = parseInt(req.params.id);
  const newEmail = req.body.email;

  employees = employees.map((emp) =>
    emp.id === employeeId ? { ...emp, email: newEmail } : emp
  );

  res.json({ message: 'Employee email updated successfully' });
});

app.get('/api/employees/total', authenticate, (req, res) => {
  const totalEmployees = employees.length;
  res.json({ totalEmployees });
});

app.patch('/api/employees/:id/position', authenticate, (req, res) => {
  const employeeId = parseInt(req.params.id);
  const newPosition = req.body.position;

  employees = employees.map((emp) =>
    emp.id === employeeId ? { ...emp, position: newPosition } : emp
  );

  res.json({ message: 'Employee position updated successfully' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
