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
  selector: 'app-quotation-history-view',
  templateUrl: './quotation-history-view.component.html',
  styleUrls: ['./quotation-history-view.component.css']
})
export class QuotationHistoryViewComponent implements OnInit {
  alertMessage;
  alertFlag;
  alertNavigate;
  quotationData = JSON.parse(window.localStorage.getItem("quotationHistoryData"));
  datePickerConfig: Partial<BsDatepickerConfig>;
  quotationView: any = {};
  quotMaterialList: any = [];
  constructor(public router: Router, private apiHandler: ApiHandlerService,
    private location: Location, public utilService: UtilService) { }

    ngOnInit() {
      var ref = this;
      ref.datePickerConfig = Object.assign({},
        { containerClass: 'theme-red', showWeekNumbers: false, dateInputFormat: 'DD-MM-YYYY' });
  
      var temp = ref.quotationData.quotationNo;
      ref.apiHandler.viewQuotationDetails(temp, (response: any) => {
        console.log(JSON.stringify(response));
        if (response.sts.toLowerCase() === Constant.SUCCESS_STATUS) {
          ref.quotationView = response.content;
          var quotMaterialList = response.content.quotMaterialList;
          for (var i = 0; i < quotMaterialList.length; i++) {
            quotMaterialList[i]['tempestDelDate'] = quotMaterialList[i].estDelDate.split("-").reverse().join("-");
            quotMaterialList[i]['tempprice'] = quotMaterialList[i].price == 0 ? "" : quotMaterialList[i].price;
          }
          ref.quotMaterialList = quotMaterialList;
          console.log(ref.quotationView)
        } else {
        }
      }, (error: HttpErrorResponse) => {
        console.log(error);
      });
    }

    back() {
      var ref = this;
      ref.location.back();
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
