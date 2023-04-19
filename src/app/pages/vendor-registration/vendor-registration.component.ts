import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiHandlerService } from 'src/app/services/api-handler.service';
import { Constant } from 'src/app/services/constant.utils';
declare var $: any;
@Component({
  selector: 'app-vendor-registration',
  templateUrl: './vendor-registration.component.html',
  styleUrls: ['./vendor-registration.component.css']
})
export class VendorRegistrationComponent implements OnInit {
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
  dropDownMaster: any = {
    countryMst: [],
    currencyMst: [],
    groupingMst: [],
    payTermMst: [],
    racconMst: [],
    regionMst: [],
    titleMst: [],
    incotermMst: []
  }
  requestNo;
  formData: FormGroup;
  countryMst = [];
  currencyMst = [];
  regionMst = [];
  titleMst = [];
  alertResponse = { message: '', status: '', route: '' };
  panFile: any = null;
  gstFile: any = null;
  cancelCheque: any = null
  fkInvtId;
  tab = 1;
  validTab1 = true;
  validTab2 = true;
  validTab3 = true;
  emailPattern = "^[_A-Za-z0-9-\\+]+(\\.[_A-Za-z0-9-]+)*@[A-Za-z0-9-]+(\\.[A-Za-z0-9]+)*(\\.[A-Za-z]{2,})$";
  mobilePattern = /^[0-9]{10}$/;
  panPattern = "[A-Z]{5}[0-9]{4}[A-Z]{1}";
  gstPattern = "^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}Z[0-9A-Z]{1}$";
  regexpMobilePattern = new RegExp(/^[0-9]{10}$/);
  regexpEmailPattern = new RegExp("^[_A-Za-z0-9-\\+]+(\\.[_A-Za-z0-9-]+)*@[A-Za-z0-9-]+(\\.[A-Za-z0-9]+)*(\\.[A-Za-z]{2,})$");
  regexpGstPattern = new RegExp("^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}Z[0-9A-Z]{1}$");
  regexpPanPattern = new RegExp("[A-Z]{5}[0-9]{4}[A-Z]{1}");
  constructor(public router: Router, private apiHandler: ApiHandlerService, private http: HttpClient,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    const ref = this;
    ref.requestNo = ref.activatedRoute.snapshot.params['id'];
    console.log('ref.requestNo==>' + ref.requestNo);
    setTimeout(() => {
      ref.callApi();
    }, 500);
    ref.createForm();
  }
  callApi() {
    const ref = this;
    ref.apiHandler.validateRegLink(ref.requestNo, (response: any) => {
      console.log(JSON.stringify(response));
      if (response.sts === Constant.SUCCESS_STATUS) {
        ref.fkInvtId = response.content;
      } else {
        ref.router.navigate(['session-expired']);
      }

    }, (error: HttpErrorResponse) => {
      console.log(error);
    })
    let obj = { code: '', type: 'ALL' };

    ref.apiHandler.getRegistrationMaster(obj, (response: any) => {
      console.log(JSON.stringify(response));
      const tempObject = response.content;
      if (response.sts === Constant.SUCCESS_STATUS) {
        ref.dropDownMaster.countryMst = tempObject.countryMst;
        ref.dropDownMaster.currencyMst = tempObject.currencyMst;
        ref.dropDownMaster.groupingMst = tempObject.groupingMst;
        ref.dropDownMaster.payTermMst = tempObject.payTermMst;
        ref.dropDownMaster.racconMst = tempObject.racconMst;
        // ref.dropDownMaster.regionMst = tempObject.regionMst;
        ref.dropDownMaster.titleMst = tempObject.titleMst;
        ref.dropDownMaster.incotermMst = tempObject.incotermMst;
        // ref.regionMst = tempObject.regionMst;
        ref.titleMst = tempObject.titleMst;
      }
    }, (error: HttpErrorResponse) => {
      console.log(error);
    });
  }
  private createForm() {
    const ref = this;
    ref.formData = new FormGroup({
      pkId: new FormControl(''),
      regId: new FormControl(''),
      fkTittle: new FormControl('', [Validators.required]),
      name1: new FormControl('', [Validators.required]),
      name2: new FormControl('', [Validators.required]),//
      street: new FormControl('', [Validators.required]),
      street2: new FormControl('', [Validators.required]),
      // street3: new FormControl('', [Validators.required]),
      postCode: new FormControl('', [Validators.required]),
      city: new FormControl('', [Validators.required]),
      fkCountry: new FormControl('', [Validators.required]),
      fkRegion: new FormControl(''),
      // telephonNo: new FormControl('', [Validators.required]),
      mobileNo: new FormControl('', [Validators.required]),
      emailId: new FormControl('', [Validators.required]),
      fkCurrency: new FormControl('', [Validators.required]),
      // taxNo: new FormControl('', [Validators.required]),   
      gstnNo: new FormControl('', [Validators.required]),
      panNo: new FormControl('', [Validators.required]),
      // panRefNo: new FormControl('', [Validators.required]),
      fkInvtId: new FormControl(''),
      grouping: new FormControl(''),
      ifscCode: new FormControl(''),
      accountNo: new FormControl(''),
      accountHolder: new FormControl(''),
      incoterm: new FormControl(''),
      panFile: new FormControl(null),
      gstnFile: new FormControl(null),
    })
  }

