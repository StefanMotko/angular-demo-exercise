import { Component, OnInit } from '@angular/core';
import { Movie } from './model/movie';
import { MovieService } from './movie.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';

  movies: Movie[] = [];

  public constructor(
    private movieService: MovieService
  ) {

  }

  ngOnInit() {
    this.getMovies();
  }

  getMovies() {
    this.movieService.getMovies().subscribe((movies) => {
      this.movies = movies
    });
  }

}
