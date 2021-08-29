import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListServiceEnCoursComponent } from './list-service-en-cours.component';

describe('ListServiceEnCoursComponent', () => {
  let component: ListServiceEnCoursComponent;
  let fixture: ComponentFixture<ListServiceEnCoursComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListServiceEnCoursComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListServiceEnCoursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
