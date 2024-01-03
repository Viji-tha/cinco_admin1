import { Component,OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent {
  forgotPasswordForm:FormGroup;
  submitted:boolean=false;
  message:string=undefined;
  errors:string[]=[];
  messages:string[]=[];

  bsDatePicker:string[]=[];
  bsConfig:boolean=true;
  

  constructor(private formBuilder:FormBuilder,private router:Router,){}
  ngOnInit():void{
    this.forgotPasswordForm=this.formBuilder.group({
      
      email:['', [Validators.required, Validators.pattern(/^(\d{10}|\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3}))$/)]],
      

    });
  }
get f(){
  return this.forgotPasswordForm.controls;
}
 saveForgotPassword(){
  this.submitted=true;
  this.errors=[];
  this.messages=[];

  if(!this.forgotPasswordForm.valid){
    return;
  }
  (error:any) => {
    console.log(error);
    this.submitted=false;
    this.errors=[error.error.Message];
    
  }
 }

}
