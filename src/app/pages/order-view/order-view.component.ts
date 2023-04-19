import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiHandlerService } from 'src/app/services/api-handler.service';
import { Location } from '@angular/common';
import { Constant } from 'src/app/services/constant.utils';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';
import { UtilService } from 'src/app/services/util.service';

declare const $;
@Component({
  selector: 'app-order-view',
  templateUrl: './order-view.component.html',
  styleUrls: ['./order-view.component.css']
})
export class OrderViewComponent implements OnInit {
  alertMessage;
  alertFlag;
  alertNavigate;
  orderData = JSON.parse(window.localStorage.getItem("orderData"));
  datePickerConfig: Partial<BsDatepickerConfig>;
  viewObject: any = {};
  viewArr: any = [];
  rejectReason: any = "";
  constructor(public router: Router, private apiHandler: ApiHandlerService,
    private location: Location, public utilService: UtilService) { }


  ngOnInit() {
    var ref = this;
    ref.datePickerConfig = Object.assign({},
      { containerClass: 'theme-red', showWeekNumbers: false, dateInputFormat: 'DD-MM-YYYY' });
    var temp = ref.orderData.poNo;
    ref.apiHandler.viewOrder(temp, (response: any) => {
      console.log(JSON.stringify(response));
      if (response.sts.toLowerCase() === 'success') {
        ref.viewObject = response.content;
        ref.viewArr = response.content.itemList;
        console.log(ref.viewObject)
        console.log(ref.viewArr)
        ref.initializeDatatable();
      } else {
        ref.initializeDatatable();

      }
    }, (error: HttpErrorResponse) => {
      ref.initializeDatatable();
      console.log(error);
    });
  }

  approved() {
    var ref = this;
      var temp = {};
    temp["pkStatusId"] = ref.viewObject.pkStatusId;
    temp["vendorCode"] = ref.viewObject.vendorCode;
    temp["poNo"] = ref.viewObject.poNo;
    window.localStorage.setItem("poConfirmation", JSON.stringify(temp));
    ref.router.navigate(['main-layout/poConfirmation']);
    // var temp = {};
    // temp["pkStatusId"] = ref.viewObject.pkStatusId;
    // temp["vendorCode"] = ref.viewObject.vendorCode;
    // temp["poNo"] = ref.viewObject.poNo;
    // temp["status"] = 'A';
    // temp["rejectReason"] = "";
    // ref.apiHandler.orderAction(temp, (response: any) => {
    //   console.log(JSON.stringify(response));
    //   if (response.sts.toLowerCase() === 'success') {
    //     window.localStorage.setItem("poConfirmation", JSON.stringify(temp));
    //     ref.callAlert("success", "PO Accepted", "navigateToParticularPage");
    //   } else {
    //     ref.callAlert("error", "Failed", "not");
    //   }
    // }, (error: HttpErrorResponse) => {
    //   console.log(error);
    //   ref.callAlert("error", "Failed", "not");
    // });
  }

  rejectPopupOpen() {
    var ref = this;
    $('#rejectPopup').modal('show');
    ref.rejectReason = "";
  }

  rejectPopupClose() {
    var ref = this;
    $('#rejectPopup').modal('hide');
    ref.rejectReason = "";
  }


  rejectPopupSubmit() {
    var ref = this;
    var temp = {};
    temp["pkStatusId"] = ref.viewObject.pkStatusId;
    temp["vendorCode"] = ref.viewObject.vendorCode;
    temp["poNo"] = ref.viewObject.poNo;
    temp["status"] = 'R';
    temp["rejectReason"] = ref.rejectReason;
    ref.apiHandler.orderAction(temp, (response: any) => {
      console.log(JSON.stringify(response));
      if (response.sts.toLowerCase() === 'success') {
        $('#rejectPopup').modal('hide');
        ref.callAlert("success", "Rejected", "navigateToList");
      } else {
        ref.callAlert("error", "Failed", "not");
        $('#rejectPopup').modal('hide');

      }
    }, (error: HttpErrorResponse) => {
      console.log(error);
      ref.callAlert("error", "Failed", "not");
      $('#rejectPopup').modal('hide');

    });

  }

  back() {
    var ref = this;
    ref.location.back();
  }

  initializeDatatable() {
    $('#orderViewlist').dataTable().fnDestroy();
    setTimeout(() => {
      $('#orderViewlist').DataTable({
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
      if (ref.alertNavigate == 'navigateToParticularPage') {
        ref.router.navigate(['main-layout/poConfirmation']);
        $("#alertMsg").modal("hide");
      }
      $("#alertMsg").modal("hide");
    } else {
      $("#alertMsg").modal("hide");
    }
  }

}
