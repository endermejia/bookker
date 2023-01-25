import {Component} from '@angular/core';
import {Location} from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'Bookker';

  constructor(private location: Location) {
  }

  volver(): void {
    this.location.back();
  }
}
