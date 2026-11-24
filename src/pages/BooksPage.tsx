import { books } from "../data/books";
import { BookCard } from "../components/BookCard";
import './BookPage.css';

export function BooksPage() {
    return (
        <div className="books-page">
            <div className="books-page__header">
                <h1>Моя библиотека</h1>
                <p>Всего прочитано: {books.length} книг</p>
            </div>
            
            <div className="books-page__grid">
                {books.map((book) => (
                    <BookCard key={book.id} book={book} />
                ))}
            </div>
            
        </div>
    )
}