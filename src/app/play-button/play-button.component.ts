import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

export enum BtnType {
  NEXT = 'NEXT',
  PREVIOUS = 'PREVIOUS',
}

@Component({
  selector: 'sb-play-button',
  templateUrl: './play-button.component.html',
  styleUrls: ['./play-button.component.scss'],
})
export class PlayButtonComponent implements OnInit {
  @Input() type: BtnType = BtnType.NEXT;
  @Output() onClickNext = new EventEmitter<null>();
  @Output() onClickPrevious = new EventEmitter<null>();

  constructor() {}

  ngOnInit(): void {}

  onClick() {
    if (this.type === BtnType.NEXT) this.onClickNext.emit(null);
    if (this.type === BtnType.PREVIOUS) this.onClickPrevious.emit(null);
  }

  get icon(): string {
    let icon = 'skip_next';
    if (this.type === BtnType.NEXT) {
      icon = 'skip_next';
    } else if (this.type === BtnType.PREVIOUS) {
      icon = 'skip_previous';
    }
    return icon;
  }
}
