import { Component ,OnInit} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss']
})
export class ChangePasswordComponent {
  changePasswordForm:FormGroup;
  submitted:boolean=false;
  message:string=undefined;
  errors:string[]=[];
  messages:string[]=[];
 
  

  constructor(private formBuilder:FormBuilder,private router:Router,){}
  ngOnInit():void{
    this.changePasswordForm=this.formBuilder.group({
      old_pass:['',[Validators.required]],
      // new_pass:['',[Validators.required]],
      // confirm_pass:['',[Validators.required]],
      new_pass:['',Validators.required,({validation:{maxLength: 10,minLength: 5,digit: true,specialCharacter: true} })],
      confirm_pass:['',Validators.required,({validation:{maxLength: 10,minLength: 5,digit: true,specialCharacter: true} })],
      
    });
  }
get f(){
  return this.changePasswordForm.controls;
}
 saveChangePassword(){
  this.submitted=true;
  this.errors=[];
  this.messages=[];

  if(!this.changePasswordForm.valid){
    return;
  }
  (error:any) => {
    console.log(error);
    this.submitted=false;
    this.errors=[error.error.Message];
    
  }
 }

}
