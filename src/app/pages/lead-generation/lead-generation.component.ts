import { Component, OnInit } from '@angular/core';

import { Location } from '@angular/common';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { ApiHandlerService } from 'src/app/services/api-handler.service';
import { Constant } from 'src/app/services/constant.utils';
import { FormControl, FormGroup, Validators } from '@angular/forms';
declare var $: any;
@Component({
  selector: 'app-lead-generation',
  templateUrl: './lead-generation.component.html',
  styleUrls: ['./lead-generation.component.css']
})
export class LeadGenerationComponent implements OnInit {

  requestJson = {
    fkContUs: '', contUsOther: '', companyName: '', emailId: '', mobileNo: '', fkCity: '',
    cityOther: '', fkSerProvideType: '', serProvideTypeOther: '', fkSerCategoryDesc: '', serCategoryDescOther: '',
    fkFirmType: '', firmTypeOther: '', fkTurnOver: '', fkEmpCount: '', fkCreditHCap: '', fkExpIntTurnRenovation: ''
    , requesterEmailId: '', firstName: '', lastName: ''
  }

  alertResponse = { message: '', status: '', route: '' };

  formData: FormGroup;
  // userTypeList=[];
  cityMst = [];
  contactUsMst = [];
  creditCapacityMst = [];
  empStrengthMst = [];
  experienceMst = [];
  firmTypeMst = [];
  serviceCategoryMst = [];
  serviceTypeMst = [];
  turnOverMst = [];

  constructor(public router: Router, private apiHandler: ApiHandlerService, private http: HttpClient,
    private location: Location) { }

  ngOnInit() {
    const ref = this;
    ref.createForm();
    ref.callApi();

    // $('#customerId').SumoSelect({
    //   okCancelInMulti: true,
    //   selectAll: true, search: true, placeholder: 'Select Customer'
    // });
  }

  callApi() {
    const ref = this;
    ref.apiHandler.getLeadGenerationMaster((response: any) => {
      console.log(JSON.stringify(response));
      if (response.sts === Constant.SUCCESS_STATUS) {
        ref.cityMst = response.content.cityMst;
        ref.contactUsMst = response.content.contactUsMst;
        ref.creditCapacityMst = response.content.creditCapacityMst;
        ref.empStrengthMst = response.content.empStrengthMst;
        ref.experienceMst = response.content.experienceMst;
        ref.firmTypeMst = response.content.firmTypeMst;
        ref.serviceCategoryMst = response.content.serviceCategoryMst;
        ref.serviceTypeMst = response.content.serviceTypeMst;
        ref.turnOverMst = response.content.turnOverMst;

      }
      setTimeout(() => {
        $('#city').SumoSelect({
          okCancelInMulti: true,
          selectAll: true, search: true, placeholder: 'Select City'
        });

        $('#city').on('change', () => {
          const temp = $('#city').val();
          ref.formData.controls.fkCity.setValidators([Validators.required])
          ref.formData.controls.fkCity.updateValueAndValidity();
          if (temp && temp.length > 0) {
            ref.formData.get('fkCity').patchValue($('#city').val());
          } else {
            ref.formData.get('fkCity').patchValue(null);
          }

        });

        $('#serviceType').SumoSelect({
          okCancelInMulti: true,
          selectAll: true, search: true, placeholder: 'Select service type'
        });
        $('#serviceType').on('change', () => {
          console.log('on change serviceType select')
          const temp = $('#serviceType').val();
          ref.formData.controls.fkSerProvideType.setValidators([Validators.required])
          ref.formData.controls.fkSerProvideType.updateValueAndValidity();
          if (temp && temp.length > 0) {
            ref.formData.get('fkSerProvideType').patchValue($('#serviceType').val());
          } else {
            ref.formData.get('fkSerProvideType').patchValue(null);
          }
        });


      }, 600);
    },
      (error: HttpErrorResponse) => {
        console.log(error);
      })
  }

