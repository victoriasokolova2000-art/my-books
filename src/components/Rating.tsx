import { BookIkon } from "./Star";
import './Rating.css';

export function Rating({rating}: {rating: number}) {
    const starsBook = Array.from({length: 10}, (_,i) => i+1);

    return (
        <div className="rating-container">
            {starsBook.map((starNumber) => (
                <BookIkon 
                    key={starNumber}
                    className={`star-icon ${starNumber <= rating ? 'star-icon--active' : ''}`}
                />
            ))}
        </div>
    )
}