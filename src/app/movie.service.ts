import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Movie } from './model/movie';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable()
export class MovieService {

  movieListUrl: string = '/popular';//'/24428?api_key=71df36679a0472d74597f58f6fec0185';
  movieDetailUrl: string = '/'; // + movieId
  movieDomainName: string = 'http://api.themoviedb.org/3/movie';
  movieApiKey: string = '?api_key=71df36679a0472d74597f58f6fec0185';

  movieUrl: string = 'http://api.themoviedb.org/3/movie/24428?api_key=71df36679a0472d74597f58f6fec0185';

  constructor(private http: HttpClient) { }

  public getMovies(): Observable<Movie[]> {
    return this.http.get<{ results: Movie[] }>
    (this.movieDomainName + this.movieListUrl + this.movieApiKey)
    .map(result => result.results);
  }

  public getMovieDetail(movieId: number): Observable<Movie> {
    return this.http.get<Movie>
    (this.movieDomainName + this.movieDetailUrl
       + movieId + this.movieApiKey);
  }

}
