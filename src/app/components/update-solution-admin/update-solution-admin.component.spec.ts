import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateSolutionAdminComponent } from './update-solution-admin.component';

describe('UpdateSolutionAdminComponent', () => {
  let component: UpdateSolutionAdminComponent;
  let fixture: ComponentFixture<UpdateSolutionAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateSolutionAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateSolutionAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
