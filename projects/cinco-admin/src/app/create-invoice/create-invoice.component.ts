import { Component,OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-invoice',
  templateUrl: './create-invoice.component.html',
  styleUrls: ['./create-invoice.component.scss']
})
export class CreateInvoiceComponent {

  createInvoiceForm:FormGroup;
  submitted:boolean=false;
  message:string=undefined;
  errors:string[]=[];
  messages:string[]=[];

  bsDatePicker:string[]=[];
  bsConfig:boolean=true;
  maxDate: Date;
  

  constructor(private formBuilder:FormBuilder,private router:Router,){}
  ngOnInit():void{

    this.maxDate = new Date();
    this.maxDate.setDate(this.maxDate.getDate());

    this.createInvoiceForm=this.formBuilder.group({
      name:['',[Validators.required]],
      roomtype:['',[Validators.required]],
      email:['',[Validators.required, Validators.pattern(/^(\d{10}|\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3}))$/)]],
      type_room:['',[Validators.required]],
      c_address:['',[Validators.required]],
      b_address:['',[Validators.required]],
      i_date:['',[Validators.required]],
      d_date:['',[Validators.required]],
      tax:['',[Validators.required]],
      discount:['',[Validators.required]],
      text:['',[Validators.required]],
      // phonenumber:['',Validators.compose([Validators.required,Validators.pattern(
      //   '(([+][(]?[0-9]{1,3}[)]?)|([(]?[0-9]{4}[)]?))\s*[)]?[-\s\.]?[(]?[0-9]{1,3}[)]?([-\s\.]?[0-9]{3})([-\s\.]?[0-9]{3,4})'
      //     )])],
      // file:['',[Validators.required]],
      // text:['',[Validators.required]]

    });
  }
get f(){
  return this.createInvoiceForm.controls;
}
 saveCreateInvoice(){
  this.submitted=true;
  this.errors=[];
  this.messages=[];

  if(!this.createInvoiceForm.valid){
    return;
  }
  (error:any) => {
    console.log(error);
    this.submitted=false;
    this.errors=[error.error.Message];
    
  }
 }
}
