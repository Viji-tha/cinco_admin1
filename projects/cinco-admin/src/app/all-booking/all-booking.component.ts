import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.client';
import { ApiResponse } from '../models/api-response';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { HttpClient } from '@angular/common/http';

interface TableRow {
  room_no: string;
  name: string;
  email: string;
  roomtype:string;
  location:string;
  bookdate:Date;

  indate:string;
  outdate:string;
  phno:string;
  status:string;
  user_id:String;
  booking_date:String;
  booked_by:String;
  check_in:Date;
  no_of_days:Number;
  check_out:Date;
  payment_method:String;
  booking_status:String;
  room_type:String;
  no_of_people:Number;
  no_of_rooms:Number;
  branch_id:String,
  actions:String;

}
@Component({
  selector: 'app-all-booking',
  templateUrl: './all-booking.component.html',
  styleUrls: ['./all-booking.component.scss']
})
export class AllBookingComponent implements OnInit{
  // customer_details:boolean=false;
  booking:any=[];
  constructor(
    private formBuilder: FormBuilder,
    private api: ApiService,
    private router: Router,
    public toast: ToastrService,
    private http:HttpClient
  ) { }

  ngOnInit()
  {
    this.api.get('booking/get-all-booking-details').subscribe((res: any) => {
      this.booking = res.message;
      console.log('Fetched Booking Data:', this.booking); // Log the fetched data

    }, (error) => {
      console.log(error);
      this.toast.error("Something Went to Wrong. Try Again!....", "Error");
    })

  }
  // ngOnDestroy(): void {
  //   // Do not forget to unsubscribe the event
  //   this.dtTrigger.unsubscribe();
  // } 
  
