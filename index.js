'use strict'

const express = require('express')
const bodyParser = require('body-parser')
const app = express()


var port = process.env.PORT || 5000;

app.set('port', port)


app.use(bodyParser.urlencoded({
    extended: false
}))

app.configure(function() {
    app.use(express.static(__dirname));
});


app.use(bodyParser.json())

// Index route
app.get('/', function(req, res) {
    res.render('./index.html');
    //res.send('asdasd')
})




// Spin up the server
app.listen(app.get('port'), function() {
    console.log('running on port', app.get('port'))
})
