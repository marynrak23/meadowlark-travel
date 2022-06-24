const fortune = require('./fortune')
const chalk = require('chalk')

exports.home = (req, res) => res.render('home')

exports.about = (req, res) =>
    res.render('about', { fortune: fortune.getFortune() })

exports.notFound = (req, res) => res.render('404')

exports.serverError = (req, res, next, error) => {
    console.error(chalk.bgRed('ERROR') + '\n' + error.message)
    res.render('505')
}