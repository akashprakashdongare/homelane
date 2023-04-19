import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiHandlerService } from 'src/app/services/api-handler.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  loginDetails=JSON.parse(window.localStorage.getItem('loginData'));
  constructor(public router:Router, private apiHandler: ApiHandlerService, private http: HttpClient) {

   }


  ngOnInit() {
  }

  logout(){
    const ref = this;
    window.localStorage.clear();
    setTimeout(()=>{
      ref.router.navigate([""]);
    },300);
 
  }

  navigateTo(){
   var ref = this;
   ref.router.navigate(['main-layout/dashboard']);
  }

}
