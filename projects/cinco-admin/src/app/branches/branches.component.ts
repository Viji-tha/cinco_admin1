import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import * as moment from 'moment';
import { ToastrService } from 'ngx-toastr';
import { ApiService } from '../api.client';
import { ApiResponse } from '../models/api-response';


interface TableRow {
  branch_code: string;
  name: string;
  location: string;
  // created_date:string;
  // updated_date:string;

  room_type: string;
  sharing: string;
  price: string;
  total_rooms: string;
  available_rooms:string;
  // created_person_id:string;
  // updated_person_id:string;

}


@Component({
  selector: 'app-branches',
  templateUrl: './branches.component.html',
  styleUrls: ['./branches.component.scss']
})
export class BranchesComponent implements OnInit{

  branch_details:any=[];
  branch:any=[];

  constructor(
    private formBuilder: FormBuilder,
    private api: ApiService,
    private router: Router,
    public toast: ToastrService,
    private http:HttpClient
  ) { }

  ngOnInit() {
    this.api.get('branch/get-all-branch-details').subscribe(
      (res: any) => {
        this.branch = res.message;
        console.log('Fetched Branch Data:', this.branch);
      },
      (error) => {
        console.error('Error fetching data:', error); // Log the error
        this.toast.error("Something Went Wrong. Try Again!....", "Error");
      }
    );
  }
  


  delete_branch_details(_id: string){
    this.api.delete('branch/delete-branch-details/'+_id,null).subscribe((res: any) => {
      this.branch_details = res;

      window.location.reload();
    }, (error) => {
      console.log(error);
    })
  }




  tableData: TableRow[] = [

    {
      branch_code: 'B001',
      name: 'TheCincoGrand',
      location: 'Banjarahills',
      // created_date:'10-07-2023',
      // updated_date:'10-10-2023',

      room_type: 'Deluxe & Standard',
      sharing: 'Single & Double',
      price: '2200',
      total_rooms: '125',
      available_rooms:'25'
      // created_person_id:'B10101',
      // updated_person_id:'B10110',

    },
    {
      branch_code: 'B002',
      name: 'TheCincoGrand',
      location: 'Begumpet',
      // created_date:'10-07-2023',
      // updated_date:'10-10-2023',

      room_type: 'Standard',
      sharing: 'Single & Double',
      price: '2200',
      total_rooms: '125',
      available_rooms:'25'
      // created_person_id:'B10101',
      // updated_person_id:'B10110'
    },
    {
      branch_code: 'B003',
      name: 'TheCincoGrand',
      location: 'ESI',
      // created_date:'10-07-2023',
      // updated_date:'10-10-2023',

      room_type: 'Standard',
      sharing: 'Single & Double',
      price: '2200',
      total_rooms: '125',
      available_rooms:'25'
      // created_person_id:'B10101',
      // updated_person_id:'B10110'
    },
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
        row.branch_code.toLowerCase().includes(filterValue.toLowerCase())
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

  loadBranchDetails(_id:number){
    
    this.router.navigate(['/edit-branch',_id], { queryParams: { branch: '_id' } }); 
  }

}


