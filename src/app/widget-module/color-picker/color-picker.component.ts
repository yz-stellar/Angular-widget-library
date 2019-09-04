import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 's-color-picker',
  templateUrl: './color-picker.component.html',
  styleUrls: ['./color-picker.component.scss']
})
export class ColorPickerComponent implements OnInit {
  @Output() colorChange = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  setColor(e) {
    let targetColor = getComputedStyle(e.target).getPropertyValue('background-color');
    this.colorChange.emit(targetColor);
  }

}
