# 🚀 DevLinker Backend

Backend API for **DevLinker**, a full-stack developer networking platform where developers can discover other developers, build connections, communicate in real time, and access premium membership features.

🌐 **Live Application:** https://devlinker.tech

---

## 📌 About

**DevLinker Backend** is built using **Node.js**, **Express.js**, and **MongoDB Atlas**. It provides REST APIs for authentication, profile management, developer discovery, connection requests, connections, real-time chat, premium memberships, and payments.

The backend follows a modular architecture and uses **JWT authentication with HTTP-only cookies** for secure authentication and protected API access.

---

## 🛠 Tech Stack

### Backend

* Node.js
* Express.js
* MongoDB Atlas
* Mongoose
* JWT Authentication
* bcrypt.js
* Cookie Parser
* Validator
* CORS
* dotenv

### Real-Time Communication

* Socket.IO

### Payments

* Razorpay

### Deployment & Infrastructure

* AWS EC2
* Ubuntu
* Nginx
* PM2
* Elastic IP
* HTTPS / SSL with Let's Encrypt

---

## ✨ Features

### 🔐 Authentication

* User signup
* User login
* JWT-based authentication
* HTTP-only cookie-based authentication
* Logout
* Protected routes

### 👤 Profile Management

* View profile
* Edit profile
* Update user information
* Developer profile data

### 👨‍💻 Developer Discovery

* Browse suggested developers
* Pagination support
* Filter existing connections
* Filter pending connection requests
* Developer discovery for networking

### 🤝 Connection Requests

* Send connection requests
* Accept requests
* Reject requests
* Manage pending requests

### 🌐 Connections

* View all accepted connections
* Retrieve connected developers

### 💬 Real-Time Chat

* One-to-one real-time messaging
* Socket.IO integration
* Communication between connected developers
* Real-time message delivery
* Chat history stored in MongoDB

### 💎 Premium Membership

DevLinker supports Silver and Gold membership plans.

#### Silver Membership

* Unlimited chats with connections
* 100 connection requests per day
* Silver verified badge
* Ad-free experience
* 2-month validity

#### Gold Membership

* Premium membership features
* Unlimited connection requests per day
* Gold verified badge
* Ad-free experience
* 6-month validity

> Voice calling is planned as a future improvement and is not currently implemented.

### 💳 Payments

* Razorpay payment integration
* Premium membership purchase flow
* Razorpay order creation
* Payment status tracking
* Webhook signature verification
* Automatic premium membership activation after successful payment
* Membership expiry calculation

---

## 🛡️ Security

* Password hashing using bcrypt
* JWT-based authentication
* Protected API routes
* HTTP-only cookies
* Input validation
* CORS configuration
* Environment variables for sensitive configuration
* Razorpay webhook signature verification

---

## 🧠 Backend Architecture

The backend follows a modular Express.js architecture.

```text
Client
  │
  ├── REST API ───────────────┐
  │                           ▼
  │                     Express.js
  │                           │
  │                    Authentication
  │                    & Middleware
  │                           │
  │              ┌────────────┼────────────┐
  │              ▼            ▼            ▼
  │           Routes        Models       Utils
  │              │            │
  │              ▼            ▼
  │         API Logic     MongoDB Atlas
  │
  └── Socket.IO ─────────► Real-Time Chat
```

### Authentication Flow

```text
User
 │
 ▼
Login / Signup
 │
 ▼
JWT Token
 │
 ▼
HTTP-only Cookie
 │
 ▼
Protected API Routes
```

### Real-Time Chat

```text
React Client
     ↕
 Socket.IO
     ↕
Node.js Server
     ↕
Connected Users
```

---

## 🚀 Production Deployment

DevLinker is deployed as a live web application on **AWS EC2**.

### Production Infrastructure

* 🌍 Custom Domain: https://devlinker.tech
* ☁️ AWS EC2
* 🐧 Ubuntu
* ⚡ Nginx Reverse Proxy
* 🚀 PM2 Process Manager
* 📌 Elastic IP
* 🔒 HTTPS / SSL using Let's Encrypt
* 🗄️ MongoDB Atlas

Nginx handles incoming web traffic and reverse-proxies API requests to the Node.js backend.

PM2 keeps the Node.js backend process running in the production environment.

---

## 📡 REST API

### 🔐 Authentication

