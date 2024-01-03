  import { Component } from '@angular/core';
  import { FormGroup, FormBuilder, Validators } from '@angular/forms';
  import { Router } from '@angular/router';
  import * as moment from 'moment';
import { ToastrService } from 'ngx-toastr';
import { ApiService } from '../api.client';
import { UtilsService } from '../utils/utilities-service';

  @Component({
    selector: 'app-add-employee',
    templateUrl: './add-employee.component.html',
    styleUrls: ['./add-employee.component.scss']
  })
  export class AddEmployeeComponent {

    addEmployeeForm:FormGroup;
    submitted:boolean=false;
    message:string=undefined;
    errors:string[]=[];
    messages:string[]=[];

    bsDatePicker:string[]=[];
    bsTimePicker:string[]=[];
    bsRangeValue: Date[];
    maxDate = new Date();
    minDate = new Date();
    bsConfig:boolean=true;
    currentTime: string;
  




    constructor(private formBuilder:FormBuilder, private router: Router,private api: ApiService, private util: UtilsService,  public toast: ToastrService){}
    ngOnInit():void{
      
      this.minDate = new Date();
      this.minDate.setDate(this.minDate.getDate());


      this.addEmployeeForm=this.formBuilder.group({
        
        emp_name:['',[Validators.required]],
        gender:['',[Validators.required]],
        // emp_email:['',[Validators.required, Validators.pattern(/^(\d{10}|\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3}))$/)]],
        emp_email:['',[Validators.required]],
        // emp_id:['',[Validators.required]],
        role_id:['',[Validators.required]],
        emp_password:['',[Validators.required]],
        date:['',[Validators.required]],
        // dob:['',[Validators.required]],
        // contact_no:['',Validators.compose([Validators.required,Validators.pattern(
        //   '(([+][(]?[0-9]{1,3}[)]?)|([(]?[0-9]{4}[)]?))\s*[)]?[-\s\.]?[(]?[0-9]{1,3}[)]?([-\s\.]?[0-9]{3})([-\s\.]?[0-9]{3,4})'
        //     )])],
        contact_no:['',[Validators.required]],
        branch_code:['',[Validators.required]],
        add1:['',[Validators.required]],
        // add2:['',[Validators.required]],
        // city:['',[Validators.required]],
        username:['',[Validators.required]],
        // state:['',[Validators.required]],
      // zip_code:['',[Validators.required]],
        // country:['',[Validators.required]],
        idproof:['',[Validators.required]],
        file:['',[Validators.required]],
        
      });
    }
  get f(){
    return this.addEmployeeForm.controls;
  }
  saveAddEmployee(){
    this.submitted=true;
    this.errors=[];
    this.messages=[];

    if(!this.addEmployeeForm.valid){
      return;
    }
      const url="employee/create-employee";

      var body ={
        branch_id:this.addEmployeeForm.get("branch_code")?.value,
        name:  this.addEmployeeForm.get("emp_name")?.value,
        gender:  this.addEmployeeForm.get("gender")?.value,
        email:  this.addEmployeeForm.get("emp_email")?.value,
      password:  this.addEmployeeForm.get("emp_password")?.value,
      role_id:  this.addEmployeeForm.get("role_id")?.value,    
      username:  this.addEmployeeForm.get("username")?.value,
      dob:  this.addEmployeeForm.get("date")?.value,
      contact_no:  this.addEmployeeForm.get("contact_no")?.value,
      branch_code:  this.addEmployeeForm.get("branch_code")?.value,
      address:  this.addEmployeeForm.get("add1")?.value,    
      Address_proff:  this.addEmployeeForm.get("idproof")?.value,       
    }
    this.api.addEmployee(url, body).subscribe((res: any) => {
      
      
      
  
      
      
      this.submitted = false;     
    },
      (error: any) => {
  
        console.log(error);
      
        this.submitted = false;
   
        this.toast.error(this.errors[0],"Validation Failed");
     
      }
      
    );
    
  }
  
  }
  
