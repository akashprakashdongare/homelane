import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material';
import { Router, ActivatedRoute } from '@angular/router';
import { ApiHandlerService } from 'src/app/services/api-handler.service';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Location } from '@angular/common';
import { Constant } from 'src/app/services/constant.utils';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';
import { UtilService } from 'src/app/services/util.service';
import { ConstantService } from 'src/app/services/constant.service';

declare var $: any;
@Component({
  selector: 'app-vendor-registration-view',
  templateUrl: './vendor-registration-view.component.html',
  styleUrls: ['./vendor-registration-view.component.css']
})
export class VendorRegistrationViewComponent implements OnInit {

  reqId;
  responseJson = {
    pkId: 1, regId: '', city: '', emailId: '', country: '', currency: '', region: '', title: '',
    gstnNo: '', isApproved: '', mobileNo: '', name1: '', name2: '', panNo: '', panRefNo: '', postCode: '',
    street: '', street2: '', street3: '', taxNo: '', telNo: '', status: ''
  }

  countryMst = [];
  currencyMst = [];
  regionMst = [];
  titleMst = [];
  fileList = [];
  formData: FormGroup;

  alertResponse = { message: '', status: '', route: '' };
  // panFile: any = null;
  // gstFile: any = null;
  tab = 1;


  //new
  alertMessage;
  alertFlag;
  alertNavigate;
  submitObjectTab1: any = {
    fkTittle: "",
    name1: "",
    name2: "",
    street: "",
    street2: "",
    postCode: "",
    city: "",
    fkCountry: "",
    fkRegion: "",
    mobileNo: "",
    emailId: "",
    fkCurrency: "",
    gstnNo: "",
    panNo: "",
    leadTime: "",
    incoterm: "",
    grouping: ""
  };
  submitObjectTab2: any = {
    ifscCode: "",
    accountNo: "",
    accountHolder: "",
    bankName: "",
    bankControlKey: "",
    tin: "",
    msme: "",
    msmeCertificateNo: ""
  }
  submitObjectTab3: any = {
    serchTerm: "",
    recconNo: "",
    paymentTerm: "",
    withHoldTaxType: "",
    withHoldTaxCode: "",
    exemptionCertNo: "",
    exemptionRate: "",
    exemptionStartDate: "",
    exemptionEndDate: "",
    schemeSupply: "",
    houseBank: ""
  }
  dropDownMaster: any = {
    countryMst: [],
    currencyMst: [],
    groupingMst: [],
    payTermMst: [],
    racconMst: [],
    regionMst: [],
    titleMst: [],
    incotermMst: [],
    withHolddingTaxType: [],
    houseBankMst:[]
  }
  validTab1 = true;
  validTab2 = true;
  validTab3 = true;
  panFile: any = null;
  gstFile: any = null;
  // cancelCheque: any = null
  VRFCopy: any = null;
  rejectReason: any = "";
  emailPattern = "^[_A-Za-z0-9-\\+]+(\\.[_A-Za-z0-9-]+)*@[A-Za-z0-9-]+(\\.[A-Za-z0-9]+)*(\\.[A-Za-z]{2,})$";
  mobilePattern = /^[0-9]{10}$/;
  panPattern = "[A-Z]{5}[0-9]{4}[A-Z]{1}";
  gstPattern = "^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}Z[0-9A-Z]{1}$"
  regexpMobilePattern = new RegExp(/^[0-9]{10}$/);
  regexpEmailPattern = new RegExp("^[_A-Za-z0-9-\\+]+(\\.[_A-Za-z0-9-]+)*@[A-Za-z0-9-]+(\\.[A-Za-z0-9]+)*(\\.[A-Za-z]{2,})$");
  regexpGstPattern = new RegExp("^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}Z[0-9A-Z]{1}$");
  regexpPanPattern = new RegExp("[A-Z]{5}[0-9]{4}[A-Z]{1}");
  minDateToday: any;
  minDate: Date;
  datePickerConfig: Partial<BsDatepickerConfig>;
  fileContent
  approveFlag: any = "update";
  @ViewChild('pdfViewer', { static: true }) pdfViewer: ElementRef;

  constructor(public router: Router, private apiHandler: ApiHandlerService, private http: HttpClient,
    private location: Location, public dialog: MatDialog, private activatedRoute: ActivatedRoute, public utilService: UtilService, public constantService: ConstantService) { }


  ngOnInit() {
    const ref = this;

    var minDateToday = ref.utilService.getCurrentDate();
    console.log(ref.minDateToday)
    var splitMinDate = minDateToday.split("-");
    var finalMinDate = splitMinDate[1] + "-" + splitMinDate[0] + "-" + splitMinDate[2];
    ref.minDateToday = new Date(finalMinDate);
    console.log(ref.minDateToday)
    ref.minDateToday.setDate(ref.minDateToday.getDate());
    console.log(ref.minDateToday);

    ref.datePickerConfig = Object.assign({},
      { containerClass: 'theme-red', showWeekNumbers: false, dateInputFormat: 'DD-MM-YYYY' });
    ref.createForm();
    ref.reqId = ref.activatedRoute.snapshot.params['id'];
    console.log('id===>' + ref.reqId);
    let obj = { code: '', type: 'ALL' }

    ref.apiHandler.getRegistrationMaster(obj, (response: any) => {
      console.log(JSON.stringify(response));
      const tempObject = response.content;
      if (response.sts === "success") {
        ref.dropDownMaster.countryMst = tempObject.countryMst;
        ref.dropDownMaster.currencyMst = tempObject.currencyMst;
        ref.dropDownMaster.groupingMst = tempObject.groupingMst;
        ref.dropDownMaster.payTermMst = tempObject.payTermMst;
        ref.dropDownMaster.racconMst = tempObject.racconMst;
        ref.dropDownMaster.regionMst = tempObject.regionMst;
        ref.dropDownMaster.titleMst = tempObject.titleMst;
        ref.dropDownMaster.payTermMst = tempObject.payTermMst;
        // ref.dropDownMaster.withHolddingTaxType = tempObject.withHolddingTaxType;
        ref.dropDownMaster.incotermMst = tempObject.incotermMst;
        ref.dropDownMaster.schemeSupplyMst = tempObject.schemeSupplyMst;
        ref.dropDownMaster.houseBankMst = tempObject.houseBankMst;
        // ref.regionMst = tempObject.regionMst;
        ref.titleMst = tempObject.titleMst;
        ref.callApi();

      }
    }, (error: HttpErrorResponse) => {
      console.log(error);
    });

  }

