const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
require("dotenv").config();


var topicsRoute = require("./routes/topics");




app.use(cors());
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true }));


const connectWithRetry = () => {
  mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    //useUnifiedTopology: true,
  })
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((err) => {
    console.error('Connection to MongoDB failed:', err);
    console.log('Retrying connection in 5 seconds...');
    
    // Retry the connection after a delay (e.g., 5 seconds)
    setTimeout(connectWithRetry, 5000);
  });
};

// Initial connection attempt
connectWithRetry();
// mongoose.connect(process.env.MONGODB_URI, {
//   useNewUrlParser: true
// });

const db = mongoose.connection;

// console.log(db);

db.once('open', () => {
  console.log('Connected to MongoDB Atlas');
});

db.on('error', (error) => {
  console.error('Error connecting to MongoDB Atlas:', error);
});

app.use("/topics", topicsRoute);
app.listen(process.env.PORT, function() {
    console.log("Server is running on Port: " + process.env.PORT);
});
