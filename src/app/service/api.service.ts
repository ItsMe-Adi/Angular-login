import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  temp:string="";
  constructor(private http: HttpClient,private cookie:CookieService) { }

    authorization(postdata:any)
    {
      let url='http://127.0.0.1:8000/api/login';
      
      return this.http.post(url,postdata);
    }

    getData()
    {
      let url='http://127.0.0.1:8000/api/data';
      this.temp=this.cookie.get('token');
      return this.http.get(url,{headers:new HttpHeaders({'Authorization':'Bearer '+this.temp})});
    }
}
