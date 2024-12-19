# Task Manager API

This is a simple RESTful API for managing tasks using Node.js, Express.js, and in-memory data storage. The API supports CRUD operations, error handling, and input validation.

## Getting Started

### Prerequisites

- Node.js (v12 or higher)
- npm (v6 or higher)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/Task_Manager_API.git
   ```
2. Navigate to the project directory:
   ```bash
   cd Task_Manager_API
   ```
3. Install the dependencies:
   ```bash
   npm install
   ```

### Running the Server

Start the server with the following command:
```bash
node app.js
```
The server will run on `http://localhost:3000`.

## API Endpoints

### Get All Tasks
- **URL:** `/tasks`
- **Method:** `GET`
- **Description:** Retrieve all tasks.
- **Response:**
  ```json
  [
    {
      "id": 1,
      "title": "Sample Task",
      "description": "This is a sample task",
      "startDate": "2023-10-01T00:00:00.000Z",
      "endDate": "2023-10-10T00:00:00.000Z"
    }
  ]
  ```

### Get Task by ID
- **URL:** `/tasks/:id`
- **Method:** `GET`
- **Description:** Retrieve a task by its ID.
- **Response:**
  ```json
  {
    "id": 1,
    "title": "Sample Task",
    "description": "This is a sample task",
    "startDate": "2023-10-01T00:00:00.000Z",
    "endDate": "2023-10-10T00:00:00.000Z"
  }
  ```

### Create a New Task
- **URL:** `/tasks`
- **Method:** `POST`
- **Description:** Create a new task.
- **Request Body:**
  ```json
  {
    "title": "New Task",
    "description": "This is a new task",
    "startDate": "2023-10-01T00:00:00.000Z",
    "endDate": "2023-10-10T00:00:00.000Z"
  }
  ```
- **Response:**
  ```json
  {
    "id": 2,
    "title": "New Task",
    "description": "This is a new task",
    "startDate": "2023-10-01T00:00:00.000Z",
    "endDate": "2023-10-10T00:00:00.000Z"
  }
  ```

### Update a Task by ID
- **URL:** `/tasks/:id`
- **Method:** `PUT`
- **Description:** Update a task by its ID.
- **Request Body:**
  ```json
  {
    "title": "Updated Task",
    "description": "This is an updated task",
    "startDate": "2023-10-05T00:00:00.000Z",
    "endDate": "2023-10-15T00:00:00.000Z"
  }
  ```
- **Response:**
  ```json
  {
    "id": 1,
    "title": "Updated Task",
    "description": "This is an updated task",
    "startDate": "2023-10-05T00:00:00.000Z",
    "endDate": "2023-10-15T00:00:00.000Z"
  }
  ```

### Update Task Description by ID
- **URL:** `/tasks/:id/description`
- **Method:** `PATCH`
- **Description:** Update the description of a task by its ID.
- **Request Body:**
  ```json
  {
    "description": "Updated description"
  }
  ```
- **Response:**
  ```json
  {
    "id": 1,
    "title": "Sample Task",
    "description": "Updated description",
    "startDate": "2023-10-01T00:00:00.000Z",
    "endDate": "2023-10-10T00:00:00.000Z"
  }
  ```

### Delete a Task by ID
- **URL:** `/tasks/:id`
- **Method:** `DELETE`
- **Description:** Delete a task by its ID.
- **Response:** `204 No Content`

## Error Handling

The API returns appropriate error messages and status codes for invalid requests. For example:
- `404 Not Found` if the task is not found.
- `400 Bad Request` if the request body is invalid.

## Postman Collection

A Postman collection for testing the API endpoints is available in the `tasks.postman_collection.json` file.

## Running Tests

To run the tests, use the following command:
```bash
npm run test
```

### Use Cases for Tests

- **Get All Tasks:** Ensure that the endpoint returns all tasks.
- **Get Task by ID:** Verify that the endpoint returns the correct task for a given ID.
- **Create a New Task:** Check that a new task is created successfully with valid input.
- **Update a Task by ID:** Confirm that a task is updated correctly with valid input.
- **Update Task Description by ID:** Ensure that only the description of a task is updated.
- **Delete a Task by ID:** Verify that a task is deleted successfully.

## License

This project is licensed under the MIT License.
