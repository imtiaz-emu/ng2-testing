import {Component} from '@angular/core';
import {Movie} from "./movie/movie.model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  movies: Movie[];

  constructor() {
    this.movies = [
      new Movie('Cinema Paradiso', 'http://www.imdb.com/title/tt0095765', 10),
      new Movie('Across the Universe', 'http://www.imdb.com/title/tt0098965', 8)
    ];
  }

  addMovie(name: HTMLInputElement, link: HTMLInputElement): boolean {
    this.movies.push(new Movie(name.value, link.value, 0));
    name.value = '';
    link.value = '';
    return false;
  }
}
