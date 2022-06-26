const express = require('express')
const expressHandlebars = require('express-handlebars')
const chalk = require('chalk')
const fortune = require('./lib/fortune')
const handlers = require('./lib/handlers')

const app = express()

const port = process.env.PORT || 3000

app.engine('handlebars', expressHandlebars.engine({
    defaultLayout: 'main',                              //TODO: Setup default layout as main
}))
app.set('view engine', 'handlebars')        //TODO: Init Express Handlebars engine

app.use(express.static(__dirname + '/public'))      //TODO: Init static files

app.get('/', handlers.home)

app.get('/about', handlers.about)

app.use(handlers.notFound)

app.use(handlers.serverError)

if(require.main === module) {
    app.listen(port, () => console.log(
        chalk.bgGreen( 'SUCCESS' ) + '\n' +
        `Express start at PORT: ${port}`
    ))
} else {
    module.exports = app
}
