import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditRoomsComponent } from './edit-rooms.component';

describe('EditRoomsComponent', () => {
  let component: EditRoomsComponent;
  let fixture: ComponentFixture<EditRoomsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditRoomsComponent]
    });
    fixture = TestBed.createComponent(EditRoomsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
