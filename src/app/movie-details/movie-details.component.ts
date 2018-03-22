import { Component, OnInit } from '@angular/core';
import { Comment } from '../model/comment';
import { CommentService } from '../comment.service';
import { Movie } from '../model/movie';
import { MovieService } from '../movie.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {

  movieId: number;

  movie: Movie;

  newComment: Comment = new Comment();

  comments: Comment[];


  constructor(
    private route: ActivatedRoute,
    private commentService: CommentService, 
    private movieService: MovieService
  ) {
  }

  ngOnInit() {
    this.movieId = +this.route.snapshot.paramMap.get('id');
    this.comments = this.commentService.getComments(this.movieId);
    this.getMovie();
  }

  submitComment() {
    this.commentService.saveComment(this.movieId, this.newComment);
    this.newComment = new Comment();
  }

  getMovie() {
    this.movieService.getMovieDetail(this.movieId)
    .subscribe( movie => { this.movie = movie; } );
  }

}
