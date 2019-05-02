import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventoHijaPadreComponent } from './evento-hija-padre.component';

describe('EventoHijaPadreComponent', () => {
  let component: EventoHijaPadreComponent;
  let fixture: ComponentFixture<EventoHijaPadreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventoHijaPadreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventoHijaPadreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
