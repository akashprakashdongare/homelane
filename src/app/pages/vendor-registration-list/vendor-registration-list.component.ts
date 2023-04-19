import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { Router } from '@angular/router';
import { ApiHandlerService } from 'src/app/services/api-handler.service';
import { Location } from '@angular/common';
import { Constant } from 'src/app/services/constant.utils';
declare var $: any;
@Component({
  selector: 'app-vendor-registration-list',
  templateUrl: './vendor-registration-list.component.html',
  styleUrls: ['./vendor-registration-list.component.css']
})
export class VendorRegistrationListComponent implements OnInit {

  vendorList = [];
  constructor(public router: Router, private apiHandler: ApiHandlerService, private http: HttpClient,
    private location: Location, public dialog: MatDialog) { }

  ngOnInit() {
    const ref = this;
    ref.callApi();
  }
  callApi() {
    const ref = this;
    ref.apiHandler.getRegistrationList((response: any) => {
      console.log(JSON.stringify(response));
      if (response.sts === Constant.SUCCESS_STATUS) {
        ref.vendorList = response.content;
        ref.initializeDatatable()
      } else {
        ref.initializeDatatable()

      }

    }, (error: HttpErrorResponse) => {
      ref.initializeDatatable()

      console.log(error);
    })
  }

  private initializeDatatable() {
    $('#List').dataTable().fnDestroy();
    setTimeout(() => {
      $('#List').DataTable({
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
    }, 500);

  }

}
