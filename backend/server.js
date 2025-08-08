import dotenv from 'dotenv';

// Import dependencies
import express from 'express';
import mongoose from 'mongoose';
import configureMiddleware from './middleware/index.js';
import Todo from './models/Todo.js';
import authRoutes from './routes/auth.js';
import taskRoutes from './routes/taskRoute.js';
import forgotPasswordRoutes from './routes/forgotPassword.js';

dotenv.config();

// Create Express app
const app = express();

// Configure middleware
configureMiddleware(app);

// Connect to MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/todos-app', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('✅ MongoDB connected');
}).catch(err => {
  console.error('❌ Connection error:', err);
});

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/task', taskRoutes);
app.use('/forgotPassword', forgotPasswordRoutes);

// 📝 Create a new todo
app.post('/todo', async (req, res) => {
  const { title, description } = req.body;

  if (!title || !description) {
    return res.status(400).json({ error: 'Title and description required' });
  }

  try {
    const newTodo = new Todo({ title, description });
    await newTodo.save();
    res.status(201).json(newTodo);
  } catch (err) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

// 📄 Get all todos
app.get('/todo', async (req, res) => {
  try {
    const todos = await Todo.find();
    res.status(200).json(todos);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch todos' });
  }
});

// 🔄 Update a todo
app.put('/todo/:id', async (req, res) => {
  const { id } = req.params;
  const { title, description } = req.body;

  try {
    const updated = await Todo.findByIdAndUpdate(
      id,
      { title, description },
      { new: true }
    );

    if (!updated) {
      return res.status(404).json({ error: 'Todo not found' });
    }

    res.status(200).json(updated);
  } catch (err) {
    res.status(500).json({ error: 'Failed to update todo' });
  }
});

// ❌ Delete a todo
app.delete('/todo/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const deleted = await Todo.findByIdAndDelete(id);

    if (!deleted) {
      return res.status(404).json({ error: 'Todo not found' });
    }

    res.status(200).json({ message: 'Todo deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: 'Failed to delete todo' });
  }
});

// 🌐 Health check route
app.get('/', (req, res) => {
  res.send('🚀 Todo App Backend is Running');
});

// Start the server
const port = 3000;
app.listen(port, () => {
  console.log(`🌍 Server is running on http://localhost:${port}`);
});
