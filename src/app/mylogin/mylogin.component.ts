import { CookieService } from 'ngx-cookie-service';
import { ApiService } from './../service/api.service';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';


interface dataype{
  email:string,
  password:string
}

@Component({
  selector: 'app-mylogin',
  templateUrl: './mylogin.component.html',
  styleUrls: ['./mylogin.component.css']
})
export class MyloginComponent implements OnInit {

  constructor(private api:ApiService,private router:Router,private cookie:CookieService) {}


  ngOnInit(): void {
    if(this.cookie.get('token')){
      this.router.navigate(['/dashboard']);
    }
  }

  cookievalue:any;

  userdata:dataype={
    "email":"",
    "password":""
  }


  onClickSubmit(){
    this.api.authorization(this.userdata).subscribe(data=>{
      // console.log(data);
      this.cookievalue=data;
      this.cookie.set('token',this.cookievalue.token);
      // console.log(this.cookie.get('token'));
      this.router.navigate(['/dashboard']);
    },
    err=>{
      console.log(err.status);
    }
    );
  }
}
