var articles = require('./routes/articles'),
		express = require('express');

var app = new express()
var port = 3001

//Routes
app.use('/articles', articles);

app.listen(port, function(error) {
  if (error) {
    console.error(error)
  } else {
    console.info("==> 🌎  Listening on port %s. Open up http://localhost:%s/ in your browser.", port, port)
  }
})
