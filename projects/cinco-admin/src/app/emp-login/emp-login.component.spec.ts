import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpLoginComponent } from './emp-login.component';

describe('EmpLoginComponent', () => {
  let component: EmpLoginComponent;
  let fixture: ComponentFixture<EmpLoginComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmpLoginComponent]
    });
    fixture = TestBed.createComponent(EmpLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
