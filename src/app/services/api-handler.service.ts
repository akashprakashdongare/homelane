import { HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { ConstantService } from './constant.service';
import { UtilService } from './util.service';

@Injectable({
  providedIn: 'root'
})
export class ApiHandlerService {

  constructor(
    public constantService: ConstantService,
    public utilService: UtilService
  ) { }
  getUserDetails(userId:string, onSuccess: any, onError: any) {
    let params= new HttpParams().append('userId',userId);
    // params=params.append('name',userId);
    var url = this.constantService.rootUrl + this.constantService.webservices.getUserDetails;
    this.utilService.callGetParamsAPI(url,params, function (successCallback: any) {
      onSuccess(successCallback);
    }, function (errorCallback: any) {
      onError(errorCallback)
    });
  }


  getMenuList( onSuccess: any, onError: any) {
   
    var url = this.constantService.rootUrl + this.constantService.webservices.getMenuList;
    this.utilService.callGetApi(url, function (successCallback: any) {
      onSuccess(successCallback);
    }, function (errorCallback: any) {
      onError(errorCallback)
    });
  }

  getMenuByRole(roleId:string, onSuccess: any, onError: any) {
    let params= new HttpParams().append('roleId',roleId);
    // params=params.append('name',userId);
    var url = this.constantService.rootUrl + this.constantService.webservices.getMenuByRole;
    this.utilService.callGetParamsAPI(url,params, function (successCallback: any) {
      onSuccess(successCallback);
    }, function (errorCallback: any) {
      onError(errorCallback)
    });
  }


  saveRoleMenuAndActions(obj:any,onSuccess: any, onError: any) {
   
    var url = this.constantService.rootUrl + this.constantService.webservices.getMenuList;
    this.utilService.callPostAPI(url, obj,function (successCallback: any) {
      onSuccess(successCallback);
    }, function (errorCallback: any) {
      onError(errorCallback)
    });
  }

  
  getMenuRoleMaster( onSuccess: any, onError: any) {
    var url = this.constantService.rootUrl + this.constantService.webservices.getMenuRoleMaster;
    this.utilService.callGetApi(url, function (successCallback: any) {
      onSuccess(successCallback);
    }, function (errorCallback: any) {
      onError(errorCallback)
    });
  }
  
  updatePassword(obj:any,onSuccess: any, onError: any) {
    var url = this.constantService.rootUrl + this.constantService.webservices.updatePassword;
    this.utilService.callPostAPI(url, obj,function (successCallback: any) {
      onSuccess(successCallback);
    }, function (errorCallback: any) {
      onError(errorCallback)
    });
  }

  
  authentication(obj:any,onSuccess: any, onError: any) {
    var url = this.constantService.rootUrl + this.constantService.webservices.authentication;
    this.utilService.callPostAPI(url, obj,function (successCallback: any) {
      onSuccess(successCallback);
    }, function (errorCallback: any) {
      onError(errorCallback)
    });
  }

 
  saveUser(obj:any,onSuccess: any, onError: any) {
    var url = this.constantService.rootUrl + this.constantService.webservices.saveUser;
    this.utilService.callPostAPI(url, obj,function (successCallback: any) {
      onSuccess(successCallback);
    }, function (errorCallback: any) {
      onError(errorCallback)
    });
  }

  
  getUserCreationMaster( onSuccess: any, onError: any) {
    var url = this.constantService.rootUrl + this.constantService.webservices.getUserCreationMaster;
    this.utilService.callGetApi(url, function (successCallback: any) {
      onSuccess(successCallback);
    }, function (errorCallback: any) {
      onError(errorCallback)
    });
  }

  getUserList( onSuccess: any, onError: any) {
    var url = this.constantService.rootUrl + this.constantService.webservices.getUserList;
    this.utilService.callGetApi(url, function (successCallback: any) {
      onSuccess(successCallback);
    }, function (errorCallback: any) {
      onError(errorCallback)
    });
  }

  forgotPassword(userId:string, onSuccess: any, onError: any) {
    let params= new HttpParams().append('userId',userId);
    // params=params.append('name',userId);
    var url = this.constantService.rootUrl + this.constantService.webservices.forgotPassword;
    this.utilService.callGetParamsAPI(url,params, function (successCallback: any) {
      onSuccess(successCallback);
    }, function (errorCallback: any) {
      onError(errorCallback)
    });
  }

  saveVendorInvitation(obj:any,onSuccess: any, onError: any) {
    var url = this.constantService.rootUrl + this.constantService.webservices.saveVendorInvitation;
    this.utilService.callPostAPI(url, obj,function (successCallback: any) {
      onSuccess(successCallback);
    }, function (errorCallback: any) {
      onError(errorCallback)
    });
  }
  getInvitationList( onSuccess: any, onError: any) {
    var url = this.constantService.rootUrl + this.constantService.webservices.getInvitationList;
    this.utilService.callGetApi(url, function (successCallback: any) {
      onSuccess(successCallback);
    }, function (errorCallback: any) {
      onError(errorCallback)
    });
  }
  getInvitationMaster( onSuccess: any, onError: any) {
    var url = this.constantService.rootUrl + this.constantService.webservices.getInvitationMaster;
    this.utilService.callGetApi(url, function (successCallback: any) {
      onSuccess(successCallback);
    }, function (errorCallback: any) {
      onError(errorCallback)
    });
  }
  sendInvitation(obj:any,onSuccess: any, onError: any) {
    var url = this.constantService.rootUrl + this.constantService.webservices.sendInvitation;
    this.utilService.callPostAPI(url, obj,function (successCallback: any) {
      onSuccess(successCallback);
    }, function (errorCallback: any) {
      onError(errorCallback)
    });
  }
  getInvitationById(pkId:any, onSuccess: any, onError: any) {
    let params= new HttpParams().append('pkId',pkId);
    // params=params.append('name',userId);
    var url = this.constantService.rootUrl + this.constantService.webservices.getInvitationById;
    this.utilService.callGetParamsAPI(url,params, function (successCallback: any) {
      onSuccess(successCallback);
    }, function (errorCallback: any) {
      onError(errorCallback)
    });
  }

  saveLead(obj:any,onSuccess: any, onError: any) {
    var url = this.constantService.rootUrl + this.constantService.webservices.saveLead;
    this.utilService.callPostAPI(url, obj,function (successCallback: any) {
      onSuccess(successCallback);
    }, function (errorCallback: any) {
      onError(errorCallback)
    });
  }

  
  getLeadGenerationMaster( onSuccess: any, onError: any) {
    var url = this.constantService.rootUrl + this.constantService.webservices.getLeadGenerationMaster;
    this.utilService.callGetApi(url, function (successCallback: any) {
      onSuccess(successCallback);
    }, function (errorCallback: any) {
      onError(errorCallback)
    });
  }

  getLeadUserList( onSuccess: any, onError: any) {
    var url = this.constantService.rootUrl + this.constantService.webservices.getLeadUserList;
    this.utilService.callGetApi(url, function (successCallback: any) {
      onSuccess(successCallback);
    }, function (errorCallback: any) {
      onError(errorCallback)
    });
  }
  
  getLeadUserDetails(pkLeadId:any, onSuccess: any, onError: any) {
    let params= new HttpParams().append('pkLeadId',pkLeadId);
    // params=params.append('name',userId);
    var url = this.constantService.rootUrl + this.constantService.webservices.getLeadUserDetails;
    this.utilService.callGetParamsAPI(url,params, function (successCallback: any) {
      onSuccess(successCallback);
    }, function (errorCallback: any) {
      onError(errorCallback)
    });
  }


  leadAction(obj:any,onSuccess: any, onError: any) {
    var url = this.constantService.rootUrl + this.constantService.webservices.leadAction;
    this.utilService.callPostAPI(url, obj,function (successCallback: any) {
      onSuccess(successCallback);
    }, function (errorCallback: any) {
      onError(errorCallback)
    });
  }

  validateRegLink(requestNo:any, onSuccess: any, onError: any) {
    let params= new HttpParams().append('requestNo',requestNo);
    // params=params.append('name',userId);
    var url = this.constantService.rootUrl + this.constantService.webservices.validateRegLink;
    this.utilService.callGetParamsAPI(url,params, function (successCallback: any) {
      onSuccess(successCallback);
    }, function (errorCallback: any) {
      onError(errorCallback)
    });
  }

  // getRegistrationMaster( onSuccess: any, onError: any) {
  //   var url = this.constantService.rootUrl + this.constantService.webservices.getRegistrationMaster;
  //   this.utilService.callGetApi(url, function (successCallback: any) {
  //     onSuccess(successCallback);
  //   }, function (errorCallback: any) {
  //     onError(errorCallback)
  //   });
  // }

  getRegistrationMaster(obj:any,onSuccess: any, onError: any) {
    var url = this.constantService.rootUrl + this.constantService.webservices.getRegistrationMaster;
    this.utilService.callPostAPI(url, obj,function (successCallback: any) {
      onSuccess(successCallback);
    }, function (errorCallback: any) {
      onError(errorCallback)
    });
  }

  
  saveRegDetails(obj:any,onSuccess: any, onError: any) {
    var url = this.constantService.rootUrl + this.constantService.webservices.saveRegDetails;
    this.utilService.callPostFileAPI(url, obj,function (successCallback: any) {
      onSuccess(successCallback);
    }, function (errorCallback: any) {
      onError(errorCallback)
    });
  }


  
  getRegistrationList( onSuccess: any, onError: any) {
    var url = this.constantService.rootUrl + this.constantService.webservices.getRegistrationList;
    this.utilService.callGetApi(url, function (successCallback: any) {
      onSuccess(successCallback);
    }, function (errorCallback: any) {
      onError(errorCallback)
    });
  }

  viewRegistration(regId:any, onSuccess: any, onError: any) {
    let params= new HttpParams().append('regId',regId);
    // params=params.append('name',userId);
    var url = this.constantService.rootUrl + this.constantService.webservices.viewRegistration;
    this.utilService.callGetParamsAPI(url,params, function (successCallback: any) {
      onSuccess(successCallback);
    }, function (errorCallback: any) {
      onError(errorCallback)
    });
  }

 


  // viewFile2(pkId:any,fileType:string) {
  //   var url = this.constantService.rootUrl + this.constantService.webservices.viewFile+'?pkId='+pkId;
  //   console.log(url);
    // if(fileType==='PDF'){
    //   return this.utilService.callGetPdfFileAPI(url);
    // }
    // if(fileType==='XLSX'){
    //   return this.utilService.callGetExcelFileAPI(url);
    // }
    // if(fileType==='PNG'){
    //   return this.utilService.callGetImageFileAPI(url);
    // }
    
  // }

  
  saveQuery(obj:any,onSuccess: any, onError: any) {
    var url = this.constantService.rootUrl + this.constantService.webservices.saveQuery;
    this.utilService.callPostFileAPI(url, obj,function (successCallback: any) {
      onSuccess(successCallback);
    }, function (errorCallback: any) {
      onError(errorCallback)
    });
  }

    
  getQueryList( onSuccess: any, onError: any) {
    var url = this.constantService.rootUrl + this.constantService.webservices.getQueryList;
    this.utilService.callGetApi(url, function (successCallback: any) {
      onSuccess(successCallback);
    }, function (errorCallback: any) {
      onError(errorCallback)
    });
  }

  
  getQueryMaster( onSuccess: any, onError: any) {
    var url = this.constantService.rootUrl + this.constantService.webservices.getQueryMaster;
    this.utilService.callGetApi(url, function (successCallback: any) {
      onSuccess(successCallback);
    }, function (errorCallback: any) {
      onError(errorCallback)
    });
  }

  
  viewQueryDetails(queryId:any, onSuccess: any, onError: any) {
    let params= new HttpParams().append('queryId',queryId);
    // params=params.append('name',userId);
    var url = this.constantService.rootUrl + this.constantService.webservices.viewQueryDetails;
    this.utilService.callGetParamsAPI(url,params, function (successCallback: any) {
      onSuccess(successCallback);
    }, function (errorCallback: any) {
      onError(errorCallback)
    });
  }

  getTopAnswers(queryId:any, onSuccess: any, onError: any) {
    let params= new HttpParams().append('queryId',queryId);
    // params=params.append('name',userId);
    var url = this.constantService.rootUrl + this.constantService.webservices.getTopAnswers;
    this.utilService.callGetParamsAPI(url,params, function (successCallback: any) {
      onSuccess(successCallback);
    }, function (errorCallback: any) {
      onError(errorCallback)
    });
  }

  saveAnswer(obj:any,onSuccess: any, onError: any) {
    var url = this.constantService.rootUrl + this.constantService.webservices.saveAnswer;
    this.utilService.callPostAPI(url, obj,function (successCallback: any) {
      onSuccess(successCallback);
    }, function (errorCallback: any) {
      onError(errorCallback)
    });
  }
///........shrikant.............

  getQuotationList( onSuccess: any, onError: any) {
    var url = this.constantService.rootUrl + this.constantService.webservices.getQuotationList;
    this.utilService.callGetApi(url, function (successCallback: any) {
      onSuccess(successCallback);
    }, function (errorCallback: any) {
      onError(errorCallback)
    });
  }

  viewQuotationDetails(obj:any, onSuccess: any, onError: any) {
    let params= new HttpParams().append('quotationNo',obj);
    // params=params.append('name',userId);
    var url = this.constantService.rootUrl + this.constantService.webservices.viewQuotationDetails;
    this.utilService.callGetParamsAPI(url,params, function (successCallback: any) {
      onSuccess(successCallback);
    }, function (errorCallback: any) {
      onError(errorCallback)
    });
  }

  saveQuotationDetails(obj:any,onSuccess: any, onError: any) {
    var url = this.constantService.rootUrl + this.constantService.webservices.saveQuotationDetails;
    this.utilService.callPostAPI(url, obj,function (successCallback: any) {
      onSuccess(successCallback);
    }, function (errorCallback: any) {
      onError(errorCallback)
    });
  }

  getQuotationHistory( onSuccess: any, onError: any) {
    var url = this.constantService.rootUrl + this.constantService.webservices.getQuotationHistory;
    this.utilService.callGetApi(url, function (successCallback: any) {
      onSuccess(successCallback);
    }, function (errorCallback: any) {
      onError(errorCallback)
    });
  }

  getOrders( onSuccess: any, onError: any) {
    var url = this.constantService.rootUrl + this.constantService.webservices.getOrders;
    this.utilService.callGetApi(url, function (successCallback: any) {
      onSuccess(successCallback);
    }, function (errorCallback: any) {
      onError(errorCallback)
    });
  }

  viewOrder(obj:any, onSuccess: any, onError: any) {
    let params= new HttpParams().append('pono',obj);
    // params=params.append('name',userId);
    var url = this.constantService.rootUrl + this.constantService.webservices.viewOrder;
    this.utilService.callGetParamsAPI(url,params, function (successCallback: any) {
      onSuccess(successCallback);
    }, function (errorCallback: any) {
      onError(errorCallback)
    });
  }

  orderAction(obj:any,onSuccess: any, onError: any) {
    var url = this.constantService.rootUrl + this.constantService.webservices.orderAction;
    this.utilService.callPostAPI(url, obj,function (successCallback: any) {
      onSuccess(successCallback);
    }, function (errorCallback: any) {
      onError(errorCallback)
    });
  }

  
  orderDispachList(onSuccess: any, onError: any) {
    var url = this.constantService.rootUrl + this.constantService.webservices.orderDispachList;
    this.utilService.callGetApi(url, function (successCallback: any) {
      onSuccess(successCallback);
    }, function (errorCallback: any) {
      onError(errorCallback)
    });
  }

  viewDispatch(obj:any, onSuccess: any, onError: any) {
    let params= new HttpParams().append('pono',obj[1]).append('pkDispatchId',obj[0]);
    // params=params.append('name',userId);
    var url = this.constantService.rootUrl + this.constantService.webservices.viewDispatch;
    this.utilService.callGetParamsAPI(url,params, function (successCallback: any) {
      onSuccess(successCallback);
    }, function (errorCallback: any) {
      onError(errorCallback)
    });
  }

  updateRegDetails(obj:any,onSuccess: any, onError: any) {
    var url = this.constantService.rootUrl + this.constantService.webservices.updateRegDetails;
    this.utilService.callPostFileAPI(url, obj,function (successCallback: any) {
      onSuccess(successCallback);
    }, function (errorCallback: any) {
      onError(errorCallback)
    });
  }

  regAction(obj:any,onSuccess: any, onError: any) {
    var url = this.constantService.rootUrl + this.constantService.webservices.regAction;
    this.utilService.callPostAPI(url, obj,function (successCallback: any) {
      onSuccess(successCallback);
    }, function (errorCallback: any) {
      onError(errorCallback)
    });
  }

  validateForgotPwdLink(userId:string, onSuccess: any, onError: any){
    let params= new HttpParams().append('reqNo',userId);
    // params=params.append('name',userId);
    var url = this.constantService.rootUrl + this.constantService.webservices.validateForgotPwdLink;
    this.utilService.callGetParamsAPI(url,params, function (successCallback: any) {
      onSuccess(successCallback);
    }, function (errorCallback: any) {
      onError(errorCallback)
    });
  }

  updateForcePassword(obj:any,onSuccess: any, onError: any){
    var url = this.constantService.rootUrl + this.constantService.webservices.updateForcePassword;
    this.utilService.callPostAPI(url, obj,function (successCallback: any) {
      onSuccess(successCallback);
    }, function (errorCallback: any) {
      onError(errorCallback)
    });
  }

  getProfileDetails(obj:any,onSuccess: any, onError: any){
    let params= new HttpParams().append('userId',obj[1]).append('userType',obj[0]);
    // params=params.append('name',userId);
    var url = this.constantService.rootUrl + this.constantService.webservices.getProfileDetails;
    this.utilService.callGetParamsAPI(url,params, function (successCallback: any) {
      onSuccess(successCallback);
    }, function (errorCallback: any) {
      onError(errorCallback)
    });
  }

  viewProfile(onSuccess: any, onError: any){
    // params=params.append('name',userId);
    var url = this.constantService.rootUrl + this.constantService.webservices.viewProfile;
    this.utilService.callGetApi(url, function (successCallback: any) {
      onSuccess(successCallback);
    }, function (errorCallback: any) {
      onError(errorCallback)
    });
  }

  saveRoleMenuAndActions1(obj:any,onSuccess: any, onError: any){
    var url = this.constantService.rootUrl + this.constantService.webservices.saveRoleMenuAndActions1;
    this.utilService.callPostAPI(url, obj,function (successCallback: any) {
      onSuccess(successCallback);
    }, function (errorCallback: any) {
      onError(errorCallback)
    });
  }

  viewDashboard(obj:any,onSuccess: any, onError: any){
    let params= new HttpParams().append('type',obj);
    // params=params.append('name',userId);
    var url = this.constantService.rootUrl + this.constantService.webservices.viewDashboard;
    this.utilService.callGetParamsAPI(url,params, function (successCallback: any) {
      onSuccess(successCallback);
    }, function (errorCallback: any) {
      onError(errorCallback)
    });
  }

  getVendorAccess(onSuccess: any, onError: any){
    // params=params.append('name',userId);
    var url = this.constantService.rootUrl + this.constantService.webservices.getVendorAccess;
    this.utilService.callGetApi(url, function (successCallback: any) {
      onSuccess(successCallback);
    }, function (errorCallback: any) {
      onError(errorCallback)
    });
  }

  vendorAccessAction(obj:any,onSuccess: any, onError: any) {
    var url = this.constantService.rootUrl + this.constantService.webservices.vendorAccessAction;
    this.utilService.callPostAPI(url, obj,function (successCallback: any) {
      onSuccess(successCallback);
    }, function (errorCallback: any) {
      onError(errorCallback)
    });
  }

  viewVendor(vendorCode:any, onSuccess: any, onError: any) {
    let params= new HttpParams().append('vendorCode',vendorCode);
    // params=params.append('name',userId);
    var url = this.constantService.rootUrl + this.constantService.webservices.viewVendor;
    this.utilService.callGetParamsAPI(url,params, function (successCallback: any) {
      onSuccess(successCallback);
    }, function (errorCallback: any) {
      onError(errorCallback)
    });
  }

  quotationApprovalslist(onSuccess: any, onError: any){
    var url = this.constantService.rootUrl + this.constantService.webservices.quotationApprovalslist;
    this.utilService.callGetApi(url, function (successCallback: any) {
      onSuccess(successCallback);
    }, function (errorCallback: any) {
      onError(errorCallback)
    });
  }

  quotAction(obj:any,onSuccess: any, onError: any) {
    var url = this.constantService.rootUrl + this.constantService.webservices.quotAction;
    this.utilService.callPostAPI(url, obj,function (successCallback: any) {
      onSuccess(successCallback);
    }, function (errorCallback: any) {
      onError(errorCallback)
    });
  }

  viewASNDetails(obj:string, onSuccess: any, onError: any) {
    let params= new HttpParams().append('pono',obj);
    // params=params.append('name',userId);
    var url = this.constantService.rootUrl + this.constantService.webservices.viewASNDetails;
    this.utilService.callGetParamsAPI(url,params, function (successCallback: any) {
      onSuccess(successCallback);
    }, function (errorCallback: any) {
      onError(errorCallback)
    });
  }
}
