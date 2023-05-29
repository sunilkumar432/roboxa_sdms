import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrRolesComponent } from './cr-roles.component';

describe('CrRolesComponent', () => {
  let component: CrRolesComponent;
  let fixture: ComponentFixture<CrRolesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrRolesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrRolesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
