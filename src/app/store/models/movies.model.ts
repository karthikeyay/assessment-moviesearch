export interface MoviesState{
    movies: Movie[];
    status: 'loading' | 'done' | 'error' | 'idle';
    status_movie: 'loading' | 'done' | 'error' | 'idle';
    selected: Movie | null
}

export interface Movie{
    Title: string;
    Year: string;
    imdbID: string;
    Type: string;
    Poster: string;
    [key: string]: string;
}

export interface MovieSearchResponse {
    Search: Movie[]
}
