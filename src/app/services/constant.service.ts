import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConstantService {

  projectconstants = {
    version: "1.0",
    env: "Dev",
    gpsRadius: 50,
    systemDocFolder: "HomelaneVendorPortal"
  };

  rolesManagement = {
    vendorRole:"V",
    adminRole:"A",
    financeRole:"F",
  }
  rootUrl = "";

  webservices = {
        // menu-role/
    getMenuList                     :'menu-role/getMenuList',
    getMenuByRole                   :'menu-role/getMenuByRole',

    // common-master/
    getMenuRoleMaster: 'common-master/getMenuRoleMaster',
    getUserCreationMaster: 'common-master/getUserCreationMaster',
    getInvitationMaster:'common-master/getInvitationMaster',
    getLeadGenerationMaster:'common-master/getLeadGenerationMaster',
    getRegistrationMaster: 'common-master/getRegistrationMaster',
    getQueryMaster: 'common-master/getQueryMaster',

    //  user/
    getUserDetails: 'user/getUserDetails',
    updatePassword: 'user/updatePassword',
    authentication: 'user/authentication',
    saveUser: 'user/saveUser',
    getUserList: 'user/getUserList',
    forgotPassword:'user/forgotPassword',
    validateForgotPwdLink:'user/validateForgotPwdLink',
    updateForcePassword:'user/updateForcePassword',
    getProfileDetails:'user/getProfileDetails',
    
    // vendor /
    viewProfile :'vendor/viewProfile',
    getVendorAccess : 'vendor/getVendorAccess',
    vendorAccessAction : 'vendor/vendorAccessAction',
    viewVendor : 'vendor/viewVendor',

    // invitation/
    saveVendorInvitation:'vendor-invitation/saveVendorInvitation',
    getInvitationList:'vendor-invitation/getInvitationList',
    sendInvitation:'vendor-invitation/sendInvitation',
    getInvitationById:'vendor-invitation/getInvitationById',

    // lead-generate/
    saveLead:'lead-generate/saveLead',
    getLeadUserList:'lead-generate/getLeadUserList',
    getLeadUserDetails: 'lead-generate/getLeadUserDetails',
    leadAction: 'lead-generate/leadAction',

    // vendor-registration/
    validateRegLink: 'vendor-registration/validateRegLink',
    saveRegDetails: 'vendor-registration/saveRegDetails',
    getRegistrationList: 'vendor-registration/getRegistrationList',
    viewRegistration: 'vendor-registration/viewRegistration',
    viewFile: 'vendor-registration/viewFile',
    updateRegDetails:'vendor-registration/updateRegDetails',
    regAction:'vendor-registration/regAction',
    viewFilepkId:'vendor-registration/viewFile?pkId=',
    // query/
    saveQuery: 'query/saveQuery',
    getQueryList: 'query/getQueryList',
    viewQueryDetails: 'query/viewQueryDetails',
    getTopAnswers: 'query/getTopAnswers',
    saveAnswer: 'query/saveAnswer',

    //Quotation
    getQuotationList                    :'quotation/getQuotationList',
    viewQuotationDetails                :'quotation/viewQuotationDetails',
    saveQuotationDetails                :'quotation/saveQuotationDetails',
    getQuotationHistory                 :'quotation/getQuotationHistory',
    quotationApprovalslist              :'quotation/getQuotApprovalList',
    quotAction                          :'quotation/quotAction',
    //order
    getOrders                             :'purchase-order/getOrders',
    viewOrder                             :'purchase-order/viewOrder',
    orderAction                           :'purchase-order/orderAction',
    viewASNDetails                        :'purchase-order/viewASNDetails',

      //dispatch
      orderDispachList                    :'dispatch/orderDispachList',
      viewDispatch                        :'dispatch/viewDispatch',
      // menu
      saveRoleMenuAndActions1             :'menu-role/saveRoleMenuAndActions',

      //dashboard
      viewDashboard                        :'user/viewDashboard'
  };

  successMessage = {
    "successMSG1": "Your form has been submitted successfully"
  };

  errorMessage = {
    "errorMSG1": "Unable to reach server. Please try again after sometime"
  }


  constructor() {
    if (window.location.host == "localhost:4200") {
     // this.rootUrl = "http://localhost:4200/";

      // this.rootUrl = "http://localhost:8082/GarwareCustomerPortal/";
      this.rootUrl = "http://localhost:8081/";
    } else {
      this.rootUrl = window.location.protocol + "//" + window.location.host + window.location.pathname;
     // this.rootUrl = window.location.protocol +"//"+ window.location.host + "/gpl_customer/";
    }
  }
}
