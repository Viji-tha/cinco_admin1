import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ApiService } from '../api.client';
import { UtilsService } from '../utils/utilities-service';



@Component({
  selector: 'app-edit-booking',
  templateUrl: './edit-booking.component.html',
  styleUrls: ['./edit-booking.component.scss']
})
export class EditBookingComponent implements OnInit {
  editBookingForm:FormGroup;
  submitted:boolean=false;
  message:string=undefined;
  errors:string[]=[];
  messages:string[]=[];
  bsDatePicker:string[]=[];
  bsConfig:boolean=true;
  minDate: any;

  selected_booking_id=0;
  Booking_details: any;



  

  constructor(private route: ActivatedRoute,private formBuilder:FormBuilder, private router: Router,private api: ApiService, private util: UtilsService,  public toast: ToastrService){}
    
  getBookingdetails() {
    this.api.put('booking/update-booking/'+this.selected_booking_id,null).subscribe((response: any) => {
      this.Booking_details = response.response;
      this.editBookingForm.controls['branch_id'].setValue(this.Booking_details['branch_id']);
      this.editBookingForm.controls['user_id'].setValue(this.Booking_details['user_id']);
      this.editBookingForm.controls['booking_date'].setValue(this.Booking_details['booking_date']);
      this.editBookingForm.controls['booked_by'].setValue(this.Booking_details['booked_by']);
      this.editBookingForm.controls['check_in'].setValue(this.Booking_details['check_in']);
      this.editBookingForm.controls['no_of_days'].setValue(this.Booking_details['no_of_days']);                 
      this.editBookingForm.controls['check_out'].setValue(this.Booking_details['check_out']);
      this.editBookingForm.controls['payment_method'].setValue(this.Booking_details['payment_method']);
      this.editBookingForm.controls['booking_status'].setValue(this.Booking_details['booking_status']);
      this.editBookingForm.controls['room_type'].setValue(this.Booking_details['room_type']);
      this.editBookingForm.controls['no_of_people'].setValue(this.Booking_details['no_of_people']);
      this.editBookingForm.controls['no_of_rooms'].setValue(this.Booking_details['no_of_rooms']);
   
      this.submitted = false;
    }
, (error) => {
      console.log(error);
      this.toast.error('Failed to update booking. Please try again.');
    })
  }
  
  ngOnInit():void{


    this.route.params.subscribe(params => {
      this.selected_booking_id = params['_id'];
      this.getBookingdetails();
      console.log('The id of this route is: ', params['_id']);
    });






    this.minDate = new Date();
    this.minDate.setDate(this.minDate.getDate());

    this.editBookingForm=this.formBuilder.group({
      branch_id:['',[Validators.required]],
      user_id:['',[Validators.required]],
      booking_date:['',[Validators.required]],
      booked_by:['',[Validators.required]],
      check_in:['',[Validators.required]],
      no_of_days:['',[Validators.required]],
      check_out:['',[Validators.required]],     
     
      booking_status:['',[Validators.required]],
      room_type:['',[Validators.required]],
      no_of_people:['',[Validators.required]],      
      no_of_rooms:['',[Validators.required]], 
      payment_method:['',[Validators.required]],    
    });
  }
get f(){
  return this.editBookingForm.controls;
}
 saveEditBooking(){
  this.submitted=true;
  this.errors=[];
  this.messages=[];

  if(!this.editBookingForm.valid){
    return;
  }


  (error: any) => {

    console.log(error);
  
    this.submitted = false;

    this.toast.error(this.errors[0],"Validation Failed");
 
  }
  


}
  

}