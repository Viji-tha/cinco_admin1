import { Component, OnInit } from '@angular/core';


interface TableRow {
  sno: any;
  Image:string;
name:String;
 Actions:string;
 

  
}



@Component({
  selector: 'app-list-testimonial',
  templateUrl: './list-testimonial.component.html',
  styleUrls: ['./list-testimonial.component.scss']
})
export class ListTestimonialComponent implements OnInit{

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  tableData: TableRow[]=[
    {"sno":"1","name":"Reena","Image":"assets/img/profiles/avatar-05.jpg","Actions":""},
    {"sno":"2","name":"Teena","Image":"assets/img/profiles/avatar-07.jpg","Actions":""},
    {"sno":"3","name":"Albert","Image":"assets/img/profiles/avatar-09.jpg","Actions":""},
    {"sno":"4","name":"Joel","Image":"assets/img/profiles/avatar-15.jpg","Actions":""},
    {"sno":"5","name":"Reena","Image":"assets/img/profiles/avatar-11.jpg","Actions":""},
    {"sno":"6","name":"Meena","Image":"assets/img/profiles/avatar-06.jpg","Actions":""},
 
  ]

  filteredData: TableRow[] = [...this.tableData];
  currentPage = 1;
  itemsPerPage =5;
  sortKey: keyof TableRow | null = null;
  sortDirection: string = 'asc';

  filterTable(filterValue: string) {
    // Perform filtering based on the filterValue
    this.filteredData = this.tableData.filter((row) => {
      return (
        row.sno.toLowerCase().includes(filterValue.toLowerCase()) ||

        row.name.toLowerCase().includes(filterValue.toLowerCase())
       
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
