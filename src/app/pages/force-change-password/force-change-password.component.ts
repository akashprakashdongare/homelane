import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiHandlerService } from 'src/app/services/api-handler.service';
import { Constant } from 'src/app/services/constant.utils';
declare var $: any;
@Component({
  selector: 'app-force-change-password',
  templateUrl: './force-change-password.component.html',
  styleUrls: ['./force-change-password.component.css']
})
export class ForceChangePasswordComponent implements OnInit {
  alertMessage;
  alertFlag;
  alertNavigate;
  loginData = JSON.parse(window.localStorage.getItem('loginData'));
  // userId=JSON.parse(window.localStorage.getItem('userId'));
  oldpaswrdCheck = true;
  submitObject = {
    oldPassword: "",
    newPassword: "",
    confirmPassword: ""
  }
  valid = true;
  regexpPassword = new RegExp(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[\w~@#$%^&*+=`|{}:;!.?\"()\[\]-]{6,25}$/);

  constructor(public router: Router, private apiHandler: ApiHandlerService, private http: HttpClient) { }

  ngOnInit() {
  }
  navigateTo(){
    var ref = this;
    ref.router.navigate(['']);
   }

  submitResult(submitForm) {
    var ref = this;
    ref.valid = submitForm.valid;
    if (submitForm.valid) {
      var newPassword = submitForm.value.newPassword;
      var confirmPassword = submitForm.value.confirmPassword
      if (!ref.regexpPassword.test(newPassword)) {
        ref.callAlert("error", "New password does not match the required conditions", "not");
        return false;
      }
      if (!ref.regexpPassword.test(confirmPassword)) {
        ref.callAlert("error", "Confirm password does not match the required conditions", "not");
        return false;
      }
      if (newPassword !== confirmPassword) {
        ref.callAlert("error", "New password and Confirm password does not match", "not");
        return false;
      }
      console.log()
      var temp = {};
      temp['userId'] = ref.loginData.userId;
      temp['password'] = submitForm.value.oldPassword;
      temp['newPassword'] = submitForm.value.confirmPassword;
      console.log("temp");
      console.log(temp);
      ref.apiHandler.updatePassword(temp, function success(resp) {
        console.log(resp)
        if (resp.sts == "success") {
          ref.callAlert("success", "Password successfully set,<br>Please login again", "navigateToList");
        }
        else {
          ref.callAlert("error", resp.msg, "not");
        }
      }, function error(error) {
        ref.callAlert("error", "someting went wrong", "not");
      });
    }
  }

  ngOnDestroy(){
    window.localStorage.clear();
  }

  callAlert(alertFlag, message, navigate) {
    var ref = this;
    ref.alertFlag = alertFlag;
    ref.alertMessage = message;
    ref.alertNavigate = navigate;
    $('#alertMsg1').modal('show');
  }

  okAlert() {
    var ref = this;
    if (ref.alertFlag === "success") {
      if (ref.alertNavigate == 'navigateToList') {
        window.localStorage.clear();
        ref.router.navigate(['']);
        $("#alertMsg1").modal("hide");
      }
      $("#alertMsg1").modal("hide");
    } else {
      $("#alertMsg1").modal("hide");
    }
  }

}
