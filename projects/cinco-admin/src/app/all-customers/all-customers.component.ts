import { HttpClient } from '@angular/common/http';
import { Component ,OnDestroy,OnInit} from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Subject } from 'rxjs';
import { ApiService } from '../api.client';


interface TableRow {
  booking_id: string;
  name: string;
  email: string;
  roomtype:string;
  totalnos:string;
  bookdate:Date;
 
  indate:string;
  outdate:string;
  phno:string;
  idproof:string,
  status:string;
  
}


@Component({
  selector: 'app-all-customers',
  templateUrl: './all-customers.component.html',
  styleUrls: ['./all-customers.component.scss']
})
export class AllCustomersComponent {

  customers:any=[];
  constructor(
    private formBuilder: FormBuilder,
    private api: ApiService,
    private router: Router,
    public toast: ToastrService,
    private http:HttpClient
  ) { }

  ngOnInit()
  {
    this.api.get('customers/get-all-customers-details').subscribe((res: any) => {
      this.customers = res.message;
      console.log('Fetched Booking Data:', this.customers); // Log the fetched data

    }, (error) => {
      console.log(error);
      this.toast.error("Something Went to Wrong. Try Again!....", "Error");
    })

  }

  tableData: TableRow[] = [
    
    {
      booking_id: 'B001',
      name: 'Kenadey',
      email: 'myname@gmail.com',
      bookdate: new Date(),
      
      roomtype: 'deluxe',
      totalnos: '5',          
      indate: '11-06-2023',
      outdate: '19-06-2023',
      phno: '9999999999',
      idproof:'123658964587',
      status: 'active'
    },
    {
      booking_id: 'B002',
      name: 'Albert',
      email: 'user@gmail.com',
      bookdate: new Date(),
      
      roomtype: 'deluxe',
      totalnos: '5',          
      indate: '11-06-2023',
      outdate: '19-06-2023',
      phno: '9999999999',
      idproof:'123658964587',
      status: 'active'
    },
    {
      booking_id: 'B003',
      name: 'Smart',
      email: 'ourname@gmail.com',
      bookdate: new Date(),
     
      roomtype: 'deluxe',
      totalnos: '5',          
      indate: '11-06-2023',
      outdate: '19-06-2023',
      phno: '9999999999',
      idproof:'123658964587',
      status: 'active'
    },
    {
      booking_id: 'B004',
      name: 'Bernal',
      email: 'myname@gmail.com',
      bookdate: new Date(),
      
      roomtype: 'deluxe',
      totalnos: '5',          
      indate: '11-06-2023',
      outdate: '19-06-2023',
      phno: '9999999999',
      idproof:'123658964587',
      status: 'active'
    },
    {
      booking_id: 'B005',
      name: 'Bernal',
      email: 'myname@gmail.com',
      bookdate: new Date(),
      
      roomtype: 'deluxe',
      totalnos: '5',          
      indate: '11-06-2023',
      outdate: '19-06-2023',
      phno: '9999999999',
      idproof:'123658964587',
      status: 'active'
    },
    {
      booking_id: 'B006',
      name: 'Bernal',
      email: 'myname@gmail.com',
      bookdate: new Date(),
     
      roomtype: 'deluxe',
      totalnos: '5',          
      indate: '11-06-2023',
      outdate: '19-06-2023',
      phno: '9999999999',
      idproof:'123658964587',
      status: 'active'
    },
    {
      booking_id: 'B007',
      name: 'Bernal',
      email: 'myname@gmail.com',
      bookdate: new Date(),
      
      roomtype: 'deluxe',
      totalnos: '5',          
      indate: '11-06-2023',
      outdate: '19-06-2023',
      phno: '9999999999',
      idproof:'123658964587',
      status: 'active'
    },
    {
      booking_id: 'B008',
      name: 'Bernal',
      email: 'myname@gmail.com',
      bookdate: new Date(),
      
      roomtype: 'deluxe',
      totalnos: '5',          
      indate: '11-06-2023',
      outdate: '19-06-2023',
      phno: '9999999999',
      idproof:'123658964587',
      status: 'active'
    },
    {
      booking_id: 'B009',
      name: 'Bernal',
      email: 'myname@gmail.com',
      bookdate: new Date(),
      
      roomtype: 'deluxe',
      totalnos: '5',          
      indate: '11-06-2023',
      outdate: '19-06-2023',
      phno: '9999999999',
      idproof:'123658964587',
      status: 'active'
    },
    {
      booking_id: 'B0010',
      name: 'Bernal',
      email: 'myname@gmail.com',
      bookdate: new Date(),
      
      roomtype: 'deluxe',
      totalnos: '5',          
      indate: '11-06-2023',
      outdate: '19-06-2023',
      phno: '9999999999',
      idproof:'123658964587',
      status: 'active'
    },
    {
      booking_id: 'B011',
      name: 'Bernal',
      email: 'myname@gmail.com',
      bookdate: new Date(),
      
      roomtype: 'deluxe',
      totalnos: '5',          
      indate: '11-06-2023',
      outdate: '19-06-2023',
      phno: '9999999999',
      idproof:'123658964587',
      status: 'active'
    },
    {
      booking_id: 'B012',
      name: 'Bernal',
      email: 'myname@gmail.com',
      bookdate: new Date(),
      
      roomtype: 'deluxe',
      totalnos: '5',          
      indate: '11-06-2023',
      outdate: '19-06-2023',
      phno: '9999999999',
      idproof:'123658964587',
      status: 'active'
    },
    {
      booking_id: 'B013',
      name: 'Bernal',
      email: 'myname@gmail.com',
      bookdate: new Date(),
     
      roomtype: 'deluxe',
      totalnos: '5',          
      indate: '11-06-2023',
      outdate: '19-06-2023',
      phno: '9999999999',
      idproof:'123658964587',
      status: 'active'
    }
    ];

  filteredData: TableRow[] = [...this.tableData];
  currentPage = 1;
  itemsPerPage = 5;
  sortKey: keyof TableRow | null = null;
  sortDirection: string = 'asc';

  filterTable(filterValue: string) {
    // Perform filtering based on the filterValue
    this.filteredData = this.tableData.filter((row) => {
      return (
        row.name.toLowerCase().includes(filterValue.toLowerCase()) ||
        row.email.toLowerCase().includes(filterValue.toLowerCase()) ||
        row.indate.toLowerCase().includes(filterValue.toLowerCase()) ||
        row.booking_id.toLowerCase().includes(filterValue.toLowerCase())
      );
    });
    this.currentPage = 1; // Reset pagination to the first page
  }

  sortTable(key: keyof TableRow) {
    if (this.sortKey === key) {
      // If the same key is clicked, reverse the sort direction
      this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';
    } else {
      this.sortKey = key;
      this.sortDirection = 'asc';
    }

    // Perform sorting based on the sortKey and sortDirection
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
 
}
