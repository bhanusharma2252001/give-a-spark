import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditFlyerComponent } from './edit-flyer.component';

describe('EditFlyerComponent', () => {
  let component: EditFlyerComponent;
  let fixture: ComponentFixture<EditFlyerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditFlyerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditFlyerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
