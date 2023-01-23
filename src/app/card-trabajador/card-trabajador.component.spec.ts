import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardTrabajadorComponent } from './card-trabajador.component';

describe('CardTrabajadorComponent', () => {
  let component: CardTrabajadorComponent;
  let fixture: ComponentFixture<CardTrabajadorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardTrabajadorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardTrabajadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
