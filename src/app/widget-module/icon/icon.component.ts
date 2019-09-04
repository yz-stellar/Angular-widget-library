import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 's-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss']
})
export class IconComponent implements OnInit {

  @Input() myUrl: string = "";

  constructor() { }

  ngOnInit() {
  }

}