  tableData: TableRow[] = [
    
    // {
    //   room_no: 'B001',
    //   name: 'Kenadey',
    //   email: 'myname@gmail.com',
    //   bookdate: new Date(),
      
    //   roomtype: 'deluxe',
    //   location: 'banjarahills',          
    //   indate: '11-06-2023',
    //   outdate: '19-06-2023',
    //   phno: '9999999999',
    //   status: 'occupied'
    // },
    // {
    //   room_no: 'B002',
    //   name: 'Albert',
    //   email: 'myname@gmail.com',
    //   bookdate: new Date(),
      
    //   roomtype: 'double',
    //   location: 'begumpet',          
    //   indate: '11-06-2023',
    //   outdate: '19-06-2023',
    //   phno: '9999999999',
    //   status: 'reserved'
    // },
    // {
    //   room_no: 'B003',
    //   name: 'Smart',
    //   email: 'myname@gmail.com',
    //   bookdate: new Date(),
     
    //   roomtype: 'standard',
    //   location: 'esi',          
    //   indate: '11-06-2023',
    //   outdate: '19-06-2023',
    //   phno: '9999999999',
    //   status: 'reserved'
    // },
    // {
    //   room_no: 'B004',
    //   name: 'Bernal',
    //   email: 'myname@gmail.com',
    //   bookdate: new Date(),
      
    //   roomtype: 'deluxe',
    //   location: 'banjarahills',          
    //   indate: '11-06-2023',
    //   outdate: '19-06-2023',
    //   phno: '9999999999',
    //   status: 'vacant'
    // },
    // {
    //   room_no: 'B005',
    //   name: 'Bernal',
    //   email: 'myname@gmail.com',
    //   bookdate: new Date(),
      
    //   roomtype: 'double',
    //   location: 'begumpet',          
    //   indate: '11-06-2023',
    //   outdate: '19-06-2023',
    //   phno: '9999999999',
    //   status: 'occupied'
    // },
    // {
    //   room_no: 'B006',
    //   name: 'Bernal',
    //   email: 'myname@gmail.com',
    //   bookdate: new Date(),
     
    //   roomtype: 'standard',
    //   location: 'esi',          
    //   indate: '11-06-2023',
    //   outdate: '19-06-2023',
    //   phno: '9999999999',
    //   status: 'occupied'
    // },
    // {
    //   room_no: 'B007',
    //   name: 'Bernal',
    //   email: 'myname@gmail.com',
    //   bookdate: new Date(),
      
    //   roomtype: 'deluxe',
    //   location: 'banjarahills',          
    //   indate: '11-06-2023',
    //   outdate: '19-06-2023',
    //   phno: '9999999999',
    //   status: 'reserved'
    // },
    // {
    //   room_no: 'B008',
    //   name: 'Bernal',
    //   email: 'myname@gmail.com',
    //   bookdate: new Date(),
      
    //   roomtype: 'deluxe',
    //   location: 'banjarahills',          
    //   indate: '11-06-2023',
    //   outdate: '19-06-2023',
    //   phno: '9999999999',
    //   status: 'vacant'
    // },
    // {
    //   room_no: 'B009',
    //   name: 'Bernal',
    //   email: 'myname@gmail.com',
    //   bookdate: new Date(),
      
    //   roomtype: 'deluxe',
    //   location: 'banjarahills',          
    //   indate: '11-06-2023',
    //   outdate: '19-06-2023',
    //   phno: '9999999999',
    //   status: 'vacant'
    // },
    // {
    //   room_no: 'B0010',
    //   name: 'Bernal',
    //   email: 'myname@gmail.com',
    //   bookdate: new Date(),
      
    //   roomtype: 'deluxe',
    //   location: 'banjarahills',          
    //   indate: '11-06-2023',
    //   outdate: '19-06-2023',
    //   phno: '9999999999',
    //   status: 'occupied'
    // },
    // {
    //   room_no: 'B011',
    //   name: 'Bernal',
    //   email: 'myname@gmail.com',
    //   bookdate: new Date(),
      
    //   roomtype: 'double',
    //   location: 'begumpet',          
    //   indate: '11-06-2023',
    //   outdate: '19-06-2023',
    //   phno: '9999999999',
    //   status: 'reserved'
    // },
    // {
    //   room_no: 'B012',
    //   name: 'Bernal',
    //   email: 'myname@gmail.com',
    //   bookdate: new Date(),
      
    //   roomtype: 'standard',
    //   location: 'esi',          
    //   indate: '11-06-2023',
    //   outdate: '19-06-2023',
    //   phno: '9999999999',
    //   status: 'reserved'
    // },
    // {
    //   room_no: 'B013',
    //   name: 'Bernal',
    //   email: 'myname@gmail.com',
    //   bookdate: new Date(),
     
    //   roomtype: 'double',
    //   location: 'esi',          
    //   indate: '11-06-2023',
    //   outdate: '19-06-2023',
    //   phno: '9999999999',
    //   status: 'occupied'
    // }
    ];

  filteredData: TableRow[] = [...this.tableData];
  currentPage = 1;
  itemsPerPage =5;
  sortKey: keyof TableRow | null = null;
  sortDirection: string = 'asc';

  filterTable(filterValue: string) {
    
    this.filteredData = this.tableData.filter((row) => {
      return (
        row.name.toLowerCase().includes(filterValue.toLowerCase()) ||
        row.email.toLowerCase().includes(filterValue.toLowerCase())
      );
    });
    this.currentPage = 1; 
  }

  sortTable(key: keyof TableRow) {
    if (this.sortKey === key) {

      this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';
    } else {
      this.sortKey = key;
      this.sortDirection = 'asc';
    }

  
    this.filteredData.sort((a, b) => {
      const valA = a[this.sortKey!];
      const valB = b[this.sortKey!];
      if (valA < valB) {
        return this.sortDirection === 'asc' ? -1 : 1;
      } else if (valA > valB) {
        return this.sortDirection === 'asc' ? 1 : -1;
      } else {
        return 0;
      }
    });
  }

  getPaginatedData() {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    return this.filteredData.slice(startIndex, endIndex);
  }

  setPage(page: number) {
    this.currentPage = page;
  }

  getTotalPages(): number {
    return Math.ceil(this.filteredData.length / this.itemsPerPage);
  }


  loadBookingDetails(_id:number){
    
    this.router.navigate(['/edit-booking',_id], { queryParams: { booking: '_id' } }); 
  }

}
