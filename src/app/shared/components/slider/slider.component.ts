import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnChanges, OnInit {

  @Input()
  slides = [];

  @Input()
  baseUrl = '';

  constructor(config: NgbCarouselConfig) {
    config.showNavigationIndicators = false,
      config.pauseOnHover = true,
      config.interval = 3500
  }

  ngOnInit(): void {
  }

  ngOnChanges(): void {
    console.log(this.slides);
  }

}
