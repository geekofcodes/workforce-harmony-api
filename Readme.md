# Workforce Harmony API

This is a simple Employee Management System API built using Node.js and Express. The API provides endpoints for managing employees, including CRUD operations, search, and additional features.

## Getting Started

### Prerequisites

- Node.js: [Download and Install Node.js](https://nodejs.org/)
- npm (Node Package Manager): Included with Node.js installation

### Installation

1. Clone the repository:

   ```bash
    git clone https://github.com/your-username/employee-management-api.git
    ```
2. Navigate to the Project Directory:
    ```bash
    cd employee-management-api
    ```
3. Install dependencies:
    ```bash
    npm install
    ```
4. Start the Server:
    ```bash
    node app.js
    ```
    The server will run on http://localhost:3000 by default.

### API Endpoints

1. Get All Employees
    ```http
    GET /api/employees
    ```
    Retrieve a list of all employees.
    * Response
    ```json
    [
        {
            "id": 1,
            "name": "John Doe",
            "position": "Software Engineer",
            "email": "john@example.com"
        },
    ]
    ```

2. Get Employee by ID
    ```http
    GET /api/employees/:id

    ```
    Retrieve details of a specific employee by providing the employee ID.
    * Parameters
        * id: The ID of the employee.
    * Response
    ```json
    {
        "id": 1,
        "name": "John Doe",
        "position": "Software Engineer",
        "email": "john@example.com"
    }
    ```

3. Create Employee
    ```http
    POST /api/employees
    ```
    Create a new employee by providing the name, position, and email. An _**authentication token**_ will be generated and provided.
    * Request
    ```json
    {
      "name": "Your Name",
      "position": "Your Position",
      "email": "your.email@example.com"
    }

    ```
    * Response
    ```json
    {
      "message": "Employee created successfully",
      "authToken": "YourAuthTokenHere",
      "employee": {
        "id": 1,
        "name": "Your Name",
        "position": "Your Position",
        "email": "your.email@example.com"
      }
    }

    ```
