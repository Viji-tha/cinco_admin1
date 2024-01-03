import { Component,OnInit } from '@angular/core';
import { HttpClient,HttpResponse} from '@angular/common/http';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ApiService } from '../api.client';



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
  branch_id:string;
  room_type_id:string;
 
}




@Component({
  selector: 'app-all-rooms',
  templateUrl: './all-rooms.component.html',
  styleUrls: ['./all-rooms.component.scss']
})
export class AllRoomsComponent implements OnInit{
  customer_details:boolean=false;
  rooms:any=[];
  constructor(
    private formBuilder: FormBuilder,
    private api: ApiService,
    private router: Router,
    public toast: ToastrService,
    private http:HttpClient
  ) { }

  ngOnInit()
  {
    this.api.get('rooms/get-all-room-details').subscribe((res: any) => {
      this.rooms = res.message;
      console.log('Fetched Booking Data:', this.rooms); // Log the fetched data

    }, (error) => {
      console.log(error);
      this.toast.error("Something Went to Wrong. Try Again!....", "Error");
    })

  }

  
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

  filteredData: TableRow[] = [...this.rooms];
  currentPage = 1;
  itemsPerPage =5;
  sortKey: keyof TableRow | null = null;
  sortDirection: string = 'asc';

  filterTable(filterValue: string) {
    
    this.filteredData = this.rooms.filter((row) => {
      return (
        row.name.toLowerCase().includes(filterValue.toLowerCase()) ||
        row.email.toLowerCase().includes(filterValue.toLowerCase())
      );
    });
    this.currentPage = 1; 
  }

  sortRooms(key: keyof TableRow) {
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



  loadRoomDetails(_id:string){
    
    this.router.navigate(['/edit-rooms',_id], { queryParams: { room: '_id' } }); 
  }
}
