module.exports = app => {
    const url = `/exam`
    const Controller = require('../controllers/exam')(app)
    const veryfyToken = require('../../helpers/jwt')

    app.route(url)
        .get(Controller.create)
}
