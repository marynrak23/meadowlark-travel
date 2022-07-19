const handlers = require('../handlers')

test('home page render', () => {
    const req = {}
    const res = { render: jest.fn() }
    handlers.home(req, res)
    expect(res.render.mock.calls[0][0]).toBe('home')
})

test('about page render with fortune', () => {
    const req = {}
    const res = { render: jest.fn() }
    handlers.about(req, res)
    expect(res.render.mock.calls.length).toBe(1)
    expect(res.render.mock.calls[0][0]).toBe('about')
    expect(res.render.mock.calls[0][1])
        .toEqual(expect.objectContaining({
            fortune: expect.stringMatching(/\w/),
        }))
})

test('render 404 error handler', () => {
    const req = {}
    const res = { render: jest.fn() }
    handlers.notFound(req, res)
    expect(res.render.mock.calls.length).toBe(1)
    expect(res.render.mock.calls[0][0]).toBe('404')
})

test('render 500 error handler', () => {
    const err = new Error('some error')
    const req = {}
    const res = { render: jest.fn() }
    const next = jest.fn()
    handlers.serverError(req, res, err, next)
    expect(res.render.mock.calls.length).toBe(1)
    expect(res.render.mock.calls[0][0]).toBe('500')
})

test('render thanks page', () => {
    const req = {}
    const res = { render: jest.fn() }
    handlers.newsletterSignupThankYou(req, res)
    expect(res.render.mock.calls[0][0]).toBe('newsletter-signup-thank-you')
})


