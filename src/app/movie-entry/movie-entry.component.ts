import { Component, OnInit, Input } from '@angular/core';
import { Movie } from '../model/movie';

@Component({
  selector: 'app-movie-entry',
  templateUrl: './movie-entry.component.html',
  styleUrls: ['./movie-entry.component.css']
})
export class MovieEntryComponent implements OnInit {

  @Input() movie: Movie;

  constructor() { }

  ngOnInit() {
  }

}
