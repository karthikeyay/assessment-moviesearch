import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MoviesApiService } from './services/movies-api.service';
import { MoviesEffects } from './store/effects/movies.effects';
import * as fromMovies from './store/reducers/movies.reducer';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from 'src/environments/environment';
import { MovieSearchPageComponent } from './pages/movie-search-page/movie-search-page.component';
import { MovieViewPageComponent } from './pages/movie-view-page/movie-view-page.component';
import { MovieItemComponent } from './components/movie-item/movie-item.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    MovieSearchPageComponent,
    MovieViewPageComponent,
    MovieItemComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot({movies: fromMovies.reducer}),
    EffectsModule.forRoot([MoviesEffects]),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production })
  ],
  providers: [MoviesApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
