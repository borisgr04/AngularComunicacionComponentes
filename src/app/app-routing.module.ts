import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ModalComponent } from './modal/modal.component';
import { DropdownComponent } from './dropdown/dropdown.component';
import { TableComponent } from './table/table.component';
import { DadoPadreComponent } from './dado-padre/dado-padre.component';
import { EventoHijaPadreComponent } from './evento-hija-padre/evento-hija-padre.component';
import { SelectornumericoPadreComponent } from './selectornumerico-padre/selectornumerico-padre.component';
import { SelectornumericoComponent } from './selectornumerico/selectornumerico.component';

const routes: Routes = 
[
  {path:'modal', component:ModalComponent},
  {path:'dropdown', component:DropdownComponent},
  {path:'table', component:TableComponent},
  {path:'dadoPadre', component:DadoPadreComponent},
  {path:'eventohijapadre', component:EventoHijaPadreComponent},
  {path:'selectorNumerico', component:SelectornumericoPadreComponent},
  {path:'selectorNumerico0', component:SelectornumericoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
