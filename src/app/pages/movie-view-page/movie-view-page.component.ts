import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { Movie, MoviesState } from 'src/app/store/models/movies.model';
import * as MoviesActions from '../../store/actions/movies.actions';

@Component({
  selector: 'app-movie-view-page',
  templateUrl: './movie-view-page.component.html',
  styleUrls: ['./movie-view-page.component.scss'],
})
export class MovieViewPageComponent implements OnDestroy {
  paramSub: Subscription;
  movie$: Observable<Movie | null>;
  status$: Observable<any>;

  constructor(
    private route: ActivatedRoute,
    private store: Store<{ movies: MoviesState }>
  ) {
    this.movie$ = store.select((state) => state.movies.selected);
    this.status$ = store.select((state) => state.movies.status_movie);
    this.paramSub = route.paramMap
      .pipe(map((params) => params.get('id')))
      .subscribe((id) => {
        if (id) {
          this.store.dispatch(MoviesActions.loadMovie({ id }));
        }
      });
  }

  ngOnDestroy() {
    this.paramSub.unsubscribe();
  }
}