  private createForm() {
    const ref = this;
    ref.requestJson = {
      fkContUs: '', contUsOther: '', companyName: '', emailId: '', mobileNo: '', fkCity: '',
      cityOther: '', fkSerProvideType: '', serProvideTypeOther: '', fkSerCategoryDesc: '', serCategoryDescOther: '',
      fkFirmType: '', firmTypeOther: '', fkTurnOver: '', fkEmpCount: '', fkCreditHCap: '', fkExpIntTurnRenovation: ''
      , requesterEmailId: '', firstName: '', lastName: ''
    }
    ref.formData = new FormGroup({
      fkContUs: new FormControl('', [Validators.required]),
      contUsOther: new FormControl({ value: '', disabled: true }, [Validators.required]),
      companyName: new FormControl('', [Validators.required]),
      emailId: new FormControl('', [Validators.required]),
      mobileNo: new FormControl('', [Validators.required]),
      fkCity: new FormControl(''),
      cityOther: new FormControl({ value: '', disabled: true }, [Validators.required]),
      fkSerProvideType: new FormControl(''),
      serProvideTypeOther: new FormControl({ value: '', disabled: true }),
      fkSerCategoryDesc: new FormControl('', [Validators.required]),
      serCategoryDescOther: new FormControl({ value: '', disabled: true }),
      fkFirmType: new FormControl('', [Validators.required]),
      firmTypeOther: new FormControl({ value: '', disabled: true }),
      fkTurnOver: new FormControl('', [Validators.required]),
      fkEmpCount: new FormControl('', [Validators.required]),
      fkCreditHCap: new FormControl('', [Validators.required]),
      fkExpIntTurnRenovation: new FormControl('', [Validators.required]),
      requesterEmailId: new FormControl('', [Validators.required]),
      firstName: new FormControl('', [Validators.required]),
      lastName: new FormControl('', [Validators.required])
    })


    ref.formData.get('fkContUs').valueChanges.subscribe(value => {
      if (value) {
        if (value.trim() === 'OT') {
          ref.formData.get('contUsOther').enable();
          ref.formData.controls.contUsOther.setValidators([Validators.required])
          ref.formData.controls.contUsOther.updateValueAndValidity();
        } else {
          ref.formData.get('contUsOther').disable();
          ref.formData.controls.contUsOther.clearValidators();
          ref.formData.controls.contUsOther.updateValueAndValidity();
          ref.formData.get('contUsOther').patchValue('');
        }
        ref.formData.get('fkContUs').patchValue(value.trim(), { emitEvent: false })
      } else {
        ref.formData.get('fkContUs').patchValue(value, { emitEvent: false })
      }
    });

    // ref.formData.get('fkCity').valueChanges.subscribe(value => {
    //   if (value) {
    //     if(value.trim()==='OT'){
    //       ref.formData.get('cityOther').enable();
    //     }else{
    //       ref.formData.get('cityOther').disable();
    //       ref.formData.get('cityOther').patchValue('');
    //     }
    //     ref.formData.get('fkCity').patchValue(value.trim(), { emitEvent: false })
    //   } else {
    //     ref.formData.get('fkCity').patchValue(value, { emitEvent: false })
    //   }
    // });

    // ref.formData.get('fkSerProvideType').valueChanges.subscribe(value => {
    //   if (value) {
    //     if(value.trim()==='OT'){
    //       ref.formData.get('serProvideTypeOther').enable();
    //     }else{
    //       ref.formData.get('serProvideTypeOther').disable();
    //       ref.formData.get('serProvideTypeOther').patchValue('');
    //     }
    //     ref.formData.get('fkSerProvideType').patchValue(value.trim(), { emitEvent: false })
    //   } else {
    //     ref.formData.get('fkSerProvideType').patchValue(value, { emitEvent: false })
    //   }
    // });

    ref.formData.get('fkSerCategoryDesc').valueChanges.subscribe(value => {
      if (value) {
        if (value.trim() === 'OT') {
          ref.formData.get('serCategoryDescOther').enable();
          ref.formData.controls.serCategoryDescOther.setValidators([Validators.required])
          ref.formData.controls.serCategoryDescOther.updateValueAndValidity();
        } else {
          ref.formData.get('serCategoryDescOther').disable();
          ref.formData.controls.serCategoryDescOther.clearValidators();
          ref.formData.controls.serCategoryDescOther.updateValueAndValidity();
          ref.formData.get('serCategoryDescOther').patchValue('');

        }
        ref.formData.get('fkSerCategoryDesc').patchValue(value.trim(), { emitEvent: false })
      } else {
        ref.formData.get('fkSerCategoryDesc').patchValue(value, { emitEvent: false })
      }
    });

    ref.formData.get('fkFirmType').valueChanges.subscribe(value => {
      if (value) {
        if (value.trim() === 'OT') {
          ref.formData.get('firmTypeOther').enable();
          ref.formData.controls.firmTypeOther.setValidators([Validators.required])
          ref.formData.controls.firmTypeOther.updateValueAndValidity();
        } else {
          ref.formData.get('firmTypeOther').disable();
          ref.formData.controls.firmTypeOther.clearValidators();
          ref.formData.controls.firmTypeOther.updateValueAndValidity();
          ref.formData.get('firmTypeOther').patchValue('');

        }
        ref.formData.get('fkFirmType').patchValue(value.trim(), { emitEvent: false })
      } else {
        ref.formData.get('fkFirmType').patchValue(value, { emitEvent: false })
      }
    });


  }

  onSubmit() {
    const ref = this;
    // console.log($('#city').val())
    const tempObject: any = ref.formData.value;
    ref.requestJson = tempObject;
    console.log(JSON.stringify(ref.requestJson));

    ref.apiHandler.saveLead(ref.requestJson, (response: any) => {
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
    }
    );
  }


  oncitySelect() {
    const ref = this;
    console.log('oncitySelect')
    console.log($('#city').val())

  }


  onBack(){
    const ref = this;
    ref.location.back();
  }
}
