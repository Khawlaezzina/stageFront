import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateProblemeBeforeApprouvementComponent } from './update-probleme-before-approuvement.component';

describe('UpdateProblemeBeforeApprouvementComponent', () => {
  let component: UpdateProblemeBeforeApprouvementComponent;
  let fixture: ComponentFixture<UpdateProblemeBeforeApprouvementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateProblemeBeforeApprouvementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateProblemeBeforeApprouvementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
