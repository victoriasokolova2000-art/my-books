import { books, authors } from "../data/books";
import { BookCard } from "../components/BookCard";
import { Link } from "react-router-dom";
import './HomePage.css';

export function HomePage() {
    const latesBooks = books.slice(-4);
    return (
        <div className="home-page">
            <section className="home-page__hero">
                <h1 className="home-page__title">Моя бибилиотека</h1>
                <p className="home-page__subtitle">Личный трекер прочитанных книг и любимых авторов</p>
            </section>

            <section className="home-page__stats">
                <div className="stat-card">
                    <span className="stat-card__number">{books.length}</span>
                    <span className="stat-card__label">Прочитано книг</span>
                </div>
                <div className="stat-card">
                    <span className="stat-card__number">{authors.length}</span>
                    <span className="stat-card__label">Авторов в базе</span>
                </div>
            </section>

            <section className="home-page__nav">
                <Link to="/books" className="home-btn">
                    Смотреть все книги
                </Link>
                <Link to="/authors" className="home-btn home-btn--outline">
                    Смотреть всех авторов
                </Link>
            </section>

            <section className="home-page__latest">
                <h2 className="home-page__latest-title">Последние добавленные</h2>
                <div className="home-page__grid">
                    {latesBooks.map((book) => (
                        <BookCard key={book.id} book={book} />
                    ))}
                </div>
            </section>
        </div>
    )
}