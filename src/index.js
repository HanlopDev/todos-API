const express = require('express')
const fs = require("fs");

require("./db/mongoose")

const Todo = require('./models/todo')

const app = express();

app.use(express.json())

app.get('/todos', (req, res) => {
    fs.readFile(__dirname + '/' + "todos.json", 'utf-8', (err, data) => {
        if (err) {
            return console.log(err)
        }
        res.status(200).send(data)
    })
})

app.post('/todos', (req, res) => {
    const todo = new Todo(req.body)
    todo.save()
    .then(() => {
        res.status(200).send(todo)
    })
    .catch((err) => {
        res.status(500).send(err)
    })
})

app.listen(3000, () => {
    console.log("Server is up on port 3000")
})

