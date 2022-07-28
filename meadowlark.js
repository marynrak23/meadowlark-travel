const express = require('express')
const expressHandlebars = require('express-handlebars')
const chalk = require('chalk')
const fortune = require('./lib/fortune')
const handlers = require('./lib/handlers')
const cookieParser = require('cookie-parser')

const bodyParser = require('body-parser')

const app = express()

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

const port = process.env.PORT || 3000

app.engine('handlebars', expressHandlebars.engine({
    defaultLayout: 'main',                              //TODO: Setup default layout as main
}))
app.set('view engine', 'handlebars')        //TODO: Init Express Handlebars engine

app.use(express.static(__dirname + '/public'))      //TODO: Init static files

app.get('/', handlers.home)

app.get('/about', handlers.about)

app.get('/headers', (req, res) => {
    res.type('text/plain')
    const headers = Object.entries(req.headers)
        .map(([key, value]) => `${key}: ${value}`)
    console.log('---------------------------')
    console.log(chalk.bgYellow('BROWSER HEADERS INFO'))
    console.log(headers.join('\n'))
    res.send('Headers info console')
})

app.get('/newsletter', handlers.newsletter)
app.post('/api/newsletter-signup', handlers.api.newsletterSignup)

app.use(handlers.notFound)

app.use(handlers.serverError)


// TODO: For server security to disable response headers
/*
app.disable('x-powered-by')
*/

if(require.main === module) {
    app.listen(port, () => console.log(
        chalk.bgGreen( 'SUCCESS' ) + '\n' +
        `Express start at PORT: ${port}` + '\n' +
        chalk.bgCyan('Directory ->') + ' ' + __dirname
    ))
} else {
    module.exports = app
}
