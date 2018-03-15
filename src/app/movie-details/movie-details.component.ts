import { Component, OnInit } from '@angular/core';
import { Comment } from '../model/comment';
import { CommentService } from '../comment.service';
import { Movie } from '../model/movie';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {

  movie: Movie;

  newComment: Comment = new Comment();

  comments: Comment[];


  constructor(
    private commentService: CommentService, 
    private movieService: MovieService
  ) {
  }

  ngOnInit() {
    this.comments = this.commentService.getComments();
    this.getMovie();
  }

  submitComment() {
    this.commentService.saveComment(this.newComment);
    this.newComment = new Comment();
  }

  getMovie() {
    this.movieService.getMovieDetail(0).subscribe( movie => { this.movie = movie; } );
  }

}
