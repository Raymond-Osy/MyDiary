'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _morgan = require('morgan');

var _morgan2 = _interopRequireDefault(_morgan);

var _routes = require('./routes/routes');

var _routes2 = _interopRequireDefault(_routes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();
var http = require('http');

app.use(_bodyParser2.default.json());
app.use((0, _morgan2.default)('dev'));
app.use(_bodyParser2.default.urlencoded({
  extended: true
}));
app.use('/api/v1', _routes2.default);

// returns 404 for unknown routes
app.all('*', function (req, res) {
  res.status(404).send('Hello world!');
});

var port = parseInt(process.env.PORT, 10) || 8000;
app.set('port', port);

var server = http.createServer(app);
server.listen(port);
exports.default = app;