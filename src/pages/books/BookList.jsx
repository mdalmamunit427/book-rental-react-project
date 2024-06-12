import React from 'react'
import BookCard from './BookCard';
import { getAllBooks } from '../../data/books';

const BookList = () => {
    const books = getAllBooks();
  return (
    <div className="content">
    <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-7">
        {books?.map((book, index) => (
            <BookCard key={index} book={book} />
        ))}
    </div>
</div>
  )
}

export default BookList