module.exports = app => {
    const url = `/uber`
    const Controller = require('../controllers/uber')(app)
    const Validate = require('../validates/user')(app)
    const veryfyToken = require('../../helpers/jwt')
    app.route(url)
        .get(Controller.pricing)
}
