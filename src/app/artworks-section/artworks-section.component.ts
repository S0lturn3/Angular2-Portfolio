import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-artworks-section',
  templateUrl: './artworks-section.component.html',
  styleUrls: ['./artworks-section.component.css']
})
export class ArtworksSectionComponent implements OnInit {

  constructor() { }

  @Input() colorValue!: string;

  ngOnInit(): void {
  }

}
