import { Link, useParams } from "react-router-dom";
import { authors, books } from "../data/books";
import { BookCard } from "../components/BookCard";
import './AuthorDateilPage.css'

export function AuthorDateilPage() {
    const { id } = useParams();
    const authorId = Number(id);

    const author = authors.find((a) => a.id === authorId);
    if(!author) {
        return (
            <div>
                <h2>Автор не найден</h2>
                <Link to="/authors">Вернуться ко всем авторам</Link>
            </div>
        )
    }

    const authorBooks = books.filter((b) => b.authorId === author.id)

    return (
        <div className="author-detail">
            <Link to="/authors">Вернуться ко всем авторам</Link>

            <div className="author-detail__content">
                <h1 className="author-detail__title">{author.name}</h1>
                <p className="author-detail_bio">{author.bio}</p>

                <h2 className="author-detail__title-books">Книги автора:</h2>
                {authorBooks.length === 0 ? (
                    <p>У этого автора пока нет прочитанных книг</p>
                ) : (
                    <div className="author-detail__grid"> 
                        {authorBooks.map((book) => (
                            <BookCard key={book.id} book={book} />
                        ))}
                    </div>
                )}
            </div>
        </div>   
    )
}