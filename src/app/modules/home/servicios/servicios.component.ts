import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.component.html',
  styleUrls: ['./servicios.component.scss']
})
export class ServiciosComponent implements OnInit {

  servicios= [
    {
      img: "ahorro.jpg",
      seccion:"Venta directa",
      telefono: "266 430 3957"
    },
    {
      img: "ahorro.jpg",
      seccion:"Plan de ahorro",
      telefono: "266 450 3609"
    },
    {
      img: "ahorro.jpg",
      seccion:"Atencion a empresas",
      telefono: "260 453 5192"
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
