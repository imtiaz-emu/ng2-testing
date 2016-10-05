import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';

  addMovie(name: HTMLInputElement, link: HTMLInputElement): boolean {
    console.log(`Adding movie title: ${name.value} and link: ${link.value}`);
    return false;
  }
}
