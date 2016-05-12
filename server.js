var express = require('express'),
    errorHandler = require('errorhandler'),
    app = express(),
	proxy = require('express-http-proxy');

var HOSTNAME = 'localhost',
    PORT = 8081,
    PUBLIC_DIR = __dirname + '/public_html';
var i = 0;
app.use(function (req,res,done) {
	var data = new Date();
	console.log("[%s][%d]\n",data,i++);
	// Здесь нужно написать журналирование в формате
	// (журналирование - вывод в консоль)
	// [время] [номер запроса по счету]
	done();
});

app
	.use('/', express.static(PUBLIC_DIR))
	.use(errorHandler());

app.listen(PORT, function () {
	console.log("Simple static server showing %s listening at http://%s:%s", PUBLIC_DIR, HOSTNAME, PORT);
});



app.use('/api', proxy('http://localhost:8081/', {
	forwardPath: function (req, res) {
        var url = '/api' + require('url').parse(req.url).path;
        console.log('Proxy: ' + url);
        return url;
    }
}));
