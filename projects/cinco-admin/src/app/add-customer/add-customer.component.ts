import { Component ,OnInit} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import * as moment from 'moment';
@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.scss']
})
export class AddCustomerComponent {

  addCustomerForm:FormGroup;
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
 




  constructor(private formBuilder:FormBuilder,private router:Router,){
    //  -------automatic time start--------

    this.populateHours();
    this.populateMinutes();


    // ------------automatic time ends---------
   
    this.currentTime = moment().format('HH:mm:ss');
  setInterval(() => {
    this.currentTime = moment().format('HH:mm:ss');
  }, 1000);
}
  ngOnInit():void{
    
    this.minDate = new Date();
    this.minDate.setDate(this.minDate.getDate());


    this.addCustomerForm=this.formBuilder.group({
      bookingid:['',[Validators.required]],
      name:['',[Validators.required]],
      room:['',[Validators.required]],
      email:['',[Validators.required, Validators.pattern(/^(\d{10}|\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3}))$/)]],
      persons:['',[Validators.required]],
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
      text:['',[Validators.required]],
      idnumber:['',[Validators.required]]

    });
  }
get f(){
  return this.addCustomerForm.controls;
}
 saveAddCustomer(){
  this.submitted=true;
  this.errors=[];
  this.messages=[];

  if(!this.addCustomerForm.valid){
    return;
  }
  // (error:any) => {
  //   console.log(error);
  //   this.submitted=false;
  //   this.errors=[error.error.Message];
    
  // }

  const selectedDate: Date = this.addCustomerForm.value.date;
  const currentDate: Date = new Date();

   if(selectedDate<currentDate){
     console.log('Selected date is not valid.Please choose a date in the future.');

  }



else{
(error:any) => {
  console.log(error);
  this.submitted=false;
  this.errors=[error.error.Message];
  
}
}





 }

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
