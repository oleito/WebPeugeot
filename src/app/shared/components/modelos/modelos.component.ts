import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-modelos',
  templateUrl: './modelos.component.html',
  styleUrls: ['./modelos.component.scss']
})
export class ModelosComponent implements OnInit {

  @Input()
  titulo='MODELOS'

  @Input()
  modelos = [];

  @Input()
  baseUrl = '';

  constructor() { }

  ngOnInit(): void {
  }
  ngOnChanges(): void {
    console.log(this.modelos);
    console.log(this.titulo);
  }
}
