import { Injectable } from '@angular/core';
import { Comment } from './model/comment';

@Injectable()
export class CommentService {

  comments: Comment[] = [];

  constructor() { }

  public saveComment(comment: Comment) {
    this.comments.push(comment);
  }

  public getComments(): Comment[] {
    return this.comments;
  }

}
