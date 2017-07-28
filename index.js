'use strict'

var connect = require('connect');
var serveStatic = require('serve-static');

var port = process.env.PORT || 5000;

connect().use(serveStatic(__dirname)).listen(port, function(){
    console.log('Server running on 8080...');
});

/*const express = require('express')
const bodyParser = require('body-parser')
const app = express()
var path = require('path')


var port = process.env.PORT || 5000;


app.set('port', port)

app.use(express.static(path.join(__dirname, 'assets')));
app.use(express.static(path.join(__dirname, 'css')));

app.use(bodyParser.urlencoded({
    extended: false
}))

app.use(bodyParser.json())

// Index route
app.get('/', function(req, res) {
     res.sendfile('./index.html');
//    res.render('./index.html');
    //res.send('asdasd')
})




// Spin up the server
app.listen(app.get('port'), function() {
    console.log('running on port', app.get('port'))
})
*/