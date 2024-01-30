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
    * Response:
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
    Retrieve details of a specific employee by providing the employee ID. _**Authentication**_ is required.
    * Parameters:
        * id: The ID of the employee.
    * Response:
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
    * Request:
    ```json
    {
      "name": "Your Name",
      "position": "Your Position",
      "email": "your.email@example.com"
    }

    ```
    * Response:
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

4. Update Employee by ID
    ```http
    PUT /api/employees/:id
    ```
    Update details of a specific employee by providing the employee ID. _**Authentication**_ is required.
    * Parameters:
        * id: The ID of the employee.
    * Request:
    ```json
    {
      "name": "Updated Name",
      "position": "Updated Position",
      "email": "updated.email@example.com"
    }
    ```
    * Response:
    ```json
    {
      "message": "Employee updated successfully"
    }
    ```

5. Delete Employee by ID
    ```http
    DELETE /api/employees/:id
    ```
    Delete a specific employee by providing the employee ID. _**Authentication**_ is required.
    * Parameters:
        * id: The ID of the employee.
    * Response:
    ```json
    {
      "message": "Employee deleted successfully"
    }
    ```

6. Search Employees
    ```http
    GET /api/employees/search?query=John
    ```
    Search employees by name or position. Replace John with the desired search query. _**Authentication**_ is required.
    * Parameters:
        * query: The search query i.e. name or position
    * Response:
    ```json
    {
        "id": 1,
        "name": "John Doe",
        "position": "Software Engineer",
        "email": "john@example.com"
    }
    ```

7. Update Employee Email by ID
    ```http
    PATCH /api/employees/:id/email
    ```
    Update the email of a specific employee by providing the employee ID. _**Authentication**_ is required.
    * Parameters:
        * id: The ID of the employee.
    * Request:
    ```json
    {
      "email": "new.email@example.com"
    }
    ```
    * Response:
    ```json
    {
      "message": "Employee email updated successfully"
    }
    ```

8. Update Employee Position by ID
    ```http
    PATCH /api/employees/:id/position
    ```
    Update the position of a specific employee by providing the employee ID. _**Authentication**_ is required.
    * Parameters:
        * id: The ID of the employee.
    * Request:
    ```json
    {
      "position": "NewPosition"
    }

    ```
    * Response:
    ```json
    {
      "message": "Employee position updated successfully"
    }

    ```

9. Get Total Number of Employees
    ```http
    GET /api/employees/total
    ```
    Get the total number of employees. _**Authentication**_ is required.
    * Response: 
    ```json
    {
      "totalEmployees": 10
    }
    ```

### Authentication
Authentication is required for certain endpoints. When creating a new employee, an _**authentication token**_ will be generated based on the provided name and email. Include this token in the Authorization header for subsequent requests to protected endpoints.
```http
    Authorization: YourAuthTokenHere
```

### Using Authorization Token in Postman

1. Create a New Employee:
    * Make a `POST` request to `http://localhost:3000/api/employees` (or your API endpoint) with the following sample JSON body:
    ```json
    {
      "name": "YourName",
      "position": "YourPosition",
      "email": "your.email@example.com"
    }
    ```
    * Send the request, and the server should respond with a JSON object containing the _**authorization token**_.

2. Copy the Authorization Token:
    * Once you receive the response, look for the authToken field. This is your authorization token.
    * Copy the value of the `authToken`.

3. Use Authorization Token in Subsequent Requests:
    * In any subsequent request to the protected endpoints (those requiring authentication), you need to include the authorization token in the request header.
    * Open your request in Postman.
    * Go to the "Headers" section.
    * Add a new header with the key Authorization and the value being YourAuthToken (replace YourAuthToken with the actual authorization token you copied).
    
4. Send Request:
    * Click on the "Send" button to make the request with the authorization token.

Now, your request should be authenticated, and you'll be able to access the protected endpoints.




