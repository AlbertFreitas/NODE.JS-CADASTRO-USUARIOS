# Full Stack User Registration System 👤

This repository contains the **backend** for a complete full-stack user registration application. It's a RESTful API built with **Node.js**, **Express**, and the modern **Prisma ORM**, connected to a **MongoDB** database.

This backend is designed to work with its corresponding **[React Frontend Application](https://github.com/AlbertFreitas/Cadastro-Usuario-React)**.

---

## ✨ Features

-   **Full CRUD Functionality:** Complete Create, Read, and Delete operations for users.
-   **Real-time Updates:** The API is designed for real-time interaction with a frontend client.
-   **Efficient Database Queries:** Utilizes Prisma ORM for safe, efficient, and easy-to-manage database operations.
-   **Ready for Integration:** Comes with CORS configured, ready to be connected to any frontend client.

---

## 🛠️ Tech Stack

-   **Backend:** Node.js, Express.js
-   **Database:** MongoDB
-   **ORM:** Prisma ORM
-   **Environment:** Nodemon for development server auto-reloading

---

## 🧠 Architectural Decisions

The main goal of this project was to build a simple yet robust full-stack application to solidify my knowledge of front-end and back-end integration.

-   **Why Prisma?** I chose **Prisma ORM** for its excellent developer experience and type safety. Prisma's auto-generated client makes database queries intuitive and less error-prone compared to writing raw queries, speeding up the development process significantly. It also simplifies the schema management for the MongoDB database.

-   **Why Express.js?** **Express** was used for its minimalist and flexible nature, allowing for the rapid creation of a structured and scalable RESTful API.

---

## 🚀 Getting Started

Follow the steps below to set up and run the API in your local environment.

### Prerequisites

-   Node.js (v18 or later)
-   Yarn or NPM
-   A running MongoDB instance (local or a cloud service like MongoDB Atlas).

### ⚙️ Setup and Execution Steps

1.  **Clone the Repository**
    ```bash
    git clone [https://github.com/AlbertFreitas/NODE.JS-CADASTRO-USUARIOS.git](https://github.com/AlbertFreitas/NODE.JS-CADASTRO-USUARIOS.git)
    cd NODE.JS-CADASTRO-USUARIOS
    ```

2.  **Install Dependencies**
    ```bash
    yarn install 
    # or
    # npm install
    ```

3.  **Configure Environment Variables**
    * Create a file named `.env` in the root of the project.
    * Add your MongoDB connection string to this file:
    ```env
    DATABASE_URL="mongodb+srv://<user>:<password>@<cluster>.mongodb.net/yourDatabaseName?retryWrites=true&w=majority"
    ```

4.  **Generate the Prisma Client**
    * This command reads your schema and generates the necessary files for the ORM to work.
    ```bash
    npx prisma generate
    ```

5.  **Start the Development Server**
    ```bash
    yarn dev
    # or
    # npm run dev
    ```

🎉 **Done!** The server will now be running at `http://localhost:3000`.

---
## 📬 API Endpoints

| Method | Route          | Description              |
|--------|----------------|--------------------------|
| `GET`  | `/usuarios`    | Lists all users          |
| `POST` | `/usuarios`    | Creates a new user       |
| `DELETE`| `/usuarios/:id`| Deletes a user by their ID |

---
## 🌐 Frontend Connection

This backend is ready to be connected with its React frontend, available at:
👉 **[User Registration - React Frontend](https://github.com/AlbertFreitas/Cadastro-Usuario-React)**
