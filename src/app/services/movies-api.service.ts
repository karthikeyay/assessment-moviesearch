import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Movie, MovieSearchResponse } from '../store/models/movies.model';

@Injectable({
  providedIn: 'root',
})
export class MoviesApiService {
  private _moviesUrl = 'http://www.omdbapi.com/?type=movie&apikey=a1b5f9ec';

  constructor(private http: HttpClient) {}

  getMovies(term: string) {
    return this.http.get<MovieSearchResponse>(
      `${this._moviesUrl}&s=${encodeURI(term)}`
    );
  }

  getMovie(id: string) {
    return this.http.get<Movie>(`${this._moviesUrl}&i=${encodeURI(id)}`);
  }
}
