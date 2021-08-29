import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewServiceDemandUserComponent } from './new-service-demand-user.component';

describe('NewServiceDemandUserComponent', () => {
  let component: NewServiceDemandUserComponent;
  let fixture: ComponentFixture<NewServiceDemandUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewServiceDemandUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewServiceDemandUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
