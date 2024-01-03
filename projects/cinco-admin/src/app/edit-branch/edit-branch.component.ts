import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ApiService } from '../api.client';
import { UtilsService } from '../utils/utilities-service';

@Component({
  selector: 'app-edit-branch',
  templateUrl: './edit-branch.component.html',
  styleUrls: ['./edit-branch.component.scss']
})
export class EditBranchComponent implements OnInit{
  editBranchForm:FormGroup;
  submitted:boolean=false;
  message:string=undefined;
  errors:string[]=[];
  messages:string[]=[];
  bsDatePicker:string[]=[];
  bsConfig:boolean=true;
  minDate: any;

  selected_branch_id=0;
  Branch_details: any;



  

  constructor(private route: ActivatedRoute,private formBuilder:FormBuilder, private router: Router,private api: ApiService, private util: UtilsService,  public toast: ToastrService){}
    
  getBranchdetails() {
    this.api.put('branch/update-hotel/'+this.selected_branch_id,Response).subscribe((res: any) => {
      this.Branch_details = res.response;
      this.editBranchForm.controls['branch_id'].setValue(this.Branch_details['branch_id']);

      this.editBranchForm.controls['name'].setValue(this.Branch_details['name']);
      this.editBranchForm.controls['location'].setValue(this.Branch_details['location']);
      this.editBranchForm.controls[''].setValue(this.Branch_details['logo']);
      this.editBranchForm.controls['room_type'].setValue(this.Branch_details['room_type']);
      this.editBranchForm.controls['sharing'].setValue(this.Branch_details['sharing']);

      this.editBranchForm.controls['price'].setValue(this.Branch_details['price']);                 
      this.editBranchForm.controls['total_rooms'].setValue(this.Branch_details['total_rooms']);
      this.editBranchForm.controls['available_rooms'].setValue(this.Branch_details['available_rooms']);
      this.editBranchForm.controls[''].setValue(this.Branch_details['updated_by']);
      this.editBranchForm.controls[''].setValue(this.Branch_details['currency']);
     

   
      this.router.navigate(['/branches']);
      this.submitted = false;
    }
, (error) => {
      console.log(error);
      this.toast.error('Failed to update booking. Please try again.');
    })
  }
  
  ngOnInit():void{


    this.route.params.subscribe(params => {
      this.selected_branch_id = params['_id'];
      this.getBranchdetails();
      console.log('The id of this route is: ', params['_id']);
    });






    this.minDate = new Date();
    this.minDate.setDate(this.minDate.getDate());

    this.editBranchForm=this.formBuilder.group({
      branch_id:['',[Validators.required]],
      name:['',[Validators.required]],
      location:['',[Validators.required]],
      logo:['',[Validators.required]],
                 
      sharing:['',[Validators.required]],
      room_type:['',[Validators.required]],
     price:['',[Validators.required]],      
      total_rooms:['',[Validators.required]], 
      available_rooms:['',[Validators.required]],    
    });
  }
get f(){
  return this.editBranchForm.controls;
}
saveEditBranch(){
  this.submitted=true;
  this.errors=[];
  this.messages=[];

  if(!this.editBranchForm.valid){
    return;
  }


//   var body ={
//     branch_id:this.editBookingForm.get("branch_id")?.value,
//     user_id:  this.editBookingForm.get("user_id")?.value,
//     booking_date:  this.editBookingForm.get("booking_date")?.value,
//     booked_by:  this.editBookingForm.get("booked_by")?.value,
//     check_in:  this.editBookingForm.get("check_in")?.value,
//     no_of_days:  this.editBookingForm.get("no_of_days")?.value,    
//     check_out:  this.editBookingForm.get("check_out")?.value,
//     payment_method:  this.editBookingForm.get("payment_method")?.value,
//     booking_status:  this.editBookingForm.get("booking_status")?.value,
//     booking_notes:  this.editBookingForm.get("booking_notes")?.value,
//     room_type:  this.editBookingForm.get("room_type")?.value,
//     total_price:  this.editBookingForm.get("total_price")?.value, 
//     no_of_people:  this.editBookingForm.get("no_of_people")?.value,    
//     no_of_rooms:  this.editBookingForm.get("no_of_rooms")?.value, 
//     is_check_out: true,
//     is_payed: true,
//   is_active: true,
//   is_archive: true
         
     
// },
  (error: any) => {

    console.log(error);
  
    this.submitted = false;

    this.toast.error(this.errors[0],"Validation Failed");
 
  }
  


}
}
