import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSolutionAdminComponent } from './add-solution-admin.component';

describe('AddSolutionAdminComponent', () => {
  let component: AddSolutionAdminComponent;
  let fixture: ComponentFixture<AddSolutionAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddSolutionAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddSolutionAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
