import { authors } from "../data/books";
import { Link } from "react-router-dom";
import './AuthorPage.css';

export function AuthorsPage() {
    return (
        <div className="authors-page">
            <h1 className="authors-page__title">Авторы</h1>
            <div className="authors-page__block">
               <ul className="author-page__list">
                    {authors.map((author) => (
                         <li key={author.id}>
                            <Link to={`/authors/${author.id}`} className="author_link">
                                <h3 className="author-page__title-author">{author.name}</h3>
                            </Link>
                            <p className="author-bio">{author.bio}</p>
                        </li>
                     ))}
                </ul> 
            </div>
        </div>
    )
}