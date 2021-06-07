import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-planes',
  templateUrl: './planes.component.html',
  styleUrls: ['./planes.component.scss']
})
export class PlanesComponent implements OnInit {
  slides: any = []
  baseUrl = '';

  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {
    this.getJsonDataService().subscribe(data => {
      this.slides = data['slideList'];
      this.baseUrl = data['baseUrl'];
    })
  }

  getJsonDataService() {
    return this.httpClient.get('assets/planes/slider/slider.json')
  }
}
