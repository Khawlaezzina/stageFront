import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateSolutionForProblemAdminComponent } from './update-solution-for-problem-admin.component';

describe('UpdateSolutionForProblemAdminComponent', () => {
  let component: UpdateSolutionForProblemAdminComponent;
  let fixture: ComponentFixture<UpdateSolutionForProblemAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateSolutionForProblemAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateSolutionForProblemAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
