import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { ApiHandlerService } from 'src/app/services/api-handler.service';
import { Constant } from 'src/app/services/constant.utils';
import { MatDialog } from '@angular/material';
import { DialogBoxComponent } from '../dialog-box/dialog-box.component';
import { FormControl, FormGroup, Validators } from '@angular/forms';
declare var $: any;
@Component({
  selector: 'app-user-creation',
  templateUrl: './user-creation.component.html',
  styleUrls: ['./user-creation.component.css']
})
export class UserCreationComponent implements OnInit {
  alertMessage;
  alertFlag;
  alertNavigate;
  requestJson = {
    userId: '', firstName: '', lastName: '', mobileNo: '', emailId: '', id: 0
    , userType: '', userLogId: '', isActive: '', isLocked: ''
  };
  userList: any = [];
  userTypeList = [];
  formData: FormGroup;
  userIdDisable = false;
  alertResponse = { message: '', status: '', route: '' };
  lock_UnlockUserObj: any = {};
  constructor(public router: Router, private apiHandler: ApiHandlerService, private http: HttpClient,
    private location: Location, public dialog: MatDialog) { }

  ngOnInit() {
    const ref = this;
    ref.createForm();
    ref.callApi();
  }
  createForm() {
    const ref = this;
    ref.requestJson = {
      userId: '', firstName: '', lastName: '', mobileNo: '', emailId: '', id: 0
      , userType: '', userLogId: '', isActive: '', isLocked: ''
    };

    ref.formData = new FormGroup({
      userId: new FormControl('', [Validators.required]),
      firstName: new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z]+$')]),
      lastName: new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z]+$')]),
      mobileNo: new FormControl('', [Validators.required, Validators.pattern('^[0-9]{10}$')]),
      emailId: new FormControl('', [Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]),
      id: new FormControl(0),
      userType: new FormControl('', [Validators.required]),
      isActive: new FormControl('Y'),
      isLocked: new FormControl('N'),
    })
  }
  onCreate() {
    const ref = this;
    ref.createForm();
    ref.userIdDisable = false;
    setTimeout(() => {
      $('#createOrUpdateUser').modal('show');
    }, 500);
  }
  onEdit(user: any) {
    const ref = this;
    ref.createForm();
    ref.userIdDisable = true;
    setTimeout(() => {
      ref.formData.get('userId').setValue(user.userId);
      ref.formData.get('firstName').setValue(user.firstName);
      ref.formData.get('lastName').setValue(user.lastName);
      ref.formData.get('mobileNo').setValue(user.mobileNo);
      ref.formData.get('emailId').setValue(user.emailId);
      ref.formData.get('id').setValue(user.id);
      ref.formData.get('userType').setValue(user.roleId);
      ref.formData.get('isActive').setValue('Y');
      ref.formData.get('isLocked').setValue(user.isLocked);
      console.log(user)
      $('#createOrUpdateUser').modal('show');
    }, 500);
  }

  callApi() {
    const ref = this;
    ref.apiHandler.getUserList((response: any) => {
      console.log(JSON.stringify(response))
      if (response.sts === Constant.SUCCESS_STATUS) {
        ref.userList = response.content;
      } else {
        ref.userList = [];
      }
      ref.initializeDatatable();

    }, (error: HttpErrorResponse) => {
      console.log(error);
      ref.userList = [];
      ref.initializeDatatable();
    });

    ref.apiHandler.getUserCreationMaster((response: any) => {
      console.log(JSON.stringify(response));
      if (response.sts === Constant.SUCCESS_STATUS) {
        ref.userTypeList = response.content.roleMst;
      }
    }, (error: HttpErrorResponse) => {
      console.log(error);
    });

  }
  private initializeDatatable() {
    $('#userlist').dataTable().fnDestroy();
    setTimeout(() => {
      $('#userlist').DataTable({
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



  onDeleteCofirm(user: any) {
    const ref = this;
    $('#alertDeleteCoOwner').modal('show');
    ref.requestJson.firstName = user.firstName;
    ref.requestJson.lastName = user.lastName;
    ref.requestJson.emailId = user.emailId;
    ref.requestJson.mobileNo = user.mobileNo;
    ref.requestJson.userId = user.userId;
    ref.requestJson.userType = user.roleId;
    ref.requestJson.isActive = 'N';
    ref.requestJson.isLocked = user.isLocked
    ref.requestJson.id = user.id

  }

  onDeleteUser() {
    const ref = this;
    $('#alertDeleteCoOwner').modal('hide');
    console.log('requestJson=> ' + JSON.stringify(ref.requestJson));
    ref.apiHandler.saveUser(ref.requestJson, (response: any) => {
      console.log(JSON.stringify(response));
      setTimeout(() => {
        $('#alertMsg').modal('show');
      }, 1000);
      if (response.sts === Constant.SUCCESS_STATUS) {
        ref.alertResponse.message = Constant.SUCCESS_MESSAGE;
        // ref.alertResponse.route='userCreation';
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

  onSubmit() {
    const ref = this;
    const tempObject: any = ref.formData.value;

    console.log('requestJson=> ' + JSON.stringify(tempObject));
    ref.apiHandler.saveUser(tempObject, (response: any) => {
      console.log(JSON.stringify(response));
      setTimeout(() => {
        $('#createOrUpdateUser').modal('hide');
        $('#alertMsg').modal('show');
      }, 1000);
      if (response.sts === Constant.SUCCESS_STATUS) {
        ref.alertResponse.message = Constant.SUCCESS_MESSAGE;
        // ref.alertResponse.route='main-layout/userCreation';
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


  okAlert() {
    const ref = this;
    $('#alertMsg').modal('hide');
    ref.createForm();
    ref.callApi();
  }

  // openDialog(){
  //   const ref=this;
  //   ref.dialog.open(DialogBoxComponent);
  // }
  openDialog(): void {
    const dialogRef = this.dialog.open(DialogBoxComponent, {
      width: '350px',
      data: { massage: '', animal: '' },
      disableClose: true
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      // this.animal = result;
    });
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
    // ref.requestJson.firstName = ref.lock_UnlockUserObj.firstName;
    // ref.requestJson.lastName = ref.lock_UnlockUserObj.lastName;
    // ref.requestJson.emailId = ref.lock_UnlockUserObj.emailId;
    // ref.requestJson.mobileNo = ref.lock_UnlockUserObj.mobileNo;
    // ref.requestJson.userId = ref.lock_UnlockUserObj.userId;
    // ref.requestJson.userType = ref.lock_UnlockUserObj.roleId;
    // if (ref.lock_UnlockUserObj.isLocked == "N") {
    //   ref.requestJson.isActive.isLocked = 'Y';
    // }
    // if (ref.lock_UnlockUserObj.isLocked == "Y") {
    //   ref.requestJson.isActive.isLocked = 'N';
    // }
    // ref.requestJson.userType = user.roleId;
    ref.lock_UnlockUserObj.userType = ref.lock_UnlockUserObj.roleId
    ref.lock_UnlockUserObj.isLocked = ref.lock_UnlockUserObj.isLocked == "Y" ? "N" : "Y"
    console.log('requestJson=> ' + JSON.stringify(ref.lock_UnlockUserObj));
    $('#alertLock').modal('hide');

    ref.apiHandler.saveUser(ref.lock_UnlockUserObj, (response: any) => {
      console.log(JSON.stringify(response));
      // setTimeout(() => {
      //   $('#alertMsg').modal('show');
      // }, 1000);
      $('#alertLock').modal('hide');
      if (response.sts === "success") {
        ref.callApi();
        // ref.alertResponse.route='userCreation';
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