  onSubmit() {
    const ref = this;
    ref.createForm();
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
    form.append('fkInvtId', ref.fkInvtId);
    form.append('bankName', tempObject.bankName);
    form.append('bankControlKey', tempObject.bankControlKey);

    // ref.apiHandler.saveRegDetails(form, (response: any) => {
    //   console.log(JSON.stringify(response));
    //   setTimeout(() => {
    //     $('#alertMsg').modal('show');
    //   }, 1000);
    //   if (response.sts === Constant.SUCCESS_STATUS) {
    //     ref.alertResponse.message = Constant.SUCCESS_MESSAGE;
    //     ref.alertResponse.route = '';
    //   } else {
    //     ref.alertResponse.message = response.msg;
    //   }
    //   ref.alertResponse.status = response.sts;

    // }, (error: HttpErrorResponse) => {
    //   setTimeout(() => {
    //     $('#alertMsg').modal('show');
    //   }, 1000);
    //   ref.alertResponse.message = Constant.ERROR_MESSAGE;
    //   ref.alertResponse.status = Constant.ERROR_STATUS;
    //   ref.alertResponse.route = '';
    //   console.log(error);
    // })
  }

  upload(files: File[], fileType) {
    const ref = this;
    const file = files[0] as File;
    const fileSize = file.size / 1024;
    console.log(files)
    console.log(fileType)
    let fileList = files;
    console.log(fileList)
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
    if (fileType === 'GST') {
      ref.gstFile = null;
      ref.formData.get('gstnFile').patchValue(null);
      if (fileSize < 5050) {
        ref.gstFile = files[0];
        ref.formData.get('gstnFile').patchValue(ref.gstFile);
      }
      else {
        ref.callAlert("error", "The attachment size should be less than 5MB", "not");
      }
    } else if (fileType === 'PAN') {
      ref.panFile = null;
      ref.formData.get('panFile').patchValue(null);
      if (fileSize < 5050) {
        ref.panFile = files[0];
        ref.formData.get('panFile').patchValue(ref.panFile);
      }
      else {
        ref.callAlert("error", "The attachment size should be less than 5MB", "not");
      }
    }

  }

  uploadCancelledCheque(files: File[], fileType) {
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
    if (fileType === 'CC') {
      ref.cancelCheque = null;
      // ref.formData.get('cancelCheck').patchValue(null);
      if (fileSize < 5050) {
        ref.cancelCheque = files[0];
        // ref.formData.get('cancelCheck').patchValue(ref.cancelCheque);
      }
      else {
        ref.callAlert("error", "The attachment size should be less than 5MB", "not");
      }
    }
  }

  onChangeCountry(code: any) {
    const ref = this;
    ref.dropDownMaster.regionMst = [];
    ref.submitObjectTab1.fkRegion = "";
    let obj = { code: code, type: 'REGION' }
    console.log('code==>' + code);
    if (code != "") {
      ref.apiHandler.getRegistrationMaster(obj, (response: any) => {
        console.log(JSON.stringify(response));
        const tempObject = response.content;
        if (response.sts.toLowerCase() === "success") {
          ref.dropDownMaster.regionMst = tempObject.regionMst;
        } else {
          ref.dropDownMaster.regionMst = [];
        }
      }, (error: HttpErrorResponse) => {
        ref.dropDownMaster.regionMst = [];
        console.log(error);
      });
    }

  }



  submitResultTab1(tab1Form: NgForm) {
    var ref = this;
    console.log("calltab1")
    console.log(tab1Form)

    ref.validTab1 = tab1Form.valid;
    if (ref.validTab1) {
      var temp = {};
      if(ref.submitObjectTab1.gstnNo != ""){
        var tempGST = ref.submitObjectTab1.gstnNo;
        var tempCheck = tempGST.substring(2, 12);
        console.log("tempCheck")
        console.log(tempCheck)
        if (ref.submitObjectTab1.panNo != tempCheck) {
          ref.callAlert("error", " Please enter valid GST and PAN number.", "not");
          return false;
        }
      }
     
      ref.tab = 2;
    }

  }

