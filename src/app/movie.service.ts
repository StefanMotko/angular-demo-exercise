import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Movie } from './model/movie';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class MovieService {

  movieUrl: string = 'http://api.themoviedb.org/3/movie/24428?api_key=71df36679a0472d74597f58f6fec0185';

  constructor(private http: HttpClient) { }

  public getMovieDetail(movieId: number): Observable<Movie> {
    return this.http.get<Movie>(this.movieUrl);
  }

}
