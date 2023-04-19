import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {  NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiHandlerService } from 'src/app/services/api-handler.service';
declare var $: any;

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {
  alertMessage;
  alertFlag;
  alertNavigate;
  valid = true;
  testid : '';
  passwordpattern = "^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$";
  alertResponse = { message:'', status:'', route:''};
  requestJson = { reqNo: '', password: '' , userId: '', confirmPassword :''};


  submitObject = {
    oldPassword: "",
    newPassword: "",
    confirmPassword: ""
  }
  regexpPassword = new RegExp(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[\w~@#$%^&*+=`|{}:;!.?\"()\[\]-]{6,25}$/);

  constructor(private route: ActivatedRoute,
    public router:Router, private apiHandler: ApiHandlerService, private http: HttpClient) {}

  ngOnInit() {
    const ref=this;
    ref.testid = this.route.snapshot.params.id;
    console.log("-------->" + ref.testid);
    setTimeout(() => {
      ref.callApi();
    }, 500);
    
  }
  
  callApi(){
    const ref = this;
    ref.apiHandler.validateForgotPwdLink(ref.testid, (response: any) => {
      console.log(JSON.stringify(response));
      if (response.sts === "success") {
        ref.requestJson.userId = response.content.userId
        ref.requestJson.reqNo = ref.testid
        //ref.callAlert("success", "link is valid ", "not");
      } else {
        ref.router.navigate(['session-expired']);
      }
      ref.alertResponse.status = response.sts;
    }, (error: HttpErrorResponse) => {
      console.log(error);
      ref.callAlert("error", "Failed", "not");
        console.log(error);
    })
  }

  onSubmit(submitForm: NgForm){
    //code
    const ref=this;
    ref.valid = submitForm.valid
    console.log(ref.requestJson);
    console.log("----------------"+ref.valid);
    if(ref.valid){
      if ( ref.requestJson.confirmPassword == ref.requestJson.password) {
        console.log("api hit");
        // ref.apiHandler.updateForcePassword(ref.requestJson,(response:any)=>{
        //   console.log(JSON.stringify(response));
        //   if (response.sts === "success") {
        //     ref.callAlert("success", "Your password has been updated", "navigateToList");
        //   } else {
        //     ref.callAlert("error", "Failed", "not");
        //   }
        //   ref.alertResponse.status = response.sts;
        // },(error:HttpErrorResponse)=>{
  
        //   ref.callAlert("error", "Failed", "not");
        //   console.log(error);
  
        // }
        // );
      }else{
        ref.callAlert("error", "Please enter same password.", "not");
        return false;
      }
    }
  }

  submitResult(submitForm) {
    var ref = this;
    ref.valid = submitForm.valid;
    console.log("inside")

    if (submitForm.valid) {
      console.log("inside1")

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
      console.log("inside")

      var temp = {};
      temp['reqNo'] = ref.requestJson.reqNo;
      temp['userId'] = ref.requestJson.userId;
      temp['password'] = submitForm.value.newPassword;
      temp['confirmPassword'] = submitForm.value.confirmPassword;
      console.log("temp");
      console.log(temp);
      ref.apiHandler.updateForcePassword(temp, function success(resp) {
        console.log(resp)
        if (resp.sts == "success") {
          ref.callAlert("success", "Password successfully set,<br>Please login ", "navigateToList");
        }
        else {
          ref.callAlert("error", resp.msg, "not");
        }
      }, function error(error) {
        ref.callAlert("error", "someting went wrong", "not");
      });
    }
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
        ref.router.navigate(['']);
        $("#alertMsg1").modal("hide");
      }
      $("#alertMsg1").modal("hide");
    } else {
      $("#alertMsg1").modal("hide");
    }
  }

}
