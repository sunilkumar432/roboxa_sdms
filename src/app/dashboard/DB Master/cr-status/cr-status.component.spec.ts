import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrStatusComponent } from './cr-status.component';

describe('CrStatusComponent', () => {
  let component: CrStatusComponent;
  let fixture: ComponentFixture<CrStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrStatusComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
