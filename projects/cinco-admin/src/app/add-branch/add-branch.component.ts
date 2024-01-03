import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { Router } from '@angular/router';
import { BranchService } from '../../branch.service';
import { ApiService } from '../api.client';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-add-branch',
  templateUrl: './add-branch.component.html',
  styleUrls: ['./add-branch.component.scss']
})
export class AddBranchComponent implements OnInit {

  addBranchForm: FormGroup; // Angular Reactive Forms FormGroup for the branch addition form
  submitted: boolean; // Flag to track if the form has been submitted
  errors: any[]; // Array to store validation errors
  messages: any[]; // Array to store messages

  constructor(
    private formBuilder: FormBuilder,
    private api: ApiService,
    private router: Router,
    public toast: ToastrService
  ) { }

  ngOnInit(): void {
    // Form initialization with default values and validators
    this.addBranchForm = this.formBuilder.group({
      branch_code: ['', [Validators.required]],
      name: ['', [Validators.required]],
      logo: ['', []],
      location: ['', Validators.required],
      total_rooms: ['', [Validators.pattern('[0-9]')]],
      rooms: this.formBuilder.array([this.createRoom()]),
      // available_rooms:['', [Validators.required]],
    });
  }

  // Method to create a FormGroup for a room
  createRoom(): FormGroup {
    return this.formBuilder.group({
      room_type: ['', Validators.required],
      sharing: ['', Validators.required],
      price: ['', Validators.required],
      available_rooms:['', [Validators.required]],
    });
  }

  // Getter for accessing the rooms FormArray
  get roomsFormArray(): FormArray {
    return this.addBranchForm.get('rooms') as FormArray;
  }

  // Method to add a new room FormGroup to the FormArray
  addRoom(): void {
    this.roomsFormArray.push(this.createRoom());
  }

  // Method to remove a room FormGroup from the FormArray based on the index
  removeRoom(index: number): void {
    this.roomsFormArray.removeAt(index);
  }

  // Getter for easy access to form controls in the template
  get f() {
    return this.addBranchForm.controls;
  }

  // Method to save a new branch
  saveNewMember() {
    this.submitted = true;
    this.errors = [];
    this.messages = [];

    // Check if the form is valid
    if (!this.addBranchForm.valid) {
      console.log("Validation errors:", this.addBranchForm.errors);
      // return;
    }

    // Construct an array of room information from the FormArray
    const roomsFormArray = this.addBranchForm.get('rooms') as FormArray;
    const roomInfoArray = roomsFormArray.value.map(roomFormGroup => ({
      type: roomFormGroup.room_type,
      sharing: roomFormGroup.sharing,
      price:(roomFormGroup.price),
      avilablerooms:(roomFormGroup.available_rooms)
     
    }));

    // Construct the final request body
    const body = {
      branch_code:this.addBranchForm.get("branch_code").value,
      name: this.addBranchForm.get("name").value,
      logo: this.addBranchForm.get("logo").value,
      location: this.addBranchForm.get("location").value,
      room_info: roomInfoArray,
      total_rooms: this.addBranchForm.get("total_rooms").value,
      // available_rooms:this.addBranchForm.get("available_rooms").value,
      is_active: true,
  is_archive: false,
      created_by :"657d88f401badf66646f42d9", // Replace with the actual user role ID
  updated_by: "657d88f401badf66646f42d9" 
    };

    // Call the API to add the branch
    const url = "branch/add-hotel";
    this.api.addBranch(url, body).subscribe(
      (res: any) => {
        this.submitted = false;
        // Handle success
      },
      (error: any) => {
        console.log(error);
        this.submitted = false;
        this.toast.error("Validation Failed");
      }
    );
  }
}
