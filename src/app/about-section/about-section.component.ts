import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-section',
  templateUrl: './about-section.component.html',
  styleUrls: ['./about-section.component.css']
})
export class AboutSectionComponent implements OnInit {

  constructor() { }

  @Input() colorValue!: string;

  ngOnInit(): void {
  }

}
