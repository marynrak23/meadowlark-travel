const fortune = require('./fortune')
const chalk = require('chalk')


exports.home = (req, res) => {
    res.render('home')
}

exports.about = (req, res) => {
    res.render('about', { fortune: fortune.getFortune() })
}

exports.notFound = (req, res) => {
    res.render('404')
}

exports.serverError = (req, res, next, error) => {
    res.render('500')
    console.log(chalk.bgRed('ERROR') + '\n' + error.message)
}

exports.newsletter = (req, res) => {
    res.render('newsletter', { csrf: '_CSRF Token' })
}

exports.api = {
    newsletterSignup: (req, res) => {
        console.log('_CSRF : ' + req.body._csrf)
        console.log('Name : ' + req.body.name)
        console.log('Email : ' + req.body.email)
        res.send({result: 'success'})
    }
}