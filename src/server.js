const port = 3003
const express = require('express')
const database = require('./dummyDataBase')
const app = express()
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: true }))

app.get('/books', (req, res) => {
    res.send(database.getBooks())
})

app.get('/books/:id', (req, res) => {
    res.send(database.getBook(req.params.id))
})

app.post('/books', (req, res) => {
    const book = database.addBook({
        title: req.body.title,
        author: req.body.author,
        genre: req.body.genre,
        borrowed: false
    })
    res.send(book)
})

app.put('/books/:id', (req, res) => {
    const book = database.addBook({
        id: req.params.id,
        title: req.body.title,
        author: req.body.author,
        genre: req.body.genre
    })
    res.send(book)
})

app.delete('/books/:id', (req, res) => {
    const book = database.deleteBook(req.params.id)
    res.send(book)
})

app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})