  submitResultTab2(tab2Form) {
    var ref = this;
    console.log("calltab2")
    console.log(tab2Form)
    ref.validTab2 = tab2Form.valid;
    if (ref.validTab2) {
      var temp = {};
      if (ref.submitObjectTab1.fkCountry != "IN") {
        if (ref.submitObjectTab2.bankControlKey == "") {
          ref.callAlert("error", "Please enter bank control key", "not");
          return false;
        }

      }
      // if (ref.submitObjectTab2.msme != '') {
      //   if (ref.submitObjectTab2.msmeCertificateNo == '') {
      //     ref.callAlert("error", "Please enter MSME Certificate no.", "not");
      //     return false;
      //   }
      // }
      if (ref.submitObjectTab1.panNo != '') {
        if (ref.submitObjectTab2.tin == '') {
          ref.callAlert("error", " Please enter tin.", "not");
          return false;
        }
      }
      // var checkTab11 = ref.checkTab1()
      // if (checkTab11) {
      //   ref.tab = 3;
      // } else {
      //   ref.tab = 1;
      //   ref.validTab1 = false;
      // }
      var checkTab11 = ref.checkTab1()
      if (!checkTab11) {
        ref.tab = 1;
        ref.validTab1 = false;
        return false;
      } else {
        ref.tab = 3;
      }
    }

  }

  submitResultTab3(tab3Form) {
    var ref = this;
    console.log("calltab3")
    // if (ref.gstFile == null) {
    //   ref.callAlert("error", "Please upload GST registration.", "not");
    //   return false;
    // }
    // if (ref.gstFile != null && ref.submitObjectTab1.gstnNo == "") {
    //   ref.callAlert("error", "Please enter GST number in general details tab.", "not");
    //   return false;
    // }
    if (ref.submitObjectTab1.panNo != "" && ref.panFile == null) {
      ref.callAlert("error", "Please upload PAN card copy.", "not");
      return false;
    }
    if (ref.panFile != null && ref.submitObjectTab1.panNo == "") {
      ref.callAlert("error", "Please enter PAN number in general details tab.", "not");
      return false;
    }
    if (ref.cancelCheque == null) {
      ref.callAlert("error", "Please upload cancelled cheque.", "not");
      return false;
    }
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
    } else {
      ref.finalApiCall();

    }


  }
  finalApiCall() {
    var ref = this;
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
    if (ref.panFile != null) {
      form.append('panFile', ref.panFile);
    }
    if (ref.gstFile != null) {
      form.append('gstnFile', ref.gstFile);
    }
    form.append('leadTime', ref.submitObjectTab1.leadTime);
    form.append('incoterm', ref.submitObjectTab1.incoterm);

    form.append('cancelCheck', ref.cancelCheque);
    //Tab 2
    // form.append('groupingMst', ref.submitObjectTab2.groupingMst);
    form.append('ifscCode', ref.submitObjectTab2.ifscCode);
    form.append('accountNo', ref.submitObjectTab2.accountNo);
    form.append('accountHolder', ref.submitObjectTab2.accountHolder);
    form.append('bankName', ref.submitObjectTab2.bankName);
    form.append('bankControlKey', ref.submitObjectTab2.bankControlKey);
    // form.append('msme', ref.submitObjectTab2.msme);
    form.append('msmeCertificateNo', ref.submitObjectTab2.msmeCertificateNo);
    if (ref.submitObjectTab2.tin != "") {
      form.append('tin', ref.submitObjectTab2.tin);
    }
    form.append('fkInvtId', ref.fkInvtId);
    form.append('regId', "0");
    form.append('pkId', "0");

    console.log(form)
    ref.apiHandler.saveRegDetails(form, (response: any) => {
      console.log(JSON.stringify(response));
      // setTimeout(() => {
      //   $('#alertMsg').modal('show');
      // }, 1000);
      if (response.sts === "success") {
        ref.callAlert("success", "Thankyou,You have successfully registered", "navigateToList");
      } else {
        ref.callAlert("error", "Failed", "not");
      }
      ref.alertResponse.status = response.sts;

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

  //tabs validation check
  //General Tab

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
    //   validFlag = false
    //   return false;
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
    if (ref.submitObjectTab1.gstnNo != ""){
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

  // BAnk Details
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
        ref.router.navigate(['']);
        $("#alertMsg").modal("hide");
      }
      $("#alertMsg").modal("hide");
    } else {
      $("#alertMsg").modal("hide");
    }
  }

}
