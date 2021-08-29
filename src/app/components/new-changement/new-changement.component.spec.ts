import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewChangementComponent } from './new-changement.component';

describe('NewChangementComponent', () => {
  let component: NewChangementComponent;
  let fixture: ComponentFixture<NewChangementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewChangementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewChangementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
