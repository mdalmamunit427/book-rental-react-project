import React from 'react'
import { getAllBooks } from '../../data/books';
import BookCard from '../books/BookCard';

const NewReleases = () => {
  const data = getAllBooks()
  const today = new Date(); // Get today's date

  // Filter books
  const oneDay = 24 * 60 * 60 * 1000; 
  const sevenDaysAgo = today.getTime() - (7 * oneDay); // Calculate timestamp for 7 days ago

  const latestBooks = data.filter((book) => {
    const bookCreatedDate = new Date(book.createdAt).getTime(); 
    return bookCreatedDate >= sevenDaysAgo;
  });

  return (
    <div className="content">
    <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-7">
        {latestBooks?.map((book, index) => (
            <BookCard key={index} book={book} />
        ))}
    </div>
</div>
  )
}

export default NewReleases