import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonneParIdComponent } from './personne-par-id.component';

describe('PersonneParIdComponent', () => {
  let component: PersonneParIdComponent;
  let fixture: ComponentFixture<PersonneParIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonneParIdComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PersonneParIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
