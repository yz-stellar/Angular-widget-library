import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: '.s-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss']
})
export class ListItemComponent implements OnInit {
  @Input()title:String;
  @Input()subtitle:String;

  constructor() { }

  ngOnInit() {
  }

}
