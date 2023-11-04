//module imports
const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const dotenv = require("dotenv").config("./.env");
const mongoose = require('mongoose'); 

//save express instance to app
const app = express();

//local imports
const routes = require("./routes/routes");

//app settings
app.use(bodyParser.urlencoded({ extended: false }));
app.use(morgan("dev"));

//env variables
const PORT = process.env.PORT; 

//route handler
app.use("/", routes);
//driver code

mongoose.connect(process.env.MONGO_URI)
.then(() => {
  app.listen(PORT, (req, res) => {
    console.log("Database connected"); 
    console.log("Server started");
  });
}).catch((err) => {
  console.log("There is a problem in starting server");
})