  callApi() {
    const ref = this;
    ref.apiHandler.viewRegistration(ref.reqId, (response: any) => {
      console.log("viewApi")
      console.log(JSON.stringify(response));
      if (response.sts === Constant.SUCCESS_STATUS) {
        const tempObject = response.content;
        ref.responseJson = tempObject;
        ref.submitObjectTab1 = tempObject;
        ref.submitObjectTab2 = tempObject;
        ref.submitObjectTab3 = tempObject;
        ref.submitObjectTab3.serchTerm = ref.submitObjectTab3.serchTerm == "null" ? "" : ref.submitObjectTab3.serchTerm;
        ref.submitObjectTab3.recconNo = ref.submitObjectTab3.recconNo == "null" ? "" : ref.submitObjectTab3.recconNo;
        ref.submitObjectTab3.paymentTerm = ref.submitObjectTab3.paymentTerm == "null" ? "" : ref.submitObjectTab3.paymentTerm;
        ref.submitObjectTab3.withHoldTaxType = ref.submitObjectTab3.withHoldTaxType == "null" ? "" : ref.submitObjectTab3.withHoldTaxType;
        ref.submitObjectTab3.withHoldTaxCode = ref.submitObjectTab3.withHoldTaxCode == "null" ? "" : ref.submitObjectTab3.withHoldTaxCode;
        ref.submitObjectTab3.exemptionCertNo = ref.submitObjectTab3.exemptionCertNo == "null" ? "" : ref.submitObjectTab3.exemptionCertNo;
        ref.submitObjectTab3.exemptionRate = ref.submitObjectTab3.exemptionRate == "null" ? "" : ref.submitObjectTab3.exemptionRate;
        ref.submitObjectTab3.exemptionStartDate = ref.submitObjectTab3.exemptionStartDate == "null" ? "" : ref.submitObjectTab3.exemptionStartDate.split("-").reverse().join("-");;
        ref.submitObjectTab3.exemptionEndDate = ref.submitObjectTab3.exemptionEndDate == "null" ? "" : ref.submitObjectTab3.exemptionEndDate.split("-").reverse().join("-");
        ref.submitObjectTab3.schemeSupply = ref.submitObjectTab3.schemeSupply == "null" ? "" : ref.submitObjectTab3.schemeSupply;
        ref.submitObjectTab3.houseBank = ref.submitObjectTab3.schemeSupply == "null" ? "" : ref.submitObjectTab3.schemeSupply;
        var splitMaxDate = ref.submitObjectTab3.exemptionStartDate.split("-");
        var finalMaxDate = splitMaxDate[2] + "-" + splitMaxDate[1] + "-" + splitMaxDate[0];
        ref.minDate = new Date(finalMaxDate);
        console.log(ref.minDate)
        ref.minDate.setDate(ref.minDate.getDate());
        console.log(ref.minDate)
        ref.fileList = tempObject.fileList;
        console.log("ref.submitObjectTab1.fkCountry")
        console.log(ref.submitObjectTab1.fkCountry)
        console.log(ref.submitObjectTab1.fkRegion)
        console.log(ref.submitObjectTab3.withHoldTaxType)
        
        var countryCode = ref.submitObjectTab1.fkCountry;
        ref.onInitChangeCountry(countryCode);
      }
      setTimeout(() => {
        ref.createForm();
      }, 500);
    }, (error: HttpErrorResponse) => {
      console.log(error);
    });

  }

  private createForm() {
    const ref = this;
    ref.formData = new FormGroup({
      fkTittle: new FormControl(ref.responseJson.title, [Validators.required]),
      name1: new FormControl(ref.responseJson.name1, [Validators.required]),
      name2: new FormControl(ref.responseJson.name2, [Validators.required]),//
      street: new FormControl(ref.responseJson.street, [Validators.required]),
      street2: new FormControl(ref.responseJson.street2, [Validators.required]),
      street3: new FormControl(ref.responseJson.street3, [Validators.required]),
      postCode: new FormControl(ref.responseJson.postCode, [Validators.required]),
      city: new FormControl(ref.responseJson.city, [Validators.required]),
      fkCountry: new FormControl(ref.responseJson.country, [Validators.required]),
      fkRegion: new FormControl(ref.responseJson.region),
      telephonNo: new FormControl(ref.responseJson.telNo, [Validators.required]),
      mobileNo: new FormControl(ref.responseJson.mobileNo, [Validators.required]),
      emailId: new FormControl(ref.responseJson.emailId, [Validators.required]),
      fkCurrency: new FormControl(ref.responseJson.currency, [Validators.required]),
      taxNo: new FormControl(ref.responseJson.taxNo, [Validators.required]),   //
      gstnNo: new FormControl(ref.responseJson.gstnNo, [Validators.required]),
      panNo: new FormControl(ref.responseJson.panNo, [Validators.required]),
      panRefNo: new FormControl(ref.responseJson.panRefNo, [Validators.required]),
      panFile: new FormControl(null),
      gstnFile: new FormControl(null),
    })
  }

  onInitChangeCountry(code: any) {
    const ref = this;
    ref.dropDownMaster.regionMst = [];
    ref.dropDownMaster.withHolddingTaxType = [];
    // ref.submitObjectTab1.fkRegion = "";
    let obj = { code: code, type: 'REGION' }
    console.log('code==>' + code);
    if (code != "") {
      ref.apiHandler.getRegistrationMaster(obj, (response: any) => {
        console.log(JSON.stringify(response));
        const tempObject = response.content;
        if (response.sts.toLowerCase() === "success") {
          ref.dropDownMaster.regionMst = tempObject.regionMst;
          ref.dropDownMaster.withHolddingTaxType = tempObject.withHolddingTaxType;

        } else {
          ref.dropDownMaster.regionMst = [];
        }
      }, (error: HttpErrorResponse) => {
        ref.dropDownMaster.regionMst = [];
        console.log(error);
      });
    }
  }

