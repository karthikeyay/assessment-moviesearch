import { createAction, props } from '@ngrx/store';
import { Movie } from '../models/movies.model';

export const searchMovies = createAction(
  '[Movies] Search Movies',
  props<{ term: string }>()
);

export const moviesLoadSuccess = createAction(
  '[Movies] Movies Loading Success',
  props<{ movies: Movie[] }>()
);

export const moviesLoadFailed = createAction('[Movies] Movies Loading Failed');

export const loadMovie = createAction(
  '[Movies] Load Movie Info',
  props<{ id: string }>()
);

export const loadMovieSuccess = createAction(
  '[Movies] Load Movie Success',
  props<{ selected: Movie }>()
);

export const loadMovieFailed = createAction('[Movies] Load Movie Failed');
