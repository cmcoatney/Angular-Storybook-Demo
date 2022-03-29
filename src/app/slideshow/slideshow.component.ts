import { Component, Input, OnInit } from '@angular/core';
import { slide } from 'src/shared/models/slide';
import { BtnType } from '../play-button/play-button.component';

@Component({
  selector: 'sb-slideshow',
  templateUrl: './slideshow.component.html',
  styleUrls: ['./slideshow.component.scss'],
})
export class SlideshowComponent implements OnInit {
  @Input() slides: slide[] = [];

  public previous: BtnType = BtnType.PREVIOUS;
  public next: BtnType = BtnType.NEXT;
  public currentPosition: number = 0;

  constructor() {}

  ngOnInit(): void {}

  handleNextEvent() {
    this.currentPosition += 1;
    this.doSlideChange();
  }

  handlePreviousEvent() {
    this.currentPosition -= 1;
    this.doSlideChange();
  }

  doSlideChange() {
    if (this.currentPosition < 0) this.currentPosition = 0;
    if (this.currentPosition > this.slides.length - 1)
      this.currentPosition = this.slides.length - 1;
  }

  get slide(): slide {
    return this.slides[this.currentPosition];
  }
}
