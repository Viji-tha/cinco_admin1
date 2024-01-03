import { Component ,OnInit} from '@angular/core';
import { FormGroup } from '@angular/forms';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  {
  title = 'cinco-admin';
  showHeader:boolean;
  constructor(private router:Router){
    router.events.subscribe((val)=>{
      if(val instanceof NavigationEnd){
        if(val.url=='/login')
        {
          this.showHeader=false;
        }
        else{
          this.showHeader=true;
        }
      }
     
    })
   }

  ngOnInit(){
   
}
   
  }

