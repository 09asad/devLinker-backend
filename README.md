# DevLinker Backend

Backend API for **DevLinker**, a developer networking platform where developers can connect, send connection requests, and build professional networks.

This backend provides REST APIs for authentication, profile management, connection requests, and developer feed.

---

## Tech Stack

Node.js
Express.js
MongoDB
JWT Authentication
Cookie-based authentication
Mongoose ODM

---

## Features

### Authentication

* User Signup
* User Login
* Secure JWT authentication
* Logout functionality

### Profile Management

* View user profile
* Edit profile details
* Update user information

### Developer Feed

* Get suggested developers
* Pagination for feed results

### Connection Requests

* Send connection request
* Accept connection request
* Reject connection request

### Connections

* View all accepted connections

---

## API Endpoints

### Authentication

POST /signup
POST /login
POST /logout

### Profile

GET /profile/view
PATCH /profile/edit

### Feed

GET /feed

### Requests

POST /request/send/:status/:userId
POST /request/review/:status/:requestId

### Connections

GET /user/connections

---

## Installation

Clone the repository

git clone https://github.com/09asad/devlinker-backend.git

Install dependencies

npm install

Run the server

npm run dev

---

## Environment Variables

Create a `.env` file and add:

PORT=3000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key

---

## Project Structure

src
├── config
├── controllers
├── middleware
├── models
├── routes
└── app.js

---

## Future Improvements

* Real-time notifications using Socket.IO
* Chat system between connections
* Developer search functionality
* Skill-based recommendations

---

Frontend Repo:
https://github.com/09asad/devlinker-frontend
