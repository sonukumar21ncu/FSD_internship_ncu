Car Management REST API
=======================

This is a Node.js REST API using Express and MongoDB (Mongoose) to manage car records with Create, Read, Update, and Delete functionality.

---------------------
Project Structure
---------------------
API/
├── models/
│   └── Cars.js         --> Mongoose schema for cars
├── server.js           --> Main server file
├── package.json

---------------------
Technologies Used
---------------------
- Node.js
- Express.js
- MongoDB
- Mongoose
- Body-Parser

---------------------
How to Set Up & Run
---------------------
1. Create Project Folder:
   > mkdir API
   > cd API

2. Initialize Project:
   > npm init -y

3. Install Dependencies:
   > npm install express mongoose body-parser

4. Add Files:
   - server.js for your server code
   - models/Cars.js for car schema

5. Make sure MongoDB is running locally:
   > mongodb://localhost:27017/store

6. Start the Server:
   > node server.js

Server runs at: http://localhost:3000

---------------------
API Endpoints
---------------------

1. Create a Car (POST /cars)
Request Body:
{
  "Brand": "Toyota",
  "carModel": "Corolla",
  "engineSize": 1800,
  "transmission": "Automatic"
}

2. Get All Cars (GET /cars)

3. Get Car by ID (GET /cars/:id)

4. Update Car by ID (PUT /cars/:id)
Example Body:
{
  "engineSize": 2000
}

5. Delete Car by ID (DELETE /cars/:id)

---------------------
Mongoose Schema (Cars.js)
---------------------
const mongoose = require('mongoose');

const CarSchema = new mongoose.Schema({
    Brand: String,
    carModel: String,
    engineSize: Number,
    transmission: String
});

module.exports = mongoose.model('cars', CarSchema);

---------------------
Notes
---------------------
- If body-parser is missing:
  > npm install body-parser

- Common Status Codes:
  - 200 OK
  - 201 Created
  - 404 Not Found
  - 500 Internal Server Error

---------------------
Author: Sonu Bhardwaj
License: MIT
