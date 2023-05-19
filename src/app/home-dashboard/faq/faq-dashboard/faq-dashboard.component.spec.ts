import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FaqDashboardComponent } from './faq-dashboard.component';

describe('FaqDashboardComponent', () => {
  let component: FaqDashboardComponent;
  let fixture: ComponentFixture<FaqDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FaqDashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FaqDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