| Method | Endpoint  | Description                    |
| ------ | --------- | ------------------------------ |
| `POST` | `/signup` | Create a new user account      |
| `POST` | `/login`  | Authenticate a user            |
| `POST` | `/logout` | Log out the authenticated user |

### 👤 Profile

| Method  | Endpoint        | Authentication | Description                               |
| ------- | --------------- | -------------- | ----------------------------------------- |
| `GET`   | `/profile/view` | Required       | Retrieve the authenticated user's profile |
| `PATCH` | `/profile/edit` | Required       | Update profile information                |

### 👨‍💻 Developer Feed

| Method | Endpoint | Authentication | Description                                                                    |
| ------ | -------- | -------------- | ------------------------------------------------------------------------------ |
| `GET`  | `/feed`  | Required       | Retrieve suggested developers with pagination and connection/request filtering |

### 🤝 Connection Requests

| Method | Endpoint                             | Authentication | Description                           |
| ------ | ------------------------------------ | -------------- | ------------------------------------- |
| `POST` | `/request/send/:status/:userId`      | Required       | Send a connection request             |
| `POST` | `/request/review/:status/:requestId` | Required       | Accept or reject a connection request |

### 🌐 Connections

| Method | Endpoint            | Authentication | Description                       |
| ------ | ------------------- | -------------- | --------------------------------- |
| `GET`  | `/user/connections` | Required       | Retrieve all accepted connections |

### 💬 Chat

| Method | Endpoint          | Authentication | Description                                                                                                         |
| ------ | ----------------- | -------------- | ------------------------------------------------------------------------------------------------------------------- |
| `GET`  | `/chat/:toUserId` | Required       | Retrieve the chat between the authenticated user and the specified user, or create a new chat if one does not exist |

The chat endpoint also populates message sender information including the sender's first and last name.

### 💳 Payments

| Method | Endpoint           | Authentication     | Description                                                  |
| ------ | ------------------ | ------------------ | ------------------------------------------------------------ |
| `POST` | `/payment/create`  | Required           | Create a Razorpay order for the selected membership          |
| `POST` | `/payment/webhook` | Razorpay Signature | Process Razorpay payment events and update membership status |
| `GET`  | `/payment/verify`  | Required           | Retrieve the authenticated user's membership information     |

#### `POST /payment/create`

Creates a Razorpay order based on the selected membership type.

The endpoint:

* Creates a Razorpay order
* Stores payment/order information in MongoDB
* Returns the Razorpay key ID and saved order details

#### `POST /payment/webhook`

Handles Razorpay webhook events.

The webhook:

* Verifies the Razorpay webhook signature
* Updates the payment status
* Handles successful `payment.captured` events
* Activates premium membership after successful payment
* Stores the membership type
* Calculates membership expiry

  * Silver → 2 months
  * Gold → 6 months
* Handles failed payments

#### `GET /payment/verify`

Returns the authenticated user's current account and membership information.

This endpoint is protected by the authentication middleware.

---

## 📦 Installation

### 1. Clone the repository

```bash
git clone https://github.com/09asad/devlinker-backend.git
```

### 2. Navigate to the project

```bash
cd devlinker-backend
```

### 3. Install dependencies

```bash
npm install
```

### 4. Configure environment variables

Create a `.env` file and configure the required environment variables for:

* MongoDB
* JWT
* Razorpay
* Razorpay webhook secret
* Server configuration
* Other application secrets

### 5. Run the development server

```bash
npm run dev
```

---

## 📁 Project Structure

```text
src/
├── config/
├── middleware/
├── models/
├── routes/
├── utils/
├── app.js
└── server.js
```

---

## 🔮 Future Improvements

* 📞 Voice calling between connections
* 🔔 Advanced real-time notifications
* 🔍 Advanced developer search
* 🎯 Skill-based developer matching
* 🤝 Project collaboration
* 👥 Developer communities
* 💼 Job and internship opportunities
* 📊 User activity dashboard
* 📱 Dedicated mobile application
* 🤖 AI-assisted developer matching

---

## 🔗 Related Repository

### Frontend

https://github.com/09asad/devlinker-frontend

The frontend repository contains the React + Vite application, Redux Toolkit state management, responsive UI, Socket.IO client integration, and frontend payment flow.

---

## 👨‍💻 Author

**Asad Khan**

GitHub: https://github.com/09asad

---

⭐ If you found this project useful, consider giving it a star!