  onChangeCountry(code: any) {
    const ref = this;
    ref.dropDownMaster.regionMst = [];
    ref.dropDownMaster.withHolddingTaxType = [];
    ref.submitObjectTab1.fkRegion = "";
    ref.submitObjectTab3.withHoldTaxType = "";
    let obj = { code: code, type: 'REGION' }
    console.log('code==>' + code);
    if (code != "") {
      ref.apiHandler.getRegistrationMaster(obj, (response: any) => {
        console.log(JSON.stringify(response));
        const tempObject = response.content;
        if (response.sts.toLowerCase() === "success") {
          ref.dropDownMaster.regionMst = tempObject.regionMst;
          ref.dropDownMaster.withHolddingTaxType = tempObject.withHolddingTaxType;

        } else {
          ref.dropDownMaster.regionMst = [];
        }
      }, (error: HttpErrorResponse) => {
        ref.dropDownMaster.regionMst = [];
        console.log(error);
      });
    }
  }

  onSubmit() {
    const ref = this;
    let form = new FormData();
    const tempObject: any = ref.formData.value;
    console.log(tempObject);
    form.append('fkTittle', tempObject.fkTittle);
    form.append('name1', tempObject.name1);
    form.append('name2', tempObject.name2);
    form.append('street', tempObject.street);
    form.append('street2', tempObject.street2);
    form.append('street3', tempObject.street3);
    form.append('postCode', tempObject.postCode);
    form.append('city', tempObject.city);
    form.append('fkCountry', tempObject.fkCountry);
    form.append('fkRegion', tempObject.fkRegion);
    form.append('telephonNo', tempObject.telephonNo);
    form.append('mobileNo', tempObject.mobileNo);
    form.append('emailId', tempObject.emailId);
    form.append('fkCurrency', tempObject.fkCurrency);
    form.append('taxNo', tempObject.taxNo);
    form.append('gstnNo', tempObject.gstnNo);
    form.append('panNo', tempObject.panNo);
    form.append('panRefNo', tempObject.panRefNo);
    form.append('panFile', tempObject.panFile);
    form.append('gstnFile', tempObject.gstnFile);


    ref.apiHandler.saveRegDetails(form, (response: any) => {
      console.log(JSON.stringify(response));
      setTimeout(() => {
        $('#alertMsg').modal('show');
      }, 1000);
      if (response.sts === Constant.SUCCESS_STATUS) {
        ref.alertResponse.message = Constant.SUCCESS_MESSAGE;
        ref.alertResponse.route = '';
      } else {
        ref.alertResponse.message = response.msg;
      }
      ref.alertResponse.status = response.sts;

    }, (error: HttpErrorResponse) => {
      setTimeout(() => {
        $('#alertMsg').modal('show');
      }, 1000);
      ref.alertResponse.message = Constant.ERROR_MESSAGE;
      ref.alertResponse.status = Constant.ERROR_STATUS;
      ref.alertResponse.route = '';
      console.log(error);
    })
  }

  //Tab 1
  submitResultTab1(tab1Form) {
    var ref = this;
    ref.approveFlag = "update";
    console.log("calltab1")
    ref.validTab1 = tab1Form.valid;
    console.log(ref.validTab1)
    if (ref.validTab1) {
      ref.checkAllTabValidation();
    } else {

    }
  }

  //Tab 2
  submitResultTab2(tab2Form) {
    var ref = this;
    ref.approveFlag = "update";
    console.log("calltab2")

    ref.validTab2 = tab2Form.valid;
    console.log(tab2Form.valid)
    console.log(ref.validTab2)

    if (ref.validTab2) {
      ref.checkAllTabValidation();
    }

  }

  // Tab 3
  getExStartDate(event) {
    var ref = this;
    console.log(event);
    ref.submitObjectTab3.exemptionEndDate = "";
    ref.submitObjectTab3.exemptionStartDate;
    ref.minDate = event;
    //  ref.minDate = new Date(ref.submitObjectTab3.exemptionStartDate);
    // console.log(ref.minDate)
    // ref.minDate.setDate(ref.submitObjectTab3.exemptionStartDate.getDate());
    console.log(ref.minDate)
  }
  submitResultTab3(tab3Form) {
    var ref = this;
    ref.approveFlag = "update";
    console.log("calltab3")
    console.log(tab3Form)
    console.log(tab3Form.valid)
    ref.validTab3 = tab3Form.valid;
    console.log(ref.validTab3)
    console.log(ref.submitObjectTab3)
    if (ref.validTab3) {
      ref.checkAllTabValidation();
    }
  }
  //Tab 4
  submitResultTab4(tab4Form) {
    var ref = this;
    ref.approveFlag = "update";
    var vrfFlag = ""
    for (var i = 0; i < ref.fileList.length; i++) {
      if (ref.fileList[i].type == "VRF") {
        vrfFlag = "VRF";
      }
    }
    if (vrfFlag == "VRF") {
      ref.checkAllTabValidation();
      // return false;
    } else {
      if (ref.VRFCopy == null) {
        ref.callAlert("error", "Please Upload VRF Copy.", "not");
        return false;
      } else {
        ref.checkAllTabValidation();
      }
    }
  }





  // okAlert() {
  //   const ref = this;
  //   ref.callApi();
  // }

