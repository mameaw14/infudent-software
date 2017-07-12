var webpack = require('webpack');
var webpackDevMiddleware = require('webpack-dev-middleware');
var webpackHotMiddleware = require('webpack-hot-middleware');
var config = require('./webpack.config');
var express = require('express');
var app = new express();
var port = 80;
var temp

var compiler = webpack(config);
app.use(express.static(__dirname + '/'));
app.use(webpackDevMiddleware(compiler, { noInfo: true, publicPath: config.output.publicPath }));
app.use(webpackHotMiddleware(compiler));

app.get("/", function(req, res) {
  res.sendFile(__dirname + '/index.html');
});
app.get('/free-elective', function (req, res) {
  	res.end(temp)
})
app.get('/free-elective/:msg', function (req, res) {
	temp = req.params.msg

   console.log("/free-elective/" + req.params.msg)
   res.end("{data:'Recived!'}")
})

app.listen(port, function(error) {
  if (error) {
    console.error(error);
  } else {
    console.info("==> 🌎  Listening on port %s. Open up http://localhost:%s/ in your browser.", port, port);
  }
});
