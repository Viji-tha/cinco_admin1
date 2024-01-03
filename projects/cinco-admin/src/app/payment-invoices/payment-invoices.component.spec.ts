import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentInvoicesComponent } from './payment-invoices.component';

describe('PaymentInvoicesComponent', () => {
  let component: PaymentInvoicesComponent;
  let fixture: ComponentFixture<PaymentInvoicesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PaymentInvoicesComponent]
    });
    fixture = TestBed.createComponent(PaymentInvoicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
