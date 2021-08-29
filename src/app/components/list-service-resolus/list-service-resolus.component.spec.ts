import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListServiceResolusComponent } from './list-service-resolus.component';

describe('ListServiceResolusComponent', () => {
  let component: ListServiceResolusComponent;
  let fixture: ComponentFixture<ListServiceResolusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListServiceResolusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListServiceResolusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
