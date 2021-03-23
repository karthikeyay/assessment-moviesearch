import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MovieSearchPageComponent } from './pages/movie-search-page/movie-search-page.component';
import { MovieViewPageComponent } from './pages/movie-view-page/movie-view-page.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'movies',
    pathMatch: 'full'
  },
  {
    path: 'movies',
    component: MovieSearchPageComponent
  },
  {
    path: 'movies/:id',
    component: MovieViewPageComponent
  },
  {
    path: '**',
    redirectTo: 'movies'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
