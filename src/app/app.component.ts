import {Component, OnInit} from '@angular/core';
import {Movie} from "./movie/movie.model";
import { FormGroup, FormBuilder } from "@angular/forms"

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app works!';
  movies: Movie[];

  movieForm : FormGroup;
  constructor(private formbuilder: FormBuilder) {
    this.movies = [
      new Movie('Cinema Paradiso', 'http://www.imdb.com/title/tt0095765', 10),
      new Movie('Across the Universe', 'http://www.imdb.com/title/tt0098965', 8)
    ];
  }

  ngOnInit(){
    this.movieForm = this.formbuilder.group({
      name : '',
      link : ''
    })
  }

  addMovie(value:any): boolean {
    this.movies.push(new Movie(value.name, value.link, 0));
    console.log(value);
    // name.value = '';
    // link.value = '';
    return false;
  }
}
