const express = require('express')
const app = express();
const path = require("path");

app.listen(8080, function(){
    console.log("fuck yeah")
});
app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + '/content/index.html'));
});
app.get('/josh', function (req, res) {
    res.send("josh is also good");
});

