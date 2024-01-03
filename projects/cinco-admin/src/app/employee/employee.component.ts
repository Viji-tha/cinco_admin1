import { AfterViewInit, Component } from '@angular/core';


interface TableRow {
  
  emp_name: string;
  emp_email:string;
  contact_no:string;
  address:string;
  gender:string;
  dob:string;
  emp_id:string;
  branch_code:string;
  branch_name:string;
  roll_name:string;
  
  
   
}

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent {

  tableData: TableRow[] = [
    
    {
      emp_name: 'John Kenadey',
      emp_email:'john.kenadey@gmail.com',
      contact_no:'9184556478',
      address:'4663,Agriculture LockManager,Hyderabad,Telanaga,500038',
      gender:'Male',
      dob:'26-06-1992',
      emp_id:'B00102',
      branch_code:'B001',
      branch_name:'ESI',
      roll_name:'Employee',
      
    },
    {
      emp_name: 'John Kenadey',
      emp_email:'john.kenadey@gmail.com',
      contact_no:'9184556478',
      address:'4663,Agriculture LockManager,Hyderabad,Telanaga,500038',
      gender:'Male',
      dob:'26-06-1992',
      emp_id:'B00102',
      branch_code:'B001',
      branch_name:'ESI',
      roll_name:'Accountent'
  
    },
    {
      emp_name: 'John Kenadey',
      emp_email:'john.kenadey@gmail.com',
      contact_no:'9184556478',
      address:'4663,Agriculture LockManager,Hyderabad,Telanaga,500038',
      gender:'Male',
      dob:'26-06-1992',
      emp_id:'B00102',
      branch_code:'B001',
      branch_name:'ESI',
      roll_name:'Manager',
      
    },
    {
      emp_name: 'John Kenadey',
      emp_email:'john.kenadey@gmail.com',
      contact_no:'9184556478',
      address:'4663,Agriculture LockManager,Hyderabad,Telanaga,500038',
      gender:'Male',
      dob:'26-06-1992',
      emp_id:'B00102',
      branch_code:'B001',
      branch_name:'Begumpet',
      roll_name:'Employee',
      
    },
    {
      emp_name: 'John Kenadey',
      emp_email:'john.kenadey@gmail.com',
      contact_no:'9184556478',
      address:'4663,Agriculture LockManager,Hyderabad,Telanaga,500038',
      gender:'Male',
      dob:'26-06-1992',
      emp_id:'B00102',
      branch_code:'B001',
      branch_name:'Begumpet',
      roll_name:'Accountent',
      
    },
    {
      emp_name: 'John Kenadey',
      emp_email:'john.kenadey@gmail.com',
      contact_no:'9184556478',
      address:'4663,Agriculture LockManager,Hyderabad,Telanaga,500038',
      gender:'Male',
      dob:'26-06-1992',
      emp_id:'B00102',
      branch_code:'B001',
      branch_name:'Banjarahills',
      roll_name:'Employee',
      
    },
    {
      emp_name: 'John Kenadey',
      emp_email:'john.kenadey@gmail.com',
      contact_no:'9184556478',
      address:'4663,Agriculture LockManager,Hyderabad,Telanaga,500038',
      gender:'Male',
      dob:'26-06-1992',
      emp_id:'B00102',
      branch_code:'B001',
      branch_name:'Banjarahills',
      roll_name:'Accountent',
      
    },
    {
      emp_name: 'John Kenadey',
      emp_email:'john.kenadey@gmail.com',
      contact_no:'9184556478',
      address:'4663,Agriculture LockManager,Hyderabad,Telanaga,500038',
      gender:'Male',
      dob:'26-06-1992',
      emp_id:'B00102',
      branch_code:'B001',
      branch_name:'Banjarahills',
      roll_name:'Manager',
     
    },
    {
      emp_name: 'John Kenadey',
      emp_email:'john.kenadey@gmail.com',
      contact_no:'9184556478',
      address:'4663,Agriculture LockManager,Hyderabad,Telanaga,500038',
      gender:'Male',
      dob:'26-06-1992',
      emp_id:'B00102',
      branch_code:'B001',
      branch_name:'Begumpet',
      roll_name:'Manager',
      
    }
    ];
  
  filteredData: TableRow[] = [...this.tableData];
  currentPage = 1;
  itemsPerPage = 5;
  scrollX: true;
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
  
}
