import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-top-menu',
  templateUrl: './top-menu.component.html',
  styleUrls: ['./top-menu.component.css']
})
export class TopMenuComponent implements OnInit {

  menuItems = [
    { name: 'Home', selected: true },
    { name: 'About' },
    { name: 'Menu' },
    { name: 'Contact' }
  ];

  constructor() { }

  ngOnInit() {
  }

}
