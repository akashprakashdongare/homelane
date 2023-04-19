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
  selector: 'app-quotation-view',
  templateUrl: './quotation-view.component.html',
  styleUrls: ['./quotation-view.component.css']
})
export class QuotationViewComponent implements OnInit {
  alertMessage;
  alertFlag;
  alertNavigate;
  quotationData = JSON.parse(window.localStorage.getItem("quotationData"));
  datePickerConfig: Partial<BsDatepickerConfig>;
  quotationView: any = {};
  quotMaterialList: any = [];
  maxDate: Date;
  rejectReason: any
  constructor(public router: Router, private apiHandler: ApiHandlerService,
    private location: Location, public utilService: UtilService) { }

  ngOnInit() {
    var ref = this;

    $(function () {
      $('[data-toggle="popover"]').popover()
    })

    ref.datePickerConfig = Object.assign({},
      { containerClass: 'theme-red', showWeekNumbers: false, dateInputFormat: 'DD-MM-YYYY' });

    var temp = ref.quotationData.quotationNo;
    ref.apiHandler.viewQuotationDetails(temp, (response: any) => {
      console.log(JSON.stringify(response));
      if (response.sts.toLowerCase() === Constant.SUCCESS_STATUS) {
        ref.quotationView = response.content;
        ref.rejectReason = ref.quotationView.rejReason;
        console.log("ok")
        console.log(ref.rejectReason)
        var quotMaterialList = response.content.quotMaterialList;
        for (var i = 0; i < quotMaterialList.length; i++) {
          if (quotMaterialList[i].estDelDate == "") {
            quotMaterialList[i]['tempestDelDate'] = ""
          } else {
            quotMaterialList[i]['tempestDelDate'] = quotMaterialList[i].estDelDate.split("-").reverse().join("-");
          }
          quotMaterialList[i]['tempprice'] = quotMaterialList[i].price == 0 ? "" : quotMaterialList[i].price;
          quotMaterialList[i]['tempfreight'] = quotMaterialList[i].freight == 0 ? "" : quotMaterialList[i].freight;

          quotMaterialList[i]['tempdeliveryDate'] = quotMaterialList[i].deliveryDate.split("-").reverse().join("-");
        // Date Code
          var matchDate = quotMaterialList[i]['tempdeliveryDate']
          var splitMaxDate = matchDate.split("-");
          var finalMaxDate = splitMaxDate[1] + "-" + splitMaxDate[0] + "-" + splitMaxDate[2];
          var checkDate: Date;
          checkDate = new Date(finalMaxDate);
          checkDate.setDate(checkDate.getDate());
          console.log(checkDate)
          var checkDates = checkDate
          quotMaterialList[i]['minMaxDate'] = checkDates;
        }
        // ref.quotationView.closeDate
        // var matchDate = ref.quotationView.closeDate
        // var splitMaxDate = matchDate.split("-");
        // var finalMaxDate = splitMaxDate[1] + "-" + splitMaxDate[0] + "-" + splitMaxDate[2];
        // ref.maxDate = new Date(finalMaxDate);
        // console.log(ref.maxDate)
        // ref.maxDate.setDate(ref.maxDate.getDate());
        // console.log(ref.maxDate)

        ref.quotMaterialList = quotMaterialList;
        console.log("check")
        console.log(ref.quotMaterialList)
        console.log(ref.quotationView)
        ref.initializeDatatable();
      } else {
        ref.initializeDatatable();
      }
    }, (error: HttpErrorResponse) => {
      ref.initializeDatatable();
      console.log(error);
    });
  }

  priceChange(item) {
    var ref = this;
    // negative no.
    item.tempprice = item.tempprice + "";
    if (item.tempprice.search("-") > -1) {
      ref.callAlert("error", " Price cannot be negative number", "not");
      item.tempprice = 0;
      return false
    }
  }

  freightChange(item) {
    var ref = this;
    // negative no.
    item.tempfreight = item.tempfreight + "";
    if (item.tempfreight.search("-") > -1) {
      ref.callAlert("error", " Freight cannot be negative number", "not");
      item.tempfreight = 0;
      return false
    }
  }



