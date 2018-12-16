const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Exam = new Schema({
    name: { type: String, require: true },
    crm: { type: String, require: false }
})

module.exports = mongoose.model('Exam', Exam)
