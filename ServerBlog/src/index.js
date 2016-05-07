import express from 'express'
import articles from './routes/articles'

let app = new express()
const port = 3001

//Routes
app.use('/articles', articles);

app.listen(port, function(error) {
  if (error) {
    console.error(error)
  } else {
    console.info("==> 🌎  Listening on port %s. Open up http://localhost:%s/ in your browser.", port, port)
  }
})