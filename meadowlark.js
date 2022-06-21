const express = require('express')
const expressHandlebars = require('express-handlebars')
const chalk = require('chalk')
const fortune = require('./lib/fortune')

const app = express()

const port = process.env.PORT || 3000

app.engine('handlebars', expressHandlebars.engine({
    defaultLayout: 'main',                              //TODO: Setup default layout as main
}))
app.set('view engine', 'handlebars')        //TODO: Init Express Handlebars engine

app.use(express.static(__dirname + '/public')) //TODO: Init static files

app.get('/', (req, res) => res.render('home')) 

app.get('/about', (req, res) => {
    res.render('about', { fortune: fortune.getFortune() })
})

app.use((req, res) => {
    res.status(404)
    res.render('404')
})

app.use((error, req, res, next) => {
    console.error(chalk.bgRed(error.message))
    res.status(500)
    res.render('500')
})


app.listen(port, () => console.log(
    chalk.bgGreen( 'SUCCESS' ) + '\n' +
    `Express start at PORT: ${port}`
))