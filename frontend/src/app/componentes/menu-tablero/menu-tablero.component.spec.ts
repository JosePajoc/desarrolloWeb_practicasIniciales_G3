import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuTableroComponent } from './menu-tablero.component';

describe('MenuTableroComponent', () => {
  let component: MenuTableroComponent;
  let fixture: ComponentFixture<MenuTableroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuTableroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuTableroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
