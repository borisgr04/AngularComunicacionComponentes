import { Component, OnInit } from '@angular/core';
import { ViewChild } from '@angular/core';
import { SelectornumericoComponent } from '../selectornumerico/selectornumerico.component';

@Component({
  selector: 'app-selectornumerico-padre',
  templateUrl: './selectornumerico-padre.component.html',
  styleUrls: ['./selectornumerico-padre.component.css']
})
export class SelectornumericoPadreComponent implements OnInit {

  @ViewChild('selector2') selector2: SelectornumericoComponent;
  
  constructor() { }

  ngOnInit() {
  }

  fijarSelector2(valor:number) {
    this.selector2.fijar(valor);
  }

}
