import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateServiceBeforeApprouvementComponent } from './update-service-before-approuvement.component';

describe('UpdateServiceBeforeApprouvementComponent', () => {
  let component: UpdateServiceBeforeApprouvementComponent;
  let fixture: ComponentFixture<UpdateServiceBeforeApprouvementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateServiceBeforeApprouvementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateServiceBeforeApprouvementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
