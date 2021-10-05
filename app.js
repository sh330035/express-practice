// module import
const express = require('express')
const app = express()
const exphbs = require('express-handlebars')

// variation assign
const port = 3000

// template engine
app.engine('hbs', exphbs({ defaultLayout: 'main', extname: '.hbs' }))
app.set('view engine', 'hbs')

// setting static files
app.use(express.static('public'))

// routing
app.get('/', (req, res) => {
  res.render('index')
})

app.get('/about', (req, res) => {
  res.render('about')
})

app.get('/portfolio', (req, res) => {
  res.render('portfolio')
})

app.get('/contact', (req, res) => {
  res.render('contact')
})

// server listener
app.listen(port, (req, res) => {
  console.log(`express running on the port ${port}`)
})
