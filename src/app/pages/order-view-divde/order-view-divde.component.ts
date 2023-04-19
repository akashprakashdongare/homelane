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
  selector: 'app-order-view-divde',
  templateUrl: './order-view-divde.component.html',
  styleUrls: ['./order-view-divde.component.css']
})
export class OrderViewDivdeComponent implements OnInit {
  alertMessage;
  alertFlag;
  alertNavigate;
  // orderData = JSON.parse(window.localStorage.getItem("orderData"));
  poConfirmation = JSON.parse(window.localStorage.getItem("poConfirmation"));

  datePickerConfig: Partial<BsDatepickerConfig>;
  viewObject: any = {};
  viewArr: any = [];
  rejectReason: any = "";
  saveArrForPOCheck: any = [];
  constructor(public router: Router, private apiHandler: ApiHandlerService,
    private location: Location, public utilService: UtilService) { }

  ngOnInit() {
    var ref = this;
    ref.datePickerConfig = Object.assign({},
      { containerClass: 'theme-red', showWeekNumbers: false, dateInputFormat: 'DD-MM-YYYY' });
    var temp = ref.poConfirmation.poNo;
    ref.apiHandler.viewASNDetails(temp, (response: any) => {
      console.log(JSON.stringify(response));
      if (response.sts.toLowerCase() === 'success') {
        ref.viewObject = response.content;
        var viewArr = response.content.itemList;
        for (var i = 0; i < viewArr.length; i++) {
          viewArr[i]["unique"] = true;
          viewArr[i]['confirmQty'] = viewArr[i]['poQty']
          viewArr[i]['confirmDate'] = viewArr[i]['delDate'].split("-").reverse().join("-");
          //Date Code to check MAX_MIN Date
       
          var matchDate = viewArr[i]['delDate']
          var splitMaxDate = matchDate.split("-");
          var finalMaxDate = splitMaxDate[1] + "-" + splitMaxDate[2] + "-" + splitMaxDate[0];
          var checkDate: Date;
          checkDate = new Date(finalMaxDate);
          checkDate.setDate(checkDate.getDate());
          console.log(checkDate)
          var checkDates = checkDate
          viewArr[i]['minMaxDate'] = checkDates;
        }
        ref.viewArr = viewArr;
        console.log("viewArr")
        console.log(viewArr)
        ref.saveArrForPOCheck = response.content.itemList;
        const result = [];
        const map = new Map();
        for (const item of ref.saveArrForPOCheck) {
          if (!map.has(item.materialCode)) {
            map.set(item.materialCode, true);    // set any value to Map
            result.push(item);
          }
        }
        ref.saveArrForPOCheck = JSON.stringify(result);

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

  add(item, index) {
    var ref = this;
    //Date Code to check MAX_MIN Date
    var matchDate = item.delDate
    var splitMaxDate = matchDate.split("-");
    var finalMaxDate = splitMaxDate[1] + "-" + splitMaxDate[2] + "-" + splitMaxDate[0];
    var checkDate: Date;
    checkDate = new Date(finalMaxDate);
    checkDate.setDate(checkDate.getDate());
    console.log(checkDate)
    var checkDates = checkDate
    //
    var obj: any = {}
    obj = {
      'confirmDate': "",
      'confirmQty': 0,
      'delDate': item.delDate,
      'itemNo': item.itemNo,
      'materialCode': item.materialCode,
      'materialName': item.materialName,
      'pkAdvNotfId': item.pkAdvNotfId,
      'plant': item.plant,
      'poQty': item.poQty,
      'storageLocation': item.storageLocation,
      'uom': item.uom,
      'unique': false,
      'minMaxDate': checkDates
    };
    console.log(ref.viewArr)
    ref.viewArr.splice(index + 1, 0, obj);
  }

  delete(item, index) {
    var ref = this;
    if (ref.viewArr.length > 1) {
      ref.viewArr.splice(index, 1);
    }
  }

  checkConfirmQyt(item) {
    var ref = this;
    item.poQty
    var countQty = 0;
    for (var i = 0; i < ref.viewArr.length; i++) {
      if (item.poQty == ref.viewArr[i].poQty) {
        countQty = (ref.viewArr[i].confirmQty* 1) + (countQty*1);
      }
    }
    if (countQty != (item.poQty*1)) {
      ref.callAlert("error", "Sum of confirm quantity must be equal to po quantity for a particular material", "not");
    }
  }

  checkConfirmQytNegativeNo(item) {
    var ref = this;
    // negative no.
    item.confirmQty = item.confirmQty + "";
    if (item.confirmQty.search("-") > -1) {
      ref.callAlert("error", " Confirm qty cannot be negative number", "not");
      item.confirmQty = 0;
      return false
    }else{
      ref.checkConfirmQyt(item)
    }
  }

  submit() {
    var ref = this;
    var checkPO = JSON.parse(ref.saveArrForPOCheck);
    //Confirm quantity
    var tempfilterArrCheckconfirmQty = ref.viewArr.filter((item) => {
      return item.confirmQty == "" || item.confirmQty == "0" || item.confirmQty == 0 || item.confirmQty == null || item.confirmQty == undefined || item.confirmQty == 'null' || item.confirmQty == 'undefined';
    });

    if (tempfilterArrCheckconfirmQty.length > 0) {
      ref.callAlert("error", "Please fill confirm quantity", "not");
      return false;
    }
    //Confirm Date

    var tempfilterArrConfirmDate = ref.viewArr.filter((item) => {
      return item.confirmDate == "" || item.confirmDate == null || item.confirmDate == undefined || item.confirmDate == 'null' || item.confirmDate == 'undefined';
    });

    if (tempfilterArrConfirmDate.length > 0) {
      ref.callAlert("error", "Please fill confirm date", "not");
      return false;
    }
    console.log(tempfilterArrConfirmDate)
    console.log(tempfilterArrCheckconfirmQty)
    console.log(ref.viewArr)
    console.log(checkPO)
    var saveArrForPOCheck = checkPO;
    var viewArr = ref.viewArr;
    var checkPOandSunQTY: any = [];
    for (var i = 0; i < saveArrForPOCheck.length; i++) {
      var counter = 0;
      var counter_i = -1;
      for (var j = 0; j < viewArr.length; j++) {
        if (saveArrForPOCheck[i].materialCode == viewArr[j].materialCode) {
          counter = (viewArr[j].confirmQty * 1) + (counter * 1);
          counter_i = i
        }
      }
      if (counter_i == i) {
        checkPOandSunQTY.push({
          "PO": saveArrForPOCheck[i].poQty,
          "confirmQTY": counter,
          "materialCode": saveArrForPOCheck[i].materialCode
        })
      }


    }
    console.log("checkPOandSunQTY");
    console.log(checkPOandSunQTY);
    for (var p = 0; p < checkPOandSunQTY.length; p++) {
      if (checkPOandSunQTY[p].PO != checkPOandSunQTY[p].confirmQTY) {
        ref.callAlert("error", "Sum of confirm quantity must be equal to po quantity for a particular material", "not");
        return false;
      }
    }
    // var countQty = 0;
    // for (var i = 0; i < ref.viewArr.length; i++) {
    //   if (checkPO.poQty == ref.viewArr[i].poQty) {
    //     countQty = ref.viewArr[i].confirmQty + countQty;
    //   }
    // }
    // if (countQty != checkPO.poQty) {
    //   ref.callAlert("error", "Sum of Confirm Quantity must be equal to PO Quantity for particular matrial", "not");
    // }
  }

  back() {
    var ref = this;
    ref.location.back();
  }

  initializeDatatable() {
    $('#orderViewDifferent').dataTable().fnDestroy();
    setTimeout(() => {
      $('#orderViewDifferent').DataTable({
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
        // ref.router.navigate(['main-layout/orderList']);
        $("#alertMsg").modal("hide");
      }
      if (ref.alertNavigate == 'navigateToParticularPage') {
        // ref.router.navigate(['main-layout/poConfirmation']);
        $("#alertMsg").modal("hide");
      }
      $("#alertMsg").modal("hide");
    } else {
      $("#alertMsg").modal("hide");
    }
  }

}
