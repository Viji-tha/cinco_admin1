import { Component,OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.scss']
})
export class ReportsComponent {
  reportsForm:FormGroup;
  submitted:boolean=false;
  message:string=undefined;
  isSelected:any;
  errors:string[]=[];
  messages:string[]=[];

  bsDatePicker:string[]=[];
  bsConfig:boolean=true;
  onDateSelect:boolean=true;
  maxDate: Date;
  

  constructor(private formBuilder:FormBuilder,private router:Router,){}
  ngOnInit():void{

    this.maxDate = new Date();
    this.maxDate.setDate(this.maxDate.getDate());
    
    this.reportsForm=this.formBuilder.group({
      name:['',[Validators.required]],
      fromdate:['',[Validators.required]],
      todate:['',[Validators.required]],
      

    });
  }
get f(){
  return this.reportsForm.controls;
}
 saveReports(){
  this.submitted=true;
  this.errors=[];
  this.messages=[];

  if(!this.reportsForm.valid){
    return;
  }
  (error:any) => {
    console.log(error);
    this.submitted=false;
    this.errors=[error.error.Message];
    
  }
 }

}
