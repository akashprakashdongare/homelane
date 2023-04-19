import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiHandlerService } from 'src/app/services/api-handler.service';
import { Constant } from 'src/app/services/constant.utils';
import { Location } from '@angular/common';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
declare var $: any;
@Component({
  selector: 'app-lead-generation-view',
  templateUrl: './lead-generation-view.component.html',
  styleUrls: ['./lead-generation-view.component.css']
})
export class LeadGenerationViewComponent implements OnInit {

  leadUserList = [];
  selectedItem: any = null;
  responseJson = {
    pkLeadId: '', compName: '', emailId: '', createdOn: '', status: '', city: '', cityOthers: '',
    contactUsOther: '', firmTypeOther: '', contactUs: '', creditCapacity: '', empStrength: '',
    expInteriorReno: '', firmType: '', serviceType: '', serviceCategoty: '', turnOver: '', mobileNo: '',
    reqEmailId: '', serviceCategoryOther: '', serviceProviderOther: '', cityArray: '', serProviderTypeArray: ''
    , firstName:'', lastName: '' 
  }

  requestJson={
    pkLeadId:'', action:'',emailId:'', firstName:''
  }

  alertResponse = { message: '', status: '', route: '' };

  constructor(public router: Router, private apiHandler: ApiHandlerService, private http: HttpClient,
    private location: Location, public dialog: MatDialog, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    const ref = this;
    ref.selectedItem = ref.activatedRoute.snapshot.params['id'];
    console.log('index:::' + ref.selectedItem);
    ref.callApi();
  }

  callApi() {
    const ref = this;
    ref.apiHandler.getLeadUserList((response: any) => {
      console.log(JSON.stringify(response))
      if (response.sts === Constant.SUCCESS_STATUS) {
        ref.leadUserList = response.content;
      } else {
        ref.leadUserList = [];
      }

    }, (error: HttpErrorResponse) => {
      console.log(error);
      ref.leadUserList = [];
    });

    ref.apiHandler.getLeadUserDetails(ref.selectedItem, (response: any) => {
      console.log(JSON.stringify(response))
      if (response.sts === Constant.SUCCESS_STATUS) {
        ref.responseJson = response.content;
      }
    }, (error: HttpErrorResponse) => {
      console.log(error);
    });

  }
  onSelectLead(){
    const ref = this;
    setTimeout(() => {
      ref.apiHandler.getLeadUserDetails(ref.selectedItem, (response: any) => {
        console.log(JSON.stringify(response))
        if (response.sts === Constant.SUCCESS_STATUS) {
          const tempObject:any = response.content;
           ref.responseJson = tempObject;
          // ref.responseJson.contactUs = tempObject.contactUs;
          //   ref.responseJson.firstName = tempObject.firstName;
          //    ref.responseJson.lastName = tempObject.lastName;
          //     ref.responseJson.compName = tempObject.compName;
          //     ref.responseJson.emailId = tempObject.emailId;
          //     ref.responseJson.reqEmailId = tempObject.reqEmailId;
          //     ref.responseJson.mobileNo = tempObject.mobileNo;
          //     ref.responseJson.serviceCategoty = tempObject.serviceCategoty;
          //       ref.responseJson.firmType = tempObject.firmType;
          //       ref.responseJson.turnOver = tempObject.turnOver;
          //       ref.responseJson.empStrength = tempObject.empStrength;
          //       ref.responseJson.creditCapacity = tempObject.creditCapacity;
          //       ref.responseJson.expInteriorReno = tempObject.expInteriorReno;
              

             

          // ref.responseJson.city=tempObject.cityArray.toString();
          // ref.responseJson.serProviderTypeArray=tempObject.serProviderTypeArray.toString();
          // let tempCity=[];
          // for(let item of tempObject.cityArray){
          //   tempCity.push(item.value);
          // }
         
          // let tempserProviderType=[];
          // for(let item of tempObject.serProviderTypeArray){
          //   tempserProviderType.push(item.value);
          // }
          // setTimeout(() => {
          //   ref.responseJson.cityArray=tempCity.toString();
          // ref.responseJson.serProviderTypeArray=tempserProviderType.toString();
          // }, 500);
           
        }
      }, (error: HttpErrorResponse) => {
        console.log(error);
      });
    }, 600);
 
  }

  onAction(action:string,json:any){
    const ref=this;

    if(action==='A'){
      ref.requestJson.action=Constant.APPROVAL_STATUS;
    }else if(action==='R'){
      ref.requestJson.action=Constant.REJECT_STATUS;
    }else {
      ref.requestJson.action=Constant.HOLD_STATUS;
    }

    ref.requestJson.pkLeadId=json.pkLeadId
    ref.requestJson.firstName=json.firstName
    ref.requestJson.emailId=json.emailId

    console.log('requestJson==> '+JSON.stringify(ref.requestJson))
    
    ref.apiHandler.leadAction(ref.requestJson,(response:any)=>{

   console.log(JSON.stringify(response));
      setTimeout(() => {
        $('#alertMsg').modal('show');
      }, 1000);
      if (response.sts === Constant.SUCCESS_STATUS) {
        ref.alertResponse.message = Constant.SUCCESS_MESSAGE;
        ref.alertResponse.route = 'main-layout/leadGeneration';
      } else {
        ref.alertResponse.message = response.msg;
      }
      ref.alertResponse.status = response.sts;
    },(error:HttpErrorResponse)=>{
      setTimeout(() => {
        $('#alertMsg').modal('show');
      }, 1000);
      ref.alertResponse.message=Constant.ERROR_MESSAGE;
      ref.alertResponse.status=Constant.ERROR_STATUS;
      ref.alertResponse.route='';
      console.log(error);
    });
  }
}
