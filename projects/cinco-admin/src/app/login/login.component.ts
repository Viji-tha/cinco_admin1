import { Component ,OnInit} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../api.client';
import { UtilsService } from '../utils/utilities-service';
import { ToastrService } from 'ngx-toastr';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {


  // ----------previous Data-----------
  loginForm: FormGroup ;
submitted:boolean=false;
data:any;
signUpForm: FormGroup ;
api_url = environment.API_URL;
message: string | undefined;
errors: string[] = [];
messages: string[] = [];
public is_form_view : boolean = false;
isAdmin: boolean = false; // Initialize it as false by default
   

  constructor(private formBuilder:FormBuilder, private router: Router,private api: ApiService, private util: UtilsService,  public toast: ToastrService){}
  ngOnInit():void{
    this.loginForm=this.formBuilder.group({
      password:['',[Validators.required]],
      // email:['', Validators.required, Validators.pattern(/^(\d{10}|\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3}))$/)],
      email:['',Validators.required],
      remember_me:[''],
      // isAdmin:['',[Validators.required]],

    });


    this.signUpForm=this.formBuilder.group({
      f_name:['',[Validators.required]],
      f_password:['',[Validators.required]],
      // f_email:['',Validators.required, Validators.pattern(/^(\d{10}|\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3}))$/)],
      f_email:['',Validators.required],
      f_username:['',[Validators.required]],
      f_add:['',[Validators.required]],
     

    });
  }
  get f() {
    return this.loginForm.controls;
  }
    saveNewMember() {
    this.submitted = true;
    this.errors = [];
    this.messages = [];
  
  
    if (!this.loginForm.valid) {
      return;
    }

       
    const url = this.isAdmin ? "admin/sign-in" : "employee/sign-in"; // Check isAdmin to determine the URL
    // const url="admin/sign-in";
    // const url="employee/sign-in";

    var body ={
      "email":  this.loginForm.get("email").value,
      "password": this.loginForm.get("password").value,
    }
    this.api.login(url,this.loginForm?.get("email")?.value, this.loginForm?.get("password")?.value).subscribe((res: any) => {
      
      localStorage.setItem('access_token', this.util.encrypt_Text(res.response?.jwToken) || "")
      // localStorage.setItem('access_token',this.util.encrypt_Text(res.response.token))
      localStorage.setItem('user_id', this.util.encrypt_Text(res.response.id) || "");
      localStorage.setItem('currentUser', this.util.encrypt_Text(JSON.stringify(res.response)) || "");           
      this.router.navigate(['/dash-board']);         
      this.submitted = false;     
    },
      (error: any) => {  
        console.log(error);      
        this.submitted = false;     
        this.toast.error(this.errors[0],"Validation Failed");       
      }      
    );   
  }
  
  toggleAdminLogin() {
    this.isAdmin = !this.isAdmin;
  }

// -------------signup form--------------

get f1() {
  return this.signUpForm.controls;
}
list(status){
  this.is_form_view = status;
 }
saveNewPerson() {
  this.submitted = true;
  this.errors = [];
  this.messages = [];


  if (!this.signUpForm.valid) {
    return;
  }   
  const url="admin/sign-up";
  // const url="employee/sign-up";
  
  var body ={
    "name":  this.signUpForm.get("f_name")?.value,
    "email":  this.signUpForm.get("f_email")?.value,
    "password": this.signUpForm.get("f_password")?.value,  
    "username":  this.signUpForm.get("f_username")?.value,
    "address": this.signUpForm.get("f_add")?.value,
    "is_active": true,
    "is_archive": true
  }
  this.api.register(url, body).subscribe((res: any) => {    
    localStorage.setItem('access_token', this.util.encrypt_Text(res.response?.jwToken) || "") ;
    // localStorage.setItem('access_token',this.util.encrypt_Text(res.response.token)) ; 
    localStorage.setItem('user_id', this.util.encrypt_Text(res.response.id) || "");
    localStorage.setItem('currentUser', this.util.encrypt_Text(JSON.stringify(res.response)) || "");    
    this.router.navigate(['/login']);       
    this.submitted = false;     
  },
    (error: any) => {
      console.log(error);      
      this.submitted = false;   
      this.toast.error(this.errors[0],"Validation Failed");
    }    
  );
}
}
