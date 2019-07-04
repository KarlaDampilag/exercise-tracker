const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config(); // this configures to have the environment variables in the .env file

const app = express();
const port = process.env.PORT || 5000;

/* Middleware */
app.use(cors()); // cors middleware
app.use(express.json()); //allows us to parse json

/* Connect to db  */
const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true });
const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
});

const exercisesRouter = require('./routes/exercises');
const usersRouter = require('./routes/users');

app.use('/exercises', exercisesRouter); // routes exercisesRouter to the /exercises URL
app.use('/users', usersRouter);

/* Starts the server */
app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
