import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 't-app-content',
  templateUrl: './app-content.component.html',
  styleUrls: ['./app-content.component.scss'],
})
export class AppContentComponent implements OnInit {
  openMenu: boolean = false;
  wasClickedMenuBtn: boolean = false;

  @Input() user: any;
  @Input() page: string = 'home';

  constructor() {}

  ngOnInit(): void {}

  handleShowMenu(openMenu: any) {
    this.openMenu = openMenu;
    this.wasClickedMenuBtn = true;
  }

  handleCloseMenu() {
    this.openMenu = false;
  }
}
