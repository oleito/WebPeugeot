import { Component, OnInit, Output } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { EventEmitter } from 'events';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

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
    this.getJsonDataService('assets/home/models/models.json').subscribe(data => {
      this.modelos = data['modelList'];
      this.modelosBaseUrl = data['baseUrl'];
    })
  }

  getSlides() {
    this.getJsonDataService('assets/home/slider/slider.json').subscribe(data => {
      this.slides = data['slideList'];
      this.slidesBaseUrl = data['baseUrl'];
    })
  }
  
  getVendedores() {
    this.getJsonDataService('assets/home/vendedores/vendedores.json').subscribe(data => {
      this.vendedores = data['vendedoresList'];
      this.vendedoresBaseUrl = data['baseUrl'];
    })
  }

  getJsonDataService(URL: string) {
    return this.httpClient.get(URL)
  }

}
