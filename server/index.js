const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const path = require('path');
const rateLimit = require('express-rate-limit');
const fs = require('fs');
require('dotenv').config();

const connectDB = require('./config/db');
const authRoutes = require('./routes/auth');
const userRoutes = require('./routes/user');

const app = express();
const PORT = process.env.PORT || 5000;
const isProduction = process.env.NODE_ENV === 'production';

// Connect to MongoDB
connectDB();

// Security middleware
app.use(helmet());

// Rate limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100 // limit each IP to 100 requests per windowMs
});
app.use(limiter);

// CORS configuration
if (isProduction) {
  app.use(cors());
} else {
  app.use(cors({
    origin: ['http://localhost:3000'],
    credentials: true
  }));
}

// Body parser middleware
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));

// API Routes
app.use('/api/auth', authRoutes);
app.use('/api/user', userRoutes);

// Serve static files from the React app (only in production)
if (isProduction) {
  const distPath = path.join(__dirname, '../client/dist');
  
  // Check if dist folder exists
  if (fs.existsSync(distPath)) {
    app.use(express.static(distPath));
    
    // Catch-all handler: send back React's index.html file for any non-API routes
    app.get('/*', function (req, res) {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  } else {
    // If dist folder doesn't exist, show helpful error
    app.get('/*', function (req, res) {
      res.status(500).json({
        success: false,
        message: 'Production build not found. Please run "npm run build" first.',
        error: 'ENOENT: no such file or directory, stat client/dist/index.html'
      });
    });
  }
} else {
  // In development, just serve API routes
  app.get('/', function (req, res) {
    res.json({
      success: true,
      message: 'API Server is running. Please start the React development server with "npm run client"',
      apiUrl: `http://localhost:${PORT}/api`
    });
  });
}

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ 
    success: false, 
    message: 'Something went wrong!',
    error: process.env.NODE_ENV === 'development' ? err.message : {}
  });
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
  console.log(`🌍 Environment: ${process.env.NODE_ENV || 'development'}`);
  
  if (isProduction) {
    console.log(`📦 Serving production build from client/dist`);
  } else {
    console.log(`🔧 Development mode - React dev server should run on port 3000`);
    console.log(`💡 Run "npm run client" to start the React development server`);
  }
}); 