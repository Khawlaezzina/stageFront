import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSolutionProblemAdminComponent } from './add-solution-problem-admin.component';

describe('AddSolutionProblemAdminComponent', () => {
  let component: AddSolutionProblemAdminComponent;
  let fixture: ComponentFixture<AddSolutionProblemAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddSolutionProblemAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddSolutionProblemAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
