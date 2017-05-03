var express = require('express');
var path = require('path');
var app = express();

const port = process.env.PORT || '5000';

app.set('port', port);

// Create link to Angular build directory
var distDir = __dirname + "/dist/";
app.use(express.static(distDir));
app.get('/[^\.]+$', function (req, res) {
    res.set('Content-Type', 'text-html')
        .sendFile(path.join(distDir + 'index.html'));
});

app.listen(app.get('port'), function(){
    console.log('Node app running at localhost: ' + app.get('port'));
});
