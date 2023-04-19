import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiHandlerService } from 'src/app/services/api-handler.service';
import { Constant } from 'src/app/services/constant.utils';
declare var $: any;
@Component({
  selector: 'app-customer-invitation',
  templateUrl: './customer-invitation.component.html',
  styleUrls: ['./customer-invitation.component.css']
})
export class CustomerInvitationComponent implements OnInit {

  invitationList = [];
  alertResponse = { message: '', status: '', route: '' };
  requestJson = {
    pkId: 0, name: '', vendorType: '', mobileNo: '', emailId: '',
    isActive: 'Y', isInvited: 'N'
  };
  formData: FormGroup;
  vendorTypeList = [];
  createFlag = true;
  invitation_obj: any = {};
  delete_obj:any = {};
  constructor(public router: Router, private apiHandler: ApiHandlerService, private http: HttpClient) { }

  ngOnInit() {
    const ref = this;
    ref.createForm();
    ref.callApi();
  }

  callApi() {
    const ref = this;
    ref.apiHandler.getInvitationList((response: any) => {
      console.log(JSON.stringify(response))
      if (response.sts = Constant.SUCCESS_STATUS) {
        ref.invitationList = response.content;
        ref.initializeDatatable();

      } else {
        ref.initializeDatatable();

      }

    }, (error: HttpErrorResponse) => {
      console.log(error);
      ref.initializeDatatable();
    });
    ref.apiHandler.getInvitationMaster((response: any) => {
      console.log(JSON.stringify(response));
      if (response.sts === Constant.SUCCESS_STATUS) {
        ref.vendorTypeList = response.content.vendorType;
      }
    }, (error: HttpErrorResponse) => {
      console.log(error);
    });
  }
  private initializeDatatable() {
    $('#userInvitationlist').dataTable().fnDestroy();
    setTimeout(() => {
      $('#userInvitationlist').DataTable({
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


  private createForm() {
    const ref = this;
    ref.requestJson = {
      pkId: 0, name: '', vendorType: '', mobileNo: '', emailId: '',
      isActive: 'Y', isInvited: 'N'
    };
    ref.formData = new FormGroup({

      name: new FormControl('', [Validators.required]),
      mobileNo: new FormControl('', [Validators.required, Validators.pattern('^[0-9]{10}$')]),
      emailId: new FormControl('', [Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]),
      id: new FormControl(0),
      vendorType: new FormControl('', [Validators.required]),
      firstName: new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z]+$')]),
      lastName: new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z]+$')]),
      pkId: new FormControl(0),
      isActive: new FormControl('Y'),
      isInvited: new FormControl('')
    })


    ref.formData.get('firstName').valueChanges.subscribe(value => {
      if (value) {
        ref.formData.get('firstName').patchValue(value.trim(), { emitEvent: false })
      } else {
        ref.formData.get('firstName').patchValue(value, { emitEvent: false })
      }
    });
    ref.formData.get('lastName').valueChanges.subscribe(value => {
      if (value) {
        ref.formData.get('lastName').patchValue(value.trim(), { emitEvent: false })
      } else {
        ref.formData.get('lastName').patchValue(value, { emitEvent: false })
      }
    });

    ref.formData.get('mobileNo').valueChanges.subscribe(value => {
      if (value) {
        ref.formData.get('mobileNo').patchValue(value.trim(), { emitEvent: false })
      } else {
        ref.formData.get('mobileNo').patchValue(value, { emitEvent: false })
      }
    })

    ref.formData.get('emailId').valueChanges.subscribe(value => {
      if (value) {
        ref.formData.get('emailId').patchValue(value.trim(), { emitEvent: false })
      } else {
        ref.formData.get('emailId').patchValue(value, { emitEvent: false })
      }
    })
  }

  sendMail(user: any) {
    const ref = this;
    ref.requestJson.pkId = user.pkId
    ref.requestJson.name = user.name;
    ref.requestJson.vendorType = user.vendorTypeDes;
    ref.requestJson.mobileNo = user.mobileNo;
    ref.requestJson.emailId = user.emailId;
    ref.requestJson.isActive = user.isActive;
    ref.requestJson.isInvited = user.isInvited;

    ref.apiHandler.sendInvitation(user, (response: any) => {
      console.log(JSON.stringify(response));
      setTimeout(() => {
        $('#alertMsg').modal('show');
      }, 1000);
      if (response.sts === Constant.SUCCESS_STATUS) {
        ref.alertResponse.message = Constant.SUCCESS_MESSAGE;
        // ref.alertResponse.route='customerInvitation';
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

  onCreate() {
    const ref = this;
    ref.createForm();
    ref.createFlag = true;
    setTimeout(() => {
      $('#createOrUpdateUserInvitation').modal('show');
    }, 500);
  }

  onEdit(user: any) {
    const ref = this;
    console.log(user);
    ref.createFlag = false;
    ref.createForm();
    setTimeout(() => {
      ref.formData.get('name').setValue(user.name);
      ref.formData.get('vendorType').setValue(user.vendorType);
      ref.formData.get('firstName').setValue(user.firstName);
      ref.formData.get('lastName').setValue(user.lastName);
      ref.formData.get('mobileNo').setValue(user.mobileNo);
      ref.formData.get('emailId').setValue(user.emailId);
      ref.formData.get('pkId').setValue(user.pkId);
      ref.formData.get('isInvited').setValue(user.isInvited);
      ref.formData.get('isActive').setValue(user.isActive);
      $('#createOrUpdateUserInvitation').modal('show');
    }, 500);

  }

  onSubmit() {
    const ref = this;
    const tempObject: any = ref.formData.value;
    console.log('requestJson=> ' + JSON.stringify(tempObject));
    ref.apiHandler.saveVendorInvitation(tempObject, (response: any) => {
      console.log(JSON.stringify(response));
      setTimeout(() => {
        $('#createOrUpdateUserInvitation').modal('hide');
        $('#alertMsg').modal('show');
      }, 1000);
      if (response.sts === Constant.SUCCESS_STATUS) {
        ref.alertResponse.message = Constant.SUCCESS_MESSAGE;
        // ref.alertResponse.route='main-layout/customerInvitation';
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

  open_invitation_popup(user) {
    var ref = this;
    ref.invitation_obj = user;
    console.log("call open")
    console.log(ref.invitation_obj)
    // $('#alertInvitation').modal('show');
    $('#alertInvitation').modal('show');

  }

  okAlert() {
    const ref = this;
    $('#alertMsg').modal('hide');
    ref.createForm();
    ref.callApi();
  }


  yes_invitation() {
    var ref = this;
    $('#alertInvitation').modal('hide');

    // ref.lock_UnlockUserObj.userType = ref.lock_UnlockUserObj.roleId
    ref.apiHandler.sendInvitation(ref.invitation_obj, (response: any) => {
      console.log(JSON.stringify(response));
      // setTimeout(() => {
      //   $('#alertMsg').modal('show');
      // }, 1000);
      if (response.sts === Constant.SUCCESS_STATUS) {
        $('#alertInvitation').modal('hide');
        ref.alertResponse.message = Constant.SUCCESS_MESSAGE;
        // ref.alertResponse.route='customerInvitation';
      } else {
        $('#alertInvitation').modal('hide');

        ref.alertResponse.message = response.msg;
        setTimeout(() => {
          $('#alertMsg').modal('show');
        }, 1000);
      }
      ref.alertResponse.status = response.sts;

    }, (error: HttpErrorResponse) => {
      $('#alertInvitation').modal('hide');

      // setTimeout(() => {
      //   $('#alertMsg').modal('show');
      // }, 1000);

      ref.alertResponse.message = Constant.ERROR_MESSAGE;
      ref.alertResponse.status = Constant.ERROR_STATUS;
      ref.alertResponse.route = '';
      console.log(error);
    })
  }

  no_invitation() {
    var ref = this;
    ref.invitation_obj = {};
    $('#alertInvitation').modal('hide');

  }

  onDeleteCofirm(user) {
    var ref = this;
    console.log(user);
    ref.delete_obj = user;
    $('#alertDelete').modal('show');
  }

  onDeleteNo(){
    var ref = this;
    ref.delete_obj = {};
    console.log(ref.delete_obj);
    $('#alertDelete').modal('hide');
  }

  onDeleteYes(){
    var ref = this;
    ref.delete_obj.isActive = 'N';
    console.log(ref.delete_obj);
    $('#alertDelete').modal('hide');
    ref.apiHandler.saveVendorInvitation(ref.delete_obj, (response: any) => {
      console.log(JSON.stringify(response));
      setTimeout(() => {
        $('#alertMsg').modal('show');
      }, 1000);
      if (response.sts === Constant.SUCCESS_STATUS) {
        ref.alertResponse.message = Constant.SUCCESS_MESSAGE;
        // ref.alertResponse.route='main-layout/customerInvitation';
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
      // ref.alertResponse.route = '';
      console.log(error);
    })
  }

}
