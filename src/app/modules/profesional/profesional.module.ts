import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfesionalRoutingModule } from './profesional-routing.module';
import { ProfesionalComponent } from './profesional.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { CondicionComponent } from './condicion/condicion.component';
import { GamaComponent } from './gama/gama.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    ProfesionalComponent,
    CondicionComponent,
    GamaComponent
  ],
  imports: [
    SharedModule,
    CommonModule,
    ProfesionalRoutingModule,
    HttpClientModule
  ]
})
export class ProfesionalModule { }
