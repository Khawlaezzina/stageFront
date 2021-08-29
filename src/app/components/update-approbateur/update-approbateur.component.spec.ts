import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateApprobateurComponent } from './update-approbateur.component';

describe('UpdateApprobateurComponent', () => {
  let component: UpdateApprobateurComponent;
  let fixture: ComponentFixture<UpdateApprobateurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateApprobateurComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateApprobateurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
