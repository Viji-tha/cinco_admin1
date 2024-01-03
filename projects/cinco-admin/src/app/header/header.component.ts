import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../service/autho.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  has_user_login : boolean = false;
  user_name: string = "";
  constructor(private authService: AuthService,private router:Router){}
  ngOnInit(): void {
    const accessToken = this.authService.getAccessToken();
    this.user_name = this.authService.getUserName();
    //console.log(accessToken);
    if (accessToken != null) {
  this.has_user_login = true;
    }else{
      this.has_user_login = false;
    }
  }
  getUserName(user_name) { 
    return user_name.split(' ').map(n => n[0]).join('');
  }
  do_logout(){
    localStorage.clear();
  //  window.location.reload();
  this.router.navigate(['/login']);
  }
}