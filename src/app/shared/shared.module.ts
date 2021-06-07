import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { SliderComponent } from './components/slider/slider.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ModelosComponent } from './components/modelos/modelos.component';
import { VendedoresComponent } from './components/vendedores/vendedores.component';


@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
    SliderComponent,
    ModelosComponent,
    VendedoresComponent
  ],
  imports: [
    CommonModule,
    NgbModule
  ],
  exports: [
    NavbarComponent,
    FooterComponent,
    SliderComponent,
    ModelosComponent,
    VendedoresComponent
  ]
})
export class SharedModule { }
