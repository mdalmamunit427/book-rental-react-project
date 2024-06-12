import React from 'react'
import { getAllBooks } from '../../data/books';
import BookCard from '../books/BookCard';

const UpcomingBooks = () => {
    const books = getAllBooks();
    const upcomingBooks = books.filter(book => book.upcoming === true);
  return (
    <div className="content">
    <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-7">
        {upcomingBooks?.map((book, index) => (
            <BookCard key={index} book={book} />
        ))}
    </div>
</div>
  )
}

export default UpcomingBooks