import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicdetailsCompanyComponent } from './basicdetails-company.component';

describe('BasicdetailsCompanyComponent', () => {
  let component: BasicdetailsCompanyComponent;
  let fixture: ComponentFixture<BasicdetailsCompanyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BasicdetailsCompanyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BasicdetailsCompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
