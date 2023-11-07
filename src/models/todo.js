const mongoose = require('mongoose');

const Todo = mongoose.model('Todo', {
    todo: {
        type: String
    }
})

module.exports = Todo