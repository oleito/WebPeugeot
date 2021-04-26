import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {

  images = [208, 2008, 'partner'].map((n) => `assets/home/slider/slider-ndp-nuevo-${n}.jpg`);

  constructor(config: NgbCarouselConfig) {
    config.showNavigationIndicators = false,
      config.pauseOnHover = true,
      config.interval = 3500
  }

  ngOnInit(): void {
  }

}
