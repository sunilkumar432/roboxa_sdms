import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResearchProductsComponent } from './research-products.component';

describe('ResearchProductsComponent', () => {
  let component: ResearchProductsComponent;
  let fixture: ComponentFixture<ResearchProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResearchProductsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResearchProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
