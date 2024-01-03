import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-payment-invoices',
  templateUrl: './payment-invoices.component.html',
  styleUrls: ['./payment-invoices.component.scss']
})
export class PaymentInvoicesComponent {

  paymentInvoicesForm: FormGroup;
  submitted: boolean = false;
  message: string = undefined;
  isSelected: any;
  errors: string[] = [];
  messages: string[] = [];

  bsDatePicker: string[] = [];
  bsConfig: boolean = true;

  mytime: Date = new Date();
  meridians = ['AM(Midnight to Noon)', 'PM(Noon to Midnight)'];
  maxDate: Date;
  minDate: Date;
  maxFromDate: Date;
  MinToDate: Date;
  maxlength: any;


  constructor(private formBuilder: FormBuilder, private router: Router,) { }
  ngOnInit(): void {

    this.maxDate = new Date();
    this.maxDate.setDate(this.maxDate.getDate());
    this.minDate.setDate(this.minDate.getDate());
    // this.maxlength.setInterval(this.maxDate-1.getDate());

    this.paymentInvoicesForm = this.formBuilder.group({
      fromdate: ['', [Validators.required]],
      todate: ['', [Validators.required]],
      status: ['', [Validators.required]],


    });
  }
  get f() {
    return this.paymentInvoicesForm.controls;
  }
  savePaymentInvoices() {
    this.submitted = true;
    this.errors = [];
    this.messages = [];

    if (!this.paymentInvoicesForm.valid) {
      return;
    }
    (error: any) => {
      console.log(error);
      this.submitted = false;
      this.errors = [error.error.Message];

    }
  }
  onDateChange(event){
    console.log(event);
  }
}
