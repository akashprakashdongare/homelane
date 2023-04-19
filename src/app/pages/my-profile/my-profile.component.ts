import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiHandlerService } from 'src/app/services/api-handler.service';
import { Constant } from 'src/app/services/constant.utils';
import { UtilService } from 'src/app/services/util.service';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.css']
})
export class MyProfileComponent implements OnInit {
  loginData=JSON.parse(window.localStorage.getItem('loginData'));
  vendorDetails: any = {};

  constructor(public router: Router, private apiHandler: ApiHandlerService,
    public utilService: UtilService) { }

  ngOnInit() {
    var ref = this;
    
    ref.apiHandler.viewProfile((response: any) => {
      console.log(JSON.stringify(response));
      if (response.sts.toLowerCase() === Constant.SUCCESS_STATUS) {
        ref.vendorDetails = response.content;
        console.log(ref.vendorDetails)
      } else {
      }
    }, (error: HttpErrorResponse) => {
      console.log(error);
    });
  }

}
