import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-company-settings',
  templateUrl: './company-settings.component.html',
  styleUrls: ['./company-settings.component.scss']
})
export class CompanySettingsComponent {
  companySettingsForm:FormGroup;
  submitted:boolean=false;
  message:string=undefined;
  errors:string[]=[];
  messages:string[]=[];

  bsDatePicker:string[]=[];
  bsConfig:boolean=true;
  

  constructor(private formBuilder:FormBuilder,private router:Router,){}
  ngOnInit():void{
    this.companySettingsForm=this.formBuilder.group({
      name:['',[Validators.required]],
      company:['',[Validators.required]],
      postalcode:['',[Validators.required]],
      email:['',[Validators.required, Validators.pattern(/^(\d{10}|\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3}))$/)]],
      address:['',[Validators.required]],
      state:['',[Validators.required]],
      city:['',[Validators.required]],
      fax:['',[Validators.required]],
      url:['',[Validators.required]],
      cell_no:['',Validators.compose([Validators.required,Validators.pattern(
        '(([+][(]?[0-9]{1,3}[)]?)|([(]?[0-9]{4}[)]?))\s*[)]?[-\s\.]?[(]?[0-9]{1,3}[)]?([-\s\.]?[0-9]{3})([-\s\.]?[0-9]{3,4})'
          )])],
          contact_no:['',Validators.compose([Validators.required,Validators.pattern(
            '(([+][(]?[0-9]{1,3}[)]?)|([(]?[0-9]{4}[)]?))\s*[)]?[-\s\.]?[(]?[0-9]{1,3}[)]?([-\s\.]?[0-9]{3})([-\s\.]?[0-9]{3,4})'
              )])]
      

    });
  }
get f(){
  return this.companySettingsForm.controls;
}
 saveCompanySettings(){
  this.submitted=true;
  this.errors=[];
  this.messages=[];

  if(!this.companySettingsForm.valid){
    return;
  }
  (error:any) => {
    console.log(error);
    this.submitted=false;
    this.errors=[error.error.Message];
    
  }
 }

}
