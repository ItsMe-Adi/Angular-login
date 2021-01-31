import { CookieService } from 'ngx-cookie-service';
import { ApiService } from './../service/api.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  dbdata:any;
  isdataloaded:boolean=false;
  constructor(private api:ApiService,private cookie:CookieService,private router:Router) {  
  }

  ngOnInit(): void {

    this.api.getData().subscribe(data=>{
      this.dbdata=data;
      this.isdataloaded=true;
      // console.log(this.dbdata);
    },
    err=>{
      this.cookie.delete('token');
      this.router.navigate(['/login']);
    }
    );
  }

  freecookie(){
    this.cookie.delete('token');
  }
  
}
