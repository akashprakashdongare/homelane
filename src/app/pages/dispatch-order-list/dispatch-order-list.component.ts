import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiHandlerService } from 'src/app/services/api-handler.service';
import { Constant } from 'src/app/services/constant.utils';

declare var $: any;

@Component({
  selector: 'app-dispatch-order-list',
  templateUrl: './dispatch-order-list.component.html',
  styleUrls: ['./dispatch-order-list.component.css']
})

export class DispatchOrderListComponent implements OnInit {
  dispatchOrderList: any = [];

  constructor(public router: Router, private apiHandler: ApiHandlerService) { }

  ngOnInit() {
    var ref = this;
    ref.apiHandler.orderDispachList((response: any) =>{
      console.log(JSON.stringify(response));
      if (response.sts.toLowerCase() === Constant.SUCCESS_STATUS) {
        ref.dispatchOrderList = response.content;
        ref.initializeDatatable();
        console.log(ref.dispatchOrderList)
      } else {
        ref.initializeDatatable();
      }
    },(error: HttpErrorResponse) =>{
      console.log(error);
      ref.initializeDatatable();
    });
  }

  view(item){
    var ref = this;
    window.localStorage.setItem("dispatchData", JSON.stringify(item));
    ref.router.navigate(['main-layout/dispatchView']);
  }

  initializeDatatable() {
    $('#dispatchlist').dataTable().fnDestroy();
    setTimeout(() => {
      $('#dispatchlist').DataTable({
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