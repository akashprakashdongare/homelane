import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { ApiHandlerService } from 'src/app/services/api-handler.service';
import { Constant } from 'src/app/services/constant.utils';
import { UtilService } from 'src/app/services/util.service';


declare const $;

@Component({
  selector: 'app-dispatch-view',
  templateUrl: './dispatch-view.component.html',
  styleUrls: ['./dispatch-view.component.css']
})
export class DispatchViewComponent implements OnInit {
  dispatchData = JSON.parse(window.localStorage.getItem("dispatchData"));
  dispatchView: any = [];

  constructor(public router: Router, private apiHandler: ApiHandlerService,
    private location: Location,public utilService: UtilService) { }

  ngOnInit() {
    var ref = this;
    var temp = [ref.dispatchData.pkDispatchId,ref.dispatchData.pono];
    
    ref.apiHandler.viewDispatch(temp, (response: any) => {
      console.log(JSON.stringify(response));
      if (response.sts.toLowerCase() === Constant.SUCCESS_STATUS) {
        ref.dispatchView = response.content;
        ref.initializeDatatable();
        console.log(ref.dispatchView)
      } else {
        ref.initializeDatatable();
      }
    }, (error: HttpErrorResponse) => {
      ref.initializeDatatable();
      console.log(error);
    });
  }

  back() {
    var ref = this;
    ref.location.back();
  }

  initializeDatatable() {
    $('#dispatchlistView').dataTable().fnDestroy();
    setTimeout(() => {
      $('#dispatchlistView').DataTable({
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
