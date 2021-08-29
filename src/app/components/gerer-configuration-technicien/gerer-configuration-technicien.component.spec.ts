import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GererConfigurationTechnicienComponent } from './gerer-configuration-technicien.component';

describe('GererConfigurationTechnicienComponent', () => {
  let component: GererConfigurationTechnicienComponent;
  let fixture: ComponentFixture<GererConfigurationTechnicienComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GererConfigurationTechnicienComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GererConfigurationTechnicienComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
