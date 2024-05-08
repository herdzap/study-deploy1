const { addBook, getAllBooks, getDetailedBook, editBook, deleteBook } = require("./handler");

const routes = [
  {
    method: "POST",
    path: "/books",
    handler: addBook,
  },

  {
    method: "GET",
    path: "/books",
    handler: getAllBooks,
  },

  {
    method: "GET",
    path: "/books/{bookId}",
    handler: getDetailedBook,
  },

  {
    method: "PUT",
    path: "/books/{bookId}",
    handler: editBook,
  },

  {
    method: "DELETE",
    path: "/books/{bookId}",
    handler: deleteBook,
  },
];

module.exports = routes;
