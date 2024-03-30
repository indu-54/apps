

// const express = require('express');
// const mongoose = require('mongoose');
// const bodyParser = require('body-parser');
// const router = require('./routes/router');
// const checkauth = require('./middleware/checkauth')

// const app = express();
// const PORT = process.env.PORT || 4500;

// // Middleware
// app.use(bodyParser.json());

// app.use(function (req, res, next) {
//   res.header('Access-Control-Allow-Origin',"*");
//   res.header('Access-Control-Allow-Headers', true);
//   res.header('Access-Control-Allow-Credentials', true);
//   res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
//   next();
// });

// const mongoURI ='mongodb+srv://indusunkari7:ySK8qo9uV5sRmizR@cluster0.vqcl7cx.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

// mongoose.connect(mongoURI, {   
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

// //Connect to MongoDB

// // const db = mongoose.connection;
// // mongoose.connect('mongodb://127.0.0.1:27017/task', {
// //   // useNewUrlParser: true,
// //   // useUnifiedTopology: true
// // });

// // db.on('error', console.error.bind(console, 'MongoDB connection error',{ }));
// // db.once('open', () => {
// //     console.log('Connected to MongoDB');
// // });


// // mongoose.connect(mongoURI, {
// //   // useNewUrlParser: true,
// //   // useUnifiedTopology: true
// // })
// // .then(() => {
// //   console.log('Connected to MongoDB');
// // })
// // .catch((error) => {
// //   console.error('MongoDB connection error:', error);
// // });


// // Use  routes
// app.use('/api', router);

// // Define routes
// app.get('/', (req, res) => {
//   res.send('Hello from Render!');
// });
// app.listen(PORT, () => {
//   console.log(`Server is running on http://localhost:${PORT}`);
// });




// // MongoDB Atlas URI
// // const mongoURI  = 'mongodb+srv://indusunkari7:ySK8qo9uV5sRmizR@cluster0.vqcl7cx.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';
// const mongoURI = 'mongodb+srv://indusunkari7:X7rVMN0XxisLDP1n@cluster0.qdohzkw.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';
// // Connect to MongoDB Atlas with SSL options
// mongoose.connect(mongoURI, {
//   // useNewUrlParser: true,
//   // useUnifiedTopology: true,
//   // ssl: true, // Enable SSL
//   // sslValidate: true, // Validate SSL certificates
//   // sslCA: YOUR_CA_CERT, // Provide CA certificate if necessary
// })
// .then(() => {
//   console.log('Connected to MongoDB Atlas');
// })
// .catch((error) => {
//   console.error('MongoDB Atlas connection error:', error);
// });


const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const router = require('./routes/router');
const app = express();
const PORT = process.env.PORT || 4000;

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api', router);

const uri = 'mongodb+srv://indusunkari7:mEBAdkxGBmxfxJKv@cluster0.3p9btie.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

mongoose.connect(uri, {
  // useNewUrlParser: true,
  // useUnifiedTopology: true,
  // useCreateIndex: true,
  // useFindAndModify: false
});

const db = mongoose.connection;
db.on('error', (error) => {
  console.error('Error connecting to MongoDB Atlas with Mongoose:', error);
});
db.once('open', () => {
  console.log('Connected to MongoDB Atlas with Mongoose');
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});




