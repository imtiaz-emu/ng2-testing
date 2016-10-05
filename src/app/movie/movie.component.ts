import {Component, OnInit} from '@angular/core';
import {Movie} from "./movie.model";

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {

  movie: Movie;

  constructor() {
    this.movie = new Movie('Cinema Paradiso',
      'http://www.imdb.com/title/tt0095765',
      10)
  }

  voteUp(): boolean {
    this.movie.voteUp();
    return false;
  }

  voteDown(): boolean {
    this.movie.voteDown();
    return false;
  }

  ngOnInit() {
  }

}
