import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SiteAddEditComponent } from './site-add-edit.component';

describe('SiteAddEditComponent', () => {
  let component: SiteAddEditComponent;
  let fixture: ComponentFixture<SiteAddEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SiteAddEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SiteAddEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
