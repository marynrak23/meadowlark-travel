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
    console.log(chalk.bgRed('ERROR') + '\n' + error.message)
    res.render('500')
}

exports.newsletterSignup = (req, res) => {
    res.render('newsletter-signup', { csrf: 'Here saves CSRF Token' })
}

exports.newsletterSignupProcess = (req, res) => {
    console.log('--------------------------')
    console.log(chalk.bgYellow('FORM DATA RECEIVED'))
    console.log('Form (from request string): ' + req.query.form)
    console.log('Token CSRF (from hidden field): ' + req.body._csrf)
    console.log('Name (from visible field form): ' + req.body.name)
    console.log('Email (from visible field form): ' + req.body.email)
    res.redirect(303, '/newsletter-signup/thank-you')
}

exports.newsletterSignupThankYou = (req, res) => {
    res.render('newsletter-signup-thank-you')
}