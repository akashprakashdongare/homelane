import { Component, OnInit } from '@angular/core';
import { ConstantService } from 'src/app/services/constant.service';
import { HttpClient, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiHandlerService } from 'src/app/services/api-handler.service';
declare const $;
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  alertMessage;
  alertFlag;
  alertNavigate;
  loginDetails = JSON.parse(window.localStorage.getItem('loginData'));
  roleV: any = "";
  roleA: any = "";
  roleF:any = "";
  viewObject :any = {}
  constructor(public constantService: ConstantService,public router: Router, private apiHandler: ApiHandlerService, private http: HttpClient) { }

  ngOnInit() {
    var ref = this;
    if(ref.loginDetails.roleId == "V"){
      ref.roleV = ref.constantService.rolesManagement.vendorRole;
    }
    if(ref.loginDetails.roleId == "A"){
      ref.roleA = ref.constantService.rolesManagement.adminRole;
    }
    if(ref.loginDetails.roleId == "F"){
      ref.roleF = ref.constantService.rolesManagement.financeRole;
    }

    console.log(ref.loginDetails.roleId)
    console.log(ref.constantService.rolesManagement.vendorRole)
    console.log(ref.constantService.rolesManagement.adminRole)
    var temp = ref.loginDetails.roleId;
    ref.apiHandler.viewDashboard(temp, (response: any) => {
      console.log(JSON.stringify(response));
      if (response.sts.toLowerCase() === "success") {
        ref.viewObject = response.content;
        // ref.callAlert("success", "Successfully submitted", "not");
      } else {
        ref.callAlert("error", "Failed", "not");
      }
    }, (error: HttpErrorResponse) => {
      ref.callAlert("error", "Failed", "not"); console.log(error);
    });
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
        // ref.router.navigate(['main-layout/quotationList']);
        $("#alertMsg").modal("hide");
      }
      $("#alertMsg").modal("hide");
    } else {
      $("#alertMsg").modal("hide");
    }
  }

}
