import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListProblemesEnCoursComponent } from './list-problemes-en-cours.component';

describe('ListProblemesEnCoursComponent', () => {
  let component: ListProblemesEnCoursComponent;
  let fixture: ComponentFixture<ListProblemesEnCoursComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListProblemesEnCoursComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListProblemesEnCoursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
