import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiHandlerService } from 'src/app/services/api-handler.service';

declare var $: any;
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  // @ViewChild('loginForm',{static: false}) mainForm:NgForm;

  // userId=new FormControl('',Validators.required);

  requestJson = { userId: '', password: '' };
  alertMessage;
  alertFlag;
  alertNavigate;
  loginData = {
    userId: "",
    password: "",
  };
  valid = true;

  forgotPasswordObj: any = {
    userId: ""
  }
  constructor(public router: Router, private apiHandler: ApiHandlerService, private http: HttpClient) { }

  ngOnInit() {
    const ref = this;
    window.localStorage.clear();
  }


  // onSubmit(){
  //   const ref=this;
  //   $('#loaderdiv').modal('show');
  //   let tempObject:any=ref.mainForm.value;
  //   console.log(JSON.stringify(tempObject));
  //   ref.requestJson.userId=tempObject.userId;
  //   ref.requestJson.password=tempObject.password;
  //   ref.apiHandler.authentication(ref.requestJson,(response:any)=>{
  //     console.log(JSON.stringify(response));
  //     if(response.sts==='success'){
  //       window.localStorage.setItem("loginData", JSON.stringify(response.content));
  //       window.localStorage.setItem("sideMenu", JSON.stringify(response.content.menuList));
  //       window.localStorage.setItem("loginToken", JSON.stringify(response.tkn));
  //       this.router.navigate(['main-layout/dashboard']);
  //     }else{
  //       ref.callAlert("error", response.msg, "not");
  //     }
  //   },(error:HttpErrorResponse)=>{
  //     ref.callAlert("error", "Failed", "not");
  //     console.log(error)
  //   });
  // }

  submitLogin(loginData: NgForm) {
    var ref = this;
    ref.valid = loginData.valid;
    if (ref.valid) {
      var temp = {};
      // temp["pernr"] = loginData.value.userid;
      temp["userId"] = loginData.value.userId;
      temp["password"] = loginData.value.password;
      ref.apiHandler.authentication(temp, (response: any) => {
        console.log(JSON.stringify(response));
        if (response.sts === 'success') {
          //For direct  login without force changepassword uncomment below lines

          // window.localStorage.setItem("userId", JSON.stringify(loginData.value.userId));
          // window.localStorage.setItem("loginData", JSON.stringify(response.content));
          // window.localStorage.setItem("sideMenu", JSON.stringify(response.content.menuList));
          // window.localStorage.setItem("loginToken", JSON.stringify(response.tkn));
          // ref.router.navigate(['main-layout/dashboard']);

          //For force change password uncomment below lines
          var checkFlag = response.content
          if (checkFlag.isPwdChanged == 'Y') {
            window.localStorage.setItem("loginData", JSON.stringify(response.content));
            window.localStorage.setItem("sideMenu", JSON.stringify(response.content.menuList));
            window.localStorage.setItem("loginToken", JSON.stringify(response.tkn));
            ref.router.navigate(['main-layout/dashboard']);
          } else if (checkFlag.isPwdChanged == 'N') {
            window.localStorage.setItem("loginData", JSON.stringify(response.content));
            window.localStorage.setItem("sideMenu", JSON.stringify(response.content.menuList));
            window.localStorage.setItem("loginToken", JSON.stringify(response.tkn));
            ref.router.navigate(['forceChangePassword']);
          }
        } else {
          ref.callAlert("error", response.msg, "not");
          loginData.reset();
        }
      }, (error: HttpErrorResponse) => {
        ref.callAlert("error", "Failed", "not");
        loginData.reset();

        console.log(error)
      });
    }

  }

  onSubmitForgotPassword() {
    const ref = this;
    $('.bd-example-modal-xl').modal('hide');
    ref.apiHandler.forgotPassword(ref.forgotPasswordObj.userId, (response) => {
      console.log(JSON.stringify(response));
      if (response.sts === 'success') {
        ref.callAlert("success", "Mail has been sent to registered email id", "not");
        ref.forgotPasswordObj.userId = "";

      } else {
        ref.forgotPasswordObj.userId = "";
        ref.callAlert("error", response.content, "not");
      }


    }, (error: HttpErrorResponse) => {
      ref.callAlert("error", "Failed", "not");

      console.log(error);

    });
  }

  onLead() {
    const ref = this;
    ref.router.navigate(['leadCreation']);
  }

  closeForgetPasswordPopup() {
    var ref = this;
    ref.forgotPasswordObj.userId = "";

  }

  openForgetPopup(){
    var ref = this;
    ref.forgotPasswordObj.userId = "";
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
        // ref.router.navigate(['main-layout/quotationList']);
        $("#alertMsg1").modal("hide");
      }
      $("#alertMsg1").modal("hide");
    } else {
      $("#alertMsg1").modal("hide");
    }
  }
}


