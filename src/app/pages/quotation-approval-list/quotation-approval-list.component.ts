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
  selector: 'app-quotation-approval-list',
  templateUrl: './quotation-approval-list.component.html',
  styleUrls: ['./quotation-approval-list.component.css']
})
export class QuotationApprovalListComponent implements OnInit {
  loginDetails = JSON.parse(window.localStorage.getItem('loginData'));
  roleV: any = "";
  quotationList: any = [];
  constructor(public router: Router, private apiHandler: ApiHandlerService,
    private location: Location, public constantService: ConstantService) { }

    ngOnInit() {
      var ref = this;
      ref.roleV = ref.constantService.rolesManagement.vendorRole;
      ref.apiHandler.quotationApprovalslist((response: any) => {
        console.log(JSON.stringify(response));
        if (response.sts.toLowerCase() === 'success') {
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
      window.localStorage.setItem("quotationAppData", JSON.stringify(item));
      ref.router.navigate(['main-layout/quotationApprovalsView']);
    }
  
    initializeDatatable() {
      $('#quotationApprovalslist').dataTable().fnDestroy();
      setTimeout(() => {
        $('#quotationApprovalslist').DataTable({
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
