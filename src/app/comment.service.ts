import { Injectable } from '@angular/core';
import { Comment } from './model/comment';

@Injectable()
export class CommentService {

  comments: { [movieId: number]: Comment[] } = [];

  constructor() { }

  public saveComment(movieId: number, comment: Comment) {
    if (!this.comments[movieId]) {
      this.comments[movieId] = [];
    }
    this.comments[movieId].push(comment);
  }

  public getComments(movieId: number): Comment[] {
    if (!this.comments[movieId]) {
      this.comments[movieId] = [];
    }
    return this.comments[movieId];
  }

}
