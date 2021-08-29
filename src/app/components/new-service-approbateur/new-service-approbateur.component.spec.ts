import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewServiceApprobateurComponent } from './new-service-approbateur.component';

describe('NewServiceApprobateurComponent', () => {
  let component: NewServiceApprobateurComponent;
  let fixture: ComponentFixture<NewServiceApprobateurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewServiceApprobateurComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewServiceApprobateurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
