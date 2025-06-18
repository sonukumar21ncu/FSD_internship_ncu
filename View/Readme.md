# 🚗 Car Inventory Management System

A simple full-stack Car Inventory CRUD application built using HTML, CSS, JavaScript (Vanilla) on the frontend, and Node.js, Express.js, MongoDB on the backend.

Users can add new cars, view existing ones, and interact with a MongoDB database in real-time through a clean and responsive interface.

---

## 🔧 Features

- ➕ Add new car details: Brand, Model, Engine Size, Transmission
- 📄 View a list of all cars dynamically
- ✏️ Update car details (via backend API)
- ❌ Delete cars from the database (via backend API)
- 🌐 Fully RESTful API integration
- 💡 Clean UI with dedicated Add and View pages

---

## 📁 Folder Structure

car-inventory-app/
├── models/
│   └── Cars.js            -> Mongoose schema
├── public/
│   ├── add.html           -> Page to add new cars
│   ├── view.html          -> Page to view all cars
│   ├── add.js             -> Handles form submission (POST)
│   └── view.js            -> Fetches and displays data (GET)
├── server.js              -> Express backend and API routes
├── package.json           -> Project metadata and dependencies

---

## 🚀 How to Run Locally

1️⃣ Clone the Repository

    git clone https://github.com/yourusername/car-inventory-app.git
    cd car-inventory-app

2️⃣ Install Dependencies

    npm install

3️⃣ Start MongoDB

Make sure MongoDB is running locally at:
    
    mongodb://localhost:27017/store

(Optional) Use MongoDB Compass for GUI access.

4️⃣ Start the Server

    node server.js

You should see:

    Connection to MongoDB is Successful
    Server is UP & running on PORT 3000

5️⃣ Open Frontend in Browser

- Open public/add.html to add a new car
- Open public/view.html to view all added cars

---

## 🌐 Technologies Used

Frontend:
- HTML
- CSS
- JavaScript (DOM Manipulation)

Backend:
- Node.js
- Express.js

Database:
- MongoDB (via Mongoose)

Tools:
- MongoDB Compass
- Postman (optional)
- VS Code

---

## 📡 API Endpoints

| Method | Route        | Description             |
|--------|--------------|-------------------------|
| GET    | /cars        | Get all cars            |
| GET    | /cars/:id    | Get a single car by ID  |
| POST   | /cars        | Add a new car           |
| PUT    | /cars/:id    | Update an existing car  |
| DELETE | /cars/:id    | Delete a car by ID      |

---

## 🧑‍💻 Developed By

Sonu Kumar

