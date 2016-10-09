/* tslint:disable:no-unused-variable */

import { TestBed, async } from '@angular/core/testing';
import { MovieComponent } from './movie.component';
import {AppComponent} from "../app.component";


describe('MovieComponent', () => {

  beforeEach(() => {
    this.movie = new MovieComponent();
  });

  it('should have name property', () => {
    expect(this.movie.title).toBe('Hi Lol');
  });

});
