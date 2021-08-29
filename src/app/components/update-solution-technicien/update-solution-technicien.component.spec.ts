import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateSolutionTechnicienComponent } from './update-solution-technicien.component';

describe('UpdateSolutionTechnicienComponent', () => {
  let component: UpdateSolutionTechnicienComponent;
  let fixture: ComponentFixture<UpdateSolutionTechnicienComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateSolutionTechnicienComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateSolutionTechnicienComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
