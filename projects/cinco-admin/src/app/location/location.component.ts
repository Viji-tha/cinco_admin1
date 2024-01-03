import { Component,OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.scss']
})
export class LocationComponent {
  locationForm:FormGroup;
  submitted:boolean=false;
  message:string=undefined;
  isSelected:any;
  errors:string[]=[];
  messages:string[]=[];


  constructor(private formBuilder:FormBuilder,private router:Router,){}
  
  ngOnInit():void{
    this.locationForm=this.formBuilder.group({
      
      name:['',[Validators.required]],
      email:['', [Validators.required, Validators.pattern(/^(\d{10}|\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3}))$/)]],
      subject:['',[Validators.required]]
    });
  }
get f(){
  return this.locationForm.controls;
}
 saveLocation(){
  this.submitted=true;
  this.errors=[];
  this.messages=[];

  if(!this.locationForm.valid){
    return;
  }
  (error:any) => {
    console.log(error);
    this.submitted=false;
    this.errors=[error.error.Message];
    
  }
 }
}
