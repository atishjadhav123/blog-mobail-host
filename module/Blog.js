const mongoose = require("mongoose")

const TodoSchema = new mongoose.Schema({
    title: {
        type: String,
        require: true

    },
    task: {
        type: String,
        require: true

    },
    hero: {
        type: String,
        require: true
    },
    desc: {
        type: String,
        require: true
    }
})

module.exports = mongoose.model("blog", TodoSchema)