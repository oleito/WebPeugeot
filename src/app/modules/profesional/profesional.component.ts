import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profesional',
  templateUrl: './profesional.component.html',
  styleUrls: ['./profesional.component.scss']
})
export class ProfesionalComponent implements OnInit {
  
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
    return this.httpClient.get('assets/profesional/slider/slider.json')
  }
}
