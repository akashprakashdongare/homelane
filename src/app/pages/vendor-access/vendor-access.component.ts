import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiHandlerService } from 'src/app/services/api-handler.service';
import { Constant } from 'src/app/services/constant.utils';
import { UtilService } from 'src/app/services/util.service';
declare var $: any;
@Component({
  selector: 'app-vendor-access',
  templateUrl: './vendor-access.component.html',
  styleUrls: ['./vendor-access.component.css']
})
export class VendorAccessComponent implements OnInit {
  alertMessage;
  alertFlag;
  alertNavigate;
  vendorDetails: any = [];
  lock_UnlockUserObj: any = {};
  alertResponse = { message: '', status: '', route: '' };

  constructor(public router: Router, private apiHandler: ApiHandlerService,
    public utilService: UtilService) { }

  ngOnInit() {
    const ref = this;
    ref.callApi();
  }

  callApi(){
    const ref = this;
    ref.apiHandler.getVendorAccess((response: any) => {
      console.log(JSON.stringify(response));
      if (response.sts.toLowerCase() === Constant.SUCCESS_STATUS) {
        ref.vendorDetails = response.content;
        console.log(ref.vendorDetails)
      } else {
        ref.vendorDetails = [];
      }
      ref.initializeDatatable();
    }, (error: HttpErrorResponse) => {
      console.log(error);
      ref.vendorDetails = [];
      ref.initializeDatatable();
    });
  }
  
  private initializeDatatable() {
    $('#vendorDetails').dataTable().fnDestroy();
    setTimeout(() => {
      $('#vendorDetails').DataTable({
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

  openLock_Unloc_popup(user) {
    var ref = this;
    $('#alertLock').modal('show');
    ref.lock_UnlockUserObj = user;
  }

  yes_Lock_UnLock() {
    var ref = this;
    ref.lock_UnlockUserObj
    console.log(ref.lock_UnlockUserObj);
    // ref.lock_UnlockUserObj.userType = ref.lock_UnlockUserObj.roleId
    ref.lock_UnlockUserObj.isLocked = ref.lock_UnlockUserObj.isLocked == "Y" ? "N" : "Y"
    console.log('requestJson=> ' + JSON.stringify(ref.lock_UnlockUserObj));
    $('#alertLock').modal('hide');
    ref.apiHandler.vendorAccessAction(ref.lock_UnlockUserObj, (response: any) => {
      console.log(JSON.stringify(response));
      $('#alertLock').modal('hide');
      if (response.sts === "success") {
        ref.callApi();
      } else {
        $('#alertLock').modal('hide');
        ref.callAlert("error", "Failed", "not");
      }
    }, (error: HttpErrorResponse) => {
      $('#alertLock').modal('hide');
      ref.callAlert("error", "Failed", "not");
      console.log(error);
    })
  }

  no_Lock_Unlock() {
    var ref = this;
    ref.lock_UnlockUserObj = {}
  }

  navigateTo(item){
    var ref = this;
    window.localStorage.setItem("vendorAccessDetails", JSON.stringify(item));
    ref.router.navigate(['main-layout/vendorView']);

  }

  callAlert(alertFlag, message, navigate) {
    var ref = this;
    ref.alertFlag = alertFlag;
    ref.alertMessage = message;
    ref.alertNavigate = navigate;
    $('#alertMsg1').modal('show');
  }

  okAlert1() {
    var ref = this;
    if (ref.alertFlag === "success") {
      if (ref.alertNavigate == 'navigateToList') {
        // ref.router.navigate(['']);
        ref.callApi();
        $("#alertMsg1").modal("hide");
      }
      $("#alertMsg1").modal("hide");
    } else {
      $("#alertMsg1").modal("hide");
    }
  }
}
