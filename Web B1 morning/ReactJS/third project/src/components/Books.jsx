import React, { useState } from "react";

const booksData = [
  { id: "1", title: "Learn To Code With JavaScript", author: "Darren Jones" },
  {
    id: "2",
    title: "JavaScript: The Definitive Guide",
    author: "David Flanagan",
  },
  { id: "3", title: "Eloquent JavaScript", author: "Marijn Haverbeke" },
];
const Books = () => {
  const [books, setBooks] = useState(booksData);
  const [formData, setFormData] = useState({
    id: null,
    title: "",
    author: "",
  });

  let handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  let handleAddBook = (e) => {
    e.preventDefault();
    if (formData.id) {
      let udpateBooks = books.map((book) => {
        return book.id === formData.id ? formData : book;
      });

      setBooks(udpateBooks);

      console.log(formData.id);
    } else {
      let lastBookId = books[books.length - 1].id ?? 0;

      setBooks((prevBooks) => [
        ...prevBooks,
        { ...formData, id: lastBookId + 1 },
      ]);
    }
  };
  let handleEdit = (book) => {
    setFormData(book);
  };
  return (
    <div className="p-10">
      <h1 className="text-3xl font-semibold mb-3">Books</h1>
      <form
        onSubmit={handleAddBook}
        className="border p-5 rounded-2xl flex flex-col gap-3 mb-10"
      >
        <div className="flex flex-col gap-1">
          <label htmlFor="">Title</label>
          <input
            onChange={handleChange}
            className="border focus:outline-none p-2 rounded"
            type="text"
            name="title"
            value={formData.title}
          />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="">Author</label>
          <input
            onChange={handleChange}
            className="border focus:outline-none p-2 rounded"
            type="text"
            name="author"
            value={formData.author}
          />
        </div>
        <button className="border focus:outline-none p-2 rounded cursor-pointer hover:bg-green-600 hover:text-white">
          {formData.id ? "Update Book" : "Add Book"}
        </button>
      </form>
      <ul className="flex gap-3 flex-wrap justify-between">
        {books.map((book) => (
          <li
            className="border rounded-2xl p-5 w-fit relative pt-10"
            key={book.id}
          >
            <div className="flex gap-2 absolute top-2 right-2">
              <span
                className="text-red-500 cursor-pointer  border rounded-full p-1 bg-white"
                onClick={() => setBooks(books.filter((b) => b.id !== book.id))}
              >
                ❌
              </span>
              {/* Edit */}
              <span
                onClick={() => handleEdit(book)}
                className="text-blue-500 cursor-pointer border rounded-full p-1 bg-white"
              >
                Edit
              </span>
            </div>
            <span className="text-2xl font-semibold">Title:</span> {book.title}{" "}
            <br />
            <span className="text-2xl font-semibold">Author:</span>{" "}
            {book.author}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Books;
