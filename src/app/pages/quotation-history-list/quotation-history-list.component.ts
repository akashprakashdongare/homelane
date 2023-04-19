import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiHandlerService } from 'src/app/services/api-handler.service';
import { Location } from '@angular/common';
import { Constant } from 'src/app/services/constant.utils';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { ConstantService } from 'src/app/services/constant.service';

declare var $: any;
@Component({
  selector: 'app-quotation-history-list',
  templateUrl: './quotation-history-list.component.html',
  styleUrls: ['./quotation-history-list.component.css']
})
export class QuotationHistoryListComponent implements OnInit {
  loginDetails = JSON.parse(window.localStorage.getItem('loginData'));
  quotationList: any = [];
  roleV: any = "";

  constructor(public router: Router, private apiHandler: ApiHandlerService,
    private location: Location, public constantService: ConstantService) { }

  ngOnInit() {
    var ref = this;
    ref.roleV = ref.constantService.rolesManagement.vendorRole;
    ref.apiHandler.getQuotationHistory((response: any) => {
      console.log(JSON.stringify(response));
      if (response.sts.toLowerCase() === Constant.SUCCESS_STATUS) {
        ref.quotationList = response.content;
        ref.initializeDatatable();
        console.log(ref.quotationList)
      } else {
        ref.initializeDatatable();
      }
    }, (error: HttpErrorResponse) => {
      console.log(error);
      ref.initializeDatatable();
    });
  }

  view(item) {
    var ref = this;
    window.localStorage.setItem("quotationHistoryData", JSON.stringify(item));
    ref.router.navigate(['main-layout/quotationHistoryView']);
  }

  initializeDatatable() {
    $('#quotationHistorylist').dataTable().fnDestroy();
    setTimeout(() => {
      $('#quotationHistorylist').DataTable({
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
