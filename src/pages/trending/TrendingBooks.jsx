import React from 'react'
import BookCard from '../books/BookCard';
import { getAllBooks } from '../../data/books';

const TrendingBooks = () => {
    const books = getAllBooks();
    const trendingBooks = books.sort((a, b) => b.rating - a.rating);
    console.log(books)
  return (
    <div className="content">
    <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-7">
        {trendingBooks?.map((book, index) => (
            <BookCard key={index} book={book} />
        ))}
    </div>
</div>
  )
}

export default TrendingBooks