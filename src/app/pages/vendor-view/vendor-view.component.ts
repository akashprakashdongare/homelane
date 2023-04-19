import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiHandlerService } from 'src/app/services/api-handler.service';
import { Location } from '@angular/common';


@Component({
  selector: 'app-vendor-view',
  templateUrl: './vendor-view.component.html',
  styleUrls: ['./vendor-view.component.css']
})
export class VendorViewComponent implements OnInit {
  testid : '';
  vendorDetails: any = {};
  vendorAccessDetails = JSON.parse(window.localStorage.getItem("vendorAccessDetails"));

  constructor(private route: ActivatedRoute,
    public router:Router, private apiHandler: ApiHandlerService, private http: HttpClient,private location: Location) { }

  ngOnInit() {
    const ref=this;
    ref.callApi();
  }

  callApi(){
    const ref = this;
    var temp = ref.vendorAccessDetails.userId;
    ref.apiHandler.viewVendor(temp, (response: any) => {
      console.log(JSON.stringify(response));
      if (response.sts === "success") {
        ref.vendorDetails = response.content
      } else {
      }
    }, (error: HttpErrorResponse) => {
      console.log(error);
    })
  }

  back(){
    var ref = this;
    ref.location.back();
  }

}
