import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HttpClientModule } from "@angular/common/http";

import { HomeComponent } from './home.component';
import { ModelosComponent } from '../../shared/components/modelos/modelos.component';
import { ServiciosComponent } from './servicios/servicios.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ContactoComponent } from './contacto/contacto.component';
import { GoogleMapsModule } from '@angular/google-maps';
import { VendedoresComponent } from '../../shared/components/vendedores/vendedores.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    HomeComponent,
    ServiciosComponent,
    ContactoComponent,
  ],
  imports: [
    SharedModule,
    CommonModule,
    HomeRoutingModule,
    NgbModule,
    GoogleMapsModule,
    HttpClientModule
  ]
})
export class HomeModule { }
