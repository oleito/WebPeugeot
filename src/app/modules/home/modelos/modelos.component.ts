import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modelos',
  templateUrl: './modelos.component.html',
  styleUrls: ['./modelos.component.scss']
})
export class ModelosComponent implements OnInit {

  images = [408, 3008, 'boxer'].map((n) => `assets/home/models/${n}.png`);
  constructor() { }

  ngOnInit(): void {
  }

}
