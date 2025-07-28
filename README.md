# 🛒 Product Inventory REST API

A simple RESTful API built with **Node.js** and **Express.js** that supports complete CRUD operations on an in-memory list of products.

This project was built as part of a technical assignment and is designed to demonstrate practical understanding of Node.js and Express.js without using any database. All data is stored temporarily in memory using a JavaScript array.

---

## 🧠 Features

- ✅ CRUD operations (Create, Read, Update, Delete)
- ✅ In-memory data storage (no database)
- ✅ Clean and modular folder structure
- ✅ Input validation (e.g., name is required, price must be a number)
- ✅ Search products by name (`?q=`)
- ✅ Pagination (`?page=` and `limit=`)
- ✅ Error handling with `try...catch`

---

## 📁 Folder Structure

product-api/
├── controllers/
│   └── productController.js    # All business logic & API handlers
├── routes/
│   └── productRoutes.js        # Express routes for /products
├── app.js                      # Main entry point of the app
├── package.json
├── README.md                   # You’re reading it!
└── .gitignore

Install dependencies

npm install



Run the server (Using nodemon)

npm run dev



The API will run at:

http://localhost:3000/products