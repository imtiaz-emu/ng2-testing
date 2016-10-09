/* tslint:disable:no-unused-variable */

import {TestBed, async} from '@angular/core/testing';
import {AppComponent} from './app.component';
import {Movie} from "./movie/movie.model";
import {FormBuilder, FormGroup, ReactiveFormsModule} from "@angular/forms";
import {MovieComponent} from "./movie/movie.component";

describe('AppComponent', () => {

  beforeEach(() => {
    this.appComponent = new AppComponent(FormBuilder);
    // this.movieForm = FormGroup;
    TestBed.configureTestingModule({
      imports: [ReactiveFormsModule],
      declarations: [AppComponent, MovieComponent]
    });
  });

  // success test
  it('should have title property set', () => {
    expect(this.appComponent.title).toBe('app works!');
  });

  it('should have predefine movies', () => {
    let movie = new Movie('Fall', 'http://www.imdb.com/title/tt0095765');
    this.appComponent.movies.push(movie);
    expect(this.appComponent.movies.length).toEqual(3);
  });

  it('will add a new movie', () => {
    // this.appComponent.ngOnInit();
    let fixture = TestBed.createComponent(AppComponent);
    let compiled = fixture.debugElement.nativeElement;
    let input = compiled.querySelector('#exampleInputName2');
    let input2 = compiled.querySelector('#exampleInputEmail2');
    input.value = 'Test Movie';
    input2.value = 'http://www.imdb.com/title/tt0095705';
    compiled.querySelector('#submit-btn').click();

    expect(this.appComponent.movies.length).toEqual(3);
  });

  // failed test
  it('should have predefine movies', () => {
    let movie = new Movie('Fall', 'http://www.imdb.com/title/tt0095765');
    this.appComponent.movies.push(movie);
    expect(this.appComponent.movies.length).not.toEqual(1);
  });

});
