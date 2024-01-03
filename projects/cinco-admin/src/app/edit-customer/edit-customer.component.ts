import { Component ,OnInit, ViewEncapsulation} from '@angular/core';
import { FormBuilder, Validators ,FormGroup, FormControl} from '@angular/forms';
import { Router } from '@angular/router';
import { NGB_DATEPICKER_CALENDAR_FACTORY  } from '@ng-bootstrap/ng-bootstrap/datepicker/ngb-calendar';
import * as moment from 'moment';


 

@Component({
  selector: 'app-edit-customer',
  templateUrl: './edit-customer.component.html',
  styleUrls: ['./edit-customer.component.scss'],
  
  
})
export class EditCustomerComponent {
  editCustomerForm:FormGroup;
  submitted:boolean=false;
  message:string=undefined;
  isSelected:any;
  errors:string[]=[];
  messages:string[]=[];

  bsDatePicker:string[]=[];
  bsConfig:boolean=true;
  bsRangeValue: Date[];
  onDateSelect:boolean=true;
  minDate: any;

  time: Date = new Date();

  
  currentTime: string;




  // constructor(private formBuilder:FormBuilder,private router:Router)
  
    //  -------automatic time start--------

    
  
  

  
 mytime: Date = new Date();
  meridians = ['AM(Midnight to Noon)', 'PM(Noon to Midnight)'];
 

  constructor(private formBuilder:FormBuilder,private router:Router){

    this.populateHours();
    this.populateMinutes();


    this.currentTime = moment().format('HH:mm:ss');
  setInterval(() => {
    this.currentTime = moment().format('HH:mm:ss');
  }, 1000);
}
  


  ngOnInit():void{

    this.minDate = new Date();
    this.minDate.setDate(this.minDate.getDate());

    
   

    this.editCustomerForm=this.formBuilder.group({
      bookingid:['',[Validators.required]],
      name:['',[Validators.required]],
      email:['', [Validators.required, Validators.pattern(/^(\d{10}|\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3}))$/)]],
            
      roomtype:['',[Validators.required]],
      members:['',[Validators.required]],
      date:['',[Validators.required]],
      hours:['',[Validators.required]],
      minutes:['',[Validators.required]],
      date1:['',[Validators.required]],

      checkindate:['',[Validators.required]],
      checkoutdate:['',[Validators.required]],
      phonenumber:['',Validators.compose([Validators.required,Validators.pattern(
        '(([+][(]?[0-9]{1,3}[)]?)|([(]?[0-9]{4}[)]?))\s*[)]?[-\s\.]?[(]?[0-9]{1,3}[)]?([-\s\.]?[0-9]{3})([-\s\.]?[0-9]{3,4})'
          )])],
      file:['',[Validators.required]],
      text:['',[Validators.required]]

    });
  }
get f(){
  return this.editCustomerForm.controls;
}
 saveEditCustomer(){
  this.submitted=true;
  this.errors=[];
  this.messages=[];

  if(!this.editCustomerForm.valid){
    return;
  }
  (error:any) => {
    console.log(error);
    this.submitted=false;
    this.errors=[error.error.Message];
    
  }
 }

// ----------manual starts----------
// --------manual time starts-----------
hours: number[] = [];
minutes: number[] = [];
selectedHour: number = 0;
selectedMinute: number = 0;
selectedPeriod: string = 'AM';



private populateHours(): void {
  for (let i = 1; i <= 24; i++) {
    this.hours.push(i);
  }
}

private populateMinutes(): void {
  for (let i = 0; i < 60; i++) {
    this.minutes.push(i);
  }
}

formatTime(hour: number, minute: number, period: string): string {
  let formattedHour = hour.toString().padStart(2, '0');
  let formattedMinute = minute.toString().padStart(2, '0');
  return `${formattedHour}:${formattedMinute} ${period}`;
}



// --------manual time ends------------



}








