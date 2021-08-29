import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewApprobateurComponent } from './new-approbateur.component';

describe('NewApprobateurComponent', () => {
  let component: NewApprobateurComponent;
  let fixture: ComponentFixture<NewApprobateurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewApprobateurComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewApprobateurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
