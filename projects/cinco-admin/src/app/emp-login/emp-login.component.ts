import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { environment } from '../../environments/environment';
import { ApiService } from '../api.client';
import { UtilsService } from '../utils/utilities-service';
import { Role } from '../models/user';




@Component({
  selector: 'app-emp-login',
  templateUrl: './emp-login.component.html',
  styleUrls: ['./emp-login.component.scss']
})
export class EmpLoginComponent implements OnInit{
  @Input() ngModel;
@Output() isAcceptedChange = new EventEmitter();

  public roles: Role[];
isAccepted: true;

  constructor() {}

  

  ngOnInit() {
    this.roles = [
      {
        id: 1,
        name: "users",
        checked: true,
      },
      {
        id: 2,
        name: "admin",
        checked: false,
      },
      {
        id: 3,
        name: "Support",
        checked: true,
      },
      {
        id: 4,
        name: "manager",
        checked: false,
      },
    ];
  }
  get selectedCheckboxList() {
    return this.roles.filter((item) => item.checked);
  }
}