  onViewFile(file: any) {
    console.log()
    const ref = this;
    // window.open('http://localhost:8081/vendor-registration/viewFile?pkId=' + file.pkId,"blank");
    var url = ref.constantService.rootUrl + ref.constantService.webservices.viewFilepkId + file.pkId;
    window.open(url, '_blank');
    // var url = 'http://localhost:8081/vendor-registration/viewFile?pkId=' + file.pkId

    // window.open(url,'Image','width=largeImage.stylewidth,height=largeImage.style.height,resizable=1')

    // ref.apiHandler.viewFile2(file.pkId,'').subscribe(
    //   (response: any) => {
    //     const fileURL = URL.createObjectURL(response);
    //     // window.open(fileURL, '_blank');
    //     // let file = new Blob([response.content], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
    //     // var fileURL = URL.createObjectURL(file);
    //     window.open(fileURL);
    //   },
    //   (error: HttpErrorResponse) => {
    //     console.log(error.message);
    //   }
    // );
  }

  uploadVRFCopy(files: File[], fileType) {
    const ref = this;
    const file = files[0] as File;
    const fileSize = file.size / 1024;
    console.log(files)
    console.log(fileType)
    let fileList = files;
    var counter = 0;
    for (var j in fileList) {
      if (fileList[j].type == 'application/pdf' || fileList[j].type === 'image/jpeg' || fileList[j].type === 'image/jpg' || fileList[j].type === 'image/png') {
        counter = counter + 1;
      }
    }

    if (counter != fileList.length) {
      ref.callAlert("error", "Only jpeg,png & pdf files are allowed", "not");
      $("#customFile").val('');
      return false;
    }
    if (fileType === 'VRF') {
      ref.VRFCopy = null;
      // ref.formData.get('cancelCheck').patchValue(null);
      if (fileSize < 5050) {
        ref.VRFCopy = files[0];
        // ref.formData.get('cancelCheck').patchValue(ref.VRFCopy);
      }
      else {
        ref.callAlert("error", "The attachment size should be less than 2MB", "not");
      }
    }
  }

