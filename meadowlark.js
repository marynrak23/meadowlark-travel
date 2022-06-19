const express = require('express')
const expressHandlebars = require('express-handlebars')
const chalk = require('chalk')

const fortunes = [
    'Conquer your fears, or they conquer you',
    'Rivers need sources',
    'Dont be afraid of the unknown',
    'A pleasant surprise awaits you'
]

const app = express()

const port = process.env.PORT || 3000

app.engine('handlebars', expressHandlebars.engine({
    defaultLayout: 'main',
}))
app.set('view engine', 'handlebars')

app.use(express.static(__dirname + '/public'))

app.get('/', (req, res) => res.render('home'))

app.get('/about', (req, res) => {
    const randomFortune = fortunes[Math.floor(Math.random() * fortunes.length)]
    res.render('about', { fortune: randomFortune})
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