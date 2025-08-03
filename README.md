# Auth-API-node 🔐

A simple Node.js REST API for user authentication using **JWT (JSON Web Tokens)**.

## 📌 Features

- Register new users
- Login with email and password
- Protected profile route using JWT
- Secure password hashing with bcrypt
- Token verification middleware

## 🛠️ Tech Stack

- Node.js
- Express.js
- MongoDB (with Mongoose)
- JWT (jsonwebtoken)
- bcrypt

## 🚀 Getting Started

1. Clone the repo:

```
git clone https://github.com/Ayushjha-001/Auth-API-node.git
cd Auth-API-node
Install dependencies:

npm install

Create a .env file and add the following:
MONGO_URL=your_mongodb_uri
JWT_SECRET=your_jwt_secret_key

Start the server:
node server.js

🔐 API Endpoints
Method	Route	Description
POST	/register	Register a new user
POST	/login	Login and get JWT token
GET	/profile	Get user profile (Protected)

📁 Folder Structure
middleware/       --> JWT auth middleware  
models/           --> Mongoose User model  
routes/           --> Auth and profile routes  
server.js         --> Main entry point

💡 Future Improvements
Add logout route (token invalidation on client)

Update/delete account

Email verification

Forgot password flow
```
### Made by Ayush Jha

