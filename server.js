



const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors')
const router = require('./routes/router');
const app = express();
const PORT = process.env.PORT || 5500;

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
app.use('/api', router);


// const uri = 'mongodb+srv://indusunkari7:wa4A2a6fyyJXhb5E@cluster0.qxxy8tt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';
const uri ='mongodb+srv://indusunkari7:J5uQWsTsBuLKQRVL@cluster0.rinj5sl.mongodb.net/';
 
mongoose.connect(uri, {  
  
 
  });
const db = mongoose.connection;
db.on('error', (error) => {
  console.error('Error connecting to MongoDB Atlas with Mongoose:', error);
});
db.once('open', () => {
  console.log('Connected to MongoDB Atlas with Mongoose');
});

app.get('/', (req, res) => {
  res.send('welcome to snv');
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
