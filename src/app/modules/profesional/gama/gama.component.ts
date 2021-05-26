import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gama',
  templateUrl: './gama.component.html',
  styleUrls: ['./gama.component.scss']
})
export class GamaComponent implements OnInit {
  modelos = [
    {
      img: "208.png",
      nombre: "208",
      manual: "208.pdf",
      ficha: "FICHA TECNICA_208.pdf"
    },
    {
      img: "308.png",
      nombre: "308",
      manual: "308.pdf",
      ficha: "FICHA TECNICA_308.pdf"
    },
    {
      img: "408.png",
      nombre: "408",
      manual: "408.pdf",
      ficha: "FICHA TECNICA_408.pdf"
    },
    {
      img: "2008.png",
      nombre: "2008",
      manual: "2008.pdf",
      ficha: "FICHA TECNICA_2008.pdf"
    },
    {
      img: "3008.png",
      nombre: "3008",
      manual: "3008.pdf",
      ficha: "FICHA TECNICA_3008.pdf"
    },
    {
      img: "5008.png",
      nombre: "5008",
      manual: "5008.pdf",
      ficha: "FICHA TECNICA_5008.pdf"
    },
    {
      img: "boxer.png",
      nombre: "Boxer",
      manual: "boxer.pdf",
      ficha: "FICHA TECNICA_BOXER.pdf"
    },
    {
      img: "expert.png",
      nombre: "Expert",
      manual: "expert.pdf",
      ficha: "FICHA TECNICA_EXPERT.PDF"
    },
    {
      img: "partner.png",
      nombre: "Partner Furgon",
      manual: "partner_f.pdf",
      ficha: "FICHA TECNICA_PARTNER_F.PDF"
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
