import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MotivationalStoryComponent } from './motivational-story.component';

describe('MotivationalStoryComponent', () => {
  let component: MotivationalStoryComponent;
  let fixture: ComponentFixture<MotivationalStoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MotivationalStoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MotivationalStoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
