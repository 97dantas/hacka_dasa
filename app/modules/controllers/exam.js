module.exports = app => {
    const Exam = require('../models/exam')
    const Persistence = require('../../helpers/persistence')(Exam)
    const Validate = require('../../helpers/validate')
    return {
        create: (req, res) => {
            Persistence.create(res)(res.body)
        }
    }
}
