# WebD3Assignment2
Student Management REST API
Web Dev III (Node.js & Express Backend)
Unit 2 - Assignment 2

Requirements Covered
Express.js server
Student CRUD APIs
Custom logger middleware
Modular routing
Error handling and status codes
Array/JSON data only
Postman testing
Project Structure
student-management-rest-api/
├── app.js
├── package.json
├── README.md
├── middleware/
│   └── logger.js
├── routes/
│   └── studentRoutes.js
└── data/
    └── students.js
Installation
Open a terminal in this project folder:

npm install
npm start
The server runs at:

http://localhost:3000
API Endpoints
Method	Endpoint	Purpose
GET	/students	Get all students
GET	/students/:id	Get one student
POST	/students	Add a student
PUT	/students/:id	Update a student
DELETE	/students/:id	Delete a student
POST /students
Request body:

{
  "name": "Neha Gupta",
  "email": "neha@example.com",
  "age": 22,
  "course": "Computer Applications"
}
PUT /students/:id
Request body:

{
  "name": "Neha Gupta",
  "email": "neha@example.com",
  "age": 23,
  "course": "Computer Science"
}
Status Codes
200 - Success
201 - Created
400 - Bad Request
404 - Not Found
500 - Internal Server Error
Postman Testing
Import postman_collection.json into Postman and run the requests in order.

Note: Data is stored in an in-memory array, so changes are reset whe
