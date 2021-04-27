import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { SliderComponent } from './slider/slider.component';
import { HomeComponent } from './home.component';
import { ModelosComponent } from './modelos/modelos.component';
import { ServiciosComponent } from './servicios/servicios.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ContactoComponent } from './contacto/contacto.component';
import { GoogleMapsModule } from '@angular/google-maps';


@NgModule({
  declarations: [
    SliderComponent,
    HomeComponent,
    ModelosComponent,
    ServiciosComponent,
    ContactoComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    NgbModule,
    GoogleMapsModule
  ]
})
export class HomeModule { }
