import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-evento-hija-padre',
  templateUrl: './evento-hija-padre.component.html',
  styleUrls: ['./evento-hija-padre.component.css']
})
export class EventoHijaPadreComponent implements OnInit {

  
  constructor() { }

  ngOnInit() {

  }

  mensaje='';

  actualizar(t) {
    this.mensaje = t + '(se actualiza cada 10 segundos)';
  }
}
