import { Action, createReducer, on } from '@ngrx/store';
import { MoviesState } from '../models/movies.model';
import * as MoviesActions from '../actions/movies.actions';

export const initialState: MoviesState = {
  movies: [],
  status: 'idle',
  status_movie: 'idle',
  selected: null
};

const moviesReducer = createReducer(initialState,
    on(MoviesActions.moviesLoadSuccess, (state, {movies} ) => ({...state ,movies, status: 'done'})),
    on(MoviesActions.searchMovies, (state) => ({...state, status: 'loading'})),
    on(MoviesActions.moviesLoadFailed, (state) => ({...state, status: 'error'})),
    on(MoviesActions.loadMovie, (state) => ({...state, status_movie: 'loading'})),
    on(MoviesActions.loadMovieSuccess, (state, {selected}) => ({...state, selected, status_movie: 'done'})),
    on(MoviesActions.loadMovieFailed, (state) => ({...state, status_movie: 'error'})));

export function reducer(state: MoviesState | undefined, action: Action) {
  return moviesReducer(state, action);
}
