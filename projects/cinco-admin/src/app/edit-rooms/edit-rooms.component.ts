import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ApiService } from '../api.client';
import { UtilsService } from '../utils/utilities-service';

@Component({
  selector: 'app-edit-rooms',
  templateUrl: './edit-rooms.component.html',
  styleUrls: ['./edit-rooms.component.scss']
})
export class EditRoomsComponent implements OnInit {
  editRoomForm:FormGroup;
  submitted:boolean=false;
  message:string=undefined;
  errors:string[]=[];
  messages:string[]=[];
  bsDatePicker:string[]=[];
  bsConfig:boolean=true;
  minDate: any;

  selected_room_id=0;
  Room_details: any;



  

  constructor(private route: ActivatedRoute,private formBuilder:FormBuilder, private router: Router,private api: ApiService, private util: UtilsService,  public toast: ToastrService){}
    
  
     
  // getRoomdetails() {
  //   this.api.put('rooms/update-room/'+this.selected_room_id,null).subscribe((res: any) => {
  //     this.Room_details = res.response;
  //     this.editRoomForm.controls['room_type_id'].setValue(this.Room_details['room_type_id']);
  //     this.editRoomForm.controls['room_no'].setValue(this.Room_details['room_no']);
  //     this.editRoomForm.controls['status'].setValue(this.Room_details['status']);
  //     this.editRoomForm.controls['branch_id'].setValue(this.Room_details['branch_id']);
  //     this.editRoomForm.controls[''].setValue(this.Room_details['updated_by']);
  //     this.editRoomForm.controls[''].setValue(this.Room_details['created_by']);
      
  //     this.submitted = false;}
  //     , (error) => {
  //       console.log(error);
  //       this.toast.error('Failed to update booking. Please try again.');
  //     })
  //   }
  getRoomdetails() {
    // Modify this method to send a GET request to retrieve room details
    this.api.get('rooms/update-room/'+this.selected_room_id).subscribe((res: any) => {
      this.Room_details = res.response;
      // Populate form controls with fetched room details
      this.editRoomForm.patchValue({
        room_type_id: this.Room_details['room_type_id'],
        room_no: this.Room_details['room_no'],
        status: this.Room_details['status'],
        branch_id: this.Room_details['branch_id'],
        updated_by: this.Room_details['updated_by'],
        created_by: this.Room_details['created_by']
      });
      this.submitted = false;
    }, (error) => {
      console.log(error);
      this.toast.error('Failed to fetch room details. Please try again.');
    });
  }


  
  
  ngOnInit():void{


    this.route.params.subscribe(params => {
      this.selected_room_id = params['_id'];
      if (this.selected_room_id) {
        this.getRoomdetails();
      }
      console.log('The id of this route is: ', params['_id']);
    });
   this.minDate = new Date();
    this.minDate.setDate(this.minDate.getDate());

    this.editRoomForm=this.formBuilder.group({
      room_type_id:['',[Validators.required]],
      room_no:['',[Validators.required]],
      branch_id:['',[Validators.required]],
      status:['',[Validators.required]],
      updated_by:['',[Validators.required]],
      created_by:['',[Validators.required]],         
    });
  }
get f(){
  return this.editRoomForm.controls;
}



    

 saveEditRoom(){
  this.submitted=true;
  this.errors=[];
  this.messages=[];
  if(!this.editRoomForm.valid){
    return;
  }

  // Prepare the payload for the PUT request
const updatedRoomData = {
  room_type_id: this.editRoomForm.value.room_type_id,
  room_no: this.editRoomForm.value.room_no,
  status: this.editRoomForm.value.status,
  branch_id: this.editRoomForm.value.branch_id,
  updated_by: this.editRoomForm.value.updated_by,
  created_by: this.editRoomForm.value.created_by
  // Add other fields as needed based on your API requirements
};
if (this.selected_room_id) {
  // Make the PUT request to update room details with the payload
  this.api.put('rooms/update-room/' + this.selected_room_id, updatedRoomData).subscribe((res: any) => {
    // Handle successful update response
    console.log('Room updated successfully:', res);
    // Additional logic or navigation after successful update
  
  },
   (error) => {
    console.error('Failed to update room:', error);
    // Handle error - display error message or handle accordingly
    this.toast.error('Failed to update room. Please try again.');
  // });
  })
}  else {
  this.api.post('rooms/create', updatedRoomData).subscribe({
    next: (response: any) => {
      if (response?.statusCode === 201) {
        //do navigation here
      }else {
        //Tost some message
      }
    },
    error: (error) => {
      //do some errror tost
    }
  })
}
  // (error: any) => {

  //   console.log(error);
  
  //   this.submitted = false;

  //   this.toast.error(this.errors[0],"Validation Failed");
 
  // }
  

 }
}  
  


