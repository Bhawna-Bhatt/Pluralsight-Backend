const express = require("express");
const app = express();

//data
let books = [
    { id: 1, title: '1984', author: 'George Orwell' },
    { id: 2, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald' }
]

//get all books

app.get('/books', (req, res) => {
    res.status(200).json(books)
})

// single book


const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost/:${PORT}`);
});
