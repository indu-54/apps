

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const router = require('./routes/router');
const checkauth = require('./middleware/checkauth')

const app = express();
const PORT = process.env.PORT || 4500;

// Middleware
app.use(bodyParser.json());

app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin',"*");
  res.header('Access-Control-Allow-Headers', true);
  res.header('Access-Control-Allow-Credentials', true);
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  next();
});

const uri ='mongodb+srv://indusunkari7:GdkKldYWY7D2QYz9@cluster0.gqi7igp.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

//Connect to MongoDB

const db = mongoose.connection;
mongoose.connect('mongodb://127.0.0.1:27017/task', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

db.on('error', console.error.bind(console, 'MongoDB connection error',{ }));
db.once('open', () => {
    console.log('Connected to MongoDB');
});



// mongoose.connect(uri, {   
//   // useNewUrlParser: true,
//   // useUnifiedTopology: true,

  
//   });
// const db = mongoose.connection;
// db.on('error', (error) => {
//   console.error('Error connecting to MongoDB Atlas with Mongoose:', error);
// });
// db.once('open', () => {
//   console.log('Connected to MongoDB Atlas with Mongoose');
// });

// Use  routes
app.use('/api', router);

// Define routes
app.get('/', (req, res) => {
  res.send('Hello from Render!');
});
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});



