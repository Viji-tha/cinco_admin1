import { Component,OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ApiService } from '../api.client';
import { UtilsService } from '../utils/utilities-service';

@Component({
  selector: 'app-add-role',
  templateUrl: './add-role.component.html',
  styleUrls: ['./add-role.component.scss']
})
export class AddRoleComponent {

  addRoleForm:FormGroup;
  submitted:boolean=false;
  message:string=undefined;
  errors:string[]=[];
  messages:string[]=[];
  
  

  constructor(private formBuilder:FormBuilder, private router: Router,private api: ApiService, private util: UtilsService,  public toast: ToastrService){}
  ngOnInit():void{
    this.addRoleForm=this.formBuilder.group({
      name:['',[Validators.required]],
      description:['',[Validators.required]],
      "is_create": true,
      "is_update": true,
      "is_delete": true,
      "is_view": true
    });
  }
get f(){
  return this.addRoleForm.controls;
}
 saveAddRole(){
  this.submitted=true;
  this.errors=[];
  this.messages=[];

  if(!this.addRoleForm.valid){
    return;
  }
  const url="superAdmin/create-role";

  var body ={
    "name":  this.addRoleForm.get("name")?.value,
    "description":  this.addRoleForm.get("description")?.value,
    "is_create": true,
    "is_update": true,
    "is_delete": true,
    "is_view": true
    

  }
  this.api.addRole(url, body).subscribe((res: any) => {
    
    
    

    
    
    this.submitted = false;     
  },
    (error: any) => {

      console.log(error);
      // this.loaded=false;        
      // this.SpinnerService.hide();
      
      // console.log("====================")
      this.submitted = false;
    //  this.errors = [error.error.Message];
      this.toast.error(this.errors[0],"Validation Failed");
       //this.loaded=false;
    }
    
  );
  
}

}
