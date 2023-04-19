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
  selector: 'app-quotation-list',
  templateUrl: './quotation-list.component.html',
  styleUrls: ['./quotation-list.component.css']
})
export class QuotationListComponent implements OnInit {
  alertMessage;
  alertFlag;
  alertNavigate;
  loginDetails = JSON.parse(window.localStorage.getItem('loginData'));
  roleV: any = "";
  quotationList: any = [];
  reason:any = "";
  constructor(public router: Router, private apiHandler: ApiHandlerService,
    private location: Location, public constantService: ConstantService) { }

  ngOnInit() {
    var ref = this;
    ref.roleV = ref.constantService.rolesManagement.vendorRole;
    ref.apiHandler.getQuotationList((response: any) => {
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

  showReason(item){
    var ref = this;
    console.log("call")
    ref.reason = item.rejReason
    ref.callAlert("error", ref.reason, "not");
    
  }

  view(item) {
    var ref = this;
    window.localStorage.setItem("quotationData", JSON.stringify(item));
    ref.router.navigate(['main-layout/quotationView']);
  }

  initializeDatatable() {
    $('#quotationlist').dataTable().fnDestroy();
    setTimeout(() => {
      $('#quotationlist').DataTable({
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

  callAlert(alertFlag, message, navigate) {
    var ref = this;
    ref.alertFlag = alertFlag;
    ref.alertMessage = message;
    ref.alertNavigate = navigate;
    $('#alertMsg').modal('show');
  }

  okAlert() {
    var ref = this;
    if (ref.alertFlag === "success") {
      if (ref.alertNavigate == 'navigateToList') {
        ref.router.navigate(['main-layout/orderList']);
        $("#alertMsg").modal("hide");
      }
      $("#alertMsg").modal("hide");
    } else {
      $("#alertMsg").modal("hide");
    }
  }

}
