import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InicioSesionFormComponent } from './inicio-sesion-form.component';

describe('InicioSesionFormComponent', () => {
  let component: InicioSesionFormComponent;
  let fixture: ComponentFixture<InicioSesionFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InicioSesionFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InicioSesionFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
