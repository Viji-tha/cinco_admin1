import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ApiService } from '../api.client';
import { UtilsService } from '../utils/utilities-service';

@Component({
  selector: 'app-add-booking',
  templateUrl: './add-booking.component.html',
  styleUrls: ['./add-booking.component.scss']
})
export class AddBookingComponent {
  addBookingForm:FormGroup;
  submitted:boolean=false;
  message:string=undefined;
  errors:string[]=[];
  messages:string[]=[];
  bsDatePicker:string[]=[];
  bsConfig:boolean=true;
  minDate: any;
  

  constructor(private formBuilder:FormBuilder, private router: Router,private api: ApiService, private util: UtilsService,  public toast: ToastrService){}
  ngOnInit():void{

    this.minDate = new Date();
    this.minDate.setDate(this.minDate.getDate());

    this.addBookingForm=this.formBuilder.group({
      branch_id:['',[Validators.required]],
      user_id:['',[Validators.required]],
      booking_date:['',[Validators.required]],
      booked_by:['',[Validators.required]],
      check_in:['',[Validators.required]],
      no_of_days:['',[Validators.required]],
      check_out:['',[Validators.required]],     
      payment_method:['',[Validators.required]],
      room_id:['',[Validators.required]],
      room_type:['',[Validators.required]],
      no_of_people:['',[Validators.required]],      
      no_of_rooms:['',[Validators.required]],      
    });
  }
get f(){
  return this.addBookingForm.controls;
}
 saveAddBooking(){
  this.submitted=true;
  this.errors=[];
  this.messages=[];

  if(!this.addBookingForm.valid){
    return;
  }
  const url="booking/add-booking";

  var body ={
    branch_id:this.addBookingForm.get("branch_id")?.value,
    user_id:  this.addBookingForm.get("user_id")?.value,
    booking_date:  this.addBookingForm.get("booking_date")?.value,
    booked_by:  this.addBookingForm.get("booked_by")?.value,
    check_in:  this.addBookingForm.get("check_in")?.value,
    no_of_days:  this.addBookingForm.get("no_of_days")?.value,    
    check_out:  this.addBookingForm.get("check_out")?.value,
    payment_method:  this.addBookingForm.get("payment_method")?.value,
    room_id:  this.addBookingForm.get("room_id")?.value,
    room_type:  this.addBookingForm.get("room_type")?.value,
    no_of_people:  this.addBookingForm.get("no_of_people")?.value,    
    no_of_rooms:  this.addBookingForm.get("no_of_rooms")?.value,       
}
this.api.addBookingForm(url, body).subscribe((res: any) => {
  
  
  

  
  
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
