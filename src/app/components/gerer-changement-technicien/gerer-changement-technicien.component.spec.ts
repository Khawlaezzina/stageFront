import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GererChangementTechnicienComponent } from './gerer-changement-technicien.component';

describe('GererChangementTechnicienComponent', () => {
  let component: GererChangementTechnicienComponent;
  let fixture: ComponentFixture<GererChangementTechnicienComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GererChangementTechnicienComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GererChangementTechnicienComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
