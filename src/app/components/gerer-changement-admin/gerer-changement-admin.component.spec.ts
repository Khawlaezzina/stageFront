import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GererChangementAdminComponent } from './gerer-changement-admin.component';

describe('GererChangementAdminComponent', () => {
  let component: GererChangementAdminComponent;
  let fixture: ComponentFixture<GererChangementAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GererChangementAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GererChangementAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
