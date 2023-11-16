// import node modules
const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv").config("./.env");
const mongoose = require("mongoose");
//create experss instance
const app = express();

//import routes. 
const userRoutes = require('./routes/userRoutes');
const detailRoutes = require('./routes/detailRoutes');
//configure env variables
const PORT = process.env.PORT;
const MONGO_URI = process.env.MONGO_URI;
//using global middleware
app.use(cors());

//setting up routes
app.use(userRoutes); 
app.use(detailRoutes);
//start server
mongoose
  .connect(MONGO_URI)
  .then(() => {
    console.log("Database connected");
    app.listen(PORT, () => {
      console.log("Server started on port: ", PORT);
    });
  })
  .catch((err) => {
    console.log(err);
    console.log(
      "An error occured while connecting to database or starting server"
    );
  });
