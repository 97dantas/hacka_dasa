const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Exam = new Schema({
    data: { type: Object, required: true }
})

module.exports = mongoose.model('Exam', Exam)