  submitResult() {
    var ref = this;
    console.log(ref.quotMaterialList)
    var tempfilterPrice = ref.quotMaterialList.filter((item) => {
      return item.tempprice == 0 || item.tempprice == "" || item.tempprice == undefined || item.tempprice == null || item.tempprice == 'undefined' || item.tempprice == 'null';
    });

    if (tempfilterPrice.length > 0) {
      ref.callAlert("error", "Please enter price", "not");
      return false;
    }
    var tempfilterfreight = ref.quotMaterialList.filter((item) => {
      console.log(item.tempfreight)
      return item.tempfreight == 0 || item.tempfreight == "" || item.tempfreight == undefined || item.tempfreight == null || item.tempfreight == 'undefined' || item.tempfreight == 'null'
    });
    console.log(tempfilterfreight)

    if (tempfilterfreight.length > 0) {
      ref.callAlert("error", "Please enter freight", "not");
      return false;
    }
    var tempfiltertempestDelDate = ref.quotMaterialList.filter((item) => {
      return item.tempestDelDate == "" || item.tempestDelDate == undefined || item.tempestDelDate == null;
    });

    if (tempfiltertempestDelDate.length > 0) {
      ref.callAlert("error", "Please enter est del date", "not");
      return false;
    }

    var tempArr = [];
    for (var i = 0; i < ref.quotMaterialList.length; i++) {
      // ref.quotMaterialList[i]['tempestDelDate'] = ref.quotMaterialList[i].estDelDate
      // ref.quotMaterialList[i]['tempprice'] = ref.quotMaterialList[i].price == 0 ? "" : ref.quotMaterialList[i].price;
      var date1;
      var tempDate2 = "" + ref.quotMaterialList[i]['tempestDelDate'];
      var temptempDate2 = tempDate2.split("-");
      if (temptempDate2.length != 3) {
        date1 = ref.utilService.convertToSqlDate(ref.utilService.getCurrentDateFromObj(ref.quotMaterialList[i]['tempestDelDate']));
      } else {
        date1 = ref.utilService.convertToSqlDate(tempDate2);
      }
      tempArr.push({
        "estDelDate": date1,
        "fkQuotDetId": ref.quotMaterialList[i].pkQuotDetId * 1,
        "freight": ref.quotMaterialList[i].tempfreight,
        "isActive": "Y",
        "materialCode": ref.quotMaterialList[i].materialCode,
        "pkSubId": ref.quotMaterialList[i].pkSubId * 1,
        "price": ref.quotMaterialList[i].tempprice * 1,
        "quotationNo": ref.quotationView.quotationNo,
        "itemNo": ref.quotMaterialList[i].itemNo
      })
      console.log(ref.quotMaterialList);
      console.log(tempArr);
    }
    console.log(tempArr);
    var respObj: any = {};
    respObj['closeDate'] = ref.quotationView.closeDate;
    respObj['quotationNo'] = ref.quotationView.quotationNo;
    respObj['vendorCode'] = ref.quotationData.vendorCode;
    respObj['quotArray'] = tempArr;
    console.log(respObj)
    ref.apiHandler.saveQuotationDetails(respObj, (response: any) => {
      console.log(JSON.stringify(response));
      if (response.sts.toLowerCase() === "success") {
        ref.quotationView = response.content;
        ref.callAlert("success", "Successfully submitted", "navigateToList");
      } else {
        ref.callAlert("error", "Failed", "not");
      }
    }, (error: HttpErrorResponse) => {
      ref.callAlert("error", "Failed", "not"); console.log(error);
    });
  }

  back() {
    var ref = this;
    ref.location.back();
  }
  ngOnDestroy() {
    $("#reasonId").popover('hide');
  }


  initializeDatatable() {
    $('#quotationView').dataTable().fnDestroy();
    setTimeout(() => {
      $('#quotationView').DataTable({
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
        ref.router.navigate(['main-layout/quotationList']);
        $("#alertMsg").modal("hide");
      }
      $("#alertMsg").modal("hide");
    } else {
      $("#alertMsg").modal("hide");
    }
  }
}
