const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();

app.use(express.json());
app.use(cors()); 

mongoose.connect("mongodb://127.0.0.1:27017/mern-todo", {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log("Connected to DB")).catch(console.error);

const Todo = require('./models/Todo');

app.get('/todos', async (req, res) => {
    const todos = await Todo.find();
    res.json(todos);

});

app.post('/todo/new', (req, res) => {
    const todo = new todo({
        text: req.body.test
    });

    todo.save();

    res.json('/todo/delete/:id', async (req, res) => {
        const result = await Todo.findByIdAndDelete(req.param.id);

        res.json(result);
    })

});

app.delete('/todo/do')
app.listen(3001, () => console.log("Server started on port 3001"));



