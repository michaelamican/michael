var express = require('express');
var app = express();
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var session = require('express-session');
var path = require('path');

app.use(express.static(__dirname + '/dist/public'));
app.use(session({
    secret: 'jigglypuff',
    resave: false,
    saveUnitialized: true,
    cookie: { maxAge: 100000 }
}));
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost/portfolio');

mongoose.Promise = global.Promise;

require('./server/config/mongoose.js');

require('./server/config/routes.js')(app);

app.on('listening', function(){
    console.log('server listening');
})
app.listen(9000, function(){
    console.log('Power level over 9000!!!!!!!');
})

app.all("*", (req, res, next) => {
    res.sendFile(path.resolve('./dist/public/index.html'))
});
