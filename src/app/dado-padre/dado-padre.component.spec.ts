import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DadoPadreComponent } from './dado-padre.component';

describe('DadoPadreComponent', () => {
  let component: DadoPadreComponent;
  let fixture: ComponentFixture<DadoPadreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DadoPadreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DadoPadreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
