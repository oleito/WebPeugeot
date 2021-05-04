import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.scss']
})
export class ContactoComponent implements OnInit {

  title = 'Como usar el Componente Google Maps de Angular 9';

  // Configuración de Google Maps 
  center = { lat: -33.4725504, lng: -65.9025249 };
  zoom = 9;
  display?: google.maps.LatLngLiteral;

  markerOptions: google.maps.MarkerOptions = { draggable: false };
  markerPositions: google.maps.LatLngLiteral[] = [
    { lat: -33.2960176, lng: -66.2979859 },
    { lat: -33.6768736, lng: -65.4625694 }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
