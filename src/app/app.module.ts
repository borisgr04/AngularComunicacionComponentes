import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ModalComponent } from  './modal/modal.component';
import { NgbdModalContent } from  './modal/modal.component';
import { MenuNavComponent } from './menu-nav/menu-nav.component';
import { DropdownComponent } from './dropdown/dropdown.component';
import { TableComponent } from './table/table.component';
import { DadoComponent } from './dado/dado.component';
import { DadoPadreComponent } from './dado-padre/dado-padre.component';
import { EventoHijaPadreComponent } from './evento-hija-padre/evento-hija-padre.component';
import { CronometroComponent } from './cronometro/cronometro.component';
import { SelectornumericoPadreComponent } from './selectornumerico-padre/selectornumerico-padre.component';
import { SelectornumericoComponent } from './selectornumerico/selectornumerico.component';
import { NgbdTableSortable,NgbdSortableHeader } from './sortable-table/sortable-table.component';



@NgModule({
  declarations: [
    AppComponent,
    ModalComponent,
    NgbdModalContent,
    MenuNavComponent,
    DropdownComponent,
    TableComponent,
    DadoComponent,
    DadoPadreComponent,
    EventoHijaPadreComponent,
    CronometroComponent,
    SelectornumericoPadreComponent,
    SelectornumericoComponent,
    NgbdTableSortable,
    NgbdSortableHeader
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  exports: [NgbdTableSortable],
  providers: [],
  entryComponents: 
  [
    NgbdModalContent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
