const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Building = new Schema(
    {
        
        name: { type: String, required: true },
        img: {type: String, required: true},
        info: { type: String, required: true },
        left: {type: Number, required: false},
        right: {type: Number, required: false},
        up: {type: Number, required: false},
        down: {type: Number, required: false},
    },
)

module.exports = mongoose.model('building', Building)