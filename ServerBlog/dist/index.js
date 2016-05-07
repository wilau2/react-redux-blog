'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _articles = require('./routes/articles');

var _articles2 = _interopRequireDefault(_articles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = new _express2.default();
var port = 3001;

//Routes
app.use('/articles', _articles2.default);

app.listen(port, function (error) {
  if (error) {
    console.error(error);
  } else {
    console.info("==> 🌎  Listening on port %s. Open up http://localhost:%s/ in your browser.", port, port);
  }
});