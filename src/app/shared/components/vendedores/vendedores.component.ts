import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-vendedores',
  templateUrl: './vendedores.component.html',
  styleUrls: ['./vendedores.component.scss']
})
export class VendedoresComponent implements OnInit {

  @Input()
  vendedores = [];

  @Input()
  baseUrl = '';

  constructor() { }

  ngOnInit(): void {
  }

}
