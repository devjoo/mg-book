module.exports = (app, Book) => {
    //get all books
    app.get('/api/books', (req, res) => {
        Book.find((err, books) => {
            if (err) return res.status(500).send({ error: `database failure` })
            res.json(books)
        })
    })

    //get single book
    app.get('/api/books/:book_id', (req, res) => {
        res.end()
    })

    // GET BOOK BY AUTHOR
    app.get('/api/books/author/:author', (req, res) => {
        res.end()
    })

    // CREATE BOOK
    app.post('/api/books', (req, res) => {
        let book = new Book()
        book.title = req.body.name
        book.author = req.body.author
        book.published_date = new Date(req.body.published_date)

        book.save( (err) => {
            if (err) {
                console.error(err)
                res.json({ result: 0 })
                return
            }
            res.json({ result: 1 })
        } )
    })

    // UPDATE THE BOOK
    app.put('/api/books/:book_id', (req, res) => {
        res.end()
    })

    // DELETE BOOK
    app.delete('/api/books/:book_id', (req, res) => {
        res.end()
    })
}