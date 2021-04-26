import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  public isCollapsed = true;

  toggleMenu() {
    this.isCollapsed = !this.isCollapsed;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
