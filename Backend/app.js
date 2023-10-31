//module imports
const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const mysql2 = require("mysql2");
const dotenv = require("dotenv").config("./.env");

//save express instance to app
const app = express();

//local imports
const routes = require("./routes/routes");

//app settings
app.use(bodyParser.urlencoded({ extended: false }));
app.use(morgan("dev"));

//env variables
const host = process.env.DB_HOST;
const user = process.env.DB_USER;
const password = process.env.DB_PASSWORD;
const database = process.env.DB_DATABASE;
const PORT = process.env.PORT; 

//route handler
app.use("/", routes);
//driver code

const connection = mysql2.createConnection({
  host: host,
  user: user,
  password: password,
  database: database,
});
connection.connect((error) => {
  if (error) {
    throw error;
  } else {
    console.log("Connection created to databse");
    console.log("Starting server on port: ", PORT);
    
  }
});
connection.query("SHOW TABLES", (err, result) => {
    if(err){
        throw err; 
    }
    console.log(result[0].Tables_in_test);
})
app.listen(PORT, (req, res) => {
    console.log("Server started");
  });

