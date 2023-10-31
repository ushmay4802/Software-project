//module imports 
const express = require('express'); 
const morgan = require('morgan');
const bodyParser = require('body-parser'); 

//save express instance to app 
const app = express(); 

//local imports 
const routes = require('./routes/routes');

//app settings 
app.use(bodyParser.urlencoded({ extended: false }));
app.use(morgan('dev')); 

//route handler
app.use('/', routes)
//driver code 
app.listen(3000, (req, res) => {
    console.log("Server started");
})