const mongoose = require('mongoose')
const Schema = mongoose.Schema

let bookSchema = new Schema({
    title: String,
    author: String,
    published_date: { type: Date, default: Date.now }
})

module.exports = mongoose.model('book', bookSchema)