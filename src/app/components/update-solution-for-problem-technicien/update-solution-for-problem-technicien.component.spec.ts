import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateSolutionForProblemTechnicienComponent } from './update-solution-for-problem-technicien.component';

describe('UpdateSolutionForProblemTechnicienComponent', () => {
  let component: UpdateSolutionForProblemTechnicienComponent;
  let fixture: ComponentFixture<UpdateSolutionForProblemTechnicienComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateSolutionForProblemTechnicienComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateSolutionForProblemTechnicienComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
