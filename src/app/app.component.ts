import { Component, Output } from '@angular/core';
import * as EventEmitter from 'events';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular 2 Portfolio';

  colorValue: string = "escuro";

  ngOnInit() {
    this.colorValue = 'escuro';
  }

  changeValue(){
    switch(this.colorValue){
      case 'escuro':
        this.colorValue = "claro";
        break;

      case 'claro':
        this.colorValue = "escuro";
        break;
    }
  }
}
