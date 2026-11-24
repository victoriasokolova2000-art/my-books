import { Link } from "react-router-dom";
import type { Book } from "../types";
import { authors } from "../data/books";
import './BookCard.css';
import { Rating } from "./Rating";

interface BookCardProps {
    book: Book;
}

export function BookCard ({book}: BookCardProps) {
    const author = authors.find(a => a.id === book.authorId);
    const bookLink = `/book/${book.id}`;

    return (
        <article className="book-card">
            <div className="book-card__cover">
                {book.coverUrl ? (
                    <img src={book.coverUrl} alt={`Обложка книги ${book.title}`} className="book-card__img"/>
                ) : (
                    <div className="book-card__cover-placeholder">
                        {book.title.charAt(0)}
                    </div>
                )}
            </div>

            <div className="book-card__info">
                <Link to={bookLink} className="book-card__title">
                    <h3>{book.title}</h3>
                </Link>

                <p className="book-card__author">
                    {author ? author.name : 'Автор неизвестен'}
                </p>

                <div className="book-card__meta">
                    <span className="book-card__ganre">{book.genre}</span>
                    <div className="book-card__rating">
                        <Rating rating={book.rating} />
                        <span className="book-card__rating">{book.rating}/10</span>
                    </div>
                </div>

                <p className="book-card__description">{book.description}</p>
            </div>
        </article>
    )
}