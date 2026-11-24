import { useParams } from "react-router-dom";
import { books, authors } from "../data/books";
import { Link } from "react-router-dom";
import './BookDateilPage.css';

export function BookDetailPage() {
    const { id } = useParams();
    const bookId = Number(id);

    const book = books.find((b) => b.id === bookId);

    if(!book) {
        return (
            <div style={{ padding: '40px', textAlign: 'center'}}>
                <h2>Книга не найдена</h2>
                <Link to='/books'>Вернуться к списку книг</Link>
            </div>
        );
    }

    const author = authors.find((a) => a.id === book.authorId);

    return (
        <div className="book-detail">
            <Link to='/books' className="book-detail__back-link">
                Назад ко всем книгам
            </Link>

            <div className="book-detail_content">
                <div className="book-detail__cover">
                    {book.coverUrl ? (
                        <img src={book.coverUrl} alt={book.title} />
                    ) : (
                        <div className="book-detail__placeholder">{book.title.charAt(0)}</div>
                    )}
                </div>

                <div className="book-detail__info">
                    <h1 className="book-detail__title">{book.title}</h1>

                    <p className="book-detail__author">
                        Автор: <strong>{author ? author.name : "Неизвестен"}</strong>
                    </p>

                    <div className="book-detail__meta">
                        <span>Жанр: {book.genre}</span>
                        <span>Оценка: ★ {book.rating}/10</span>
                    </div>

                    {book.quote && (
                        <blockquote className="book-detail__quote">
                            «{book.quote}»
                        </blockquote>
                    )}

                    <div className="book-detail__description">
                        <h3>О чём эта книга:</h3>
                        <p>{book.description}</p>
                        <h4>Личное мнение:</h4>
                        <p>{book.myOpinion}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}