import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-planes',
  templateUrl: './planes.component.html',
  styleUrls: ['./planes.component.scss']
})
export class PlanesComponent implements OnInit {
 
  slides: any = []
  slidesBaseUrl = '';

  vendedores: any = [];
  vendedoresBaseUrl = '';

  modelos: any = []
  modelosBaseUrl = '';

  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {
    this.getSlides();
    this.getModelos();
    this.getVendedores();
  }

  getModelos() {
    this.getJsonDataService('assets/planes/models/models.json').subscribe(data => {
      this.modelos = data['modelList'];
      this.modelosBaseUrl = data['baseUrl'];
    })
  }

  getSlides() {
    this.getJsonDataService('assets/planes/slider/slider.json').subscribe(data => {
      this.slides = data['slideList'];
      this.slidesBaseUrl = data['baseUrl'];
    })
  }
  
  getVendedores() {
    this.getJsonDataService('assets/planes/vendedores/vendedores.json').subscribe(data => {
      this.vendedores = data['vendedoresList'];
      this.vendedoresBaseUrl = data['baseUrl'];
    })
  }

  getJsonDataService(URL: string) {
    return this.httpClient.get(URL)
  }
}
