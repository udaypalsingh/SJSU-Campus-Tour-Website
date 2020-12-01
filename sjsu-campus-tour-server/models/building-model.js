const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Building = new Schema(
    { 
        _id: {type: String, required: true},
        name: { type: String, required: true },
        img: {type: String, required: true},
        info: { type: String, required: true },
        left: {type: String, required: false},
        right: {type: String, required: false},
        up: {type: String, required: false},
        down: {type: String, required: false},
    },
)

module.exports = mongoose.model('building', Building)