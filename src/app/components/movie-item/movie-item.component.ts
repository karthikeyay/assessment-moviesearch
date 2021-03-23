import { Component, Input, OnInit } from '@angular/core';
import { Movie } from 'src/app/store/models/movies.model';

@Component({
  selector: 'app-movie-item',
  templateUrl: './movie-item.component.html',
  styleUrls: ['./movie-item.component.scss'],
})
export class MovieItemComponent implements OnInit {
  @Input() movie: Movie;

  constructor() {}

  ngOnInit(): void {}
}
