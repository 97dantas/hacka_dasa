const mongoose = require('mongoose')
const Schema = mongoose.Schema

const pointSchema = new mongoose.Schema({
    type: {
        type: String,
        enum: ['Point'],
        required: true
    },
    coordinates: {
        type: [Number],
        required: true
    }
})

const User = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, index: { unique: true } },
    location: {
        type: pointSchema,
        required: false
    },
    password: { type: String, required: true, select: false }
})

module.exports = mongoose.model('User', User)
