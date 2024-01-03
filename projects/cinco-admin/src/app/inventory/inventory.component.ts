import { NgStyle } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, Input } from '@angular/core';

interface Branch {
  room_no: any;
  room_code: string;
  guest_name: string;
  email: string;
  roomtype:string;
  location:string;
  bookdate:Date;
 
  check_in_date:string;
  check_out_date:string;
  phone_no:string;
  status:string;
  
}




@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.scss']
})
export class InventoryComponent {

  Branches: Branch[] = [];
  filteredBranches: Branch[] = [];
  filterText: string = '';
  sortKey: string;
  sortDirection: string;
  filteredData: any;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.loadBranch();
  }

  loadBranch() {
    this.http.get<Branch[]>('assets/data/inventory_data.json').subscribe(
      (jsonData: Branch[]) => {
        this.Branches = jsonData;
        this.filterBranches();
      },
      (error: any) => {
        console.error('Error fetching data:', error);
      }
    );
  }



  sortTable(key: keyof Branch) {
      if (this.sortKey === key) {
  
        this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';
      } else {
        this.sortKey = key;
        this.sortDirection = 'asc';
      }
    }

    
  filterBranches() {
    if (this.filterText.trim() === '') {
      this.filteredBranches = this.Branches;
    } else {
      this.filteredBranches = this.Branches.map(branch => {
        return {
          ...branch,
          room_no: branch.room_no.filter(room =>
            room.room_code.toString().includes(this.filterText.trim()) ||
            (room.guest_name && room.guest_name.toLowerCase().includes(this.filterText.toLowerCase())) ||
            (room.phone_no && room.phone_no.includes(this.filterText.trim())) ||
            (room.status && room.status.toLowerCase().includes(this.filterText.toLowerCase()))
            
          )
        };
      }).filter(branch => branch.room_no.length > 0);
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



  // // // @Input() status:boolean;

  // [x: string]: any;

  // branch_name:any;
  // room_id:any;
  // // status:active;
  // guest_name:any;
  // phone_no:any;
  // check_in_date:any;
  // check_out_date:any;
 
  // constructor(private http: HttpClient) { }
  // Branch:any;
  // room_no:any;




  // ngOnInit() {
  //   this.loadBranch();
  // }
  // loadBranch() {
  //   this.http.get<any[]>('assets/data/inventory_data.json').subscribe(Branches => {
  //     this.Branches = Branches[0].room_no;
      
  //   });
  // }
  // loadbranch(index: number) {
  
  //    this.room_no = this.room[index].Id;
  //  }

  // // ---------sorting data---------

  // filteredData: Branch[] = [...this.Branches];
  // currentPage = 1;
  // itemsPerPage =5;
  // sortKey: keyof Branch | null = null;
  // sortDirection: string = 'asc';

  // filterBranch(filterValue: string) {
    
  //   this.filteredData = this.Branches.filter((room) => {
  //     return (
  //       room.guest_name.toLowerCase().includes(filterValue.toLowerCase()) ||
  //       room.phone_no.toLowerCase().includes(filterValue.toLowerCase())
       
  //     );
  //   });
  //   this.currentPage = 1; 
  // }

  // sortTable(key: keyof Branch) {
  //   if (this.sortKey === key) {

  //     this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';
  //   } else {
  //     this.sortKey = key;
  //     this.sortDirection = 'asc';
  //   }

  
  //   this.filteredData.sort((a, b) => {
  //     const valA = a[this.sortKey!];
  //     const valB = b[this.sortKey!];
  //     if (valA < valB) {
  //       return this.sortDirection === 'asc' ? -1 : 1;
  //     } else if (valA > valB) {
  //       return this.sortDirection === 'asc' ? 1 : -1;
  //     } else {
  //       return 0;
  //     }
  //   });
  // }


  // @Input() status: boolean; // Assuming this property is used in the template.

  // branch_name: any;
  // room_id: any;
  // // status: active; // If this is supposed to be used, correct the type name.
  // guest_name: any;
  // phone_no: any;
  // check_in_date: any;
  // check_out_date: any;

  // constructor(private http: HttpClient) { }

  // Branches: Branch[]; // Correct the property name to "Branches" (plural).

  // room_no: any;

  // ngOnInit() {
  //   this.loadBranch();
  // }

  // loadBranch() {
  //   this.http.get<Branch[]>('assets/data/inventory_data.json').subscribe((Branches) => {
  //     this.Branches = Branches; // Correct the assignment here.
  //   });
  // }

  // loadbranch(index: number) {
  //   this.room_no = this.Branches[index].room_code; // Correct the property name and assignment.
  // }

  // // ---------sorting data---------

  // filteredData: Branch[] = []; // Initialize filteredData as an empty array.
  // currentPage = 1;
  // itemsPerPage = 5;
  // sortKey: keyof Branch | null = null;
  // sortDirection: string = 'asc';

  // filterBranch(filterValue: string) {
  //   this.filteredData = this.Branches.filter((room) => {
  //     return (
  //       room.guest_name.toLowerCase().includes(filterValue.toLowerCase()) ||
  //       room.phone_no.toLowerCase().includes(filterValue.toLowerCase())
  //     );
  //   });
  //   this.currentPage = 1;
  // }

  // sortTable(key: keyof Branch) {
  //   if (this.sortKey === key) {
  //     this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';
  //   } else {
  //     this.sortKey = key;
  //     this.sortDirection = 'asc';
  //   }

  //   this.filteredData.sort((a, b) => {
  //     const valA = a[this.sortKey!];
  //     const valB = b[this.sortKey!];
  //     if (valA < valB) {
  //       return this.sortDirection === 'asc' ? -1 : 1;
  //     } else if (valA > valB) {
  //       return this.sortDirection === 'asc' ? 1 : -1;
  //     } else {
  //       return 0;
  //     }
  //   });
  // }






  

}







  function filterBranches() {
    throw new Error('Function not implemented.');
  }

