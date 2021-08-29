import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListProblemesResolusComponent } from './list-problemes-resolus.component';

describe('ListProblemesResolusComponent', () => {
  let component: ListProblemesResolusComponent;
  let fixture: ComponentFixture<ListProblemesResolusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListProblemesResolusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListProblemesResolusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
