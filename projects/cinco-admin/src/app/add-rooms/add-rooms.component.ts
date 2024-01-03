import { Component ,OnInit} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ApiService } from '../api.client';
import { UtilsService } from '../utils/utilities-service';






@Component({
  selector: 'app-add-rooms',
  templateUrl: './add-rooms.component.html',
  styleUrls: ['./add-rooms.component.scss']
})
export class AddRoomsComponent implements OnInit {

  addRoomsForm:FormGroup;
  submitted:boolean=false;
  message:string=undefined;
  errors:string[]=[];
  messages:string[]=[];
  bsDatePicker:string[]=[];
  bsConfig:boolean=true;
  minDate: any;
  

  constructor(private formBuilder:FormBuilder, 
    private router: Router,
    private api: ApiService, private util: UtilsService, 
     public toast: ToastrService){}
  ngOnInit():void{

    this.minDate = new Date();
    this.minDate.setDate(this.minDate.getDate());

    this.addRoomsForm=this.formBuilder.group({
      room_no:['',[Validators.required]],
      branch_id:['',[Validators.required]],
      room_type_id:['',[Validators.required]],
     
      // check_in:['',[Validators.required]],
      // check_out:['',[Validators.required]],
      charges:['',[Validators.required]],
     
    });
  }
get f(){
  return this.addRoomsForm.controls;
}
 saveAddRooms(){
  this.submitted=true;
  this.errors=[];
  this.messages=[];

  if(!this.addRoomsForm.valid){
    return;
  }
  const url="rooms/addroom";

  const body ={
    room_no:  this.addRoomsForm.get("room_no")?.value,
    branch_id:  this.addRoomsForm.get("branch_id")?.value,
    room_type_id:  this.addRoomsForm.get("room_type_id")?.value,
    // check_in:  "",
    // check_out:  "",
    status:  this.addRoomsForm.get("charges")?.value,
    created_by: "657fd6b81a51d7c9e5fe5378", 
 
    
  }
  this.api.addRooms(url, body).subscribe(
    (res: any) => {
      this.submitted = false;
      // Handle success
    },
    (error: any) => {
      console.log(error);
      this.submitted = false;
      this.toast.error("Validation Failed");
    }
  );
}
}
  



