import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewCIComponent } from './new-ci.component';

describe('NewCIComponent', () => {
  let component: NewCIComponent;
  let fixture: ComponentFixture<NewCIComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewCIComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewCIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