  approve() {
    var ref = this;
    ref.approveFlag = "approve";
    ref.checkAllTabValidation();
  }
  approveFinal() {
    var ref = this;
    var date1;
    var tempDate1 = "" + ref.submitObjectTab3.exemptionStartDate;
    var temptempDate1 = tempDate1.split("-");
    if (temptempDate1.length != 3) {
      date1 = ref.utilService.convertToSqlDate(ref.utilService.getCurrentDateFromObj(ref.submitObjectTab3.exemptionStartDate));
    } else {
      date1 = ref.utilService.convertToSqlDate(tempDate1);
    }
    //End Date
    var date2;
    var tempDate2 = "" + ref.submitObjectTab3.exemptionEndDate;
    var temptempDate2 = tempDate2.split("-");
    if (temptempDate2.length != 3) {
      date2 = ref.utilService.convertToSqlDate(ref.utilService.getCurrentDateFromObj(ref.submitObjectTab3.exemptionEndDate));
    } else {
      date2 = ref.utilService.convertToSqlDate(tempDate2);
    }

    let form = new FormData();
    const tempObject: any = ref.formData.value;
    console.log(tempObject);
    console.log(ref.submitObjectTab1);
    console.log(ref.submitObjectTab2);
    //Tab 1
    form.append('fkTittle', ref.submitObjectTab1.fkTittle);
    form.append('name1', ref.submitObjectTab1.name1);
    form.append('name2', ref.submitObjectTab1.name2);
    form.append('street', ref.submitObjectTab1.street);
    form.append('street2', ref.submitObjectTab1.street2);
    // form.append('street3', tempObject.street3);
    form.append('postCode', ref.submitObjectTab1.postCode);
    form.append('city', ref.submitObjectTab1.city);
    form.append('fkCountry', ref.submitObjectTab1.fkCountry);
    form.append('fkRegion', ref.submitObjectTab1.fkRegion);
    // form.append('telephonNo', tempObject.telephonNo);
    form.append('mobileNo', ref.submitObjectTab1.mobileNo);
    form.append('emailId', ref.submitObjectTab1.emailId);
    form.append('fkCurrency', ref.submitObjectTab1.fkCurrency);
    // form.append('taxNo', tempObject.taxNo);
    form.append('gstnNo', ref.submitObjectTab1.gstnNo);
    form.append('panNo', ref.submitObjectTab1.panNo);
    form.append('grouping', ref.submitObjectTab1.grouping);
    form.append('incoterm', ref.submitObjectTab1.incoterm);

    // form.append('panRefNo', ref.submitObjectTab1.panRefNo);
    // form.append('panFile', ref.panFile);
    // form.append('gstnFile', ref.gstFile);
    form.append('leadTime', ref.submitObjectTab1.leadTime);
    // form.append('blanceSheetFile', ref.cancelCheque);
    //Tab 2
    // form.append('groupingMst', ref.submitObjectTab2.groupingMst);
    form.append('ifscCode', ref.submitObjectTab2.ifscCode);
    form.append('accountNo', ref.submitObjectTab2.accountNo);
    form.append('accountHolder', ref.submitObjectTab2.accountHolder);
    // form.append('incoterm', ref.submitObjectTab2.incoterm);
    form.append('bankName', ref.submitObjectTab2.bankName);
    form.append('bankControlKey', ref.submitObjectTab2.bankControlKey);
    // form.append('msme', ref.submitObjectTab2.msme);
    form.append('msmeCertificateNo', ref.submitObjectTab2.msmeCertificateNo);
    form.append('tin', ref.submitObjectTab2.tin);
    form.append('fkInvtId', ref.submitObjectTab2.fkInvtId);
    form.append('regId', ref.submitObjectTab2.regId);
    form.append('pkId', ref.submitObjectTab2.pkId);
    //finance
    if (ref.VRFCopy != null) {
      form.append('vrfCopyFile', ref.VRFCopy);
    }
    form.append('serchTerm', ref.submitObjectTab3.serchTerm);
    form.append('recconNo', ref.submitObjectTab3.recconNo);
    form.append('paymentTerm', ref.submitObjectTab3.paymentTerm);
    form.append('withHoldTaxType', ref.submitObjectTab3.withHoldTaxType);
    form.append('withHoldTaxCode', ref.submitObjectTab3.withHoldTaxCode);
    form.append('exemptionCertNo', ref.submitObjectTab3.exemptionCertNo);
    form.append('exemptionRate', ref.submitObjectTab3.exemptionRate);
    form.append('exemptionStartDate', date1);
    form.append('exemptionEndDate', date2);
    form.append('schemeSupply', ref.submitObjectTab3.schemeSupply);
    form.append('houseBank', ref.submitObjectTab3.houseBank);

    var tempObj = {};
    tempObj['fkTittle'] = ref.submitObjectTab1.fkTittle;
    tempObj['name1'] = ref.submitObjectTab1.name1;
    tempObj['name2'] = ref.submitObjectTab1.name2;
    tempObj['street'] = ref.submitObjectTab1.street;
    tempObj['street2'] = ref.submitObjectTab1.street2;
    tempObj['postCode'] = ref.submitObjectTab1.postCode;
    tempObj['city'] = ref.submitObjectTab1.city;
    tempObj['fkCountry'] = ref.submitObjectTab1.fkCountry;
    tempObj['fkRegion'] = ref.submitObjectTab1.fkRegion;
    tempObj['mobileNo'] = ref.submitObjectTab1.mobileNo;
    tempObj['emailId'] = ref.submitObjectTab1.emailId;
    tempObj['fkCurrency'] = ref.submitObjectTab1.fkCurrency;
    tempObj['gstnNo'] = ref.submitObjectTab1.gstnNo;
    tempObj['panNo'] = ref.submitObjectTab1.panNo;
    tempObj['leadTime'] = ref.submitObjectTab1.leadTime * 1;
    tempObj['grouping'] = ref.submitObjectTab1.grouping;
    tempObj['incoterm'] = ref.submitObjectTab1.incoterm;

    tempObj['bankName'] = ref.submitObjectTab2.bankName;
    tempObj['accountNo'] = ref.submitObjectTab2.accountNo;
    tempObj['accountHolder'] = ref.submitObjectTab2.accountHolder;
    tempObj['ifscCode'] = ref.submitObjectTab2.ifscCode;
    tempObj['bankControlKey'] = ref.submitObjectTab2.bankControlKey;
    // tempObj['msme'] = ref.submitObjectTab2.msme;
    tempObj['msmeCertificateNo'] = ref.submitObjectTab2.msmeCertificateNo;
    tempObj['tin'] = ref.submitObjectTab2.tin;

    tempObj['fkInvtId'] = ref.submitObjectTab2.fkInvtId;
    tempObj['regId'] = ref.submitObjectTab2.regId;
    tempObj['pkId'] = ref.submitObjectTab2.pkId;

    // tempObj['vrfCopyFile'] = ref.VRFCopy;

    tempObj['serchTerm'] = ref.submitObjectTab3.serchTerm;
    tempObj['recconNo'] = ref.submitObjectTab3.recconNo;
    tempObj['paymentTerm'] = ref.submitObjectTab3.paymentTerm;
    tempObj['withHoldTaxType'] = ref.submitObjectTab3.withHoldTaxType;
    tempObj['withHoldTaxCode'] = ref.submitObjectTab3.withHoldTaxCode;
    tempObj['exemptionCertNo'] = ref.submitObjectTab3.exemptionCertNo;
    tempObj['exemptionRate'] = ref.submitObjectTab3.exemptionRate;
    tempObj['exemptionStartDate'] = date1;
    tempObj['exemptionEndDate'] = date2;
    tempObj['schemeSupply'] = ref.submitObjectTab3.schemeSupply;
    tempObj['houseBank'] = ref.submitObjectTab3.houseBank;




    var temp = {};
    temp['action'] = "A";
    temp['reason'] = "";
    temp['regId'] = ref.submitObjectTab2.regId;
    temp['approvalLevel'] = ref.submitObjectTab2.approvalLevel;
    temp['dto'] = tempObj;

    console.log(temp);

    ref.apiHandler.regAction(temp, (response: any) => {
      console.log(JSON.stringify(response));
      if (response.sts.toLowerCase() === 'success') {
        ref.callAlert("success", response.content, "navigateToList");
      } else {
        ref.callAlert("error", response.content, "not");

      }
    }, (error: HttpErrorResponse) => {
      console.log(error);
      ref.callAlert("error", "Failed", "not");

    });
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
    var date1;
    var tempDate1 = "" + ref.submitObjectTab3.exemptionStartDate;
    var temptempDate1 = tempDate1.split("-");
    if (temptempDate1.length != 3) {
      date1 = ref.utilService.convertToSqlDate(ref.utilService.getCurrentDateFromObj(ref.submitObjectTab3.exemptionStartDate));
    } else {
      date1 = ref.utilService.convertToSqlDate(tempDate1);
    }
    //End Date
    var date2;
    var tempDate2 = "" + ref.submitObjectTab3.exemptionEndDate;
    var temptempDate2 = tempDate2.split("-");
    if (temptempDate2.length != 3) {
      date2 = ref.utilService.convertToSqlDate(ref.utilService.getCurrentDateFromObj(ref.submitObjectTab3.exemptionEndDate));
    } else {
      date2 = ref.utilService.convertToSqlDate(tempDate2);
    }
    var tempObj = {};
    tempObj['fkTittle'] = ref.submitObjectTab1.fkTittle;
    tempObj['name1'] = ref.submitObjectTab1.name1;
    tempObj['name2'] = ref.submitObjectTab1.name2;
    tempObj['street'] = ref.submitObjectTab1.street;
    tempObj['street2'] = ref.submitObjectTab1.street2;
    tempObj['postCode'] = ref.submitObjectTab1.postCode;
    tempObj['city'] = ref.submitObjectTab1.city;
    tempObj['fkCountry'] = ref.submitObjectTab1.fkCountry;
    tempObj['fkRegion'] = ref.submitObjectTab1.fkRegion;
    tempObj['mobileNo'] = ref.submitObjectTab1.mobileNo;
    tempObj['emailId'] = ref.submitObjectTab1.emailId;
    tempObj['fkCurrency'] = ref.submitObjectTab1.fkCurrency;
    tempObj['gstnNo'] = ref.submitObjectTab1.gstnNo;
    tempObj['panNo'] = ref.submitObjectTab1.panNo;
    tempObj['incoterm'] = ref.submitObjectTab1.incoterm;

    tempObj['bankName'] = ref.submitObjectTab2.bankName;
    tempObj['bankControlKey'] = ref.submitObjectTab2.bankControlKey;
    // tempObj['msme'] = ref.submitObjectTab2.msme;
    tempObj['msmeCertificateNo'] = ref.submitObjectTab2.msmeCertificateNo;
    tempObj['tin'] = ref.submitObjectTab2.tin;

    tempObj['fkInvtId'] = ref.submitObjectTab2.fkInvtId;
    tempObj['regId'] = ref.submitObjectTab2.regId;
    tempObj['pkId'] = ref.submitObjectTab2.pkId;

    // tempObj['vrfCopyFile'] = ref.VRFCopy;

    tempObj['serchTerm'] = ref.submitObjectTab3.serchTerm;
    tempObj['recconNo'] = ref.submitObjectTab3.recconNo;
    tempObj['paymentTerm'] = ref.submitObjectTab3.paymentTerm;
    tempObj['withHoldTaxType'] = ref.submitObjectTab3.withHoldTaxType;
    tempObj['withHoldTaxCode'] = ref.submitObjectTab3.withHoldTaxCode;
    tempObj['exemptionCertNo'] = ref.submitObjectTab3.exemptionCertNo;
    tempObj['exemptionRate'] = ref.submitObjectTab3.exemptionRate;
    tempObj['exemptionStartDate'] = date1;
    tempObj['exemptionEndDate'] = date2;
    tempObj['schemeSupply'] = ref.submitObjectTab3.schemeSupply;
    tempObj['houseBank'] = ref.submitObjectTab3.houseBank;


    var temp = {};
    temp['action'] = "R";
    temp['reason'] = ref.rejectReason;;
    temp['regId'] = ref.submitObjectTab2.regId;
    temp['approvalLevel'] = ref.submitObjectTab2.approvalLevel;
    temp['dto'] = tempObj;
    console.log(temp)
    ref.apiHandler.regAction(temp, (response: any) => {
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
  //General Details
  checkTab1() {
    var ref = this;
    var validFlag = true;
    if (ref.submitObjectTab1.fkTittle == "") {
      // ref.callAlert("error", " Please enter search term in finance details tab.", "not");
      validFlag = false
      return false;
    }
    if (ref.submitObjectTab1.name1 == "") {
      // ref.callAlert("error", " Please enter search term in finance details tab.", "not");
      validFlag = false
      return false;
    }
    if (ref.submitObjectTab1.name2 == "") {
      // ref.callAlert("error", " Please enter search term in finance details tab.", "not");
      validFlag = false
      return false;
    }
    if (ref.submitObjectTab1.street == "") {
      // ref.callAlert("error", " Please enter search term in finance details tab.", "not");
      validFlag = false
      return false;
    }
    if (ref.submitObjectTab1.street2 == "") {
      // ref.callAlert("error", " Please enter search term in finance details tab.", "not");
      validFlag = false
      return false;
    }
    if (ref.submitObjectTab1.postCode == "") {
      // ref.callAlert("error", " Please enter search term in finance details tab.", "not");
      validFlag = false
      return false;
    }
    if (ref.submitObjectTab1.city == "") {
      // ref.callAlert("error", " Please enter search term in finance details tab.", "not");
      validFlag = false
      return false;
    }
    if (ref.submitObjectTab1.fkCountry == "") {
      // ref.callAlert("error", " Please enter search term in finance details tab.", "not");
      validFlag = false
      return false;
    }
    if (ref.submitObjectTab1.fkRegion == "") {
      // ref.callAlert("error", " Please enter search term in finance details tab.", "not");
      validFlag = false
      return false;
    }
    if (ref.submitObjectTab1.mobileNo == "") {
      // ref.callAlert("error", " Please enter search term in finance details tab.", "not");
      validFlag = false
      return false;
    }
    if (ref.submitObjectTab1.mobileNo != "") {
      if (!ref.regexpMobilePattern.test(ref.submitObjectTab1.mobileNo)) {
        validFlag = false
        return false;
      }
    }
    if (ref.submitObjectTab1.emailId == "") {
      // ref.callAlert("error", " Please enter search term in finance details tab.", "not");
      validFlag = false
      return false;
    }
    if (ref.submitObjectTab1.emailId != "") {
      if (!ref.regexpEmailPattern.test(ref.submitObjectTab1.emailId)) {
        validFlag = false
        return false;
      }
    }
    if (ref.submitObjectTab1.fkCurrency == "") {
      // ref.callAlert("error", " Please enter search term in finance details tab.", "not");
      validFlag = false
      return false;
    }
    // if (ref.submitObjectTab1.gstnNo == "") {
    //     validFlag = false
    //     return false;
    // }
    if (ref.submitObjectTab1.gstnNo != "") {
      if (!ref.regexpGstPattern.test(ref.submitObjectTab1.gstnNo)) {
        validFlag = false
        return false;
      }
    }

    if (ref.submitObjectTab1.panNo == "") {
      validFlag = false
      return false;
    }

    if (ref.submitObjectTab1.panNo != "") {
      if (!ref.regexpPanPattern.test(ref.submitObjectTab1.panNo)) {
        validFlag = false
        return false;
      }
    }
    if (ref.submitObjectTab1.gstnNo != "") {
      var tempGST = ref.submitObjectTab1.gstnNo;
      var tempCheck = tempGST.substring(2, 12);
      console.log("tempCheck")
      console.log(tempCheck)
      if (ref.submitObjectTab1.panNo != tempCheck) {
        ref.callAlert("error", " Please enter valid GST and PAN number.", "not");
        validFlag = false
        return false;
      }
    }
    
    if (ref.submitObjectTab1.leadTime == "") {
      // ref.callAlert("error", " Please enter search term in finance details tab.", "not");
      validFlag = false
      return false;
    }
    if (ref.submitObjectTab1.incoterm == "") {
      // ref.callAlert("error", " Please enter search term in finance details tab.", "not");
      validFlag = false
      return false;
    }
    if (ref.submitObjectTab1.grouping == "") {
      // ref.callAlert("error", " Please enter search term in finance details tab.", "not");
      validFlag = false
      return false;
    }

    return validFlag
  }

  // Bank Details
  checkTab2() {
    var ref = this;
    var validFlag = true;
    if (ref.submitObjectTab2.bankName == "") {
      // ref.callAlert("error", " Please enter search term in finance details tab.", "not");
      validFlag = false
      return false;
    }
    if (ref.submitObjectTab2.accountNo == "") {
      // ref.callAlert("error", " Please enter search term in finance details tab.", "not");
      validFlag = false
      return false;
    }
    if (ref.submitObjectTab2.accountHolder == "") {
      // ref.callAlert("error", " Please enter search term in finance details tab.", "not");
      validFlag = false
      return false;
    }
    if (ref.submitObjectTab2.ifscCode == "") {
      // ref.callAlert("error", " Please enter search term in finance details tab.", "not");
      validFlag = false
      return false;
    }
    if (ref.submitObjectTab2.ifscCode == "") {
      // ref.callAlert("error", " Please enter search term in finance details tab.", "not");
      validFlag = false
      return false;
    }
    if (ref.submitObjectTab1.fkCountry != "IN") {
      if (ref.submitObjectTab2.bankControlKey == "") {
        // ref.callAlert("error", "Please enter bank control key", "not");
        validFlag = false
        return false;
      }

    }
    // if (ref.submitObjectTab2.msme != '') {
    //   if (ref.submitObjectTab2.msmeCertificateNo == '') {
    //     validFlag = false
    //     return false;
    //   }
    // }
    if (ref.submitObjectTab1.panNo != '') {
      if (ref.submitObjectTab2.tin == '') {
        // ref.callAlert("error", " Please enter tin.", "not");
        validFlag = false
        return false;
      }
    }
    return validFlag
  }
  // Finance Details
  checkTab3() {
    var ref = this;
    var validFlag = true;
    if (ref.submitObjectTab1.serchTerm == "") {
      // ref.callAlert("error", " Please enter search term in finance details tab.", "not");
      validFlag = false
      return false;
    }
    if (ref.submitObjectTab1.recconNo == "") {
      // ref.callAlert("error", " Please select reconciliation account no in finance details tab.", "not");
      validFlag = false
      return false;
    }
    if (ref.submitObjectTab1.paymentTerm == "") {
      // ref.callAlert("error", "  Please select payment term in finance details tab.", "not");
      validFlag = false
      return false;
    }
    if (ref.submitObjectTab1.withHoldTaxType == "") {
      // ref.callAlert("error", " Please enter with hold tax type in finance details tab.", "not");
      validFlag = false
      return false;
    }
    if (ref.submitObjectTab1.withHoldTaxCode == "") {
      // ref.callAlert("error", " Please enter with hold tax code in finance details tab.", "not");
      validFlag = false
      return false;
    }
    if (ref.submitObjectTab1.exemptionCertNo == "") {
      // ref.callAlert("error", " Please enter exemption certificate no in finance details tab.", "not");
      validFlag = false
      return false;
    }
    if (ref.submitObjectTab1.exemptionRate == "") {
      // ref.callAlert("error", " Please enter exemption rate in finance details tab.", "not");
      validFlag = false
      return false;
    }
    if (ref.submitObjectTab1.exemptionStartDate == "") {
      // ref.callAlert("error", " Please enter exemption start date in finance details tab.", "not");
      validFlag = false
      return false;
    }
    if (ref.submitObjectTab1.exemptionEndDate == "") {
      // ref.callAlert("error", " Please enter exemption end date in finance details tab.", "not");
      validFlag = false
      return false;
    }
    if (ref.submitObjectTab1.schemeSupply == "") {
      // ref.callAlert("error", "Please enter scheme supply in finance details tab.", "not");
      validFlag = false
      return false;
    }
    if (ref.submitObjectTab1.houseBank == "") {
      // ref.callAlert("error", "Please enter house bank in finance details tab.", "not");
      validFlag = false
      return false;
    }
    return validFlag
  }
  //Attachments
  checkTab4() {
    var ref = this;
    var validFlag = true;
    var vrfFlag = ""
    for (var i = 0; i < ref.fileList.length; i++) {
      if (ref.fileList[i].type == "VRF") {
        vrfFlag = "VRF";
      }
    }
    if (vrfFlag == "VRF") {
      validFlag = true;
      return true;
    } else {
      if (ref.VRFCopy == null) {
        ref.callAlert("error", "Please Upload Vendor Agreement.", "not");
        validFlag = false;
        return false;
      } else {
        validFlag = true;
      }

    }
    return validFlag;
  }

  checkAllTabValidation() {
    var ref = this;
    var checkTab11 = ref.checkTab1()
    if (!checkTab11) {
      ref.tab = 1;
      ref.validTab1 = false;
      return false;
    }
    var checkTab22 = ref.checkTab2();
    if (!checkTab22) {
      ref.tab = 2;
      ref.validTab2 = false;
      return false;
    }
    var checkTab33 = ref.checkTab3();
    if (!checkTab33) {
      ref.tab = 3;
      ref.validTab3 = false;
      return false;
    }
    var checkTab44 = ref.checkTab4();
    if (!checkTab44) {
      ref.tab = 4;
      // ref.validTab4 = false;
      return false;
    } else {
      ref.finalSubmit();

    }
  }

  finalSubmit() {
    var ref = this;
    // startdate
    var date1;
    var tempDate1 = "" + ref.submitObjectTab3.exemptionStartDate;
    var temptempDate1 = tempDate1.split("-");
    if (temptempDate1.length != 3) {
      date1 = ref.utilService.convertToSqlDate(ref.utilService.getCurrentDateFromObj(ref.submitObjectTab3.exemptionStartDate));
    } else {
      date1 = ref.utilService.convertToSqlDate(tempDate1);
    }
    //End Date
    var date2;
    var tempDate2 = "" + ref.submitObjectTab3.exemptionEndDate;
    var temptempDate2 = tempDate2.split("-");
    if (temptempDate2.length != 3) {
      date2 = ref.utilService.convertToSqlDate(ref.utilService.getCurrentDateFromObj(ref.submitObjectTab3.exemptionEndDate));
    } else {
      date2 = ref.utilService.convertToSqlDate(tempDate2);
    }

    let form = new FormData();
    const tempObject: any = ref.formData.value;
    console.log(tempObject);
    console.log(ref.submitObjectTab1);
    console.log(ref.submitObjectTab2);
    //Tab 1
    form.append('fkTittle', ref.submitObjectTab1.fkTittle);
    form.append('name1', ref.submitObjectTab1.name1);
    form.append('name2', ref.submitObjectTab1.name2);
    form.append('street', ref.submitObjectTab1.street);
    form.append('street2', ref.submitObjectTab1.street2);
    // form.append('street3', tempObject.street3);
    form.append('postCode', ref.submitObjectTab1.postCode);
    form.append('city', ref.submitObjectTab1.city);
    form.append('fkCountry', ref.submitObjectTab1.fkCountry);
    form.append('fkRegion', ref.submitObjectTab1.fkRegion);
    // form.append('telephonNo', tempObject.telephonNo);
    form.append('mobileNo', ref.submitObjectTab1.mobileNo);
    form.append('emailId', ref.submitObjectTab1.emailId);
    form.append('fkCurrency', ref.submitObjectTab1.fkCurrency);
    // form.append('taxNo', tempObject.taxNo);
    form.append('gstnNo', ref.submitObjectTab1.gstnNo);
    form.append('panNo', ref.submitObjectTab1.panNo);
    form.append('incoterm', ref.submitObjectTab1.incoterm);
    form.append('grouping', ref.submitObjectTab1.grouping);
    // form.append('panRefNo', ref.submitObjectTab1.panRefNo);
    // form.append('panFile', ref.panFile);
    // form.append('gstnFile', ref.gstFile);
    form.append('leadTime', ref.submitObjectTab1.leadTime);
    // form.append('blanceSheetFile', ref.cancelCheque);
    //Tab 2
    // form.append('groupingMst', ref.submitObjectTab2.groupingMst);
    form.append('ifscCode', ref.submitObjectTab2.ifscCode);
    form.append('accountNo', ref.submitObjectTab2.accountNo);
    form.append('accountHolder', ref.submitObjectTab2.accountHolder);
    // form.append('incoterm', ref.submitObjectTab2.incoterm);
    form.append('bankName', ref.submitObjectTab2.bankName);
    form.append('bankControlKey', ref.submitObjectTab2.bankControlKey);
    // form.append('msme', ref.submitObjectTab2.msme);
    form.append('msmeCertificateNo', ref.submitObjectTab2.msmeCertificateNo);
    form.append('tin', ref.submitObjectTab2.tin);
    form.append('fkInvtId', ref.submitObjectTab2.fkInvtId);
    form.append('regId', ref.submitObjectTab2.regId);
    form.append('pkId', ref.submitObjectTab2.pkId);
    //finance
    if (ref.VRFCopy != null) {
      form.append('vrfCopyFile', ref.VRFCopy);
    }
    form.append('serchTerm', ref.submitObjectTab3.serchTerm);
    form.append('recconNo', ref.submitObjectTab3.recconNo);
    form.append('paymentTerm', ref.submitObjectTab3.paymentTerm);
    form.append('withHoldTaxType', ref.submitObjectTab3.withHoldTaxType);
    form.append('withHoldTaxCode', ref.submitObjectTab3.withHoldTaxCode);
    form.append('exemptionCertNo', ref.submitObjectTab3.exemptionCertNo);
    form.append('exemptionRate', ref.submitObjectTab3.exemptionRate);
    form.append('exemptionStartDate', date1);
    form.append('exemptionEndDate', date2);
    form.append('schemeSupply', ref.submitObjectTab3.schemeSupply);
    form.append('houseBank', ref.submitObjectTab3.houseBank);

    console.log(form)
    ref.apiHandler.updateRegDetails(form, (response: any) => {
      console.log(JSON.stringify(response));
      // setTimeout(() => {
      //   $('#alertMsg').modal('show');
      // }, 1000);
      if (response.sts === "success") {
        if (ref.approveFlag == "approve") {
          ref.approveFinal();
        }
        if (ref.approveFlag == "update") {
          ref.callApi()
          ref.VRFCopy = null;
          ref.callAlert("success", "Successfully updated", "not");
        }

      } else {
        ref.callAlert("error", "Failed", "not");
      }
      // ref.alertResponse.status = response.sts;

    }, (error: HttpErrorResponse) => {
      // setTimeout(() => {
      //   $('#alertMsg').modal('show');
      // }, 1000);
      // ref.alertResponse.message = Constant.ERROR_MESSAGE;
      // ref.alertResponse.status = Constant.ERROR_STATUS;
      // ref.alertResponse.route = '';
      ref.callAlert("error", "Failed", "not");

      console.log(error);
    })
  }


  callAlert(alertFlag, message, navigate) {
    var ref = this;
    ref.alertFlag = alertFlag;
    ref.alertMessage = message;
    ref.alertNavigate = navigate;
    $('#alertMsgNew').modal('show');
  }

  okAlert() {
    var ref = this;
    if (ref.alertFlag === "success") {
      if (ref.alertNavigate == 'navigateToList') {
        // ref.callApi();
        ref.location.back();
        // ref.router.navigate(['vendorManagement']);
        $("#alertMsgNew").modal("hide");
      }
      $("#alertMsgNew").modal("hide");
    } else {
      $("#alertMsgNew").modal("hide");
    }
  }

}
