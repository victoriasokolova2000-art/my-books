export interface Book {
    id: number;
    title: string;
    authorId: number;
    genre: string;
    rating: number; // 1-10
    quote: string;
    description: string;
    coverUrl?: string;
    myOpinion: string;
}

export interface Author {
    id: number;
    name: string;
    bio: string;
}