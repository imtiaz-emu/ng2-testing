import {Component, OnInit, Input} from '@angular/core';
import {Movie} from "./movie.model";

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {

  @Input() movie: Movie;

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
