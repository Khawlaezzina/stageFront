import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GererServiceTechnicienComponent } from './gerer-service-technicien.component';

describe('GererServiceTechnicienComponent', () => {
  let component: GererServiceTechnicienComponent;
  let fixture: ComponentFixture<GererServiceTechnicienComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GererServiceTechnicienComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GererServiceTechnicienComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
