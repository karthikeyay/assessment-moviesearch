import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { MoviesApiService } from 'src/app/services/movies-api.service';
import * as MoviesActions from '../actions/movies.actions';
import { catchError, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable()
export class MoviesEffects {
  constructor(private actions$: Actions, private moviesApi: MoviesApiService) {}

  $searchMovies = createEffect(() =>
    this.actions$.pipe(
      ofType(MoviesActions.searchMovies.type),
      switchMap(({ term }: { term: string }) =>
        this.moviesApi.getMovies(term).pipe(
          switchMap((response) =>
            of(MoviesActions.moviesLoadSuccess({ movies: response.Search }))
          ),
          catchError((err) => of(MoviesActions.moviesLoadFailed))
        )
      )
    )
  );

  $loadMovie = createEffect(() =>
    this.actions$.pipe(
      ofType(MoviesActions.loadMovie.type),
      switchMap(({ id }: { id: string }) =>
        this.moviesApi.getMovie(id).pipe(
          switchMap((movie) =>
            of(MoviesActions.loadMovieSuccess({ selected: movie }))
          ),
          catchError((err) => of(MoviesActions.loadMovieFailed))
        )
      )
    )
  );
}
