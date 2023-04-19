import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiHandlerService } from 'src/app/services/api-handler.service';
import { Location } from '@angular/common';
import { Constant } from 'src/app/services/constant.utils';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

declare var $:any;
@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent implements OnInit {

  list: any = [];
  constructor(public router: Router, private apiHandler: ApiHandlerService,
    private location: Location) { }


  ngOnInit() {
    var ref = this;
    ref.apiHandler.getOrders((response: any) => {
      console.log(JSON.stringify(response));
      if (response.sts.toLowerCase() === Constant.SUCCESS_STATUS) {
        ref.list = response.content;
        ref.initializeDatatable();
        console.log(ref.list)
      } else {
        ref.initializeDatatable();
      }
    }, (error: HttpErrorResponse) => {
      console.log(error);
      ref.initializeDatatable();
    });
  }

  view(item){
    var ref = this;
    window.localStorage.setItem("orderData", JSON.stringify(item));
    ref.router.navigate(['main-layout/orderView']);
  }

  initializeDatatable() {
    $('#orderlist').dataTable().fnDestroy();
    setTimeout(() => {
      $('#orderlist').DataTable({
        "scrollY": "50vh",
        "scrollX": "100%",
        "scrollCollapse": true,
        "paging": false,
        "info": false,
        'aaSorting': [],
        "language": {
          "emptyTable": "No data available"
        }
      });
    }, 800);
  }


}
