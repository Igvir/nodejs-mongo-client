//servidor nodeJS
var express = require('express');
const cors = require('cors');
var app = express();
var server = require('http').createServer(app);
var bodyparser = require('body-parser');
var env = process.env.NODE_ENV || 'development';
var config = require('./config')[env];

const compression = require("compression");
app.use(compression());

//***Puerto */
var port = config.server.port;
//***********/

app.use(cors());

app.use(bodyparser.json());
app.use(express.urlencoded({ extended: true })); // para usar POST con Content-Type: application/x-www-form-urlencoded
app.use(express.static(__dirname + '/public')); //serving statics files like css, js, images
app.use(express.static('./static/'));

app.use('/api/ranking', require('./routes/ranking'));

/*async function test(){
    let regs=await pool.query('SELECT * FROM users');
    console.log(regs);
}

test();*/

app.use('/*', function (req, res) {
    res.sendFile(__dirname + '/static/index.html');
});

server.listen(port, function () {
    console.log(`Server listening on port *: ${port} on ${env} environment`);
});