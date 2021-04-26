import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {


  images = [208, 2008, 'partner'].map((n) => `assets/home/slider/slider-ndp-nuevo-${n}.jpg`);

  constructor() { }

  ngOnInit(): void {
  }

}
