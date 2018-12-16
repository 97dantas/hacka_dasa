module.exports = app => {
    const Errors = require('../../errors/user/error')
    const Validate = require('../../helpers/validate')
    return {
        auth: (req, res, next) => {
            const required = ['email', 'password']
            const error = Validate.requestRequired(req, required, Errors)
            error ? res.status(400).json(error) : next()
        },
        create: (req, res, next) => {
            const required = ['email', 'password', 'name']
            const error = Validate.requestRequired(req, required, Errors)
            error ? res.status(400).json(error) : next()
        },
        update: (req, res, next) => {
            const required = ['email', 'password', 'name']
            const error = Validate.requestOptional(req, required, Errors)
            error ? res.status(400).json(error) : next()
        },
        isId: (req, res, next) => Validate.isId(req.params._id)
    }
}
