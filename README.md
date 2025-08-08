# MernStack Todo List

A full-stack MERN (MongoDB, Express, React, Node.js) todo-list application.

## Features
- User authentication (register / login / forgot-password)
- Create, read, update, delete tasks
- Mark tasks as active or completed
- Responsive UI built with React & Tailwind CSS
- Scheduled cleanup jobs for duplicate users

## Tech Stack
- **Frontend:** React, Tailwind CSS  
- **Backend:** Node.js, Express, MongoDB  
- **Authentication:** JWT  
- **Scheduler:** node-cron  

## Quick Start
1. Clone the repo  
   ```bash
   git clone https://github.com/bhargavi4470/MernStack.git
   cd MernStack
   ```

2. Install & run backend  
   ```bash
   cd backend
   npm install
   npm run dev
   ```

3. Install & run frontend  
   ```bash
   cd ../frontend
   npm install
   npm start
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Environment Variables
Create a `.env` file in `backend/`:
```
PORT=5000
MONGO_URI=<your-mongodb-connection-string>
JWT_SECRET=<your-jwt-secret>
```
