import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-showcase-list',
  templateUrl: './showcase-list.component.html',
  styleUrls: ['./showcase-list.component.scss']
})
export class ShowcaseListComponent implements OnInit {

  consoles: any[] = [
    {
      name: 'Switch',
      company: 'Nintendo'
    },
    {
      name: 'xBox',
      company: 'Microsoft'
    },
    {
      name: 'PlayStation',
      company: 'Sony'
    },
    {
      name: 'BlackShark',
      company: 'Xiaomi'
    },
  ]

  constructor() { }

  ngOnInit() {
  }

}
