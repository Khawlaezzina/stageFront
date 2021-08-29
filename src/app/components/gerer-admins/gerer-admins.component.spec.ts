import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GererAdminsComponent } from './gerer-admins.component';

describe('GererAdminsComponent', () => {
  let component: GererAdminsComponent;
  let fixture: ComponentFixture<GererAdminsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GererAdminsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GererAdminsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
