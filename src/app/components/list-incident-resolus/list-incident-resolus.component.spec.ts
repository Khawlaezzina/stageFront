import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListIncidentResolusComponent } from './list-incident-resolus.component';

describe('ListIncidentResolusComponent', () => {
  let component: ListIncidentResolusComponent;
  let fixture: ComponentFixture<ListIncidentResolusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListIncidentResolusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListIncidentResolusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
