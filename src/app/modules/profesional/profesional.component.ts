import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profesional',
  templateUrl: './profesional.component.html',
  styleUrls: ['./profesional.component.scss']
})
export class ProfesionalComponent implements OnInit {

  utilitariosTitulo = 'UTILITARIOS';
  particularesTitulo = 'PARTICULARES';

  slides: any = []
  slidesBaseUrl = '';

  vendedores: any = [];
  vendedoresBaseUrl = '';

  utilitariosList: any = []
  particularesList: any = []
  modelosBaseUrl = '';

  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {
    this.getSlides();
    this.getModelos();
    this.getVendedores();
  }

  getModelos() {
    this.getJsonDataService('assets/profesional/models/models.json').subscribe(data => {
      this.utilitariosList = data['utilitariosList'];
      this.particularesList = data['particularesList'];
      this.modelosBaseUrl = data['baseUrl'];
    })
  }

  getSlides() {
    this.getJsonDataService('assets/profesional/slider/slider.json').subscribe(data => {
      this.slides = data['slideList'];
      this.slidesBaseUrl = data['baseUrl'];
    })
  }

  getVendedores() {
    // this.getJsonDataService('assets/profesional/vendedores/vendedores.json').subscribe(data => {
    //   this.vendedores = data['vendedoresList'];
    //   this.vendedoresBaseUrl = data['baseUrl'];
    // })
  }

  getJsonDataService(URL: string) {
    return this.httpClient.get(URL)
  }
}
