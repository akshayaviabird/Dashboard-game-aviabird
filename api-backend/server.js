const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const cookieParser = require('cookie-parser');

// Load env file
dotenv.config({ path: './config/config.env' });

// Connect DB
const connectDB = require('./config/db');
connectDB();

// Routes files
const auth = require('./api/auth');
const user = require('./api/user');
const livegame = require('./api/livegame');
const leaderboard = require('./api/leaderboard');
const guessimage = require('./api/games/guessimage');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

// Enable CORS
app.use(cors());

app.use(cookieParser());

// Mount routers
app.use('/api/v1/auth', auth);
app.use('/api/v1/user', user);
app.use('/api/v1/livegame', livegame);
app.use('/api/v1/leaderbaord', leaderboard);
app.use('/api/v1/guessimage', guessimage);

app.listen(PORT, () => {
  console.log(`App listening in ${process.env.NODE_ENV} mode on port: ${PORT}`);
});

// Handle unhandled promise rejections
process.on('unhandledRejection', (err, promise) => {
  console.log(`Error: ${err.message}`);
  // Close server & exit process
  // server.close(() => process.exit(1));
});

module.exports = app;
