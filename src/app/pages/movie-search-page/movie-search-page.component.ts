import {
  AfterViewInit,
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { fromEvent, Observable, Subscription } from 'rxjs';
import {
  debounceTime,
  distinctUntilChanged,
  filter,
  map,
  switchMap,
  tap,
} from 'rxjs/operators';
import { Movie, MoviesState } from 'src/app/store/models/movies.model';
import * as MoviesActions from '../../store/actions/movies.actions';

@Component({
  selector: 'app-movie-search-page',
  templateUrl: './movie-search-page.component.html',
  styleUrls: ['./movie-search-page.component.scss'],
})
export class MovieSearchPageComponent implements AfterViewInit, OnDestroy {
  @ViewChild('searchInput', { static: false }) sinput: ElementRef;
  searchSub$: Subscription;
  movies$: Observable<MoviesState>;

  constructor(private store: Store<{ movies: MoviesState }>, private router: Router) {
    this.movies$ = store.select((state) => state.movies);
  }

  ngAfterViewInit() {

    (this.sinput.nativeElement as HTMLInputElement).focus();

    this.searchSub$ = fromEvent<KeyboardEvent>(
      this.sinput.nativeElement,
      'input'
    )
      .pipe(
        map((e) => (e.target as HTMLInputElement).value),
        filter((text) => text.length > 2),
        debounceTime(300),
        distinctUntilChanged()
      )
      .subscribe((term) =>
        this.store.dispatch(MoviesActions.searchMovies({ term }))
      );
  }

  ngOnDestroy() {
    this.searchSub$.unsubscribe();
  }

  openMovie(movie: Movie) {
    this.router.navigate(['/movies/'+movie.imdbID])
  }
}
