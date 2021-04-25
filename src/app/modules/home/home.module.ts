import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { SliderComponent } from './slider/slider.component';
import { HomeComponent } from './home.component';
import { ModelosComponent } from './modelos/modelos.component';
import { ServiciosComponent } from './servicios/servicios.component';


@NgModule({
  declarations: [
    SliderComponent,
    HomeComponent,
    ModelosComponent,
    ServiciosComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
