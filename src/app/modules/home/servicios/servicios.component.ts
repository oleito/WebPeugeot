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
      telefono: "266 430 3957"
    },
    {
      img: "autoplan.jpg",
      telefono: "266 450 3609"
    },
    {
      img: "profesional.jpg",
      telefono: "260 453 5192"
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
