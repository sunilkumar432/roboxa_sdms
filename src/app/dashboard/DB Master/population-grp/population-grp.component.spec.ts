import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopulationGrpComponent } from './population-grp.component';

describe('PopulationGrpComponent', () => {
  let component: PopulationGrpComponent;
  let fixture: ComponentFixture<PopulationGrpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopulationGrpComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PopulationGrpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
