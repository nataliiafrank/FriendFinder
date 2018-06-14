// DEPENDENCIES
const express = require('express');
const bodyParser = require('body-parser');

// Create Express Server
const app = express();

var PORT = process.env.PORT || 3000;

//BODY PARSER
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
 
// parse application/json
app.use(bodyParser.json());

// Require Routs
require('./routing/apiRoutes.js')(app);
require('./routing/htmlRoutes.js')(app);

// Listen to Port
app.listen(PORT, function(){
    console.log('Server is listening on PORT ' + PORT)
});