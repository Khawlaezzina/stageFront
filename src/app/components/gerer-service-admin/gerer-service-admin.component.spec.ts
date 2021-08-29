import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GererServiceAdminComponent } from './gerer-service-admin.component';

describe('GererServiceAdminComponent', () => {
  let component: GererServiceAdminComponent;
  let fixture: ComponentFixture<GererServiceAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GererServiceAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GererServiceAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
