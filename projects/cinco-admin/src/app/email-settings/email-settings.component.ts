import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-email-settings',
  templateUrl: './email-settings.component.html',
  styleUrls: ['./email-settings.component.scss']
})
export class EmailSettingsComponent {

  emailSettingsForm:FormGroup;
  submitted:boolean=false;
  message:string=undefined;
  errors:string[]=[];
  messages:string[]=[];
  bsDatePicker:string[]=[];
  bsConfig:boolean=true;
  

  constructor(private formBuilder:FormBuilder,private router:Router,){}
  ngOnInit():void{
    this.emailSettingsForm=this.formBuilder.group({
      address:['',[Validators.required]],
      name:['',[Validators.required]],
      host:['',[Validators.required]],
      user:['',[Validators.required]],
      password:['',[Validators.required]],
      port:['',[Validators.required]],
      security:['',[Validators.required]],
      auth:['',[Validators.required]],

      
    });
  }
get f(){
  return this.emailSettingsForm.controls;
}
 saveEmailSettings(){
  this.submitted=true;
  this.errors=[];
  this.messages=[];

  if(!this.emailSettingsForm.valid){
    return;
  }
  (error:any) => {
    console.log(error);
    this.submitted=false;
    this.errors=[error.error.Message];
    
  }
 }
}
