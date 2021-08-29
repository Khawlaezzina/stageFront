import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GererIncidentTechnicienComponent } from './gerer-incident-technicien.component';

describe('GererIncidentTechnicienComponent', () => {
  let component: GererIncidentTechnicienComponent;
  let fixture: ComponentFixture<GererIncidentTechnicienComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GererIncidentTechnicienComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GererIncidentTechnicienComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
