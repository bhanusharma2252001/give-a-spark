import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SavedFlyerComponent } from './saved-flyer.component';

describe('SavedFlyerComponent', () => {
  let component: SavedFlyerComponent;
  let fixture: ComponentFixture<SavedFlyerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SavedFlyerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SavedFlyerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
