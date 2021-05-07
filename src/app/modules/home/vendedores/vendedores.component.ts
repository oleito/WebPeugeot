import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vendedores',
  templateUrl: './vendedores.component.html',
  styleUrls: ['./vendedores.component.scss']
})
export class VendedoresComponent implements OnInit {

  vendedores = [
    {
      img: "Jalmazan.jpg",
      nombre: "Javier Almazan",
      sector: "Ejecutivo de ventas",
      cel: "2664572936",
      email: "javier.almazan@parisautos.com.ar"
    },
    {
      img: "Gdominguez.jpg",
      nombre: "Guillermo Dominguez",
      sector: "Ejecutivo de ventas",
      cel: "2665103442",
      email: "guillermo.dominguez@parisautos.com.ar"
    },
    {
      img: "Cgonzalez.jpg",
      nombre: "Carolina Gonzalez",
      sector: "Ejecutivo de ventas",
      cel: "2664346591",
      email: "carolina.gonzalez@parisautos.com.ar"
    },
    {
      img: "Mmartin.jpg",
      nombre: "Mauricio Martin",
      sector: "Ejecutivo de ventas",
      cel: "2664653757",
      email: "mauricio.martin@parisautos.com.ar"
    },
    {
      img: "Lpetrovithc.jpg",
      nombre: "Luiz Petrovithc",
      sector: "Ejecutivo de ventas",
      cel: "2665133494",
      email: "luiz.petrovithc@parisautos.com.ar"
    },
    {
      img: "Pfernandez.jpg",
      nombre: "Pamela Fernandez",
      sector: "Recepcion",
      cel: "2664303957",
      email: "recepcion@parisautos.com.ar"
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
