import { Component } from '@angular/core';
import { slide } from 'src/shared/models/slide';

@Component({
  selector: 'sb-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Angular Storybook Demo';
  slides: slide[] = [
    { position: 0, image: 'assets/images/000.png' },
    { position: 1, image: 'assets/images/001.png' },
    { position: 2, image: 'assets/images/002.png' },
    { position: 3, image: 'assets/images/003.png' },
    { position: 4, image: 'assets/images/004.png' },
    { position: 5, image: 'assets/images/005.png' },
    { position: 6, image: 'assets/images/006.png' },
  ];
}
