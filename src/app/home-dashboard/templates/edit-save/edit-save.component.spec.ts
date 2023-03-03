import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditSaveComponent } from './edit-save.component';

describe('EditSaveComponent', () => {
  let component: EditSaveComponent;
  let fixture: ComponentFixture<EditSaveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditSaveComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditSaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
