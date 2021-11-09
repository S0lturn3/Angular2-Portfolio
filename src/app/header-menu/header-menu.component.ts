import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-menu',
  templateUrl: './header-menu.component.html',
  styleUrls: ['./header-menu.component.css']
})
export class HeaderMenuComponent implements OnInit {

  Active = "false";

  alertaClick(){
    this.Active = "true";
  }

  constructor() { }

  ngOnInit(): void {
  }
}
