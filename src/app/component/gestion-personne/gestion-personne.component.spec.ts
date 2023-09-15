import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionPersonneComponent } from './gestion-personne.component';

describe('GestionPersonneComponent', () => {
  let component: GestionPersonneComponent;
  let fixture: ComponentFixture<GestionPersonneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestionPersonneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GestionPersonneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
