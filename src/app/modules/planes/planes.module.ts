import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlanesRoutingModule } from './planes-routing.module';
import { PlanesComponent } from './planes.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    PlanesComponent
  ],
  imports: [
    SharedModule,
    CommonModule,
    PlanesRoutingModule,
    HttpClientModule
  ]
})
export class PlanesModule { }
