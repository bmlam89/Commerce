/* importing middleware */
var express = require('express');
const path = require('path'); 
var parser = require('body-parser');
var app = express();

/* setting views and using body parser for post data*/
app.use(parser.json());
app.use(express.static(path.join(__dirname, '/public/dist')));

/* mongoose setup */
require('./server/config/mongoose_setup.js');

/* routes */
require('./server/config/routes.js')(app)

app.listen(8000,function(){
    console.log('listening on 8000');
})

