const path = require('path');
const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const fileupload = require('express-fileupload');

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

// File upload
app.use(fileupload());

// Set static folder
app.use(express.static(path.join(__dirname, 'public')));

// Mount routers
app.use('/api/v1/auth', auth);
app.use('/api/v1/user', user);
app.use('/api/v1/livegame', livegame);
app.use('/api/v1/leaderbaord', leaderboard);
app.use('/api/v1/guessimage', guessimage);


if(process.env.NODE_ENV=="production"){
  app.use(express.static('client/build'))
  const path = require('path')
  app.get("*",(req,res)=>{
      res.sendFile(path.resolve(__dirname,'client','build','index.html'))
  })
}

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
