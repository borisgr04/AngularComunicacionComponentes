import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectornumericoPadreComponent } from './selectornumerico-padre.component';

describe('SelectornumericoPadreComponent', () => {
  let component: SelectornumericoPadreComponent;
  let fixture: ComponentFixture<SelectornumericoPadreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectornumericoPadreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectornumericoPadreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
