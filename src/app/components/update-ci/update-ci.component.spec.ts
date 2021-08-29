import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateCIComponent } from './update-ci.component';

describe('UpdateCIComponent', () => {
  let component: UpdateCIComponent;
  let fixture: ComponentFixture<UpdateCIComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateCIComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateCIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
