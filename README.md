# MernStack Todo List

A full-stack MERN (MongoDB, Express, React, Node.js) todo-list application with user authentication, task management, and automated cleanup jobs.

## 📋 Features

- **User Authentication** – Register, login, and forgot-password functionality with JWT
- **Task Management** – Create, read, update, and delete tasks with ease
- **Task Status** – Mark tasks as active or completed with visual indicators
- **Responsive Design** – Mobile-friendly UI built with React & Tailwind CSS
- **Automated Cleanup** – Scheduled jobs for removing duplicate users
- **Security** – Password hashing and JWT token-based authentication

## 🛠 Tech Stack

| Layer | Technology |
|-------|-----------|
| **Frontend** | React, Tailwind CSS |
| **Backend** | Node.js, Express.js |
| **Database** | MongoDB |
| **Authentication** | JWT (JSON Web Tokens) |
| **Task Scheduling** | node-cron |

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v14.0 or higher)
- **npm** (v6.0 or higher) or **yarn**
- **MongoDB** (local installation or MongoDB Atlas cloud account)

## 🚀 Quick Start

### 1. Clone the Repository

```bash
git clone https://github.com/bhargavi4470/MernStack.git
cd MernStack
```

### 2. Backend Setup

```bash
cd backend
npm install
```

Create a `.env` file in the `backend/` directory:

```env
PORT=5000
MONGO_URI=mongodb://localhost:27017/mernstack
JWT_SECRET=your_super_secret_jwt_key_here
NODE_ENV=development
```

**Environment Variables Guide:**
- `PORT` – Server port (default: 5000)
- `MONGO_URI` – MongoDB connection string (use MongoDB Atlas for cloud or local MongoDB)
- `JWT_SECRET` – Secret key for signing JWT tokens (use a strong, random string)
- `NODE_ENV` – Environment mode (development/production)

Start the backend server:

```bash
npm run dev
```

The backend will run on `http://localhost:5000`

### 3. Frontend Setup

In a new terminal, navigate to the frontend:

```bash
cd frontend
npm install
npm start
```

The frontend will automatically open at `http://localhost:3000`

## 📁 Project Structure

```
MernStack/
├── backend/
│   ├── models/           # MongoDB schemas (User, Task, etc.)
│   ├── routes/           # API endpoints
│   ├── middleware/       # Authentication, error handling
│   ├── controllers/      # Business logic
│   ├── config/           # Database configuration
│   ├── .env              # Environment variables
│   └── server.js         # Entry point
├── frontend/
│   ├── public/           # Static files
│   ├── src/
│   │   ├── components/   # React components
│   │   ├── pages/        # Page components
│   │   ├── services/     # API calls
│   │   ├── App.js        # Main app component
│   │   └── index.js      # React entry point
│   └── package.json
└── README.md
```

## 🔌 API Endpoints

### Authentication
- `POST /api/auth/register` – Register a new user
- `POST /api/auth/login` – Login user
- `POST /api/auth/forgot-password` – Request password reset

### Tasks
- `GET /api/tasks` – Get all tasks for logged-in user
- `POST /api/tasks` – Create a new task
- `PUT /api/tasks/:id` – Update a task
- `DELETE /api/tasks/:id` – Delete a task
- `PATCH /api/tasks/:id/toggle` – Toggle task completion status

**Note:** All task endpoints require JWT authentication in the Authorization header.

## 🗄 Database Setup

### Option 1: Local MongoDB

```bash
# Install MongoDB and start the service
# On macOS:
brew services start mongodb-community

# On Linux:
sudo systemctl start mongod

# On Windows:
net start MongoDB
```

### Option 2: MongoDB Atlas (Cloud)

1. Visit [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. Create a free account and cluster
3. Get your connection string
4. Add it to your `.env` file as `MONGO_URI`

## 📝 Usage

1. **Register** – Create a new account with email and password
2. **Login** – Sign in with your credentials
3. **Add Tasks** – Click the "Add Task" button and enter task details
4. **Manage Tasks** – Check off completed tasks, edit, or delete as needed
5. **Logout** – Click logout to end your session

## 🧪 Testing (Optional)

To add testing support:

```bash
npm install --save-dev jest supertest
npm test
```

## 🚢 Deployment

### Frontend (Vercel)

```bash
cd frontend
npm run build
vercel --prod
```

### Backend (Heroku/Railway)

1. Create account on [Heroku](https://heroku.com) or [Railway](https://railway.app)
2. Connect your GitHub repository
3. Set environment variables in the platform dashboard
4. Deploy

## 🐛 Troubleshooting

| Issue | Solution |
|-------|----------|
| **MongoDB connection fails** | Ensure MongoDB is running and `MONGO_URI` is correct |
| **JWT authentication errors** | Check that `JWT_SECRET` is set in `.env` |
| **Port already in use** | Change `PORT` in `.env` or kill the process using the port |
| **CORS errors** | Ensure frontend and backend URLs match in CORS configuration |
| **npm install fails** | Delete `node_modules` and `package-lock.json`, then run `npm install` again |

## 📋 Contributing

Contributions are welcome! To contribute:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/YourFeature`)
3. Commit your changes (`git commit -m 'Add YourFeature'`)
4. Push to the branch (`git push origin feature/YourFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the **MIT License** – see the [LICENSE](LICENSE) file for details.

## 👤 Author

**Bhargavi**  
GitHub: [@bhargavi4470](https://github.com/bhargavi4470)

## 📧 Support

For issues, questions, or suggestions, please [open an issue](https://github.com/bhargavi4470/MernStack/issues) on GitHub.

---

**Happy coding! 🎉**
