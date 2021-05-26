import { Component, OnInit, Output } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { EventEmitter } from 'events';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  slidesListUpdated = new EventEmitter();
  slides: any = []
  baseUrl = '';

  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {
    this.getJsonDataService().subscribe(data => {
      this.slides   = data['slideList'];
      this.baseUrl  = data['baseUrl'];
    })
  }

  getJsonDataService() {
    return this.httpClient.get('assets/home/slider/slider.json')
  }

}
