(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<router-outlet></router-outlet>\r\n\r\n\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/change-password/change-password.component.html":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/change-password/change-password.component.html ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- BEGIN: Content-->\n\n  <div class=\"content-wrapper\">\n    <div class=\"content-header row mb-2\"><!--border-bottom-blue-grey border-bottom-lighten-5 -->\n      <div class=\"content-header-left col-md-12 col-12 pl-2\">\n          <h3 class=\"content-header-title mb-0\"><i class=\"feather icon-unlock text-warning\"></i> Change Password</h3>\n      </div>\n    </div>\n    <div class=\"content-body\">\n      <div class=\"row\">\n        <div class=\"col-md-6 offset-md-3\">\n          <div class=\"card\">\n            <div class=\"card-body\">\n              <div class=\"row align-items-center h-100\">\n                <div class=\"col-md-6 border-right-blue-grey border-right-lighten-5\">\n                  <form #submitForm=\"ngForm\" (ngSubmit)=\"submitResult(submitForm)\" >\n                  <div class=\"row\">\n                     \n                    <div class=\"col-md-12\">\n                      <p class=\"page-title\">Please Set New Password</p>\n                    </div>\n                    <div class=\"col-md-12\">\n                      <div class=\"form-group mb-50 row\">\n                        <label class=\"col-md-12 col-form-label\">Old Password</label>\n                        <div class=\"col-md-12\">\n                          <input type=\"password\"class=\"form-control form-control-sm\"  aria-label=\"Old Password\"\n                           [ngClass]=\"{invalid:!valid}\" name=\"oldPassword\" #oldPassword=\"ngModel\" required [(ngModel)]=\"submitObject.oldPassword\"  class=\"form-control form-control-sm\" aria-label=\"Old Password\">\n                        </div>\n                      </div>\n                      <div class=\"errormsg\" *ngIf=\"!oldPassword.value && oldPassword.touched || !oldPassword.value && !valid\">\n                          Please enter old password.\n                      </div>\n                    </div>\n                    <div class=\"col-md-12\">\n                      <div class=\"form-group mb-50 row\">\n                        <label class=\"col-md-12 col-form-label\">New Password</label>\n                        <div class=\"col-md-12\">\n                          <input type=\"password\" class=\"form-control form-control-sm\"  aria-label=\"New Password\"\n                          [ngClass]=\"{invalid:!valid}\" name=\"newPassword\" #newPassword=\"ngModel\" required [(ngModel)]=\"submitObject.newPassword\">\n                        </div>\n                      </div>\n                      <div class=\"errormsg\" *ngIf=\"!newPassword.value && newPassword.touched || !newPassword.value && !valid\">\n                          Please enter new password.\n                      </div>\n                    </div>\n                    <div class=\"col-md-12\">\n                      <div class=\"form-group mb-50 row\">\n                        <label class=\"col-md-12 col-form-label\">Confirm Password</label>\n                        <div class=\"col-md-12\">\n                          <input type=\"password\"  class=\"form-control form-control-sm\"  aria-label=\"Confirm Password\"\n                          [ngClass]=\"{invalid:!valid}\" name=\"confirmPassword\" #confirmPassword=\"ngModel\" required [(ngModel)]=\"submitObject.confirmPassword\">\n                        </div>\n                      </div>\n                      <div class=\"errormsg\" *ngIf=\"!confirmPassword.value && confirmPassword.touched || !confirmPassword.value && !valid\">\n                          Please enter confirm password.\n                      </div>\n                    </div>\n                    <div class=\"col-md-12 text-right\">\n                      <!-- <button type=\"button\" class=\"btn btn-secondary round btn-min-width btn-darken-1 shadow mr-1\" (click)=\"submitResult()\">Reset</button> -->\n                      <button  type=\"submit\"  class=\"btn btn-success round btn-min-width btn-darken-1 shadow\">Save</button>\n                    </div>\n                  </div>\n                </form>\n\n                </div>\n                <div class=\"col-md-6\">\n                  <p class=\"text-danger\">Passwords must Contain:</p>\n                  <ul class=\"text-danger pl-1\">\n                    <li>At least 6 characters</li>\n                    <li>At least 1 upper case letter (A..Z)</li>\n                    <li>At least 1 lower case letter (a..z)</li>\n                    <li>At least 1 number (0..9)</li>\n                  </ul>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <!-- END: Content-->\n  \n<!-- alertMsg -->\n<div class=\"modal fade\" id=\"alertMsg1\" data-backdrop=\"static\" data-keyboard=\"false\" tabindex=\"-1\" role=\"dialog\"\naria-labelledby=\"exampleModalCenterTitle\" aria-hidden=\"true\">\n<div class=\"modal-dialog modal-dialog-centered modal-sm\" role=\"document\">\n <div class=\"modal-content text-center\">\n    <!--Header-->\n    <!--Body-->\n    <div class=\"modal-body\">\n       <p class=\"mb-2\"><i\n          [ngClass]=\"[ alertFlag === 'success' ? 'feather icon-bell font-large-4 text-success' : 'feather icon-bell font-large-4 text-danger']\"></i>\n       </p>\n       <h6  [innerHTML]=\"alertMessage\"></h6>\n    </div>\n    <!--Footer-->\n    <div class=\"modal-footer d-flex justify-content-center\">\n       <button  type=\"button\" class=\"btn btn-primary\"\n       (click)=\"okAlert()\">Ok</button>\n    </div>\n </div>\n</div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/customer-invitation/customer-invitation.component.html":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/customer-invitation/customer-invitation.component.html ***!
  \********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"content-wrapper\">\r\n  <div class=\"content-header row mb-2\">\r\n    <div class=\"content-header-left col-md-6 col-12 mb-1\">\r\n      <h3 class=\"content-header-title mb-0\"><i class=\"feather icon-users text-warning\"></i> Invitation</h3>\r\n    </div>\r\n    <div class=\"content-header-right text-md-right col-md-6 col-12 mb-md-0 mb-0\">\r\n      <div class=\"form-group mb-0\">\r\n        <a class=\"btn btn-outline-primary\" (click)=\"onCreate()\"><i class=\"feather icon-user-plus fa-lg\"></i> Add</a>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"content-body\">\r\n    <div class=\"card\">\r\n      <div class=\"card-body\">\r\n        <div class=\"table-responsive\">\r\n          <table id=\"userInvitationlist\" class=\"table table-sm table-bordered table-hover mb-0\" style=\"width:100%;\">\r\n            <thead>\r\n              <tr>\r\n                <th class=\"text-center\">Action</th>\r\n                <th>Status</th>\r\n                <th>Vendor Code</th>\r\n                <th>Vendor Type</th>\r\n                <th>Company Name</th>\r\n                <th>First Name</th>\r\n                <th>Last Name</th>\r\n                <th class=\"text-center\">Mobile No</th>\r\n                <th>Email Id</th>\r\n                <th>Invited</th>\r\n                <th>Invited On</th>\r\n                <th>Invited By </th>\r\n                <!-- <th>Invited By </th>  -->\r\n              </tr>\r\n            </thead>\r\n            <tbody>\r\n              <tr *ngFor=\"let user of invitationList\">\r\n                <td class=\"text-center text-nowrap\">\r\n                  <a [class.disabled]=\"user.vendorCode != ''\" class=\"btn btn-sm btn-link mr-50 p-0\" title=\"Edit\" (click)=\"onEdit(user)\"><i\r\n                      class=\"feather icon-edit font-medium-1 text-secondary \"></i></a>\r\n                  <!-- <a class=\"btn-link mr-50\" title=\"Edit\" [routerLink]=\"['update/'+user.userId]\"><i class=\"feather icon-edit font-medium-1 text-secondary\"></i></a> -->\r\n                  <a [class.disabled]=\"user.vendorCode != ''\" class=\"btn btn-sm btn-link mr-50 p-0\" title=\"Mail\" (click)=\"open_invitation_popup(user)\"><i\r\n                      class=\"feather icon-mail font-medium-1 text-primary\"></i></a>\r\n                  <a [class.disabled]=\"user.vendorCode != ''\" class=\"btn btn-sm btn-link p-0\" title=\"Delete\" (click)=\"onDeleteCofirm(user)\"><i\r\n                      class=\"feather icon-trash-2 font-medium-1 text-danger\"></i></a>\r\n\r\n                </td>\r\n                <td class=\"text-nowrap\">{{user.invtStatus}}</td>\r\n                <td class=\"text-center\">{{user.vendorCode}}</td>\r\n                <td class=\"text-center\">{{user.vendorTypeDes}}</td>\r\n                <td>{{user.name}}</td>\r\n                <td>{{user.firstName}}</td>\r\n                <td> {{user.lastName}}</td>\r\n                <td class=\"text-center\">{{user.mobileNo}}</td>\r\n                <td>{{user.emailId}}</td>\r\n                <td class=\"text-center\">\r\n                  <span *ngIf=\"user.isInvited.toLowerCase().trim() == 'y'\">Yes</span>\r\n                  <span *ngIf=\"user.isInvited.toLowerCase().trim() == 'n'\">No</span>\r\n                </td>\r\n                <td class=\"text-center\">{{user.invitedOn|date:'dd-MM-yyyy'}}</td>\r\n                <td class=\"text-nowrap\">{{user.invitedByF}} {{user.invitedByL}}</td>\r\n                <!-- <td></td> -->\r\n              </tr>\r\n\r\n            </tbody>\r\n          </table>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<!-- Lock/Unlock popup-->\r\n<div class=\"modal fade\" id=\"alertInvitation\" data-backdrop=\"static\" tabindex=\"-1\" role=\"dialog\"\r\n  aria-labelledby=\"exampleModalCenterTitle456\" aria-hidden=\"true\">\r\n  <div class=\"modal-dialog modal-dialog-centered modal-sm\" role=\"document\">\r\n    <div class=\"modal-content text-center\">\r\n      <!--Header-->\r\n      <!--Body-->\r\n      <div class=\"modal-body\">\r\n        <p class=\"mb-2\"><i class=\"feather icon-mail font-large-4 text-primary\"></i>\r\n        </p>\r\n        <h6> Do you want to send the invitation ?</h6>\r\n      </div>\r\n      <!--Footer-->\r\n      <div class=\"modal-footer d-flex justify-content-center\">\r\n        <button type=\"button\" class=\"btn btn-primary\" (click)=\"yes_invitation()\">Yes</button>\r\n        <button type=\"button\" class=\"btn btn-dark\" data-dismiss=\"modal\" (click)=\"no_invitation()\">No</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<!-- Delete popup -->\r\n<div class=\"modal fade\" id=\"alertDelete\" data-backdrop=\"static\" tabindex=\"-1\" role=\"dialog\"\r\n  aria-labelledby=\"exampleModalCenterTitle\" aria-hidden=\"true\">\r\n  <div class=\"modal-dialog modal-dialog-centered modal-sm\" role=\"document\">\r\n    <div class=\"modal-content text-center\">\r\n      <!--Header-->\r\n      <!--Body-->\r\n      <div class=\"modal-body\">\r\n        <p class=\"mb-2\"><i class=\"feather icon-trash-2 font-large-4 text-danger\"></i>\r\n        </p>\r\n        <h6>Are you sure you want to Delete ?</h6>\r\n      </div>\r\n      <!--Footer-->\r\n      <div class=\"modal-footer d-flex justify-content-center\">\r\n        <button type=\"button\" class=\"btn btn-primary\" (click)=\"onDeleteYes()\">Yes</button>\r\n        <button type=\"button\" class=\"btn btn-dark\" data-dismiss=\"modal\" (click)=\"onDeleteNo()\">No</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"modal fade\" id=\"alertMsg\" data-backdrop=\"static\" data-keyboard=\"false\" tabindex=\"-1\" role=\"dialog\"\r\n  aria-labelledby=\"exampleModalCenterTitle\" aria-hidden=\"true\">\r\n  <div class=\"modal-dialog modal-dialog-centered modal-sm\" role=\"document\">\r\n    <div class=\"modal-content text-center\">\r\n      <div class=\"modal-body\">\r\n\r\n        <p class=\"mb-2\"><i\r\n            [ngClass]=\"[ alertResponse.status === 'success' ? 'feather icon-bell font-large-4 text-success' : 'feather icon-bell font-large-4 text-danger']\"></i>\r\n        </p>\r\n\r\n        <h6>{{alertResponse.message}}</h6>\r\n\r\n      </div>\r\n      <div class=\"modal-footer d-flex justify-content-center\">\r\n        <button *ngIf=\"alertResponse.status === 'success'\" type=\"button\" class=\"btn btn-primary\"\r\n          (click)=\"okAlert()\">Ok</button>\r\n        <button *ngIf=\"alertResponse.status !== 'success'\" type=\"button\" class=\"btn btn-primary\"\r\n          data-dismiss=\"modal\">Ok</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n\r\n<div class=\"modal fade\" id=\"createOrUpdateUserInvitation\" data-backdrop=\"static\" tabindex=\"-1\" role=\"dialog\"\r\n  aria-labelledby=\"exampleModalCenterTitle\" aria-hidden=\"true\">\r\n  <div class=\"modal-dialog modal-dialog-centered modal-lg\" role=\"document\">\r\n    <div class=\"modal-content\">\r\n      <!--Header-->\r\n      <div class=\"modal-header\">\r\n        <h5 class=\"modal-title\" id=\"staticBackdropLabel\">Vendor Invitation</h5>\r\n        <!-- <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n            <span aria-hidden=\"true\">&times;</span>\r\n          </button> -->\r\n      </div>\r\n      <!--Body-->\r\n      <div class=\"modal-body\">\r\n        <form [formGroup]=\"formData\">\r\n          <div class=\"row\">\r\n\r\n            <div class=\"col-md-12\">\r\n              <!-- <p class=\"page-title\">Please Create New Invitation</p> -->\r\n            </div>\r\n            <div class=\"col-xl-4 col-lg-4 col-md-4\">\r\n              <div class=\"form-group mb-50 row\">\r\n                <label class=\"col-md-12 col-form-label\">Company Name <span class=\"text-danger\">*</span></label>\r\n                <div class=\"col-md-12\">\r\n                  <input type=\"text\" formControlName=\"name\" class=\"form-control form-control-sm\" aria-label=\"User Name\"\r\n                    aria-describedby=\"basic-addon1\">\r\n                </div>\r\n              </div>\r\n              <span class=\"errormsg \" *ngIf=\"formData.controls.name.hasError('required') && \r\n                (formData.controls.name.dirty || formData.controls.name.touched)\">Please enter company name.</span>\r\n            </div>\r\n            <div class=\"col-xl-4 col-lg-4 col-md-4\">\r\n              <div class=\"form-group mb-50 row\">\r\n                <label class=\"col-md-12 col-form-label\"> First Name <span class=\"text-danger\">*</span></label>\r\n                <div class=\"col-md-12\">\r\n                  <input type=\"text\" formControlName=\"firstName\" class=\"form-control form-control-sm\"\r\n                    aria-label=\"User Name\" aria-describedby=\"basic-addon1\">\r\n                </div>\r\n              </div>\r\n              <span class=\"errormsg \" *ngIf=\"formData.controls.firstName.hasError('required') && \r\n                (formData.controls.firstName.dirty || formData.controls.firstName.touched)\">Please enter first\r\n                name.</span>\r\n            </div>\r\n            <div class=\"col-xl-4 col-lg-4 col-md-4\">\r\n              <div class=\"form-group mb-50 row\">\r\n                <label class=\"col-md-12 col-form-label\"> Last Name <span class=\"text-danger\">*</span></label>\r\n                <div class=\"col-md-12\">\r\n                  <input type=\"text\" formControlName=\"lastName\" class=\"form-control form-control-sm\"\r\n                    aria-label=\"User Name\" aria-describedby=\"basic-addon1\">\r\n                </div>\r\n              </div>\r\n              <span class=\"errormsg \" *ngIf=\"formData.controls.lastName.hasError('required') && \r\n                (formData.controls.lastName.dirty || formData.controls.lastName.touched)\">Please enter last\r\n                name.</span>\r\n            </div>\r\n\r\n            <div class=\"col-xl-4 col-lg-4 col-md-4\">\r\n              <div class=\"form-group mb-50 row\">\r\n                <label class=\"col-md-12 col-form-label\">Vendor Type. <span class=\"text-danger\">*</span></label>\r\n                <div class=\"col-md-12\">\r\n                  <!-- <input type=\"number\"  class=\"form-control form-control-sm\" aria-label=\"Mobile No.\"> -->\r\n                  <select formControlName=\"vendorType\" class=\"custom-select custom-select-sm\">\r\n                    <option value=\"\">Select</option>\r\n                    <option *ngFor=\"let type of vendorTypeList\" value=\"{{type.code}}\">\r\n                      {{type.value}}\r\n                    </option>\r\n                  </select>\r\n                </div>\r\n              </div>\r\n              <span class=\"errormsg \" *ngIf=\"formData.controls.vendorType.hasError('required') && \r\n                (formData.controls.vendorType.dirty || formData.controls.vendorType.touched)\">Please select vendor\r\n                type.</span>\r\n\r\n            </div>\r\n\r\n            <div class=\"col-xl-4 col-lg-4 col-md-4\">\r\n              <div class=\"form-group mb-50 row\">\r\n                <label class=\"col-md-12 col-form-label\">Email <span class=\"text-danger\">*</span></label>\r\n                <div class=\"col-md-12\">\r\n                  <input type=\"text\" formControlName=\"emailId\" class=\"form-control form-control-sm\" aria-label=\"Email\"\r\n                    aria-describedby=\"basic-addon1\">\r\n                </div>\r\n              </div>\r\n              <span class=\"errormsg \" *ngIf=\"formData.controls.emailId.hasError('required') && \r\n                (formData.controls.emailId.dirty || formData.controls.emailId.touched)\">Please enter email.</span>\r\n              <span class=\"errormsg \" *ngIf=\"formData.controls.emailId.hasError('pattern') && \r\n                !formData.controls.emailId.hasError('required') &&\r\n                (formData.controls.emailId.dirty && formData.controls.emailId.touched)\">Invalid Email.</span>\r\n            </div>\r\n            <!-- <div class=\"w-100\"></div> -->\r\n\r\n\r\n            <div class=\"col-xl-4 col-lg-4 col-md-4\">\r\n              <div class=\"form-group mb-50 row\">\r\n                <label class=\"col-md-12 col-form-label\">Mobile No. <span class=\"text-danger\">*</span></label>\r\n                <div class=\"col-md-12\">\r\n                  <input type=\"number\" formControlName=\"mobileNo\" class=\"form-control form-control-sm\"\r\n                    aria-label=\"Mobile No.\">\r\n                </div>\r\n              </div>\r\n              <span class=\"errormsg \" *ngIf=\"formData.controls.mobileNo.hasError('required') && \r\n                (formData.controls.mobileNo.dirty || formData.controls.mobileNo.touched)\">Please enter mobile\r\n                no.</span>\r\n              <span class=\"errormsg \" *ngIf=\"formData.controls.mobileNo.hasError('pattern') && \r\n                !formData.controls.mobileNo.hasError('required') &&\r\n                (formData.controls.mobileNo.dirty && formData.controls.mobileNo.touched)\">Mobile number must be 10\r\n                digit long.</span>\r\n            </div>\r\n\r\n          </div>\r\n          <!-- </div> -->\r\n          <!--Footer-->\r\n          <div class=\"modal-footer d-flex justify-content-right\">\r\n            <!-- <button  type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Close</button>\r\n          <button  type=\"button\" class=\"btn btn-primary\" >Search</button> -->\r\n            <button type=\"button\" data-dismiss=\"modal\"\r\n              class=\"btn btn-secondary round btn-min-width btn-darken-1 shadow mr-50\">Close</button>\r\n            <button type=\"button\" [disabled]=\"formData.invalid\" (click)=\"onSubmit()\"\r\n              class=\"btn btn-success round btn-min-width btn-darken-1 shadow\">\r\n              {{createFlag?'Submit':'Update'}} </button>\r\n          </div>\r\n        </form>\r\n      </div>\r\n    </div>\r\n  </div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/dashboard/dashboard.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/dashboard/dashboard.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"content-wrapper\"  *ngIf=\"loginDetails.roleId == roleV\">\r\n    <div class=\"content-body\">\r\n      <!-- Stats -->\r\n      <div class=\"row\">\r\n          <div class=\"col-xl-3 col-lg-6 col-12\">\r\n              <div class=\"card\">\r\n                  <div class=\"card-content\">\r\n                      <div class=\"media align-items-stretch\">\r\n                          <div class=\"p-2 text-center bg-primary bg-darken-2\">\r\n                              <i class=\"fa-solid fa-file-invoice font-large-2 white\"></i>\r\n                          </div>\r\n                          <div class=\"px-1 pt-2 media-body\">\r\n                            <h3 class=\"heading-text text-bold-600\">{{viewObject.quotationCount}}</h3>\r\n                            <p class=\"sub-heading\">Quotation</p>\r\n                          </div>\r\n                      </div>\r\n                  </div>\r\n              </div>\r\n          </div>\r\n          <div class=\"col-xl-3 col-lg-6 col-12\">\r\n              <div class=\"card\">\r\n                  <div class=\"card-content\">\r\n                      <div class=\"media align-items-stretch\">\r\n                          <div class=\"p-2 text-center bg-danger bg-darken-2\">\r\n                              <i class=\"fa-solid fa-file-signature font-large-2 white\"></i>\r\n                          </div>\r\n                          <div class=\"px-1 pt-2 media-body\">\r\n                            <h3 class=\"heading-text text-bold-600\">{{viewObject.poCount}}</h3>\r\n                            <p class=\"sub-heading\">Purchase Order</p>\r\n                          </div>\r\n                      </div>\r\n                  </div>\r\n              </div>\r\n          </div>\r\n          <div class=\"col-xl-3 col-lg-6 col-12\">\r\n              <div class=\"card\">\r\n                  <div class=\"card-content\">\r\n                      <div class=\"media align-items-stretch\">\r\n                          <div class=\"p-2 text-center bg-warning bg-darken-2\">\r\n                              <i class=\"fa-solid fa-people-carry-box font-large-2 white\"></i>\r\n                          </div>\r\n                          <div class=\"px-1 pt-2 media-body\">\r\n                            <h3 class=\"heading-text text-bold-600\">{{viewObject.dispatchCount}}</h3>\r\n                            <p class=\"sub-heading\">Dispatch</p>\r\n                          </div>\r\n                      </div>\r\n                  </div>\r\n              </div>\r\n          </div>\r\n          <div class=\"col-xl-3 col-lg-6 col-12\">\r\n              <div class=\"card\">\r\n                  <div class=\"card-content\">\r\n                      <div class=\"media align-items-stretch\">\r\n                          <div class=\"p-2 text-center bg-success bg-darken-2\">\r\n                              <i class=\"fa-solid fa-comments font-large-2 white\"></i>\r\n                          </div>\r\n                          <div class=\"px-1 pt-2 media-body\">\r\n                            <h3 class=\"heading-text text-bold-600\">{{viewObject.queryCount}}</h3>\r\n                            <p class=\"sub-heading\">Queries</p>\r\n                          </div>\r\n                      </div>\r\n                  </div>\r\n              </div>\r\n          </div>\r\n      </div>\r\n      <!--/ Stats -->\r\n  <!-- Image -->\r\n      <div class=\"card mb-0 dashboard-bg\">\r\n        <div class=\"card-body\">\r\n          <div class=\"row\">\r\n            <div class=\"col-xl-5\">\r\n              <h3 class=\"dashboard-title\">WELCOME TO <span class=\"dashboard-title1\">iVen</span></h3>\r\n              <!-- <h1 class=\"dashboard-title1\">iVen</h1> -->\r\n            </div>\r\n            <div class=\"col-xl-7 text-right\">\r\n              <img class=\"img-fluid\" src=\"assets/img/homelane-dashboard2.png\" alt=\"Dashboard\" width=\"auto\" height=\"\">\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n  <!-- Image -->\r\n\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"content-wrapper\" *ngIf=\"loginDetails.roleId == roleA\">\r\n    <div class=\"content-body\">\r\n      <!-- Stats -->\r\n      <div class=\"row\">\r\n          <div class=\"col-xl-3 col-lg-6 col-12\">\r\n              <div class=\"card\">\r\n                  <div class=\"card-content\">\r\n                      <div class=\"media align-items-stretch\">\r\n                          <div class=\"p-2 text-center bg-primary bg-darken-2\">\r\n                              <i class=\"icon-user font-large-2 white\"></i>\r\n                          </div>\r\n                          <div class=\"px-1 pt-2 media-body\">\r\n                            <h3 class=\"heading-text text-bold-600\">{{viewObject.vendorCount}}</h3>\r\n                            <p class=\"sub-heading\">Vendor Request</p>\r\n                          </div>\r\n                      </div>\r\n                  </div>\r\n              </div>\r\n          </div>\r\n          <div class=\"col-xl-3 col-lg-6 col-12\">\r\n              <div class=\"card\">\r\n                  <div class=\"card-content\">\r\n                      <div class=\"media align-items-stretch\">\r\n                          <div class=\"p-2 text-center bg-danger bg-darken-2\">\r\n                              <i class=\"fa-solid fa-people-arrows-left-right font-large-2 white\"></i>\r\n                          </div>\r\n                          <div class=\"px-1 pt-2 media-body\">\r\n                            <h3 class=\"heading-text text-bold-600\">{{viewObject.leadCount}}</h3>\r\n                            <p class=\"sub-heading\">Lead Request</p>\r\n                          </div>\r\n                      </div>\r\n                  </div>\r\n              </div>\r\n          </div>\r\n          <!-- <div class=\"col-xl-3 col-lg-6 col-12\">\r\n              <div class=\"card\">\r\n                  <div class=\"card-content\">\r\n                      <div class=\"media align-items-stretch\">\r\n                          <div class=\"p-2 text-center bg-warning bg-darken-2\">\r\n                              <i class=\"icon-basket-loaded font-large-2 white\"></i>\r\n                          </div>\r\n                          <div class=\"px-1 pt-2 media-body\">\r\n                            <h3 class=\"heading-text text-bold-600\">{{viewObject.poCount}}</h3>\r\n                            <p class=\"sub-heading\">Purchase Orders</p>\r\n                          </div>\r\n                      </div>\r\n                  </div>\r\n              </div>\r\n          </div> -->\r\n           <div class=\"col-xl-3 col-lg-6 col-12\">\r\n              <div class=\"card\">\r\n                  <div class=\"card-content\">\r\n                      <div class=\"media align-items-stretch\">\r\n                          <div class=\"p-2 text-center bg-primary bg-darken-2\">\r\n                              <i class=\"fa-solid fa-file-invoice font-large-2 white\"></i>\r\n                          </div>\r\n                          <div class=\"px-1 pt-2 media-body\">\r\n                            <h3 class=\"heading-text text-bold-600\">{{viewObject.quotationCount}}</h3>\r\n                            <p class=\"sub-heading\">Quotation Request</p>\r\n                          </div>\r\n                      </div>\r\n                  </div>\r\n              </div>\r\n          </div>\r\n          <div class=\"col-xl-3 col-lg-6 col-12\">\r\n              <div class=\"card\">\r\n                  <div class=\"card-content\">\r\n                      <div class=\"media align-items-stretch\">\r\n                          <div class=\"p-2 text-center bg-success bg-darken-2\">\r\n                              <i class=\"fa-solid fa-comments font-large-2 white\"></i>\r\n                          </div>\r\n                          <div class=\"px-1 pt-2 media-body\">\r\n                            <h3 class=\"heading-text text-bold-600\">{{viewObject.queryCount}}</h3>\r\n                            <p class=\"sub-heading\">Queries</p>\r\n                          </div>\r\n                      </div>\r\n                  </div>\r\n              </div>\r\n          </div>\r\n      </div>\r\n  <!-- Image -->\r\n\r\n      <div class=\"card mb-0 dashboard-bg\">\r\n        <div class=\"card-body\">\r\n          <div class=\"row\">\r\n            <div class=\"col-xl-5\">\r\n              <!-- <h3 class=\"dashboard-title\">WELCOME TO</h3>\r\n              <h1 class=\"dashboard-title1\">iVen</h1> -->\r\n              <h3 class=\"dashboard-title\">WELCOME TO <span class=\"dashboard-title1\">iVen</span></h3>\r\n              <!-- <h1 class=\"dashboard-title1\">iVen</h1> -->\r\n            </div>\r\n            <div class=\"col-xl-7 text-right\">\r\n              <img class=\"img-fluid\" src=\"assets/img/homelane-dashboard2.png\" alt=\"Dashboard\" width=\"auto\" height=\"\">\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n  <!-- Image -->\r\n\r\n  \r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"content-wrapper\" *ngIf=\"loginDetails.roleId == roleF\">\r\n    <div class=\"content-body\">\r\n      <!-- Stats -->\r\n      <div class=\"row\">\r\n          <div class=\"col-xl-3 col-lg-6 col-12\">\r\n              <div class=\"card\">\r\n                  <div class=\"card-content\">\r\n                      <div class=\"media align-items-stretch\">\r\n                          <div class=\"p-2 text-center bg-primary bg-darken-2\">\r\n                              <i class=\"icon-user font-large-2 white\"></i>\r\n                          </div>\r\n                          <div class=\"px-1 py-2 media-body\">\r\n                              <h5> Vendor Request</h5>\r\n                              <!-- <h5 class=\"text-bold-400 mb-0\"><i class=\"feather icon-plus\"></i> 28</h5> -->\r\n                              <h5 class=\"text-bold-400 mb-0\"> {{viewObject.vendorCount}}</h5>\r\n                          </div>\r\n                      </div>\r\n                  </div>\r\n              </div>\r\n          </div>\r\n          <div class=\"col-xl-3 col-lg-6 col-12\">\r\n              <div class=\"card\">\r\n                  <div class=\"card-content\">\r\n                      <div class=\"media align-items-stretch\">\r\n                          <div class=\"p-2 text-center bg-danger bg-darken-2\">\r\n                              <i class=\"fa-solid fa-people-arrows-left-right font-large-2 white\"></i>\r\n                          </div>\r\n                          <div class=\"px-1 py-2 media-body\">\r\n                              <h5>Lead Request</h5>\r\n                              <h5 class=\"text-bold-400 mb-0\">{{viewObject.leadCount}}</h5>\r\n                          </div>\r\n                      </div>\r\n                  </div>\r\n              </div>\r\n          </div>\r\n          <div class=\"col-xl-3 col-lg-6 col-12\">\r\n              <div class=\"card\">\r\n                  <div class=\"card-content\">\r\n                      <div class=\"media align-items-stretch\">\r\n                          <div class=\"p-2 text-center bg-warning bg-darken-2\">\r\n                              <i class=\"icon-basket-loaded font-large-2 white\"></i>\r\n                          </div>\r\n                          <div class=\"px-1 py-2 media-body\">\r\n                              <h5>Purchase Orders</h5>\r\n                              <h5 class=\"text-bold-400 mb-0\">{{viewObject.poCount}}</h5>\r\n                          </div>\r\n                      </div>\r\n                  </div>\r\n              </div>\r\n          </div>\r\n          <div class=\"col-xl-3 col-lg-6 col-12\">\r\n              <div class=\"card\">\r\n                  <div class=\"card-content\">\r\n                      <div class=\"media align-items-stretch\">\r\n                          <div class=\"p-2 text-center bg-success bg-darken-2\">\r\n                              <i class=\"fa-solid fa-comments font-large-2 white\"></i>\r\n                          </div>\r\n                          <div class=\"px-1 py-2 media-body\">\r\n                              <h5>Queries</h5>\r\n                              <h5 class=\"text-bold-400 mb-0\">{{viewObject.queryCount}}</h5>\r\n                          </div>\r\n                      </div>\r\n                  </div>\r\n              </div>\r\n          </div>\r\n      </div>\r\n  <!-- Image -->\r\n\r\n      <div class=\"card mb-0 dashboard-bg\">\r\n        <div class=\"card-body\">\r\n          <div class=\"row\">\r\n            <div class=\"col-xl-5\">\r\n              <!-- <h3 class=\"dashboard-title\">WELCOME TO</h3>\r\n              <h1 class=\"dashboard-title1\">iVen</h1> -->\r\n              <h3 class=\"dashboard-title\">WELCOME TO <span class=\"dashboard-title1\">iVen</span></h3>\r\n              <!-- <h1 class=\"dashboard-title1\">iVen</h1> -->\r\n            </div>\r\n            <div class=\"col-xl-7 text-right\">\r\n              <img class=\"img-fluid\" src=\"assets/img/homelane-dashboard2.png\" alt=\"Dashboard\" width=\"auto\" height=\"\">\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n  <!-- Image -->\r\n\r\n  \r\n    </div>\r\n  </div>\r\n  \r\n  ");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/dialog-box/dialog-box.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/dialog-box/dialog-box.component.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section fxLayout=\"column\"    fxLayoutAlign=\"center center\">\n    <h2 mat-dialog-title fxLayoutGap=\"20px\" >\n        <i\n    \n                      class=\"feather icon-trash-2 font-large-4 text-danger\"></i>\n    </h2>\n    <mat-dialog-content  fxLayoutAlign=\"center center\" fxLayoutGap=\"10px\">\n        <h6>Are you sure you want to Delete ?</h6>\n    </mat-dialog-content>\n    \n    <mat-card-actions>\n        <div class=\"d-flex justify-content-center\">\n        <button type=\"button\" class=\"btn btn-cust-primary\" (click)=\"onConfirm('Yes')\">Yes</button>\n    \n        <button type=\"button\" class=\"btn btn-dark\"  (click)=\"onConfirm('No')\">No</button>\n        </div>\n    </mat-card-actions>\n    </section>\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/dispatch-order-list/dispatch-order-list.component.html":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/dispatch-order-list/dispatch-order-list.component.html ***!
  \********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"content-wrapper\">\n    <div class=\"content-header row mb-2\">\n        <div class=\"content-header-left col-md-6 col-12 mb-1\">\n            <h3 class=\"content-header-title mb-0\"><i class=\"fa-solid fa-people-carry-box text-warning\"></i> Dispatch </h3>\n        </div>\n        \n    </div>\n    <div class=\"content-body\">\n      <div class=\"card mb-0\">\n        <div class=\"card-body\">\n          <div class=\"table-responsive\">\n            <table id=\"dispatchlist\" class=\"table table-sm table-bordered table-hover mb-0\" style=\"width:100%;\">\n              <thead>\n                <tr>\n                  <th class=\"text-center\">Action</th>\n                  <th class=\"text-center\">Po No</th>\n                  <th class=\"text-center\">Lr No</th>\n                  <th class=\"text-center\">Lr Date</th>\n                  <th class=\"text-center\">Invoice No</th>\n                  <th class=\"text-center\">Invoice Date</th>\n                  <th class=\"text-center\">Transporter</th>\n                </tr>\n              </thead>\n              <tbody>\n                <tr *ngFor=\"let item of dispatchOrderList\">\n                  <td class=\"text-center\"><a (click)=\"view(item)\" class=\"btn-link mr-50\" title=\"View\"><i class=\"feather icon-eye font-medium-1 \"></i></a></td>\n                  <td class=\"text-center\">{{item.pono}}</td>\n                  <td class=\"text-center\">{{item.lrNo}}</td>\n                  <td class=\"text-center\">{{item.lrDate}}</td>\n                  <td class=\"text-center\">{{item.invoiceNo}}</td>\n                  <td class=\"text-center\">{{item.invoiceDate}}</td>\n                  <td class=\"text-center\">{{item.transporter}}</td>\n                </tr>\n              \n              </tbody>\n            </table>\n          </div>\n        </div>\n      </div>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/dispatch-view/dispatch-view.component.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/dispatch-view/dispatch-view.component.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"content-wrapper\">\n    <div class=\"content-header row mb-2\">\n        <div class=\"content-header-left col-md-6 col-12 mb-1\">\n            <h3 class=\"content-header-title mb-0\"><i class=\"feather icon-users text-warning\"></i> Dispatch Details</h3>\n        </div>\n        <!-- <div class=\"content-header-right text-md-right col-md-6 col-12 mb-md-0 mb-0\">\n          <div class=\"form-group mb-0\">\n              <a class=\"btn btn-outline-primary\" data-toggle=\"modal\" data-target=\"#createquery\"><i class=\"feather icon-plus-square fa-lg\"></i> Raise Query</a>\n          </div>\n        </div> -->\n    </div>\n    <div class=\"content-body\">\n      <div class=\"card mb-0\">\n        <div class=\"card-body\">\n          <div class=\"row\">\n            <!-- <div class=\"col-xl-4 col-lg-4 col-md-4\">\n              <div class=\"form-group mb-50\">\n                <label><b>Quotation No. :</b> {{quotationView.quotationNo}}</label>\n              </div>\n            </div>\n            <div class=\"col-xl-4 col-lg-4 col-md-4\">\n              <div class=\"form-group mb-50\">\n                <label><b>Creation Date :</b> {{quotationView.openingDate}}</label>\n              </div>\n            </div>\n            <div class=\"col-xl-4 col-lg-4 col-md-4\">\n              <div class=\"form-group mb-50\">\n                <label><b>Expiry Date :</b> {{quotationView.closeDate}}</label>\n              </div>\n            </div> -->\n            <div class=\"col-md-12\">\n              <div class=\"table-responsive\">\n                <table id=\"dispatchlistView\" class=\"table table-sm table-bordered table-hover mb-0\" style=\"width:100%;\">\n                  <thead>\n                    <tr>\n                      <th style=\"width:12%;\" class=\"text-center\">Po No</th>\n                      <th style=\"width:12%;\" class=\"text-center\">Material Code</th>\n                      <th style=\"width:12%;\" class=\"text-right\">Dispatch Qty</th>\n                      <th style=\"width:16%;\" class=\"text-right\">Item No</th>\n                      <th style=\"width:11%;\" class=\"text-center\">Created On</th>\n                      <!-- <th style=\"width:11%;\" class=\"text-center\">Freight</th>\n                      <th style=\"width:11%;\" class=\"text-center\">Est Del Date</th> -->\n                    </tr>\n                  </thead>\n                  <tbody>\n                    <tr *ngFor=\"let item of dispatchView\">\n                      <td class=\"text-center\">{{item.poNo}}</td>\n                      <td class=\"text-center\">{{item.materialCode}}</td>\n                      <td class=\"text-right\">{{item.dispatchQty}}</td>\n                      <td class=\"text-right\">{{item.itemNo}}</td>\n                      <td class=\"text-center\">{{item.createdOn}}</td><!--new aaded-->\n                      <!-- <td class=\"p-50\"><input type=\"number\" (change)=\"priceChange(item)\"  [(ngModel)]=\"item.tempprice\" class=\"form-control form-control-sm text-right\"/></td>\n                      <td class=\"p-50\"><input type=\"text\" [(ngModel)]=\"item.freight\" class=\"form-control form-control-sm text-right\"/></td> -->\n\n                      <!-- <td class=\"p-50\"><input type=\"text\" [(ngModel)]=\"item.tempestDelDate\" class=\"form-control form-control-sm\"\n                        bsDatepicker [bsConfig]=\"datePickerConfig\" autocomplete=\"off\" name=\"\" readonly /></td> -->\n                    </tr>\n                  \n                  </tbody>\n                </table>\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"card-footer p-50\">\n          <div class=\"row\">\n            <div class=\"col-md-12 text-right\">\n              <button type=\"button\" class=\"btn btn-light round btn-min-width  mr-50\" (click)='back()'>Back</button>\n\n              <!-- <button type=\"button\" class=\"btn btn-secondary round btn-min-width btn-darken-2 shadow mr-50\" (click)='back()'>Back</button> -->\n              <!-- <button type=\"submit\" (click)=\"submitResult()\" class=\"btn btn-success round btn-min-width btn-darken-1 shadow\">Submit</button> -->\n            </div>\n          </div>\n        </div>\n\n      </div>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/force-change-password/force-change-password.component.html":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/force-change-password/force-change-password.component.html ***!
  \************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (" <!-- BEGIN: Content-->\n\n    <!-- END: Content-->\n    <!-- New -->\n    <div class=\"setpassword-bg\">\n      <div class=\"container\">\n        <div class=\"row align-items-center\" style=\"height:100vh;\">\n          <div class=\"col-md-12 p-0\">\n            <div class=\"card bg-white-md-none bg-panel-setpassword shadow-lg mb-0\">\n              <div class=\"card-body p-0\">\n                <div class=\"row\" style=\"height:85vh;min-height:auto;\">\n                  <div class=\"col-md-4\">\n                    <div class=\"card mb-0\" style=\"height:85vh;min-height:auto;\">\n                      <div class=\"card-body\">\n                        <form class=\"form-vertical\" #submitForm=\"ngForm\" (ngSubmit)=\"submitResult(submitForm)\">\n                        <div class=\"row\">\n                       \n                          <div class=\"col-sm-10 offset-sm-1 setpassword-page\">\n                            <div class=\"mt-0 mb-2 text-center\" (click)=\"navigateTo()\" >\n                              <img  src=\"assets/img/homelane-logo.png\" />\n                            </div>\n                            <!-- <h6 class=\"setpassword-title-3 text-center mt-1 mb-1\">Set Password</h6> -->\n                            <div class=\"mt-2\">\n                              <div class=\"form-group\">\n                                <div class=\"input-group\">\n                                  <input type=\"password\" class=\"form-control\" placeholder=\"Old Password\" aria-label=\"Old Password\"  aria-describedby=\"basic-addon1\"\n                                  [ngClass]=\"{invalid:!valid}\" name=\"oldPassword\" #oldPassword=\"ngModel\" required [(ngModel)]=\"submitObject.oldPassword\" >\n                                    <div class=\"input-group-prepend\">\n                                      <span class=\"input-group-text\" id=\"basic-addon1\"><i class=\"feather icon-user\"></i></span>\n                                    </div>\n                                </div>\n                                <div class=\"errormsg\" *ngIf=\"!oldPassword.value && oldPassword.touched || !oldPassword.value && !valid\">\n                                  Please enter old password.\n                              </div>\n                              </div>\n                              <div class=\"form-group\">\n                                <div class=\"input-group\">\n                                  <input type=\"password\"  class=\"form-control\" placeholder=\"New Password\" aria-label=\"password\"  aria-describedby=\"basic-addon1\"\n                                  [ngClass]=\"{invalid:!valid}\" name=\"newPassword\" #newPassword=\"ngModel\" required [(ngModel)]=\"submitObject.newPassword\">\n                                    <div class=\"input-group-prepend\">\n                                      <span class=\"input-group-text\" id=\"basic-addon1\"><i class=\"feather icon-unlock\"></i></span>\n                                    </div>\n                                </div>\n                                <div class=\"errormsg\" *ngIf=\"!newPassword.value && newPassword.touched || !newPassword.value && !valid\">\n                                  Please enter new password.\n                                </div>\n                              </div>\n                              <div class=\"form-group\">\n                                <div class=\"input-group\">\n                                  <input type=\"password\" class=\"form-control\" placeholder=\"Confirm Password\" aria-label=\"password\"  aria-describedby=\"basic-addon1\"\n                                  [ngClass]=\"{invalid:!valid}\" name=\"confirmPassword\" #confirmPassword=\"ngModel\" required [(ngModel)]=\"submitObject.confirmPassword\">\n                                    <div class=\"input-group-prepend\">\n                                      <span class=\"input-group-text\" id=\"basic-addon1\"><i class=\"feather icon-lock\"></i></span>\n                                    </div>\n                                </div>\n                                <div class=\"errormsg\" *ngIf=\"!confirmPassword.value && confirmPassword.touched || !confirmPassword.value && !valid\">\n                                  Please enter confirm password.\n                                </div>\n                              </div>\n                            </div>\n                            <div class=\"form-group\">\n                              <button type=\"submit\" class=\"btn btn-setpassword round btn-min-width\">Submit</button>\n                            </div>\n                          </div>\n                          \n                          <div class=\"col-12\">\n                            <h5 class=\"text-powered text-center mt-5\">iVen - Powered by Intellect Bizware</h5>\n                          </div>\n                        </div>\n                        </form>\n                      </div>\n                    </div>\n                  </div>\n                  <div class=\"col-md-8 p-0 d-none d-md-block\">\n                    <div class=\"row align-items-center\" style=\"height:85vh;\">\n                      <div class=\"col-md-6\">\n                        <h1 class=\"setpassword-title mb-1\">Set your password</h1>\n                        <h1 class=\"setpassword-title-2 mb-1\">\n                          <ul class=\"pl-3\">\n                            <li>At least 6 characters</li>\n                            <li>At least 1 upper case letter (A..Z)</li>\n                            <li>At least 1 lower case letter (a..z)</li>\n                            <li>At least 1 number (0..9)</li>\n                          </ul>\n                        </h1>\n                      </div>\n                      <div class=\"col-md-6\">\n                        <img src=\"assets/img/set-password.png\" alt=\"\">\n                      </div>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n      </div>\n      \n    <!-- End -->\n<!-- alertMsg -->\n<div class=\"modal fade\" id=\"alertMsg1\" data-backdrop=\"static\" data-keyboard=\"false\" tabindex=\"-1\" role=\"dialog\"\naria-labelledby=\"exampleModalCenterTitle\" aria-hidden=\"true\">\n<div class=\"modal-dialog modal-dialog-centered modal-sm\" role=\"document\">\n   <div class=\"modal-content text-center\">\n      <!--Header-->\n      <!--Body-->\n      <div class=\"modal-body\">\n         <p class=\"mb-2\"><i\n            [ngClass]=\"[ alertFlag === 'success' ? 'feather icon-bell font-large-4 text-success' : 'feather icon-bell font-large-4 text-danger']\"></i>\n         </p>\n         <h6  [innerHTML]=\"alertMessage\"></h6>\n      </div>\n      <!--Footer-->\n      <div class=\"modal-footer d-flex justify-content-center\">\n         <button  type=\"button\" class=\"btn btn-primary\"\n         (click)=\"okAlert()\">Ok</button>\n      </div>\n   </div>\n</div>\n</div>\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/forgot-password/forgot-password.component.html":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/forgot-password/forgot-password.component.html ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"setpassword-bg\">\n    <div class=\"container\">\n      <div class=\"row align-items-center\" style=\"height:100vh;\">\n        <div class=\"col-md-12 p-0\">\n          <div class=\"card bg-white-md-none bg-panel-setpassword shadow-lg mb-0\">\n            <div class=\"card-body p-0\">\n              <div class=\"row\" style=\"height:85vh;min-height:auto;\">\n                <div class=\"col-md-4\">\n                  <div class=\"card mb-0\" style=\"height:85vh;min-height:auto;\">\n                    <div class=\"card-body\">\n                      <form class=\"form-vertical\" #submitForm=\"ngForm\" (ngSubmit)=\"submitResult(submitForm)\">\n                      <div class=\"row\">\n                     \n                        <div class=\"col-sm-10 offset-sm-1 setpassword-page\">\n                          <div class=\"mt-0 mb-2 text-center\">\n                            <img src=\"assets/img/homelane-logo.png\"/>\n                          </div>\n                          <h6 class=\"setpassword-title-3 text-center mt-1 mb-1\">Forget Password</h6>\n                          <div class=\"mt-2\">\n                            <!-- <div class=\"form-group\">\n                              <div class=\"input-group\">\n                                <input type=\"password\" class=\"form-control\" placeholder=\"Userid\" aria-label=\"Userid\" required aria-describedby=\"basic-addon1\">\n                                  <div class=\"input-group-prepend\">\n                                    <span class=\"input-group-text\" id=\"basic-addon1\"><i class=\"feather icon-user\"></i></span>\n                                  </div>\n                              </div>\n                              <div class=\"errormsg hidden\">\n                                  Please Enter  userid.\n                              </div>\n                            </div> -->\n                            <div class=\"form-group\">\n                              <div class=\"input-group\">\n                                <input type=\"password\"  class=\"form-control\" placeholder=\"New Password\" aria-label=\"password\"  aria-describedby=\"basic-addon1\"\n                                [ngClass]=\"{invalid:!valid}\" name=\"newPassword\" #newPassword=\"ngModel\" required [(ngModel)]=\"submitObject.newPassword\">\n                                  <div class=\"input-group-prepend\">\n                                    <span class=\"input-group-text\" id=\"basic-addon1\"><i class=\"feather icon-unlock\"></i></span>\n                                  </div>\n                              </div>\n                              <div class=\"errormsg\" *ngIf=\"!newPassword.value && newPassword.touched || !newPassword.value && !valid\">\n                                Please enter new password.\n                              </div>\n                            </div>\n                            <div class=\"form-group\">\n                              <div class=\"input-group\">\n                                <input type=\"password\" class=\"form-control\" placeholder=\"Confirm Password\" aria-label=\"password\"  aria-describedby=\"basic-addon1\"\n                                [ngClass]=\"{invalid:!valid}\" name=\"confirmPassword\" #confirmPassword=\"ngModel\" required [(ngModel)]=\"submitObject.confirmPassword\">\n                                  <div class=\"input-group-prepend\">\n                                    <span class=\"input-group-text\" id=\"basic-addon1\"><i class=\"feather icon-lock\"></i></span>\n                                  </div>\n                              </div>\n                              <div class=\"errormsg\" *ngIf=\"!confirmPassword.value && confirmPassword.touched || !confirmPassword.value && !valid\">\n                                Please enter confirm password.\n                              </div>\n                            </div>\n                          </div>\n                          <div class=\"form-group\">\n                            <button type=\"submit\" class=\"btn btn-setpassword round btn-min-width\">Submit</button>\n                          </div>\n                        </div>\n                        \n                        <div class=\"col-12\">\n                          <h5 class=\"text-powered text-center mt-5\">iVen - Powered by Intellect Bizware</h5>\n                        </div>\n                      </div>\n                      </form>\n                    </div>\n                  </div>\n                </div>\n                <div class=\"col-md-8 p-0 d-none d-md-block\">\n                  <div class=\"row align-items-center\" style=\"height:85vh;\">\n                    <div class=\"col-md-6\">\n                      <h1 class=\"setpassword-title mb-1\">Set your password</h1>\n                      <h1 class=\"setpassword-title-2 mb-1\">\n                        <ul class=\"pl-3\">\n                          <li>At least 6 characters</li>\n                          <li>At least 1 upper case letter (A..Z)</li>\n                          <li>At least 1 lower case letter (a..z)</li>\n                          <li>At least 1 number (0..9)</li>\n                        </ul>\n                      </h1>\n                    </div>\n                    <div class=\"col-md-6\">\n                      <img src=\"assets/img/set-password.png\" alt=\"\">\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n    </div>\n\n    \n<!-- alertMsg -->\n<div class=\"modal fade\" id=\"alertMsg1\" data-backdrop=\"static\" data-keyboard=\"false\" tabindex=\"-1\" role=\"dialog\"\naria-labelledby=\"exampleModalCenterTitle\" aria-hidden=\"true\">\n<div class=\"modal-dialog modal-dialog-centered modal-sm\" role=\"document\">\n   <div class=\"modal-content text-center\">\n      <!--Header-->\n      <!--Body-->\n      <div class=\"modal-body\">\n         <p class=\"mb-2\"><i\n            [ngClass]=\"[ alertFlag === 'success' ? 'feather icon-bell font-large-4 text-success' : 'feather icon-bell font-large-4 text-danger']\"></i>\n         </p>\n         <h6  [innerHTML]=\"alertMessage\"></h6>\n      </div>\n      <!--Footer-->\n      <div class=\"modal-footer d-flex justify-content-center\">\n         <button  type=\"button\" class=\"btn btn-primary\"\n         (click)=\"okAlert()\">Ok</button>\n      </div>\n   </div>\n</div>\n</div>\n\n    ");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/header/header.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/header/header.component.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (" <!-- BEGIN: Header-->\r\n <nav class=\"header-navbar navbar-expand-md navbar navbar-with-menu fixed-top navbar-light shadow\">\r\n  <div class=\"navbar-wrapper\">\r\n      <div class=\"navbar-header navbar-dark\">\r\n          <ul class=\"nav navbar-nav flex-row\">\r\n              <li class=\"nav-item mobile-menu d-md-none mr-auto\">\r\n                <a class=\"nav-link nav-menu-main menu-toggle hidden-xs\" href=\"#\"><i class=\"feather icon-menu font-large-1\"></i></a>\r\n              </li>\r\n              <li class=\"nav-item\">\r\n                <a class=\"navbar-brand\" (click)=\"navigateTo()\">\r\n                  <img class=\"brand-logo\" alt=\"Homelane Logo\" src=\"assets/img/homelane-logo-small.png\">\r\n                      <h2 class=\"brand-text\"><img alt=\"Homelane Logo\" src=\"assets/img/homelane-logo-light.png\"></h2>\r\n                  </a>\r\n                </li>\r\n              <li class=\"nav-item d-md-none\"><a class=\"nav-link open-navbar-container\" data-toggle=\"collapse\" data-target=\"#navbar-mobile\"><i class=\"fa fa-ellipsis-v\"></i></a></li>\r\n          </ul>\r\n      </div>\r\n      <div class=\"navbar-container content\">\r\n          <div class=\"collapse navbar-collapse\" id=\"navbar-mobile\">\r\n              <ul class=\"nav navbar-nav mr-auto float-left\">\r\n                  <li class=\"nav-item d-none d-md-block\">\r\n                    <a class=\"nav-link nav-menu-main menu-toggle hidden-xs\" href=\"#\"><i class=\"feather icon-menu\"></i></a>\r\n                  </li>\r\n              </ul>\r\n              <ul class=\"nav navbar-nav float-right\">\r\n                <!-- <li class=\"dropdown dropdown-notification nav-item\"><a class=\"nav-link nav-link-label\" href=\"#\" data-toggle=\"dropdown\"><i class=\"ficon feather icon-bell\"></i><span class=\"badge badge-pill badge-danger badge-up\">5</span></a>\r\n                    <ul class=\"dropdown-menu dropdown-menu-media dropdown-menu-right\">\r\n                        <li class=\"dropdown-menu-header\">\r\n                            <h6 class=\"dropdown-header m-0\"><span class=\"grey darken-2\">Notifications</span><span class=\"notification-tag badge badge-danger float-right m-0\">5 New</span></h6>\r\n                        </li>\r\n                    </ul>\r\n                </li> -->\r\n                  <li class=\"dropdown dropdown-user nav-item\"><a class=\"dropdown-toggle nav-link dropdown-user-link\" href=\"#\" data-toggle=\"dropdown\">\r\n                          <div class=\"avatar avatar-online\"><img src=\"assets/img/img-user.png\" alt=\"avatar\"><i></i></div><span class=\"user-name\">{{loginDetails.firstName}} {{loginDetails.lastName}} ({{loginDetails.roleName}})</span>\r\n                      </a>\r\n                      <div class=\"dropdown-menu dropdown-menu-right\">\r\n                        <!-- <a class=\"dropdown-item\"><i class=\"feather icon-user\"></i> Edit Profile</a>\r\n                        <a class=\"dropdown-item\"><i class=\"feather icon-mail\"></i> My Inbox</a> -->\r\n                        <a class=\"dropdown-item\" routerLink=\"changePassword\"><i class=\"feather icon-unlock\"></i> Change Password</a>\r\n                          <div class=\"dropdown-divider\"></div>\r\n                        <a class=\"dropdown-item\" (click)=\"logout()\"><i class=\"feather icon-log-out\"></i> Logout</a>\r\n                      </div>\r\n                  </li>\r\n              </ul>\r\n          </div>\r\n      </div>\r\n  </div>\r\n</nav>\r\n<!-- END: Header-->");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/lead-generation-list/lead-generation-list.component.html":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/lead-generation-list/lead-generation-list.component.html ***!
  \**********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"content-wrapper\">\n    <div class=\"content-header row mb-2\">\n        <div class=\"content-header-left col-md-6 col-12 mb-1\">\n            <h3 class=\"content-header-title mb-0\"><i class=\"fa-solid fa-people-arrows-left-right text-warning\"></i> Lead Request</h3>\n        </div>\n        <!-- <div class=\"content-header-right text-md-right col-md-6 col-12 mb-md-0 mb-0\">\n          <div class=\"form-group mb-0\">\n            <a class=\"btn btn-link\" routerLink=\"create\"><i class=\"feather icon-user-plus text-primary fa-lg\"></i> Create User</a>\n\n          </div>\n        </div> -->\n    </div>\n    <div class=\"content-body\">\n      <div class=\"card\">\n        <div class=\"card-body\">\n          <!-- <button mat-raised-button (click)=\"openDialog()\">click</button> -->\n          <div class=\"table-responsive\">\n            <table id=\"leadUserList\" class=\"table table-sm table-bordered table-hover mb-0\" style=\"width:100%;\">\n                <thead>\n                    <tr>\n                      <th class=\"text-center\">Action</th>\n                        <th>Lead Id</th>\n                        <th>Company Name</th>\n                        <!-- <th>First Name</th>\n                        <th>Last Name</th> -->\n                        <th>Email Id</th>\n                        <th>Status</th>\n                        <th>Created On</th>\n                        <!-- <th class=\"text-center\">Mobile no.</th> -->\n                    </tr>\n                </thead>\n                <tbody>\n                    <tr *ngFor=\"let user of leadUserList;let i=index;\">\n                      <td class=\"text-center\">\n                        <!-- <a class=\"btn-link mr-50\" title=\"View\"><i class=\"feather icon-eye font-medium-1 text-primary\"></i></a> -->\n                        <a class=\"btn-link mr-50\" title=\"Edit\" [routerLink]=\"['view/'+user.pkLeadId]\"><i class=\"feather icon-eye font-medium-1 text-secondary\"></i></a>\n                        <a class=\"btn-link\" title=\"Delete\" ><i class=\"feather icon-trash-2 font-medium-1 text-danger\"></i></a>\n                 \n                      </td>\n                        <td>{{user.pkLeadId}}</td>\n                        <td>{{user.compName}}</td>\n                        <!-- <td>{{user.firstName}}</td>\n                        <td>{{user.lastName}}</td> -->\n                        <td>{{user.emailId}}</td>\n                        <td>{{user.status}}</td>\n                        <td>{{user.createdOn}}</td>\n                        \n                    </tr>\n                    \n                </tbody>\n            </table>\n          </div>\n        </div>\n      </div>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/lead-generation-view/lead-generation-view.component.html":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/lead-generation-view/lead-generation-view.component.html ***!
  \**********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"content-wrapper\">\n    <div class=\"content-header row mb-1\">\n        <div class=\"content-header-left col-md-6 col-12 mb-1\">\n            <h3 class=\"content-header-title mb-0\"><i class=\"feather icon-users text-warning\"></i> Vendor Lead List</h3>\n        </div>\n        <!-- <div class=\"content-header-right text-md-right col-md-6 col-12 mb-md-0 mb-0\">\n          <div class=\"form-group mb-0\">\n              <a class=\"btn btn-link\"><i class=\"feather icon-user-plus text-primary fa-lg\"></i> Create User</a>\n          </div>\n        </div> -->\n    </div>\n    <div class=\"content-body\">\n      <div class=\"row\">\n        <div class=\"col-md-5\">\n          <div class=\"card mb-0\">\n            <div class=\"card-header border-bottom-blue-grey border-bottom-lighten-5 py-1\">\n              <h4 class=\"lead-header-title mb-0\">All Vendors</h4>\n            </div>\n            <div class=\"card-body lead-list-scroll p-1\">\n              <div class=\"list-group lead-list\">\n                <!-- <a href=\"#\" class=\"list-group-item list-group-item-action active\">\n                  <h5 class=\"lead-title mb-50\">H001423</h5>\n                  <h6 class=\"mb-50\"><b>Company name :</b> Intellect Bizware Services Pvt. Ltd.</h6>\n                  <p class=\"mb-50\"><b>Email id :</b> mahendra.a@intellectbizware.com</p>\n                  <div class=\"d-flex w-100 justify-content-between\">\n                    <p class=\"mb-0\"><b>Phone no. :</b> +91 95944 85889</p>\n                    <p class=\"mb-0\"><b>Type of firm :</b> Testing</p>\n                  </div>\n                </a> -->\n                <ng-container  *ngFor=\"let user of leadUserList;let i = index;\">\n                    <a class=\"list-group-item list-group-item-action\" \n                    [ngClass]=\"{'active':selectedItem===user.pkLeadId}\" (click)=\"selectedItem = user.pkLeadId; onSelectLead()\">\n                        <h5 class=\"lead-title mb-50\">{{user.pkLeadId}}</h5>\n                        <h6 class=\"mb-50\"><b>Company name :</b> {{user.compName}}</h6>\n                        <p class=\"mb-50\"><b>Email id :</b> {{user.emailId}}</p>\n                        <div class=\"d-flex w-100 justify-content-between\">\n                          <p class=\"mb-0\"><b>Phone no. :</b> +91 {{user.mobileNo}}</p>\n                          <p class=\"mb-0\"><b>Type of firm :</b> {{user.firmType?user.firmType:user.firmTypeOther}}</p>\n                        </div>\n                      </a>\n                </ng-container>\n            \n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"col-md-7\">\n          <div class=\"card mb-0\">\n            <div class=\"card-header border-bottom-blue-grey border-bottom-lighten-5 py-1\">\n              <h4 class=\"lead-header-title mb-0\">Vendor Overview</h4>\n              <!-- <div class=\"heading-elements\">\n                  <ul class=\"list-inline mb-0\">\n                      <li><a><i class=\"feather icon-edit font-medium-1 text-secondary\"></i></a></li>\n                      <li><a><i class=\"feather icon-trash-2 font-medium-1 text-danger\"></i></a></li>\n                  </ul>\n              </div> -->\n            </div>\n            <div class=\"card-body lead-questions-scroll\">\n              <div class=\"list-group\">\n                <div class=\"list-group-item\">\n                  <div class=\"row\">\n                    <div class=\"col-7\">\n                      <h6 class=\"mb-0 lead-quetion\">1. How did you first contact us?</h6>\n                    </div>\n                    <div class=\"col-5\">\n                      <h6 class=\"mb-0 lead-quetion\">{{responseJson.contactUs==='Other'? responseJson.contactUsOther:responseJson.contactUs}}</h6>\n                    </div>\n                  </div>\n                </div>\n                <div class=\"list-group-item\">\n                    <div class=\"row\">\n                      <div class=\"col-7\">\n                        <h6 class=\"mb-0 lead-quetion\">2.  Your first name </h6>\n                      </div>\n                      <div class=\"col-5\">\n                        <h6 class=\"mb-0 lead-quetion\">{{responseJson.firstName}}</h6>\n                      </div>\n                    </div>\n                  </div>\n                  <div class=\"list-group-item\">\n                    <div class=\"row\">\n                      <div class=\"col-7\">\n                        <h6 class=\"mb-0 lead-quetion\">3. Your last name</h6>\n                      </div>\n                      <div class=\"col-5\">\n                        <h6 class=\"mb-0 lead-quetion\">{{responseJson.lastName}}</h6>\n                      </div>\n                    </div>\n                  </div>\n                <div class=\"list-group-item\">\n                  <div class=\"row\">\n                    <div class=\"col-7\">\n                      <h6 class=\"mb-0 lead-quetion\">4. Your company's name</h6>\n                    </div>\n                    <div class=\"col-5\">\n                      <h6 class=\"mb-0 lead-quetion\">{{responseJson.compName}}</h6>\n                    </div>\n                  </div>\n                </div>\n                <div class=\"list-group-item\">\n                  <div class=\"row\">\n                    <div class=\"col-7\">\n                      <h6 class=\"mb-0 lead-quetion\">5. Your email id</h6>\n                    </div>\n                    <div class=\"col-5\">\n                      <h6 class=\"mb-0 lead-quetion\">{{responseJson.emailId}}</h6>\n                    </div>\n                  </div>\n                </div>\n                <div class=\"list-group-item\">\n                    <div class=\"row\">\n                      <div class=\"col-7\">\n                        <h6 class=\"mb-0 lead-quetion\">6. Your requester email Id </h6>\n                      </div>\n                      <div class=\"col-5\">\n                        <h6 class=\"mb-0 lead-quetion\">{{responseJson.reqEmailId}}</h6>\n                      </div>\n                    </div>\n                  </div>\n                <div class=\"list-group-item\">\n                  <div class=\"row\">\n                    <div class=\"col-7\">\n                      <h6 class=\"mb-0 lead-quetion\">7. Your phone number</h6>\n                    </div>\n                    <div class=\"col-5\">\n                      <h6 class=\"mb-0 lead-quetion\">+91 {{responseJson.mobileNo}}</h6>\n                    </div>\n                  </div>\n                </div>\n                <div class=\"list-group-item\">\n                  <div class=\"row\">\n                    <div class=\"col-7\">\n                      <h6 class=\"mb-0 lead-quetion\">8. Which HomeLane city will you be able to service?</h6>\n                    </div>\n                    <div class=\"col-5\">\n                      <h6 class=\"mb-0 lead-quetion\">{{responseJson.city}}</h6>\n                    </div>\n                  </div>\n                </div>\n                <div class=\"list-group-item\">\n                  <div class=\"row\">\n                    <div class=\"col-7\">\n                      <h6 class=\"mb-0 lead-quetion\">9. What type of service you provide?</h6>\n                    </div>\n                    <div class=\"col-5\">\n                      <h6 class=\"mb-0 lead-quetion\">{{responseJson.serviceType}}</h6>\n                    </div>\n                  </div>\n                </div>\n                <div class=\"list-group-item\">\n                  <div class=\"row\">\n                    <div class=\"col-7\">\n                      <h6 class=\"mb-0 lead-quetion\">10. Which service category best describes the services provided by you?</h6>\n                    </div>\n                    <div class=\"col-5\">\n                      <h6 class=\"mb-0 lead-quetion\">{{responseJson.serviceCategoty==='Other'?responseJson.serviceCategoryOther\n                          :responseJson.serviceCategoty}}</h6>\n                    </div>\n                  </div>\n                </div>\n                <div class=\"list-group-item\">\n                  <div class=\"row\">\n                    <div class=\"col-7\">\n                      <h6 class=\"mb-0 lead-quetion\">11. Type of Firm</h6>\n                    </div>\n                    <div class=\"col-5\">\n                      <h6 class=\"mb-0 lead-quetion\">{{responseJson.firmType==='Other'?responseJson.firmTypeOther:responseJson.firmType}}</h6>\n                    </div>\n                  </div>\n                </div>\n                <div class=\"list-group-item\">\n                  <div class=\"row\">\n                    <div class=\"col-7\">\n                      <h6 class=\"mb-0 lead-quetion\">12. What is your annual turn over?</h6>\n                    </div>\n                    <div class=\"col-5\">\n                      <h6 class=\"mb-0 lead-quetion\">{{responseJson.turnOver}}</h6>\n                    </div>\n                  </div>\n                </div>\n                <div class=\"list-group-item\">\n                  <div class=\"row\">\n                    <div class=\"col-7\">\n                      <h6 class=\"mb-0 lead-quetion\">13. What is your employee count?</h6>\n                    </div>\n                    <div class=\"col-5\">\n                      <h6 class=\"mb-0 lead-quetion\">{{responseJson.empStrength}}</h6>\n                    </div>\n                  </div>\n                </div>\n                <div class=\"list-group-item\">\n                  <div class=\"row\">\n                    <div class=\"col-7\">\n                      <h6 class=\"mb-0 lead-quetion\">14. Credit Holding Capacity ( 30-45 Days Period )</h6>\n                    </div>\n                    <div class=\"col-5\">\n                      <h6 class=\"mb-0 lead-quetion\">{{responseJson.creditCapacity}}</h6>\n                    </div>\n                  </div>\n                </div>\n                <div class=\"list-group-item\">\n                  <div class=\"row\">\n                    <div class=\"col-7\">\n                      <h6 class=\"mb-0 lead-quetion\">15. Experience in Home Interior/Turn Key/Home Renovation business</h6>\n                    </div>\n                    <div class=\"col-5\">\n                      <h6 class=\"mb-0 lead-quetion\">{{responseJson.expInteriorReno}}</h6>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n            <div class=\"card-footer p-50 bg-white\">\n                <div class=\"row\">\n                <div class=\"col-md-12 text-right\">\n                <button type=\"button\" (click)=\"onAction('R',responseJson)\" class=\"btn btn-danger round btn-min-width btn-darken-2 shadow mr-50\">Reject</button>\n                <button type=\"button\" (click)=\"onAction('H',responseJson)\" class=\"btn btn-secondary round btn-min-width btn-darken-2 shadow mr-50\">Hold</button>\n                <button type=\"button\" (click)=\"onAction('A',responseJson)\" class=\"btn btn-success round btn-min-width btn-darken-1 shadow\">Approved</button>\n                </div>\n                </div>\n                </div>\n          </div>\n        </div>\n      </div>\n    </div>\n</div>\n\n\n<app-success-error-message [alertResponse]=\"alertResponse\" ></app-success-error-message>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/lead-generation/lead-generation.component.html":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/lead-generation/lead-generation.component.html ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"page-vendor-lead\">\n  <div class=\"container-fluid\">\n    <div class=\"row\">\n      <div class=\"col-md-12\">\n        <div class=\"row\">\n          <div class=\"col-md-3 bg-left-vendor d-none d-md-block\" style=\"height:100vh;min-height:auto;\">\n            <div class=\"mt-0 mb-3 text-center\">\n              <img src=\"assets/img/homelane-logo.png\" class=\"\" />\n            </div>\n            <div class=\"row\">\n              <div class=\"col-12 text-center\">\n                <h1 class=\"login-title mt-0 mb-1\">Partner Registration Request Form</h1>\n                <!-- <h1 class=\"login-title-2 mb-1\">Create Vendor Registration</h1> -->\n              </div>\n            </div>\n          </div>\n          <div class=\"col-md-9 bg-right-vendor p-0\">\n            <div class=\"card bg-transparent border-0 rounded-0 shadow-none mb-0\">\n              <div class=\"card-header border-bottom-blue-grey border-bottom-lighten-5 bg-transparent pb-1\">\n                <h4 class=\"login-title-2\">Registration Form</h4>\n                <small class=\"text-powered\">Please note that fields marked with <span class=\"text-danger\">*</span>\n                  are mandatory</small>\n              </div>\n              <form [formGroup]=\"formData\" (ngSubmit)=\"onSubmit()\" #formDetails>\n                <div class=\"card-body page-scroll\">\n                  <div class=\"row\">\n                    <div class=\"col-sm-12\">\n                      <div class=\"card\">\n                        <div class=\"card-header border-bottom-blue-grey border-bottom-lighten-5 py-1\">\n                          <h6 class=\"lead-label mb-0\">1. <i class=\"feather icon-arrow-right text-warning fa-lg\"></i> How\n                            did you first contact us? <span class=\"text-danger\">*</span></h6>\n                        </div>\n                        <div class=\"card-body\">\n                          <div class=\"row\">\n                         \n                            <!-- <div class=\"col-md-12\"> -->\n                          \n  \n  \n                              <!-- <div class=\"d-inline-block custom-control custom-checkbox mr-2 mb-2\">\n                                  <input type=\"checkbox\" class=\"custom-control-input\" name=\"customCheck\" id=\"customCheck1\">\n                                  <label class=\"custom-control-label\" for=\"customCheck1\">Email</label>\n                              </div>\n                              <div class=\"d-inline-block custom-control custom-checkbox mr-2 mb-2\">\n                                  <input type=\"checkbox\" class=\"custom-control-input\" name=\"customCheck\" id=\"customCheck2\">\n                                  <label class=\"custom-control-label\" for=\"customCheck2\">Social Media</label>\n                              </div>\n                              <div class=\"d-inline-block custom-control custom-checkbox mr-2 mb-2\">\n                                  <input type=\"checkbox\" class=\"custom-control-input\" name=\"customCheck\" id=\"customCheck3\">\n                                  <label class=\"custom-control-label\" for=\"customCheck3\">Referral</label>\n                              </div>\n                              <div class=\"d-inline-block custom-control custom-checkbox mr-2 mb-2\">\n                                  <input type=\"checkbox\" class=\"custom-control-input\" name=\"customCheck\" id=\"customCheck4\">\n                                  <label class=\"custom-control-label\" for=\"customCheck4\">IndiaMart</label>\n                              </div>\n                              <div class=\"d-inline-block custom-control custom-checkbox mr-2 mb-2\">\n                                  <input type=\"checkbox\" class=\"custom-control-input\" name=\"customCheck\" id=\"customCheck5\">\n                                  <label class=\"custom-control-label\" for=\"customCheck5\">Just Dial</label>\n                              </div>\n                              <div class=\"d-inline-block custom-control custom-checkbox mr-2 mb-2\">\n                                  <input type=\"checkbox\" class=\"custom-control-input\" name=\"customCheck\" id=\"customCheck6\">\n                                  <label class=\"custom-control-label\" for=\"customCheck6\">Quikr</label>\n                              </div>\n                              <div class=\"d-inline-block custom-control custom-checkbox mr-2 mb-2\">\n                                  <input type=\"checkbox\" class=\"custom-control-input\" name=\"customCheck\" id=\"customCheck7\">\n                                  <label class=\"custom-control-label\" for=\"customCheck7\">Google</label>\n                              </div>\n                              <div class=\"d-inline-block custom-control custom-checkbox mr-2 mb-2\">\n                                  <input type=\"checkbox\" class=\"custom-control-input\" name=\"customCheck\" id=\"customCheck8\">\n                                  <label class=\"custom-control-label\" for=\"customCheck8\">Others</label>\n                              </div> -->\n                            <!-- </div> -->\n                            <div class=\"col-xl-4 col-lg-4 col-md-4\">\n                              <div class=\"form-group mb-0\">\n                                <select formControlName=\"fkContUs\" #fkContUs  class=\"custom-select custom-select-sm\" >\n                                  <option value=\"\">Select</option>\n                                  <option *ngFor=\"let contact of contactUsMst\" value=\"{{contact.code}}\">\n                                    {{contact.value}} \n                                  </option>\n                                </select>\n                              </div>\n                              <span class=\"errormsg \" *ngIf=\"formData.controls.fkContUs.hasError('required') && \n                              (formData.controls.fkContUs.dirty || formData.controls.fkContUs.touched)\">\n                                Please select company's name.\n                              </span>\n                            </div>\n                            <div *ngIf=\"!formData.get('contUsOther').disabled\" class=\"col-xl-3 col-lg-4 col-md-4\">\n                              <div class=\"form-group mb-0\">\n                                <input type=\"text\" formControlName=\"contUsOther\"  class=\"form-control form-control-sm\" name=\"\" placeholder=\"Others\">\n                              </div>\n                              <span class=\"errormsg \" *ngIf=\"formData.controls.contUsOther.hasError('required') && \n                              (formData.controls.contUsOther.dirty || formData.controls.contUsOther.touched)\">\n                                Please enter Others.\n                              </span>\n                            </div>\n                          </div>\n                        </div>\n                      </div>\n                      <div class=\"card\">\n                        <div class=\"card-header border-bottom-blue-grey border-bottom-lighten-5 py-1\">\n                          <h6 class=\"lead-label mb-0\">2. <i class=\"feather icon-arrow-right text-warning fa-lg\"></i> Your\n                            first name <span class=\"text-danger\">*</span></h6>\n                        </div>\n                        <div class=\"card-body\">\n                          <div class=\"row\">\n                            <div class=\"col-xl-4 col-lg-4 col-md-4\">\n                              <div class=\"form-group mb-0\">\n                                <input type=\"text\"  formControlName=\"firstName\"  class=\"form-control form-control-sm\" name=\"\"\n                                  placeholder=\"first name\">\n                              </div>\n                              <span class=\"errormsg \" *ngIf=\"formData.controls.firstName.hasError('required') && \n                              (formData.controls.firstName.dirty || formData.controls.firstName.touched)\">\n                                Please first name.\n                              </span>\n                            </div>\n                          </div>\n                        </div>\n                      </div>\n                      <div class=\"card\">\n                        <div class=\"card-header border-bottom-blue-grey border-bottom-lighten-5 py-1\">\n                          <h6 class=\"lead-label mb-0\">3. <i class=\"feather icon-arrow-right text-warning fa-lg\"></i> Your\n                            last name <span class=\"text-danger\">*</span></h6>\n                        </div>\n                        <div class=\"card-body\">\n                          <div class=\"row\">\n                            <div class=\"col-xl-4 col-lg-4 col-md-4\">\n                              <div class=\"form-group mb-0\">\n                                <input type=\"text\"  formControlName=\"lastName\"  class=\"form-control form-control-sm\" name=\"\"\n                                  placeholder=\"last name\">\n                              </div>\n                              <span class=\"errormsg \" *ngIf=\"formData.controls.lastName.hasError('required') && \n                              (formData.controls.lastName.dirty || formData.controls.lastName.touched)\">\n                                Please last name.\n                              </span>\n                            </div>\n                          </div>\n                        </div>\n                      </div>\n                      <div class=\"card\">\n                        <div class=\"card-header border-bottom-blue-grey border-bottom-lighten-5 py-1\">\n                          <h6 class=\"lead-label mb-0\">4. <i class=\"feather icon-arrow-right text-warning fa-lg\"></i> Your\n                            company's name <span class=\"text-danger\">*</span></h6>\n                        </div>\n                        <div class=\"card-body\">\n                          <div class=\"row\">\n                            <div class=\"col-xl-4 col-lg-4 col-md-4\">\n                              <div class=\"form-group mb-0\">\n                                <input type=\"text\"  formControlName=\"companyName\"  class=\"form-control form-control-sm\" name=\"\"\n                                  placeholder=\"company's name\">\n                              </div>\n                              <span class=\"errormsg \" *ngIf=\"formData.controls.companyName.hasError('required') && \n                              (formData.controls.companyName.dirty || formData.controls.companyName.touched)\">\n                                Please company's name.\n                              </span>\n                            </div>\n                          </div>\n                        </div>\n                      </div>\n  \n                      <div class=\"card\">\n                        <div class=\"card-header border-bottom-blue-grey border-bottom-lighten-5 py-1\">\n                          <h6 class=\"lead-label mb-0\">5. <i class=\"feather icon-arrow-right text-warning fa-lg\"></i> Your\n                            email id <span class=\"text-danger\">*</span></h6>\n                        </div>\n                        <div class=\"card-body\">\n                          <div class=\"row\">\n                            <div class=\"col-xl-4 col-lg-4 col-md-4\">\n                              <div class=\"form-group mb-0\">\n                                <input type=\"text\"  formControlName=\"emailId\"   class=\"form-control form-control-sm\" name=\"\" placeholder=\"email id\">\n                              </div>\n                              <span class=\"errormsg \" *ngIf=\"formData.controls.emailId.hasError('required') && \n                              (formData.controls.emailId.dirty || formData.controls.emailId.touched)\">\n                                Please enter email id.\n                              </span>\n                            </div>\n                          </div>\n                        </div>\n                      </div>\n                      <div class=\"card\">\n                        <div class=\"card-header border-bottom-blue-grey border-bottom-lighten-5 py-1\">\n                          <h6 class=\"lead-label mb-0\">6. <i class=\"feather icon-arrow-right text-warning fa-lg\"></i> Your\n                            requester email Id <span class=\"text-danger\">*</span></h6>\n                        </div>\n                        <div class=\"card-body\">\n                          <div class=\"row\">\n                            <div class=\"col-xl-4 col-lg-4 col-md-4\">\n                              <div class=\"form-group mb-0\">\n                                <input type=\"text\"  formControlName=\"requesterEmailId\"  class=\"form-control form-control-sm\" name=\"\"\n                                  placeholder=\"requester email Id\">\n                              </div>\n                              <span class=\"errormsg \" *ngIf=\"formData.controls.requesterEmailId.hasError('required') && \n                              (formData.controls.requesterEmailId.dirty || formData.controls.requesterEmailId.touched)\">\n                                Please enter requester email id.\n                              </span>\n                            </div>\n                          </div>\n                        </div>\n                      </div>\n  \n                      <div class=\"card\">\n                        <div class=\"card-header border-bottom-blue-grey border-bottom-lighten-5 py-1\">\n                          <h6 class=\"lead-label mb-0\">7. <i class=\"feather icon-arrow-right text-warning fa-lg\"></i> Your\n                            phone number <span class=\"text-danger\">*</span></h6>\n                        </div>\n                        <div class=\"card-body\">\n                          <div class=\"row\">\n                            <div class=\"col-xl-4 col-lg-4 col-md-4\">\n                              <div class=\"form-group mb-0\">\n                                <input type=\"text\"  formControlName=\"mobileNo\" class=\"form-control form-control-sm\" name=\"\"\n                                  placeholder=\"phone number\">\n                              </div>\n                              <span class=\"errormsg \" *ngIf=\"formData.controls.mobileNo.hasError('required') && \n                              (formData.controls.mobileNo.dirty || formData.controls.mobileNo.touched)\">\n                                Please enter phone number.\n                              </span>\n                            </div>\n                          </div>\n                        </div>\n                      </div>\n  \n                      <div class=\"card\">\n                        <div class=\"card-header border-bottom-blue-grey border-bottom-lighten-5 py-1\">\n                          <h6 class=\"lead-label mb-0\">8. <i class=\"feather icon-arrow-right text-warning fa-lg\"></i> Which\n                            HomeLane city will you be able to service? <span class=\"text-danger\">*</span></h6>\n                        </div>\n                        <div class=\"card-body\">\n                          <div class=\"row\">\n                            <div class=\"col-md-12\">\n                              <h6 class=\"text-light mb-1\">Choose as many as you like</h6>\n                            </div>\n                            <!-- <div class=\"col-md-12\">\n                              <div class=\"d-inline-block custom-control custom-checkbox mr-2 mb-2\">\n                                <input type=\"checkbox\" class=\"custom-control-input\" name=\"customCheck\" id=\"customCheck1\">\n                                <label class=\"custom-control-label\" for=\"customCheck1\">Email</label>\n                              </div>\n                            </div> -->\n                            <div class=\"col-xl-4 col-lg-4 col-md-4\">\n                              <div class=\"form-group mb-0\">\n                                <select multiple=\"multiple\" id=\"city\" name=\"city\"   \n                                class=\"custom-select custom-select-sm\" >\n                                  <!-- <option value=\"\">Select</option> -->\n                                  <option    *ngFor=\"let city of cityMst\" value=\"{{city.code}}\">\n                                    {{city.value}} \n                                </select>\n                              </div>\n                              <span class=\"errormsg \" *ngIf=\"formData.controls.fkCity.hasError('required')\">\n                                Please select city.\n                              </span>\n                            </div>\n                        \n                            <div class=\"col-xl-4 col-lg-4 col-md-4\" *ngIf=\"!formData.get('cityOther').disabled\">\n                              <div class=\"form-group mb-0\">\n                                <input type=\"text\" formControlName=\"cityOther\"  class=\"form-control form-control-sm\" name=\"\" placeholder=\"Others\">\n                              </div>\n                              <span class=\"errormsg hidden\">\n                                Please phone number.\n                              </span>\n                            </div>\n                          </div>\n                        </div>\n                      </div>\n  \n                      <div class=\"card\">\n                        <div class=\"card-header border-bottom-blue-grey border-bottom-lighten-5 py-1\">\n                          <h6 class=\"lead-label mb-0\">9. <i class=\"feather icon-arrow-right text-warning fa-lg\"></i> What\n                            type of service you provide? <span class=\"text-danger\">*</span></h6>\n                        </div>\n                        <div class=\"card-body\">\n                          <div class=\"row\">\n                            <div class=\"col-md-12\">\n                              <h6 class=\"text-light mb-1\">Choose as many as you like</h6>\n                            </div>\n                            <!-- <div class=\"col-md-12\">\n                              <div class=\"d-inline-block custom-control custom-checkbox mr-2 mb-2\">\n                                <input type=\"checkbox\" class=\"custom-control-input\" name=\"customCheck\" id=\"customCheck8\">\n                                <label class=\"custom-control-label\" for=\"customCheck8\">Others</label>\n                              </div>\n                            </div> -->\n                            <div class=\"col-xl-4 col-lg-4 col-md-4\">\n                              <div class=\"form-group mb-0\">\n                                <select  multiple=\"multiple\" id=\"serviceType\" name=\"serviceType\"  class=\"custom-select custom-select-sm\" >\n                                  <!-- <option value=\"\">Select</option> -->\n                                  <option *ngFor=\"let service of serviceTypeMst\" value=\"{{service.code}}\">\n                                    {{service.value}} \n                                  </option>\n                                </select>\n                              </div>\n                              <span class=\"errormsg \" *ngIf=\"formData.controls.fkSerProvideType.hasError('required')\">\n                                Please select type of service.\n                              </span>\n                            </div>\n                            <div class=\"col-xl-4 col-lg-4 col-md-4\" *ngIf=\"!formData.get('serProvideTypeOther').disabled\">\n                              <div class=\"form-group mb-0\">\n                                <input type=\"text\"  formControlName=\"serProvideTypeOther\"  class=\"form-control form-control-sm\" name=\"\" placeholder=\"Others\">\n                              </div>\n                              <span class=\"errormsg hidden\">\n                                Please phone number.\n                              </span>\n                            </div>\n                          </div>\n                        </div>\n                      </div>\n  \n                      <div class=\"card\">\n                        <div class=\"card-header border-bottom-blue-grey border-bottom-lighten-5 py-1\">\n                          <h6 class=\"lead-label mb-0\">10. <i class=\"feather icon-arrow-right text-warning fa-lg\"></i> Which\n                            service category best describes the services provided by you? <span class=\"text-danger\">*</span></h6>\n                        </div>\n                        <div class=\"card-body\">\n                          <div class=\"row\">\n                            <!-- <div class=\"col-md-12\">      \n                              <div class=\"d-inline-block custom-control custom-checkbox mr-2 mb-2\">\n                                <input type=\"checkbox\" class=\"custom-control-input\" name=\"customCheck\" id=\"customCheck8\">\n                                <label class=\"custom-control-label\" for=\"customCheck8\">Others</label>\n                              </div>\n                            </div> -->\n                            <div class=\"col-xl-4 col-lg-4 col-md-4\">\n                              <div class=\"form-group mb-0\">\n                                <select  formControlName=\"fkSerCategoryDesc\" class=\"custom-select custom-select-sm\" >\n                                  <option value=\"\">Select</option>\n                                  <option *ngFor=\"let service of serviceCategoryMst\" value=\"{{service.code}}\">\n                                    {{service.value}} \n                                  </option>\n                                </select>\n                              </div>\n                              <span class=\"errormsg \" *ngIf=\"formData.controls.fkSerCategoryDesc.hasError('required') && \n                              (formData.controls.fkSerCategoryDesc.dirty || formData.controls.fkSerCategoryDesc.touched)\">\n                                Please select service category.\n                              </span>\n                            </div>\n                            <div class=\"col-xl-4 col-lg-4 col-md-4\" *ngIf=\"!formData.get('serCategoryDescOther').disabled\">\n                              <div class=\"form-group mb-0\">\n                                <input type=\"text\" formControlName=\"serCategoryDescOther\" class=\"form-control form-control-sm\" name=\"\" placeholder=\"Others\">\n                              </div>\n                              <span class=\"errormsg \" *ngIf=\"formData.controls.serCategoryDescOther.hasError('required') && \n                              (formData.controls.serCategoryDescOther.dirty || formData.controls.serCategoryDescOther.touched)\">\n                                Please enter others.\n                              </span>\n                            </div>\n                          </div>\n                        </div>\n                      </div>\n  \n                      <div class=\"card\">\n                        <div class=\"card-header border-bottom-blue-grey border-bottom-lighten-5 py-1\">\n                          <h6 class=\"lead-label mb-0\">11. <i class=\"feather icon-arrow-right text-warning fa-lg\"></i> Type\n                            of Firm <span class=\"text-danger\">*</span></h6>\n                        </div>\n                        <div class=\"card-body\">\n                          <div class=\"row\">\n                            <!-- <div class=\"col-md-12\">\n                              <div class=\"d-inline-block custom-control custom-checkbox mr-2 mb-2\">\n                                <input type=\"checkbox\" class=\"custom-control-input\" name=\"customCheck\" id=\"customCheck8\">\n                                <label class=\"custom-control-label\" for=\"customCheck8\">Others</label>\n                              </div>\n                            </div> -->\n                            <div class=\"col-xl-4 col-lg-4 col-md-4\">\n                              <div class=\"form-group mb-0\">\n                                <select formControlName=\"fkFirmType\"   class=\"custom-select custom-select-sm\" >\n                                  <option value=\"\">Select</option>\n                                  <option *ngFor=\"let firm of firmTypeMst\" value=\"{{firm.code}}\">\n                                    {{firm.value}} \n                                  </option>\n                                </select>\n                              </div>\n                              <span class=\"errormsg \" *ngIf=\"formData.controls.fkFirmType.hasError('required') && \n                              (formData.controls.fkFirmType.dirty || formData.controls.fkFirmType.touched)\">\n                                Please select firm type.\n                              </span>\n                            </div>\n                            <div class=\"col-xl-4 col-lg-4 col-md-4\" *ngIf=\"!formData.get('firmTypeOther').disabled\">\n                              <div class=\"form-group mb-0\">\n                                <input type=\"text\" formControlName=\"firmTypeOther\"   class=\"form-control form-control-sm\" name=\"\" placeholder=\"Others\">\n                              </div>\n                              <span class=\"errormsg \"  *ngIf=\"formData.controls.firmTypeOther.hasError('required') && \n                              (formData.controls.firmTypeOther.dirty || formData.controls.firmTypeOther.touched)\">\n                                Please enter others.\n                              </span>\n                            </div>\n                          </div>\n                        </div>\n                      </div>\n  \n                      <div class=\"card\">\n                        <div class=\"card-header border-bottom-blue-grey border-bottom-lighten-5 py-1\">\n                          <h6 class=\"lead-label mb-0\">12. <i class=\"feather icon-arrow-right text-warning fa-lg\"></i> What\n                            is your annual turn over? <span class=\"text-danger\">*</span></h6>\n                        </div>\n                        <div class=\"card-body\">\n                          <div class=\"row\">\n                            <!-- <div class=\"col-md-12\">\n                              <div class=\"d-inline-block custom-control custom-checkbox mr-2 mb-2\">\n                                <input type=\"checkbox\" class=\"custom-control-input\" name=\"customCheck\" id=\"customCheck14\">\n                                <label class=\"custom-control-label\" for=\"customCheck14\">Greater than 50L</label>\n                              </div>\n                            </div> -->\n                            <div class=\"col-xl-4 col-lg-4 col-md-4\">\n                              <div class=\"form-group mb-0\">\n                                <select formControlName=\"fkTurnOver\"   class=\"custom-select custom-select-sm\" >\n                                  <option value=\"\">Select</option>\n                                  <option *ngFor=\"let turnOver of turnOverMst\" value=\"{{turnOver.code}}\">\n                                    {{turnOver.value}} \n                                  </option>\n                                </select>\n                              </div>\n                              <span class=\"errormsg \" *ngIf=\"formData.controls.fkTurnOver.hasError('required') && \n                              (formData.controls.fkTurnOver.dirty || formData.controls.fkTurnOver.touched)\">\n                                Please select turn over.\n                              </span>\n                            </div>\n                          </div>\n                        </div>\n                      </div>\n  \n                      <div class=\"card\">\n                        <div class=\"card-header border-bottom-blue-grey border-bottom-lighten-5 py-1\">\n                          <h6 class=\"lead-label mb-0\">13. <i class=\"feather icon-arrow-right text-warning fa-lg\"></i> What\n                            is your employee count? <span class=\"text-danger\">*</span></h6>\n                        </div>\n                        <div class=\"card-body\">\n                          <div class=\"row\">\n                            <!-- <div class=\"col-md-12\">\n                              <div class=\"d-inline-block custom-control custom-checkbox mr-2 mb-2\">\n                                <input type=\"checkbox\" class=\"custom-control-input\" name=\"customCheck\" id=\"customCheck24\">\n                                <label class=\"custom-control-label\" for=\"customCheck24\">Greater than 30</label>\n                              </div>\n                            </div> -->\n                            <div class=\"col-xl-4 col-lg-4 col-md-4\">\n                              <div class=\"form-group mb-0\">\n                                <select  formControlName=\"fkEmpCount\"    class=\"custom-select custom-select-sm\" >\n                                  <option value=\"\">Select</option>\n                                  <option *ngFor=\"let count of empStrengthMst\" value=\"{{count.code}}\">\n                                    {{count.value}} \n                                  </option>\n                                </select>\n                              </div>\n                              <span class=\"errormsg \" *ngIf=\"formData.controls.fkEmpCount.hasError('required') && \n                              (formData.controls.fkEmpCount.dirty || formData.controls.fkEmpCount.touched)\">\n                                Please select employee count.\n                              </span>\n                            </div>\n                          </div>\n                        </div>\n                      </div>\n  \n                      <div class=\"card\">\n                        <div class=\"card-header border-bottom-blue-grey border-bottom-lighten-5 py-1\">\n                          <h6 class=\"lead-label mb-0\">14. <i class=\"feather icon-arrow-right text-warning fa-lg\"></i>\n                            Credit Holding Capacity ( 30-45 Days Period ) <span class=\"text-danger\">*</span></h6>\n                        </div>\n                        <div class=\"card-body\">\n                          <div class=\"row\">\n                            <!-- <div class=\"col-md-12\">                            <div class=\"d-inline-block custom-control custom-checkbox mr-2 mb-2\">\n                                <input type=\"checkbox\" class=\"custom-control-input\" name=\"customCheck\" id=\"customCheck33\">\n                                <label class=\"custom-control-label\" for=\"customCheck33\">Above 15</label>\n                              </div>\n                            </div> -->\n                            <div class=\"col-xl-4 col-lg-4 col-md-4\">\n                              <div class=\"form-group mb-0\">\n                                <select formControlName=\"fkCreditHCap\"   class=\"custom-select custom-select-sm\" >\n                                  <option value=\"\">Select</option>\n                                  <option *ngFor=\"let credit of creditCapacityMst\" value=\"{{credit.code}}\">\n                                    {{credit.value}} \n                                  </option>\n                                </select>\n                              </div>\n                              <span class=\"errormsg \"  *ngIf=\"formData.controls.fkCreditHCap.hasError('required') && \n                              (formData.controls.fkCreditHCap.dirty || formData.controls.fkCreditHCap.touched)\">\n                                Please select credit holding capacity .\n                              </span>\n                            </div>\n                          </div>\n                        </div>\n                      </div>\n  \n                      <div class=\"card\">\n                        <div class=\"card-header border-bottom-blue-grey border-bottom-lighten-5 py-1\">\n                          <h6 class=\"lead-label mb-0\">15. <i class=\"feather icon-arrow-right text-warning fa-lg\"></i>\n                            Experience in Home Interior/Turn Key/Home Renovation business <span class=\"text-danger\">*</span></h6>\n                        </div>\n                        <div class=\"card-body\">\n                          <div class=\"row\">\n                            <!-- <div class=\"col-md-12\">\n                                 <div class=\"d-inline-block custom-control custom-checkbox mr-2 mb-2\">\n                                <input type=\"checkbox\" class=\"custom-control-input\" name=\"customCheck\" id=\"customCheck44\">\n                                <label class=\"custom-control-label\" for=\"customCheck44\">Above 10 Years</label>\n                              </div>\n                            </div> -->\n                            <div class=\"col-xl-4 col-lg-4 col-md-4\">\n                              <div class=\"form-group mb-0\">\n                                <select   formControlName=\"fkExpIntTurnRenovation\"  class=\"custom-select custom-select-sm\" >\n                                  <option value=\"\">Select</option>\n                                  <option *ngFor=\"let exp of experienceMst\" value=\"{{exp.code}}\">\n                                    {{exp.value}} \n                                  </option>\n                                </select>\n                              </div>\n                              <span class=\"errormsg \" *ngIf=\"formData.controls.fkExpIntTurnRenovation.hasError('required') && \n                              (formData.controls.fkExpIntTurnRenovation.dirty || formData.controls.fkExpIntTurnRenovation.touched)\">\n                                Please select here.\n                              </span>\n                            </div>\n                          </div>\n                        </div>\n                      </div>\n  \n  \n                    </div>\n                  </div>\n                </div>\n                <div class=\"card-footer bg-transparent\">\n                  <div class=\"row\">\n                    <div class=\"col-12 text-right\">\n                      <!-- <button type=\"button\"   class=\"btn btn-secondary round btn-min-width btn-darken-2 shadow mr-50\">Back</button> -->\n                      <!-- <button type=\"button\"(click)=\"onBack()\" class=\"btn btn-light round btn-min-width  mr-50\">Back</button> -->\n                      <button type=\"button\" class=\"btn btn-light round btn-min-width  mr-50\" (click)=\"onBack()\">Back</button>\n\n                      <button type=\"submit\" [disabled]=\"!formData.valid\"\n                        class=\"btn btn-success round btn-min-width btn-darken-1 shadow next-step\">Save</button>\n                    </div>\n                  </div>\n                </div>\n              </form>\n          \n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n<app-success-error-message [alertResponse]=\"alertResponse\" ></app-success-error-message>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/lead-management/lead-management.component.html":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/lead-management/lead-management.component.html ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<router-outlet></router-outlet>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/login/login.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/login/login.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"login-bg\">\r\n  <div class=\"container\">\r\n    <div class=\"row align-items-center\" style=\"height:100vh;\">\r\n      <div class=\"col-md-12 bg-login p-0\">\r\n        <div class=\"card bg-transparent bg-white-md-none shadow-lg mb-0\">\r\n          <div class=\"card-body p-0\">\r\n            <div class=\"row\" style=\"height:85vh;min-height:auto;\">\r\n              <div class=\"col-md-4\">\r\n                <div class=\"card mb-0 border-right\" style=\"height:85vh;min-height:auto;\">\r\n                  <div class=\"card-body\">\r\n                    <form   #loginForm=\"ngForm\" (ngSubmit)=\"submitLogin(loginForm)\" class=\"form-vertical\">\r\n                    <div class=\"row\">\r\n                      <div class=\"col-sm-10 offset-sm-1 login-page\">\r\n                        <div class=\"mt-0 mb-2 text-center\">\r\n                          <img src=\"assets/img/homelane-logo.png\"/>\r\n                        </div>\r\n                        <h6 class=\"login-title-3 text-center mt-1 mb-1\">Please login to your account</h6>\r\n                        <div class=\"mt-2\">\r\n                          <div class=\"form-group\">\r\n                            <div class=\"input-group\">\r\n                              <input type=\"text\" class=\"form-control\"  \r\n                              placeholder=\"Username\" aria-label=\"Username\"  aria-describedby=\"basic-addon1\"\r\n                              [ngClass]=\"{invalid:!valid}\" name=\"userId\" #userId=\"ngModel\" required [(ngModel)]=\"loginData.userId\">\r\n                                <div class=\"input-group-prepend\">\r\n                                  <span class=\"input-group-text\" id=\"basic-addon1\"><i class=\"feather icon-user\"></i></span>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"errormsg \" *ngIf=\"!userId.value && userId.touched || !userId.value && !valid\">\r\n                                Please enter  username.\r\n                            </div>\r\n                          </div>\r\n                          <div class=\"form-group\">\r\n                            <div class=\"input-group\">\r\n                              <input type=\"password\"\r\n                               class=\"form-control\" placeholder=\"Password\" aria-label=\"password\"  aria-describedby=\"basic-addon1\"\r\n                               [ngClass]=\"{invalid:!valid}\" name=\"password\" #password=\"ngModel\" required [(ngModel)]=\"loginData.password\">\r\n                                <div class=\"input-group-prepend\">\r\n                                  <span class=\"input-group-text\" id=\"basic-addon1\"><i class=\"feather icon-lock\"></i></span>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"errormsg\" *ngIf=\"!password.value && password.touched || !password.value && !valid\">\r\n                                Please enter password.\r\n                            </div>\r\n                          </div>\r\n                        </div>\r\n                        <div class=\"form-group\">\r\n                          <button type=\"button\" (click)=\"onLead()\" class=\"btn btn-outline-dark round btn-min-width\">Lead Interest</button>\r\n                          <button type=\"submit\" class=\"btn btn-login round btn-min-width float-right\">Sign In</button>\r\n                          <!-- <button type=\"button\" (click)=\"onLead()\" class=\"btn btn-dark\">Lead Interest</button> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\r\n                          <button type=\"submit\" class=\"btn btn-login \">Sign In</button> -->\r\n                        </div>\r\n                        <div class=\"form-group\">\r\n                          <a  class=\"btn-link forgot-password float-right\" (click)=\"openForgetPopup()\"  data-toggle=\"modal\" data-target=\".bd-example-modal-xl\">Forgot your password?</a>\r\n                        </div>\r\n                      </div>\r\n                      <div class=\"col-12\">\r\n                        <h5 class=\"text-powered text-center mt-5\">iVen-Powered by Intellect Bizware</h5>\r\n                      </div>\r\n                    </div>\r\n                    </form>\r\n\r\n                  </div>\r\n                  <!-- <div class=\"card-footer bg-transparent\">Footer</div> -->\r\n                </div>\r\n              </div>\r\n              <div class=\"col-md-8 p-0 d-none d-md-block\">\r\n                <div class=\"row\" style=\"height:85vh;\">\r\n                  <div class=\"col-12\">\r\n                    <h1 class=\"login-title mt-3 mb-1\">Welcome to Homelane</h1>\r\n                    <!-- <h1 class=\"login-title-2 mb-1\">Interior Designs - Customize your Dream Home</h1>\r\n                    <h1 class=\"login-title-2 mb-50\">End-to-end home interior solutions at pocket-friendly prices.</h1> -->\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  </div>\r\n\r\n  <div class=\"modal fade bd-example-modal-xl\" tabindex=\"-1\" role=\"dialog\" data-backdrop=\"static\" aria-labelledby=\"myExtraLargeModalLabel\" aria-hidden=\"true\">\r\n  <div class=\"modal-dialog modal-dialog-centered modal-lg\" role=\"document\">\r\n    <div class=\"modal-content\">\r\n\r\n      <div class=\"row\">\r\n        <div class=\"col-md-6 d-none d-md-block bg-light\">\r\n          <div class=\"row align-items-center\">\r\n            <div class=\"col-sm-10 offset-sm-1\">\r\n              <h1 class=\"login-title mb-1 mt-1\">Forgot your Password</h1>\r\n              <h5 class=\"login-title-2 mb-4\">Don't worry, we got you.</h5>\r\n            </div>\r\n            <div class=\"col-12 text-left\">\r\n              <img src=\"assets/img/th-forgot.jpg\" class=\"img-fluid\" class=\"mb-1\"/>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-6\">\r\n          <div class=\"card h-100\">\r\n            <!-- <div class=\"card-header border-0 bg-transparent text-center mt-4\"><img src=\"img/int-logo.png\"/></div> -->\r\n            <div class=\"card-body\">\r\n              <div class=\"row align-items-center\">\r\n                <form >\r\n                  <div class=\"col-sm-10 offset-sm-1 login-page\">\r\n                    <div class=\"mt-1 mb-2 text-center\">\r\n                      <img src=\"assets/img/homelane-logo.png\"/>\r\n                    </div>\r\n                    <h6 class=\"login-title-3 mt-1 mb-1\">Enter valid user id</h6>\r\n                    <div class=\"form-group\">\r\n                      <div class=\"input-group\">\r\n                        <input type=\"text\" [(ngModel)]=\"forgotPasswordObj.userId\" name=\"userId\"  class=\"form-control\" placeholder=\"User Id\" aria-label=\"Login Id\" aria-describedby=\"basic-addon1\"\r\n                        >\r\n                        <div class=\"input-group-prepend\">\r\n                          <span class=\"input-group-text\" id=\"basic-addon1\"><i class=\"feather icon-mail\"></i></span>\r\n                        </div>\r\n                      </div>\r\n                      <div class=\"invalid-feedback\">\r\n                        Please choose a Login Id.\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                      <button [disabled]=\"forgotPasswordObj.userId == ''\" (click)=\"onSubmitForgotPassword()\" type=\"button\" class=\"btn btn-login round btn-min-width\">Submit</button>\r\n                      <a class=\"btn-link forgot-password float-right\" (click)=\"closeForgetPasswordPopup()\" data-dismiss=\"modal\">Back to Login</a>\r\n                    </div>\r\n                  </div>\r\n                </form>\r\n                \r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  </div>\r\n\r\n  <div class=\"modal fade\" id=\"alertMsg1\" data-backdrop=\"static\" data-keyboard=\"false\" tabindex=\"-1\" role=\"dialog\"\r\n   aria-labelledby=\"exampleModalCenterTitle\" aria-hidden=\"true\">\r\n   <div class=\"modal-dialog modal-dialog-centered modal-sm\" role=\"document\">\r\n      <div class=\"modal-content text-center\">\r\n         <!--Header-->\r\n         <!--Body-->\r\n         <div class=\"modal-body\">\r\n            <p class=\"mb-2\"><i\r\n               [ngClass]=\"[ alertFlag === 'success' ? 'feather icon-bell font-large-4 text-success' : 'feather icon-bell font-large-4 text-danger']\"></i>\r\n            </p>\r\n            <h6>{{alertMessage}}</h6>\r\n         </div>\r\n         <!--Footer-->\r\n         <div class=\"modal-footer d-flex justify-content-center\">\r\n            <button  type=\"button\" class=\"btn btn-primary\"\r\n            (click)=\"okAlert()\">Ok</button>\r\n         </div>\r\n      </div>\r\n   </div>\r\n  </div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/main-layout/main-layout.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/main-layout/main-layout.component.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- BEGIN: Header-->\r\n<app-header></app-header>\r\n<!-- END: Header-->\r\n<!-- BEGIN: Main Menu-->\r\n<div class=\"main-menu menu-fixed menu-dark menu-accordion\" data-scroll-to-active=\"true\">\r\n    <app-side-menu></app-side-menu>\r\n</div>\r\n<!-- END: Main Menu-->\r\n<!-- BEGIN: Content-->\r\n<div class=\"app-content content\">\r\n    <div class=\"content-overlay\"></div>\r\n    <router-outlet></router-outlet>\r\n    <!-- <div class=\"content-wrapper\">\r\n    </div> -->\r\n</div>\r\n<!-- END: Content-->\r\n\r\n<div class=\"sidenav-overlay\"></div>\r\n<div class=\"drag-target\"></div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/menu-authorization/menu-authorization.component.html":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/menu-authorization/menu-authorization.component.html ***!
  \******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<div class=\"content-wrapper mb-2\">\n    <div class=\"content-header row mb-2\">\n      <div class=\"content-header-left col-md-12 col-12 pl-2\">\n          <h3 class=\"content-header-title mb-0\"><i class=\"feather icon-grid text-warning\"></i> Menu Authorization</h3>\n      </div>\n    </div>\n    <div class=\"content-body\">\n      <div class=\"row\">\n        <div class=\"col-xl-4 col-lg-4 col-md-4 mb-2\">\n          <div class=\"form-group mb-50 row\">\n            <label for=\"region\" class=\"col-form-label col-4\">Select Profile</label>\n            <div class=\"col-8\">\n              <!-- <select class=\"custom-select custom-select-sm\" [formControl]=\"profileCode\" >\n                  <option value=\"\" ></option>\n                  <option [value]=\"profile.code\" *ngFor=\"let profile of profileList\">{{profile.value}}</option>\n\n              </select> -->\n              <select [ngClass]=\"{invalid:!validTab1}\" name=\"profileCode\" id=\"profileCode\" (change)=\"changeProfile()\"   [(ngModel)]=\"submitObject.profileCode\"  class=\"custom-select custom-select-sm\" >\n                <option value=\"\">Select</option>\n                <option *ngFor=\"let item of profileList\" value=\"{{item.code}}\">\n                  {{item.value}} \n                </option>\n              </select>\n            </div>\n          </div>\n        </div>\n        <div class=\"col-xl-4 col-lg-4 col-md-4 mb-2\">\n          <button type=\"button\" (click)=\"onSelectRole()\" class=\"btn btn-secondary round btn-min-width btn-darken-1 shadow\">Search</button>\n        </div>\n      </div>\n      \n      <div class=\"row match-height\">\n        <ng-container *ngFor=\"let menu of profileMenuList;let i = index\">\n          <div class=\"col-xl-4 col-lg-4 col-md-4 h-100\">\n            <div class=\"card timeline-panel\">\n              <div class=\"card-header border-bottom-blue-grey border-bottom-lighten-5 py-1\">\n                <div class=\"row\">\n                  <div class=\"col-md-8 col-12\">\n                    <h6 class=\"mb-0\"><i class=\"feather icon-user-plus text-warning fa-lg\"></i> {{menu.menuName}}</h6>\n                  </div>\n                  <div class=\"col-md-4 col-12\">\n                    <!-- <div class=\"float-right\">\n                        <input type=\"checkbox\" class=\"switch\" id=\"switch5\" data-group-cls=\"btn-group-sm\" hidden=\"\">\n                        <div class=\"btn-group btn-group-sm\" tabindex=\"0\">\n                          <button is=\"0\" type=\"button\" tabindex=\"-1\" class=\"btn active btn-danger\">Edit</button>\n                          <button is=\"1\" type=\"button\" tabindex=\"-1\" class=\"btn btn-default\">Read</button>\n                        </div>\n                    </div> -->\n                  </div>\n                </div>\n              </div>\n              <div class=\"card-body pt-50\">\n                <div class=\"widget-timeline\">\n                  <ul>\n                    <li class=\"timeline-items timeline-icon-success\">\n                      <div class=\"timeline-title\">\n                        <div class=\"custom-control custom-checkbox\">\n                              <input type=\"checkbox\" (click)=\"checkHeader(menu)\" [(ngModel)]=\"menu.checked\" class=\"custom-control-input\" name=\"header{{i}}\" id=\"header{{i}}\">\n                              <label class=\"custom-control-label\" for=\"header{{i}}\">{{menu.menuName}}</label>\n                        </div>\n                      </div>\n                      <ul *ngIf=\"menu.subMenuList\">\n                        <li class=\"timeline-items timeline-icon-danger\" *ngFor=\"let sub  of menu.subMenuList;let j = index\">\n                          <div class=\"timeline-title\">\n                            <div class=\"custom-control custom-checkbox\">\n                              <input type=\"checkbox\" (click)=\"checkSubHeader(sub,menu)\" [(ngModel)]=\"sub.checked\" class=\"custom-control-input\" name=\"{{i}}subHeader{{j}}\" id=\"{{i}}subHeader{{j}}\">\n                              <label class=\"custom-control-label\" for=\"{{i}}subHeader{{j}}\">{{sub.menuName}}</label>\n                            </div>\n                          </div>\n                          <!-- <div class=\"timeline-subtitle\">Mobile Project</div> -->\n                        </li>\n                        <!-- <li class=\"timeline-items timeline-icon-danger\">\n                          <div class=\"timeline-title\">\n                            <div class=\"custom-control custom-checkbox\">\n                              <input type=\"checkbox\" class=\"custom-control-input\" name=\"customCheck\" id=\"customCheck1\">\n                              <label class=\"custom-control-label\" for=\"customCheck1\">Check this custom checkbox</label>\n                            </div>\n                          </div>\n                        </li>\n                        <li class=\"timeline-items timeline-icon-danger\">\n                          <div class=\"timeline-title\">\n                            <div class=\"custom-control custom-checkbox\">\n                                <input type=\"checkbox\" class=\"custom-control-input\" name=\"customCheck\" id=\"customCheck1\">\n                                <label class=\"custom-control-label\" for=\"customCheck1\">Check this custom checkbox</label>\n                            </div>\n                          </div>\n                        </li> -->\n                      </ul>\n                    </li>\n                    </ul>\n                </div>\n              </div>\n            </div>\n          </div>\n        </ng-container>\n      \n        \n      \n\n      </div>\n    </div>\n</div>\n<!-- BEGIN: Footer-->\n<footer class=\"footer fixed-bottom footer-light navbar-border\">\n    <div class=\"text-right\">\n      <button type=\"button\" [disabled]=\"submitObject.profileCode == ''\" (click)=\"submitResult()\" class=\"btn btn-success round btn-min-width btn-darken-1 shadow\">Submit</button>\n    </div>\n</footer>\n<!-- END: Footer-->\n\n\n<div class=\"modal fade\" id=\"alertMsg\" data-backdrop=\"static\" data-keyboard=\"false\" tabindex=\"-1\" role=\"dialog\"\n   aria-labelledby=\"exampleModalCenterTitle\" aria-hidden=\"true\">\n   <div class=\"modal-dialog modal-dialog-centered modal-sm\" role=\"document\">\n      <div class=\"modal-content text-center\">\n         <!--Header-->\n         <!--Body-->\n         <div class=\"modal-body\">\n            <p class=\"mb-2\"><i\n               [ngClass]=\"[ alertFlag === 'success' ? 'feather icon-bell font-large-4 text-success' : 'feather icon-bell font-large-4 text-danger']\"></i>\n            </p>\n            <h6>{{alertMessage}}</h6>\n         </div>\n         <!--Footer-->\n         <div class=\"modal-footer d-flex justify-content-center\">\n            <button  type=\"button\" class=\"btn btn-primary\"\n            (click)=\"okAlert()\">Ok</button>\n         </div>\n      </div>\n   </div>\n  </div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/my-profile/my-profile.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/my-profile/my-profile.component.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"content-wrapper\">\n  <div class=\"content-header row mb-0\">\n      <div class=\"content-header-left col-md-6 col-12 mb-1\">\n          <h3 class=\"content-header-title mb-0\"><i class=\"feather icon-user text-warning\"></i> My Profile</h3>\n      </div>\n      <div class=\"content-header-right text-md-right col-md-6 col-12 mb-md-0 mb-0\">\n        <div class=\"form-group mb-0\">\n            <!-- <a class=\"btn btn-link\" data-toggle=\"modal\" data-target=\"#createquery\"><i class=\"feather icon-users fa-lg text-warning\"></i> User List</a> -->\n        </div>\n      </div>\n  </div>\n  <div class=\"content-body\">\n    <div class=\"row\">\n      <div class=\"col-sm-12\">\n        <div class=\"card mb-0 bg-transparent shadow-none\">\n          <div class=\"card-body\">\n            <div class=\"row\">\n              <!-- <div class=\"col-md-12\">\n                <p class=\"page-title\">Personal Details</p>\n              </div> -->\n              <div class=\"col-xl-4 col-lg-4 col-md-4\">\n                <div class=\"form-group mb-50\">\n                  <label class=\"col-form-label\">Vendor Code</label>\n                  <h6 class=\"text-bold-600\">{{vendorDetails.vendorCode}}</h6>\n                </div>\n              </div>\n              <div class=\"col-xl-4 col-lg-4 col-md-4\">\n                <div class=\"form-group mb-50\">\n                  <label class=\"col-form-label\">First Name</label>\n                  <h6 class=\"text-bold-600\">{{vendorDetails.name1}}</h6>\n                </div>\n              </div>\n              <div class=\"col-xl-4 col-lg-4 col-md-4\">\n                <div class=\"form-group mb-50\">\n                  <label class=\"col-form-label\">Last Name</label>\n                  <h6 class=\"text-bold-600\">{{vendorDetails.name2}}</h6>\n                </div>\n              </div>\n              <div class=\"col-xl-4 col-lg-4 col-md-4\">\n                <div class=\"form-group mb-50\">\n                  <label class=\"col-form-label\">Title</label>\n                  <h6 class=\"text-bold-600\">{{vendorDetails.title}}</h6>\n                </div>\n              </div>\n              <div class=\"col-xl-4 col-lg-4 col-md-4\">\n                <div class=\"form-group mb-50\">\n                  <label class=\"col-form-label\">Email Id</label>\n                  <h6 class=\"text-bold-600\">{{vendorDetails.emailId}}</h6>\n                </div>\n              </div>\n              <div class=\"col-xl-4 col-lg-4 col-md-4\">\n                <div class=\"form-group mb-50\">\n                  <label class=\"col-form-label\">Mobile No</label>\n                  <h6 class=\"text-bold-600\">{{vendorDetails.mobileNo}}</h6>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-xl-4 col-lg-4 col-md-4\">\n        <div class=\"card h-100\">\n          <div class=\"card-body\">\n            <div class=\"row\">\n              <div class=\"col-md-12\">\n                <h5 class=\"page-title-view\">Address</h5>\n              </div>\n              <div class=\"col-xl-12 col-lg-12 col-md-12\">\n                <div class=\"form-group mb-50\">\n                  <label class=\"col-form-label\">Street</label>\n                  <h6 class=\"text-bold-600\">{{vendorDetails.street}}</h6>\n                </div>\n              </div>\n              <div class=\"col-xl-12 col-lg-12 col-md-12\">\n                <div class=\"form-group mb-50\">\n                  <label class=\"col-form-label\">Street 2</label>\n                  <h6 class=\"text-bold-600\">{{vendorDetails.street2}}</h6>\n                </div>\n              </div>\n              <div class=\"col-xl-6 col-lg-6 col-md-12\">\n                <div class=\"form-group mb-50\">\n                  <label class=\"col-form-label\">Postal Code</label>\n                  <h6 class=\"text-bold-600\">{{vendorDetails.postCode}}</h6>\n                </div>\n              </div>\n              <div class=\"col-xl-6 col-lg-6 col-md-12\">\n                <div class=\"form-group mb-50\">\n                  <label class=\"col-form-label\">City</label>\n                  <h6 class=\"text-bold-600\">{{vendorDetails.city}}</h6>\n                </div>\n              </div>\n              <div class=\"col-xl-6 col-lg-6 col-md-12\">\n                <div class=\"form-group mb-50\">\n                  <label class=\"col-form-label\">State</label>\n                  <h6 class=\"text-bold-600\">{{vendorDetails.region}}</h6>\n                </div>\n              </div>\n              <div class=\"col-xl-6 col-lg-6 col-md-12\">\n                <div class=\"form-group mb-50\">\n                  <label class=\"col-form-label\">Country</label>\n                  <h6 class=\"text-bold-600\">{{vendorDetails.country}}</h6>\n                </div>\n              </div>\n              <div class=\"col-xl-6 col-lg-6 col-md-12\">\n                <div class=\"form-group mb-50\">\n                  <label class=\"col-form-label\">Grouping</label>\n                  <h6 class=\"text-bold-600\">{{vendorDetails.grouping}}</h6>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-xl-8 col-lg-8 col-md-8\">\n        <div class=\"row\">\n          <div class=\"col-xl-12 col-lg-12 col-md-12\">\n            <div class=\"card mb-50\">\n              <div class=\"card-body\">\n                <div class=\"row\">\n                  <div class=\"col-md-12\">\n                    <h5 class=\"page-title-view\">Bank Account Details</h5>\n                  </div>\n                  <div class=\"col-xl-4 col-lg-6 col-md-12\">\n                    <div class=\"form-group mb-50\">\n                      <label class=\"col-form-label\">Account Holder</label>\n                      <h6 class=\"text-bold-600\">{{vendorDetails.accountHolder}}</h6>\n                    </div>\n                  </div>\n                  <div class=\"col-xl-3 col-lg-6 col-md-12\">\n                    <div class=\"form-group mb-50\">\n                      <label class=\"col-form-label\">Account No</label>\n                      <h6 class=\"text-bold-600\">{{vendorDetails.accountNo}}</h6>\n                    </div>\n                  </div>\n                  <div class=\"col-xl-3 col-lg-6 col-md-12\">\n                    <div class=\"form-group mb-50\">\n                      <label class=\"col-form-label\">IFSC Code</label>\n                      <h6 class=\"text-bold-600\">{{vendorDetails.ifscCode}}</h6>\n                    </div>\n                  </div>\n                  <div class=\"col-xl-2 col-lg-6 col-md-12\">\n                    <div class=\"form-group mb-50\">\n                      <label class=\"col-form-label\">House Bank</label>\n                      <h6 class=\"text-bold-600\">{{vendorDetails.houseBank}}</h6>\n                    </div>\n                  </div>\n\n                </div>\n              </div>\n            </div>\n          </div>\n\n          <div class=\"col-xl-12 col-lg-12 col-md-12\">\n            <div class=\"card mb-0\">\n              <div class=\"card-body\">\n                <div class=\"row\">\n                  <div class=\"col-md-12\">\n                    <h5 class=\"page-title-view\">Other Details</h5>\n                  </div>\n                  <div class=\"col-xl-4 col-lg-6 col-md-12\">\n                    <div class=\"form-group mb-50\">\n                      <label class=\"col-form-label\">GST No</label>\n                      <h6 class=\"text-bold-600\">{{vendorDetails.gstnNo}}</h6>\n                    </div>\n                  </div>\n                  <div class=\"col-xl-4 col-lg-6 col-md-12\">\n                    <div class=\"form-group mb-50\">\n                      <label class=\"col-form-label\">PAN No</label>\n                      <h6 class=\"text-bold-600\">{{vendorDetails.panNo}}</h6>\n                    </div>\n                  </div>\n                  <div class=\"col-xl-4 col-lg-6 col-md-12\">\n                    <div class=\"form-group mb-50\">\n                      <label class=\"col-form-label\">Incoterms</label>\n                      <h6 class=\"text-bold-600\">{{vendorDetails.incoterm}}</h6>\n                    </div>\n                  </div>\n                  <div class=\"col-xl-4 col-lg-6 col-md-12\">\n                    <div class=\"form-group mb-50\">\n                      <label class=\"col-form-label\">Payment Terms</label>\n                      <h6 class=\"text-bold-600\">{{vendorDetails.payTerms}}</h6>\n                    </div>\n                  </div>\n                  <div class=\"col-xl-4 col-lg-6 col-md-12\">\n                    <div class=\"form-group mb-50\">\n                      <label class=\"col-form-label\">Currency</label>\n                      <h6 class=\"text-bold-600\">{{vendorDetails.currency}}</h6>\n                    </div>\n                  </div>\n                  <div class=\"col-xl-4 col-lg-6 col-md-12\">\n                    <div class=\"form-group mb-50\">\n                      <label class=\"col-form-label\">Reconciliation Account No</label>\n                      <h6 class=\"text-bold-600\">{{vendorDetails.recconAcNo}}</h6>\n                    </div>\n                  </div>\n                  <div class=\"col-xl-4 col-lg-6 col-md-12\">\n                    <div class=\"form-group mb-50\">\n                      <label class=\"col-form-label\">Scheme Supply</label>\n                      <h6 class=\"text-bold-600\">{{vendorDetails.shemaGroup}}</h6>\n                    </div>\n                  </div>\n                  <div class=\"col-xl-4 col-lg-6 col-md-12\">\n                    <div class=\"form-group mb-50\">\n                      <label class=\"col-form-label\">Search Term</label>\n                      <h6 class=\"text-bold-600\">{{vendorDetails.searchTerm}}</h6>\n                    </div>\n                  </div>\n\n                </div>\n              </div>\n            </div>\n          </div>\n\n        </div>\n      </div>\n    </div>\n\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/order-list/order-list.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/order-list/order-list.component.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"content-wrapper\">\n    <div class=\"content-header row mb-2\">\n        <div class=\"content-header-left col-md-6 col-12 mb-1\">\n            <h3 class=\"content-header-title mb-0\"><i class=\"fa-solid fa-file-invoice text-warning\"></i> Purchase Orders</h3>\n        </div>\n        <!-- <div class=\"content-header-right text-md-right col-md-6 col-12 mb-md-0 mb-0\">\n          <div class=\"form-group mb-0\">\n              <a class=\"btn btn-outline-primary\" data-toggle=\"modal\" data-target=\"#createquery\"><i class=\"feather icon-plus-square fa-lg\"></i> Raise Query</a>\n          </div>\n        </div> -->\n    </div>\n    <div class=\"content-body\">\n      <div class=\"card mb-0\">\n        <div class=\"card-body\">\n          <div class=\"table-responsive\">\n            <table id=\"orderlist\" class=\"table table-sm table-bordered table-hover mb-0\" style=\"width:100%;\">\n              <thead>\n                <tr>\n                  <th class=\"text-center\">Action</th>\n                  <th class=\"text-center\">Status</th>\n                  <th class=\"text-center\">PO No.</th>\n                  <th class=\"text-center\">Creation Date</th>\n                  <th class=\"text-center\">Purchase Org.</th>\n                  <th class=\"text-center\">Company Code.</th>\n                </tr>\n              </thead>\n              <tbody>\n                <tr *ngFor=\"let item of list\">\n                  <td class=\"text-center\"><a (click)=\"view(item)\" class=\"btn-link mr-50\" title=\"View\"><i class=\"feather icon-eye font-medium-1 \"></i></a></td>\n                  <td class=\"text-center\">{{item.status}}</td>\n                  <td class=\"text-center\">{{item.poNo}}</td>\n                  <td class=\"text-center\">{{item.createdOn}}</td>\n                  <td class=\"text-center\">{{item.purchaseOrg}}</td>\n                  <td class=\"text-center\">{{item.compCode}}</td>\n                </tr>\n              \n              </tbody>\n            </table>\n          </div>\n        </div>\n      </div>\n    </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/order-view/order-view.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/order-view/order-view.component.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"content-wrapper\">\n    <div class=\"content-header row mb-2\">\n        <div class=\"content-header-left col-md-6 col-12 mb-1\">\n            <h3 class=\"content-header-title mb-0\"><i class=\"feather icon-users text-warning\"></i> Order Details</h3>\n        </div>\n        <!-- <div class=\"content-header-right text-md-right col-md-6 col-12 mb-md-0 mb-0\">\n          <div class=\"form-group mb-0\">\n              <a class=\"btn btn-outline-primary\" data-toggle=\"modal\" data-target=\"#createquery\"><i class=\"feather icon-plus-square fa-lg\"></i> Raise Query</a>\n          </div>\n        </div> -->\n    </div>\n    <div class=\"content-body\">\n      <div class=\"card mb-0\">\n        <div class=\"card-body\">\n          <div class=\"row\">\n            <div class=\"col-xl-4 col-lg-4 col-md-4\">\n              <div class=\"form-group mb-50\">\n                <label><b>PO No :</b> {{viewObject.poNo}}</label>\n              </div>\n            </div>\n            <div class=\"col-xl-4 col-lg-4 col-md-4\">\n              <div class=\"form-group mb-50\">\n                <label><b>Creation Date :</b> {{viewObject.createdOn}}</label>\n              </div>\n            </div>\n            <div class=\"col-xl-4 col-lg-4 col-md-4\">\n              <div class=\"form-group mb-50\">\n                <label><b>Company No :</b> {{viewObject.compCode}}</label>\n              </div>\n            </div>\n            <div class=\"col-md-12\">\n              <div class=\"table-responsive\">\n                <table id=\"orderViewlist\" class=\"table table-sm table-bordered table-hover mb-0\" style=\"width:100%;\">\n                  <thead>\n                    <tr>\n                      <th style=\"width:12%;\" class=\"text-center\">Material Code</th>\n                      <th style=\"width:16%;\">Material Name</th>\n                      <th style=\"width:12%;\" class=\"text-right\">PO Quantity</th>\n                      <th style=\"width:12%;\" class=\"text-center\">UOM</th>\n                      <th style=\"width:11%;\" class=\"text-right\">Net Price</th>\n                      <th style=\"width:11%;\" class=\"text-center\">Plant</th>\n                      <th style=\"width:11%;\" class=\"text-center\">Delivery Date</th>\n                    </tr>\n                  </thead>\n                  <tbody>\n                    <tr *ngFor=\"let item of viewArr\">\n                      <td class=\"text-center\">{{item.materialCode}}</td>\n                      <td>{{item.materialName}}</td>\n                      <td class=\"text-right\">{{item.poQty}}</td>\n                      <td class=\"text-center\">{{item.uom}}</td>\n                      <td class=\"text-right\">{{item.netPrice}}</td>\n                      <td class=\"text-center\">{{item.plant}}</td>\n                      <td class=\"text-center\">{{item.deliveryDate}}</td>\n                    \n                    </tr>\n                  \n                  </tbody>\n                </table>\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"card-footer p-50\">\n          <div class=\"row\">\n            <div class=\"col-md-12 text-right\">\n              <button type=\"button\" class=\"btn btn-light round btn-min-width  mr-50\" (click)='back()'>Back</button>\n\n              <!-- <button type=\"button\" class=\"btn btn-secondary round btn-min-width btn-darken-2 shadow mr-50\" (click)='back()'>Back</button> -->\n              <button type=\"button\" *ngIf=\"orderData.status.toLowerCase() == 'pending'\"  (click)=\"rejectPopupOpen()\"  class=\"btn btn-danger round btn-min-width btn-darken-2 shadow mr-50\">Reject</button>\n              <button type=\"button\" *ngIf=\"orderData.status.toLowerCase() == 'pending'\"   (click)=\"approved()\" class=\"btn btn-success round btn-min-width btn-darken-1 shadow\">Approved</button>\n            </div>\n          </div>\n        </div>\n\n      </div>\n    </div>\n</div>\n<!-- Reject Popup -->\n<div class=\"modal fade\" id=\"rejectPopup\" data-backdrop=\"static\" data-keyboard=\"false\" tabindex=\"-1\" role=\"dialog\"\n   aria-labelledby=\"exampleModalCenterTitle\" aria-hidden=\"true\">\n   <div class=\"modal-dialog modal-dialog-centered modal-sm\" role=\"document\">\n      <div class=\"modal-content \">\n         <!--Header-->\n         <div class=\"modal-header\">\n          <h4 class=\"modal-title text-danger\" id=\"myModalLabel18\">Reject Reason</h4>\n          <!-- <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n            <span aria-hidden=\"true\">&times;</span>\n          </button> -->\n          </div>\n         <!--Body-->\n         <div class=\"modal-body\">\n\n          <textarea placeholder=\"Reason\" type=\"text\" rows=\"8\"  [(ngModel)]=\"rejectReason\"  class=\"form-control form-control-sm\"></textarea>\n         </div>\n         <!--Footer-->\n         <div class=\"modal-footer\">\n          <button type=\"button\" (click)=\"rejectPopupClose()\" class=\"btn btn-secondary round btn-min-width btn-darken-1 shadow\" >Close</button>\n          <button type=\"button\" [disabled]=\"rejectReason == ''\" (click)=\"rejectPopupSubmit()\" class=\"btn btn-success round btn-min-width btn-darken-1 shadow\">Submit</button>\n        </div>\n      </div>\n   </div>\n  </div>\n\n<!-- alertMsg -->\n<div class=\"modal fade\" id=\"alertMsg\" data-backdrop=\"static\" data-keyboard=\"false\" tabindex=\"-1\" role=\"dialog\"\n   aria-labelledby=\"exampleModalCenterTitle\" aria-hidden=\"true\">\n   <div class=\"modal-dialog modal-dialog-centered modal-sm\" role=\"document\">\n      <div class=\"modal-content text-center\">\n         <!--Header-->\n         <!--Body-->\n         <div class=\"modal-body\">\n            <p class=\"mb-2\"><i\n               [ngClass]=\"[ alertFlag === 'success' ? 'feather icon-bell font-large-4 text-success' : 'feather icon-bell font-large-4 text-danger']\"></i>\n            </p>\n            <h6>{{alertMessage}}</h6>\n         </div>\n         <!--Footer-->\n         <div class=\"modal-footer d-flex justify-content-center\">\n            <button  type=\"button\" class=\"btn btn-primary\"\n            (click)=\"okAlert()\">Ok</button>\n         </div>\n      </div>\n   </div>\n  </div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/query-list/query-list.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/query-list/query-list.component.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- <p>query-list works!</p>\n<a [routerLink]=\"['view']\" [queryParams]=\"{ jwt: '123'}\"  >Authenticate</a> -->\n\n<div class=\"content-wrapper\">\n   \n    <div class=\"content-header row mb-2\">\n        <div class=\"content-header-left col-md-6 col-12 mb-1\">\n            <h3 class=\"content-header-title mb-0\"><i class=\"fa-solid fa-comments text-warning\"></i> View Queries</h3>\n        </div>\n        <!-- -->\n            <div class=\"content-header-right text-md-right col-md-6 col-12 mb-md-0 mb-0\">\n                <div class=\"form-group mb-0\" id=\"addModal\">\n                    <a class=\"btn btn-outline-primary\" data-toggle=\"modal\" (click)=\"onAddQuery()\"><i class=\"feather icon-plus-square fa-lg\"></i> Raise Query</a>\n                </div>\n              </div>\n        <!-- </div> -->\n      \n    </div>\n    <div class=\"content-body\">\n      <div class=\"card mb-0\">\n        <div class=\"card-body\">\n          <div class=\"table-responsive\">\n            <table id=\"querylist12\" class=\"table table-sm table-bordered table-hover mb-0\" style=\"width:100%;\">\n              <thead>\n                <tr>\n                  <th>Action</th>\n                  <th class=\"text-center\">Query Id</th>\n                  <th class=\"text-center\">Query related to</th>\n              \n                  <th class=\"text-center\">Query/Issue</th>\n                  <th class=\"text-center\">status</th>\n                  <th class=\"text-center\">Attachments</th>\n                </tr>\n              </thead>\n              <tbody>\n                <tr *ngFor=\"let query of queryList;\">\n                  <td class=\"text-center align-middle\">\n                    <!-- <div class=\"dropdown\" routerLink=\"view/{{query.queryId}}\">\n                      <a class=\"feather icon-more-vertical dropdown-toggle\" id=\"dropdownMenuButton\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\"></a>\n                      <div class=\"dropdown-menu dropdown-menu-right\" aria-labelledby=\"dropdownMenuButton\" x-placement=\"bottom-end\" style=\"position: absolute; will-change: transform; top: 0px; left: 0px; transform: translate3d(-105px, 17px, 0px);\">\n                        <a class=\"dropdown-item\" title=\"View\"><i class=\"feather icon-eye font-medium-1 text-primary\"></i> View</a>\n                        <a class=\"dropdown-item\" title=\"Edit\"><i class=\"feather icon-edit font-medium-1 text-secondary\"></i> Edit</a>\n                        <a class=\"dropdown-item\" title=\"Delete\"><i class=\"feather icon-trash-2 font-medium-1 text-danger\"></i> Delete</a>\n                      </div>\n                    </div> -->\n                    <a routerLink=\"view/{{query.queryId}}\" class=\"btn-link mr-50\" title=\"View\"><i class=\"feather icon-eye font-medium-1 \"></i></a>\n                  </td>\n                  <td class=\"text-center\">{{query.queryId}}</td>\n                  <td class=\"text-center\">{{query.queryType}}</td>\n                  <td class=\"text-center\">{{query.query}}</td>\n                  <td class=\"text-center\"><span class=\"badge badge-pill badge-sm badge-success\">{{query.status}}</span></td>\n                  <td class=\"text-center\">{{query.attahments}} </td>\n                </tr>\n              </tbody>\n            </table>\n          </div>\n        </div>\n      </div>\n    </div>\n</div>\n\n    <div class=\"modal fade\" id=\"createquery\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel18\" aria-hidden=\"true\">\n        <div class=\"modal-dialog modal-lg\" role=\"document\">\n          <div class=\"modal-content\">\n            <div class=\"modal-header\">\n            <h4 class=\"modal-title\" id=\"myModalLabel18\">Raise Query</h4>\n            <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n              <span aria-hidden=\"true\">&times;</span>\n            </button>\n            </div>\n            <form [formGroup]=\"formData\">\n              <div class=\"modal-body\">\n                  <div class=\"row\">\n                     <div class=\"col-xl-4 col-lg-4 col-md-4\">\n                      <div class=\"form-group mb-50 row\">\n                        <label class=\"col-md-12 col-form-label\">Query Type</label>\n                        <div class=\"col-md-12\">\n                          <!-- <input type=\"text\" formControlName=\"queryType\" class=\"form-control form-control-sm\" > -->\n                          <select  formControlName=\"queryType\"  class=\"custom-select custom-select-sm\" >\n                            <option value=\"\">Select</option>\n                            <option *ngFor=\"let type of queryTypes\" [value]=\"type.code\">\n                              {{type.value}} ({{type.code}})\n                            </option>\n                          </select>\n                        </div>\n                      </div>\n                    </div>\n                   <div class=\"col-xl-4 col-lg-4 col-md-4\">\n                      <div class=\"form-group mb-50 row\">\n                        <label class=\"col-md-12 col-form-label\">Subject</label>\n                        <div class=\"col-md-12\">\n                          <input type=\"text\" formControlName=\"subject\" class=\"form-control form-control-sm\" >\n                          <!-- <div class=\"input-group input-group-sm\">\n                              <input type=\"text\" name=\"startdate\"  class=\"form-control datetimepicker-input\" id=\"id_proposaldate\" autocomplete=\"off\">\n                              <div class=\"input-group-append\">\n                                <span class=\"input-group-text\" for=\"id_proposaldate\"><i class=\"feather icon-calendar\"></i></span>\n                              </div>\n                            </div> -->\n                          <!-- <input type=\"number\" class=\"form-control form-control-sm\" > -->\n                        </div>\n                      </div>\n                    </div>\n                    <!-- <div class=\"col-xl-4 col-lg-4 col-md-4\">\n                      <div class=\"form-group mb-50 row\">\n                        <label class=\"col-md-12 col-form-label\"></label>\n                        <div class=\"col-md-12\">\n                          <input type=\"text\" class=\"form-control form-control-sm\" >\n                        </div>\n                      </div>\n                    </div> -->\n                    <!-- <div class=\"w-100\"></div> -->\n                   \n                   <div class=\"col-xl-4 col-lg-4 col-md-4\">\n                      <div class=\"form-group mb-50 row\">\n                        <label class=\"col-md-12 col-form-label\">Attachments</label>\n                        <div class=\"col-md-12\">\n                            <div class=\"custom-file\">\n                                <input type=\"file\" class=\"custom-file-input\"  (change)=\"upload($event.target.files)\"  id=\"inputGroupFile01\">\n                                <label class=\"custom-file-label\" for=\"inputGroupFile01\">{{attachment ? attachment.name :\n                                  'Choose file'}}</label>\n                            </div>\n                          <!-- <div class=\"custom-file\">\n                              <input type=\"file\" class=\"custom-file-input\" id=\"inputGroupFile01\">\n                              <label class=\"custom-file-label\" for=\"inputGroupFile01\">Choose file</label>\n                          </div> -->\n                        </div>\n                        <!-- <div class=\"col-md-12 mt-50\">\n                          <a class=\"btn btn-link p-50\" title=\"View\"><i class=\"fa fa-file-pdf-o font-large-1 text-danger\"></i></a>\n                          <a class=\"btn btn-link p-50\" title=\"View\"><i class=\"fa fa-file-word-o font-large-1 text-primary\"></i></a>\n                          <a class=\"btn btn-link p-50\" title=\"View\"><i class=\"fa fa-file-excel-o font-large-1 text-info\"></i></a>\n                          <a class=\"btn btn-link p-50\" title=\"View\"><i class=\"fa fa-file-image-o font-large-1 text-secondary\"></i></a>\n                          <a class=\"btn btn-link p-50\" title=\"View\"><i class=\"fa fa-file-word-o font-large-1 text-primary\"></i></a>\n                        </div> -->\n                      </div>\n                    </div>\n                   <div class=\"col-xl-4 col-lg-4 col-md-4\">\n                      <div class=\"form-group mb-50 row\">\n                        <label class=\"col-md-12 col-form-label\">Query/Issue</label>\n                        <div class=\"col-md-12\">\n                          <textarea formControlName=\"query\" rows=\"6\" cols=\"80\" class=\"form-control form-control-sm\"></textarea>\n                        </div>\n                      </div>\n                    </div>\n                    <!-- <div class=\"col-xl-4 col-lg-4 col-md-4\">\n                      <div class=\"form-group mb-50 row\">\n                        <label class=\"col-md-12 col-form-label\">Tag Users</label>\n                        <div class=\"col-md-12\">\n                          <select class=\"custom-select custom-select-sm\">\n                            <option value=\"\">Select</option>\n                          </select>\n                        </div>\n                      </div>\n                    </div> -->\n                  </div>\n                </div>\n                <div class=\"modal-footer\">\n                  <button type=\"button\" class=\"btn btn-secondary round btn-min-width btn-darken-1 shadow\" data-dismiss=\"modal\">Close</button>\n                  <button type=\"button\" (click)=\"onSubmit()\" class=\"btn btn-success round btn-min-width btn-darken-1 shadow\">Submit</button>\n                </div>\n            </form>\n           \n      \n          </div>\n          </div>\n        </div>\n<!-- Modal -->\n\n<div class=\"modal fade\" id=\"alertMsg\" data-backdrop=\"static\"  data-keyboard=\"false\"\ntabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalCenterTitle\" aria-hidden=\"true\">\n\n    <div class=\"modal-dialog modal-dialog-centered modal-sm\" role=\"document\">\n\n      <div class=\"modal-content text-center\">\n\n        <!--Header-->\n\n        <!--Body-->\n\n        <div class=\"modal-body\">\n\n          <p class=\"mb-2\"><i [ngClass]=\"[ alertResponse.status === 'success' ? 'feather icon-bell font-large-4 text-success' : 'feather icon-bell font-large-4 text-danger']\" ></i></p>        \n\n          <h6>{{alertResponse.message}}</h6>\n\n        </div>\n\n        <!--Footer-->\n\n        <div class=\"modal-footer d-flex justify-content-center\">\n\n          <button *ngIf=\"alertResponse.status === 'success'\" type=\"button\" class=\"btn btn-primary\" (click)=\"okAlert()\">Ok</button>\n          <button *ngIf=\"alertResponse.status !== 'success'\" type=\"button\" class=\"btn btn-primary\" data-dismiss=\"modal\">Ok</button>\n\n        </div>\n\n      </div>\n\n    </div>\n\n  </div>\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/query-mangement/query-mangement.component.html":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/query-mangement/query-mangement.component.html ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<router-outlet></router-outlet>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/query-view/query-view.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/query-view/query-view.component.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- <p>query-view works!</p>\n<button type=\"button\" (click)=\"onBack()\" \nclass=\"btn btn-secondary round btn-min-width btn-darken-2 shadow mr-50\">Back</button> -->\n\n<div class=\"content-wrapper\">\n    <div class=\"content-header row mb-2\">\n      <div class=\"content-header-left col-md-12 col-12\">\n        <h3 class=\"content-header-title mb-0\"><i class=\"feather icon-file-text text-warning\"></i> {{responseJson.queryId}}</h3>\n      </div>\n    </div>\n    <div class=\"content-body\">\n      <div class=\"row\">\n        <div class=\"col-md-4\">\n          <div class=\"card h-100 mb-0\">\n            <div class=\"card-header border-bottom-blue-grey border-bottom-lighten-5 py-1\">\n              <h4 class=\"lead-header-title mb-0\">Vendor Details</h4>\n            </div>\n            <div class=\"card-body p-0\">\n              <div class=\"list-group list-group-flush\">\n                <!-- <div class=\"list-group-item\">\n                  <div class=\"row\">\n                    <div class=\"col-7\">\n                      <h6 class=\"mb-0 lead-quetion\">Query id</h6>\n                    </div>\n                    <div class=\"col-5\">\n                      <h6 class=\"mb-0 lead-quetion\">{{responseJson.queryId}}</h6>\n                    </div>\n                  </div>\n                </div> -->\n                <div class=\"list-group-item\">\n                  <div class=\"row\">\n                    <div class=\"col-7\">\n                      <h6 class=\"mb-0 lead-quetion\">Query Type</h6>\n                    </div>\n                    <div class=\"col-5\">\n                      <h6 class=\"mb-0 lead-quetion\">{{responseJson.queryType}}</h6>\n                    </div>\n                  </div>\n                </div>\n                <div class=\"list-group-item\">\n                  <div class=\"row\">\n                    <div class=\"col-7\">\n                      <h6 class=\"mb-0 lead-quetion\">Subject</h6>\n                    </div>\n                    <div class=\"col-5\">\n                      <h6 class=\"mb-0 lead-quetion\">{{responseJson.subject}}</h6>\n                    </div>\n                  </div>\n                </div>\n                <div class=\"list-group-item\">\n                  <div class=\"row\">\n                    <div class=\"col-12\">\n                      <h6 class=\"mb-50 lead-quetion\">Query/Issue</h6>\n                    </div>\n                    <div class=\"col-12\">\n                      <h6 class=\"mb-0 lead-quetion\">{{responseJson.query}}</h6>\n                    </div>\n                  </div>\n                </div>\n                <div class=\"list-group-item\">\n                  <div class=\"row\">\n                    <div class=\"col-12\">\n                      <h6 class=\"mb-50 lead-quetion\">Attachments</h6>\n                    </div>\n                    <div class=\"col-12\">\n                      <a class=\"btn btn-link p-50\" title=\"View\"><i class=\"fa fa-file-pdf-o font-large-1 text-danger\"></i></a>\n                      <a class=\"btn btn-link p-50\" title=\"View\"><i class=\"fa fa-file-word-o font-large-1 text-primary\"></i></a>\n                      <a class=\"btn btn-link p-50\" title=\"View\"><i class=\"fa fa-file-excel-o font-large-1 text-info\"></i></a>\n                      <a class=\"btn btn-link p-50\" title=\"View\"><i class=\"fa fa-file-image-o font-large-1 text-secondary\"></i></a>\n                      <a class=\"btn btn-link p-50\" title=\"View\"><i class=\"fa fa-file-word-o font-large-1 text-primary\"></i></a>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"col-md-8\">\n          <div class=\"card bg-transparent chat-application shadow-none mb-0\">\n            <div class=\"card-body chat-scroll pt-50 text-center\" id=\"div1\">\n              <div class=\"chat-content\">\n                <ng-container *ngFor=\"let message of responseJson.answers\">\n                  <div class=\"chat\" *ngIf=\"message.action==='BLUE'\">\n                    <div class=\"chat-avatar\">\n                        <a class=\"avatar m-0\">\n                            <img src=\"assets/img/avatar-s-1.png\" alt=\"avatar\" height=\"36\" width=\"36\">\n                        </a>\n                    </div>\n                    <div class=\"chat-body\">\n                        <div class=\"chat-message\">\n                          <p>{{message.answer}}</p>\n                          <span class=\"chat-time\">{{message.createdOn}}</span>\n                            <!-- <p>How can we help? We're here for you!</p>\n                            <span class=\"chat-time\">02-02-2022 - 7:45 AM</span> -->\n                        </div>\n                    </div>\n                </div>\n                <div class=\"chat chat-left\" *ngIf=\"message.action==='WHITE'\">\n                    <div class=\"chat-avatar\">\n                        <a class=\"avatar m-0\">\n                            <img src=\"assets/img/avatar-s-1.png\" alt=\"avatar\" height=\"36\" width=\"36\">\n                        </a>\n                    </div>\n                    <div class=\"chat-body\">\n                        <div class=\"chat-message\">\n                            <p>{{message.answer}}</p>\n                            <span class=\"chat-time\">{{message.createdOn}}</span>\n                        </div>\n                        <!-- <div class=\"chat-message\">\n                            <p>It should be Bootstrap 4 compatible.</p>\n                            <span class=\"chat-time\">02-02-2022 - 7:58 AM</span>\n                        </div> -->\n                    </div>\n                </div>\n                </ng-container>\n              \n                <!-- <div class=\"badge badge-pill badge-light-secondary my-1\">Yesterday</div>\n                <div class=\"chat\">\n                    <div class=\"chat-avatar\">\n                        <a class=\"avatar m-0\">\n                            <img src=\"assets/img/avatar-s-1.png\" alt=\"avatar\" height=\"36\" width=\"36\">\n                        </a>\n                    </div>\n                    <div class=\"chat-body\">\n                        <div class=\"chat-message\">\n                            <p>Absolutely!</p>\n                            <span class=\"chat-time\">02-02-2022 - 8:00 AM</span>\n                        </div>\n                        <div class=\"chat-message\">\n                            <p>Stack admin is the responsive bootstrap 4 admin template.</p>\n                            <span class=\"chat-time\">02-02-2022 - 8:01 AM</span>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"chat chat-left\">\n                    <div class=\"chat-avatar\">\n                        <a class=\"avatar m-0\">\n                            <img src=\"assets/img/avatar-s-1.png\" alt=\"avatar\" height=\"36\" width=\"36\">\n                        </a>\n                    </div>\n                    <div class=\"chat-body\">\n                        <div class=\"chat-message\">\n                            <p>Looks clean and fresh UI.</p>\n                            <span class=\"chat-time\">02-02-2022 - 10:12 AM</span>\n                        </div>\n                        <div class=\"chat-message\">\n                            <p>It's perfect for my next project.</p>\n                            <span class=\"chat-time\">02-02-2022 - 10:15 AM</span>\n                        </div>\n                        <div class=\"chat-message\">\n                            <p>How can I purchase it?</p>\n                            <span class=\"chat-time\">02-02-2022 - 10:18 AM</span>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"chat\">\n                    <div class=\"chat-avatar\">\n                        <a class=\"avatar m-0\">\n                            <img src=\"assets/img/avatar-s-1.png\" alt=\"avatar\" height=\"36\" width=\"36\">\n                        </a>\n                    </div>\n                    <div class=\"chat-body\">\n                        <div class=\"chat-message\">\n                            <p>Thanks , from ThemeForest.</p>\n                            <span class=\"chat-time\">02-02-2022 - 10:20 AM</span>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"chat chat-left\">\n                    <div class=\"chat-avatar\">\n                        <a class=\"avatar m-0\">\n                            <img src=\"assets/img/avatar-s-1.png\" alt=\"avatar\" height=\"36\" width=\"36\">\n                        </a>\n                    </div>\n                    <div class=\"chat-body\">\n                        <div class=\"chat-message\">\n                            <p>I will purchase it for sure.</p>\n                            <span class=\"chat-time\">02-02-2022 - 3:32 PM</span>\n                        </div>\n                        <div class=\"chat-message\">\n                            <p>Thanks.</p>\n                            <span class=\"chat-time\">02-02-2022 - 3:33 PM</span>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"chat\">\n                    <div class=\"chat-avatar\">\n                        <a class=\"avatar m-0\">\n                            <img src=\"assets/img/avatar-s-1.png\" alt=\"avatar\" height=\"36\" width=\"36\">\n                        </a>\n                    </div>\n                    <div class=\"chat-body\">\n                        <div class=\"chat-message\">\n                            <p>Great, Feel free to get in touch on</p>\n                            <span class=\"chat-time\">02-02-2022 - 3:34 AM</span>\n                        </div>\n                        <div class=\"chat-message\">\n                            <p>https://pixinvent.ticksy.com/</p>\n                            <span class=\"chat-time\">02-02-2022 - 3:35 AM</span>\n                        </div>\n                    </div>\n                </div> -->\n            </div>\n            </div>\n            <div class=\"card-footer chat-footer bg-transparent px-2 pt-1 pb-0\">\n                <form class=\"d-flex align-items-center\" [formGroup]=\"formData\" (ngSubmit)=\"onSubmit()\">\n                    <i class=\"feather icon-user cursor-pointer\"></i>\n                    <i class=\"feather icon-paperclip ml-1 cursor-pointer\"></i>\n                    <input type=\"text\" class=\"form-control chat-message-send mx-1\" formControlName=\"answer\" placeholder=\"Type your message here...\">\n                    <button type=\"submit\"  class=\"btn btn-primary glow send d-lg-flex\"><i class=\"feather icon-play\"></i>\n                        <span class=\"d-none d-lg-block mx-50\">Send</span></button>\n                </form>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  ");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/quotation-approval-list/quotation-approval-list.component.html":
/*!****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/quotation-approval-list/quotation-approval-list.component.html ***!
  \****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"content-wrapper\">\n    <div class=\"content-header row mb-2\">\n        <div class=\"content-header-left col-md-6 col-12 mb-1\">\n            <h3 class=\"content-header-title mb-0\"><i class=\"fa-solid fa-file-signature text-warning\"></i> Quotation Approval</h3>\n        </div>\n        <!-- <div class=\"content-header-right text-md-right col-md-6 col-12 mb-md-0 mb-0\">\n          <div class=\"form-group mb-0\">\n              <a class=\"btn btn-outline-primary\" data-toggle=\"modal\" data-target=\"#createquery\"><i class=\"feather icon-plus-square fa-lg\"></i> Raise Query</a>\n          </div>\n        </div> -->\n    </div>\n    <div class=\"content-body\">\n      <div class=\"card mb-0\">\n        <div class=\"card-body\">\n          <div class=\"table-responsive\">\n            <table id=\"quotationApprovalslist\" class=\"table table-sm table-bordered table-hover mb-0\" style=\"width:100%;\">\n              <thead>\n                <tr>\n                  <th class=\"text-center\">Action</th>\n                  <th class=\"text-center\">Quotation No.</th>\n                  <th class=\"text-center\">Status</th>\n                  <th class=\"text-center\" *ngIf=\"loginDetails.roleId != roleV\">Vendor Code</th>\n                  <th class=\"text-center\" *ngIf=\"loginDetails.roleId != roleV\">Vendor Name</th>\n                  <th class=\"text-center\">Creation Date</th>\n                  <th class=\"text-center\">Expiry Date</th>\n                  <th class=\"text-center\">Received Date</th>\n                </tr>\n              </thead>\n              <tbody>\n                <tr *ngFor=\"let item of quotationList\">\n                  <td class=\"text-center\"><a (click)=\"view(item)\" class=\"btn-link mr-50\" title=\"View\"><i class=\"feather icon-eye font-medium-1 \"></i></a></td>\n                  <td class=\"text-center\">{{item.quotationNo}}</td>\n                  <td class=\"text-center\">{{item.status}}</td>\n                  <td class=\"text-center\" *ngIf=\"loginDetails.roleId != roleV\">{{item.vendorCode}}</td>\n                  <td class=\"text-center\" *ngIf=\"loginDetails.roleId != roleV\">{{item.vendorFName}} {{item.vendorLName}}</td>\n                  <td class=\"text-center\">{{item.openingDate}}</td>\n                  <td class=\"text-center\">{{item.closeDate}}</td>\n                  <td class=\"text-center\">{{item.receivedOn}}</td>\n                </tr>\n              \n              </tbody>\n            </table>\n          </div>\n        </div>\n      </div>\n    </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/quotation-approval-view/quotation-approval-view.component.html":
/*!****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/quotation-approval-view/quotation-approval-view.component.html ***!
  \****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"content-wrapper\">\n    <div class=\"content-header row mb-2\">\n        <div class=\"content-header-left col-md-6 col-12 mb-1\">\n            <h3 class=\"content-header-title mb-0\"><i class=\"feather icon-users text-warning\"></i> Quotation Details</h3>\n        </div>\n        <!-- <div class=\"content-header-right text-md-right col-md-6 col-12 mb-md-0 mb-0\">\n          <div class=\"form-group mb-0\">\n              <a class=\"btn btn-outline-primary\" data-toggle=\"modal\" data-target=\"#createquery\"><i class=\"feather icon-plus-square fa-lg\"></i> Raise Query</a>\n          </div>\n        </div> -->\n    </div>\n    <div class=\"content-body\">\n      <div class=\"card mb-0\">\n        <div class=\"card-body\">\n          <div class=\"row\">\n            <div class=\"col-xl-4 col-lg-4 col-md-4\">\n              <div class=\"form-group mb-50\">\n                <label><b>Quotation No. :</b> {{quotationView.quotationNo}}</label>\n              </div>\n            </div>\n            <div class=\"col-xl-4 col-lg-4 col-md-4\">\n              <div class=\"form-group mb-50\">\n                <label><b>Creation Date :</b> {{quotationView.openingDate}}</label>\n              </div>\n            </div>\n            <div class=\"col-xl-4 col-lg-4 col-md-4\">\n              <div class=\"form-group mb-50\">\n                <label><b>Expiry Date :</b> {{quotationView.closeDate}}</label>\n              </div>\n            </div>\n            <div class=\"col-md-12\">\n              <div class=\"table-responsive\">\n                <table id=\"quotationApprovalsView\" class=\"table table-sm table-bordered table-hover mb-0\" style=\"width:100%;\">\n                  <thead>\n                    <tr>\n                      <th style=\"width:12%;\" class=\"text-center\">Material Code</th>\n                      <th style=\"width:16%;\">Material Name</th>\n                      <th style=\"width:16%;\" class=\"text-center\">Plant</th>\n                      <th style=\"width:16%;\">Storage Location</th>\n                      <th style=\"width:12%;\" class=\"text-right\">Delivery Date</th>\n                      <th style=\"width:12%;\" class=\"text-right\">Quantity</th>\n                      <th style=\"width:12%;\" class=\"text-center\">UOM</th>\n                      <th style=\"width:11%;\" class=\"text-center\">Price</th>\n                      <th style=\"width:11%;\" class=\"text-center\">Freight</th>\n                      <th style=\"width:11%;\" class=\"text-center\">Est.Del.Date</th>\n                    </tr>\n                  </thead>\n                  <tbody>\n                    <tr *ngFor=\"let item of quotMaterialList;let i = index\">\n                      <td class=\"text-center\">{{item.materialCode}}</td>\n                      <td>{{item.materialDesc}}</td>\n                      <td class=\"text-center\">{{item.plant}}</td>\n                      <td>{{item.storageLocation}}</td>\n                      <td>{{item.tempdeliveryDate}}</td>\n                      <td class=\"text-right\">{{item.rfqQuantity}}</td>\n                      <td class=\"text-center\">{{item.uom}}</td>\n                      <td class=\"p-50\"><input type=\"number\"  (change)=\"priceChange(item)\"  [(ngModel)]=\"item.tempprice\" class=\"form-control form-control-sm text-right\"/></td>\n                      <td class=\"p-50\"><input type=\"number\"  (change)=\"freightChange(item)\" [(ngModel)]=\"item.tempfreight\" class=\"form-control form-control-sm text-right\"/></td>\n\n                      <td class=\"p-50\"><input type=\"text\" placement=\"left\" [maxDate]=\"item.minMaxDate\" [(ngModel)]=\"item.tempestDelDate\" class=\"form-control form-control-sm\"\n                        bsDatepicker [bsConfig]=\"datePickerConfig\" autocomplete=\"off\" name=\"{{i}}+date\" readonly /></td>\n                    </tr>\n                  \n                  </tbody>\n                </table>\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"card-footer p-50\">\n          <div class=\"row\">\n            <div class=\"col-md-12 text-right\">\n              <button type=\"button\" class=\"btn btn-light round btn-min-width  mr-50\" (click)='back()'>Back</button>\n              <button type=\"button\"  (click)=\"rejectPopupOpen()\"  class=\"btn btn-danger round btn-min-width btn-darken-2 shadow mr-50\">Reject</button>\n\n              <!-- <button type=\"button\" class=\"btn btn-secondary round btn-min-width btn-darken-2 shadow mr-50\" (click)='back()'>Back</button> -->\n              <button type=\"submit\" (click)=\"submitResult()\" class=\"btn btn-success round btn-min-width btn-darken-1 shadow\">Approve</button>\n            </div>\n          </div>\n        </div>\n\n      </div>\n    </div>\n</div>\n\n<!-- Reject Popup -->\n<div class=\"modal fade\" id=\"rejectPopupQuotation\" data-backdrop=\"static\" data-keyboard=\"false\" tabindex=\"-1\" role=\"dialog\"\n   aria-labelledby=\"exampleModalCenterTitle\" aria-hidden=\"true\">\n   <div class=\"modal-dialog modal-dialog-centered modal-sm\" role=\"document\">\n      <div class=\"modal-content \">\n         <!--Header-->\n         <div class=\"modal-header\">\n          <h4 class=\"modal-title text-danger\" id=\"myModalLabel18\">Reject Reason</h4>\n          <!-- <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n            <span aria-hidden=\"true\">&times;</span>\n          </button> -->\n          </div>\n         <!--Body-->\n         <div class=\"modal-body\">\n\n          <textarea placeholder=\"Reason\" type=\"text\" rows=\"8\"  [(ngModel)]=\"rejectReason\"  class=\"form-control form-control-sm\"></textarea>\n         </div>\n         <!--Footer-->\n         <div class=\"modal-footer\">\n          <button type=\"button\" (click)=\"rejectPopupClose()\" class=\"btn btn-secondary round btn-min-width btn-darken-1 shadow\" >Close</button>\n          <button type=\"button\" [disabled]=\"rejectReason == ''\" (click)=\"rejectPopupSubmit()\" class=\"btn btn-success round btn-min-width btn-darken-1 shadow\">Submit</button>\n        </div>\n      </div>\n   </div>\n  </div>\n\n\n\n<div class=\"modal fade\" id=\"alertMsg\" data-backdrop=\"static\" data-keyboard=\"false\" tabindex=\"-1\" role=\"dialog\"\n   aria-labelledby=\"exampleModalCenterTitle\" aria-hidden=\"true\">\n   <div class=\"modal-dialog modal-dialog-centered modal-sm\" role=\"document\">\n      <div class=\"modal-content text-center\">\n         <!--Header-->\n         <!--Body-->\n         <div class=\"modal-body\">\n            <p class=\"mb-2\"><i\n               [ngClass]=\"[ alertFlag === 'success' ? 'feather icon-bell font-large-4 text-success' : 'feather icon-bell font-large-4 text-danger']\"></i>\n            </p>\n            <h6 [innerHTML]=\"alertMessage\"></h6>\n         </div>\n         <!--Footer-->\n         <div class=\"modal-footer d-flex justify-content-center\">\n            <button  type=\"button\" class=\"btn btn-primary\"\n            (click)=\"okAlert()\">Ok</button>\n         </div>\n      </div>\n   </div>\n  </div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/quotation-history-list/quotation-history-list.component.html":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/quotation-history-list/quotation-history-list.component.html ***!
  \**************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"content-wrapper\">\n    <div class=\"content-header row mb-2\">\n        <div class=\"content-header-left col-md-6 col-12 mb-1\">\n            <h3 class=\"content-header-title mb-0\"><i class=\"feather icon-users text-warning\"></i> Quotation History</h3>\n        </div>\n        <!-- <div class=\"content-header-right text-md-right col-md-6 col-12 mb-md-0 mb-0\">\n          <div class=\"form-group mb-0\">\n              <a class=\"btn btn-outline-primary\" data-toggle=\"modal\" data-target=\"#createquery\"><i class=\"feather icon-plus-square fa-lg\"></i> Raise Query</a>\n          </div>\n        </div> -->\n    </div>\n    <div class=\"content-body\">\n      <div class=\"card mb-0\">\n        <div class=\"card-body\">\n          <div class=\"table-responsive\">\n            <table id=\"quotationHistorylist\" class=\"table table-sm table-bordered table-hover mb-0\" style=\"width:100%;\">\n              <thead>\n                <tr>\n                  <th class=\"text-center\">Action</th>\n                  <th class=\"text-center\">Quotation No.</th>\n                  <th class=\"text-center\">Creation Date</th>\n                  <th class=\"text-center\">Expiry Date</th>\n                  <th class=\"text-center\" *ngIf=\"loginDetails.roleId != roleV\">Vendor Code</th>\n                  <th class=\"text-center\" *ngIf=\"loginDetails.roleId != roleV\">Vendor Name</th>\n                  <!-- <th class=\"text-center\">Received Date</th> -->\n                </tr>\n              </thead>\n              <tbody>\n                <tr *ngFor=\"let item of quotationList\">\n                  <td class=\"text-center\"><a (click)=\"view(item)\" class=\"btn-link mr-50\" title=\"View\"><i class=\"feather icon-eye font-medium-1 \"></i></a></td>\n                  <td class=\"text-center\">{{item.quotationNo}}</td>\n                  <td class=\"text-center\">{{item.openingDate}}</td>\n                  <td class=\"text-center\">{{item.closeDate}}</td>\n                  <td class=\"text-center\" *ngIf=\"loginDetails.roleId != roleV\">{{item.vendorCode}}</td>\n                  <td class=\"text-center\" *ngIf=\"loginDetails.roleId != roleV\">{{item.vendorFName}} {{item.vendorLName}}</td>\n                  <!-- <td class=\"text-center\">{{item.receivedOn}}</td> -->\n                </tr>\n              \n              </tbody>\n            </table>\n          </div>\n        </div>\n      </div>\n    </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/quotation-history-view/quotation-history-view.component.html":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/quotation-history-view/quotation-history-view.component.html ***!
  \**************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"content-wrapper\">\n    <div class=\"content-header row mb-2\">\n        <div class=\"content-header-left col-md-6 col-12 mb-1\">\n            <h3 class=\"content-header-title mb-0\"><i class=\"feather icon-users text-warning\"></i> Quotation Details</h3>\n        </div>\n        <!-- <div class=\"content-header-right text-md-right col-md-6 col-12 mb-md-0 mb-0\">\n          <div class=\"form-group mb-0\">\n              <a class=\"btn btn-outline-primary\" data-toggle=\"modal\" data-target=\"#createquery\"><i class=\"feather icon-plus-square fa-lg\"></i> Raise Query</a>\n          </div>\n        </div> -->\n    </div>\n    <div class=\"content-body\">\n      <div class=\"card mb-0\">\n        <div class=\"card-body\">\n          <div class=\"row\">\n            <div class=\"col-xl-4 col-lg-4 col-md-4\">\n              <div class=\"form-group mb-50\">\n                <label><b>Quotation No. :</b> {{quotationView.quotationNo}}</label>\n              </div>\n            </div>\n            <div class=\"col-xl-4 col-lg-4 col-md-4\">\n              <div class=\"form-group mb-50\">\n                <label><b>Creation Date :</b> {{quotationView.openingDate}}</label>\n              </div>\n            </div>\n            <div class=\"col-xl-4 col-lg-4 col-md-4\">\n              <div class=\"form-group mb-50\">\n                <label><b>Expiry Date :</b> {{quotationView.closeDate}}</label>\n              </div>\n            </div>\n            <div class=\"col-md-12\">\n              <div class=\"table-responsive\">\n                <table id=\"querylist\" class=\"table table-sm table-bordered table-hover mb-0\" style=\"width:100%;\">\n                  <thead>\n                    <tr>\n                      <th style=\"width:12%;\" class=\"text-center\">Material Code</th>\n                      <th style=\"width:16%;\">Material Name</th>\n                      <th style=\"width:16%;\" class=\"text-center\">Plant</th>\n                      <th style=\"width:16%;\">Storage Location</th>\n                      <th style=\"width:12%;\" class=\"text-right\">Quantity</th>\n                      <th style=\"width:12%;\" class=\"text-center\">UOM</th>\n                      <th style=\"width:11%;\" class=\"text-center\">Price</th>\n                      <th style=\"width:11%;\" class=\"text-center\">Freight</th>\n                      <th style=\"width:11%;\" class=\"text-center\">Est.Del.Date</th>\n                    </tr>\n                  </thead>\n                  <tbody>\n                    <tr *ngFor=\"let item of quotMaterialList\">\n                      <td class=\"text-center\">{{item.materialCode}}</td>\n                      <td>{{item.materialDesc}}</td>\n                      <td class=\"text-center\">{{item.plant}}</td>\n                      <td>{{item.storageLocation}}</td>\n                      <td class=\"text-right\">{{item.rfqQuantity}}</td>\n                      <td class=\"text-center\">{{item.uom}}</td>\n                      <td class=\"p-50 text-right\">{{item.tempprice}}</td>\n                      <td class=\"p-50 text-right\">{{item.freight}}</td>\n\n                      <td class=\"p-50 text-right\">{{item.tempestDelDate}}</td>\n                    </tr>\n                  \n                  </tbody>\n                </table>\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"card-footer p-50\">\n          <div class=\"row\">\n            <div class=\"col-md-12 text-right\">\n              <button type=\"button\" class=\"btn btn-light round btn-min-width  mr-50\" (click)='back()'>Back</button>\n\n              <!-- <button type=\"button\" class=\"btn btn-secondary round btn-min-width btn-darken-2 shadow mr-50\" (click)='back()'>Back</button> -->\n              <!-- <button type=\"submit\" (click)=\"submitResult()\" class=\"btn btn-success round btn-min-width btn-darken-1 shadow\">Submit</button> -->\n            </div>\n          </div>\n        </div>\n\n      </div>\n    </div>\n</div>\n\n<div class=\"modal fade\" id=\"alertMsg\" data-backdrop=\"static\" tabindex=\"-1\" role=\"dialog\"\n  aria-labelledby=\"exampleModalCenterTitle\" aria-hidden=\"true\">\n  <div class=\"modal-dialog modal-dialog-centered modal-sm\" role=\"document\">\n    <div class=\"modal-content text-center\">\n      <!--Header-->\n      <!--Body-->\n      <div class=\"modal-body\">\n        <p class=\"mb-2\"><i\n            [ngClass]=\"[ alertFlag === 'success' ? 'feather icon-bell font-large-4 text-success' : 'feather icon-bell font-large-4 text-danger']\"></i>\n        </p>\n        <h6>{{alertMessage}}</h6>\n      </div>\n      <!--Footer-->\n      <div class=\"modal-footer d-flex justify-content-center\">\n        <button type=\"button\" class=\"btn btn-cust-primary\" (click)=\"okAlert()\">Ok</button>\n      </div>\n    </div>\n  </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/quotation-list/quotation-list.component.html":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/quotation-list/quotation-list.component.html ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"content-wrapper\">\n    <div class=\"content-header row mb-2\">\n        <div class=\"content-header-left col-md-6 col-12 mb-1\">\n            <h3 class=\"content-header-title mb-0\"><i class=\"fa-solid fa-file-signature text-warning\"></i> Request For Quotation</h3>\n        </div>\n        <!-- <div class=\"content-header-right text-md-right col-md-6 col-12 mb-md-0 mb-0\">\n          <div class=\"form-group mb-0\">\n              <a class=\"btn btn-outline-primary\" data-toggle=\"modal\" data-target=\"#createquery\"><i class=\"feather icon-plus-square fa-lg\"></i> Raise Query</a>\n          </div>\n        </div> -->\n    </div>\n    <div class=\"content-body\">\n      <div class=\"card mb-0\">\n        <div class=\"card-body\">\n          <div class=\"table-responsive\">\n            <table id=\"quotationlist\" class=\"table table-sm table-bordered mb-0\" style=\"width:100%;\">\n              <thead>\n                <tr>\n                  <th class=\"text-center\">Action</th>\n                  <th class=\"text-center\">Quotation No.</th>\n                  <th class=\"text-center\">Status</th>\n                  <th class=\"text-center\" *ngIf=\"loginDetails.roleId != roleV\">Vendor Code</th>\n                  <th class=\"text-center\" *ngIf=\"loginDetails.roleId != roleV\">Vendor Name</th>\n                  <th class=\"text-center\">Creation Date</th>\n                  <th class=\"text-center\">Expiry Date</th>\n                  <!-- <th class=\"text-center\">Received Date</th> -->\n                  </tr>\n              </thead>\n              <tbody>\n                <tr *ngFor=\"let item of quotationList\">\n                  <td class=\"text-center\"><a (click)=\"view(item)\" class=\"btn-link mr-50\" title=\"View\"><i class=\"feather icon-eye font-medium-1 \"></i></a></td>\n                  <td class=\"text-center\">{{item.quotationNo}}</td>\n                  <td class=\"text-center\">\n                     <span *ngIf=\"item.status != 'Rejected'\">{{item.status}}</span>\n                     <a class=\"btn-link reject\"  *ngIf=\"item.status == 'Rejected'\" (click)=\"showReason(item)\">{{item.status}}</a>\n                  </td>\n                  <td class=\"text-center\" *ngIf=\"loginDetails.roleId != roleV\">{{item.vendorCode}}</td>\n                  <td class=\"text-center\" *ngIf=\"loginDetails.roleId != roleV\">{{item.vendorFName}} {{item.vendorLName}}</td>\n                  <td class=\"text-center\">{{item.openingDate}}</td>\n                  <td class=\"text-center\">{{item.closeDate}}</td>\n                  <!-- <td class=\"text-center\">{{item.receivedOn}}</td> -->\n                 </tr>\n              \n              </tbody>\n            </table>\n          </div>\n        </div>\n      </div>\n    </div>\n</div>\n\n<!-- alertMsg -->\n<div class=\"modal fade\" id=\"alertMsg\" data-backdrop=\"static\" data-keyboard=\"false\" tabindex=\"-1\" role=\"dialog\"\n   aria-labelledby=\"exampleModalCenterTitle\" aria-hidden=\"true\">\n   <div class=\"modal-dialog modal-dialog-centered modal-sm\" role=\"document\">\n      <div class=\"modal-content text-center\">\n         <!--Header-->\n         <div class=\"modal-header\">\n          <h4 class=\"modal-title text-danger\" id=\"myModalLabel18\">Reject Reason</h4>\n          <!-- <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n            <span aria-hidden=\"true\">&times;</span>\n          </button> -->\n          </div>\n         <!--Body-->\n         <div class=\"modal-body\">\n           <div class=\"row\">\n             <!-- <div class=\"col-sm-12 text-center\"><img width=\"150px\" src=\"assets/img/th-rejected.png\" alt=\"\"></div> -->\n             <div class=\"col-sm-12 text-center\"><h6 class=\"mt-1\">{{alertMessage}}</h6></div>\n           </div>\n            <!-- <p class=\"mb-2\">\n              <i [ngClass]=\"[ alertFlag === 'success' ? 'feather icon-bell font-large-4 text-success' : 'feather icon-bell font-large-4 text-warning']\"></i>\n            </p> -->\n            <!-- <h6>{{alertMessage}}</h6> -->\n         </div>\n         <!--Footer-->\n         <div class=\"modal-footer d-flex justify-content-center\">\n            <button  type=\"button\" class=\"btn btn-secondary round btn-min-width btn-darken-2 shadow\"\n            (click)=\"okAlert()\">Close</button>\n         </div>\n      </div>\n   </div>\n  </div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/quotation-view/quotation-view.component.html":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/quotation-view/quotation-view.component.html ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"content-wrapper\">\n    <div class=\"content-header row mb-2\">\n        <div class=\"content-header-left col-md-6 col-12 mb-1\">\n            <h3 class=\"content-header-title mb-0\"><i class=\"feather icon-users text-warning\"></i> Quotation Details</h3>\n        </div>\n        <!-- <div class=\"content-header-right text-md-right col-md-6 col-12 mb-md-0 mb-0\">\n          <div class=\"form-group mb-0\">\n              <a class=\"btn btn-outline-primary\" data-toggle=\"modal\" data-target=\"#createquery\"><i class=\"feather icon-plus-square fa-lg\"></i> Raise Query</a>\n          </div>\n        </div> -->\n    </div>\n    <div class=\"content-body\">\n      <div class=\"card mb-0\">\n        <div class=\"card-body\">\n          <div class=\"row\">\n            <div class=\"col-xl-4 col-lg-4 col-md-4\">\n              <div class=\"form-group mb-50\">\n                <label><b>Quotation No. :</b> {{quotationView.quotationNo}}</label>\n              </div>\n            </div>\n            <div class=\"col-xl-3 col-lg-3 col-md-3\">\n              <div class=\"form-group mb-50\">\n                <label><b>Creation Date :</b> {{quotationView.openingDate}}</label>\n              </div>\n            </div>\n            <div class=\"col-xl-3 col-lg-3 col-md-3\">\n              <div class=\"form-group mb-50\">\n                <label><b>Expiry Date :</b> {{quotationView.closeDate}}</label>\n              </div>\n            </div>\n            <div class=\"col-xl-2 col-lg-2 col-md-2\" [hidden]=\"quotationView.status != 'R'\">\n              <div class=\"form-group mb-50\">\n                <a  class=\"btn-link text-danger\" id=\"reasonId\" data-placement=\"left\" popover-trigger=\"focus\" data-toggle=\"popover\" title=\"Reason\" attr.data-content=\"{{rejectReason}}\"><b><i class=\"feather icon-x-circle fa-lg\"></i> Rejected</b></a>\n              </div>\n            </div>\n            <div class=\"w-100\"></div>\n          </div>\n          \n          <div class=\"row\">\n            <div class=\"col-md-12\">\n              <div class=\"\">\n                <table id=\"quotationView\" class=\"table table-sm table-bordered table-hover mb-0\" style=\"width:100%;\">\n                  <thead>\n                    <tr>\n                      <th style=\"width:12%;\" class=\"text-center\">Material Code</th>\n                      <th style=\"width:16%;\">Material Name</th>\n                      <th style=\"width:16%;\" class=\"text-center\">Plant</th>\n                      <th style=\"width:16%;\">Storage Location</th>\n                      <th style=\"width:12%;\" class=\"text-right\">Delivery Date</th>\n                      <th style=\"width:12%;\" class=\"text-right\">Quantity</th>\n                      <th style=\"width:12%;\" class=\"text-center\">UOM</th>\n                      <th style=\"width:11%;\" class=\"text-center\">Price</th>\n                      <th style=\"width:11%;\" class=\"text-center\">Freight</th>\n                      <th style=\"width:11%;\" class=\"text-center\">Est.Del.Date</th>\n                    </tr>\n                  </thead>\n                  <tbody>\n                    <tr *ngFor=\"let item of quotMaterialList;let i = index\">\n                      <td class=\"text-center\">{{item.materialCode}}</td>\n                      <td>{{item.materialDesc}}</td>\n                      <td class=\"text-center\">{{item.plant}}</td>\n                      <td>{{item.storageLocation}}</td>\n                      <td>{{item.tempdeliveryDate}}</td>\n                      <td class=\"text-right\">{{item.rfqQuantity}}</td>\n                      <td class=\"text-center\">{{item.uom}}</td>\n                      <td class=\"p-50\"><input type=\"number\" (change)=\"priceChange(item)\"  [(ngModel)]=\"item.tempprice\" class=\"form-control form-control-sm text-right\"/></td>\n                      <td class=\"p-50\"><input type=\"number\" (change)=\"freightChange(item)\" [(ngModel)]=\"item.tempfreight\" class=\"form-control form-control-sm text-right\"/></td>\n\n                      <td class=\"p-50\"><input type=\"text\" placement=\"left\" [maxDate]=\"item.minMaxDate\" [(ngModel)]=\"item.tempestDelDate\" class=\"form-control form-control-sm\"\n                        bsDatepicker [bsConfig]=\"datePickerConfig\" autocomplete=\"off\" name=\"{{i}}+date\" readonly /></td>\n                    </tr>\n                  \n                  </tbody>\n                </table>\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"card-footer p-50\">\n          <div class=\"row\">\n            <div class=\"col-md-12 text-right\">\n              <button type=\"button\" class=\"btn btn-light round btn-min-width  mr-50\" (click)='back()'>Back</button>\n\n              <!-- <button type=\"button\" class=\"btn btn-secondary round btn-min-width btn-darken-2 shadow mr-50\" (click)='back()'>Back</button> -->\n              <button type=\"submit\" (click)=\"submitResult()\" class=\"btn btn-success round btn-min-width btn-darken-1 shadow\">Submit</button>\n            </div>\n          </div>\n        </div>\n\n      </div>\n    </div>\n</div>\n\n\n<div class=\"modal fade\" id=\"alertMsg\" data-backdrop=\"static\" data-keyboard=\"false\" tabindex=\"-1\" role=\"dialog\"\n   aria-labelledby=\"exampleModalCenterTitle\" aria-hidden=\"true\">\n   <div class=\"modal-dialog modal-dialog-centered modal-sm\" role=\"document\">\n      <div class=\"modal-content text-center\">\n         <!--Header-->\n         <!--Body-->\n         <div class=\"modal-body\">\n            <p class=\"mb-2\"><i\n               [ngClass]=\"[ alertFlag === 'success' ? 'feather icon-bell font-large-4 text-success' : 'feather icon-bell font-large-4 text-danger']\"></i>\n            </p>\n            <h6>{{alertMessage}}</h6>\n         </div>\n         <!--Footer-->\n         <div class=\"modal-footer d-flex justify-content-center\">\n            <button  type=\"button\" class=\"btn btn-primary\"\n            (click)=\"okAlert()\">Ok</button>\n         </div>\n      </div>\n   </div>\n  </div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/session-expired/session-expired.component.html":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/session-expired/session-expired.component.html ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<div class=\"session-expired-bg\">\n  <div class=\"container\">\n    <div class=\"row align-items-center\" style=\"height:100vh;\">\n      <div class=\"col-md-10 offset-md-1 bg-white\">\n        <div class=\"card bg-transparent bg-white-md-none mb-0\">\n          <div class=\"card-body\">\n            <div class=\"row\">\n              <div class=\"col-sm-12 text-center\">\n                <img src=\"assets/img/session-expired.png\" class=\"img-fluid\" alt=\"\">\n              </div>\n              <div class=\"col-sm-12 text-center\">\n                <h1 class=\"session-expired-title mb-1\">Your Session has expired.<br/>Please Log in again.</h1>\n                <button type=\"button\" (click)=\"navigate()\" class=\"btn btn-login round\">Go to Login Page</button>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  </div>\n \n\n\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/side-menu/side-menu.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/side-menu/side-menu.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("    <div class=\"main-menu-content\">\r\n      <ul class=\"navigation navigation-main\" id=\"main-menu-navigation\" data-menu=\"menu-navigation\">\r\n        <li class=\" navigation-header\"><span>Menu</span><i class=\" feather icon-minus\" data-toggle=\"tooltip\" data-placement=\"right\" data-original-title=\"Menu\"></i></li>\r\n        <!-- <ng-container *ngFor=\"let menu of sideMenu\">\r\n          <li class=\"active nav-item\" [ngClass]=\"{'has-sub':menu.subMenuList}\"><a routerLink=\"changePassword\"><i class=\"feather icon-unlock\"></i><span class=\"menu-title\" data-i18n=\"Change Password\">{{menu.menuName}}</span></a></li>\r\n          <ng-container *ngIf=\"menu.subMenuList\">\r\n            <ul *ngFor=\"let submenu of menu.subMenuList\"  class=\"menu-content\" style=\"\">\r\n              <li class=\"is-shown\"><a class=\"menu-item\" href=\"dashboard-ecommerce.html\" data-i18n=\"eCommerce\">{{submenu.menuName}}</a>\r\n              </li>\r\n              </ul>\r\n          </ng-container>\r\n         \r\n        </ng-container> -->\r\n        <ng-container *ngFor=\"let menu of sideMenu\">\r\n          <ng-container *ngIf=\"menu.subMenuList.length>0\">\r\n            <li class=\" nav-item has-sub\"><a >\r\n              <!-- <i  class=\"feather icon-activity\"></i>iconClass -->\r\n              <i  class=\"{{menu.iconClass}}\"></i>\r\n              <span class=\"menu-title\" data-i18n=\"Dashboard\">{{menu.menuName}}</span></a>\r\n              <ul   class=\"menu-content\" style=\"\">\r\n                    <li *ngFor=\"let submenu of menu.subMenuList\"  class=\"is-shown\"  >\r\n                      <a  [routerLinkActive]=\"['active']\" routerLink=\"{{submenu.action}}\"   class=\"menu-item\"  data-i18n=\"eCommerce\">{{submenu.menuName}}</a>\r\n                    </li>\r\n                  \r\n                </ul>\r\n            </li>\r\n          </ng-container>\r\n\r\n          <ng-container *ngIf=\"menu.subMenuList.length==0\">\r\n            <li class=\" nav-item \" ><a [routerLink]=\"menu.action===''?'login':menu.action\"   >\r\n              <!-- <i class=\"feather icon-activity\"  ></i>{{menu.iconClass}} -->\r\n              <i class=\"{{menu.iconClass}}\"  ></i>\r\n              <span   class=\"menu-title\" data-i18n=\"Dashboard\"  >{{menu.menuName}}</span></a>\r\n            </li>\r\n          </ng-container>\r\n     \r\n        </ng-container>\r\n        <!-- <li class=\" nav-item\"><a href=\"app-email.html\"><i class=\"feather icon-users\"></i><span class=\"menu-title\" data-i18n=\"My Profile\">My Profile</span></a></li>\r\n        <li class=\"active nav-item\"><a routerLink=\"changePassword\"><i class=\"feather icon-unlock\"></i><span class=\"menu-title\" data-i18n=\"Change Password\">Change Password</span></a></li> -->\r\n      </ul>\r\n    </div>\r\n ");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/sign-up-page/sign-up-page.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/sign-up-page/sign-up-page.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/success-error-message/success-error-message.component.html":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/success-error-message/success-error-message.component.html ***!
  \************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"modal fade\" id=\"alertMsg\" data-backdrop=\"static\" data-keyboard=\"false\" tabindex=\"-1\" role=\"dialog\"\n  aria-labelledby=\"exampleModalCenterTitle\" aria-hidden=\"true\">\n\n  <div class=\"modal-dialog modal-dialog-centered modal-sm\" role=\"document\">\n\n    <div class=\"modal-content text-center\">\n\n      <!--Header-->\n\n      <!--Body-->\n\n      <div class=\"modal-body\">\n\n        <p class=\"mb-2\"><i\n            [ngClass]=\"[ alertResponse.status === 'success' ? 'feather icon-bell font-large-4 text-success' : 'feather icon-bell font-large-4 text-danger']\"></i>\n        </p>\n\n        <h6>{{alertResponse.message}}</h6>\n\n      </div>\n\n      <!--Footer-->\n\n      <div class=\"modal-footer d-flex justify-content-center\">\n\n        <button *ngIf=\"alertResponse.status === 'success'\" type=\"button\" class=\"btn btn-primary\"\n          (click)=\"okAlert()\">Ok</button>\n        <button *ngIf=\"alertResponse.status !== 'success'\" type=\"button\" class=\"btn btn-primary\"\n          data-dismiss=\"modal\">Ok</button>\n\n      </div>\n\n    </div>\n\n  </div>\n\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/user-creation/user-creation.component.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/user-creation/user-creation.component.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"content-wrapper\">\r\n    <div class=\"content-header row mb-2\">\r\n        <div class=\"content-header-left col-md-6 col-12 mb-1\">\r\n            <h3 class=\"content-header-title mb-0\"><i class=\"feather icon-users text-warning\"></i> User Creation</h3>\r\n        </div>\r\n        <div class=\"content-header-right text-md-right col-md-6 col-12 mb-md-0 mb-0\">\r\n          <div class=\"form-group mb-0\">\r\n            <!-- <a class=\"btn btn-link\" routerLink=\"create\"><i class=\"feather icon-user-plus text-primary fa-lg\"></i> Create User</a> -->\r\n\r\n              <a class=\"btn btn-outline-primary\" (click)=\"onCreate()\"><i class=\"feather icon-user-plus fa-lg\"></i> Create User</a>\r\n          </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"content-body\">\r\n      <div class=\"card\">\r\n        <div class=\"card-body\">\r\n          <!-- <button mat-raised-button (click)=\"openDialog()\">click</button> -->\r\n          <div class=\"table-responsive\">\r\n            <table id=\"userlist\" class=\"table table-sm table-bordered table-hover mb-0\" style=\"width:100%;\">\r\n                <thead>\r\n                    <tr>\r\n                      <th class=\"text-center\">Action</th>\r\n                        <th>Status</th>\r\n                        <th>User Id</th>\r\n                        <th>First Name</th>\r\n                        <th>Last Name</th>\r\n                        <th>Profile</th>\r\n                        <th>Email id</th>\r\n                        <th class=\"text-center\">Mobile no.</th>\r\n                    </tr>\r\n                </thead>\r\n                <tbody>\r\n                  <ng-container *ngFor=\"let user of userList\">\r\n                    <tr *ngIf=\"user.isActive == 'Y'\">\r\n                      <td class=\"text-center\">\r\n                        <!-- <a class=\"btn-link mr-50\" title=\"View\"><i class=\"feather icon-eye font-medium-1 text-primary\"></i></a> -->\r\n                        <a class=\"btn-link mr-50\" title=\"Edit\"  (click)=\"onEdit(user)\"><i class=\"feather icon-edit font-medium-1 text-secondary\"></i></a>\r\n                        <a class=\"btn-link mr-50\" title=\"Delete\" (click)=\"onDeleteCofirm(user)\"><i class=\"feather icon-trash-2 font-medium-1 text-danger\"></i></a>\r\n                        <a class=\"btn-link\" title=\"Lock\" (click)=\"openLock_Unloc_popup(user)\"><i\r\n                          \r\n            [ngClass]=\"[ user.isLocked == 'Y' ? 'feather icon-lock font-medium-1 text-secondary' : 'feather icon-unlock font-medium-1 text-primary']\"></i>\r\n                           \r\n                         </a>\r\n                 \r\n                      </td>\r\n                      <td><span *ngIf=\"user.isLocked == 'Y'\" >In active</span>\r\n                        <!-- Locked  -->\r\n                        <span *ngIf=\"user.isLocked == 'N'\" >Active</span>\r\n                        <!-- Unlocked -->\r\n                      </td>\r\n                      <td>{{user.userId}}</td>\r\n                      <td>{{user.firstName}} </td>\r\n                      <td>{{user.lastName}}</td>\r\n                      <td>{{user.roleName}}</td>\r\n                      <td>{{user.emailId}}</td>\r\n                      <td class=\"text-center\">{{user.mobileNo}}</td>\r\n\r\n                     </tr>\r\n                  </ng-container>\r\n                  \r\n                    \r\n                </tbody>\r\n            </table>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n</div>\r\n\r\n<!-- Lock/Unlock popup-->\r\n<div class=\"modal fade\" id=\"alertLock\" data-backdrop=\"static\" tabindex=\"-1\" role=\"dialog\"\r\naria-labelledby=\"exampleModalCenterTitle\" aria-hidden=\"true\">\r\n<div class=\"modal-dialog modal-dialog-centered modal-sm\" role=\"document\">\r\n<div class=\"modal-content text-center\">\r\n  <!--Header-->\r\n  <!--Body-->\r\n  <div class=\"modal-body\">\r\n    <p class=\"mb-2\"><i\r\n      [ngClass]=\"[ lock_UnlockUserObj.isLocked != 'Y' ? 'feather icon-lock font-large-4 text-warning' : 'feather icon-unlock font-large-4 text-warning']\"\r\n        ></i>\r\n    </p>\r\n    <h6>Are you sure you want to {{lock_UnlockUserObj.isLocked != 'Y'?'lock':'unlock'}} ?</h6>\r\n  </div>\r\n  <!--Footer-->\r\n  <div class=\"modal-footer d-flex justify-content-center\">\r\n    <button type=\"button\" class=\"btn btn-primary\" (click)=\"yes_Lock_UnLock()\">Yes</button>\r\n    <button type=\"button\" class=\"btn btn-dark\" data-dismiss=\"modal\" (click)=\"no_Lock_Unlock()\">No</button>\r\n  </div>\r\n</div>\r\n</div>\r\n</div>\r\n<!-- Delete popup -->\r\n<div class=\"modal fade\" id=\"alertDeleteCoOwner\" data-backdrop=\"static\" tabindex=\"-1\" role=\"dialog\"\r\n   aria-labelledby=\"exampleModalCenterTitle\" aria-hidden=\"true\">\r\n   <div class=\"modal-dialog modal-dialog-centered modal-sm\" role=\"document\">\r\n      <div class=\"modal-content text-center\">\r\n         <!--Header-->\r\n         <!--Body-->\r\n         <div class=\"modal-body\">\r\n            <p class=\"mb-2\"><i\r\n               class=\"feather icon-trash-2 font-large-4 text-danger\"></i>\r\n            </p>\r\n            <h6>Are you sure you want to Delete ?</h6>\r\n         </div>\r\n         <!--Footer-->\r\n         <div class=\"modal-footer d-flex justify-content-center\">\r\n            <button type=\"button\" class=\"btn btn-primary\" (click)=\"onDeleteUser()\">Yes</button>\r\n            <button type=\"button\" class=\"btn btn-dark\" data-dismiss=\"modal\">No</button>\r\n         </div>\r\n      </div>\r\n   </div>\r\n</div>\r\n\r\n<!-- Alert popup -->\r\n<div class=\"modal fade\" id=\"alertMsg\" data-backdrop=\"static\"  data-keyboard=\"false\"\r\n   tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalCenterTitle\" aria-hidden=\"true\">\r\n   <div class=\"modal-dialog modal-dialog-centered modal-sm\" role=\"document\">\r\n      <div class=\"modal-content text-center\">\r\n         <!--Header-->\r\n         <!--Body-->\r\n         <div class=\"modal-body\">\r\n            <p class=\"mb-2\"><i [ngClass]=\"[ alertResponse.status === 'success' ? 'feather icon-bell font-large-4 text-success' : 'feather icon-bell font-large-4 text-danger']\" ></i></p>\r\n            <h6>{{alertResponse.message}}</h6>\r\n         </div>\r\n         <!--Footer-->\r\n         <div class=\"modal-footer d-flex justify-content-center\">\r\n            <button *ngIf=\"alertResponse.status === 'success'\" type=\"button\" class=\"btn btn-primary\" (click)=\"okAlert()\">Ok</button>\r\n            <button *ngIf=\"alertResponse.status !== 'success'\" type=\"button\" class=\"btn btn-primary\" data-dismiss=\"modal\">Ok</button>\r\n         </div>\r\n      </div>\r\n   </div>\r\n</div>\r\n\r\n          <div class=\"modal fade\" id=\"createOrUpdateUser\" data-backdrop=\"static\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalCenterTitle\" aria-hidden=\"true\">\r\n            <div class=\"modal-dialog modal-dialog-centered modal-lg\" role=\"document\">\r\n              <div class=\"modal-content\">\r\n                <!--Header-->\r\n                <div class=\"modal-header\">\r\n                  <h5 class=\"modal-title\" id=\"staticBackdropLabel\">  {{userIdDisable?'Update User':'Create User'}}</h5>\r\n                  <!-- <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n                    <span aria-hidden=\"true\">&times;</span>\r\n                  </button> -->\r\n                </div>\r\n                <!--Body-->\r\n                  <form [formGroup]=\"formData\" >\r\n                <div class=\"modal-body\">\r\n                  <div class=\"row\">\r\n                  \r\n                    <!-- <div class=\"col-md-12\">\r\n                      <p class=\"page-title\">{{userIdDisable?'':'Please Create New User'}}</p>\r\n                    </div> -->\r\n                    <div class=\"col-xl-4 col-lg-4 col-md-4\">\r\n                      <div class=\"form-group mb-50 row\">\r\n                        <label class=\"col-md-12 col-form-label\">User Id <span class=\"text-danger\">*</span></label>\r\n                        <div class=\"col-md-12\">\r\n                          <input type=\"text\" [disabled]=\"userIdDisable\" formControlName=\"userId\" class=\"form-control form-control-sm\" aria-label=\"UserId\" aria-describedby=\"basic-addon1\">\r\n                        </div>\r\n                      </div>\r\n                      <span class=\"errormsg \"  *ngIf=\"formData.controls.userId.hasError('required') && \r\n                      (formData.controls.userId.dirty || formData.controls.userId.touched)\">Please enter userid.</span>\r\n                    </div>\r\n                    <div class=\"col-xl-4 col-lg-4 col-md-4\">\r\n                      <div class=\"form-group mb-50 row\">\r\n                        <label class=\"col-md-12 col-form-label\">First Name <span class=\"text-danger\">*</span></label>\r\n                        <div class=\"col-md-12\">\r\n                          <input type=\"text\" formControlName=\"firstName\"  class=\"form-control form-control-sm\" aria-label=\"User Name\" aria-describedby=\"basic-addon1\">\r\n                        </div>\r\n                      </div>\r\n                      <span class=\"errormsg \"  *ngIf=\"formData.controls.firstName.hasError('required') && \r\n                      (formData.controls.firstName.dirty || formData.controls.firstName.touched)\">Please enter first name.</span>\r\n                      <span class=\"errormsg \"  *ngIf=\"!formData.controls.firstName.hasError('required') && \r\n                       formData.controls.firstName.hasError('pattern') && \r\n                      (formData.controls.firstName.dirty && formData.controls.firstName.touched)\">Invalid first name.</span>\r\n                    </div>\r\n                    <div class=\"col-xl-4 col-lg-4 col-md-4\">\r\n                      <div class=\"form-group mb-50 row\">\r\n                        <label class=\"col-md-12 col-form-label\">Last Name <span class=\"text-danger\">*</span></label>\r\n                        <div class=\"col-md-12\">\r\n                          <input type=\"text\" formControlName=\"lastName\"  class=\"form-control form-control-sm\" aria-label=\"User Name\" aria-describedby=\"basic-addon1\">\r\n                        </div>\r\n                      </div>\r\n                      <span class=\"errormsg \" *ngIf=\"formData.controls.lastName.hasError('required') && \r\n                      (formData.controls.lastName.dirty || formData.controls.lastName.touched)\">Please enter last name.</span>\r\n                      <span class=\"errormsg \"  *ngIf=\"!formData.controls.lastName.hasError('required') && \r\n                       formData.controls.lastName.hasError('pattern') && \r\n                      (formData.controls.lastName.dirty && formData.controls.lastName.touched)\">Invalid last name.</span>\r\n                    </div>\r\n\r\n                    <div class=\"col-xl-4 col-lg-4 col-md-4\">\r\n                      <div class=\"form-group mb-50 row\">\r\n                        <label class=\"col-md-12 col-form-label\">Profile <span class=\"text-danger\">*</span></label>\r\n                        <div class=\"col-md-12\">\r\n                          <!-- <input type=\"number\"  class=\"form-control form-control-sm\" aria-label=\"Mobile No.\"> -->\r\n                          <select  formControlName=\"userType\"  class=\"custom-select custom-select-sm\" >\r\n                          <option value=\"\">Select</option>\r\n                          <option *ngFor=\"let type of userTypeList\" value=\"{{type.code}}\">\r\n                            {{type.value}}\r\n                          </option>\r\n                        </select>\r\n                        </div>\r\n                      </div>\r\n                      <span class=\"errormsg \" *ngIf=\"formData.controls.userType.hasError('required') && \r\n                      (formData.controls.userType.dirty || formData.controls.userType.touched)\">Please select profile.</span>\r\n               \r\n                    </div>\r\n                    \r\n                    <div class=\"col-xl-4 col-lg-4 col-md-4\">\r\n                      <div class=\"form-group mb-50 row\">\r\n                        <label class=\"col-md-12 col-form-label\">Email <span class=\"text-danger\">*</span></label>\r\n                        <div class=\"col-md-12\">\r\n                          <input type=\"text\" formControlName=\"emailId\"  class=\"form-control form-control-sm\" aria-label=\"Email\" aria-describedby=\"basic-addon1\">\r\n                        </div>\r\n                      </div>\r\n                      <span class=\"errormsg \"  *ngIf=\"formData.controls.emailId.hasError('required') && \r\n                      (formData.controls.emailId.dirty || formData.controls.emailId.touched)\">Please enter email.</span>\r\n                      <span class=\"errormsg \"  *ngIf=\"formData.controls.emailId.hasError('pattern') && \r\n                      !formData.controls.emailId.hasError('required') &&\r\n                      (formData.controls.emailId.dirty && formData.controls.emailId.touched)\">Invalid Email.</span>\r\n                    </div>\r\n                   \r\n                  \r\n                    <div class=\"col-xl-4 col-lg-4 col-md-4\">\r\n                      <div class=\"form-group mb-50 row\">\r\n                        <label class=\"col-md-12 col-form-label\">Mobile No. <span class=\"text-danger\">*</span></label>\r\n                        <div class=\"col-md-12\">\r\n                          <input type=\"text\" formControlName=\"mobileNo\"   class=\"form-control form-control-sm\" aria-label=\"Mobile No.\">\r\n                        </div>\r\n                      </div>\r\n                      <span class=\"errormsg \" *ngIf=\"formData.controls.mobileNo.hasError('required') && \r\n                      (formData.controls.mobileNo.dirty || formData.controls.mobileNo.touched)\">Please enter mobile no.</span>\r\n                      <span class=\"errormsg \"  *ngIf=\"formData.controls.mobileNo.hasError('pattern') && \r\n                      !formData.controls.mobileNo.hasError('required') &&\r\n                      (formData.controls.mobileNo.dirty && formData.controls.mobileNo.touched)\">Mobile number must be 10 digit long.</span>\r\n                    </div>\r\n                    \r\n                  </div>\r\n                <!-- </div> -->\r\n              </div>\r\n              <!--Footer-->\r\n              <div class=\"modal-footer d-flex justify-content-right\">\r\n                <!-- <button  type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Close</button>\r\n                <button  type=\"button\" class=\"btn btn-primary\" >Search</button> -->\r\n                <button type=\"button\" data-dismiss=\"modal\" class=\"btn btn-secondary round btn-min-width btn-darken-1 shadow mr-50\">Close</button>\r\n                <button type=\"button\" [disabled]=\"formData.invalid\" (click)=\"onSubmit()\" class=\"btn btn-success round btn-min-width btn-darken-1 shadow\">\r\n                 {{userIdDisable?'Update':'Submit'}} </button>\r\n\r\n                \r\n              </div>\r\n            </form>\r\n\r\n            </div>\r\n          </div>\r\n\r\n          \r\n<div class=\"modal fade\" id=\"alertMsg1\" data-backdrop=\"static\" data-keyboard=\"false\" tabindex=\"-1\" role=\"dialog\"\r\naria-labelledby=\"exampleModalCenterTitle\" aria-hidden=\"true\">\r\n<div class=\"modal-dialog modal-dialog-centered modal-sm\" role=\"document\">\r\n   <div class=\"modal-content text-center\">\r\n      <!--Header-->\r\n      <!--Body-->\r\n      <div class=\"modal-body\">\r\n         <p class=\"mb-2\"><i\r\n            [ngClass]=\"[ alertFlag === 'success' ? 'feather icon-bell font-large-4 text-success' : 'feather icon-bell font-large-4 text-danger']\"></i>\r\n         </p>\r\n         <h6>{{alertMessage}}</h6>\r\n      </div>\r\n      <!--Footer-->\r\n      <div class=\"modal-footer d-flex justify-content-center\">\r\n         <button  type=\"button\" class=\"btn btn-primary\"\r\n         (click)=\"okAlert1()\">Ok</button>\r\n      </div>\r\n   </div>\r\n</div>\r\n</div>\r\n          \r\n          ");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/vendor-access/vendor-access.component.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/vendor-access/vendor-access.component.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"content-wrapper\">\n    <div class=\"content-header row mb-2\">\n        <div class=\"content-header-left col-md-6 col-12 mb-1\">\n            <h3 class=\"content-header-title mb-0\"><i class=\"feather icon-users text-warning\"></i> Vendor Access</h3>\n        </div>\n        <div class=\"content-header-right text-md-right col-md-6 col-12 mb-md-0 mb-0\">\n            <div class=\"form-group mb-0\">\n                <!-- <a class=\"btn btn-link\" routerLink=\"create\"><i class=\"feather icon-user-plus text-primary fa-lg\"></i> Create User</a> -->\n            </div>\n        </div>\n    </div>\n    <div class=\"content-body\">\n        <div class=\"card\">\n            <div class=\"card-body\">\n                <!-- <button mat-raised-button (click)=\"openDialog()\">click</button> -->\n                <div class=\"table-responsive\">\n                    <table id=\"vendorDetails\" class=\"table table-sm table-bordered table-hover mb-0\"\n                        style=\"width:100%;\">\n                        <thead>\n                            <tr>\n                                <th class=\"text-center\">Action</th>\n                                <th>Status</th>\n                                <th>Vendor Code</th>\n                                <!-- <th>Id</th> -->\n                                <th> First Name</th>\n                                <th> Last Name</th>\n                                <th >City</th>\n                                <th>Country</th>\n                                <th>Email Id</th>\n\n                            </tr>\n                        </thead>\n                        <tbody>\n                            <ng-container *ngFor=\"let user of vendorDetails\">\n                                <tr>\n                                    <td class=\"text-center\">\n                                        <a class=\"btn-link mr-50\" title=\"View\" (click)=\"navigateTo(user)\" ><i class=\"feather icon-eye font-medium-1 \"></i></a>\n                                        <a class=\"btn-link\" title=\"Lock\" (click)=\"openLock_Unloc_popup(user)\"><i\n                                               \n                                                [ngClass]=\"[ user.isLocked == 'Y' ? 'feather icon-lock font-medium-1 text-secondary' : 'feather icon-unlock font-medium-1 text-primary']\"></i>\n\n                                        </a>\n\n                                    </td>\n                                    <td><span *ngIf=\"user.isLocked == 'Y'\">In active</span>\n                                        <span  *ngIf=\"user.isLocked == 'N'\">Active</span>\n                                      </td>\n                                    <td>{{user.userId}}\n                                    </td>\n                                    <!-- <td>{{user.id}}</td> -->\n                                    <td>{{user.firstName}} </td>\n                                    <td>{{user.lastName}}</td>\n                                    <td >{{user.city}}</td>\n                                    <td>{{user.country}}</td>\n                                    <td>{{user.emailId}}</td>\n\n                                </tr>\n                            </ng-container>\n\n\n                        </tbody>\n                    </table>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n\n<!-- Lock/Unlock popup-->\n<div class=\"modal fade\" id=\"alertLock\" data-backdrop=\"static\" tabindex=\"-1\" role=\"dialog\"\n    aria-labelledby=\"exampleModalCenterTitle\" aria-hidden=\"true\">\n    <div class=\"modal-dialog modal-dialog-centered modal-sm\" role=\"document\">\n        <div class=\"modal-content text-center\">\n            <!--Header-->\n            <!--Body-->\n            <div class=\"modal-body\">\n                <p class=\"mb-2\"><i\n                        [ngClass]=\"[ lock_UnlockUserObj.isLocked != 'Y' ? 'feather icon-lock font-large-4 text-warning' : 'feather icon-unlock font-large-4 text-warning']\"></i>\n                </p>\n                <h6>Are you sure you want to {{lock_UnlockUserObj.isLocked != 'Y'?'lock':'unlock'}} ?</h6>\n            </div>\n            <!--Footer-->\n            <div class=\"modal-footer d-flex justify-content-center\">\n                <button type=\"button\" class=\"btn btn-primary\" (click)=\"yes_Lock_UnLock()\">Yes</button>\n                <button type=\"button\" class=\"btn btn-dark\" data-dismiss=\"modal\" (click)=\"no_Lock_Unlock()\">No</button>\n            </div>\n        </div>\n    </div>\n</div>\n\n\n<!-- Alert popup -->\n<div class=\"modal fade\" id=\"alertMsg\" data-backdrop=\"static\" data-keyboard=\"false\" tabindex=\"-1\" role=\"dialog\"\n    aria-labelledby=\"exampleModalCenterTitle\" aria-hidden=\"true\">\n    <div class=\"modal-dialog modal-dialog-centered modal-sm\" role=\"document\">\n        <div class=\"modal-content text-center\">\n            <!--Header-->\n            <!--Body-->\n            <div class=\"modal-body\">\n                <p class=\"mb-2\"><i\n                        [ngClass]=\"[ alertResponse.status === 'success' ? 'feather icon-bell font-large-4 text-success' : 'feather icon-bell font-large-4 text-danger']\"></i>\n                </p>\n                <h6>{{alertResponse.message}}</h6>\n            </div>\n            <!--Footer-->\n            <div class=\"modal-footer d-flex justify-content-center\">\n                <button *ngIf=\"alertResponse.status === 'success'\" type=\"button\" class=\"btn btn-primary\"\n                    (click)=\"okAlert()\">Ok</button>\n                <button *ngIf=\"alertResponse.status !== 'success'\" type=\"button\" class=\"btn btn-primary\"\n                    data-dismiss=\"modal\">Ok</button>\n            </div>\n        </div>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/vendor-management/vendor-management.component.html":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/vendor-management/vendor-management.component.html ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<router-outlet></router-outlet>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/vendor-registration-list/vendor-registration-list.component.html":
/*!******************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/vendor-registration-list/vendor-registration-list.component.html ***!
  \******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"content-wrapper\">\n    <div class=\"content-header row mb-2\">\n        <div class=\"content-header-left col-md-6 col-12 mb-1\">\n            <h3 class=\"content-header-title mb-0\"><i class=\"fa-solid fa-address-card text-warning\"></i> Vendor Request</h3>\n        </div>\n        <!-- <div class=\"content-header-right text-md-right col-md-6 col-12 mb-md-0 mb-0\">\n          <div class=\"form-group mb-0\">\n            <a class=\"btn btn-link\" routerLink=\"create\"><i class=\"feather icon-user-plus text-primary fa-lg\"></i> Create User</a>\n\n          </div>\n        </div> -->\n    </div>\n    <div class=\"content-body\">\n      <div class=\"card\">\n        <div class=\"card-body\">\n          <!-- <button mat-raised-button (click)=\"openDialog()\">click</button> -->\n          <div class=\"table-responsive\">\n            <table id=\"List\" class=\"table table-sm table-bordered table-hover mb-0\" style=\"width:100%;\">\n                <thead>\n                    <tr>\n                      <th class=\"text-center\">Action</th>\n                      <th>Status</th>\n                        <th>Vendor Id</th>\n                        <th>Company Name</th>\n                        <th>City</th>\n                        <th>Country</th>\n                        <th>Email Id</th>\n                        <th>Mobile No</th>\n                        \n                        <!-- <th class=\"text-center\">Mobile no.</th> -->\n                    </tr>\n                </thead>\n                <tbody>\n                    <tr *ngFor=\"let vendor of vendorList;let i=index;\">\n                      <td class=\"text-center\">\n                        <!-- <a class=\"btn-link mr-50\" title=\"View\"><i class=\"feather icon-eye font-medium-1 text-primary\"></i></a> -->\n                        <a class=\"btn-link mr-50\" title=\"Edit\" [routerLink]=\"['view/'+vendor.regId]\"><i class=\"feather icon-eye font-medium-1 text-secondary\"></i></a>\n                        <!-- <a class=\"btn-link\" title=\"Delete\" ><i class=\"feather icon-trash-2 font-medium-1 text-danger\"></i></a> -->\n                 \n                      </td>\n                      <td>{{vendor.status}}</td>\n\n                        <td>{{vendor.regId}}</td>\n                        <td>{{vendor.name1}} {{vendor.name2}}</td>\n                        <td>{{vendor.city}}</td>\n                        <td>{{vendor.fkCountry}}</td>\n                        <td>{{vendor.emailId}}</td>\n                        <td>{{vendor.mobileNo}}</td>\n                     \n                        \n                    </tr>\n                    \n                </tbody>\n            </table>\n          </div>\n        </div>\n      </div>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/vendor-registration-view/vendor-registration-view.component.html":
/*!******************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/vendor-registration-view/vendor-registration-view.component.html ***!
  \******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"content-wrapper\">\n  <div class=\"content-header row mb-2\"><!--border-bottom-blue-grey border-bottom-lighten-5 -->\n    <div class=\"content-header-left col-md-12 col-12 pl-2\">\n        <h3 class=\"content-header-title mb-0\"><i class=\"feather icon-users text-warning\"></i> Vendor Details</h3>\n    </div>\n  </div>\n  <div class=\"content-body\">\n    <div class=\"row\">\n      <div class=\"col-md-12\">\n        <ul class=\"nav nav-pills\">\n          <li class=\"nav-item\">\n            <a [ngClass]=\"[ tab===1 ? 'nav-link active' : 'nav-link']\"   id=\"base-view-vendor1\" data-toggle=\"pill\" href=\"#view-vendor1\" (click)= \"tab=1\">General Details</a>\n          </li>\n          <li class=\"nav-item\">\n            <a [ngClass]=\"[ tab===2 ? 'nav-link active' : 'nav-link']\" id=\"base-view-vendor2\" data-toggle=\"pill\" href=\"#view-vendor2\" (click)= \"tab=2\" [ngClass] =\"{'aria-expanded':tab===2}\">Bank Details</a>\n          </li>\n          <li class=\"nav-item\">\n            <a [ngClass]=\"[ tab===3 ? 'nav-link active' : 'nav-link']\" id=\"base-view-vendor3\" data-toggle=\"pill\" href=\"#view-vendor3\" (click)= \"tab=3\" [ngClass] =\"{'aria-expanded':tab===3}\">Finance Details</a>\n          </li>\n          <li class=\"nav-item\">\n            <a [ngClass]=\"[ tab===4 ? 'nav-link active' : 'nav-link']\" id=\"base-view-vendor4\" data-toggle=\"pill\" href=\"#view-vendor4\" (click)= \"tab=4\" [ngClass] =\"{'aria-expanded':tab===4}\">Attachments</a>\n          </li>\n        </ul>\n        <div class=\"tab-content px-0 pt-2\">\n          <!-- TAB 1 -->\n                <div role=\"tabpanel\" *ngIf=\"tab===1\" [ngClass]=\"[ tab===1 ? 'nav-link active' : 'nav-link']\" id=\"view-vendor1\" [ngClass] =\"{'aria-expanded':tab===1}\" aria-labelledby=\"base-view-vendor1\">\n                  <form  #tab1Form=\"ngForm\" (ngSubmit)=\"submitResultTab1(tab1Form)\" novalidate>\n\n           \n                    <div class=\"row\">\n                      <div class=\"col-md-12 p-0\">\n                        <div class=\"card mb-0 view-vendor-scroll\">\n                          <!-- <div class=\"card-header border-bottom-blue-grey border-bottom-lighten-5 py-1\">\n                            <h5 class=\"text-dark mb-0\"></h5>\n                          </div> -->\n                          <div class=\"card-body  pt-1 \">\n                            \n                            <div class=\"row\">\n                              <div class=\"col-xl-3 col-lg-4 col-md-4\">\n                                <div class=\"form-group mb-50 row\">\n                                  <label class=\"col-md-12 col-form-label\">Title <span class=\"text-danger\">*</span></label>\n                                  <div class=\"col-md-12\">\n                                    <!-- <input name=\"fkTittle\" id=\"fkTittle\" required #fkTittle=\"ngModel\"  [(ngModel)]=\"submitObjectTab1.fkTittle\" type=\"text\" class=\"form-control form-control-sm\" > -->\n                                    <select [ngClass]=\"{invalid:!validTab1}\" name=\"fkTittle\" id=\"fkTittle\" required #fkTittle=\"ngModel\"  [(ngModel)]=\"submitObjectTab1.fkTittle\"  class=\"custom-select custom-select-sm\" >\n                                      <option value=\"\">Select</option>\n                                      <option *ngFor=\"let item of dropDownMaster.titleMst\" value=\"{{item.code}}\">\n                                        {{item.value}} \n                                      </option>\n                                    </select>\n                                  </div>\n                                </div>\n                                <span class=\"errormsg\" *ngIf=\"!fkTittle.value && fkTittle.touched || !fkTittle.value && !validTab1\"  >\n                                  Please enter title.\n                                </span>\n                              </div>\n                              <div class=\"col-xl-3 col-lg-4 col-md-4\">\n                                <div class=\"form-group mb-50 row\">\n                                  <label class=\"col-md-12 col-form-label\">Name 1 <span class=\"text-danger\">*</span></label>\n                                  <div class=\"col-md-12\">\n                                    <input [ngClass]=\"{invalid:!validTab1}\" maxlength=\"35\" name=\"name1\" id=\"name1\" required #name1=\"ngModel\"  [(ngModel)]=\"submitObjectTab1.name1\" type=\"text\" class=\"form-control form-control-sm\" >\n                                  </div>\n                                </div>\n                                <span class=\"errormsg\" *ngIf=\"!name1.value && name1.touched || !name1.value && !validTab1\">\n                                  Please enter name1.\n                                </span>\n                              </div>\n                              <div class=\"col-xl-3 col-lg-4 col-md-4\">\n                                <div class=\"form-group mb-50 row\">\n                                  <label class=\"col-md-12 col-form-label\">Name 2 <span class=\"text-danger\">*</span></label>\n                                  <div class=\"col-md-12\">\n                                    <input [ngClass]=\"{invalid:!validTab1}\" maxlength=\"35\" name=\"name2\" id=\"name2\" required #name2=\"ngModel\"  [(ngModel)]=\"submitObjectTab1.name2\" type=\"text\" class=\"form-control form-control-sm\" >\n                                  </div>\n                                </div>\n                                <span class=\"errormsg\" *ngIf=\"!name2.value && name2.touched || !name2.value && !validTab1\" >\n                                  Please enter name2.\n                                </span>\n                              </div>\n                              <div class=\"col-xl-3 col-lg-4 col-md-4\">\n                                <div class=\"form-group mb-50 row\">\n                                  <label class=\"col-md-12 col-form-label\">Street <span class=\"text-danger\">*</span></label>\n                                  <div class=\"col-md-12\">\n                                    <input [ngClass]=\"{invalid:!validTab1}\" maxlength=\"40\" name=\"street\" id=\"street\" required #street=\"ngModel\"  [(ngModel)]=\"submitObjectTab1.street\" type=\"text\" class=\"form-control form-control-sm\" >\n                                  </div>\n                                </div>\n                                <span class=\"errormsg\" *ngIf=\"!street.value && street.touched || !street.value && !validTab1\" >\n                                  Please enter street.\n                                </span>\n                              </div>\n                              <div class=\"col-xl-3 col-lg-4 col-md-4\">\n                                <div class=\"form-group mb-50 row\">\n                                  <label class=\"col-md-12 col-form-label\">Street 2 <span class=\"text-danger\">*</span></label>\n                                  <div class=\"col-md-12\">\n                                    <input [ngClass]=\"{invalid:!validTab1}\" maxlength=\"40\" name=\"street2\" id=\"street2\" required #street2=\"ngModel\"  [(ngModel)]=\"submitObjectTab1.street2\" type=\"text\" class=\"form-control form-control-sm\" >\n                                  </div>\n                                </div>\n                                <span class=\"errormsg \"  *ngIf=\"!street2.value && street2.touched || !street2.value && !validTab1\">\n                                  Please enter street 2.\n                                </span>\n                              </div>\n                              <div class=\"col-xl-3 col-lg-4 col-md-4\">\n                                <div class=\"form-group mb-50 row\">\n                                  <label class=\"col-md-12 col-form-label\">Postal Code <span class=\"text-danger\">*</span></label>\n                                  <div class=\"col-md-12\">\n                                    <input [ngClass]=\"{invalid:!validTab1}\" maxlength=\"10\" name=\"postCode\" id=\"postCode\" required #postCode=\"ngModel\"  [(ngModel)]=\"submitObjectTab1.postCode\" type=\"text\" class=\"form-control form-control-sm\">\n                                  </div>\n                                </div>\n                                <span class=\"errormsg\" *ngIf=\"!postCode.value && postCode.touched || !postCode.value && !validTab1\">\n                                  Please enter postal code.\n                                </span>\n                              </div>\n                              <div class=\"col-xl-3 col-lg-4 col-md-4\">\n                                <div class=\"form-group mb-50 row\">\n                                  <label class=\"col-md-12 col-form-label\">City <span class=\"text-danger\">*</span></label>\n                                  <div class=\"col-md-12\">\n                                    <input [ngClass]=\"{invalid:!validTab1}\" maxlength=\"40\" name=\"city\" id=\"city\" required #city=\"ngModel\"  [(ngModel)]=\"submitObjectTab1.city\" type=\"text\" class=\"form-control form-control-sm\">\n                                  </div>\n                                </div>\n                                <span class=\"errormsg \" *ngIf=\"!city.value && city.touched || !city.value && !validTab1\">\n                                  Please enter city.\n                                </span>\n                              </div>\n                              <div class=\"col-xl-3 col-lg-4 col-md-4\">\n                                <div class=\"form-group mb-50 row\">\n                                  <label class=\"col-md-12 col-form-label\">Country <span class=\"text-danger\">*</span></label>\n                                  <div class=\"col-md-12\">\n                                    <!-- <input name=\"fkCountry\" id=\"fkCountry\" required #fkCountry=\"ngModel\"  [(ngModel)]=\"submitObjectTab1.fkCountry\" type=\"text\" class=\"form-control form-control-sm\" > -->\n                                    <select [ngClass]=\"{invalid:!validTab1}\" (change)=\"onChangeCountry(submitObjectTab1.fkCountry)\" name=\"fkCountry\" id=\"fkCountry\" required #fkCountry=\"ngModel\"  [(ngModel)]=\"submitObjectTab1.fkCountry\"  class=\"custom-select custom-select-sm\" >\n                                      <option value=\"\">Select</option>\n                                      <option *ngFor=\"let item of dropDownMaster.countryMst\" value=\"{{item.code}}\">\n                                        {{item.value}} \n                                      </option>\n                                    </select>\n                                  </div>\n                                </div>\n                                <span class=\"errormsg\"  *ngIf=\"!fkCountry.value && fkCountry.touched || !fkCountry.value && !validTab1\">\n                                  Please enter country.\n                                </span>\n                              </div>\n                              <div class=\"col-xl-3 col-lg-4 col-md-4\">\n                                <div class=\"form-group mb-50 row\">\n                                  <label class=\"col-md-12 col-form-label\">State <span class=\"text-danger\">*</span></label>\n                                  <div class=\"col-md-12\">\n                                    <!-- <input name=\"fkRegion\" id=\"fkRegion\" required #fkRegion=\"ngModel\"  [(ngModel)]=\"submitObjectTab1.fkRegion\" type=\"text\" class=\"form-control form-control-sm\" > -->\n                                    <select [ngClass]=\"{invalid:!validTab1}\" name=\"fkRegion\" id=\"fkRegion\" required #fkRegion=\"ngModel\"  [(ngModel)]=\"submitObjectTab1.fkRegion\"  class=\"custom-select custom-select-sm\" >\n                                      <option value=\"\">Select</option>\n                                      <option *ngFor=\"let item of dropDownMaster.regionMst\" value=\"{{item.code}}\">\n                                        {{item.value}} \n                                      </option>\n                                    </select>\n                                  </div>\n                                </div>\n                                <span class=\"errormsg\" *ngIf=\"!fkRegion.value && fkRegion.touched || !fkRegion.value && !validTab1\">\n                                  Please enter state.\n                                </span>\n                              </div>\n                              <div class=\"col-xl-3 col-lg-4 col-md-4\">\n                                <div class=\"form-group mb-50 row\">\n                                  <label class=\"col-md-12 col-form-label\">Mobile No. <span class=\"text-danger\">*</span></label>\n                                  <div class=\"col-md-12\">\n                                    <input [ngClass]=\"{invalid:!validTab1}\" name=\"mobileNo\" id=\"mobileNo\" [pattern]=\"mobilePattern\" minlength=\"10\" required #mobileNo=\"ngModel\"  [(ngModel)]=\"submitObjectTab1.mobileNo\" type=\"text\" class=\"form-control form-control-sm\" >\n                                  </div>\n                                </div>\n                                <span class=\"errormsg\" *ngIf=\"!mobileNo.value && mobileNo.touched || !mobileNo.value && !validTab1\" >\n                                  Please enter mobile no.\n                                </span>\n                                <span class=\"errormsg\" *ngIf=\"mobileNo.touched && mobileNo.errors?.pattern\"> Mobile number\n                                  must be at least 10 digit long. </span>\n                              </div>\n                              <div class=\"col-xl-3 col-lg-4 col-md-4\">\n                                <div class=\"form-group mb-50 row\">\n                                  <label class=\"col-md-12 col-form-label\">Email <span class=\"text-danger\">*</span></label>\n                                  <div class=\"col-md-12\">\n                                    <input [ngClass]=\"{invalid:!validTab1}\" maxlength=\"240\" name=\"emailId\" id=\"emailId\" [pattern]=\"emailPattern\"  required #emailId=\"ngModel\"  [(ngModel)]=\"submitObjectTab1.emailId\" type=\"text\" class=\"form-control form-control-sm\">\n                                  </div>\n                                </div>\n                                <span class=\"errormsg\" *ngIf=\"!emailId.value && emailId.touched || !emailId.value && !validTab1\"> Please enter email.\n                                \n                                  <!-- <span *ngIf=\"emailId.errors.required\">\n                                    Please enter email.\n                                  </span>\n                                  <span class=\"errormsg\" *ngIf=\"emailId.errors.email\">\n                                    Invalid email address\n                                  </span> -->\n                                </span>\n                                <span class=\"errormsg\" *ngIf=\"emailId.touched && emailId.errors?.pattern\"> Please enter\n                                  valid email address.</span>\n                              </div>\n                              <div class=\"col-xl-3 col-lg-4 col-md-4\">\n                                <div class=\"form-group mb-50 row\">\n                                  <label class=\"col-md-12 col-form-label\">Currency <span class=\"text-danger\">*</span></label>\n                                  <div class=\"col-md-12\">\n                                    <!-- <input  name=\"fkCurrency\" id=\"fkCurrency\" required #fkCurrency=\"ngModel\"  [(ngModel)]=\"submitObjectTab1.fkCurrency\" type=\"text\" class=\"form-control form-control-sm\" > -->\n                                    <select [ngClass]=\"{invalid:!validTab1}\" name=\"fkCurrency\" id=\"fkCurrency\" required #fkCurrency=\"ngModel\"  [(ngModel)]=\"submitObjectTab1.fkCurrency\"  class=\"custom-select custom-select-sm\" >\n                                      <option value=\"\">Select</option>\n                                      <option *ngFor=\"let item of dropDownMaster.currencyMst\" value=\"{{item.code}}\">\n                                        {{item.value}} \n                                      </option>\n                                    </select>\n                                \n                                  </div>\n                                </div>\n                                <span class=\"errormsg\" *ngIf=\"!fkCurrency.value && fkCurrency.touched || !fkCurrency.value && !validTab1\">\n                                  Please enter currency.\n                                </span>\n                              </div>\n                              <div class=\"col-xl-3 col-lg-4 col-md-4\">\n                                <div class=\"form-group mb-50 row\">\n                                  <label class=\"col-md-12 col-form-label\">GST No. </label>\n                                  <div class=\"col-md-12\">\n                                    <input [ngClass]=\"{invalid:!validTab1}\" [pattern]=\"gstPattern\"  name=\"gstnNo\" id=\"gstnNo\"  #gstnNo=\"ngModel\"  [(ngModel)]=\"submitObjectTab1.gstnNo\" type=\"text\" class=\"form-control form-control-sm\">\n                                  </div>\n                                </div>\n                                <span class=\"errormsg\" *ngIf=\"gstnNo.touched && gstnNo.errors?.pattern ||  gstnNo.errors?.pattern && gstnNo.value && !validTab1 \"> Please enter\n                                  valid GST number. </span>\n                                <!-- <span class=\"errormsg\" *ngIf=\"!gstnNo.value && gstnNo.touched || !gstnNo.value && !validTab1\">\n                                  Please enter GST no.\n                                </span> -->\n                              </div>\n                              <div class=\"col-xl-3 col-lg-4 col-md-4\">\n                                <div class=\"form-group mb-50 row\">\n                                  <label class=\"col-md-12 col-form-label\">PAN No. <span class=\"text-danger\">*</span></label>\n                                  <div class=\"col-md-12\">\n                                    <input [ngClass]=\"{invalid:!validTab1}\"  [pattern]=\"panPattern\" name=\"panNo\" id=\"panNo\"  #panNo=\"ngModel\"  [(ngModel)]=\"submitObjectTab1.panNo\" type=\"text\" class=\"form-control form-control-sm\" >\n                                  </div>\n                                </div>\n                                <span class=\"errormsg\" *ngIf=\" panNo.touched && panNo.errors?.pattern ||  panNo.errors?.pattern && panNo.value && !validTab1 \"> Please enter valid\n                                  PAN number.</span>\n                                <span class=\"errormsg\" *ngIf=\"!panNo.value && panNo.touched || !panNo.value && !validTab1\">\n                                  Please enter PAN No.\n                                </span>\n                              </div>\n  \n                              <div class=\"col-xl-3 col-lg-4 col-md-4\">\n                                <div class=\"form-group mb-50 row\">\n                                  <label class=\"col-md-12 col-form-label\">Lead Time <span class=\"text-danger\">*</span></label>\n                                  <div class=\"col-md-12\">\n                                    <input [ngClass]=\"{invalid:!validTab1}\" name=\"leadTime\" id=\"leadTime\" required #leadTime=\"ngModel\"  [(ngModel)]=\"submitObjectTab1.leadTime\" type=\"number\" class=\"form-control form-control-sm\" >\n                                  </div>\n                                </div>\n                                <span class=\"errormsg\" *ngIf=\"!leadTime.value && leadTime.touched || !leadTime.value && !validTab1\">\n                                  Please enter Lead Time.\n                                </span>\n                              </div>\n                              <div class=\"col-xl-3 col-lg-4 col-md-4\">\n                                <div class=\"form-group mb-50 row\">\n                                  <label class=\"col-md-12 col-form-label\">Grouping <span class=\"text-danger\">*</span></label>\n                                  <div class=\"col-md-12\">\n                                    <!-- <input [ngClass]=\"{invalid:!validTab1}\" name=\"grouping\" id=\"grouping\" required #grouping=\"ngModel\"  [(ngModel)]=\"submitObjectTab1.grouping\" type=\"text\" class=\"form-control form-control-sm\" > -->\n                                    <select [ngClass]=\"{invalid:!validTab1}\" name=\"grouping\" id=\"grouping\" required #grouping=\"ngModel\"  [(ngModel)]=\"submitObjectTab1.grouping\"  class=\"custom-select custom-select-sm\" >\n                                      <option value=\"\">Select</option>\n                                      <option *ngFor=\"let item of dropDownMaster.groupingMst\" value=\"{{item.code}}\">\n                                        {{item.value}} \n                                      </option>\n                                    </select>\n                                  </div>\n                                </div>\n                                <span class=\"errormsg\" *ngIf=\"!grouping.value && grouping.touched || !grouping.value && !validTab1\">\n                                  Please enter grouping.\n                                </span>\n                              </div>\n                              <div class=\"col-xl-3 col-lg-4 col-md-4\">\n                                <div class=\"form-group mb-50 row\">\n                                  <label class=\"col-md-12 col-form-label\">Incoterms <span class=\"text-danger\">*</span></label>\n                                  <div class=\"col-md-12\">\n                                    <!-- <input name=\"fkTittle\" id=\"fkTittle\" required #fkTittle=\"ngModel\"  [(ngModel)]=\"submitObjectTab1.fkTittle\" type=\"text\" class=\"form-control form-control-sm\" > -->\n                                    <select [ngClass]=\"{invalid:!validTab1}\" name=\"incoterm\" id=\"incoterm\" required #incoterm=\"ngModel\"  [(ngModel)]=\"submitObjectTab1.incoterm\"  class=\"custom-select custom-select-sm\" >\n                                      <option value=\"\">Select</option>\n                                      <option *ngFor=\"let item of dropDownMaster.incotermMst\" value=\"{{item.code}}\">\n                                        {{item.value}} \n                                      </option>\n                                    </select>\n                                  </div>\n                                </div>\n                                <span class=\"errormsg\" *ngIf=\"!incoterm.value && incoterm.touched || !incoterm.value && !validTab1\"  >\n                                  Please enter incoterm.\n                                </span>\n                              </div>\n                               \n                            </div>\n        \n                          </div>\n                        </div>\n                      </div>\n                      <!-- <div class=\"col-md-4\">\n                        <div class=\"card h-100 mb-0\">\n                          <div class=\"card-header border-bottom-blue-grey border-bottom-lighten-5 py-1\">\n                            <h5 class=\"text-dark mb-0\">Vendor Attachments</h5>\n                          </div>\n                          <div class=\"card-body pt-1 view-vendor-scroll\">\n                            <div class=\"row\">\n                              <div class=\"col-md-12\">\n        \n                                <ul class=\"list-group\">\n                                    <ng-container *ngFor=\"let file of fileList\">\n                                        <li class=\"list-group-item p-1 py-50\">\n                                            {{file.type==='GST'?'GST':''}}\n                                            {{file.type==='PN'?'PAN Card Copy':''}}\n                                              <a style=\"cursor: pointer;\" (click)=\"onViewFile(file)\"  class=\"btn btn-outline-primary btn-darken-1 btn-sm float-right\">\n                                                  <i class=\"feather icon-download fa-lg\"></i>\n                                              </a>\n                                              <a style=\"cursor: pointer;\" class=\"btn btn-outline-danger btn-darken-1 btn-sm mr-50 float-right\">\n                                                  <i class=\"feather icon-trash-2 fa-lg\"></i>\n                                              </a>\n                                          </li>\n                                    </ng-container>\n                                \n                                  \n                                \n                                </ul>\n                              </div>\n        \n                              <div class=\"col-md-12\">\n                                <div class=\"form-group mb-50 row\">\n                                  <label class=\"col-md-12 col-form-label\">GST File <span class=\"text-danger\">*</span></label>\n                                  <div class=\"col-md-12\">\n                                    <div class=\"custom-file\">\n                                        <input type=\"file\" class=\"custom-file-input\" id=\"inputGroupFile01\">\n                                        <label class=\"custom-file-label\" for=\"inputGroupFile01\">Choose file</label>\n                                    </div>\n                                  </div>\n                                </div>\n                              </div>\n                              <div class=\"col-md-12\">\n                                <div class=\"form-group mb-50 row\">\n                                  <label class=\"col-md-12 col-form-label\">PAN Card Copy <span class=\"text-danger\">*</span></label>\n                                  <div class=\"col-md-12\">\n                                    <div class=\"custom-file\">\n                                        <input type=\"file\" class=\"custom-file-input\" id=\"inputGroupFile01\">\n                                        <label class=\"custom-file-label\" for=\"inputGroupFile01\">Choose file</label>\n                                    </div>\n                                  </div>\n                                </div>\n                              </div>\n                         \n                            </div>\n                          </div>\n                        </div>\n                      </div> -->\n                    </div>\n        \n                    <footer class=\"footer fixed-bottom footer-light navbar-border px-2\">\n                        <div class=\"text-right\">\n                          \n                          <button type=\"button\" class=\"btn btn-light round btn-min-width  mr-50\" (click)='back()'>Back</button>\n                          <button type=\"button\" (click)=\"rejectPopupOpen()\" class=\"btn btn-danger round btn-min-width btn-darken-2 shadow mr-50\">Reject</button>\n                          <!-- <button type=\"submit\"  class=\"btn btn-secondary round btn-min-width btn-darken-1 shadow mr-50\">Update</button> -->\n                          <button type=\"button\" (click)=\"approve()\" class=\"btn btn-success round btn-min-width btn-darken-1 shadow\">Approve</button>\n                        </div>\n                    </footer>\n                  </form>\n                 </div>\n\n                 <!-- TAB 2 -->\n                  <div [ngClass]=\"[ tab===2 ? 'nav-link active' : 'nav-link']\" *ngIf=\"tab===2\" id=\"view-vendor2\"  [ngClass] =\"{'aria-expanded':tab===2}\" aria-labelledby=\"base-view-vendor2\">\n                    <form  #tab2Form=\"ngForm\" (ngSubmit)=\"submitResultTab2(tab2Form)\" novalidate>\n        \n                      <div class=\"row\">\n                        <div class=\"col-md-12 p-0\">\n                          <div class=\"card mb-0 view-vendor-scroll\">\n                            <!-- <div class=\"card-header border-bottom-blue-grey border-bottom-lighten-5 py-1\">\n                              <h5 class=\"text-dark mb-0\"></h5>\n                            </div> -->\n                            <div class=\"card-body pt-1 \">\n                              <div class=\"row\">\n                                <div class=\"col-xl-3 col-lg-4 col-md-4\">\n                                  <div class=\"form-group mb-50 row\">\n                                    <label class=\"col-md-12 col-form-label\">Bank Name <span class=\"text-danger\">*</span></label>\n                                    <div class=\"col-md-12\">\n                                      <input [ngClass]=\"{invalid:!validTab2}\" name=\"bankName\" id=\"bankName\" required #bankName=\"ngModel\"  [(ngModel)]=\"submitObjectTab2.bankName\" type=\"text\" class=\"form-control form-control-sm\" >\n                                    </div>\n                                  </div>\n                                  <span class=\"errormsg\" *ngIf=\"!bankName.value && bankName.touched || !bankName.value && !validTab2\" >\n                                    Please enter bank name.\n                                  </span>\n                                </div>\n  \n                                <div class=\"col-xl-3 col-lg-4 col-md-4\">\n                                  <div class=\"form-group mb-50 row\">\n                                    <label class=\"col-md-12 col-form-label\">Account Number. <span class=\"text-danger\">*</span></label>\n                                    <div class=\"col-md-12\">\n                                      <input [ngClass]=\"{invalid:!validTab2}\" maxlength=\"240\" name=\"accountNo\" id=\"accountNo\" required #accountNo=\"ngModel\"  [(ngModel)]=\"submitObjectTab2.accountNo\" type=\"text\" class=\"form-control form-control-sm\" >\n                                    </div>\n                                  </div>\n                                  <span class=\"errormsg\" *ngIf=\"!accountNo.value && accountNo.touched || !accountNo.value && !validTab2\">\n                                    Please enter account number.\n                                  </span>\n                                </div>\n  \n                                \n                                <div class=\"col-xl-3 col-lg-4 col-md-4\">\n                                  <div class=\"form-group mb-50 row\">\n                                    <label class=\"col-md-12 col-form-label\">Account Holder Name <span class=\"text-danger\">*</span></label>\n                                    <div class=\"col-md-12\">\n                                      <input [ngClass]=\"{invalid:!validTab2}\" name=\"accountHolder\" id=\"accountHolder\" required #accountHolder=\"ngModel\"  [(ngModel)]=\"submitObjectTab2.accountHolder\" type=\"text\" class=\"form-control form-control-sm\" >\n                                    </div>\n                                  </div>\n                                  <span class=\"errormsg\" *ngIf=\"!accountHolder.value && accountHolder.touched || !accountHolder.value && !validTab2\" >\n                                    Please enter account holder name.\n                                  </span>\n                                </div>\n  \n                                <div class=\"col-xl-3 col-lg-4 col-md-4\">\n                                  <div class=\"form-group mb-50 row\">\n                                    <label class=\"col-md-12 col-form-label\">IFSC Code <span class=\"text-danger\">*</span></label>\n                                    <div class=\"col-md-12\">\n                                      <input [ngClass]=\"{invalid:!validTab2}\"  maxlength=\"15\" name=\"ifscCode\" id=\"ifscCode\" required #ifscCode=\"ngModel\"  [(ngModel)]=\"submitObjectTab2.ifscCode\" type=\"text\" class=\"form-control form-control-sm\" >\n                                    </div>\n                                  </div>\n                                  <span class=\"errormsg\" *ngIf=\"!ifscCode.value && ifscCode.touched || !ifscCode.value && !validTab2\">\n                                    Please enter IFSC code.\n                                  </span>\n                                </div>\n  \n                                <div class=\"col-xl-3 col-lg-4 col-md-4\">\n                                  <div class=\"form-group mb-50 row\">\n                                    <label class=\"col-md-12 col-form-label\">Bank Control Key <span *ngIf=\"submitObjectTab1.fkCountry != 'IN' && submitObjectTab1.fkCountry != ''\" class=\"text-danger\">*</span></label>\n                                    <div class=\"col-md-12\">\n                                      <input maxlength=\"2\" [required]=\"submitObjectTab1.fkCountry != 'IN' && submitObjectTab1.fkCountry != ''\"  name=\"bankControlKey\" id=\"bankControlKey\"  #bankControlKey=\"ngModel\"  [(ngModel)]=\"submitObjectTab2.bankControlKey\" type=\"text\" class=\"form-control form-control-sm\" >\n                                    </div>\n                                  </div>\n                                  <!-- <span class=\"errormsg\" *ngIf=\"!bankControlKey.value && bankControlKey.touched || !bankControlKey.value && !validTab2\" >\n                                    Please enter bank control key.\n                                  </span> -->\n                                    <span class=\"errormsg\" *ngIf=\"bankControlKey.errors?.required && bankControlKey.touched || bankControlKey.errors?.required && !validTab2\">\n                                      Please enter bank control key.\n                                  </span>\n                                </div>\n  \n                                <!-- <div class=\"col-xl-3 col-lg-4 col-md-4\">\n                                  <div class=\"form-group mb-50 row\">\n                                    <label class=\"col-md-12 col-form-label\">MSME </label>\n                                    <div class=\"col-md-12\">\n                                      <input [ngClass]=\"{invalid:!validTab2}\" name=\"msme\" id=\"msme\" #msme=\"ngModel\"  [(ngModel)]=\"submitObjectTab2.msme\" type=\"text\" class=\"form-control form-control-sm\" >\n                                    </div>\n                                  </div>\n                                  <span class=\"errormsg\" *ngIf=\"!msme.value && msme.touched || !msme.value && !validTab2\">\n                                    Please enter msme.\n                                  </span>\n                                </div> -->\n  \n                                <div class=\"col-xl-3 col-lg-4 col-md-4\">\n                                  <div class=\"form-group mb-50 row\">\n                                    <label class=\"col-md-12 col-form-label\">MSME Certificate No. </label>\n                                    <div class=\"col-md-12\">\n                                      <input maxlength=\"10\"  name=\"msmeCertificateNo\" id=\"msmeCertificateNo\"  #msmeCertificateNo=\"ngModel\"  [(ngModel)]=\"submitObjectTab2.msmeCertificateNo\" type=\"text\" class=\"form-control form-control-sm\" >\n                                    </div>\n                                  </div>\n                                  <!-- <span class=\"errormsg\" *ngIf=\"!msmeCertificateNo.value && msmeCertificateNo.touched || !msmeCertificateNo.value && !validTab2\">\n                                    Please enter msme certificateNo.\n                                  </span> -->\n                                  <!-- <span class=\"errormsg\" *ngIf=\"msmeCertificateNo.errors?.required && msmeCertificateNo.touched || msmeCertificateNo.errors?.required && !validTab2\">\n                                    Please enter msme certificateNo.\n                                  </span> -->\n                                </div>\n  \n                                <div class=\"col-xl-3 col-lg-4 col-md-4\">\n                                  <div class=\"form-group mb-50 row\">\n                                    <label class=\"col-md-12 col-form-label\">TIN <span *ngIf=\"submitObjectTab1.panNo != ''\" class=\"text-danger\">*</span></label>\n                                    <div class=\"col-md-12\">\n                                      <input maxlength=\"10\" [required]=\"submitObjectTab1.panNo != ''\"  name=\"tin\" id=\"tin\"  #tin=\"ngModel\"  [(ngModel)]=\"submitObjectTab2.tin\" type=\"text\" class=\"form-control form-control-sm\" >\n                                    </div>\n                                  </div>\n                                  <!-- <span class=\"errormsg\" *ngIf=\"!tin.value && tin.touched || !tin.value && !validTab2\" >\n                                    Please enter tin.\n                                  </span> -->\n                                  <span class=\"errormsg\" *ngIf=\"tin.errors?.required && tin.touched || tin.errors?.required && !validTab2\" >\n                                    Please enter tin.\n                                  </span>\n                                </div>\n                              </div>\n        \n                            </div>\n                          </div>\n                        </div>\n                        <!-- <div class=\"col-md-4\">\n                          <div class=\"card h-100 mb-0\">\n                            <div class=\"card-header border-bottom-blue-grey border-bottom-lighten-5 py-1\">\n                              <h5 class=\"text-dark mb-0\"></h5>\n                            </div>\n                            <div class=\"card-body pt-1 view-vendor-scroll\">\n                              <div class=\"row\">\n                                <div class=\"col-md-12\">\n        \n                                  <ul class=\"list-group\">\n                                    <li class=\"list-group-item p-1 py-50\">\n                                      Customer\n                                        <a href=\"\" class=\"btn btn-outline-primary btn-darken-1 btn-sm float-right\">\n                                            <i class=\"feather icon-download fa-lg\"></i>\n                                        </a>\n                                        <a href=\"\" class=\"btn btn-outline-danger btn-darken-1 btn-sm mr-50 float-right\">\n                                            <i class=\"feather icon-trash-2 fa-lg\"></i>\n                                        </a>\n                                    </li>\n                                    <li class=\"list-group-item p-1 py-50\">\n                                      PAN Card Copy\n                                        <a href=\"\" class=\"btn btn-outline-primary btn-darken-1 btn-sm float-right\">\n                                            <i class=\"feather icon-download fa-lg\"></i>\n                                        </a>\n                                        <a href=\"\" class=\"btn btn-outline-danger btn-darken-1 btn-sm mr-50 float-right\">\n                                            <i class=\"feather icon-trash-2 fa-lg\"></i>\n                                        </a>\n                                    </li>\n                                    <li class=\"list-group-item p-1 py-50\">\n                                      Balance Sheet Of Last 3 Yrs.\n                                        <a href=\"\" class=\"btn btn-outline-primary btn-darken-1 btn-sm float-right\">\n                                            <i class=\"feather icon-download fa-lg\"></i>\n                                        </a>\n                                        <a href=\"\" class=\"btn btn-outline-danger btn-darken-1 btn-sm mr-50 float-right\">\n                                            <i class=\"feather icon-trash-2 fa-lg\"></i>\n                                        </a>\n                                    </li>\n                                  </ul>\n                                </div>\n                              </div>\n                            </div>\n                          </div>\n                        </div> -->\n                      </div>\n        \n                      <footer class=\"footer fixed-bottom footer-light navbar-border px-2\">\n                          <div class=\"text-right\">\n                            <button type=\"button\" class=\"btn btn-light round btn-min-width  mr-50\" (click)='back()'>Back</button>\n                            <button type=\"button\" (click)=\"rejectPopupOpen()\" class=\"btn btn-danger round btn-min-width btn-darken-2 shadow  mr-50\">Reject</button>\n                            <!-- <button type=\"submit\" class=\"btn btn-secondary round btn-min-width btn-darken-1 shadow  mr-50\">Update</button> -->\n                            <button type=\"button\" (click)=\"approve()\" class=\"btn btn-success round btn-min-width btn-darken-1 shadow\">Approve</button>\n                          </div>\n                      </footer>\n            </form>\n\n                  </div>\n<!-- TAB 3 -->\n              <div [ngClass]=\"[ tab===3 ? 'nav-link active' : 'nav-link']\" *ngIf=\"tab===3\" id=\"view-vendor3\" [ngClass] =\"{'aria-expanded':tab===3}\" aria-labelledby=\"base-view-vendor3\">\n                <form #tab3Form=\"ngForm\" (ngSubmit)=\"submitResultTab3(tab3Form)\"  >\n    \n                <div class=\"row\">\n                  <div class=\"col-md-12 p-0\">\n                    <div class=\"card mb-0 view-vendor-scroll\">\n                      <!-- <div class=\"card-header border-bottom-blue-grey border-bottom-lighten-5 py-1\">\n                        <h5 class=\"text-dark mb-0\"></h5>\n                      </div> -->\n                      <div class=\"card-body pt-1 \">\n                        <div class=\"row\">\n                        \n                          <div class=\"col-xl-3 col-lg-4 col-md-4\">\n                            <div class=\"form-group mb-50 row\">\n                              <label class=\"col-md-12 col-form-label\">Search Term <span class=\"text-danger\">*</span></label>\n                              <div class=\"col-md-12\">\n                                <input required maxlength=\"20\" [ngClass]=\"{invalid:!validTab3}\" name=\"serchTerm\" id=\"serchTerm\"  #serchTerm=\"ngModel\"  [(ngModel)]=\"submitObjectTab3.serchTerm\" type=\"text\" class=\"form-control form-control-sm\" >\n                              </div>\n                            </div>\n                            <span class=\"errormsg \" *ngIf=\"!serchTerm.value && serchTerm.touched || !serchTerm.value && !validTab3\" >\n\n                              Please enter search Term.\n                            </span>\n                          </div>\n\n                          <div class=\"col-xl-3 col-lg-4 col-md-4\">\n                            <div class=\"form-group mb-50 row\">\n                              <label class=\"col-md-12 col-form-label\">Reconciliation Account No <span class=\"text-danger\">*</span></label>\n                              <div class=\"col-md-12\">\n                                <!-- <input [ngClass]=\"{invalid:!validTab3}\" name=\"recconNo\" id=\"recconNo\" required #recconNo=\"ngModel\"  [(ngModel)]=\"submitObjectTab3.recconNo\" type=\"text\" class=\"form-control form-control-sm\" > -->\n                                <select [ngClass]=\"{invalid:!validTab1}\" name=\"recconNo\" id=\"recconNo\" required #recconNo=\"ngModel\"  [(ngModel)]=\"submitObjectTab3.recconNo\"  class=\"custom-select custom-select-sm\" >\n                                  <option value=\"\">Select</option>\n                                  <option *ngFor=\"let item of dropDownMaster.racconMst\" value=\"{{item.code}}\">\n                                    {{item.value}} \n                                  </option>\n                                </select>\n                              </div>\n                            </div>\n                            <span class=\"errormsg\" *ngIf=\"!recconNo.value && recconNo.touched || !recconNo.value && !validTab3\">\n                              Please select reconciliation account no.\n                            </span>\n                          </div>\n\n                          <div class=\"col-xl-3 col-lg-4 col-md-4\">\n                            <div class=\"form-group mb-50 row\">\n                              <label class=\"col-md-12 col-form-label\">Payment Term <span class=\"text-danger\">*</span></label>\n                              <div class=\"col-md-12\">\n                                <!-- <input [ngClass]=\"{invalid:!validTab3}\" name=\"paymentTerm\" id=\"paymentTerm\" required #paymentTerm=\"ngModel\"  [(ngModel)]=\"submitObjectTab3.paymentTerm\" type=\"text\" class=\"form-control form-control-sm\" > -->\n                                <select [ngClass]=\"{invalid:!validTab1}\" name=\"paymentTerm\" id=\"paymentTerm\" required #paymentTerm=\"ngModel\"  [(ngModel)]=\"submitObjectTab3.paymentTerm\"  class=\"custom-select custom-select-sm\" >\n                                  <option value=\"\">Select</option>\n                                  <option *ngFor=\"let item of dropDownMaster.payTermMst\" value=\"{{item.code}}\">\n                                    {{item.value}} \n                                  </option>\n                                </select>\n                              </div>\n                            </div>\n                            <span class=\"errormsg\" *ngIf=\"!paymentTerm.value && paymentTerm.touched || !paymentTerm.value && !validTab3\">\n                              Please select payment term.\n                            </span>\n                          </div>\n\n                          <div class=\"col-xl-3 col-lg-4 col-md-4\">\n                            <div class=\"form-group mb-50 row\">\n                              <label class=\"col-md-12 col-form-label\">With Hold Tax Type <span class=\"text-danger\">*</span></label>\n                              <div class=\"col-md-12\">\n                                <!-- <input [ngClass]=\"{invalid:!validTab3}\" name=\"withHoldTaxType\" id=\"withHoldTaxType\" required #withHoldTaxType=\"ngModel\"  [(ngModel)]=\"submitObjectTab3.withHoldTaxType\" type=\"text\" class=\"form-control form-control-sm\" > -->\n                                <select [ngClass]=\"{invalid:!validTab1}\" name=\"withHoldTaxType\" id=\"withHoldTaxType\" required #withHoldTaxType=\"ngModel\"  [(ngModel)]=\"submitObjectTab3.withHoldTaxType\"  class=\"custom-select custom-select-sm\" >\n                                  <option value=\"\">Select</option>\n                                  <option *ngFor=\"let item of dropDownMaster.withHolddingTaxType\" value=\"{{item.code}}\">\n                                    {{item.value}} \n                                  </option>\n                                </select>\n                              </div>\n                            </div>\n                            <span class=\"errormsg\" *ngIf=\"!withHoldTaxType.value && withHoldTaxType.touched || !withHoldTaxType.value && !validTab3\">\n                              Please enter with hold tax type.\n                            </span>\n                          </div>\n\n                          <div class=\"col-xl-3 col-lg-4 col-md-4\">\n                            <div class=\"form-group mb-50 row\">\n                              <label class=\"col-md-12 col-form-label\">With Hold Tax Code <span class=\"text-danger\">*</span></label>\n                              <div class=\"col-md-12\">\n                                <input maxlength=\"2\" [ngClass]=\"{invalid:!validTab3}\" name=\"withHoldTaxCode\" id=\"withHoldTaxCode\" required #withHoldTaxCode=\"ngModel\"  [(ngModel)]=\"submitObjectTab3.withHoldTaxCode\" type=\"text\" class=\"form-control form-control-sm\" >\n                              </div>\n                            </div>\n                            <span class=\"errormsg\" *ngIf=\"!withHoldTaxCode.value && withHoldTaxCode.touched || !withHoldTaxCode.value && !validTab3\">\n                              Please enter with hold tax code.\n                            </span>\n                          </div>\n\n                          <div class=\"col-xl-3 col-lg-4 col-md-4\">\n                            <div class=\"form-group mb-50 row\">\n                              <label class=\"col-md-12 col-form-label\">Exemption Certificate No. <span class=\"text-danger\">*</span></label>\n                              <div class=\"col-md-12\">\n                                <input maxlength=\"10\" [ngClass]=\"{invalid:!validTab3}\" name=\"exemptionCertNo\" id=\"exemptionCertNo\" required #exemptionCertNo=\"ngModel\"  [(ngModel)]=\"submitObjectTab3.exemptionCertNo\" type=\"text\" class=\"form-control form-control-sm\" >\n                              </div>\n                            </div>\n                            <span class=\"errormsg\" *ngIf=\"!exemptionCertNo.value && exemptionCertNo.touched || !exemptionCertNo.value && !validTab3\">\n                              Please enter exemption certificate no.\n                            </span>\n                          </div>\n\n                          <div class=\"col-xl-3 col-lg-4 col-md-4\">\n                            <div class=\"form-group mb-50 row\">\n                              <label class=\"col-md-12 col-form-label\">Exemption Rate <span class=\"text-danger\">*</span></label>\n                              <div class=\"col-md-12\">\n                                <input maxlength=\"2\" [ngClass]=\"{invalid:!validTab3}\" name=\"exemptionRate\" id=\"exemptionRate\" required #exemptionRate=\"ngModel\"  [(ngModel)]=\"submitObjectTab3.exemptionRate\" type=\"text\" class=\"form-control form-control-sm\" >\n                              </div>\n                            </div>\n                            <span class=\"errormsg\" *ngIf=\"!exemptionRate.value && exemptionRate.touched || !exemptionRate.value && !validTab3\">\n                              Please enter exemption rate.\n                            </span>\n                          </div>\n\n                          <div class=\"col-xl-3 col-lg-4 col-md-4\">\n                            <div class=\"form-group mb-50 row\">\n                              <label class=\"col-md-12 col-form-label\">Exemption Start Date <span class=\"text-danger\">*</span></label>\n                              <div class=\"col-md-12\">\n                                <input [minDate]=\"minDateToday\" [ngClass]=\"{invalid:!validTab3}\"  (ngModelChange)=\"getExStartDate($event)\" placement=\"left\" name=\"exemptionStartDate\" id=\"exemptionStartDate\" required #exemptionStartDate=\"ngModel\"  [(ngModel)]=\"submitObjectTab3.exemptionStartDate\" type=\"text\" class=\"form-control form-control-sm\"\n                                bsDatepicker [bsConfig]=\"datePickerConfig\" autocomplete=\"off\" readonly >\n                              </div>\n                            </div>\n                            <span class=\"errormsg\" *ngIf=\"!exemptionStartDate.value && exemptionStartDate.touched || !exemptionStartDate.value && !validTab3\">\n                              Please enter exemption start date.\n                            </span>\n                          </div>\n\n                          <div class=\"col-xl-3 col-lg-4 col-md-4\">\n                            <div class=\"form-group mb-50 row\">\n                              <label class=\"col-md-12 col-form-label\">Exemption End Date <span class=\"text-danger\">*</span></label>\n                              <div class=\"col-md-12\">\n                                <input [disabled]=\"!exemptionStartDate.value\" [ngClass]=\"{invalid:!validTab3}\" [minDate]=\"minDate\" placement=\"right\" name=\"exemptionEndDate\" id=\"exemptionEndDate\" required #exemptionEndDate=\"ngModel\"  [(ngModel)]=\"submitObjectTab3.exemptionEndDate\" type=\"text\" class=\"form-control form-control-sm\" \n                                bsDatepicker [bsConfig]=\"datePickerConfig\" autocomplete=\"off\" readonly>\n                              </div>\n                            </div>\n                            <span class=\"errormsg\" *ngIf=\"!exemptionEndDate.value && exemptionEndDate.touched || !exemptionEndDate.value && !validTab3\">\n                              Please enter exemption end date.\n                            </span>\n                          </div>\n\n                          <div class=\"col-xl-3 col-lg-4 col-md-4\">\n                            <div class=\"form-group mb-50 row\">\n                              <label class=\"col-md-12 col-form-label\">Scheme Supply <span class=\"text-danger\">*</span></label>\n                              <div class=\"col-md-12\">\n                                <!-- <input [ngClass]=\"{invalid:!validTab3}\" name=\"schemeSupply\" id=\"schemeSupply\" required #schemeSupply=\"ngModel\"  [(ngModel)]=\"submitObjectTab3.schemeSupply\" type=\"text\" class=\"form-control form-control-sm\" > -->\n                                <select [ngClass]=\"{invalid:!validTab1}\" name=\"schemeSupply\" id=\"schemeSupply\" required #schemeSupply=\"ngModel\"  [(ngModel)]=\"submitObjectTab3.schemeSupply\"  class=\"custom-select custom-select-sm\" >\n                                  <option value=\"\">Select</option>\n                                  <option *ngFor=\"let item of dropDownMaster.schemeSupplyMst\" value=\"{{item.code}}\">\n                                    {{item.value}} \n                                  </option>\n                                </select>\n                              </div>\n                            </div>\n                            <span class=\"errormsg\" *ngIf=\"!schemeSupply.value && schemeSupply.touched || !schemeSupply.value && !validTab3\">\n                              Please enter scheme supply.\n                            </span>\n                          </div>\n\n                          <div class=\"col-xl-3 col-lg-4 col-md-4\">\n                            <div class=\"form-group mb-50 row\">\n                              <label class=\"col-md-12 col-form-label\">House Bank <span class=\"text-danger\">*</span></label>\n                              <div class=\"col-md-12\">\n                                <!-- <input [ngClass]=\"{invalid:!validTab3}\" name=\"houseBank\" id=\"houseBank\" required #houseBank=\"ngModel\"  [(ngModel)]=\"submitObjectTab3.houseBank\" type=\"text\" class=\"form-control form-control-sm\" > -->\n                                <select [ngClass]=\"{invalid:!validTab3}\" name=\"houseBank\" id=\"houseBank\" required #houseBank=\"ngModel\"  [(ngModel)]=\"submitObjectTab3.houseBank\"  class=\"custom-select custom-select-sm\" >\n                                  <option value=\"\">Select</option>\n                                  <option *ngFor=\"let item of dropDownMaster.houseBankMst\" value=\"{{item.code}}\">\n                                    {{item.value}} \n                                  </option>\n                                </select>\n                              </div>\n                            </div>\n                            <span class=\"errormsg\" *ngIf=\"!houseBank.value && houseBank.touched || !houseBank.value && !validTab3\">\n                              Please select house bank.\n                            </span>\n                          </div>\n                          \n\n                          \n                       \n                        </div>\n  \n                      </div>\n                    </div>\n                  </div>\n                \n                </div>\n  \n                <footer class=\"footer fixed-bottom footer-light navbar-border px-2\">\n                    <div class=\"text-right\">\n                      <button type=\"button\" class=\"btn btn-light round btn-min-width  mr-50\" (click)='back()'>Back</button>\n                      <button type=\"button\" (click)=\"rejectPopupOpen()\" class=\"btn btn-danger round btn-min-width btn-darken-2 shadow mr-50\">Reject</button>\n                      <!-- <button type=\"submit\" class=\"btn btn-secondary round btn-min-width btn-darken-1 shadow mr-50\">Update</button> -->\n                      <button type=\"button\" (click)=\"approve()\" class=\"btn btn-success round btn-min-width btn-darken-1 shadow\">Approve</button>\n                    </div>\n                </footer>\n            </form>\n\n            </div>\n          \n          \n<!-- TAB 4 -->\n                <div [ngClass]=\"[ tab===4 ? 'nav-link active' : 'nav-link']\" *ngIf=\"tab===4\" id=\"view-vendor4\" [ngClass] =\"{'aria-expanded':tab===4}\" aria-labelledby=\"base-view-vendor4\">\n                  <form  #tab3Form=\"ngForm\" (ngSubmit)=\"submitResultTab4(tab4Form)\" novalidate>\n        \n                  <div class=\"row\">\n                    <div class=\"col-md-12 p-0\">\n                      <div class=\"card mb-0 view-vendor-scroll\">\n                        <!-- <div class=\"card-header border-bottom-blue-grey border-bottom-lighten-5 py-1\">\n                          <h5 class=\"text-dark mb-0\"></h5>\n                        </div> -->\n                        <div class=\"card-body pt-1\">\n                          <div class=\"row\">\n                            <div class=\"col-xl-4 col-lg-4 col-md-4\">\n                              <div class=\"form-group mb-1 row\">\n                                <label class=\"col-md-4 col-form-label\">Vendor Agreement <span class=\"text-danger\">*</span></label>\n                                <div class=\"col-md-8\">\n                                  <div class=\"custom-file\">\n                                      <input  type=\"file\" class=\"custom-file-input\" (change)=\"uploadVRFCopy($event.target.files,'VRF')\"   accept=\"image/png,image/jpeg,.pdf\" id=\"inputGroupFile01\">\n                                      <label class=\"custom-file-label\" for=\"inputGroupFile01\">{{VRFCopy ? VRFCopy.name :\n                                        'Choose file'}}</label>\n                                  </div>\n                                </div>\n                              </div>\n                              <span class=\"errormsg hidden\">\n                                Please enter cancelled cheque.\n                              </span>\n                            </div>\n                            <div class=\"w-100\"></div>\n                           <div class=\"col-sm-6\">\n                            <ul class=\"list-group\">\n                              <ng-container *ngFor=\"let file of fileList\">\n                                  <li class=\"list-group-item p-1 py-50\">\n                                      {{file.type==='GST'?'GST Registration':''}}\n                                      {{file.type==='PN'?'PAN Card Copy':''}}\n                                      {{file.type==='VRF'?'VRF Copy':''}}\n                                      {{file.type==='CC'?'Cancelled Cheque':''}}\n                                        <a style=\"cursor: pointer;\" (click)=\"onViewFile(file)\"  class=\"btn btn-outline-primary btn-darken-1 btn-sm float-right\">\n                                            <i class=\"feather icon-eye fa-lg\"></i>\n                                        </a>\n                                        <!-- <a style=\"cursor: pointer;\" class=\"btn btn-outline-danger btn-darken-1 btn-sm mr-50 float-right\">\n                                            <i class=\"feather icon-trash-2 fa-lg\"></i>\n                                        </a> -->\n                                    </li>\n                              </ng-container>\n                          \n                            \n                          \n                          </ul>\n                           </div>\n                            \n                           \n                          </div>\n    \n                        </div>\n                      </div>\n                    </div>\n                    <!-- <div class=\"col-md-4\">\n                      <div class=\"card h-100 mb-0\">\n                        <div class=\"card-header border-bottom-blue-grey border-bottom-lighten-5 py-1\">\n                          <h5 class=\"text-dark mb-0\"></h5>\n                        </div>\n                        <div class=\"card-body pt-1 view-vendor-scroll\">\n                          <div class=\"row\">\n                            <div class=\"col-md-12\">\n    \n                              <ul class=\"list-group\">\n                                <li class=\"list-group-item p-1 py-50\">\n                                  Customer\n                                    <a href=\"\" class=\"btn btn-outline-primary btn-darken-1 btn-sm float-right\">\n                                        <i class=\"feather icon-download fa-lg\"></i>\n                                    </a>\n                                    <a href=\"\" class=\"btn btn-outline-danger btn-darken-1 btn-sm mr-50 float-right\">\n                                        <i class=\"feather icon-trash-2 fa-lg\"></i>\n                                    </a>\n                                </li>\n                                <li class=\"list-group-item p-1 py-50\">\n                                  PAN Card Copy\n                                    <a href=\"\" class=\"btn btn-outline-primary btn-darken-1 btn-sm float-right\">\n                                        <i class=\"feather icon-download fa-lg\"></i>\n                                    </a>\n                                    <a href=\"\" class=\"btn btn-outline-danger btn-darken-1 btn-sm mr-50 float-right\">\n                                        <i class=\"feather icon-trash-2 fa-lg\"></i>\n                                    </a>\n                                </li>\n                                <li class=\"list-group-item p-1 py-50\">\n                                  Balance Sheet Of Last 3 Yrs.\n                                    <a href=\"\" class=\"btn btn-outline-primary btn-darken-1 btn-sm float-right\">\n                                        <i class=\"feather icon-download fa-lg\"></i>\n                                    </a>\n                                    <a href=\"\" class=\"btn btn-outline-danger btn-darken-1 btn-sm mr-50 float-right\">\n                                        <i class=\"feather icon-trash-2 fa-lg\"></i>\n                                    </a>\n                                </li>\n                              </ul>\n                            </div>\n                          </div>\n                        </div>\n                      </div>\n                    </div> -->\n                  </div>\n    \n                  <footer class=\"footer fixed-bottom footer-light navbar-border px-2\">\n                      <div class=\"text-right\">\n                        <button type=\"button\" class=\"btn btn-light round btn-min-width  mr-50\" (click)='back()'>Back</button>\n                        <button type=\"button\" (click)=\"rejectPopupOpen()\" class=\"btn btn-danger round btn-min-width btn-darken-2 shadow mr-50\">Reject</button>\n                        <!-- <button type=\"submit\" class=\"btn btn-secondary round btn-min-width btn-darken-1 shadow mr-50\">Update</button> -->\n                        <button type=\"button\" (click)=\"approve()\" class=\"btn btn-success round btn-min-width btn-darken-1 shadow mr-50\">Approve</button>\n                      </div>\n                  </footer>\n              </form>\n\n              </div>\n\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n<div class=\"modal fade\" id=\"alertMsg\" data-backdrop=\"static\"  data-keyboard=\"false\"\ntabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalCenterTitle\" aria-hidden=\"true\">\n\n    <div class=\"modal-dialog modal-dialog-centered modal-sm\" role=\"document\">\n\n      <div class=\"modal-content text-center\">\n\n        <!--Header-->\n\n        <!--Body-->\n\n        <div class=\"modal-body\">\n\n          <p class=\"mb-2\"><i [ngClass]=\"[ alertResponse.status === 'success' ? 'feather icon-bell font-large-4 text-success' : 'feather icon-bell font-large-4 text-danger']\" ></i></p>        \n\n          <h6>{{alertResponse.message}}</h6>\n\n        </div>\n\n        <!--Footer-->\n\n        <div class=\"modal-footer d-flex justify-content-center\">\n\n          <button *ngIf=\"alertResponse.status === 'success'\" type=\"button\" class=\"btn btn-primary\" (click)=\"okAlert()\">Ok</button>\n          <button *ngIf=\"alertResponse.status !== 'success'\" type=\"button\" class=\"btn btn-primary\" data-dismiss=\"modal\">Ok</button>\n\n        </div>\n\n      </div>\n\n    </div>\n\n  </div>\n\n  <!-- <div class=\"col-lg-12\" style=\"height: 680px;\"><object #pdfViewer type=\"application/pdf\" width=\"100%\"\n    height=\"100%\"></object></div> -->\n\n    <!-- Reject Popup -->\n<div class=\"modal fade\" id=\"rejectPopup\" data-backdrop=\"static\" data-keyboard=\"false\" tabindex=\"-1\" role=\"dialog\"\naria-labelledby=\"exampleModalCenterTitle\" aria-hidden=\"true\">\n<div class=\"modal-dialog modal-dialog-centered modal-sm\" role=\"document\">\n   <div class=\"modal-content \">\n      <!--Header-->\n      <div class=\"modal-header\">\n       <h4 class=\"modal-title text-danger\" id=\"myModalLabel18\">Reject Reason</h4>\n       <!-- <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n         <span aria-hidden=\"true\">&times;</span>\n       </button> -->\n       </div>\n      <!--Body-->\n      <div class=\"modal-body\">\n\n       <textarea placeholder=\"Reason\" type=\"text\" rows=\"8\"  [(ngModel)]=\"rejectReason\"  class=\"form-control form-control-sm\"></textarea>\n      </div>\n      <!--Footer-->\n      <div class=\"modal-footer\">\n       <button type=\"button\" (click)=\"rejectPopupClose()\" class=\"btn btn-secondary round btn-min-width btn-darken-1 shadow\" >Close</button>\n       <button type=\"button\" [disabled]=\"rejectReason == ''\" (click)=\"rejectPopupSubmit()\" class=\"btn btn-success round btn-min-width btn-darken-1 shadow\">Submit</button>\n     </div>\n   </div>\n</div>\n</div>\n\n<!-- alertMsg -->\n<div class=\"modal fade\" id=\"alertMsgNew\" data-backdrop=\"static\" data-keyboard=\"false\" tabindex=\"-1\" role=\"dialog\"\naria-labelledby=\"exampleModalCenterTitle\" aria-hidden=\"true\">\n<div class=\"modal-dialog modal-dialog-centered modal-sm\" role=\"document\">\n   <div class=\"modal-content text-center\">\n      <!--Header-->\n      <!--Body-->\n      <div class=\"modal-body\">\n         <p class=\"mb-2\"><i\n            [ngClass]=\"[ alertFlag === 'success' ? 'feather icon-bell font-large-4 text-success' : 'feather icon-bell font-large-4 text-danger']\"></i>\n         </p>\n         <h6 [innerHTML]=\"alertMessage\"></h6>\n      </div>\n      <!--Footer-->\n      <div class=\"modal-footer d-flex justify-content-center\">\n         <button  type=\"button\" class=\"btn btn-primary\"\n         (click)=\"okAlert()\">Ok</button>\n      </div>\n   </div>\n</div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/vendor-registration/vendor-registration.component.html":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/vendor-registration/vendor-registration.component.html ***!
  \********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"page-vendor-sign\">\n  <div class=\"container-fluid\">\n    <div class=\"row\">\n      <div class=\"col-md-12\">\n        <div class=\"row\">\n          <div class=\"col-md-3 bg-left-vendor d-none d-md-block\" style=\"height:100vh;min-height:auto;\">\n            <div class=\"mt-0 mb-3 text-center\">\n              <img src=\"assets/img/homelane-logo.png\"/>\n            </div>\n            <div class=\"row\">\n              <div class=\"col-12 text-center\">\n                <h1 class=\"login-title mt-0 mb-1\">Vendor Registration</h1>\n                <!-- <h1 class=\"login-title-2 mb-1\">Create Vendor Registration</h1> -->\n              </div>\n            </div>\n          </div>\n          <div class=\"col-md-9 bg-white p-0\">\n            <div class=\"card bg-transparent border-0 rounded-0 mb-0\">\n              <div class=\"card-header border-bottom-blue-grey border-bottom-lighten-5 bg-transparent pb-50\">\n                <div class=\"row\">\n                  <div class=\"col-sm-12\">\n                    <h4 class=\"login-title\">Contact Details</h4>\n                    <small class=\"text-powered\">Please note that fields marked with <span class=\"text-danger\">*</span>\n                      are mandatory</small>\n                  </div>\n                  <div class=\"col-sm-12 mt-1\">\n                    <ul class=\"nav nav-pills\">\n                      <li class=\"nav-item\">\n                        <a  [ngClass]=\"[ tab===1 ? 'nav-link active' : 'nav-link']\" id=\"base-view-vendor1\" data-toggle=\"pill\" (click)= \"tab=1\" href=\"#view-vendor1\" aria-expanded=\"true\">General Details</a>\n                      </li>\n                      <li class=\"nav-item\" >\n                        <a  [ngClass]=\"[ tab===2 ? 'nav-link active' : 'nav-link']\"  id=\"base-view-vendor2\" data-toggle=\"pill\" (click)= \"tab=2\" href=\"#view-vendor2\" [ngClass] =\"{'aria-expanded':tab===2}\" aria-expanded=\"false\">Bank Details</a>\n                      </li>\n                      <li class=\"nav-item\" >\n                        <a  [ngClass]=\"[ tab===3 ? 'nav-link active' : 'nav-link']\" id=\"base-view-vendor3\" data-toggle=\"pill\" (click)= \"tab=3\"  href=\"#view-vendor3\" [ngClass] =\"{'aria-expanded':tab===2}\" aria-expanded=\"false\">Attachments</a>\n                      </li>\n                    </ul>\n                  </div>\n                </div>\n              </div>\n              <div class=\"card-body page-scroll mt-1\">\n                <div class=\"row\">\n                  <div class=\"col-md-12\">\n                      <div class=\"tab-content px-0 pt-0\">\n                        <div *ngIf=\"tab===1\" [ngClass]=\"[ tab===1 ? 'nav-link active' : 'nav-link']\" role=\"tabpanel\"  id=\"view-vendor1\" aria-expanded=\"true\" aria-labelledby=\"base-view-vendor1\">\n                          <form  #tab1Form=\"ngForm\" (ngSubmit)=\"submitResultTab1(tab1Form)\" novalidate>\n                          <div class=\"row\">\n                            <div class=\"col-xl-3 col-lg-4 col-md-4\">\n                              <div class=\"form-group mb-50 row\">\n                                <label class=\"col-md-12 col-form-label\">Title <span class=\"text-danger\">*</span></label>\n                                <div class=\"col-md-12\">\n                                  <!-- <input name=\"fkTittle\" id=\"fkTittle\" required #fkTittle=\"ngModel\"  [(ngModel)]=\"submitObjectTab1.fkTittle\" type=\"text\" class=\"form-control form-control-sm\" > -->\n                                  <select [ngClass]=\"{invalid:!validTab1}\" name=\"fkTittle\" id=\"fkTittle\" required #fkTittle=\"ngModel\"  [(ngModel)]=\"submitObjectTab1.fkTittle\"  class=\"custom-select custom-select-sm\" >\n                                    <option value=\"\">Select</option>\n                                    <option *ngFor=\"let item of dropDownMaster.titleMst\" value=\"{{item.code}}\">\n                                      {{item.value}} \n                                    </option>\n                                  </select>\n                                </div>\n                              </div>\n                              <span class=\"errormsg\" *ngIf=\"!fkTittle.value && fkTittle.touched || !fkTittle.value && !validTab1\"  >\n                                Please enter title.\n                              </span>\n                            </div>\n                            <div class=\"col-xl-3 col-lg-4 col-md-4\">\n                              <div class=\"form-group mb-50 row\">\n                                <label class=\"col-md-12 col-form-label\">Name 1 <span class=\"text-danger\">*</span></label>\n                                <div class=\"col-md-12\">\n                                  <input [ngClass]=\"{invalid:!validTab1}\" maxlength=\"35\"  name=\"name1\" id=\"name1\"  required #name1=\"ngModel\"  [(ngModel)]=\"submitObjectTab1.name1\" type=\"text\" class=\"form-control form-control-sm\" >\n                                </div>\n                              </div>\n                              <span class=\"errormsg\" *ngIf=\"!name1.value && name1.touched || !name1.value && !validTab1\">\n                                Please enter name1.\n                              </span>\n                            \n                            </div>\n                            <div class=\"col-xl-3 col-lg-4 col-md-4\">\n                              <div class=\"form-group mb-50 row\">\n                                <label class=\"col-md-12 col-form-label\">Name 2 <span class=\"text-danger\">*</span></label>\n                                <div class=\"col-md-12\">\n                                  <input [ngClass]=\"{invalid:!validTab1}\" maxlength=\"35\" name=\"name2\" id=\"name2\" required #name2=\"ngModel\"  [(ngModel)]=\"submitObjectTab1.name2\" type=\"text\" class=\"form-control form-control-sm\" >\n                                </div>\n                              </div>\n                              <span class=\"errormsg\" *ngIf=\"!name2.value && name2.touched || !name2.value && !validTab1\" >\n                                Please enter name2.\n                              </span>\n                            </div>\n                            <div class=\"col-xl-3 col-lg-4 col-md-4\">\n                              <div class=\"form-group mb-50 row\">\n                                <label class=\"col-md-12 col-form-label\">Street <span class=\"text-danger\">*</span></label>\n                                <div class=\"col-md-12\">\n                                  <input [ngClass]=\"{invalid:!validTab1}\" maxlength=\"40\" name=\"street\" id=\"street\" required #street=\"ngModel\"  [(ngModel)]=\"submitObjectTab1.street\" type=\"text\" class=\"form-control form-control-sm\" >\n                                </div>\n                              </div>\n                              <span class=\"errormsg\" *ngIf=\"!street.value && street.touched || !street.value && !validTab1\" >\n                                Please enter street.\n                              </span>\n                            </div>\n                            <div class=\"col-xl-3 col-lg-4 col-md-4\">\n                              <div class=\"form-group mb-50 row\">\n                                <label class=\"col-md-12 col-form-label\">Street 2 <span class=\"text-danger\">*</span></label>\n                                <div class=\"col-md-12\">\n                                  <input [ngClass]=\"{invalid:!validTab1}\" maxlength=\"40\" name=\"street2\" id=\"street2\" required #street2=\"ngModel\"  [(ngModel)]=\"submitObjectTab1.street2\" type=\"text\" class=\"form-control form-control-sm\" >\n                                </div>\n                              </div>\n                              <span class=\"errormsg \"  *ngIf=\"!street2.value && street2.touched || !street2.value && !validTab1\">\n                                Please enter street 2.\n                              </span>\n                            </div>\n                            <div class=\"col-xl-3 col-lg-4 col-md-4\">\n                              <div class=\"form-group mb-50 row\">\n                                <label class=\"col-md-12 col-form-label\">Postal Code <span class=\"text-danger\">*</span></label>\n                                <div class=\"col-md-12\">\n                                  <input [ngClass]=\"{invalid:!validTab1}\" maxlength=\"10\" name=\"postCode\" id=\"postCode\" required #postCode=\"ngModel\"  [(ngModel)]=\"submitObjectTab1.postCode\" type=\"text\" class=\"form-control form-control-sm\">\n                                </div>\n                              </div>\n                              <span class=\"errormsg\" *ngIf=\"!postCode.value && postCode.touched || !postCode.value && !validTab1\">\n                                Please enter postal code.\n                              </span>\n                            </div>\n                            <div class=\"col-xl-3 col-lg-4 col-md-4\">\n                              <div class=\"form-group mb-50 row\">\n                                <label class=\"col-md-12 col-form-label\">City <span class=\"text-danger\">*</span></label>\n                                <div class=\"col-md-12\">\n                                  <input [ngClass]=\"{invalid:!validTab1}\" maxlength=\"40\" name=\"city\" id=\"city\" required #city=\"ngModel\"  [(ngModel)]=\"submitObjectTab1.city\" type=\"text\" class=\"form-control form-control-sm\">\n                                </div>\n                              </div>\n                              <span class=\"errormsg \" *ngIf=\"!city.value && city.touched || !city.value && !validTab1\">\n                                Please enter city.\n                              </span>\n                            </div>\n                            <div class=\"col-xl-3 col-lg-4 col-md-4\">\n                              <div class=\"form-group mb-50 row\">\n                                <label class=\"col-md-12 col-form-label\">Country <span class=\"text-danger\">*</span></label>\n                                <div class=\"col-md-12\">\n                                  <!-- <input name=\"fkCountry\" id=\"fkCountry\" required #fkCountry=\"ngModel\"  [(ngModel)]=\"submitObjectTab1.fkCountry\" type=\"text\" class=\"form-control form-control-sm\" > -->\n                                  <select [ngClass]=\"{invalid:!validTab1}\" (change)=\"onChangeCountry(submitObjectTab1.fkCountry)\" name=\"fkCountry\" id=\"fkCountry\" required #fkCountry=\"ngModel\"  [(ngModel)]=\"submitObjectTab1.fkCountry\"  class=\"custom-select custom-select-sm\" >\n                                    <option value=\"\">Select</option>\n                                    <option *ngFor=\"let item of dropDownMaster.countryMst\" value=\"{{item.code}}\">\n                                      {{item.value}} \n                                    </option>\n                                  </select>\n                                </div>\n                              </div>\n                              <span class=\"errormsg\"  *ngIf=\"!fkCountry.value && fkCountry.touched || !fkCountry.value && !validTab1\">\n                                Please enter country.\n                              </span>\n                            </div>\n                            <div class=\"col-xl-3 col-lg-4 col-md-4\">\n                              <div class=\"form-group mb-50 row\">\n                                <label class=\"col-md-12 col-form-label\">State <span class=\"text-danger\">*</span></label>\n                                <div class=\"col-md-12\">\n                                  <!-- <input name=\"fkRegion\" id=\"fkRegion\" required #fkRegion=\"ngModel\"  [(ngModel)]=\"submitObjectTab1.fkRegion\" type=\"text\" class=\"form-control form-control-sm\" > -->\n                                  <select [ngClass]=\"{invalid:!validTab1}\" name=\"fkRegion\" id=\"fkRegion\" required #fkRegion=\"ngModel\"  [(ngModel)]=\"submitObjectTab1.fkRegion\"  class=\"custom-select custom-select-sm\" >\n                                    <option value=\"\">Select</option>\n                                    <option *ngFor=\"let item of dropDownMaster.regionMst\" value=\"{{item.code}}\">\n                                      {{item.value}} \n                                    </option>\n                                  </select>\n                                </div>\n                              </div>\n                              <span class=\"errormsg\" *ngIf=\"!fkRegion.value && fkRegion.touched || !fkRegion.value && !validTab1\">\n                                Please enter state.\n                              </span>\n                            </div>\n                            <div class=\"col-xl-3 col-lg-4 col-md-4\">\n                              <div class=\"form-group mb-50 row\">\n                                <label class=\"col-md-12 col-form-label\">Mobile No. <span class=\"text-danger\">*</span></label>\n                                <div class=\"col-md-12\">\n                                  <input [ngClass]=\"{invalid:!validTab1}\"  name=\"mobileNo\" id=\"mobileNo\" [pattern]=\"mobilePattern\" minlength=\"10\" required #mobileNo=\"ngModel\"  [(ngModel)]=\"submitObjectTab1.mobileNo\" type=\"text\" class=\"form-control form-control-sm\" >\n                                </div>\n                              </div>\n                              <span class=\"errormsg\" *ngIf=\"!mobileNo.value && mobileNo.touched || !mobileNo.value && !validTab1\" >\n                                Please enter mobile no.\n                              </span>\n                              <span class=\"errormsg\" *ngIf=\"mobileNo.touched && mobileNo.errors?.pattern\"> Mobile number\n                                must be at least 10 digit long. </span>\n                            </div>\n                            <div class=\"col-xl-3 col-lg-4 col-md-4\">\n                              <div class=\"form-group mb-50 row\">\n                                <label class=\"col-md-12 col-form-label\">Email <span class=\"text-danger\">*</span></label>\n                                <div class=\"col-md-12\">\n                                  <input [ngClass]=\"{invalid:!validTab1}\" maxlength=\"240\" name=\"emailId\" id=\"emailId\" [pattern]=\"emailPattern\"  required #emailId=\"ngModel\"  [(ngModel)]=\"submitObjectTab1.emailId\" type=\"text\" class=\"form-control form-control-sm\">\n                                </div>\n                              </div>\n                              <span class=\"errormsg\" *ngIf=\"!emailId.value && emailId.touched || !emailId.value && !validTab1\"> Please enter email.\n                              \n                                <!-- <span *ngIf=\"emailId.errors.required\">\n                                  Please enter email.\n                                </span>\n                                <span class=\"errormsg\" *ngIf=\"emailId.errors.email\">\n                                  Invalid email address\n                                </span> -->\n                              </span>\n                              <span class=\"errormsg\" *ngIf=\"emailId.touched && emailId.errors?.pattern\"> Please enter\n                                valid email address.</span>\n                            </div>\n                            <div class=\"col-xl-3 col-lg-4 col-md-4\">\n                              <div class=\"form-group mb-50 row\">\n                                <label class=\"col-md-12 col-form-label\">Currency <span class=\"text-danger\">*</span></label>\n                                <div class=\"col-md-12\">\n                                  <!-- <input  name=\"fkCurrency\" id=\"fkCurrency\" required #fkCurrency=\"ngModel\"  [(ngModel)]=\"submitObjectTab1.fkCurrency\" type=\"text\" class=\"form-control form-control-sm\" > -->\n                                  <select [ngClass]=\"{invalid:!validTab1}\" name=\"fkCurrency\" id=\"fkCurrency\" required #fkCurrency=\"ngModel\"  [(ngModel)]=\"submitObjectTab1.fkCurrency\"  class=\"custom-select custom-select-sm\" >\n                                    <option value=\"\">Select</option>\n                                    <option *ngFor=\"let item of dropDownMaster.currencyMst\" value=\"{{item.code}}\">\n                                      {{item.value}} \n                                    </option>\n                                  </select>\n                              \n                                </div>\n                              </div>\n                              <span class=\"errormsg\" *ngIf=\"!fkCurrency.value && fkCurrency.touched || !fkCurrency.value && !validTab1\">\n                                Please enter currency.\n                              </span>\n                            </div>\n                            <div class=\"col-xl-3 col-lg-4 col-md-4\">\n                              <div class=\"form-group mb-50 row\">\n                                <label class=\"col-md-12 col-form-label\">GST No. </label>\n                                <div class=\"col-md-12\">\n                                  <input [ngClass]=\"{invalid:!validTab1}\" required [pattern]=\"gstPattern\"  name=\"gstnNo\" id=\"gstnNo\"  #gstnNo=\"ngModel\"  [(ngModel)]=\"submitObjectTab1.gstnNo\" type=\"text\" class=\"form-control form-control-sm\">\n                                </div>\n                              </div>\n                              <span class=\"errormsg\" *ngIf=\"gstnNo.touched && gstnNo.errors?.pattern ||  gstnNo.errors?.pattern && gstnNo.value && !validTab1\"> Please enter\n                                valid GST No. </span>\n                              <!-- <span class=\"errormsg\" *ngIf=\"!gstnNo.value && gstnNo.touched || !gstnNo.value && !validTab1\">\n                                Please enter GST no.\n                              </span> -->\n                            </div>\n                            <div class=\"col-xl-3 col-lg-4 col-md-4\">\n                              <div class=\"form-group mb-50 row\">\n                                <label class=\"col-md-12 col-form-label\">PAN No. <span class=\"text-danger\">*</span></label>\n                                <div class=\"col-md-12\">\n                                  <input [ngClass]=\"{invalid:!validTab1}\" [pattern]=\"panPattern\" name=\"panNo\" id=\"panNo\"  #panNo=\"ngModel\"  [(ngModel)]=\"submitObjectTab1.panNo\" type=\"text\" class=\"form-control form-control-sm\" >\n                                </div>\n                              </div>\n                              <span class=\"errormsg\" *ngIf=\"panNo.touched && panNo.errors?.pattern ||  panNo.errors?.pattern && panNo.value && !validTab1 \"> Please enter valid\n                                PAN No.</span>\n                              <span class=\"errormsg\" *ngIf=\"!panNo.value && panNo.touched || !panNo.value && !validTab1\">\n                                Please enter PAN No.\n                              </span>\n                            </div>\n\n                            <div class=\"col-xl-3 col-lg-4 col-md-4\">\n                              <div class=\"form-group mb-50 row\">\n                                <label class=\"col-md-12 col-form-label\">Lead Time <span class=\"text-danger\">*</span></label>\n                                <div class=\"col-md-12\">\n                                  <input [ngClass]=\"{invalid:!validTab1}\" name=\"leadTime\" id=\"leadTime\" required #leadTime=\"ngModel\"  [(ngModel)]=\"submitObjectTab1.leadTime\" type=\"number\" class=\"form-control form-control-sm\" >\n                                </div>\n                              </div>\n                              <span class=\"errormsg\" *ngIf=\"!leadTime.value && leadTime.touched || !leadTime.value && !validTab1\">\n                                Please enter Lead Time.\n                              </span>\n                            </div>\n                            <div class=\"col-xl-3 col-lg-4 col-md-4\">\n                              <div class=\"form-group mb-50 row\">\n                                <label class=\"col-md-12 col-form-label\">Grouping <span class=\"text-danger\">*</span></label>\n                                <div class=\"col-md-12\">\n                                  <!-- <input [ngClass]=\"{invalid:!validTab1}\" name=\"grouping\" id=\"grouping\" required #grouping=\"ngModel\"  [(ngModel)]=\"submitObjectTab1.grouping\" type=\"text\" class=\"form-control form-control-sm\" > -->\n                                  <select [ngClass]=\"{invalid:!validTab1}\" name=\"grouping\" id=\"grouping\" required #grouping=\"ngModel\"  [(ngModel)]=\"submitObjectTab1.grouping\"  class=\"custom-select custom-select-sm\" >\n                                    <option value=\"\">Select</option>\n                                    <option *ngFor=\"let item of dropDownMaster.groupingMst\" value=\"{{item.code}}\">\n                                      {{item.value}} \n                                    </option>\n                                  </select>\n                                </div>\n                              </div>\n                              <span class=\"errormsg\" *ngIf=\"!grouping.value && grouping.touched || !grouping.value && !validTab1\">\n                                Please enter grouping.\n                              </span>\n                            </div>\n                            <div class=\"col-xl-3 col-lg-4 col-md-4\">\n                              <div class=\"form-group mb-50 row\">\n                                <label class=\"col-md-12 col-form-label\">Incoterms <span class=\"text-danger\">*</span></label>\n                                <div class=\"col-md-12\">\n                                  <!-- <input name=\"fkTittle\" id=\"fkTittle\" required #fkTittle=\"ngModel\"  [(ngModel)]=\"submitObjectTab1.fkTittle\" type=\"text\" class=\"form-control form-control-sm\" > -->\n                                  <select [ngClass]=\"{invalid:!validTab1}\" name=\"incoterm\" id=\"incoterm\" required #incoterm=\"ngModel\"  [(ngModel)]=\"submitObjectTab1.incoterm\"  class=\"custom-select custom-select-sm\" >\n                                    <option value=\"\">Select</option>\n                                    <option *ngFor=\"let item of dropDownMaster.incotermMst\" value=\"{{item.code}}\">\n                                      {{item.value}} \n                                    </option>\n                                  </select>\n                                </div>\n                              </div>\n                              <span class=\"errormsg\" *ngIf=\"!incoterm.value && incoterm.touched || !incoterm.value && !validTab1\"  >\n                                Please enter incoterm.\n                              </span>\n                            </div>\n                          </div>\n                          <footer class=\"footer fixed-bottom footer-light navbar-border px-2\">\n                              <div class=\"text-right\">\n                                <!-- <button type=\"submit\" class=\"btn btn-danger round btn-min-width btn-darken-2 shadow\">Reject</button> -->\n                                <!-- <button type=\"submit\" class=\"btn btn-secondary round btn-min-width btn-darken-1 shadow\">Update</button> -->\n                                <button  type=\"submit\"  class=\"btn btn-success round btn-min-width btn-darken-1 shadow\">Next</button>\n                              </div>\n                          </footer>\n                        </form>\n\n                        </div>\n                        <div class=\"tab-pane\"  *ngIf=\"tab===2\"  [ngClass]=\"[ tab===2 ? 'nav-link active' : 'nav-link']\" id=\"view-vendor2\"  aria-labelledby=\"base-view-vendor2\">\n                          <form  #tab2Form=\"ngForm\" (ngSubmit)=\"submitResultTab2(tab2Form)\" novalidate>\n                            <div class=\"row\">\n                              <!-- <div class=\"col-xl-3 col-lg-4 col-md-4\">\n                                <div class=\"form-group mb-50 row\">\n                                  <label class=\"col-md-12 col-form-label\">Grouping <span class=\"text-danger\">*</span></label>\n                                  <div class=\"col-md-12\">  <select name=\"grouping\" id=\"grouping\" required #grouping=\"ngModel\"  [(ngModel)]=\"submitObjectTab2.grouping\"  class=\"custom-select custom-select-sm\" >\n                                      <option value=\"\">Select</option>\n                                      <option *ngFor=\"let item of dropDownMaster.groupingMst\" value=\"{{item.code}}\">\n                                        {{item.value}} \n                                      </option>\n                                    </select>\n                                  </div>\n                                </div>\n                                <span class=\"errormsg\" *ngIf=\"!grouping?.valid && (grouping?.dirty || grouping?.touched)\">\n                                  Please enter grouping.\n                                </span>\n                              </div> -->\n                              <div class=\"col-xl-3 col-lg-4 col-md-4\">\n                                <div class=\"form-group mb-50 row\">\n                                  <label class=\"col-md-12 col-form-label\">Bank Name <span class=\"text-danger\">*</span></label>\n                                  <div class=\"col-md-12\">\n                                    <input [ngClass]=\"{invalid:!validTab2}\" name=\"bankName\" id=\"bankName\" required #bankName=\"ngModel\"  [(ngModel)]=\"submitObjectTab2.bankName\" type=\"text\" class=\"form-control form-control-sm\" >\n                                  </div>\n                                </div>\n                                <span class=\"errormsg\" *ngIf=\"!bankName.value && bankName.touched || !bankName.value && !validTab2\" >\n                                  Please enter bank name.\n                                </span>\n                              </div>\n\n                              <div class=\"col-xl-3 col-lg-4 col-md-4\">\n                                <div class=\"form-group mb-50 row\">\n                                  <label class=\"col-md-12 col-form-label\">Account Number <span class=\"text-danger\">*</span></label>\n                                  <div class=\"col-md-12\">\n                                    <input maxlength=\"18\" [ngClass]=\"{invalid:!validTab2}\" name=\"accountNo\" id=\"accountNo\" required #accountNo=\"ngModel\"  [(ngModel)]=\"submitObjectTab2.accountNo\" type=\"text\" class=\"form-control form-control-sm\" >\n                                  </div>\n                                </div>\n                                <span class=\"errormsg\" *ngIf=\"!accountNo.value && accountNo.touched || !accountNo.value && !validTab2\">\n                                  Please enter account number.\n                                </span>\n                              </div>\n\n                              \n                              <div class=\"col-xl-3 col-lg-4 col-md-4\">\n                                <div class=\"form-group mb-50 row\">\n                                  <label class=\"col-md-12 col-form-label\">Account Holder Name <span class=\"text-danger\">*</span></label>\n                                  <div class=\"col-md-12\">\n                                    <input [ngClass]=\"{invalid:!validTab2}\" name=\"accountHolder\" id=\"accountHolder\" required #accountHolder=\"ngModel\"  [(ngModel)]=\"submitObjectTab2.accountHolder\" type=\"text\" class=\"form-control form-control-sm\" >\n                                  </div>\n                                </div>\n                                <span class=\"errormsg\" *ngIf=\"!accountHolder.value && accountHolder.touched || !accountHolder.value && !validTab2\" >\n                                  Please enter account holder name.\n                                </span>\n                              </div>\n\n                              <div class=\"col-xl-3 col-lg-4 col-md-4\">\n                                <div class=\"form-group mb-50 row\">\n                                  <label class=\"col-md-12 col-form-label\">IFSC Code <span class=\"text-danger\">*</span></label>\n                                  <div class=\"col-md-12\">\n                                    <input maxlength=\"15\" [ngClass]=\"{invalid:!validTab2}\" name=\"ifscCode\" id=\"ifscCode\" required #ifscCode=\"ngModel\"  [(ngModel)]=\"submitObjectTab2.ifscCode\" type=\"text\" class=\"form-control form-control-sm\" >\n                                  </div>\n                                </div>\n                                <span class=\"errormsg\" *ngIf=\"!ifscCode.value && ifscCode.touched || !ifscCode.value && !validTab2\">\n                                  Please enter IFSC code.\n                                </span>\n                              </div>\n\n                              <div class=\"col-xl-3 col-lg-4 col-md-4\">\n                                <div class=\"form-group mb-50 row\">\n                                  <label class=\"col-md-12 col-form-label\">Bank Control Key <span *ngIf=\"submitObjectTab1.fkCountry != 'IN' && submitObjectTab1.fkCountry != ''\" class=\"text-danger\">*</span></label>\n                                  <div class=\"col-md-12\">\n                                    <input maxlength=\"2\"  [required]=\"submitObjectTab1.fkCountry != 'IN' && submitObjectTab1.fkCountry != ''\"  name=\"bankControlKey\" id=\"bankControlKey\"  #bankControlKey=\"ngModel\"  [(ngModel)]=\"submitObjectTab2.bankControlKey\" type=\"text\" class=\"form-control form-control-sm\" >\n                                  </div>\n                                </div>\n                                <!-- <span class=\"errormsg\" *ngIf=\"!bankControlKey.value && bankControlKey.touched || !bankControlKey.value && !validTab2\" >\n                                  Please enter bank control key.\n                                </span> -->\n                                <span class=\"errormsg\" *ngIf=\"bankControlKey.errors?.required && bankControlKey.touched || bankControlKey.errors?.required && !validTab2\">\n                                  Please enter bank control key.\n                              </span>\n                              </div>\n\n                              <!-- <div class=\"col-xl-3 col-lg-4 col-md-4\">\n                                <div class=\"form-group mb-50 row\">\n                                  <label class=\"col-md-12 col-form-label\">MSME </label>\n                                  <div class=\"col-md-12\">\n                                    <input [ngClass]=\"{invalid:!validTab2}\" name=\"msme\" id=\"msme\" #msme=\"ngModel\"  [(ngModel)]=\"submitObjectTab2.msme\" type=\"text\" class=\"form-control form-control-sm\" >\n                                  </div>\n                                </div>\n                                <span class=\"errormsg\" *ngIf=\"!msme.value && msme.touched || !msme.value && !validTab2\">\n                                  Please enter msme.\n                                </span>\n                              </div> -->\n\n                              <div class=\"col-xl-3 col-lg-4 col-md-4\">\n                                <div class=\"form-group mb-50 row\">\n                                  <label class=\"col-md-12 col-form-label\">MSME Certificate No. </label>\n                                  <div class=\"col-md-12\">\n                                    <input maxlength=\"10\"   name=\"msmeCertificateNo\" id=\"msmeCertificateNo\"  #msmeCertificateNo=\"ngModel\"  [(ngModel)]=\"submitObjectTab2.msmeCertificateNo\" type=\"text\" class=\"form-control form-control-sm\" >\n                                  </div>\n                                </div>\n                                <!-- <span class=\"errormsg\" *ngIf=\"!msmeCertificateNo.value && msmeCertificateNo.touched || !msmeCertificateNo.value && !validTab2\">\n                                  Please enter msme certificateNo.\n                                </span> -->\n                                <!-- <span class=\"errormsg\" *ngIf=\"msmeCertificateNo.errors?.required && msmeCertificateNo.touched || msmeCertificateNo.errors?.required && !validTab2\">\n                                  Please enter msme certificateNo.\n                                </span> -->\n                              </div>\n\n                              <div class=\"col-xl-3 col-lg-4 col-md-4\">\n                                <div class=\"form-group mb-50 row\">\n                                  <label class=\"col-md-12 col-form-label\">TIN <span *ngIf=\"submitObjectTab1.panNo != ''\" class=\"text-danger\">*</span></label>\n                                  <div class=\"col-md-12\">\n                                    <input maxlength=\"10\" [required]=\"submitObjectTab1.panNo != ''\" name=\"tin\" id=\"tin\"  #tin=\"ngModel\"  [(ngModel)]=\"submitObjectTab2.tin\" type=\"text\" class=\"form-control form-control-sm\" >\n                                  </div>\n                                </div>\n                                <!-- <span class=\"errormsg\" *ngIf=\"!tin.value && tin.touched || !tin.value && !validTab2\" >\n                                  Please enter tin.\n                                </span> -->\n                                <span class=\"errormsg\" *ngIf=\"tin.errors?.required && tin.touched || tin.errors?.required && !validTab2\" >\n                                  Please enter tin.\n                                </span>\n                              </div>\n                         <!-- <div class=\"col-xl-3 col-lg-4 col-md-4\">\n                                <div class=\"form-group mb-50 row\">\n                                  <label class=\"col-md-12 col-form-label\">INCO Term <span class=\"text-danger\">*</span></label>\n                                  <div class=\"col-md-12\">\n                                    <input name=\"incoterm\" id=\"incoterm\" required #incoterm=\"ngModel\"  [(ngModel)]=\"submitObjectTab2.incoterm\" type=\"text\" class=\"form-control form-control-sm\" >\n                                  </div>\n                                </div>\n                                <span class=\"errormsg\" *ngIf=\"!incoterm?.valid && (incoterm?.dirty || incoterm?.touched)\">\n                                  Please enter INCO term .\n                                </span>\n                              </div> -->\n                            </div>\n                            <footer class=\"footer fixed-bottom footer-light navbar-border px-2\">\n                                <div class=\"text-right\">\n                                  <!-- <button type=\"submit\" class=\"btn btn-danger round btn-min-width btn-darken-2 shadow\">Reject</button> -->\n                                  <!-- <button type=\"submit\" class=\"btn btn-secondary round btn-min-width btn-darken-1 shadow\">Update</button> -->\n                                  <button  type=\"submit\" class=\"btn btn-success round btn-min-width btn-darken-1 shadow\">Next</button>\n                                </div>\n                            </footer>\n                          </form>\n\n                        </div>\n                        <div class=\"tab-pane\" *ngIf=\"tab===3\"  [ngClass]=\"[ tab===3 ? 'nav-link active' : 'nav-link']\"   id=\"view-vendor3\" aria-labelledby=\"base-view-vendor3\">\n                          <form  #tab3Form=\"ngForm\" (ngSubmit)=\"submitResultTab3(tab3Form)\" novalidate>\n                            <div class=\"row\">\n                              <div class=\"col-xl-3 col-lg-4 col-md-4\">\n                                <div class=\"form-group mb-50 row\">\n                                  <label class=\"col-md-12 col-form-label\">GST Registration </label>\n                                  <div class=\"col-md-12\">\n                                    <div class=\"custom-file\">\n                                      <input type=\"file\" class=\"custom-file-input\" accept=\"image/png,image/jpeg,.pdf\"  (change)=\"upload($event.target.files,'GST')\"  id=\"inputGroupFile01\">\n                                      <label class=\"custom-file-label\" for=\"inputGroupFile01\">{{gstFile ? gstFile.name :\n                                        'Choose file'}}</label>\n                                    </div>\n                                  </div>\n                                </div>\n                                <span class=\"errormsg hidden\">\n                                  Please enter gst registration.\n                                </span>\n                              </div>\n                              <div class=\"col-xl-3 col-lg-4 col-md-4\">\n                                <div class=\"form-group mb-50 row\">\n                                  <label class=\"col-md-12 col-form-label\">PAN Card Copy <span class=\"text-danger\">*</span></label>\n                                  <div class=\"col-md-12\">\n                                    <div class=\"custom-file\">\n                                        <!-- <input type=\"file\" class=\"custom-file-input\" id=\"inputGroupFile02\"> -->\n                                        <!-- <label class=\"custom-file-label\" for=\"inputGroupFile01\">Choose file</label> -->\n                                        <input type=\"file\" class=\"custom-file-input\"  accept=\"image/png,image/jpeg,.pdf\" (change)=\"upload($event.target.files,'PAN')\" id=\"inputGroupFile02\">\n                                        <label class=\"custom-file-label\" for=\"inputGroupFile02\">{{panFile ? panFile.name :\n                                          'Choose file'}}</label>\n                                    </div>\n                                  </div>\n                                </div>\n                                <span class=\"errormsg hidden\">\n                                  Please enter pan card copy.\n                                </span>\n                              </div>\n                              \n                              <div class=\"col-xl-3 col-lg-4 col-md-4\">\n                                <div class=\"form-group mb-50 row\">\n                                  <label class=\"col-md-12 col-form-label\">Cancelled Cheque <span class=\"text-danger\">*</span></label>\n                                  <div class=\"col-md-12\">\n                                    <div class=\"custom-file\">\n                                        <input type=\"file\" class=\"custom-file-input\" (change)=\"uploadCancelledCheque($event.target.files,'CC')\"   accept=\"image/png,image/jpeg,.pdf\" id=\"inputGroupFile01\">\n                                        <label class=\"custom-file-label\" for=\"inputGroupFile01\">{{cancelCheque ? cancelCheque.name :\n                                          'Choose file'}}</label>\n                                    </div>\n                                  </div>\n                                </div>\n                                <span class=\"errormsg hidden\">\n                                  Please enter cancelled cheque.\n                                </span>\n                              </div>\n                            </div>\n                            <footer class=\"footer fixed-bottom footer-light navbar-border px-2\">\n                                <div class=\"text-right\">\n                                  <!-- <button type=\"submit\" class=\"btn btn-danger round btn-min-width btn-darken-2 shadow\">Reject</button> -->\n                                  <!-- <button type=\"submit\" class=\"btn btn-secondary round btn-min-width btn-darken-1 shadow\">Update</button> -->\n                                  <button type=\"submit\" class=\"btn btn-success round btn-min-width btn-darken-1 shadow\">Submit</button>\n                                </div>\n                            </footer>\n                          </form>\n                        \n\n                        </div>\n                      </div>\n                    </div>\n                  </div>\n              </div>\n              <!-- <div class=\"card-footer bg-transparent\">\n                <div class=\"row\">\n                  <div class=\"col-12 text-right\">\n                    <button type=\"submit\" class=\"btn btn-success round btn-min-width btn-darken-1 shadow next-step\">Save</button>\n                  </div>\n                </div>\n              </div> -->\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n\n<div class=\"modal fade\" id=\"alertMsg\" data-backdrop=\"static\" data-keyboard=\"false\" tabindex=\"-1\" role=\"dialog\"\n   aria-labelledby=\"exampleModalCenterTitle\" aria-hidden=\"true\">\n   <div class=\"modal-dialog modal-dialog-centered modal-sm\" role=\"document\">\n      <div class=\"modal-content text-center\">\n         <!--Header-->\n         <!--Body-->\n         <div class=\"modal-body\">\n            <p class=\"mb-2\"><i\n               [ngClass]=\"[ alertFlag === 'success' ? 'feather icon-bell font-large-4 text-success' : 'feather icon-bell font-large-4 text-danger']\"></i>\n            </p>\n            <h6>{{alertMessage}}</h6>\n         </div>\n         <!--Footer-->\n         <div class=\"modal-footer d-flex justify-content-center\">\n            <button  type=\"button\" class=\"btn btn-primary\"\n            (click)=\"okAlert()\">Ok</button>\n         </div>\n      </div>\n   </div>\n  </div>\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/vendor-view/vendor-view.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/vendor-view/vendor-view.component.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"content-wrapper\">\n    <div class=\"content-header row mb-0\">\n        <div class=\"content-header-left col-md-6 col-12 mb-1\">\n            <h3 class=\"content-header-title mb-0\"><i class=\"feather icon-user text-warning\"></i> Vendor Details</h3>\n        </div>\n        <div class=\"content-header-right text-md-right col-md-6 col-12 mb-md-0 mb-0\">\n          <div class=\"form-group mb-0\">\n              <a class=\"btn btn-link\" (click)=\"back()\"><i class=\"feather icon-users fa-lg text-warning\"></i> Back to Vendor Access</a>\n          </div>\n        </div>\n    </div>\n    <div class=\"content-body\">\n      <div class=\"row\">\n        <div class=\"col-sm-12\">\n          <div class=\"card mb-0 bg-transparent shadow-none\">\n            <div class=\"card-body\">\n              <div class=\"row\">\n                <!-- <div class=\"col-md-12\">\n                  <p class=\"page-title\">Personal Details</p>\n                </div> -->\n                <div class=\"col-xl-4 col-lg-4 col-md-4\">\n                  <div class=\"form-group mb-50\">\n                    <label class=\"col-form-label\">Vendor Code</label>\n                    <h6 class=\"text-bold-600\">{{vendorDetails.vendorCode}}</h6>\n                  </div>\n                </div>\n                <div class=\"col-xl-4 col-lg-4 col-md-4\">\n                  <div class=\"form-group mb-50\">\n                    <label class=\"col-form-label\">First Name</label>\n                    <h6 class=\"text-bold-600\">{{vendorDetails.name1}}</h6>\n                  </div>\n                </div>\n                <div class=\"col-xl-4 col-lg-4 col-md-4\">\n                  <div class=\"form-group mb-50\">\n                    <label class=\"col-form-label\">Last Name</label>\n                    <h6 class=\"text-bold-600\">{{vendorDetails.name2}}</h6>\n                  </div>\n                </div>\n                <div class=\"col-xl-4 col-lg-4 col-md-4\">\n                  <div class=\"form-group mb-50\">\n                    <label class=\"col-form-label\">Title</label>\n                    <h6 class=\"text-bold-600\">{{vendorDetails.title}}</h6>\n                  </div>\n                </div>\n                <div class=\"col-xl-4 col-lg-4 col-md-4\">\n                  <div class=\"form-group mb-50\">\n                    <label class=\"col-form-label\">Email Id</label>\n                    <h6 class=\"text-bold-600\">{{vendorDetails.emailId}}</h6>\n                  </div>\n                </div>\n                <div class=\"col-xl-4 col-lg-4 col-md-4\">\n                  <div class=\"form-group mb-50\">\n                    <label class=\"col-form-label\">Mobile No</label>\n                    <h6 class=\"text-bold-600\">{{vendorDetails.mobileNo}}</h6>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"col-xl-4 col-lg-4 col-md-4\">\n          <div class=\"card h-100\">\n            <div class=\"card-body\">\n              <div class=\"row\">\n                <div class=\"col-md-12\">\n                  <h5 class=\"page-title-view\">Address</h5>\n                </div>\n                <div class=\"col-xl-12 col-lg-12 col-md-12\">\n                  <div class=\"form-group mb-50\">\n                    <label class=\"col-form-label\">Street</label>\n                    <h6 class=\"text-bold-600\">{{vendorDetails.street}}</h6>\n                  </div>\n                </div>\n                <div class=\"col-xl-12 col-lg-12 col-md-12\">\n                  <div class=\"form-group mb-50\">\n                    <label class=\"col-form-label\">Street 2</label>\n                    <h6 class=\"text-bold-600\">{{vendorDetails.street2}}</h6>\n                  </div>\n                </div>\n                <div class=\"col-xl-6 col-lg-6 col-md-12\">\n                  <div class=\"form-group mb-50\">\n                    <label class=\"col-form-label\">Postal Code</label>\n                    <h6 class=\"text-bold-600\">{{vendorDetails.postCode}}</h6>\n                  </div>\n                </div>\n                <div class=\"col-xl-6 col-lg-6 col-md-12\">\n                  <div class=\"form-group mb-50\">\n                    <label class=\"col-form-label\">City</label>\n                    <h6 class=\"text-bold-600\">{{vendorDetails.city}}</h6>\n                  </div>\n                </div>\n                <div class=\"col-xl-6 col-lg-6 col-md-12\">\n                  <div class=\"form-group mb-50\">\n                    <label class=\"col-form-label\">State</label>\n                    <h6 class=\"text-bold-600\">{{vendorDetails.region}}</h6>\n                  </div>\n                </div>\n                <div class=\"col-xl-6 col-lg-6 col-md-12\">\n                  <div class=\"form-group mb-50\">\n                    <label class=\"col-form-label\">Country</label>\n                    <h6 class=\"text-bold-600\">{{vendorDetails.country}}</h6>\n                  </div>\n                </div>\n                <div class=\"col-xl-6 col-lg-6 col-md-12\">\n                  <div class=\"form-group mb-50\">\n                    <label class=\"col-form-label\">Grouping</label>\n                    <h6 class=\"text-bold-600\">{{vendorDetails.grouping}}</h6>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"col-xl-8 col-lg-8 col-md-8\">\n          <div class=\"row\">\n            <div class=\"col-xl-12 col-lg-12 col-md-12\">\n              <div class=\"card mb-50\">\n                <div class=\"card-body\">\n                  <div class=\"row\">\n                    <div class=\"col-md-12\">\n                      <h5 class=\"page-title-view\">Bank Account Details</h5>\n                    </div>\n                    <div class=\"col-xl-4 col-lg-6 col-md-12\">\n                      <div class=\"form-group mb-50\">\n                        <label class=\"col-form-label\">Account Holder</label>\n                        <h6 class=\"text-bold-600\">{{vendorDetails.accountHolder}}</h6>\n                      </div>\n                    </div>\n                    <div class=\"col-xl-3 col-lg-6 col-md-12\">\n                      <div class=\"form-group mb-50\">\n                        <label class=\"col-form-label\">Account No</label>\n                        <h6 class=\"text-bold-600\">{{vendorDetails.accountNo}}</h6>\n                      </div>\n                    </div>\n                    <div class=\"col-xl-3 col-lg-6 col-md-12\">\n                      <div class=\"form-group mb-50\">\n                        <label class=\"col-form-label\">IFSC Code</label>\n                        <h6 class=\"text-bold-600\">{{vendorDetails.ifscCode}}</h6>\n                      </div>\n                    </div>\n                    <div class=\"col-xl-2 col-lg-6 col-md-12\">\n                      <div class=\"form-group mb-50\">\n                        <label class=\"col-form-label\">House Bank</label>\n                        <h6 class=\"text-bold-600\">{{vendorDetails.houseBank}}</h6>\n                      </div>\n                    </div>\n  \n                  </div>\n                </div>\n              </div>\n            </div>\n  \n            <div class=\"col-xl-12 col-lg-12 col-md-12\">\n              <div class=\"card mb-0\">\n                <div class=\"card-body\">\n                  <div class=\"row\">\n                    <div class=\"col-md-12\">\n                      <h5 class=\"page-title-view\">Other Details</h5>\n                    </div>\n                    <div class=\"col-xl-4 col-lg-6 col-md-12\">\n                      <div class=\"form-group mb-50\">\n                        <label class=\"col-form-label\">GST No</label>\n                        <h6 class=\"text-bold-600\">{{vendorDetails.gstnNo}}</h6>\n                      </div>\n                    </div>\n                    <div class=\"col-xl-4 col-lg-6 col-md-12\">\n                      <div class=\"form-group mb-50\">\n                        <label class=\"col-form-label\">PAN No</label>\n                        <h6 class=\"text-bold-600\">{{vendorDetails.panNo}}</h6>\n                      </div>\n                    </div>\n                    <div class=\"col-xl-4 col-lg-6 col-md-12\">\n                      <div class=\"form-group mb-50\">\n                        <label class=\"col-form-label\">Incoterms</label>\n                        <h6 class=\"text-bold-600\">{{vendorDetails.incoterm}}</h6>\n                      </div>\n                    </div>\n                    <div class=\"col-xl-4 col-lg-6 col-md-12\">\n                      <div class=\"form-group mb-50\">\n                        <label class=\"col-form-label\">Payment Terms</label>\n                        <h6 class=\"text-bold-600\">{{vendorDetails.payTerms}}</h6>\n                      </div>\n                    </div>\n                    <div class=\"col-xl-4 col-lg-6 col-md-12\">\n                      <div class=\"form-group mb-50\">\n                        <label class=\"col-form-label\">Currency</label>\n                        <h6 class=\"text-bold-600\">{{vendorDetails.currency}}</h6>\n                      </div>\n                    </div>\n                    <div class=\"col-xl-4 col-lg-6 col-md-12\">\n                      <div class=\"form-group mb-50\">\n                        <label class=\"col-form-label\">Reconciliation Account No</label>\n                        <h6 class=\"text-bold-600\">{{vendorDetails.recconAcNo}}</h6>\n                      </div>\n                    </div>\n                    <div class=\"col-xl-4 col-lg-6 col-md-12\">\n                      <div class=\"form-group mb-50\">\n                        <label class=\"col-form-label\">Scheme Supply</label>\n                        <h6 class=\"text-bold-600\">{{vendorDetails.shemaGroup}}</h6>\n                      </div>\n                    </div>\n                    <div class=\"col-xl-4 col-lg-6 col-md-12\">\n                      <div class=\"form-group mb-50\">\n                        <label class=\"col-form-label\">Search Term</label>\n                        <h6 class=\"text-bold-600\">{{vendorDetails.searchTerm}}</h6>\n                      </div>\n                    </div>\n  \n                  </div>\n                </div>\n              </div>\n            </div>\n  \n          </div>\n        </div>\n      </div>\n  \n    </div>\n  </div>\n  ");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __createBinding, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__createBinding", function() { return __createBinding; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function() { return __classPrivateFieldGet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function() { return __classPrivateFieldSet; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __createBinding(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}

function __exportStar(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
}

function __classPrivateFieldSet(receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
}


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _pages_change_password_change_password_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/change-password/change-password.component */ "./src/app/pages/change-password/change-password.component.ts");
/* harmony import */ var _pages_customer_invitation_customer_invitation_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/customer-invitation/customer-invitation.component */ "./src/app/pages/customer-invitation/customer-invitation.component.ts");
/* harmony import */ var _pages_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/dashboard/dashboard.component */ "./src/app/pages/dashboard/dashboard.component.ts");
/* harmony import */ var _pages_lead_generation_list_lead_generation_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/lead-generation-list/lead-generation-list.component */ "./src/app/pages/lead-generation-list/lead-generation-list.component.ts");
/* harmony import */ var _pages_lead_generation_view_lead_generation_view_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/lead-generation-view/lead-generation-view.component */ "./src/app/pages/lead-generation-view/lead-generation-view.component.ts");
/* harmony import */ var _pages_lead_generation_lead_generation_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/lead-generation/lead-generation.component */ "./src/app/pages/lead-generation/lead-generation.component.ts");
/* harmony import */ var _pages_lead_management_lead_management_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pages/lead-management/lead-management.component */ "./src/app/pages/lead-management/lead-management.component.ts");
/* harmony import */ var _pages_login_login_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pages/login/login.component */ "./src/app/pages/login/login.component.ts");
/* harmony import */ var _pages_main_layout_main_layout_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pages/main-layout/main-layout.component */ "./src/app/pages/main-layout/main-layout.component.ts");
/* harmony import */ var _pages_menu_authorization_menu_authorization_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./pages/menu-authorization/menu-authorization.component */ "./src/app/pages/menu-authorization/menu-authorization.component.ts");
/* harmony import */ var _pages_order_list_order_list_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./pages/order-list/order-list.component */ "./src/app/pages/order-list/order-list.component.ts");
/* harmony import */ var _pages_order_view_order_view_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./pages/order-view/order-view.component */ "./src/app/pages/order-view/order-view.component.ts");
/* harmony import */ var _pages_query_list_query_list_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./pages/query-list/query-list.component */ "./src/app/pages/query-list/query-list.component.ts");
/* harmony import */ var _pages_query_mangement_query_mangement_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./pages/query-mangement/query-mangement.component */ "./src/app/pages/query-mangement/query-mangement.component.ts");
/* harmony import */ var _pages_query_view_query_view_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./pages/query-view/query-view.component */ "./src/app/pages/query-view/query-view.component.ts");
/* harmony import */ var _pages_quotation_history_list_quotation_history_list_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./pages/quotation-history-list/quotation-history-list.component */ "./src/app/pages/quotation-history-list/quotation-history-list.component.ts");
/* harmony import */ var _pages_quotation_history_view_quotation_history_view_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./pages/quotation-history-view/quotation-history-view.component */ "./src/app/pages/quotation-history-view/quotation-history-view.component.ts");
/* harmony import */ var _pages_quotation_list_quotation_list_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./pages/quotation-list/quotation-list.component */ "./src/app/pages/quotation-list/quotation-list.component.ts");
/* harmony import */ var _pages_quotation_view_quotation_view_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./pages/quotation-view/quotation-view.component */ "./src/app/pages/quotation-view/quotation-view.component.ts");
/* harmony import */ var _pages_sign_up_page_sign_up_page_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./pages/sign-up-page/sign-up-page.component */ "./src/app/pages/sign-up-page/sign-up-page.component.ts");
/* harmony import */ var _pages_user_creation_user_creation_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./pages/user-creation/user-creation.component */ "./src/app/pages/user-creation/user-creation.component.ts");
/* harmony import */ var _pages_vendor_management_vendor_management_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./pages/vendor-management/vendor-management.component */ "./src/app/pages/vendor-management/vendor-management.component.ts");
/* harmony import */ var _pages_vendor_registration_list_vendor_registration_list_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./pages/vendor-registration-list/vendor-registration-list.component */ "./src/app/pages/vendor-registration-list/vendor-registration-list.component.ts");
/* harmony import */ var _pages_vendor_registration_view_vendor_registration_view_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./pages/vendor-registration-view/vendor-registration-view.component */ "./src/app/pages/vendor-registration-view/vendor-registration-view.component.ts");
/* harmony import */ var _pages_vendor_registration_vendor_registration_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./pages/vendor-registration/vendor-registration.component */ "./src/app/pages/vendor-registration/vendor-registration.component.ts");
/* harmony import */ var _services_auth_guard__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./services/auth.guard */ "./src/app/services/auth.guard.ts");
/* harmony import */ var _pages_dispatch_order_list_dispatch_order_list_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./pages/dispatch-order-list/dispatch-order-list.component */ "./src/app/pages/dispatch-order-list/dispatch-order-list.component.ts");
/* harmony import */ var _pages_dispatch_view_dispatch_view_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./pages/dispatch-view/dispatch-view.component */ "./src/app/pages/dispatch-view/dispatch-view.component.ts");
/* harmony import */ var _pages_session_expired_session_expired_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./pages/session-expired/session-expired.component */ "./src/app/pages/session-expired/session-expired.component.ts");
/* harmony import */ var _pages_my_profile_my_profile_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./pages/my-profile/my-profile.component */ "./src/app/pages/my-profile/my-profile.component.ts");
/* harmony import */ var _pages_forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./pages/forgot-password/forgot-password.component */ "./src/app/pages/forgot-password/forgot-password.component.ts");
/* harmony import */ var _pages_vendor_access_vendor_access_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./pages/vendor-access/vendor-access.component */ "./src/app/pages/vendor-access/vendor-access.component.ts");
/* harmony import */ var _pages_vendor_view_vendor_view_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./pages/vendor-view/vendor-view.component */ "./src/app/pages/vendor-view/vendor-view.component.ts");
/* harmony import */ var _pages_force_change_password_force_change_password_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./pages/force-change-password/force-change-password.component */ "./src/app/pages/force-change-password/force-change-password.component.ts");
/* harmony import */ var _pages_quotation_approval_list_quotation_approval_list_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./pages/quotation-approval-list/quotation-approval-list.component */ "./src/app/pages/quotation-approval-list/quotation-approval-list.component.ts");
/* harmony import */ var _pages_quotation_approval_view_quotation_approval_view_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./pages/quotation-approval-view/quotation-approval-view.component */ "./src/app/pages/quotation-approval-view/quotation-approval-view.component.ts");







































const routes = [
    {
        path: '',
        component: _pages_login_login_component__WEBPACK_IMPORTED_MODULE_10__["LoginComponent"]
    },
    {
        path: 'login',
        component: _pages_login_login_component__WEBPACK_IMPORTED_MODULE_10__["LoginComponent"]
    },
    {
        path: 'sign-up',
        component: _pages_sign_up_page_sign_up_page_component__WEBPACK_IMPORTED_MODULE_22__["SignUpPageComponent"]
    },
    {
        path: 'vendorRegistraion/:id',
        component: _pages_vendor_registration_vendor_registration_component__WEBPACK_IMPORTED_MODULE_27__["VendorRegistrationComponent"]
    },
    // {
    //   path: 'menuAuthorization',
    //   component: MenuAuthorizationComponent
    // },
    {
        path: 'leadCreation',
        component: _pages_lead_generation_lead_generation_component__WEBPACK_IMPORTED_MODULE_8__["LeadGenerationComponent"],
    },
    {
        path: 'session-expired',
        component: _pages_session_expired_session_expired_component__WEBPACK_IMPORTED_MODULE_31__["SessionExpiredComponent"],
    },
    {
        path: 'forgotPassword/:id',
        component: _pages_forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_33__["ForgotPasswordComponent"]
    },
    {
        path: 'forceChangePassword',
        component: _pages_force_change_password_force_change_password_component__WEBPACK_IMPORTED_MODULE_36__["ForceChangePasswordComponent"],
        canActivate: [_services_auth_guard__WEBPACK_IMPORTED_MODULE_28__["AuthGuard"]],
    },
    {
        path: 'main-layout',
        component: _pages_main_layout_main_layout_component__WEBPACK_IMPORTED_MODULE_11__["MainLayoutComponent"],
        canActivate: [_services_auth_guard__WEBPACK_IMPORTED_MODULE_28__["AuthGuard"]],
        canActivateChild: [_services_auth_guard__WEBPACK_IMPORTED_MODULE_28__["AuthGuard"]],
        children: [
            // {
            //   path: '',
            //   component: DashboardComponent,
            // },
            {
                path: 'dashboard',
                component: _pages_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_5__["DashboardComponent"],
            },
            {
                path: 'changePassword',
                component: _pages_change_password_change_password_component__WEBPACK_IMPORTED_MODULE_3__["ChangePasswordComponent"],
            },
            {
                path: 'userCreation',
                component: _pages_user_creation_user_creation_component__WEBPACK_IMPORTED_MODULE_23__["UserCreationComponent"],
            },
            {
                path: 'customerInvitation',
                component: _pages_customer_invitation_customer_invitation_component__WEBPACK_IMPORTED_MODULE_4__["CustomerInvitationComponent"],
            },
            {
                path: 'leadGeneration',
                component: _pages_lead_management_lead_management_component__WEBPACK_IMPORTED_MODULE_9__["LeadManagementComponent"],
                canActivateChild: [_services_auth_guard__WEBPACK_IMPORTED_MODULE_28__["AuthGuard"]],
                children: [
                    {
                        path: '',
                        component: _pages_lead_generation_list_lead_generation_list_component__WEBPACK_IMPORTED_MODULE_6__["LeadGenerationListComponent"]
                    },
                    {
                        path: 'view/:id',
                        component: _pages_lead_generation_view_lead_generation_view_component__WEBPACK_IMPORTED_MODULE_7__["LeadGenerationViewComponent"]
                    },
                ]
            },
            {
                path: 'vendorManagement',
                component: _pages_vendor_management_vendor_management_component__WEBPACK_IMPORTED_MODULE_24__["VendorManagementComponent"],
                canActivateChild: [_services_auth_guard__WEBPACK_IMPORTED_MODULE_28__["AuthGuard"]],
                children: [
                    {
                        path: '',
                        component: _pages_vendor_registration_list_vendor_registration_list_component__WEBPACK_IMPORTED_MODULE_25__["VendorRegistrationListComponent"]
                    },
                    {
                        path: 'view/:id',
                        component: _pages_vendor_registration_view_vendor_registration_view_component__WEBPACK_IMPORTED_MODULE_26__["VendorRegistrationViewComponent"]
                    },
                ]
            },
            {
                path: 'menuAuthorization',
                component: _pages_menu_authorization_menu_authorization_component__WEBPACK_IMPORTED_MODULE_12__["MenuAuthorizationComponent"]
            },
            {
                path: 'queryManagement',
                component: _pages_query_mangement_query_mangement_component__WEBPACK_IMPORTED_MODULE_16__["QueryMangementComponent"],
                canActivateChild: [_services_auth_guard__WEBPACK_IMPORTED_MODULE_28__["AuthGuard"]],
                children: [
                    {
                        path: '',
                        component: _pages_query_list_query_list_component__WEBPACK_IMPORTED_MODULE_15__["QueryListComponent"]
                    },
                    {
                        path: 'view/:id',
                        component: _pages_query_view_query_view_component__WEBPACK_IMPORTED_MODULE_17__["QueryViewComponent"]
                    },
                ]
            },
            {
                path: 'quotationList',
                component: _pages_quotation_list_quotation_list_component__WEBPACK_IMPORTED_MODULE_20__["QuotationListComponent"],
            },
            {
                path: 'quotationView',
                component: _pages_quotation_view_quotation_view_component__WEBPACK_IMPORTED_MODULE_21__["QuotationViewComponent"],
            },
            {
                path: 'quotationHistory',
                component: _pages_quotation_history_list_quotation_history_list_component__WEBPACK_IMPORTED_MODULE_18__["QuotationHistoryListComponent"],
            },
            {
                path: 'quotationHistoryView',
                component: _pages_quotation_history_view_quotation_history_view_component__WEBPACK_IMPORTED_MODULE_19__["QuotationHistoryViewComponent"],
            },
            {
                path: 'orderList',
                component: _pages_order_list_order_list_component__WEBPACK_IMPORTED_MODULE_13__["OrderListComponent"],
            },
            {
                path: 'orderView',
                component: _pages_order_view_order_view_component__WEBPACK_IMPORTED_MODULE_14__["OrderViewComponent"],
            },
            {
                path: 'dispatchOrderList',
                component: _pages_dispatch_order_list_dispatch_order_list_component__WEBPACK_IMPORTED_MODULE_29__["DispatchOrderListComponent"]
            },
            {
                path: 'dispatchView',
                component: _pages_dispatch_view_dispatch_view_component__WEBPACK_IMPORTED_MODULE_30__["DispatchViewComponent"]
            },
            {
                path: 'myProfile',
                component: _pages_my_profile_my_profile_component__WEBPACK_IMPORTED_MODULE_32__["MyProfileComponent"]
            },
            {
                path: 'vendorAccess',
                component: _pages_vendor_access_vendor_access_component__WEBPACK_IMPORTED_MODULE_34__["VendorAccessComponent"]
            },
            {
                path: 'vendorView',
                component: _pages_vendor_view_vendor_view_component__WEBPACK_IMPORTED_MODULE_35__["VendorViewComponent"]
            },
            {
                path: 'quotationApprovals',
                component: _pages_quotation_approval_list_quotation_approval_list_component__WEBPACK_IMPORTED_MODULE_37__["QuotationApprovalListComponent"]
            },
            {
                path: 'quotationApprovalsView',
                component: _pages_quotation_approval_view_quotation_approval_view_component__WEBPACK_IMPORTED_MODULE_38__["QuotationApprovalViewComponent"]
            },
        ]
    }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, { useHash: true })],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        providers: [_services_auth_guard__WEBPACK_IMPORTED_MODULE_28__["AuthGuard"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.loader = false;
        this.title = 'Homelane-Vendor-Portal-FE';
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], AppComponent.prototype, "loader", void 0);
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _pages_login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/login/login.component */ "./src/app/pages/login/login.component.ts");
/* harmony import */ var _pages_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/dashboard/dashboard.component */ "./src/app/pages/dashboard/dashboard.component.ts");
/* harmony import */ var _pages_main_layout_main_layout_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/main-layout/main-layout.component */ "./src/app/pages/main-layout/main-layout.component.ts");
/* harmony import */ var _pages_header_header_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/header/header.component */ "./src/app/pages/header/header.component.ts");
/* harmony import */ var _pages_side_menu_side_menu_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pages/side-menu/side-menu.component */ "./src/app/pages/side-menu/side-menu.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _pages_sign_up_page_sign_up_page_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./pages/sign-up-page/sign-up-page.component */ "./src/app/pages/sign-up-page/sign-up-page.component.ts");
/* harmony import */ var _pages_menu_authorization_menu_authorization_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./pages/menu-authorization/menu-authorization.component */ "./src/app/pages/menu-authorization/menu-authorization.component.ts");
/* harmony import */ var _pages_user_creation_user_creation_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./pages/user-creation/user-creation.component */ "./src/app/pages/user-creation/user-creation.component.ts");
/* harmony import */ var _pages_change_password_change_password_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./pages/change-password/change-password.component */ "./src/app/pages/change-password/change-password.component.ts");
/* harmony import */ var _material_material_module__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./material/material.module */ "./src/app/material/material.module.ts");
/* harmony import */ var _services_api_handler_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./services/api-handler.service */ "./src/app/services/api-handler.service.ts");
/* harmony import */ var _services_constant_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./services/constant.service */ "./src/app/services/constant.service.ts");
/* harmony import */ var _services_util_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./services/util.service */ "./src/app/services/util.service.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _pages_success_error_message_success_error_message_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./pages/success-error-message/success-error-message.component */ "./src/app/pages/success-error-message/success-error-message.component.ts");
/* harmony import */ var _pages_forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./pages/forgot-password/forgot-password.component */ "./src/app/pages/forgot-password/forgot-password.component.ts");
/* harmony import */ var _pages_customer_invitation_customer_invitation_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./pages/customer-invitation/customer-invitation.component */ "./src/app/pages/customer-invitation/customer-invitation.component.ts");
/* harmony import */ var _pages_vendor_registration_vendor_registration_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./pages/vendor-registration/vendor-registration.component */ "./src/app/pages/vendor-registration/vendor-registration.component.ts");
/* harmony import */ var _pages_dialog_box_dialog_box_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./pages/dialog-box/dialog-box.component */ "./src/app/pages/dialog-box/dialog-box.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm2015/flex-layout.js");
/* harmony import */ var _pages_lead_generation_lead_generation_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./pages/lead-generation/lead-generation.component */ "./src/app/pages/lead-generation/lead-generation.component.ts");
/* harmony import */ var _pages_lead_generation_list_lead_generation_list_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./pages/lead-generation-list/lead-generation-list.component */ "./src/app/pages/lead-generation-list/lead-generation-list.component.ts");
/* harmony import */ var _pages_lead_management_lead_management_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./pages/lead-management/lead-management.component */ "./src/app/pages/lead-management/lead-management.component.ts");
/* harmony import */ var _pages_lead_generation_view_lead_generation_view_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./pages/lead-generation-view/lead-generation-view.component */ "./src/app/pages/lead-generation-view/lead-generation-view.component.ts");
/* harmony import */ var _pages_vendor_registration_list_vendor_registration_list_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./pages/vendor-registration-list/vendor-registration-list.component */ "./src/app/pages/vendor-registration-list/vendor-registration-list.component.ts");
/* harmony import */ var _pages_vendor_registration_view_vendor_registration_view_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./pages/vendor-registration-view/vendor-registration-view.component */ "./src/app/pages/vendor-registration-view/vendor-registration-view.component.ts");
/* harmony import */ var _pages_vendor_management_vendor_management_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./pages/vendor-management/vendor-management.component */ "./src/app/pages/vendor-management/vendor-management.component.ts");
/* harmony import */ var _pages_query_mangement_query_mangement_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./pages/query-mangement/query-mangement.component */ "./src/app/pages/query-mangement/query-mangement.component.ts");
/* harmony import */ var _pages_query_list_query_list_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./pages/query-list/query-list.component */ "./src/app/pages/query-list/query-list.component.ts");
/* harmony import */ var _pages_query_view_query_view_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./pages/query-view/query-view.component */ "./src/app/pages/query-view/query-view.component.ts");
/* harmony import */ var _pages_quotation_list_quotation_list_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./pages/quotation-list/quotation-list.component */ "./src/app/pages/quotation-list/quotation-list.component.ts");
/* harmony import */ var _pages_quotation_view_quotation_view_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./pages/quotation-view/quotation-view.component */ "./src/app/pages/quotation-view/quotation-view.component.ts");
/* harmony import */ var _pages_quotation_history_list_quotation_history_list_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./pages/quotation-history-list/quotation-history-list.component */ "./src/app/pages/quotation-history-list/quotation-history-list.component.ts");
/* harmony import */ var ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ngx-bootstrap/datepicker */ "./node_modules/ngx-bootstrap/datepicker/fesm2015/ngx-bootstrap-datepicker.js");
/* harmony import */ var _pages_quotation_history_view_quotation_history_view_component__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./pages/quotation-history-view/quotation-history-view.component */ "./src/app/pages/quotation-history-view/quotation-history-view.component.ts");
/* harmony import */ var _pages_order_list_order_list_component__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./pages/order-list/order-list.component */ "./src/app/pages/order-list/order-list.component.ts");
/* harmony import */ var _pages_order_view_order_view_component__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ./pages/order-view/order-view.component */ "./src/app/pages/order-view/order-view.component.ts");
/* harmony import */ var _pages_dispatch_order_list_dispatch_order_list_component__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ./pages/dispatch-order-list/dispatch-order-list.component */ "./src/app/pages/dispatch-order-list/dispatch-order-list.component.ts");
/* harmony import */ var _pages_dispatch_view_dispatch_view_component__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ./pages/dispatch-view/dispatch-view.component */ "./src/app/pages/dispatch-view/dispatch-view.component.ts");
/* harmony import */ var _pages_session_expired_session_expired_component__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ./pages/session-expired/session-expired.component */ "./src/app/pages/session-expired/session-expired.component.ts");
/* harmony import */ var _pages_my_profile_my_profile_component__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ./pages/my-profile/my-profile.component */ "./src/app/pages/my-profile/my-profile.component.ts");
/* harmony import */ var _pages_vendor_access_vendor_access_component__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! ./pages/vendor-access/vendor-access.component */ "./src/app/pages/vendor-access/vendor-access.component.ts");
/* harmony import */ var _pages_vendor_view_vendor_view_component__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! ./pages/vendor-view/vendor-view.component */ "./src/app/pages/vendor-view/vendor-view.component.ts");
/* harmony import */ var _pages_force_change_password_force_change_password_component__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! ./pages/force-change-password/force-change-password.component */ "./src/app/pages/force-change-password/force-change-password.component.ts");
/* harmony import */ var _pages_quotation_approval_list_quotation_approval_list_component__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! ./pages/quotation-approval-list/quotation-approval-list.component */ "./src/app/pages/quotation-approval-list/quotation-approval-list.component.ts");
/* harmony import */ var _pages_quotation_approval_view_quotation_approval_view_component__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(/*! ./pages/quotation-approval-view/quotation-approval-view.component */ "./src/app/pages/quotation-approval-view/quotation-approval-view.component.ts");






















































let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
            _pages_login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"],
            _pages_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_6__["DashboardComponent"],
            _pages_main_layout_main_layout_component__WEBPACK_IMPORTED_MODULE_7__["MainLayoutComponent"],
            _pages_header_header_component__WEBPACK_IMPORTED_MODULE_8__["HeaderComponent"],
            _pages_side_menu_side_menu_component__WEBPACK_IMPORTED_MODULE_9__["SideMenuComponent"],
            _pages_sign_up_page_sign_up_page_component__WEBPACK_IMPORTED_MODULE_12__["SignUpPageComponent"],
            _pages_menu_authorization_menu_authorization_component__WEBPACK_IMPORTED_MODULE_13__["MenuAuthorizationComponent"],
            _pages_user_creation_user_creation_component__WEBPACK_IMPORTED_MODULE_14__["UserCreationComponent"],
            _pages_change_password_change_password_component__WEBPACK_IMPORTED_MODULE_15__["ChangePasswordComponent"],
            _pages_success_error_message_success_error_message_component__WEBPACK_IMPORTED_MODULE_21__["SuccessErrorMessageComponent"],
            _pages_forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_22__["ForgotPasswordComponent"],
            _pages_vendor_registration_vendor_registration_component__WEBPACK_IMPORTED_MODULE_24__["VendorRegistrationComponent"],
            _pages_customer_invitation_customer_invitation_component__WEBPACK_IMPORTED_MODULE_23__["CustomerInvitationComponent"],
            _pages_dialog_box_dialog_box_component__WEBPACK_IMPORTED_MODULE_25__["DialogBoxComponent"],
            _pages_lead_generation_lead_generation_component__WEBPACK_IMPORTED_MODULE_28__["LeadGenerationComponent"],
            _pages_lead_generation_list_lead_generation_list_component__WEBPACK_IMPORTED_MODULE_29__["LeadGenerationListComponent"],
            _pages_lead_management_lead_management_component__WEBPACK_IMPORTED_MODULE_30__["LeadManagementComponent"],
            _pages_lead_generation_view_lead_generation_view_component__WEBPACK_IMPORTED_MODULE_31__["LeadGenerationViewComponent"],
            _pages_vendor_registration_list_vendor_registration_list_component__WEBPACK_IMPORTED_MODULE_32__["VendorRegistrationListComponent"],
            _pages_vendor_registration_view_vendor_registration_view_component__WEBPACK_IMPORTED_MODULE_33__["VendorRegistrationViewComponent"],
            _pages_vendor_management_vendor_management_component__WEBPACK_IMPORTED_MODULE_34__["VendorManagementComponent"],
            _pages_query_mangement_query_mangement_component__WEBPACK_IMPORTED_MODULE_35__["QueryMangementComponent"],
            _pages_query_list_query_list_component__WEBPACK_IMPORTED_MODULE_36__["QueryListComponent"],
            _pages_query_view_query_view_component__WEBPACK_IMPORTED_MODULE_37__["QueryViewComponent"],
            _pages_quotation_list_quotation_list_component__WEBPACK_IMPORTED_MODULE_38__["QuotationListComponent"],
            _pages_quotation_view_quotation_view_component__WEBPACK_IMPORTED_MODULE_39__["QuotationViewComponent"],
            _pages_quotation_history_list_quotation_history_list_component__WEBPACK_IMPORTED_MODULE_40__["QuotationHistoryListComponent"],
            _pages_quotation_history_view_quotation_history_view_component__WEBPACK_IMPORTED_MODULE_42__["QuotationHistoryViewComponent"],
            _pages_order_list_order_list_component__WEBPACK_IMPORTED_MODULE_43__["OrderListComponent"],
            _pages_order_view_order_view_component__WEBPACK_IMPORTED_MODULE_44__["OrderViewComponent"],
            _pages_dispatch_order_list_dispatch_order_list_component__WEBPACK_IMPORTED_MODULE_45__["DispatchOrderListComponent"],
            _pages_dispatch_view_dispatch_view_component__WEBPACK_IMPORTED_MODULE_46__["DispatchViewComponent"],
            _pages_session_expired_session_expired_component__WEBPACK_IMPORTED_MODULE_47__["SessionExpiredComponent"],
            _pages_my_profile_my_profile_component__WEBPACK_IMPORTED_MODULE_48__["MyProfileComponent"],
            _pages_vendor_access_vendor_access_component__WEBPACK_IMPORTED_MODULE_49__["VendorAccessComponent"],
            _pages_vendor_view_vendor_view_component__WEBPACK_IMPORTED_MODULE_50__["VendorViewComponent"],
            _pages_force_change_password_force_change_password_component__WEBPACK_IMPORTED_MODULE_51__["ForceChangePasswordComponent"],
            _pages_quotation_approval_list_quotation_approval_list_component__WEBPACK_IMPORTED_MODULE_52__["QuotationApprovalListComponent"],
            _pages_quotation_approval_view_quotation_approval_view_component__WEBPACK_IMPORTED_MODULE_53__["QuotationApprovalViewComponent"],
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ReactiveFormsModule"].withConfig({ warnOnNgModelWithFormControl: 'never' }),
            _material_material_module__WEBPACK_IMPORTED_MODULE_16__["MaterialModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_26__["BrowserAnimationsModule"],
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_27__["FlexLayoutModule"],
            ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_41__["BsDatepickerModule"].forRoot(),
        ],
        providers: [
            _services_api_handler_service__WEBPACK_IMPORTED_MODULE_17__["ApiHandlerService"],
            _services_constant_service__WEBPACK_IMPORTED_MODULE_18__["ConstantService"],
            _services_util_service__WEBPACK_IMPORTED_MODULE_19__["UtilService"],
            _services_util_service__WEBPACK_IMPORTED_MODULE_19__["authInterceptorProviders"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_20__["AuthService"]
        ],
        entryComponents: [_pages_dialog_box_dialog_box_component__WEBPACK_IMPORTED_MODULE_25__["DialogBoxComponent"]],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/material/material.module.ts":
/*!*********************************************!*\
  !*** ./src/app/material/material.module.ts ***!
  \*********************************************/
/*! exports provided: MaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return MaterialModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/esm2015/toolbar.js");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/sidenav */ "./node_modules/@angular/material/esm2015/sidenav.js");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/menu */ "./node_modules/@angular/material/esm2015/menu.js");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/esm2015/list.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm2015/icon.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/esm2015/form-field.js");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/datepicker */ "./node_modules/@angular/material/esm2015/datepicker.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/esm2015/core.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm2015/input.js");
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/slide-toggle */ "./node_modules/@angular/material/esm2015/slide-toggle.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm2015/button.js");
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/autocomplete */ "./node_modules/@angular/material/esm2015/autocomplete.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/esm2015/select.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/esm2015/card.js");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/tooltip */ "./node_modules/@angular/material/esm2015/tooltip.js");


// import { ReactiveFormsModule, FormsModule } from '@angular/forms';
















const Material = [
    _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_2__["MatToolbarModule"],
    _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_3__["MatSidenavModule"],
    _angular_material_menu__WEBPACK_IMPORTED_MODULE_4__["MatMenuModule"],
    _angular_material_list__WEBPACK_IMPORTED_MODULE_5__["MatListModule"],
    _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIconModule"],
    _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatFormFieldModule"],
    _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_8__["MatDatepickerModule"],
    _angular_material_core__WEBPACK_IMPORTED_MODULE_9__["MatNativeDateModule"],
    _angular_material_input__WEBPACK_IMPORTED_MODULE_10__["MatInputModule"],
    _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_11__["MatSlideToggleModule"],
    _angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__["MatDialogModule"],
    _angular_material_button__WEBPACK_IMPORTED_MODULE_13__["MatButtonModule"],
    _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_14__["MatAutocompleteModule"],
    _angular_material_select__WEBPACK_IMPORTED_MODULE_15__["MatSelectModule"],
    _angular_material_card__WEBPACK_IMPORTED_MODULE_16__["MatCardModule"],
    _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_17__["MatTooltipModule"]
];
let MaterialModule = class MaterialModule {
};
MaterialModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [],
        imports: [Material],
        exports: [Material],
        schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]]
    })
], MaterialModule);



/***/ }),

/***/ "./src/app/pages/change-password/change-password.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/pages/change-password/change-password.component.css ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NoYW5nZS1wYXNzd29yZC9jaGFuZ2UtcGFzc3dvcmQuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/pages/change-password/change-password.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/pages/change-password/change-password.component.ts ***!
  \********************************************************************/
/*! exports provided: ChangePasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangePasswordComponent", function() { return ChangePasswordComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_services_api_handler_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/api-handler.service */ "./src/app/services/api-handler.service.ts");





let ChangePasswordComponent = class ChangePasswordComponent {
    constructor(router, apiHandler, http) {
        this.router = router;
        this.apiHandler = apiHandler;
        this.http = http;
        this.loginData = JSON.parse(window.localStorage.getItem('loginData'));
        // userId=JSON.parse(window.localStorage.getItem('userId'));
        this.oldpaswrdCheck = true;
        this.submitObject = {
            oldPassword: "",
            newPassword: "",
            confirmPassword: ""
        };
        this.valid = true;
        this.regexpPassword = new RegExp(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[\w~@#$%^&*+=`|{}:;!.?\"()\[\]-]{6,25}$/);
    }
    ngOnInit() {
    }
    submitResult(submitForm) {
        var ref = this;
        ref.valid = submitForm.valid;
        console.log(ref.valid);
        if (submitForm.valid) {
            var newPassword = submitForm.value.newPassword;
            var confirmPassword = submitForm.value.confirmPassword;
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
            console.log();
            var temp = {};
            temp['userId'] = ref.loginData.userId;
            temp['password'] = submitForm.value.oldPassword;
            temp['newPassword'] = submitForm.value.confirmPassword;
            console.log("temp");
            console.log(temp);
            ref.apiHandler.updatePassword(temp, function success(resp) {
                console.log(resp);
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
    ngOnDestroy() {
        // window.localStorage.clear();
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
        }
        else {
            $("#alertMsg1").modal("hide");
        }
    }
};
ChangePasswordComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: src_app_services_api_handler_service__WEBPACK_IMPORTED_MODULE_4__["ApiHandlerService"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
];
ChangePasswordComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-change-password',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./change-password.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/change-password/change-password.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./change-password.component.css */ "./src/app/pages/change-password/change-password.component.css")).default]
    })
], ChangePasswordComponent);



/***/ }),

/***/ "./src/app/pages/customer-invitation/customer-invitation.component.css":
/*!*****************************************************************************!*\
  !*** ./src/app/pages/customer-invitation/customer-invitation.component.css ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".btn-link.disabled i.text-secondary {\r\n    color: eeeeee !important;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvY3VzdG9tZXItaW52aXRhdGlvbi9jdXN0b21lci1pbnZpdGF0aW9uLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSx3QkFBd0I7QUFDNUIiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9jdXN0b21lci1pbnZpdGF0aW9uL2N1c3RvbWVyLWludml0YXRpb24uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5idG4tbGluay5kaXNhYmxlZCBpLnRleHQtc2Vjb25kYXJ5IHtcclxuICAgIGNvbG9yOiBlZWVlZWUgIWltcG9ydGFudDtcclxufSJdfQ== */");

/***/ }),

/***/ "./src/app/pages/customer-invitation/customer-invitation.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/pages/customer-invitation/customer-invitation.component.ts ***!
  \****************************************************************************/
/*! exports provided: CustomerInvitationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerInvitationComponent", function() { return CustomerInvitationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_services_api_handler_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/api-handler.service */ "./src/app/services/api-handler.service.ts");
/* harmony import */ var src_app_services_constant_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/constant.utils */ "./src/app/services/constant.utils.ts");







let CustomerInvitationComponent = class CustomerInvitationComponent {
    constructor(router, apiHandler, http) {
        this.router = router;
        this.apiHandler = apiHandler;
        this.http = http;
        this.invitationList = [];
        this.alertResponse = { message: '', status: '', route: '' };
        this.requestJson = {
            pkId: 0, name: '', vendorType: '', mobileNo: '', emailId: '',
            isActive: 'Y', isInvited: 'N'
        };
        this.vendorTypeList = [];
        this.createFlag = true;
        this.invitation_obj = {};
        this.delete_obj = {};
    }
    ngOnInit() {
        const ref = this;
        ref.createForm();
        ref.callApi();
    }
    callApi() {
        const ref = this;
        ref.apiHandler.getInvitationList((response) => {
            console.log(JSON.stringify(response));
            if (response.sts = src_app_services_constant_utils__WEBPACK_IMPORTED_MODULE_6__["Constant"].SUCCESS_STATUS) {
                ref.invitationList = response.content;
                ref.initializeDatatable();
            }
            else {
                ref.initializeDatatable();
            }
        }, (error) => {
            console.log(error);
            ref.initializeDatatable();
        });
        ref.apiHandler.getInvitationMaster((response) => {
            console.log(JSON.stringify(response));
            if (response.sts === src_app_services_constant_utils__WEBPACK_IMPORTED_MODULE_6__["Constant"].SUCCESS_STATUS) {
                ref.vendorTypeList = response.content.vendorType;
            }
        }, (error) => {
            console.log(error);
        });
    }
    initializeDatatable() {
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
    createForm() {
        const ref = this;
        ref.requestJson = {
            pkId: 0, name: '', vendorType: '', mobileNo: '', emailId: '',
            isActive: 'Y', isInvited: 'N'
        };
        ref.formData = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]),
            mobileNo: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern('^[0-9]{10}$')]),
            emailId: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]),
            id: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](0),
            vendorType: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]),
            firstName: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern('^[a-zA-Z]+$')]),
            lastName: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern('^[a-zA-Z]+$')]),
            pkId: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](0),
            isActive: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('Y'),
            isInvited: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('')
        });
        ref.formData.get('firstName').valueChanges.subscribe(value => {
            if (value) {
                ref.formData.get('firstName').patchValue(value.trim(), { emitEvent: false });
            }
            else {
                ref.formData.get('firstName').patchValue(value, { emitEvent: false });
            }
        });
        ref.formData.get('lastName').valueChanges.subscribe(value => {
            if (value) {
                ref.formData.get('lastName').patchValue(value.trim(), { emitEvent: false });
            }
            else {
                ref.formData.get('lastName').patchValue(value, { emitEvent: false });
            }
        });
        ref.formData.get('mobileNo').valueChanges.subscribe(value => {
            if (value) {
                ref.formData.get('mobileNo').patchValue(value.trim(), { emitEvent: false });
            }
            else {
                ref.formData.get('mobileNo').patchValue(value, { emitEvent: false });
            }
        });
        ref.formData.get('emailId').valueChanges.subscribe(value => {
            if (value) {
                ref.formData.get('emailId').patchValue(value.trim(), { emitEvent: false });
            }
            else {
                ref.formData.get('emailId').patchValue(value, { emitEvent: false });
            }
        });
    }
    sendMail(user) {
        const ref = this;
        ref.requestJson.pkId = user.pkId;
        ref.requestJson.name = user.name;
        ref.requestJson.vendorType = user.vendorTypeDes;
        ref.requestJson.mobileNo = user.mobileNo;
        ref.requestJson.emailId = user.emailId;
        ref.requestJson.isActive = user.isActive;
        ref.requestJson.isInvited = user.isInvited;
        ref.apiHandler.sendInvitation(user, (response) => {
            console.log(JSON.stringify(response));
            setTimeout(() => {
                $('#alertMsg').modal('show');
            }, 1000);
            if (response.sts === src_app_services_constant_utils__WEBPACK_IMPORTED_MODULE_6__["Constant"].SUCCESS_STATUS) {
                ref.alertResponse.message = src_app_services_constant_utils__WEBPACK_IMPORTED_MODULE_6__["Constant"].SUCCESS_MESSAGE;
                // ref.alertResponse.route='customerInvitation';
            }
            else {
                ref.alertResponse.message = response.msg;
            }
            ref.alertResponse.status = response.sts;
        }, (error) => {
            setTimeout(() => {
                $('#alertMsg').modal('show');
            }, 1000);
            ref.alertResponse.message = src_app_services_constant_utils__WEBPACK_IMPORTED_MODULE_6__["Constant"].ERROR_MESSAGE;
            ref.alertResponse.status = src_app_services_constant_utils__WEBPACK_IMPORTED_MODULE_6__["Constant"].ERROR_STATUS;
            ref.alertResponse.route = '';
            console.log(error);
        });
    }
    onCreate() {
        const ref = this;
        ref.createForm();
        ref.createFlag = true;
        setTimeout(() => {
            $('#createOrUpdateUserInvitation').modal('show');
        }, 500);
    }
    onEdit(user) {
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
        const tempObject = ref.formData.value;
        console.log('requestJson=> ' + JSON.stringify(tempObject));
        ref.apiHandler.saveVendorInvitation(tempObject, (response) => {
            console.log(JSON.stringify(response));
            setTimeout(() => {
                $('#createOrUpdateUserInvitation').modal('hide');
                $('#alertMsg').modal('show');
            }, 1000);
            if (response.sts === src_app_services_constant_utils__WEBPACK_IMPORTED_MODULE_6__["Constant"].SUCCESS_STATUS) {
                ref.alertResponse.message = src_app_services_constant_utils__WEBPACK_IMPORTED_MODULE_6__["Constant"].SUCCESS_MESSAGE;
                // ref.alertResponse.route='main-layout/customerInvitation';
            }
            else {
                ref.alertResponse.message = response.msg;
            }
            ref.alertResponse.status = response.sts;
        }, (error) => {
            setTimeout(() => {
                $('#alertMsg').modal('show');
            }, 1000);
            ref.alertResponse.message = src_app_services_constant_utils__WEBPACK_IMPORTED_MODULE_6__["Constant"].ERROR_MESSAGE;
            ref.alertResponse.status = src_app_services_constant_utils__WEBPACK_IMPORTED_MODULE_6__["Constant"].ERROR_STATUS;
            ref.alertResponse.route = '';
            console.log(error);
        });
    }
    open_invitation_popup(user) {
        var ref = this;
        ref.invitation_obj = user;
        console.log("call open");
        console.log(ref.invitation_obj);
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
        ref.apiHandler.sendInvitation(ref.invitation_obj, (response) => {
            console.log(JSON.stringify(response));
            // setTimeout(() => {
            //   $('#alertMsg').modal('show');
            // }, 1000);
            if (response.sts === src_app_services_constant_utils__WEBPACK_IMPORTED_MODULE_6__["Constant"].SUCCESS_STATUS) {
                $('#alertInvitation').modal('hide');
                ref.alertResponse.message = src_app_services_constant_utils__WEBPACK_IMPORTED_MODULE_6__["Constant"].SUCCESS_MESSAGE;
                // ref.alertResponse.route='customerInvitation';
            }
            else {
                $('#alertInvitation').modal('hide');
                ref.alertResponse.message = response.msg;
                setTimeout(() => {
                    $('#alertMsg').modal('show');
                }, 1000);
            }
            ref.alertResponse.status = response.sts;
        }, (error) => {
            $('#alertInvitation').modal('hide');
            // setTimeout(() => {
            //   $('#alertMsg').modal('show');
            // }, 1000);
            ref.alertResponse.message = src_app_services_constant_utils__WEBPACK_IMPORTED_MODULE_6__["Constant"].ERROR_MESSAGE;
            ref.alertResponse.status = src_app_services_constant_utils__WEBPACK_IMPORTED_MODULE_6__["Constant"].ERROR_STATUS;
            ref.alertResponse.route = '';
            console.log(error);
        });
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
    onDeleteNo() {
        var ref = this;
        ref.delete_obj = {};
        console.log(ref.delete_obj);
        $('#alertDelete').modal('hide');
    }
    onDeleteYes() {
        var ref = this;
        ref.delete_obj.isActive = 'N';
        console.log(ref.delete_obj);
        $('#alertDelete').modal('hide');
        ref.apiHandler.saveVendorInvitation(ref.delete_obj, (response) => {
            console.log(JSON.stringify(response));
            setTimeout(() => {
                $('#alertMsg').modal('show');
            }, 1000);
            if (response.sts === src_app_services_constant_utils__WEBPACK_IMPORTED_MODULE_6__["Constant"].SUCCESS_STATUS) {
                ref.alertResponse.message = src_app_services_constant_utils__WEBPACK_IMPORTED_MODULE_6__["Constant"].SUCCESS_MESSAGE;
                // ref.alertResponse.route='main-layout/customerInvitation';
            }
            else {
                ref.alertResponse.message = response.msg;
            }
            ref.alertResponse.status = response.sts;
        }, (error) => {
            setTimeout(() => {
                $('#alertMsg').modal('show');
            }, 1000);
            ref.alertResponse.message = src_app_services_constant_utils__WEBPACK_IMPORTED_MODULE_6__["Constant"].ERROR_MESSAGE;
            ref.alertResponse.status = src_app_services_constant_utils__WEBPACK_IMPORTED_MODULE_6__["Constant"].ERROR_STATUS;
            // ref.alertResponse.route = '';
            console.log(error);
        });
    }
};
CustomerInvitationComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: src_app_services_api_handler_service__WEBPACK_IMPORTED_MODULE_5__["ApiHandlerService"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
];
CustomerInvitationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-customer-invitation',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./customer-invitation.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/customer-invitation/customer-invitation.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./customer-invitation.component.css */ "./src/app/pages/customer-invitation/customer-invitation.component.css")).default]
    })
], CustomerInvitationComponent);



/***/ }),

/***/ "./src/app/pages/dashboard/dashboard.component.css":
/*!*********************************************************!*\
  !*** ./src/app/pages/dashboard/dashboard.component.css ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".heading-text {\r\n    font-size: 1.5rem !important;\r\n    white-space: nowrap;\r\n    letter-spacing: 2px;\r\n    margin-bottom: 0.5rem;\r\n    font-family: \"Montserrat\", Georgia, \"Times New Roman\", Times, serif;\r\n    font-weight: 600;\r\n    line-height: 1.2;\r\n    color: #0d1a32;\r\n}\r\n.sub-heading {\r\n    white-space: nowrap;\r\n    margin-bottom: 0rem !important;\r\n    color: #838589;\r\n}\r\n.dashboard-bg {\r\n    position: relative;\r\n    background-image: url('dashboard-bg.jpg');\r\n    background-position: bottom;\r\n    background-repeat: no-repeat;\r\n    }\r\n.dashboard-title {\r\n    /* font-size: 2.2rem; */\r\n    font-size: 2rem;\r\n    font-weight: 600;\r\n    color: #282727;\r\n    margin-bottom: 0;\r\n    }\r\n.dashboard-title1 {\r\n    /* font-size: 3rem; */\r\n    font-size: 2rem;\r\n    font-weight: 600;\r\n    color: #fb343c;\r\n    }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksNEJBQTRCO0lBQzVCLG1CQUFtQjtJQUNuQixtQkFBbUI7SUFDbkIscUJBQXFCO0lBQ3JCLG1FQUFtRTtJQUNuRSxnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLGNBQWM7QUFDbEI7QUFDQTtJQUNJLG1CQUFtQjtJQUNuQiw4QkFBOEI7SUFDOUIsY0FBYztBQUNsQjtBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLHlDQUEyRDtJQUMzRCwyQkFBMkI7SUFDM0IsNEJBQTRCO0lBQzVCO0FBQ0E7SUFDQSx1QkFBdUI7SUFDdkIsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixjQUFjO0lBQ2QsZ0JBQWdCO0lBQ2hCO0FBQ0E7SUFDQSxxQkFBcUI7SUFDckIsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixjQUFjO0lBQ2QiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9kYXNoYm9hcmQvZGFzaGJvYXJkLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGVhZGluZy10ZXh0IHtcclxuICAgIGZvbnQtc2l6ZTogMS41cmVtICFpbXBvcnRhbnQ7XHJcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDJweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcclxuICAgIGZvbnQtZmFtaWx5OiBcIk1vbnRzZXJyYXRcIiwgR2VvcmdpYSwgXCJUaW1lcyBOZXcgUm9tYW5cIiwgVGltZXMsIHNlcmlmO1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjI7XHJcbiAgICBjb2xvcjogIzBkMWEzMjtcclxufVxyXG4uc3ViLWhlYWRpbmcge1xyXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgIG1hcmdpbi1ib3R0b206IDByZW0gIWltcG9ydGFudDtcclxuICAgIGNvbG9yOiAjODM4NTg5O1xyXG59XHJcbi5kYXNoYm9hcmQtYmcge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uLy4uLy4uL2Fzc2V0cy9pbWcvZGFzaGJvYXJkLWJnLmpwZyk7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBib3R0b207XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgfVxyXG4gICAgLmRhc2hib2FyZC10aXRsZSB7XHJcbiAgICAvKiBmb250LXNpemU6IDIuMnJlbTsgKi9cclxuICAgIGZvbnQtc2l6ZTogMnJlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBjb2xvcjogIzI4MjcyNztcclxuICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgICB9XHJcbiAgICAuZGFzaGJvYXJkLXRpdGxlMSB7XHJcbiAgICAvKiBmb250LXNpemU6IDNyZW07ICovXHJcbiAgICBmb250LXNpemU6IDJyZW07XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgY29sb3I6ICNmYjM0M2M7XHJcbiAgICB9Il19 */");

/***/ }),

/***/ "./src/app/pages/dashboard/dashboard.component.ts":
/*!********************************************************!*\
  !*** ./src/app/pages/dashboard/dashboard.component.ts ***!
  \********************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_constant_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/constant.service */ "./src/app/services/constant.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_services_api_handler_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/api-handler.service */ "./src/app/services/api-handler.service.ts");






let DashboardComponent = class DashboardComponent {
    constructor(constantService, router, apiHandler, http) {
        this.constantService = constantService;
        this.router = router;
        this.apiHandler = apiHandler;
        this.http = http;
        this.loginDetails = JSON.parse(window.localStorage.getItem('loginData'));
        this.roleV = "";
        this.roleA = "";
        this.roleF = "";
        this.viewObject = {};
    }
    ngOnInit() {
        var ref = this;
        if (ref.loginDetails.roleId == "V") {
            ref.roleV = ref.constantService.rolesManagement.vendorRole;
        }
        if (ref.loginDetails.roleId == "A") {
            ref.roleA = ref.constantService.rolesManagement.adminRole;
        }
        if (ref.loginDetails.roleId == "F") {
            ref.roleF = ref.constantService.rolesManagement.financeRole;
        }
        console.log(ref.loginDetails.roleId);
        console.log(ref.constantService.rolesManagement.vendorRole);
        console.log(ref.constantService.rolesManagement.adminRole);
        var temp = ref.loginDetails.roleId;
        ref.apiHandler.viewDashboard(temp, (response) => {
            console.log(JSON.stringify(response));
            if (response.sts.toLowerCase() === "success") {
                ref.viewObject = response.content;
                // ref.callAlert("success", "Successfully submitted", "not");
            }
            else {
                ref.callAlert("error", "Failed", "not");
            }
        }, (error) => {
            ref.callAlert("error", "Failed", "not");
            console.log(error);
        });
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
                // ref.router.navigate(['main-layout/quotationList']);
                $("#alertMsg").modal("hide");
            }
            $("#alertMsg").modal("hide");
        }
        else {
            $("#alertMsg").modal("hide");
        }
    }
};
DashboardComponent.ctorParameters = () => [
    { type: src_app_services_constant_service__WEBPACK_IMPORTED_MODULE_2__["ConstantService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: src_app_services_api_handler_service__WEBPACK_IMPORTED_MODULE_5__["ApiHandlerService"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
];
DashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-dashboard',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./dashboard.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/dashboard/dashboard.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./dashboard.component.css */ "./src/app/pages/dashboard/dashboard.component.css")).default]
    })
], DashboardComponent);



/***/ }),

/***/ "./src/app/pages/dialog-box/dialog-box.component.css":
/*!***********************************************************!*\
  !*** ./src/app/pages/dialog-box/dialog-box.component.css ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/* .title-center {\r\n    margin: 0 auto;\r\n  } */\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZGlhbG9nLWJveC9kaWFsb2ctYm94LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0tBRUsiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9kaWFsb2ctYm94L2RpYWxvZy1ib3guY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIC50aXRsZS1jZW50ZXIge1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgfSAqLyJdfQ== */");

/***/ }),

/***/ "./src/app/pages/dialog-box/dialog-box.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/pages/dialog-box/dialog-box.component.ts ***!
  \**********************************************************/
/*! exports provided: DialogBoxComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogBoxComponent", function() { return DialogBoxComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");



let DialogBoxComponent = class DialogBoxComponent {
    constructor(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    ngOnInit() {
    }
    onConfirm(value) {
        const ref = this;
        ref.dialogRef.close(value);
    }
};
DialogBoxComponent.ctorParameters = () => [
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"],] }] }
];
DialogBoxComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-dialog-box',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./dialog-box.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/dialog-box/dialog-box.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./dialog-box.component.css */ "./src/app/pages/dialog-box/dialog-box.component.css")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]))
], DialogBoxComponent);



/***/ }),

/***/ "./src/app/pages/dispatch-order-list/dispatch-order-list.component.css":
/*!*****************************************************************************!*\
  !*** ./src/app/pages/dispatch-order-list/dispatch-order-list.component.css ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2Rpc3BhdGNoLW9yZGVyLWxpc3QvZGlzcGF0Y2gtb3JkZXItbGlzdC5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/pages/dispatch-order-list/dispatch-order-list.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/pages/dispatch-order-list/dispatch-order-list.component.ts ***!
  \****************************************************************************/
/*! exports provided: DispatchOrderListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DispatchOrderListComponent", function() { return DispatchOrderListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_services_api_handler_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/api-handler.service */ "./src/app/services/api-handler.service.ts");
/* harmony import */ var src_app_services_constant_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/constant.utils */ "./src/app/services/constant.utils.ts");





let DispatchOrderListComponent = class DispatchOrderListComponent {
    constructor(router, apiHandler) {
        this.router = router;
        this.apiHandler = apiHandler;
        this.dispatchOrderList = [];
    }
    ngOnInit() {
        var ref = this;
        ref.apiHandler.orderDispachList((response) => {
            console.log(JSON.stringify(response));
            if (response.sts.toLowerCase() === src_app_services_constant_utils__WEBPACK_IMPORTED_MODULE_4__["Constant"].SUCCESS_STATUS) {
                ref.dispatchOrderList = response.content;
                ref.initializeDatatable();
                console.log(ref.dispatchOrderList);
            }
            else {
                ref.initializeDatatable();
            }
        }, (error) => {
            console.log(error);
            ref.initializeDatatable();
        });
    }
    view(item) {
        var ref = this;
        window.localStorage.setItem("dispatchData", JSON.stringify(item));
        ref.router.navigate(['main-layout/dispatchView']);
    }
    initializeDatatable() {
        $('#dispatchlist').dataTable().fnDestroy();
        setTimeout(() => {
            $('#dispatchlist').DataTable({
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
};
DispatchOrderListComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: src_app_services_api_handler_service__WEBPACK_IMPORTED_MODULE_3__["ApiHandlerService"] }
];
DispatchOrderListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-dispatch-order-list',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./dispatch-order-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/dispatch-order-list/dispatch-order-list.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./dispatch-order-list.component.css */ "./src/app/pages/dispatch-order-list/dispatch-order-list.component.css")).default]
    })
], DispatchOrderListComponent);



/***/ }),

/***/ "./src/app/pages/dispatch-view/dispatch-view.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/pages/dispatch-view/dispatch-view.component.css ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2Rpc3BhdGNoLXZpZXcvZGlzcGF0Y2gtdmlldy5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/pages/dispatch-view/dispatch-view.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/pages/dispatch-view/dispatch-view.component.ts ***!
  \****************************************************************/
/*! exports provided: DispatchViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DispatchViewComponent", function() { return DispatchViewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var src_app_services_api_handler_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/api-handler.service */ "./src/app/services/api-handler.service.ts");
/* harmony import */ var src_app_services_constant_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/constant.utils */ "./src/app/services/constant.utils.ts");
/* harmony import */ var src_app_services_util_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/util.service */ "./src/app/services/util.service.ts");







let DispatchViewComponent = class DispatchViewComponent {
    constructor(router, apiHandler, location, utilService) {
        this.router = router;
        this.apiHandler = apiHandler;
        this.location = location;
        this.utilService = utilService;
        this.dispatchData = JSON.parse(window.localStorage.getItem("dispatchData"));
        this.dispatchView = [];
    }
    ngOnInit() {
        var ref = this;
        var temp = [ref.dispatchData.pkDispatchId, ref.dispatchData.pono];
        ref.apiHandler.viewDispatch(temp, (response) => {
            console.log(JSON.stringify(response));
            if (response.sts.toLowerCase() === src_app_services_constant_utils__WEBPACK_IMPORTED_MODULE_5__["Constant"].SUCCESS_STATUS) {
                ref.dispatchView = response.content;
                ref.initializeDatatable();
                console.log(ref.dispatchView);
            }
            else {
                ref.initializeDatatable();
            }
        }, (error) => {
            ref.initializeDatatable();
            console.log(error);
        });
    }
    back() {
        var ref = this;
        ref.location.back();
    }
    initializeDatatable() {
        $('#dispatchlistView').dataTable().fnDestroy();
        setTimeout(() => {
            $('#dispatchlistView').DataTable({
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
};
DispatchViewComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: src_app_services_api_handler_service__WEBPACK_IMPORTED_MODULE_4__["ApiHandlerService"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"] },
    { type: src_app_services_util_service__WEBPACK_IMPORTED_MODULE_6__["UtilService"] }
];
DispatchViewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-dispatch-view',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./dispatch-view.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/dispatch-view/dispatch-view.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./dispatch-view.component.css */ "./src/app/pages/dispatch-view/dispatch-view.component.css")).default]
    })
], DispatchViewComponent);



/***/ }),

/***/ "./src/app/pages/force-change-password/force-change-password.component.css":
/*!*********************************************************************************!*\
  !*** ./src/app/pages/force-change-password/force-change-password.component.css ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".setpassword-bg {\r\n    font-family:\"Open Sans\", sans-serif;\r\n      font-size: .9rem;\r\n      font-weight: 400;\r\n      line-height: 1.5;\r\n      color:#222222;\r\n      background-color: #ffffff;\r\nbackground-image: url('bg-set-password.jpg');\r\nbackground-attachment: fixed;\r\nbackground-size: cover;\r\nmargin-top: -4rem !important;\r\n\r\n  }\r\n  .bg-light {\r\n    background-color: #0f0f0f !important;\r\n    font-family:\"Open Sans\", sans-serif !important;\r\n  }\r\n  .bg-panel-setpassword {\r\n    background-color: #f8f9ff;\r\n  }\r\n  .setpassword-title {\r\n    font-family: \"Open Sans\", sans-serif !important;\r\n    font-weight: 500;\r\n    color: #3420aa;\r\n    font-size: 2.1rem;\r\n    text-shadow: 0px 6px 5px rgb(225 225 225);\r\n  }\r\n  .setpassword-title-2 {\r\n    font-family: \"Open Sans\", sans-serif !important;\r\n    font-weight: 500;\r\n    color: #589304;\r\n    font-size: 1rem;\r\n    text-shadow: 0px 4px 9px rgb(225 225 225);\r\n  }\r\n  .text-powered {\r\n    font-family: \"Open Sans\", sans-serif;\r\n    font-style: italic;\r\n    font-weight: 700;\r\n    font-size: .9rem;\r\n    line-height: 16px;\r\n    color: #8d7500;\r\n  }\r\n  .card {\r\n    box-shadow: none;\r\n    border-radius: 0px;\r\n  }\r\n  .errormsg{\r\n    font-size: 13px;\r\n    color:red;\r\n    font-weight: 500;\r\n  }\r\n  .text-danger {\r\n      color: #D90000 !important;\r\n  }\r\n  /* .setpassword-page {\r\n  background: linear-gradient(0deg, #ffffff 1.68%, #f8f8f8 100%);\r\n} */\r\n  .setpassword-page .form-control {\r\n  color: #020514;\r\n  height: calc(2em + .75rem + 2px);\r\n  line-height: 1.5;\r\n  background:#ffffff;\r\n  font-size: 0.95rem;\r\n  font-weight: 500;\r\n  border:0;\r\n  border-bottom:1px solid #f1f1f2;\r\n  border-radius: 0;\r\n  padding-left: 0;\r\n}\r\n  .setpassword-page .input-group .form-control:active, .setpassword-page .input-group .form-control:focus, .setpassword-page .input-group .form-control:hover {\r\n  color: #020514;\r\n  line-height: 1.5;\r\n  background:#ffffff;\r\n  border:0;\r\n  border-bottom:1px solid #f1f1f2;\r\n  border-radius: 0;\r\n}\r\n  .setpassword-page .input-group-addon {\r\n  padding: .5rem .75rem;\r\n  font-weight: 400;\r\n  line-height: 1.5;\r\n  color: #5277f7;\r\n  text-align: center;\r\n  background-color: #ffffff;\r\n  border:0;\r\n  border-bottom:1px solid #f1f1f2;\r\n  border-radius: 0;\r\n}\r\n  .setpassword-page .input-group-text {\r\n  padding: .75rem 1rem;\r\n  color: #5277f7;\r\n  background-color:#ffffff;\r\n  border:0;\r\n/* border-right: 4px solid #fff; */\r\n  border-radius: 0;\r\n  border-bottom:1px solid #f1f1f2;\r\n}\r\n  .setpassword-page .btn {\r\n  font-weight: 600;\r\n  box-shadow: 0px 8px 16px rgb(221 221 221 / 81%);\r\n}\r\n  .btn-setpassword {\r\n  color: #fff;\r\n  background: linear-gradient(0deg, #388ce4 1.68%, #27a1dd 100%);\r\n  border-color: #5277f7;\r\n}\r\n  .btn-setpassword:hover {\r\n  color: #fff;\r\n  background: linear-gradient(0deg, #27a1dd 1.68%, #388ce4 100%);\r\n  border-color: #5277f7;\r\n}\r\n  .btn-setpassword:not(:disabled):not(.disabled).active, .btn-setpassword:not(:disabled):not(.disabled):active, .show>.btn-setpassword.dropdown-toggle {\r\n  color: #fff;\r\n  background: linear-gradient(0deg, #27a1dd 1.68%, #388ce4 100%);\r\n  border-color: #5277f7;\r\n}\r\n  .forgot-password {\r\n  font-family: Open Sans;\r\n  font-style: normal;\r\n  font-weight: bold;\r\n  font-size: 12px;\r\n  line-height: 36px;\r\n  -webkit-text-decoration-line: underline;\r\n          text-decoration-line: underline;\r\n  color: #464646;\r\n}\r\n  .forgot-password:hover {\r\n  -webkit-text-decoration-line: none;\r\n          text-decoration-line: none;\r\n  color: #464646;\r\n}\r\n  /**Sign Up****************************************************************/\r\n  input:-webkit-autofill,\r\n  input:-webkit-autofill:hover,\r\n  input:-webkit-autofill:focus,\r\n  input:-webkit-autofill:active {\r\n      transition: background-color 5000s ease-in-out 0s;\r\n      color: rgb(255, 255, 255) !important;\r\n  }\r\n  input:-webkit-autofill, textarea:-webkit-autofill, select:-webkit-autofill {\r\n      background-color: transparent !important;\r\n      background-image: none !important;\r\n      color: rgb(255, 255, 255) !important;\r\n  }\r\n  textarea:focus,\r\n  input[type=\"text\"]:focus,\r\n  input[type=\"password\"]:focus,\r\n  input[type=\"datetime\"]:focus,\r\n  input[type=\"datetime-local\"]:focus,\r\n  input[type=\"date\"]:focus,\r\n  input[type=\"month\"]:focus,\r\n  input[type=\"time\"]:focus,\r\n  input[type=\"week\"]:focus,\r\n  input[type=\"number\"]:focus,\r\n  input[type=\"email\"]:focus,\r\n  input[type=\"url\"]:focus,\r\n  input[type=\"search\"]:focus,\r\n  input[type=\"tel\"]:focus,\r\n  input[type=\"color\"]:focus,\r\n  .uneditable-input:focus {\r\n    box-shadow: 0 0px 2px rgba(255, 255, 255, 0.075) inset, 0 0 2px rgba(255, 255, 255, 0.6);\r\n    outline: 0 none;\r\n  }\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZm9yY2UtY2hhbmdlLXBhc3N3b3JkL2ZvcmNlLWNoYW5nZS1wYXNzd29yZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksbUNBQW1DO01BQ2pDLGdCQUFnQjtNQUNoQixnQkFBZ0I7TUFDaEIsZ0JBQWdCO01BQ2hCLGFBQWE7TUFDYix5QkFBeUI7QUFDL0IsNENBQWdFO0FBQ2hFLDRCQUE0QjtBQUM1QixzQkFBc0I7QUFDdEIsNEJBQTRCOztFQUUxQjtFQUNBO0lBQ0Usb0NBQW9DO0lBQ3BDLDhDQUE4QztFQUNoRDtFQUNBO0lBQ0UseUJBQXlCO0VBQzNCO0VBQ0E7SUFDRSwrQ0FBK0M7SUFDL0MsZ0JBQWdCO0lBQ2hCLGNBQWM7SUFDZCxpQkFBaUI7SUFDakIseUNBQXlDO0VBQzNDO0VBQ0E7SUFDRSwrQ0FBK0M7SUFDL0MsZ0JBQWdCO0lBQ2hCLGNBQWM7SUFDZCxlQUFlO0lBQ2YseUNBQXlDO0VBQzNDO0VBQ0E7SUFDRSxvQ0FBb0M7SUFDcEMsa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLGNBQWM7RUFDaEI7RUFDQTtJQUNFLGdCQUFnQjtJQUNoQixrQkFBa0I7RUFDcEI7RUFDQTtJQUNFLGVBQWU7SUFDZixTQUFTO0lBQ1QsZ0JBQWdCO0VBQ2xCO0VBQ0E7TUFDSSx5QkFBeUI7RUFDN0I7RUFFRjs7R0FFRztFQUNIO0VBQ0UsY0FBYztFQUNkLGdDQUFnQztFQUNoQyxnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsUUFBUTtFQUNSLCtCQUErQjtFQUMvQixnQkFBZ0I7RUFDaEIsZUFBZTtBQUNqQjtFQUNBO0VBQ0UsY0FBYztFQUNkLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLCtCQUErQjtFQUMvQixnQkFBZ0I7QUFDbEI7RUFDQTtFQUNFLHFCQUFxQjtFQUNyQixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIseUJBQXlCO0VBQ3pCLFFBQVE7RUFDUiwrQkFBK0I7RUFDL0IsZ0JBQWdCO0FBQ2xCO0VBQ0E7RUFDRSxvQkFBb0I7RUFDcEIsY0FBYztFQUNkLHdCQUF3QjtFQUN4QixRQUFRO0FBQ1Ysa0NBQWtDO0VBQ2hDLGdCQUFnQjtFQUNoQiwrQkFBK0I7QUFDakM7RUFDQTtFQUNFLGdCQUFnQjtFQUNoQiwrQ0FBK0M7QUFDakQ7RUFDQTtFQUNFLFdBQVc7RUFDWCw4REFBOEQ7RUFDOUQscUJBQXFCO0FBQ3ZCO0VBQ0E7RUFDRSxXQUFXO0VBQ1gsOERBQThEO0VBQzlELHFCQUFxQjtBQUN2QjtFQUNBO0VBQ0UsV0FBVztFQUNYLDhEQUE4RDtFQUM5RCxxQkFBcUI7QUFDdkI7RUFDQTtFQUNFLHNCQUFzQjtFQUN0QixrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsdUNBQStCO1VBQS9CLCtCQUErQjtFQUMvQixjQUFjO0FBQ2hCO0VBQ0E7RUFDRSxrQ0FBMEI7VUFBMUIsMEJBQTBCO0VBQzFCLGNBQWM7QUFDaEI7RUFDRSwwRUFBMEU7RUFDMUU7Ozs7TUFJSSxpREFBaUQ7TUFDakQsb0NBQW9DO0VBQ3hDO0VBQ0E7TUFDSSx3Q0FBd0M7TUFDeEMsaUNBQWlDO01BQ2pDLG9DQUFvQztFQUN4QztFQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0lBZ0JFLHdGQUF3RjtJQUN4RixlQUFlO0VBQ2pCIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvZm9yY2UtY2hhbmdlLXBhc3N3b3JkL2ZvcmNlLWNoYW5nZS1wYXNzd29yZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNldHBhc3N3b3JkLWJnIHtcclxuICAgIGZvbnQtZmFtaWx5OlwiT3BlbiBTYW5zXCIsIHNhbnMtc2VyaWY7XHJcbiAgICAgIGZvbnQtc2l6ZTogLjlyZW07XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICAgIGxpbmUtaGVpZ2h0OiAxLjU7XHJcbiAgICAgIGNvbG9yOiMyMjIyMjI7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XHJcbmJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy9pbWcvYmctc2V0LXBhc3N3b3JkLmpwZ1wiKTtcclxuYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcclxuYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxubWFyZ2luLXRvcDogLTRyZW0gIWltcG9ydGFudDtcclxuXHJcbiAgfVxyXG4gIC5iZy1saWdodCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMGYwZjBmICFpbXBvcnRhbnQ7XHJcbiAgICBmb250LWZhbWlseTpcIk9wZW4gU2Fuc1wiLCBzYW5zLXNlcmlmICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIC5iZy1wYW5lbC1zZXRwYXNzd29yZCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjhmOWZmO1xyXG4gIH1cclxuICAuc2V0cGFzc3dvcmQtdGl0bGUge1xyXG4gICAgZm9udC1mYW1pbHk6IFwiT3BlbiBTYW5zXCIsIHNhbnMtc2VyaWYgIWltcG9ydGFudDtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICBjb2xvcjogIzM0MjBhYTtcclxuICAgIGZvbnQtc2l6ZTogMi4xcmVtO1xyXG4gICAgdGV4dC1zaGFkb3c6IDBweCA2cHggNXB4IHJnYigyMjUgMjI1IDIyNSk7XHJcbiAgfVxyXG4gIC5zZXRwYXNzd29yZC10aXRsZS0yIHtcclxuICAgIGZvbnQtZmFtaWx5OiBcIk9wZW4gU2Fuc1wiLCBzYW5zLXNlcmlmICFpbXBvcnRhbnQ7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgY29sb3I6ICM1ODkzMDQ7XHJcbiAgICBmb250LXNpemU6IDFyZW07XHJcbiAgICB0ZXh0LXNoYWRvdzogMHB4IDRweCA5cHggcmdiKDIyNSAyMjUgMjI1KTtcclxuICB9XHJcbiAgLnRleHQtcG93ZXJlZCB7XHJcbiAgICBmb250LWZhbWlseTogXCJPcGVuIFNhbnNcIiwgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICBmb250LXNpemU6IC45cmVtO1xyXG4gICAgbGluZS1oZWlnaHQ6IDE2cHg7XHJcbiAgICBjb2xvcjogIzhkNzUwMDtcclxuICB9XHJcbiAgLmNhcmQge1xyXG4gICAgYm94LXNoYWRvdzogbm9uZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDBweDtcclxuICB9XHJcbiAgLmVycm9ybXNne1xyXG4gICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgY29sb3I6cmVkO1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICB9XHJcbiAgLnRleHQtZGFuZ2VyIHtcclxuICAgICAgY29sb3I6ICNEOTAwMDAgIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4vKiAuc2V0cGFzc3dvcmQtcGFnZSB7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDBkZWcsICNmZmZmZmYgMS42OCUsICNmOGY4ZjggMTAwJSk7XHJcbn0gKi9cclxuLnNldHBhc3N3b3JkLXBhZ2UgLmZvcm0tY29udHJvbCB7XHJcbiAgY29sb3I6ICMwMjA1MTQ7XHJcbiAgaGVpZ2h0OiBjYWxjKDJlbSArIC43NXJlbSArIDJweCk7XHJcbiAgbGluZS1oZWlnaHQ6IDEuNTtcclxuICBiYWNrZ3JvdW5kOiNmZmZmZmY7XHJcbiAgZm9udC1zaXplOiAwLjk1cmVtO1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgYm9yZGVyOjA7XHJcbiAgYm9yZGVyLWJvdHRvbToxcHggc29saWQgI2YxZjFmMjtcclxuICBib3JkZXItcmFkaXVzOiAwO1xyXG4gIHBhZGRpbmctbGVmdDogMDtcclxufVxyXG4uc2V0cGFzc3dvcmQtcGFnZSAuaW5wdXQtZ3JvdXAgLmZvcm0tY29udHJvbDphY3RpdmUsIC5zZXRwYXNzd29yZC1wYWdlIC5pbnB1dC1ncm91cCAuZm9ybS1jb250cm9sOmZvY3VzLCAuc2V0cGFzc3dvcmQtcGFnZSAuaW5wdXQtZ3JvdXAgLmZvcm0tY29udHJvbDpob3ZlciB7XHJcbiAgY29sb3I6ICMwMjA1MTQ7XHJcbiAgbGluZS1oZWlnaHQ6IDEuNTtcclxuICBiYWNrZ3JvdW5kOiNmZmZmZmY7XHJcbiAgYm9yZGVyOjA7XHJcbiAgYm9yZGVyLWJvdHRvbToxcHggc29saWQgI2YxZjFmMjtcclxuICBib3JkZXItcmFkaXVzOiAwO1xyXG59XHJcbi5zZXRwYXNzd29yZC1wYWdlIC5pbnB1dC1ncm91cC1hZGRvbiB7XHJcbiAgcGFkZGluZzogLjVyZW0gLjc1cmVtO1xyXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgbGluZS1oZWlnaHQ6IDEuNTtcclxuICBjb2xvcjogIzUyNzdmNztcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcclxuICBib3JkZXI6MDtcclxuICBib3JkZXItYm90dG9tOjFweCBzb2xpZCAjZjFmMWYyO1xyXG4gIGJvcmRlci1yYWRpdXM6IDA7XHJcbn1cclxuLnNldHBhc3N3b3JkLXBhZ2UgLmlucHV0LWdyb3VwLXRleHQge1xyXG4gIHBhZGRpbmc6IC43NXJlbSAxcmVtO1xyXG4gIGNvbG9yOiAjNTI3N2Y3O1xyXG4gIGJhY2tncm91bmQtY29sb3I6I2ZmZmZmZjtcclxuICBib3JkZXI6MDtcclxuLyogYm9yZGVyLXJpZ2h0OiA0cHggc29saWQgI2ZmZjsgKi9cclxuICBib3JkZXItcmFkaXVzOiAwO1xyXG4gIGJvcmRlci1ib3R0b206MXB4IHNvbGlkICNmMWYxZjI7XHJcbn1cclxuLnNldHBhc3N3b3JkLXBhZ2UgLmJ0biB7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICBib3gtc2hhZG93OiAwcHggOHB4IDE2cHggcmdiKDIyMSAyMjEgMjIxIC8gODElKTtcclxufVxyXG4uYnRuLXNldHBhc3N3b3JkIHtcclxuICBjb2xvcjogI2ZmZjtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMGRlZywgIzM4OGNlNCAxLjY4JSwgIzI3YTFkZCAxMDAlKTtcclxuICBib3JkZXItY29sb3I6ICM1Mjc3Zjc7XHJcbn1cclxuLmJ0bi1zZXRwYXNzd29yZDpob3ZlciB7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDBkZWcsICMyN2ExZGQgMS42OCUsICMzODhjZTQgMTAwJSk7XHJcbiAgYm9yZGVyLWNvbG9yOiAjNTI3N2Y3O1xyXG59XHJcbi5idG4tc2V0cGFzc3dvcmQ6bm90KDpkaXNhYmxlZCk6bm90KC5kaXNhYmxlZCkuYWN0aXZlLCAuYnRuLXNldHBhc3N3b3JkOm5vdCg6ZGlzYWJsZWQpOm5vdCguZGlzYWJsZWQpOmFjdGl2ZSwgLnNob3c+LmJ0bi1zZXRwYXNzd29yZC5kcm9wZG93bi10b2dnbGUge1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgwZGVnLCAjMjdhMWRkIDEuNjglLCAjMzg4Y2U0IDEwMCUpO1xyXG4gIGJvcmRlci1jb2xvcjogIzUyNzdmNztcclxufVxyXG4uZm9yZ290LXBhc3N3b3JkIHtcclxuICBmb250LWZhbWlseTogT3BlbiBTYW5zO1xyXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBmb250LXNpemU6IDEycHg7XHJcbiAgbGluZS1oZWlnaHQ6IDM2cHg7XHJcbiAgdGV4dC1kZWNvcmF0aW9uLWxpbmU6IHVuZGVybGluZTtcclxuICBjb2xvcjogIzQ2NDY0NjtcclxufVxyXG4uZm9yZ290LXBhc3N3b3JkOmhvdmVyIHtcclxuICB0ZXh0LWRlY29yYXRpb24tbGluZTogbm9uZTtcclxuICBjb2xvcjogIzQ2NDY0NjtcclxufVxyXG4gIC8qKlNpZ24gVXAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG4gIGlucHV0Oi13ZWJraXQtYXV0b2ZpbGwsXHJcbiAgaW5wdXQ6LXdlYmtpdC1hdXRvZmlsbDpob3ZlcixcclxuICBpbnB1dDotd2Via2l0LWF1dG9maWxsOmZvY3VzLFxyXG4gIGlucHV0Oi13ZWJraXQtYXV0b2ZpbGw6YWN0aXZlIHtcclxuICAgICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciA1MDAwcyBlYXNlLWluLW91dCAwcztcclxuICAgICAgY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KSAhaW1wb3J0YW50O1xyXG4gIH1cclxuICBpbnB1dDotd2Via2l0LWF1dG9maWxsLCB0ZXh0YXJlYTotd2Via2l0LWF1dG9maWxsLCBzZWxlY3Q6LXdlYmtpdC1hdXRvZmlsbCB7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XHJcbiAgICAgIGJhY2tncm91bmQtaW1hZ2U6IG5vbmUgIWltcG9ydGFudDtcclxuICAgICAgY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KSAhaW1wb3J0YW50O1xyXG4gIH1cclxuICB0ZXh0YXJlYTpmb2N1cyxcclxuICBpbnB1dFt0eXBlPVwidGV4dFwiXTpmb2N1cyxcclxuICBpbnB1dFt0eXBlPVwicGFzc3dvcmRcIl06Zm9jdXMsXHJcbiAgaW5wdXRbdHlwZT1cImRhdGV0aW1lXCJdOmZvY3VzLFxyXG4gIGlucHV0W3R5cGU9XCJkYXRldGltZS1sb2NhbFwiXTpmb2N1cyxcclxuICBpbnB1dFt0eXBlPVwiZGF0ZVwiXTpmb2N1cyxcclxuICBpbnB1dFt0eXBlPVwibW9udGhcIl06Zm9jdXMsXHJcbiAgaW5wdXRbdHlwZT1cInRpbWVcIl06Zm9jdXMsXHJcbiAgaW5wdXRbdHlwZT1cIndlZWtcIl06Zm9jdXMsXHJcbiAgaW5wdXRbdHlwZT1cIm51bWJlclwiXTpmb2N1cyxcclxuICBpbnB1dFt0eXBlPVwiZW1haWxcIl06Zm9jdXMsXHJcbiAgaW5wdXRbdHlwZT1cInVybFwiXTpmb2N1cyxcclxuICBpbnB1dFt0eXBlPVwic2VhcmNoXCJdOmZvY3VzLFxyXG4gIGlucHV0W3R5cGU9XCJ0ZWxcIl06Zm9jdXMsXHJcbiAgaW5wdXRbdHlwZT1cImNvbG9yXCJdOmZvY3VzLFxyXG4gIC51bmVkaXRhYmxlLWlucHV0OmZvY3VzIHtcclxuICAgIGJveC1zaGFkb3c6IDAgMHB4IDJweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDc1KSBpbnNldCwgMCAwIDJweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNik7XHJcbiAgICBvdXRsaW5lOiAwIG5vbmU7XHJcbiAgfVxyXG4iXX0= */");

/***/ }),

/***/ "./src/app/pages/force-change-password/force-change-password.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/pages/force-change-password/force-change-password.component.ts ***!
  \********************************************************************************/
/*! exports provided: ForceChangePasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForceChangePasswordComponent", function() { return ForceChangePasswordComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_services_api_handler_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/api-handler.service */ "./src/app/services/api-handler.service.ts");





let ForceChangePasswordComponent = class ForceChangePasswordComponent {
    constructor(router, apiHandler, http) {
        this.router = router;
        this.apiHandler = apiHandler;
        this.http = http;
        this.loginData = JSON.parse(window.localStorage.getItem('loginData'));
        // userId=JSON.parse(window.localStorage.getItem('userId'));
        this.oldpaswrdCheck = true;
        this.submitObject = {
            oldPassword: "",
            newPassword: "",
            confirmPassword: ""
        };
        this.valid = true;
        this.regexpPassword = new RegExp(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[\w~@#$%^&*+=`|{}:;!.?\"()\[\]-]{6,25}$/);
    }
    ngOnInit() {
    }
    navigateTo() {
        var ref = this;
        ref.router.navigate(['']);
    }
    submitResult(submitForm) {
        var ref = this;
        ref.valid = submitForm.valid;
        if (submitForm.valid) {
            var newPassword = submitForm.value.newPassword;
            var confirmPassword = submitForm.value.confirmPassword;
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
            console.log();
            var temp = {};
            temp['userId'] = ref.loginData.userId;
            temp['password'] = submitForm.value.oldPassword;
            temp['newPassword'] = submitForm.value.confirmPassword;
            console.log("temp");
            console.log(temp);
            ref.apiHandler.updatePassword(temp, function success(resp) {
                console.log(resp);
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
    ngOnDestroy() {
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
        }
        else {
            $("#alertMsg1").modal("hide");
        }
    }
};
ForceChangePasswordComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: src_app_services_api_handler_service__WEBPACK_IMPORTED_MODULE_4__["ApiHandlerService"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
];
ForceChangePasswordComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-force-change-password',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./force-change-password.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/force-change-password/force-change-password.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./force-change-password.component.css */ "./src/app/pages/force-change-password/force-change-password.component.css")).default]
    })
], ForceChangePasswordComponent);



/***/ }),

/***/ "./src/app/pages/forgot-password/forgot-password.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/pages/forgot-password/forgot-password.component.css ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".setpassword-bg {\r\n    font-family:\"Open Sans\", sans-serif;\r\n      font-size: .9rem;\r\n      font-weight: 400;\r\n      line-height: 1.5;\r\n      color:#222222;\r\n      background-color: #ffffff;\r\nbackground-image: url('bg-set-password.jpg');\r\nbackground-attachment: fixed;\r\nbackground-size: cover;\r\nmargin-top: -4rem !important;\r\n\r\n  }\r\n  .bg-light {\r\n    background-color: #0f0f0f !important;\r\n    font-family:\"Open Sans\", sans-serif !important;\r\n  }\r\n  .bg-panel-setpassword {\r\n    background-color: #f8f9ff;\r\n  }\r\n  .setpassword-title {\r\n    font-family: \"Open Sans\", sans-serif !important;\r\n    font-weight: 500;\r\n    color: #3420aa;\r\n    font-size: 2.1rem;\r\n    text-shadow: 0px 6px 5px rgb(225 225 225);\r\n  }\r\n  .setpassword-title-2 {\r\n    font-family: \"Open Sans\", sans-serif !important;\r\n    font-weight: 500;\r\n    color: #589304;\r\n    font-size: 1rem;\r\n    text-shadow: 0px 4px 9px rgb(225 225 225);\r\n  }\r\n  .text-powered {\r\n    font-family: \"Open Sans\", sans-serif;\r\n    font-style: italic;\r\n    font-weight: 700;\r\n    font-size: .9rem;\r\n    line-height: 16px;\r\n    color: #8d7500;\r\n  }\r\n  .card {\r\n    box-shadow: none;\r\n    border-radius: 0px;\r\n  }\r\n  .errormsg{\r\n    font-size: 13px;\r\n    color:red;\r\n    font-weight: 500;\r\n  }\r\n  .text-danger {\r\n      color: #D90000 !important;\r\n  }\r\n  /* .setpassword-page {\r\n  background: linear-gradient(0deg, #ffffff 1.68%, #f8f8f8 100%);\r\n} */\r\n  .setpassword-page .form-control {\r\n  color: #020514;\r\n  height: calc(2em + .75rem + 2px);\r\n  line-height: 1.5;\r\n  background:#ffffff;\r\n  font-size: 0.95rem;\r\n  font-weight: 500;\r\n  border:0;\r\n  border-bottom:1px solid #f1f1f2;\r\n  border-radius: 0;\r\n  padding-left: 0;\r\n}\r\n  .setpassword-page .input-group .form-control:active, .setpassword-page .input-group .form-control:focus, .setpassword-page .input-group .form-control:hover {\r\n  color: #020514;\r\n  line-height: 1.5;\r\n  background:#ffffff;\r\n  border:0;\r\n  border-bottom:1px solid #f1f1f2;\r\n  border-radius: 0;\r\n}\r\n  .setpassword-page .input-group-addon {\r\n  padding: .5rem .75rem;\r\n  font-weight: 400;\r\n  line-height: 1.5;\r\n  color: #5277f7;\r\n  text-align: center;\r\n  background-color: #ffffff;\r\n  border:0;\r\n  border-bottom:1px solid #f1f1f2;\r\n  border-radius: 0;\r\n}\r\n  .setpassword-page .input-group-text {\r\n  padding: .75rem 1rem;\r\n  color: #5277f7;\r\n  background-color:#ffffff;\r\n  border:0;\r\n/* border-right: 4px solid #fff; */\r\n  border-radius: 0;\r\n  border-bottom:1px solid #f1f1f2;\r\n}\r\n  .setpassword-page .btn {\r\n  font-weight: 600;\r\n  box-shadow: 0px 8px 16px rgb(221 221 221 / 81%);\r\n}\r\n  .btn-setpassword {\r\n  color: #fff;\r\n  background: linear-gradient(0deg, #388ce4 1.68%, #27a1dd 100%);\r\n  border-color: #5277f7;\r\n}\r\n  .btn-setpassword:hover {\r\n  color: #fff;\r\n  background: linear-gradient(0deg, #27a1dd 1.68%, #388ce4 100%);\r\n  border-color: #5277f7;\r\n}\r\n  .btn-setpassword:not(:disabled):not(.disabled).active, .btn-setpassword:not(:disabled):not(.disabled):active, .show>.btn-setpassword.dropdown-toggle {\r\n  color: #fff;\r\n  background: linear-gradient(0deg, #27a1dd 1.68%, #388ce4 100%);\r\n  border-color: #5277f7;\r\n}\r\n  .forgot-password {\r\n  font-family: Open Sans;\r\n  font-style: normal;\r\n  font-weight: bold;\r\n  font-size: 12px;\r\n  line-height: 36px;\r\n  -webkit-text-decoration-line: underline;\r\n          text-decoration-line: underline;\r\n  color: #464646;\r\n}\r\n  .forgot-password:hover {\r\n  -webkit-text-decoration-line: none;\r\n          text-decoration-line: none;\r\n  color: #464646;\r\n}\r\n  /**Sign Up****************************************************************/\r\n  input:-webkit-autofill,\r\n  input:-webkit-autofill:hover,\r\n  input:-webkit-autofill:focus,\r\n  input:-webkit-autofill:active {\r\n      transition: background-color 5000s ease-in-out 0s;\r\n      color: rgb(255, 255, 255) !important;\r\n  }\r\n  input:-webkit-autofill, textarea:-webkit-autofill, select:-webkit-autofill {\r\n      background-color: transparent !important;\r\n      background-image: none !important;\r\n      color: rgb(255, 255, 255) !important;\r\n  }\r\n  textarea:focus,\r\n  input[type=\"text\"]:focus,\r\n  input[type=\"password\"]:focus,\r\n  input[type=\"datetime\"]:focus,\r\n  input[type=\"datetime-local\"]:focus,\r\n  input[type=\"date\"]:focus,\r\n  input[type=\"month\"]:focus,\r\n  input[type=\"time\"]:focus,\r\n  input[type=\"week\"]:focus,\r\n  input[type=\"number\"]:focus,\r\n  input[type=\"email\"]:focus,\r\n  input[type=\"url\"]:focus,\r\n  input[type=\"search\"]:focus,\r\n  input[type=\"tel\"]:focus,\r\n  input[type=\"color\"]:focus,\r\n  .uneditable-input:focus {\r\n    box-shadow: 0 0px 2px rgba(255, 255, 255, 0.075) inset, 0 0 2px rgba(255, 255, 255, 0.6);\r\n    outline: 0 none;\r\n  }\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZm9yZ290LXBhc3N3b3JkL2ZvcmdvdC1wYXNzd29yZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksbUNBQW1DO01BQ2pDLGdCQUFnQjtNQUNoQixnQkFBZ0I7TUFDaEIsZ0JBQWdCO01BQ2hCLGFBQWE7TUFDYix5QkFBeUI7QUFDL0IsNENBQWdFO0FBQ2hFLDRCQUE0QjtBQUM1QixzQkFBc0I7QUFDdEIsNEJBQTRCOztFQUUxQjtFQUNBO0lBQ0Usb0NBQW9DO0lBQ3BDLDhDQUE4QztFQUNoRDtFQUNBO0lBQ0UseUJBQXlCO0VBQzNCO0VBQ0E7SUFDRSwrQ0FBK0M7SUFDL0MsZ0JBQWdCO0lBQ2hCLGNBQWM7SUFDZCxpQkFBaUI7SUFDakIseUNBQXlDO0VBQzNDO0VBQ0E7SUFDRSwrQ0FBK0M7SUFDL0MsZ0JBQWdCO0lBQ2hCLGNBQWM7SUFDZCxlQUFlO0lBQ2YseUNBQXlDO0VBQzNDO0VBQ0E7SUFDRSxvQ0FBb0M7SUFDcEMsa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLGNBQWM7RUFDaEI7RUFDQTtJQUNFLGdCQUFnQjtJQUNoQixrQkFBa0I7RUFDcEI7RUFDQTtJQUNFLGVBQWU7SUFDZixTQUFTO0lBQ1QsZ0JBQWdCO0VBQ2xCO0VBQ0E7TUFDSSx5QkFBeUI7RUFDN0I7RUFFRjs7R0FFRztFQUNIO0VBQ0UsY0FBYztFQUNkLGdDQUFnQztFQUNoQyxnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsUUFBUTtFQUNSLCtCQUErQjtFQUMvQixnQkFBZ0I7RUFDaEIsZUFBZTtBQUNqQjtFQUNBO0VBQ0UsY0FBYztFQUNkLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLCtCQUErQjtFQUMvQixnQkFBZ0I7QUFDbEI7RUFDQTtFQUNFLHFCQUFxQjtFQUNyQixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIseUJBQXlCO0VBQ3pCLFFBQVE7RUFDUiwrQkFBK0I7RUFDL0IsZ0JBQWdCO0FBQ2xCO0VBQ0E7RUFDRSxvQkFBb0I7RUFDcEIsY0FBYztFQUNkLHdCQUF3QjtFQUN4QixRQUFRO0FBQ1Ysa0NBQWtDO0VBQ2hDLGdCQUFnQjtFQUNoQiwrQkFBK0I7QUFDakM7RUFDQTtFQUNFLGdCQUFnQjtFQUNoQiwrQ0FBK0M7QUFDakQ7RUFDQTtFQUNFLFdBQVc7RUFDWCw4REFBOEQ7RUFDOUQscUJBQXFCO0FBQ3ZCO0VBQ0E7RUFDRSxXQUFXO0VBQ1gsOERBQThEO0VBQzlELHFCQUFxQjtBQUN2QjtFQUNBO0VBQ0UsV0FBVztFQUNYLDhEQUE4RDtFQUM5RCxxQkFBcUI7QUFDdkI7RUFDQTtFQUNFLHNCQUFzQjtFQUN0QixrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsdUNBQStCO1VBQS9CLCtCQUErQjtFQUMvQixjQUFjO0FBQ2hCO0VBQ0E7RUFDRSxrQ0FBMEI7VUFBMUIsMEJBQTBCO0VBQzFCLGNBQWM7QUFDaEI7RUFDRSwwRUFBMEU7RUFDMUU7Ozs7TUFJSSxpREFBaUQ7TUFDakQsb0NBQW9DO0VBQ3hDO0VBQ0E7TUFDSSx3Q0FBd0M7TUFDeEMsaUNBQWlDO01BQ2pDLG9DQUFvQztFQUN4QztFQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0lBZ0JFLHdGQUF3RjtJQUN4RixlQUFlO0VBQ2pCIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvZm9yZ290LXBhc3N3b3JkL2ZvcmdvdC1wYXNzd29yZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNldHBhc3N3b3JkLWJnIHtcclxuICAgIGZvbnQtZmFtaWx5OlwiT3BlbiBTYW5zXCIsIHNhbnMtc2VyaWY7XHJcbiAgICAgIGZvbnQtc2l6ZTogLjlyZW07XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICAgIGxpbmUtaGVpZ2h0OiAxLjU7XHJcbiAgICAgIGNvbG9yOiMyMjIyMjI7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XHJcbmJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy9pbWcvYmctc2V0LXBhc3N3b3JkLmpwZ1wiKTtcclxuYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcclxuYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxubWFyZ2luLXRvcDogLTRyZW0gIWltcG9ydGFudDtcclxuXHJcbiAgfVxyXG4gIC5iZy1saWdodCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMGYwZjBmICFpbXBvcnRhbnQ7XHJcbiAgICBmb250LWZhbWlseTpcIk9wZW4gU2Fuc1wiLCBzYW5zLXNlcmlmICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIC5iZy1wYW5lbC1zZXRwYXNzd29yZCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjhmOWZmO1xyXG4gIH1cclxuICAuc2V0cGFzc3dvcmQtdGl0bGUge1xyXG4gICAgZm9udC1mYW1pbHk6IFwiT3BlbiBTYW5zXCIsIHNhbnMtc2VyaWYgIWltcG9ydGFudDtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICBjb2xvcjogIzM0MjBhYTtcclxuICAgIGZvbnQtc2l6ZTogMi4xcmVtO1xyXG4gICAgdGV4dC1zaGFkb3c6IDBweCA2cHggNXB4IHJnYigyMjUgMjI1IDIyNSk7XHJcbiAgfVxyXG4gIC5zZXRwYXNzd29yZC10aXRsZS0yIHtcclxuICAgIGZvbnQtZmFtaWx5OiBcIk9wZW4gU2Fuc1wiLCBzYW5zLXNlcmlmICFpbXBvcnRhbnQ7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgY29sb3I6ICM1ODkzMDQ7XHJcbiAgICBmb250LXNpemU6IDFyZW07XHJcbiAgICB0ZXh0LXNoYWRvdzogMHB4IDRweCA5cHggcmdiKDIyNSAyMjUgMjI1KTtcclxuICB9XHJcbiAgLnRleHQtcG93ZXJlZCB7XHJcbiAgICBmb250LWZhbWlseTogXCJPcGVuIFNhbnNcIiwgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICBmb250LXNpemU6IC45cmVtO1xyXG4gICAgbGluZS1oZWlnaHQ6IDE2cHg7XHJcbiAgICBjb2xvcjogIzhkNzUwMDtcclxuICB9XHJcbiAgLmNhcmQge1xyXG4gICAgYm94LXNoYWRvdzogbm9uZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDBweDtcclxuICB9XHJcbiAgLmVycm9ybXNne1xyXG4gICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgY29sb3I6cmVkO1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICB9XHJcbiAgLnRleHQtZGFuZ2VyIHtcclxuICAgICAgY29sb3I6ICNEOTAwMDAgIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4vKiAuc2V0cGFzc3dvcmQtcGFnZSB7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDBkZWcsICNmZmZmZmYgMS42OCUsICNmOGY4ZjggMTAwJSk7XHJcbn0gKi9cclxuLnNldHBhc3N3b3JkLXBhZ2UgLmZvcm0tY29udHJvbCB7XHJcbiAgY29sb3I6ICMwMjA1MTQ7XHJcbiAgaGVpZ2h0OiBjYWxjKDJlbSArIC43NXJlbSArIDJweCk7XHJcbiAgbGluZS1oZWlnaHQ6IDEuNTtcclxuICBiYWNrZ3JvdW5kOiNmZmZmZmY7XHJcbiAgZm9udC1zaXplOiAwLjk1cmVtO1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgYm9yZGVyOjA7XHJcbiAgYm9yZGVyLWJvdHRvbToxcHggc29saWQgI2YxZjFmMjtcclxuICBib3JkZXItcmFkaXVzOiAwO1xyXG4gIHBhZGRpbmctbGVmdDogMDtcclxufVxyXG4uc2V0cGFzc3dvcmQtcGFnZSAuaW5wdXQtZ3JvdXAgLmZvcm0tY29udHJvbDphY3RpdmUsIC5zZXRwYXNzd29yZC1wYWdlIC5pbnB1dC1ncm91cCAuZm9ybS1jb250cm9sOmZvY3VzLCAuc2V0cGFzc3dvcmQtcGFnZSAuaW5wdXQtZ3JvdXAgLmZvcm0tY29udHJvbDpob3ZlciB7XHJcbiAgY29sb3I6ICMwMjA1MTQ7XHJcbiAgbGluZS1oZWlnaHQ6IDEuNTtcclxuICBiYWNrZ3JvdW5kOiNmZmZmZmY7XHJcbiAgYm9yZGVyOjA7XHJcbiAgYm9yZGVyLWJvdHRvbToxcHggc29saWQgI2YxZjFmMjtcclxuICBib3JkZXItcmFkaXVzOiAwO1xyXG59XHJcbi5zZXRwYXNzd29yZC1wYWdlIC5pbnB1dC1ncm91cC1hZGRvbiB7XHJcbiAgcGFkZGluZzogLjVyZW0gLjc1cmVtO1xyXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgbGluZS1oZWlnaHQ6IDEuNTtcclxuICBjb2xvcjogIzUyNzdmNztcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcclxuICBib3JkZXI6MDtcclxuICBib3JkZXItYm90dG9tOjFweCBzb2xpZCAjZjFmMWYyO1xyXG4gIGJvcmRlci1yYWRpdXM6IDA7XHJcbn1cclxuLnNldHBhc3N3b3JkLXBhZ2UgLmlucHV0LWdyb3VwLXRleHQge1xyXG4gIHBhZGRpbmc6IC43NXJlbSAxcmVtO1xyXG4gIGNvbG9yOiAjNTI3N2Y3O1xyXG4gIGJhY2tncm91bmQtY29sb3I6I2ZmZmZmZjtcclxuICBib3JkZXI6MDtcclxuLyogYm9yZGVyLXJpZ2h0OiA0cHggc29saWQgI2ZmZjsgKi9cclxuICBib3JkZXItcmFkaXVzOiAwO1xyXG4gIGJvcmRlci1ib3R0b206MXB4IHNvbGlkICNmMWYxZjI7XHJcbn1cclxuLnNldHBhc3N3b3JkLXBhZ2UgLmJ0biB7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICBib3gtc2hhZG93OiAwcHggOHB4IDE2cHggcmdiKDIyMSAyMjEgMjIxIC8gODElKTtcclxufVxyXG4uYnRuLXNldHBhc3N3b3JkIHtcclxuICBjb2xvcjogI2ZmZjtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMGRlZywgIzM4OGNlNCAxLjY4JSwgIzI3YTFkZCAxMDAlKTtcclxuICBib3JkZXItY29sb3I6ICM1Mjc3Zjc7XHJcbn1cclxuLmJ0bi1zZXRwYXNzd29yZDpob3ZlciB7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDBkZWcsICMyN2ExZGQgMS42OCUsICMzODhjZTQgMTAwJSk7XHJcbiAgYm9yZGVyLWNvbG9yOiAjNTI3N2Y3O1xyXG59XHJcbi5idG4tc2V0cGFzc3dvcmQ6bm90KDpkaXNhYmxlZCk6bm90KC5kaXNhYmxlZCkuYWN0aXZlLCAuYnRuLXNldHBhc3N3b3JkOm5vdCg6ZGlzYWJsZWQpOm5vdCguZGlzYWJsZWQpOmFjdGl2ZSwgLnNob3c+LmJ0bi1zZXRwYXNzd29yZC5kcm9wZG93bi10b2dnbGUge1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgwZGVnLCAjMjdhMWRkIDEuNjglLCAjMzg4Y2U0IDEwMCUpO1xyXG4gIGJvcmRlci1jb2xvcjogIzUyNzdmNztcclxufVxyXG4uZm9yZ290LXBhc3N3b3JkIHtcclxuICBmb250LWZhbWlseTogT3BlbiBTYW5zO1xyXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBmb250LXNpemU6IDEycHg7XHJcbiAgbGluZS1oZWlnaHQ6IDM2cHg7XHJcbiAgdGV4dC1kZWNvcmF0aW9uLWxpbmU6IHVuZGVybGluZTtcclxuICBjb2xvcjogIzQ2NDY0NjtcclxufVxyXG4uZm9yZ290LXBhc3N3b3JkOmhvdmVyIHtcclxuICB0ZXh0LWRlY29yYXRpb24tbGluZTogbm9uZTtcclxuICBjb2xvcjogIzQ2NDY0NjtcclxufVxyXG4gIC8qKlNpZ24gVXAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG4gIGlucHV0Oi13ZWJraXQtYXV0b2ZpbGwsXHJcbiAgaW5wdXQ6LXdlYmtpdC1hdXRvZmlsbDpob3ZlcixcclxuICBpbnB1dDotd2Via2l0LWF1dG9maWxsOmZvY3VzLFxyXG4gIGlucHV0Oi13ZWJraXQtYXV0b2ZpbGw6YWN0aXZlIHtcclxuICAgICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciA1MDAwcyBlYXNlLWluLW91dCAwcztcclxuICAgICAgY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KSAhaW1wb3J0YW50O1xyXG4gIH1cclxuICBpbnB1dDotd2Via2l0LWF1dG9maWxsLCB0ZXh0YXJlYTotd2Via2l0LWF1dG9maWxsLCBzZWxlY3Q6LXdlYmtpdC1hdXRvZmlsbCB7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XHJcbiAgICAgIGJhY2tncm91bmQtaW1hZ2U6IG5vbmUgIWltcG9ydGFudDtcclxuICAgICAgY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KSAhaW1wb3J0YW50O1xyXG4gIH1cclxuICB0ZXh0YXJlYTpmb2N1cyxcclxuICBpbnB1dFt0eXBlPVwidGV4dFwiXTpmb2N1cyxcclxuICBpbnB1dFt0eXBlPVwicGFzc3dvcmRcIl06Zm9jdXMsXHJcbiAgaW5wdXRbdHlwZT1cImRhdGV0aW1lXCJdOmZvY3VzLFxyXG4gIGlucHV0W3R5cGU9XCJkYXRldGltZS1sb2NhbFwiXTpmb2N1cyxcclxuICBpbnB1dFt0eXBlPVwiZGF0ZVwiXTpmb2N1cyxcclxuICBpbnB1dFt0eXBlPVwibW9udGhcIl06Zm9jdXMsXHJcbiAgaW5wdXRbdHlwZT1cInRpbWVcIl06Zm9jdXMsXHJcbiAgaW5wdXRbdHlwZT1cIndlZWtcIl06Zm9jdXMsXHJcbiAgaW5wdXRbdHlwZT1cIm51bWJlclwiXTpmb2N1cyxcclxuICBpbnB1dFt0eXBlPVwiZW1haWxcIl06Zm9jdXMsXHJcbiAgaW5wdXRbdHlwZT1cInVybFwiXTpmb2N1cyxcclxuICBpbnB1dFt0eXBlPVwic2VhcmNoXCJdOmZvY3VzLFxyXG4gIGlucHV0W3R5cGU9XCJ0ZWxcIl06Zm9jdXMsXHJcbiAgaW5wdXRbdHlwZT1cImNvbG9yXCJdOmZvY3VzLFxyXG4gIC51bmVkaXRhYmxlLWlucHV0OmZvY3VzIHtcclxuICAgIGJveC1zaGFkb3c6IDAgMHB4IDJweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDc1KSBpbnNldCwgMCAwIDJweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNik7XHJcbiAgICBvdXRsaW5lOiAwIG5vbmU7XHJcbiAgfVxyXG4iXX0= */");

/***/ }),

/***/ "./src/app/pages/forgot-password/forgot-password.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/pages/forgot-password/forgot-password.component.ts ***!
  \********************************************************************/
/*! exports provided: ForgotPasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotPasswordComponent", function() { return ForgotPasswordComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_services_api_handler_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/api-handler.service */ "./src/app/services/api-handler.service.ts");





let ForgotPasswordComponent = class ForgotPasswordComponent {
    constructor(route, router, apiHandler, http) {
        this.route = route;
        this.router = router;
        this.apiHandler = apiHandler;
        this.http = http;
        this.valid = true;
        this.passwordpattern = "^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$";
        this.alertResponse = { message: '', status: '', route: '' };
        this.requestJson = { reqNo: '', password: '', userId: '', confirmPassword: '' };
        this.submitObject = {
            oldPassword: "",
            newPassword: "",
            confirmPassword: ""
        };
        this.regexpPassword = new RegExp(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[\w~@#$%^&*+=`|{}:;!.?\"()\[\]-]{6,25}$/);
    }
    ngOnInit() {
        const ref = this;
        ref.testid = this.route.snapshot.params.id;
        console.log("-------->" + ref.testid);
        setTimeout(() => {
            ref.callApi();
        }, 500);
    }
    callApi() {
        const ref = this;
        ref.apiHandler.validateForgotPwdLink(ref.testid, (response) => {
            console.log(JSON.stringify(response));
            if (response.sts === "success") {
                ref.requestJson.userId = response.content.userId;
                ref.requestJson.reqNo = ref.testid;
                //ref.callAlert("success", "link is valid ", "not");
            }
            else {
                ref.router.navigate(['session-expired']);
            }
            ref.alertResponse.status = response.sts;
        }, (error) => {
            console.log(error);
            ref.callAlert("error", "Failed", "not");
            console.log(error);
        });
    }
    onSubmit(submitForm) {
        //code
        const ref = this;
        ref.valid = submitForm.valid;
        console.log(ref.requestJson);
        console.log("----------------" + ref.valid);
        if (ref.valid) {
            if (ref.requestJson.confirmPassword == ref.requestJson.password) {
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
            }
            else {
                ref.callAlert("error", "Please enter same password.", "not");
                return false;
            }
        }
    }
    submitResult(submitForm) {
        var ref = this;
        ref.valid = submitForm.valid;
        console.log("inside");
        if (submitForm.valid) {
            console.log("inside1");
            var newPassword = submitForm.value.newPassword;
            var confirmPassword = submitForm.value.confirmPassword;
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
            console.log("inside");
            var temp = {};
            temp['reqNo'] = ref.requestJson.reqNo;
            temp['userId'] = ref.requestJson.userId;
            temp['password'] = submitForm.value.newPassword;
            temp['confirmPassword'] = submitForm.value.confirmPassword;
            console.log("temp");
            console.log(temp);
            ref.apiHandler.updateForcePassword(temp, function success(resp) {
                console.log(resp);
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
        }
        else {
            $("#alertMsg1").modal("hide");
        }
    }
};
ForgotPasswordComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: src_app_services_api_handler_service__WEBPACK_IMPORTED_MODULE_4__["ApiHandlerService"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
];
ForgotPasswordComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-forgot-password',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./forgot-password.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/forgot-password/forgot-password.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./forgot-password.component.css */ "./src/app/pages/forgot-password/forgot-password.component.css")).default]
    })
], ForgotPasswordComponent);



/***/ }),

/***/ "./src/app/pages/header/header.component.css":
/*!***************************************************!*\
  !*** ./src/app/pages/header/header.component.css ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/pages/header/header.component.ts":
/*!**************************************************!*\
  !*** ./src/app/pages/header/header.component.ts ***!
  \**************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_services_api_handler_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/api-handler.service */ "./src/app/services/api-handler.service.ts");





let HeaderComponent = class HeaderComponent {
    constructor(router, apiHandler, http) {
        this.router = router;
        this.apiHandler = apiHandler;
        this.http = http;
        this.loginDetails = JSON.parse(window.localStorage.getItem('loginData'));
    }
    ngOnInit() {
    }
    logout() {
        const ref = this;
        window.localStorage.clear();
        setTimeout(() => {
            ref.router.navigate([""]);
        }, 300);
    }
    navigateTo() {
        var ref = this;
        ref.router.navigate(['main-layout/dashboard']);
    }
};
HeaderComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: src_app_services_api_handler_service__WEBPACK_IMPORTED_MODULE_4__["ApiHandlerService"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
];
HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-header',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./header.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/header/header.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./header.component.css */ "./src/app/pages/header/header.component.css")).default]
    })
], HeaderComponent);



/***/ }),

/***/ "./src/app/pages/lead-generation-list/lead-generation-list.component.css":
/*!*******************************************************************************!*\
  !*** ./src/app/pages/lead-generation-list/lead-generation-list.component.css ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".lead-list-scroll {\r\n    height: auto;\r\n    max-height: 65vh;\r\n    overflow: auto;\r\n  }\r\n  .lead-questions-scroll {\r\n    height: auto;\r\n    max-height: 56vh;\r\n    overflow: auto;\r\n  }\r\n  .list-group-item.active {\r\n    color: #0e141e;\r\n    background-color: #f5f7fa;\r\n    border-color: #dddddd;\r\n  }\r\n  .lead-title {\r\n      font-family: \"Open Sans\", sans-serif !important;\r\n      font-weight: 500;\r\n      color: #f57f19;\r\n      font-size: 1.3rem;\r\n      /* text-shadow: 0px 6px 5px rgb(207 207 207); */\r\n  }\r\n  .lead-quetion {\r\n      font-family: \"Open Sans\", sans-serif !important;\r\n      font-weight: 500;\r\n      color: #2c2b2c;\r\n      font-size: 1rem;\r\n      /* text-shadow: 0px 6px 5px rgb(207 207 207); */\r\n  }\r\n  .lead-header-title {\r\n      font-family: \"Open Sans\", sans-serif !important;\r\n      font-weight: 500;\r\n      color: #2c2b2c;\r\n      font-size: 1.3rem;\r\n      text-shadow: 0px 6px 5px rgb(207 207 207);\r\n  }\r\n  /* .lead-list .list-group-item {\r\n    margin-bottom: 2rem;\r\n    border-radius: 6px;\r\n  } */\r\n  .lead-list .list-group-item.active, .lead-list .list-group-item.active:focus, .lead-list .list-group-item:hover {\r\n    /* border: 1px solid #c6a150; */\r\n    background-color: #fff9eb;\r\n    border-color: #ffde8c;\r\n    /* -webkit-box-shadow: 0px 4px 38px -16px rgba(197,199,201,1);\r\n    -moz-box-shadow: 0px 4px 38px -16px rgba(197,199,201,1);\r\n    box-shadow: 0px 4px 38px -16px rgba(197,199,201,1); */\r\n  }\r\n  .card-header .heading-elements, .card-header .heading-elements-toggle {\r\n      top: 13px;\r\n      right: 21px;\r\n  }\r\n  \r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbGVhZC1nZW5lcmF0aW9uLWxpc3QvbGVhZC1nZW5lcmF0aW9uLWxpc3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsY0FBYztFQUNoQjtFQUNBO0lBQ0UsWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixjQUFjO0VBQ2hCO0VBQ0E7SUFDRSxjQUFjO0lBQ2QseUJBQXlCO0lBQ3pCLHFCQUFxQjtFQUN2QjtFQUNBO01BQ0ksK0NBQStDO01BQy9DLGdCQUFnQjtNQUNoQixjQUFjO01BQ2QsaUJBQWlCO01BQ2pCLCtDQUErQztFQUNuRDtFQUNBO01BQ0ksK0NBQStDO01BQy9DLGdCQUFnQjtNQUNoQixjQUFjO01BQ2QsZUFBZTtNQUNmLCtDQUErQztFQUNuRDtFQUNBO01BQ0ksK0NBQStDO01BQy9DLGdCQUFnQjtNQUNoQixjQUFjO01BQ2QsaUJBQWlCO01BQ2pCLHlDQUF5QztFQUM3QztFQUNBOzs7S0FHRztFQUNIO0lBQ0UsK0JBQStCO0lBQy9CLHlCQUF5QjtJQUN6QixxQkFBcUI7SUFDckI7O3lEQUVxRDtFQUN2RDtFQUNBO01BQ0ksU0FBUztNQUNULFdBQVc7RUFDZiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2xlYWQtZ2VuZXJhdGlvbi1saXN0L2xlYWQtZ2VuZXJhdGlvbi1saXN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubGVhZC1saXN0LXNjcm9sbCB7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICBtYXgtaGVpZ2h0OiA2NXZoO1xyXG4gICAgb3ZlcmZsb3c6IGF1dG87XHJcbiAgfVxyXG4gIC5sZWFkLXF1ZXN0aW9ucy1zY3JvbGwge1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgbWF4LWhlaWdodDogNTZ2aDtcclxuICAgIG92ZXJmbG93OiBhdXRvO1xyXG4gIH1cclxuICAubGlzdC1ncm91cC1pdGVtLmFjdGl2ZSB7XHJcbiAgICBjb2xvcjogIzBlMTQxZTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmNWY3ZmE7XHJcbiAgICBib3JkZXItY29sb3I6ICNkZGRkZGQ7XHJcbiAgfVxyXG4gIC5sZWFkLXRpdGxlIHtcclxuICAgICAgZm9udC1mYW1pbHk6IFwiT3BlbiBTYW5zXCIsIHNhbnMtc2VyaWYgIWltcG9ydGFudDtcclxuICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgY29sb3I6ICNmNTdmMTk7XHJcbiAgICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xyXG4gICAgICAvKiB0ZXh0LXNoYWRvdzogMHB4IDZweCA1cHggcmdiKDIwNyAyMDcgMjA3KTsgKi9cclxuICB9XHJcbiAgLmxlYWQtcXVldGlvbiB7XHJcbiAgICAgIGZvbnQtZmFtaWx5OiBcIk9wZW4gU2Fuc1wiLCBzYW5zLXNlcmlmICFpbXBvcnRhbnQ7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgIGNvbG9yOiAjMmMyYjJjO1xyXG4gICAgICBmb250LXNpemU6IDFyZW07XHJcbiAgICAgIC8qIHRleHQtc2hhZG93OiAwcHggNnB4IDVweCByZ2IoMjA3IDIwNyAyMDcpOyAqL1xyXG4gIH1cclxuICAubGVhZC1oZWFkZXItdGl0bGUge1xyXG4gICAgICBmb250LWZhbWlseTogXCJPcGVuIFNhbnNcIiwgc2Fucy1zZXJpZiAhaW1wb3J0YW50O1xyXG4gICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICBjb2xvcjogIzJjMmIyYztcclxuICAgICAgZm9udC1zaXplOiAxLjNyZW07XHJcbiAgICAgIHRleHQtc2hhZG93OiAwcHggNnB4IDVweCByZ2IoMjA3IDIwNyAyMDcpO1xyXG4gIH1cclxuICAvKiAubGVhZC1saXN0IC5saXN0LWdyb3VwLWl0ZW0ge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMnJlbTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcclxuICB9ICovXHJcbiAgLmxlYWQtbGlzdCAubGlzdC1ncm91cC1pdGVtLmFjdGl2ZSwgLmxlYWQtbGlzdCAubGlzdC1ncm91cC1pdGVtLmFjdGl2ZTpmb2N1cywgLmxlYWQtbGlzdCAubGlzdC1ncm91cC1pdGVtOmhvdmVyIHtcclxuICAgIC8qIGJvcmRlcjogMXB4IHNvbGlkICNjNmExNTA7ICovXHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmOWViO1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjZmZkZThjO1xyXG4gICAgLyogLXdlYmtpdC1ib3gtc2hhZG93OiAwcHggNHB4IDM4cHggLTE2cHggcmdiYSgxOTcsMTk5LDIwMSwxKTtcclxuICAgIC1tb3otYm94LXNoYWRvdzogMHB4IDRweCAzOHB4IC0xNnB4IHJnYmEoMTk3LDE5OSwyMDEsMSk7XHJcbiAgICBib3gtc2hhZG93OiAwcHggNHB4IDM4cHggLTE2cHggcmdiYSgxOTcsMTk5LDIwMSwxKTsgKi9cclxuICB9XHJcbiAgLmNhcmQtaGVhZGVyIC5oZWFkaW5nLWVsZW1lbnRzLCAuY2FyZC1oZWFkZXIgLmhlYWRpbmctZWxlbWVudHMtdG9nZ2xlIHtcclxuICAgICAgdG9wOiAxM3B4O1xyXG4gICAgICByaWdodDogMjFweDtcclxuICB9XHJcbiAgIl19 */");

/***/ }),

/***/ "./src/app/pages/lead-generation-list/lead-generation-list.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/pages/lead-generation-list/lead-generation-list.component.ts ***!
  \******************************************************************************/
/*! exports provided: LeadGenerationListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LeadGenerationListComponent", function() { return LeadGenerationListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_services_api_handler_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/api-handler.service */ "./src/app/services/api-handler.service.ts");
/* harmony import */ var src_app_services_constant_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/constant.utils */ "./src/app/services/constant.utils.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");








let LeadGenerationListComponent = class LeadGenerationListComponent {
    constructor(router, apiHandler, http, location, dialog) {
        this.router = router;
        this.apiHandler = apiHandler;
        this.http = http;
        this.location = location;
        this.dialog = dialog;
        this.leadUserList = [];
        this.selectedItem = 0;
    }
    ngOnInit() {
        const ref = this;
        ref.callApi();
    }
    callApi() {
        const ref = this;
        ref.apiHandler.getLeadUserList((response) => {
            console.log(JSON.stringify(response));
            if (response.sts === src_app_services_constant_utils__WEBPACK_IMPORTED_MODULE_6__["Constant"].SUCCESS_STATUS) {
                ref.leadUserList = response.content;
            }
            else {
                ref.leadUserList = [];
            }
            ref.initializeDatatable();
        }, (error) => {
            console.log(error);
            ref.leadUserList = [];
            ref.initializeDatatable();
        });
    }
    initializeDatatable() {
        $('#leadUserList').dataTable().fnDestroy();
        setTimeout(() => {
            $('#leadUserList').DataTable({
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
};
LeadGenerationListComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: src_app_services_api_handler_service__WEBPACK_IMPORTED_MODULE_5__["ApiHandlerService"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_7__["Location"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"] }
];
LeadGenerationListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-lead-generation-list',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./lead-generation-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/lead-generation-list/lead-generation-list.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./lead-generation-list.component.css */ "./src/app/pages/lead-generation-list/lead-generation-list.component.css")).default]
    })
], LeadGenerationListComponent);



/***/ }),

/***/ "./src/app/pages/lead-generation-view/lead-generation-view.component.css":
/*!*******************************************************************************!*\
  !*** ./src/app/pages/lead-generation-view/lead-generation-view.component.css ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2xlYWQtZ2VuZXJhdGlvbi12aWV3L2xlYWQtZ2VuZXJhdGlvbi12aWV3LmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/pages/lead-generation-view/lead-generation-view.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/pages/lead-generation-view/lead-generation-view.component.ts ***!
  \******************************************************************************/
/*! exports provided: LeadGenerationViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LeadGenerationViewComponent", function() { return LeadGenerationViewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_services_api_handler_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/api-handler.service */ "./src/app/services/api-handler.service.ts");
/* harmony import */ var src_app_services_constant_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/constant.utils */ "./src/app/services/constant.utils.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");








let LeadGenerationViewComponent = class LeadGenerationViewComponent {
    constructor(router, apiHandler, http, location, dialog, activatedRoute) {
        this.router = router;
        this.apiHandler = apiHandler;
        this.http = http;
        this.location = location;
        this.dialog = dialog;
        this.activatedRoute = activatedRoute;
        this.leadUserList = [];
        this.selectedItem = null;
        this.responseJson = {
            pkLeadId: '', compName: '', emailId: '', createdOn: '', status: '', city: '', cityOthers: '',
            contactUsOther: '', firmTypeOther: '', contactUs: '', creditCapacity: '', empStrength: '',
            expInteriorReno: '', firmType: '', serviceType: '', serviceCategoty: '', turnOver: '', mobileNo: '',
            reqEmailId: '', serviceCategoryOther: '', serviceProviderOther: '', cityArray: '', serProviderTypeArray: '',
            firstName: '', lastName: ''
        };
        this.requestJson = {
            pkLeadId: '', action: '', emailId: '', firstName: ''
        };
        this.alertResponse = { message: '', status: '', route: '' };
    }
    ngOnInit() {
        const ref = this;
        ref.selectedItem = ref.activatedRoute.snapshot.params['id'];
        console.log('index:::' + ref.selectedItem);
        ref.callApi();
    }
    callApi() {
        const ref = this;
        ref.apiHandler.getLeadUserList((response) => {
            console.log(JSON.stringify(response));
            if (response.sts === src_app_services_constant_utils__WEBPACK_IMPORTED_MODULE_5__["Constant"].SUCCESS_STATUS) {
                ref.leadUserList = response.content;
            }
            else {
                ref.leadUserList = [];
            }
        }, (error) => {
            console.log(error);
            ref.leadUserList = [];
        });
        ref.apiHandler.getLeadUserDetails(ref.selectedItem, (response) => {
            console.log(JSON.stringify(response));
            if (response.sts === src_app_services_constant_utils__WEBPACK_IMPORTED_MODULE_5__["Constant"].SUCCESS_STATUS) {
                ref.responseJson = response.content;
            }
        }, (error) => {
            console.log(error);
        });
    }
    onSelectLead() {
        const ref = this;
        setTimeout(() => {
            ref.apiHandler.getLeadUserDetails(ref.selectedItem, (response) => {
                console.log(JSON.stringify(response));
                if (response.sts === src_app_services_constant_utils__WEBPACK_IMPORTED_MODULE_5__["Constant"].SUCCESS_STATUS) {
                    const tempObject = response.content;
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
            }, (error) => {
                console.log(error);
            });
        }, 600);
    }
    onAction(action, json) {
        const ref = this;
        if (action === 'A') {
            ref.requestJson.action = src_app_services_constant_utils__WEBPACK_IMPORTED_MODULE_5__["Constant"].APPROVAL_STATUS;
        }
        else if (action === 'R') {
            ref.requestJson.action = src_app_services_constant_utils__WEBPACK_IMPORTED_MODULE_5__["Constant"].REJECT_STATUS;
        }
        else {
            ref.requestJson.action = src_app_services_constant_utils__WEBPACK_IMPORTED_MODULE_5__["Constant"].HOLD_STATUS;
        }
        ref.requestJson.pkLeadId = json.pkLeadId;
        ref.requestJson.firstName = json.firstName;
        ref.requestJson.emailId = json.emailId;
        console.log('requestJson==> ' + JSON.stringify(ref.requestJson));
        ref.apiHandler.leadAction(ref.requestJson, (response) => {
            console.log(JSON.stringify(response));
            setTimeout(() => {
                $('#alertMsg').modal('show');
            }, 1000);
            if (response.sts === src_app_services_constant_utils__WEBPACK_IMPORTED_MODULE_5__["Constant"].SUCCESS_STATUS) {
                ref.alertResponse.message = src_app_services_constant_utils__WEBPACK_IMPORTED_MODULE_5__["Constant"].SUCCESS_MESSAGE;
                ref.alertResponse.route = 'main-layout/leadGeneration';
            }
            else {
                ref.alertResponse.message = response.msg;
            }
            ref.alertResponse.status = response.sts;
        }, (error) => {
            setTimeout(() => {
                $('#alertMsg').modal('show');
            }, 1000);
            ref.alertResponse.message = src_app_services_constant_utils__WEBPACK_IMPORTED_MODULE_5__["Constant"].ERROR_MESSAGE;
            ref.alertResponse.status = src_app_services_constant_utils__WEBPACK_IMPORTED_MODULE_5__["Constant"].ERROR_STATUS;
            ref.alertResponse.route = '';
            console.log(error);
        });
    }
};
LeadGenerationViewComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: src_app_services_api_handler_service__WEBPACK_IMPORTED_MODULE_4__["ApiHandlerService"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClient"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_6__["Location"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }
];
LeadGenerationViewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-lead-generation-view',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./lead-generation-view.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/lead-generation-view/lead-generation-view.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./lead-generation-view.component.css */ "./src/app/pages/lead-generation-view/lead-generation-view.component.css")).default]
    })
], LeadGenerationViewComponent);



/***/ }),

/***/ "./src/app/pages/lead-generation/lead-generation.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/pages/lead-generation/lead-generation.component.css ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".page-vendor-lead {\r\n    width: 100%;\r\n    background-color: #f3f3ff;\r\n    margin-top: -4rem !important;\r\n  }\r\n  .page-vendor-lead .bg-left-vendor {\r\n    width: 100%;\r\n    background-image: url('vendor-lead-left-bg.jpg'),radial-gradient(rgb(220 220 254), rgb(220 220 254));\r\n    background-position: bottom;\r\n    background-repeat: no-repeat;\r\n    background-size: contain;\r\n  }\r\n  .page-vendor-lead .login-title {\r\n    font-family: \"Open Sans\", sans-serif !important;\r\n    font-weight: 500;\r\n    color: #1e548d;\r\n    font-size: 2.1rem;\r\n    text-shadow: 0px 6px 5px rgb(179 179 179);\r\n  }\r\n  .page-vendor-lead .login-title-2 {\r\n    font-family: \"Open Sans\", sans-serif !important;\r\n    font-weight: 500;\r\n    color: #1e548d;\r\n    font-size: 1.8rem;\r\n    text-shadow: 0px 6px 5px rgb(195 195 195);\r\n  }\r\n  .page-vendor-lead .lead-label {\r\n    font-family: \"Open Sans\", sans-serif !important;\r\n    font-weight: 500;\r\n    color: #2c2b2c;\r\n    font-size: 1.3rem;\r\n    text-shadow: 0px 6px 5px rgb(207 207 207);\r\n  }\r\n  .page-vendor-lead .card-footer {\r\n    padding: 0.5rem 1.5rem;\r\n  }\r\n  .page-vendor-lead .page-scroll {\r\n    height: 75.3vh;\r\n    overflow: hidden;\r\n    overflow: auto;\r\n  }\r\n  .page-vendor-lead .page-view-scroll {\r\n    height: 91vh;\r\n    overflow: hidden;\r\n    overflow: auto;\r\n  }\r\n  .page-vendor-lead .custom-file {\r\n    /* font-size:.9rem; */\r\n    /* height: calc(1.8em + 0.8rem + 2px); */\r\n    height: 2.25rem;\r\n  }\r\n  .page-vendor-lead .custom-file-input {\r\n    height: 2.25rem;\r\n  }\r\n  .page-vendor-lead .custom-file-label {\r\n    height: 2.25rem;\r\n    padding: 0.25rem 0.5rem;\r\n    line-height: 1.6;\r\n    background-color: #ffffff;\r\n    border: 1px solid #ebebeb;\r\n  }\r\n  .page-vendor-lead .custom-file-label::after {\r\n    height: 2.25rem;\r\n    padding: 0.25rem 0.5rem;\r\n    line-height: 1.6;\r\n    color: #000000;\r\n    background-color: #dbdbdb;\r\n  }\r\n  .page-vendor-lead .custom-control-label {\r\n    cursor: pointer;\r\n    /* font-size: .9rem; */\r\n  }\r\n  .page-vendor-lead .custom-control-label::before {\r\n      position: absolute;\r\n      top: 0.125rem;\r\n      left: -1.8rem;\r\n      display: block;\r\n      width: 1rem;\r\n      height: 1rem;\r\n      pointer-events: none;\r\n      content: \"\";\r\n      background-color: #fff;\r\n      border: #878787 solid 1px;\r\n  }\r\n  .page-vendor-lead .custom-control-label::after {\r\n      position: absolute;\r\n      top: -0.11rem;\r\n      left: -2.08rem;\r\n      display: block;\r\n      width: 1rem;\r\n      height: 1rem;\r\n      content: \"\";\r\n      background: no-repeat 50% / 50% 50%;\r\n  }\r\n  .page-vendor-lead .custom-checkbox .custom-control-label::before {\r\n      border-radius: 0.25rem;\r\n  }\r\n  .page-vendor-lead .custom-control-label::before, .page-vendor-lead .custom-control-label::after {\r\n      width: 1.1rem;\r\n      height: 1.1rem;\r\n  }\r\n  .page-vendor-lead .custom-checkbox .custom-control-input:checked ~ .custom-control-label::after {\r\n      width: 23px;\r\n      height: 23px;\r\n      background-image: url(data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3E%3Cpath fill='%23fff' d='M6.564.75l-3.59 3.612-1.538-1.55L0 4.26 2.974 7.25 8 2.193z'/%3E%3C/svg%3E);\r\n  }\r\n  .page-vendor-lead .custom-control-label::before, .page-vendor-lead .custom-file-label, .custom-select {\r\n      transition: background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\r\n  }\r\n  .page-vendor-lead .custom-control-input:checked ~ .custom-control-label::before {\r\n      color: #fff;\r\n      border-color: #0e141e;\r\n      background-color: #0e141e;\r\n  }\r\n  \r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbGVhZC1nZW5lcmF0aW9uL2xlYWQtZ2VuZXJhdGlvbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksV0FBVztJQUNYLHlCQUF5QjtJQUN6Qiw0QkFBNEI7RUFDOUI7RUFDQTtJQUNFLFdBQVc7SUFDWCxvR0FBc0g7SUFDdEgsMkJBQTJCO0lBQzNCLDRCQUE0QjtJQUM1Qix3QkFBd0I7RUFDMUI7RUFDQTtJQUNFLCtDQUErQztJQUMvQyxnQkFBZ0I7SUFDaEIsY0FBYztJQUNkLGlCQUFpQjtJQUNqQix5Q0FBeUM7RUFDM0M7RUFDQTtJQUNFLCtDQUErQztJQUMvQyxnQkFBZ0I7SUFDaEIsY0FBYztJQUNkLGlCQUFpQjtJQUNqQix5Q0FBeUM7RUFDM0M7RUFDQTtJQUNFLCtDQUErQztJQUMvQyxnQkFBZ0I7SUFDaEIsY0FBYztJQUNkLGlCQUFpQjtJQUNqQix5Q0FBeUM7RUFDM0M7RUFDQTtJQUNFLHNCQUFzQjtFQUN4QjtFQUNBO0lBQ0UsY0FBYztJQUNkLGdCQUFnQjtJQUNoQixjQUFjO0VBQ2hCO0VBQ0E7SUFDRSxZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLGNBQWM7RUFDaEI7RUFDQTtJQUNFLHFCQUFxQjtJQUNyQix3Q0FBd0M7SUFDeEMsZUFBZTtFQUNqQjtFQUNBO0lBQ0UsZUFBZTtFQUNqQjtFQUNBO0lBQ0UsZUFBZTtJQUNmLHVCQUF1QjtJQUN2QixnQkFBZ0I7SUFDaEIseUJBQXlCO0lBQ3pCLHlCQUF5QjtFQUMzQjtFQUNBO0lBQ0UsZUFBZTtJQUNmLHVCQUF1QjtJQUN2QixnQkFBZ0I7SUFDaEIsY0FBYztJQUNkLHlCQUF5QjtFQUMzQjtFQUdBO0lBQ0UsZUFBZTtJQUNmLHNCQUFzQjtFQUN4QjtFQUNBO01BQ0ksa0JBQWtCO01BQ2xCLGFBQWE7TUFDYixhQUFhO01BQ2IsY0FBYztNQUNkLFdBQVc7TUFDWCxZQUFZO01BQ1osb0JBQW9CO01BQ3BCLFdBQVc7TUFDWCxzQkFBc0I7TUFDdEIseUJBQXlCO0VBQzdCO0VBQ0E7TUFDSSxrQkFBa0I7TUFDbEIsYUFBYTtNQUNiLGNBQWM7TUFDZCxjQUFjO01BQ2QsV0FBVztNQUNYLFlBQVk7TUFDWixXQUFXO01BQ1gsbUNBQW1DO0VBQ3ZDO0VBQ0E7TUFDSSxzQkFBc0I7RUFDMUI7RUFDQTtNQUNJLGFBQWE7TUFDYixjQUFjO0VBQ2xCO0VBQ0E7TUFDSSxXQUFXO01BQ1gsWUFBWTtNQUNaLHdOQUF3TjtFQUM1TjtFQUNBO01BQ0ksNEdBQTRHO0VBQ2hIO0VBQ0E7TUFDSSxXQUFXO01BQ1gscUJBQXFCO01BQ3JCLHlCQUF5QjtFQUM3QiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2xlYWQtZ2VuZXJhdGlvbi9sZWFkLWdlbmVyYXRpb24uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wYWdlLXZlbmRvci1sZWFkIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2YzZjNmZjtcclxuICAgIG1hcmdpbi10b3A6IC00cmVtICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIC5wYWdlLXZlbmRvci1sZWFkIC5iZy1sZWZ0LXZlbmRvciB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi8uLi8uLi9hc3NldHMvaW1nL3ZlbmRvci1sZWFkLWxlZnQtYmcuanBnKSxyYWRpYWwtZ3JhZGllbnQocmdiKDIyMCAyMjAgMjU0KSwgcmdiKDIyMCAyMjAgMjU0KSk7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBib3R0b207XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xyXG4gIH1cclxuICAucGFnZS12ZW5kb3ItbGVhZCAubG9naW4tdGl0bGUge1xyXG4gICAgZm9udC1mYW1pbHk6IFwiT3BlbiBTYW5zXCIsIHNhbnMtc2VyaWYgIWltcG9ydGFudDtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICBjb2xvcjogIzFlNTQ4ZDtcclxuICAgIGZvbnQtc2l6ZTogMi4xcmVtO1xyXG4gICAgdGV4dC1zaGFkb3c6IDBweCA2cHggNXB4IHJnYigxNzkgMTc5IDE3OSk7XHJcbiAgfVxyXG4gIC5wYWdlLXZlbmRvci1sZWFkIC5sb2dpbi10aXRsZS0yIHtcclxuICAgIGZvbnQtZmFtaWx5OiBcIk9wZW4gU2Fuc1wiLCBzYW5zLXNlcmlmICFpbXBvcnRhbnQ7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgY29sb3I6ICMxZTU0OGQ7XHJcbiAgICBmb250LXNpemU6IDEuOHJlbTtcclxuICAgIHRleHQtc2hhZG93OiAwcHggNnB4IDVweCByZ2IoMTk1IDE5NSAxOTUpO1xyXG4gIH1cclxuICAucGFnZS12ZW5kb3ItbGVhZCAubGVhZC1sYWJlbCB7XHJcbiAgICBmb250LWZhbWlseTogXCJPcGVuIFNhbnNcIiwgc2Fucy1zZXJpZiAhaW1wb3J0YW50O1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIGNvbG9yOiAjMmMyYjJjO1xyXG4gICAgZm9udC1zaXplOiAxLjNyZW07XHJcbiAgICB0ZXh0LXNoYWRvdzogMHB4IDZweCA1cHggcmdiKDIwNyAyMDcgMjA3KTtcclxuICB9XHJcbiAgLnBhZ2UtdmVuZG9yLWxlYWQgLmNhcmQtZm9vdGVyIHtcclxuICAgIHBhZGRpbmc6IDAuNXJlbSAxLjVyZW07XHJcbiAgfVxyXG4gIC5wYWdlLXZlbmRvci1sZWFkIC5wYWdlLXNjcm9sbCB7XHJcbiAgICBoZWlnaHQ6IDc1LjN2aDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBvdmVyZmxvdzogYXV0bztcclxuICB9XHJcbiAgLnBhZ2UtdmVuZG9yLWxlYWQgLnBhZ2Utdmlldy1zY3JvbGwge1xyXG4gICAgaGVpZ2h0OiA5MXZoO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIG92ZXJmbG93OiBhdXRvO1xyXG4gIH1cclxuICAucGFnZS12ZW5kb3ItbGVhZCAuY3VzdG9tLWZpbGUge1xyXG4gICAgLyogZm9udC1zaXplOi45cmVtOyAqL1xyXG4gICAgLyogaGVpZ2h0OiBjYWxjKDEuOGVtICsgMC44cmVtICsgMnB4KTsgKi9cclxuICAgIGhlaWdodDogMi4yNXJlbTtcclxuICB9XHJcbiAgLnBhZ2UtdmVuZG9yLWxlYWQgLmN1c3RvbS1maWxlLWlucHV0IHtcclxuICAgIGhlaWdodDogMi4yNXJlbTtcclxuICB9XHJcbiAgLnBhZ2UtdmVuZG9yLWxlYWQgLmN1c3RvbS1maWxlLWxhYmVsIHtcclxuICAgIGhlaWdodDogMi4yNXJlbTtcclxuICAgIHBhZGRpbmc6IDAuMjVyZW0gMC41cmVtO1xyXG4gICAgbGluZS1oZWlnaHQ6IDEuNjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZWJlYmViO1xyXG4gIH1cclxuICAucGFnZS12ZW5kb3ItbGVhZCAuY3VzdG9tLWZpbGUtbGFiZWw6OmFmdGVyIHtcclxuICAgIGhlaWdodDogMi4yNXJlbTtcclxuICAgIHBhZGRpbmc6IDAuMjVyZW0gMC41cmVtO1xyXG4gICAgbGluZS1oZWlnaHQ6IDEuNjtcclxuICAgIGNvbG9yOiAjMDAwMDAwO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2RiZGJkYjtcclxuICB9XHJcbiAgXHJcbiAgXHJcbiAgLnBhZ2UtdmVuZG9yLWxlYWQgLmN1c3RvbS1jb250cm9sLWxhYmVsIHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIC8qIGZvbnQtc2l6ZTogLjlyZW07ICovXHJcbiAgfVxyXG4gIC5wYWdlLXZlbmRvci1sZWFkIC5jdXN0b20tY29udHJvbC1sYWJlbDo6YmVmb3JlIHtcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICB0b3A6IDAuMTI1cmVtO1xyXG4gICAgICBsZWZ0OiAtMS44cmVtO1xyXG4gICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgd2lkdGg6IDFyZW07XHJcbiAgICAgIGhlaWdodDogMXJlbTtcclxuICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbiAgICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICAgIGJvcmRlcjogIzg3ODc4NyBzb2xpZCAxcHg7XHJcbiAgfVxyXG4gIC5wYWdlLXZlbmRvci1sZWFkIC5jdXN0b20tY29udHJvbC1sYWJlbDo6YWZ0ZXIge1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIHRvcDogLTAuMTFyZW07XHJcbiAgICAgIGxlZnQ6IC0yLjA4cmVtO1xyXG4gICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgd2lkdGg6IDFyZW07XHJcbiAgICAgIGhlaWdodDogMXJlbTtcclxuICAgICAgY29udGVudDogXCJcIjtcclxuICAgICAgYmFja2dyb3VuZDogbm8tcmVwZWF0IDUwJSAvIDUwJSA1MCU7XHJcbiAgfVxyXG4gIC5wYWdlLXZlbmRvci1sZWFkIC5jdXN0b20tY2hlY2tib3ggLmN1c3RvbS1jb250cm9sLWxhYmVsOjpiZWZvcmUge1xyXG4gICAgICBib3JkZXItcmFkaXVzOiAwLjI1cmVtO1xyXG4gIH1cclxuICAucGFnZS12ZW5kb3ItbGVhZCAuY3VzdG9tLWNvbnRyb2wtbGFiZWw6OmJlZm9yZSwgLnBhZ2UtdmVuZG9yLWxlYWQgLmN1c3RvbS1jb250cm9sLWxhYmVsOjphZnRlciB7XHJcbiAgICAgIHdpZHRoOiAxLjFyZW07XHJcbiAgICAgIGhlaWdodDogMS4xcmVtO1xyXG4gIH1cclxuICAucGFnZS12ZW5kb3ItbGVhZCAuY3VzdG9tLWNoZWNrYm94IC5jdXN0b20tY29udHJvbC1pbnB1dDpjaGVja2VkIH4gLmN1c3RvbS1jb250cm9sLWxhYmVsOjphZnRlciB7XHJcbiAgICAgIHdpZHRoOiAyM3B4O1xyXG4gICAgICBoZWlnaHQ6IDIzcHg7XHJcbiAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChkYXRhOmltYWdlL3N2Zyt4bWw7Y2hhcnNldD11dGY4LCUzQ3N2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9JzAgMCA4IDgnJTNFJTNDcGF0aCBmaWxsPSclMjNmZmYnIGQ9J002LjU2NC43NWwtMy41OSAzLjYxMi0xLjUzOC0xLjU1TDAgNC4yNiAyLjk3NCA3LjI1IDggMi4xOTN6Jy8lM0UlM0Mvc3ZnJTNFKTtcclxuICB9XHJcbiAgLnBhZ2UtdmVuZG9yLWxlYWQgLmN1c3RvbS1jb250cm9sLWxhYmVsOjpiZWZvcmUsIC5wYWdlLXZlbmRvci1sZWFkIC5jdXN0b20tZmlsZS1sYWJlbCwgLmN1c3RvbS1zZWxlY3Qge1xyXG4gICAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuMTVzIGVhc2UtaW4tb3V0LCBib3JkZXItY29sb3IgMC4xNXMgZWFzZS1pbi1vdXQsIGJveC1zaGFkb3cgMC4xNXMgZWFzZS1pbi1vdXQ7XHJcbiAgfVxyXG4gIC5wYWdlLXZlbmRvci1sZWFkIC5jdXN0b20tY29udHJvbC1pbnB1dDpjaGVja2VkIH4gLmN1c3RvbS1jb250cm9sLWxhYmVsOjpiZWZvcmUge1xyXG4gICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgYm9yZGVyLWNvbG9yOiAjMGUxNDFlO1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMGUxNDFlO1xyXG4gIH1cclxuICAiXX0= */");

/***/ }),

/***/ "./src/app/pages/lead-generation/lead-generation.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/pages/lead-generation/lead-generation.component.ts ***!
  \********************************************************************/
/*! exports provided: LeadGenerationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LeadGenerationComponent", function() { return LeadGenerationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_services_api_handler_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/api-handler.service */ "./src/app/services/api-handler.service.ts");
/* harmony import */ var src_app_services_constant_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/constant.utils */ "./src/app/services/constant.utils.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");








let LeadGenerationComponent = class LeadGenerationComponent {
    constructor(router, apiHandler, http, location) {
        this.router = router;
        this.apiHandler = apiHandler;
        this.http = http;
        this.location = location;
        this.requestJson = {
            fkContUs: '', contUsOther: '', companyName: '', emailId: '', mobileNo: '', fkCity: '',
            cityOther: '', fkSerProvideType: '', serProvideTypeOther: '', fkSerCategoryDesc: '', serCategoryDescOther: '',
            fkFirmType: '', firmTypeOther: '', fkTurnOver: '', fkEmpCount: '', fkCreditHCap: '', fkExpIntTurnRenovation: '',
            requesterEmailId: '', firstName: '', lastName: ''
        };
        this.alertResponse = { message: '', status: '', route: '' };
        // userTypeList=[];
        this.cityMst = [];
        this.contactUsMst = [];
        this.creditCapacityMst = [];
        this.empStrengthMst = [];
        this.experienceMst = [];
        this.firmTypeMst = [];
        this.serviceCategoryMst = [];
        this.serviceTypeMst = [];
        this.turnOverMst = [];
    }
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
        ref.apiHandler.getLeadGenerationMaster((response) => {
            console.log(JSON.stringify(response));
            if (response.sts === src_app_services_constant_utils__WEBPACK_IMPORTED_MODULE_6__["Constant"].SUCCESS_STATUS) {
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
                    ref.formData.controls.fkCity.setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required]);
                    ref.formData.controls.fkCity.updateValueAndValidity();
                    if (temp && temp.length > 0) {
                        ref.formData.get('fkCity').patchValue($('#city').val());
                    }
                    else {
                        ref.formData.get('fkCity').patchValue(null);
                    }
                });
                $('#serviceType').SumoSelect({
                    okCancelInMulti: true,
                    selectAll: true, search: true, placeholder: 'Select service type'
                });
                $('#serviceType').on('change', () => {
                    console.log('on change serviceType select');
                    const temp = $('#serviceType').val();
                    ref.formData.controls.fkSerProvideType.setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required]);
                    ref.formData.controls.fkSerProvideType.updateValueAndValidity();
                    if (temp && temp.length > 0) {
                        ref.formData.get('fkSerProvideType').patchValue($('#serviceType').val());
                    }
                    else {
                        ref.formData.get('fkSerProvideType').patchValue(null);
                    }
                });
            }, 600);
        }, (error) => {
            console.log(error);
        });
    }
    createForm() {
        const ref = this;
        ref.requestJson = {
            fkContUs: '', contUsOther: '', companyName: '', emailId: '', mobileNo: '', fkCity: '',
            cityOther: '', fkSerProvideType: '', serProvideTypeOther: '', fkSerCategoryDesc: '', serCategoryDescOther: '',
            fkFirmType: '', firmTypeOther: '', fkTurnOver: '', fkEmpCount: '', fkCreditHCap: '', fkExpIntTurnRenovation: '',
            requesterEmailId: '', firstName: '', lastName: ''
        };
        ref.formData = new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormGroup"]({
            fkContUs: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required]),
            contUsOther: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]({ value: '', disabled: true }, [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required]),
            companyName: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required]),
            emailId: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required]),
            mobileNo: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required]),
            fkCity: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"](''),
            cityOther: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]({ value: '', disabled: true }, [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required]),
            fkSerProvideType: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"](''),
            serProvideTypeOther: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]({ value: '', disabled: true }),
            fkSerCategoryDesc: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required]),
            serCategoryDescOther: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]({ value: '', disabled: true }),
            fkFirmType: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required]),
            firmTypeOther: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]({ value: '', disabled: true }),
            fkTurnOver: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required]),
            fkEmpCount: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required]),
            fkCreditHCap: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required]),
            fkExpIntTurnRenovation: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required]),
            requesterEmailId: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required]),
            firstName: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required]),
            lastName: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required])
        });
        ref.formData.get('fkContUs').valueChanges.subscribe(value => {
            if (value) {
                if (value.trim() === 'OT') {
                    ref.formData.get('contUsOther').enable();
                    ref.formData.controls.contUsOther.setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required]);
                    ref.formData.controls.contUsOther.updateValueAndValidity();
                }
                else {
                    ref.formData.get('contUsOther').disable();
                    ref.formData.controls.contUsOther.clearValidators();
                    ref.formData.controls.contUsOther.updateValueAndValidity();
                    ref.formData.get('contUsOther').patchValue('');
                }
                ref.formData.get('fkContUs').patchValue(value.trim(), { emitEvent: false });
            }
            else {
                ref.formData.get('fkContUs').patchValue(value, { emitEvent: false });
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
                    ref.formData.controls.serCategoryDescOther.setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required]);
                    ref.formData.controls.serCategoryDescOther.updateValueAndValidity();
                }
                else {
                    ref.formData.get('serCategoryDescOther').disable();
                    ref.formData.controls.serCategoryDescOther.clearValidators();
                    ref.formData.controls.serCategoryDescOther.updateValueAndValidity();
                    ref.formData.get('serCategoryDescOther').patchValue('');
                }
                ref.formData.get('fkSerCategoryDesc').patchValue(value.trim(), { emitEvent: false });
            }
            else {
                ref.formData.get('fkSerCategoryDesc').patchValue(value, { emitEvent: false });
            }
        });
        ref.formData.get('fkFirmType').valueChanges.subscribe(value => {
            if (value) {
                if (value.trim() === 'OT') {
                    ref.formData.get('firmTypeOther').enable();
                    ref.formData.controls.firmTypeOther.setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required]);
                    ref.formData.controls.firmTypeOther.updateValueAndValidity();
                }
                else {
                    ref.formData.get('firmTypeOther').disable();
                    ref.formData.controls.firmTypeOther.clearValidators();
                    ref.formData.controls.firmTypeOther.updateValueAndValidity();
                    ref.formData.get('firmTypeOther').patchValue('');
                }
                ref.formData.get('fkFirmType').patchValue(value.trim(), { emitEvent: false });
            }
            else {
                ref.formData.get('fkFirmType').patchValue(value, { emitEvent: false });
            }
        });
    }
    onSubmit() {
        const ref = this;
        // console.log($('#city').val())
        const tempObject = ref.formData.value;
        ref.requestJson = tempObject;
        console.log(JSON.stringify(ref.requestJson));
        ref.apiHandler.saveLead(ref.requestJson, (response) => {
            console.log(JSON.stringify(response));
            setTimeout(() => {
                $('#alertMsg').modal('show');
            }, 1000);
            if (response.sts === src_app_services_constant_utils__WEBPACK_IMPORTED_MODULE_6__["Constant"].SUCCESS_STATUS) {
                ref.alertResponse.message = src_app_services_constant_utils__WEBPACK_IMPORTED_MODULE_6__["Constant"].SUCCESS_MESSAGE;
                ref.alertResponse.route = '';
            }
            else {
                ref.alertResponse.message = response.msg;
            }
            ref.alertResponse.status = response.sts;
        }, (error) => {
            setTimeout(() => {
                $('#alertMsg').modal('show');
            }, 1000);
            ref.alertResponse.message = src_app_services_constant_utils__WEBPACK_IMPORTED_MODULE_6__["Constant"].ERROR_MESSAGE;
            ref.alertResponse.status = src_app_services_constant_utils__WEBPACK_IMPORTED_MODULE_6__["Constant"].ERROR_STATUS;
            ref.alertResponse.route = '';
            console.log(error);
        });
    }
    oncitySelect() {
        const ref = this;
        console.log('oncitySelect');
        console.log($('#city').val());
    }
    onBack() {
        const ref = this;
        ref.location.back();
    }
};
LeadGenerationComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: src_app_services_api_handler_service__WEBPACK_IMPORTED_MODULE_5__["ApiHandlerService"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"] }
];
LeadGenerationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-lead-generation',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./lead-generation.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/lead-generation/lead-generation.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./lead-generation.component.css */ "./src/app/pages/lead-generation/lead-generation.component.css")).default]
    })
], LeadGenerationComponent);



/***/ }),

/***/ "./src/app/pages/lead-management/lead-management.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/pages/lead-management/lead-management.component.css ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2xlYWQtbWFuYWdlbWVudC9sZWFkLW1hbmFnZW1lbnQuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/pages/lead-management/lead-management.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/pages/lead-management/lead-management.component.ts ***!
  \********************************************************************/
/*! exports provided: LeadManagementComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LeadManagementComponent", function() { return LeadManagementComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let LeadManagementComponent = class LeadManagementComponent {
    constructor() { }
    ngOnInit() {
    }
};
LeadManagementComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-lead-management',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./lead-management.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/lead-management/lead-management.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./lead-management.component.css */ "./src/app/pages/lead-management/lead-management.component.css")).default]
    })
], LeadManagementComponent);



/***/ }),

/***/ "./src/app/pages/login/login.component.css":
/*!*************************************************!*\
  !*** ./src/app/pages/login/login.component.css ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".login-bg {\r\n  font-family:\"Open Sans\", sans-serif;\r\n    font-size: .9rem;\r\n    font-weight: 400;\r\n    line-height: 1.5;\r\n    color:#222222;\r\n    background-color: #FF491C;\r\nbackground-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 800 400'%3E%3Cdefs%3E%3CradialGradient id='a' cx='396' cy='281' r='514' gradientUnits='userSpaceOnUse'%3E%3Cstop offset='0' stop-color='%23FFF392'/%3E%3Cstop offset='1' stop-color='%23FF491C'/%3E%3C/radialGradient%3E%3ClinearGradient id='b' gradientUnits='userSpaceOnUse' x1='400' y1='148' x2='400' y2='333'%3E%3Cstop offset='0' stop-color='%23FFD68D' stop-opacity='0'/%3E%3Cstop offset='1' stop-color='%23FFD68D' stop-opacity='0.5'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect fill='url(%23a)' width='800' height='400'/%3E%3Cg fill-opacity='0.4'%3E%3Ccircle fill='url(%23b)' cx='267.5' cy='61' r='300'/%3E%3Ccircle fill='url(%23b)' cx='532.5' cy='61' r='300'/%3E%3Ccircle fill='url(%23b)' cx='400' cy='30' r='300'/%3E%3C/g%3E%3C/svg%3E\");\r\nbackground-attachment: fixed;\r\nbackground-size: cover;\r\nmargin-top: -4rem !important;\r\n}\r\n\r\n\r\n.bg-login {\r\n  background-image: url('th-login-bg2.jpg');\r\n  background-position: center;\r\n  background-repeat: no-repeat;\r\n  background-size: cover;\r\n  /* background-color: #f9f9fa; */\r\n  /* border-radius: 10px; */\r\n}\r\n\r\n\r\n.bg-light {\r\n  background-color: #f8f9fa !important;\r\n  font-family:\"Open Sans\", sans-serif !important;\r\n}\r\n\r\n\r\n.bg-panel-login {\r\n  background-color: #a1581d;\r\n}\r\n\r\n\r\n.bg-blackpanel-login {\r\n  background-color: rgb(32 29 25 / 85%);\r\n}\r\n\r\n\r\n.login-title {\r\n  font-family: \"Open Sans\", sans-serif !important;\r\n  font-weight: 500;\r\n  color: #e21e26;\r\n  font-size: 2.1rem;\r\n  text-shadow: 0px 6px 5px rgb(225 225 225);\r\n}\r\n\r\n\r\n.login-title-2 {\r\n  font-family: \"Open Sans\", sans-serif !important;\r\n  font-weight: 500;\r\n  color: #c04f3b;\r\n  font-size: 1.15rem;\r\n  text-shadow: 0px 4px 9px rgb(225 225 225);\r\n}\r\n\r\n\r\n.login-title-3 {\r\n  font-family:\"Open Sans\", sans-serif !important;\r\n  font-weight: bold;\r\n  color: #4a3524;\r\n  font-size: 14px;\r\n  text-shadow: 0px 6px 5px rgba(0, 0, 0, 0.15);\r\n}\r\n\r\n\r\n.forgot-password {\r\n  font-family: \"Open Sans\", sans-serif;\r\n  font-style: normal;\r\n  font-weight: bold;\r\n  font-size: 12px;\r\n  line-height: 36px;\r\n  -webkit-text-decoration-line: underline;\r\n          text-decoration-line: underline;\r\n  color: #464646;\r\n\r\n}\r\n\r\n\r\n.text-powered {\r\n  font-family: \"Open Sans\", sans-serif;\r\n  font-style: italic;\r\n  font-weight: 700;\r\n  font-size: .9rem;\r\n  line-height: 16px;\r\n  color: #8d7500;\r\n}\r\n\r\n\r\n.card {\r\n  box-shadow: none;\r\n  border-radius: 0px;\r\n}\r\n\r\n\r\n.errormsg{\r\n  font-size: 13px;\r\n  color:red;\r\n  font-weight: 500;\r\n}\r\n\r\n\r\n.text-danger {\r\n    color: #D90000 !important;\r\n}\r\n\r\n\r\n/* .login-page {\r\nbackground: linear-gradient(0deg, #ffffff 1.68%, #f8f8f8 100%);\r\n} */\r\n\r\n\r\n.login-page .form-control {\r\ncolor: #020514;\r\nheight: calc(2em + .75rem + 2px);\r\nline-height: 1.5;\r\nbackground:#ffffff;\r\nfont-size: 0.95rem;\r\nfont-weight: 500;\r\nborder:0;\r\nborder-bottom:1px solid #f1f1f2;\r\nborder-radius: 0;\r\npadding-left: 0;\r\n}\r\n\r\n\r\n.login-page .input-group .form-control:active, .login-page .input-group .form-control:focus, .login-page .input-group .form-control:hover {\r\ncolor: #020514;\r\nline-height: 1.5;\r\nbackground:#ffffff;\r\nborder:0;\r\nborder-bottom:1px solid #f1f1f2;\r\nborder-radius: 0;\r\n}\r\n\r\n\r\n.login-page .input-group-addon {\r\npadding: .5rem .75rem;\r\nfont-weight: 400;\r\nline-height: 1.5;\r\ncolor: #ff4519;\r\ntext-align: center;\r\nbackground-color: #ffffff;\r\nborder:0;\r\nborder-bottom:1px solid #f1f1f2;\r\nborder-radius: 0;\r\n}\r\n\r\n\r\n.login-page .input-group-text {\r\npadding: .75rem 1rem;\r\ncolor: #ff4519;\r\nbackground-color:#ffffff;\r\nborder:0;\r\n/* border-right: 4px solid #fff; */\r\nborder-radius: 0;\r\nborder-bottom:1px solid #f1f1f2;\r\n}\r\n\r\n\r\n.login-page .btn {\r\nfont-weight: 600;\r\nbox-shadow: 0px 8px 16px rgb(221 221 221 / 81%);\r\n}\r\n\r\n\r\n.btn-login {\r\ncolor: #fff;\r\nbackground: linear-gradient(0deg, #ff8b4c 1.68%, #ff4519 100%);\r\nborder-color: #ffb184;\r\n}\r\n\r\n\r\n.btn-login:hover {\r\ncolor: #fff;\r\nbackground: linear-gradient(0deg, #ff4519 1.68%, #f83b0c 100%);\r\nborder-color: #ffb184;\r\n}\r\n\r\n\r\n.btn-login:not(:disabled):not(.disabled).active, .btn-login:not(:disabled):not(.disabled):active, .show>.btn-login.dropdown-toggle {\r\ncolor: #fff;\r\nbackground: linear-gradient(0deg, #ff4519 1.68%, #f83b0c 100%);\r\nborder-color: #ffb184;\r\n}\r\n\r\n\r\n.forgot-password {\r\nfont-family: Open Sans;\r\nfont-style: normal;\r\nfont-weight: bold;\r\nfont-size: 12px;\r\nline-height: 36px;\r\n-webkit-text-decoration-line: underline;\r\n        text-decoration-line: underline;\r\ncolor: #464646;\r\n}\r\n\r\n\r\n.forgot-password:hover {\r\n-webkit-text-decoration-line: none;\r\n        text-decoration-line: none;\r\ncolor: #464646;\r\n}\r\n\r\n\r\n/**Sign Up****************************************************************/\r\n\r\n\r\ninput:-webkit-autofill,\r\ninput:-webkit-autofill:hover,\r\ninput:-webkit-autofill:focus,\r\ninput:-webkit-autofill:active {\r\n    transition: background-color 5000s ease-in-out 0s;\r\n    color: rgb(255, 255, 255) !important;\r\n}\r\n\r\n\r\ninput:-webkit-autofill, textarea:-webkit-autofill, select:-webkit-autofill {\r\n    background-color: transparent !important;\r\n    background-image: none !important;\r\n    color: rgb(255, 255, 255) !important;\r\n}\r\n\r\n\r\ntextarea:focus,\r\ninput[type=\"text\"]:focus,\r\ninput[type=\"password\"]:focus,\r\ninput[type=\"datetime\"]:focus,\r\ninput[type=\"datetime-local\"]:focus,\r\ninput[type=\"date\"]:focus,\r\ninput[type=\"month\"]:focus,\r\ninput[type=\"time\"]:focus,\r\ninput[type=\"week\"]:focus,\r\ninput[type=\"number\"]:focus,\r\ninput[type=\"email\"]:focus,\r\ninput[type=\"url\"]:focus,\r\ninput[type=\"search\"]:focus,\r\ninput[type=\"tel\"]:focus,\r\ninput[type=\"color\"]:focus,\r\n.uneditable-input:focus {\r\n  box-shadow: 0 0px 2px rgba(255, 255, 255, 0.075) inset, 0 0 2px rgba(255, 255, 255, 0.6);\r\n  outline: 0 none;\r\n}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG1DQUFtQztJQUNqQyxnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2IseUJBQXlCO0FBQzdCLGcyQkFBZzJCO0FBQ2gyQiw0QkFBNEI7QUFDNUIsc0JBQXNCO0FBQ3RCLDRCQUE0QjtBQUM1Qjs7O0FBR0E7RUFDRSx5Q0FBNkQ7RUFDN0QsMkJBQTJCO0VBQzNCLDRCQUE0QjtFQUM1QixzQkFBc0I7RUFDdEIsK0JBQStCO0VBQy9CLHlCQUF5QjtBQUMzQjs7O0FBQ0E7RUFDRSxvQ0FBb0M7RUFDcEMsOENBQThDO0FBQ2hEOzs7QUFDQTtFQUNFLHlCQUF5QjtBQUMzQjs7O0FBRUE7RUFDRSxxQ0FBcUM7QUFDdkM7OztBQUNBO0VBQ0UsK0NBQStDO0VBQy9DLGdCQUFnQjtFQUNoQixjQUFjO0VBQ2QsaUJBQWlCO0VBQ2pCLHlDQUF5QztBQUMzQzs7O0FBQ0E7RUFDRSwrQ0FBK0M7RUFDL0MsZ0JBQWdCO0VBQ2hCLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIseUNBQXlDO0FBQzNDOzs7QUFDQTtFQUNFLDhDQUE4QztFQUM5QyxpQkFBaUI7RUFDakIsY0FBYztFQUNkLGVBQWU7RUFDZiw0Q0FBNEM7QUFDOUM7OztBQUNBO0VBQ0Usb0NBQW9DO0VBQ3BDLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQix1Q0FBK0I7VUFBL0IsK0JBQStCO0VBQy9CLGNBQWM7O0FBRWhCOzs7QUFDQTtFQUNFLG9DQUFvQztFQUNwQyxrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsY0FBYztBQUNoQjs7O0FBQ0E7RUFDRSxnQkFBZ0I7RUFDaEIsa0JBQWtCO0FBQ3BCOzs7QUFDQTtFQUNFLGVBQWU7RUFDZixTQUFTO0VBQ1QsZ0JBQWdCO0FBQ2xCOzs7QUFDQTtJQUNJLHlCQUF5QjtBQUM3Qjs7O0FBRUE7O0dBRUc7OztBQUNIO0FBQ0EsY0FBYztBQUNkLGdDQUFnQztBQUNoQyxnQkFBZ0I7QUFDaEIsa0JBQWtCO0FBQ2xCLGtCQUFrQjtBQUNsQixnQkFBZ0I7QUFDaEIsUUFBUTtBQUNSLCtCQUErQjtBQUMvQixnQkFBZ0I7QUFDaEIsZUFBZTtBQUNmOzs7QUFDQTtBQUNBLGNBQWM7QUFDZCxnQkFBZ0I7QUFDaEIsa0JBQWtCO0FBQ2xCLFFBQVE7QUFDUiwrQkFBK0I7QUFDL0IsZ0JBQWdCO0FBQ2hCOzs7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQixnQkFBZ0I7QUFDaEIsZ0JBQWdCO0FBQ2hCLGNBQWM7QUFDZCxrQkFBa0I7QUFDbEIseUJBQXlCO0FBQ3pCLFFBQVE7QUFDUiwrQkFBK0I7QUFDL0IsZ0JBQWdCO0FBQ2hCOzs7QUFDQTtBQUNBLG9CQUFvQjtBQUNwQixjQUFjO0FBQ2Qsd0JBQXdCO0FBQ3hCLFFBQVE7QUFDUixrQ0FBa0M7QUFDbEMsZ0JBQWdCO0FBQ2hCLCtCQUErQjtBQUMvQjs7O0FBQ0E7QUFDQSxnQkFBZ0I7QUFDaEIsK0NBQStDO0FBQy9DOzs7QUFDQTtBQUNBLFdBQVc7QUFDWCw4REFBOEQ7QUFDOUQscUJBQXFCO0FBQ3JCOzs7QUFDQTtBQUNBLFdBQVc7QUFDWCw4REFBOEQ7QUFDOUQscUJBQXFCO0FBQ3JCOzs7QUFDQTtBQUNBLFdBQVc7QUFDWCw4REFBOEQ7QUFDOUQscUJBQXFCO0FBQ3JCOzs7QUFDQTtBQUNBLHNCQUFzQjtBQUN0QixrQkFBa0I7QUFDbEIsaUJBQWlCO0FBQ2pCLGVBQWU7QUFDZixpQkFBaUI7QUFDakIsdUNBQStCO1FBQS9CLCtCQUErQjtBQUMvQixjQUFjO0FBQ2Q7OztBQUNBO0FBQ0Esa0NBQTBCO1FBQTFCLDBCQUEwQjtBQUMxQixjQUFjO0FBQ2Q7OztBQUNBLDBFQUEwRTs7O0FBQzFFOzs7O0lBSUksaURBQWlEO0lBQ2pELG9DQUFvQztBQUN4Qzs7O0FBQ0E7SUFDSSx3Q0FBd0M7SUFDeEMsaUNBQWlDO0lBQ2pDLG9DQUFvQztBQUN4Qzs7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7RUFnQkUsd0ZBQXdGO0VBQ3hGLGVBQWU7QUFDakIiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxvZ2luLWJnIHtcclxuICBmb250LWZhbWlseTpcIk9wZW4gU2Fuc1wiLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC1zaXplOiAuOXJlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICBsaW5lLWhlaWdodDogMS41O1xyXG4gICAgY29sb3I6IzIyMjIyMjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGRjQ5MUM7XHJcbmJhY2tncm91bmQtaW1hZ2U6IHVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbCwlM0NzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB3aWR0aD0nMTAwJTI1JyBoZWlnaHQ9JzEwMCUyNScgdmlld0JveD0nMCAwIDgwMCA0MDAnJTNFJTNDZGVmcyUzRSUzQ3JhZGlhbEdyYWRpZW50IGlkPSdhJyBjeD0nMzk2JyBjeT0nMjgxJyByPSc1MTQnIGdyYWRpZW50VW5pdHM9J3VzZXJTcGFjZU9uVXNlJyUzRSUzQ3N0b3Agb2Zmc2V0PScwJyBzdG9wLWNvbG9yPSclMjNGRkYzOTInLyUzRSUzQ3N0b3Agb2Zmc2V0PScxJyBzdG9wLWNvbG9yPSclMjNGRjQ5MUMnLyUzRSUzQy9yYWRpYWxHcmFkaWVudCUzRSUzQ2xpbmVhckdyYWRpZW50IGlkPSdiJyBncmFkaWVudFVuaXRzPSd1c2VyU3BhY2VPblVzZScgeDE9JzQwMCcgeTE9JzE0OCcgeDI9JzQwMCcgeTI9JzMzMyclM0UlM0NzdG9wIG9mZnNldD0nMCcgc3RvcC1jb2xvcj0nJTIzRkZENjhEJyBzdG9wLW9wYWNpdHk9JzAnLyUzRSUzQ3N0b3Agb2Zmc2V0PScxJyBzdG9wLWNvbG9yPSclMjNGRkQ2OEQnIHN0b3Atb3BhY2l0eT0nMC41Jy8lM0UlM0MvbGluZWFyR3JhZGllbnQlM0UlM0MvZGVmcyUzRSUzQ3JlY3QgZmlsbD0ndXJsKCUyM2EpJyB3aWR0aD0nODAwJyBoZWlnaHQ9JzQwMCcvJTNFJTNDZyBmaWxsLW9wYWNpdHk9JzAuNCclM0UlM0NjaXJjbGUgZmlsbD0ndXJsKCUyM2IpJyBjeD0nMjY3LjUnIGN5PSc2MScgcj0nMzAwJy8lM0UlM0NjaXJjbGUgZmlsbD0ndXJsKCUyM2IpJyBjeD0nNTMyLjUnIGN5PSc2MScgcj0nMzAwJy8lM0UlM0NjaXJjbGUgZmlsbD0ndXJsKCUyM2IpJyBjeD0nNDAwJyBjeT0nMzAnIHI9JzMwMCcvJTNFJTNDL2clM0UlM0Mvc3ZnJTNFXCIpO1xyXG5iYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xyXG5iYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG5tYXJnaW4tdG9wOiAtNHJlbSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5cclxuLmJnLWxvZ2luIHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi8uLi9hc3NldHMvaW1nL3RoLWxvZ2luLWJnMi5qcGdcIik7XHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiAjZjlmOWZhOyAqL1xyXG4gIC8qIGJvcmRlci1yYWRpdXM6IDEwcHg7ICovXHJcbn1cclxuLmJnLWxpZ2h0IHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjhmOWZhICFpbXBvcnRhbnQ7XHJcbiAgZm9udC1mYW1pbHk6XCJPcGVuIFNhbnNcIiwgc2Fucy1zZXJpZiAhaW1wb3J0YW50O1xyXG59XHJcbi5iZy1wYW5lbC1sb2dpbiB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ExNTgxZDtcclxufVxyXG5cclxuLmJnLWJsYWNrcGFuZWwtbG9naW4ge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigzMiAyOSAyNSAvIDg1JSk7XHJcbn1cclxuLmxvZ2luLXRpdGxlIHtcclxuICBmb250LWZhbWlseTogXCJPcGVuIFNhbnNcIiwgc2Fucy1zZXJpZiAhaW1wb3J0YW50O1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgY29sb3I6ICNlMjFlMjY7XHJcbiAgZm9udC1zaXplOiAyLjFyZW07XHJcbiAgdGV4dC1zaGFkb3c6IDBweCA2cHggNXB4IHJnYigyMjUgMjI1IDIyNSk7XHJcbn1cclxuLmxvZ2luLXRpdGxlLTIge1xyXG4gIGZvbnQtZmFtaWx5OiBcIk9wZW4gU2Fuc1wiLCBzYW5zLXNlcmlmICFpbXBvcnRhbnQ7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICBjb2xvcjogI2MwNGYzYjtcclxuICBmb250LXNpemU6IDEuMTVyZW07XHJcbiAgdGV4dC1zaGFkb3c6IDBweCA0cHggOXB4IHJnYigyMjUgMjI1IDIyNSk7XHJcbn1cclxuLmxvZ2luLXRpdGxlLTMge1xyXG4gIGZvbnQtZmFtaWx5OlwiT3BlbiBTYW5zXCIsIHNhbnMtc2VyaWYgIWltcG9ydGFudDtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBjb2xvcjogIzRhMzUyNDtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgdGV4dC1zaGFkb3c6IDBweCA2cHggNXB4IHJnYmEoMCwgMCwgMCwgMC4xNSk7XHJcbn1cclxuLmZvcmdvdC1wYXNzd29yZCB7XHJcbiAgZm9udC1mYW1pbHk6IFwiT3BlbiBTYW5zXCIsIHNhbnMtc2VyaWY7XHJcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxuICBsaW5lLWhlaWdodDogMzZweDtcclxuICB0ZXh0LWRlY29yYXRpb24tbGluZTogdW5kZXJsaW5lO1xyXG4gIGNvbG9yOiAjNDY0NjQ2O1xyXG5cclxufVxyXG4udGV4dC1wb3dlcmVkIHtcclxuICBmb250LWZhbWlseTogXCJPcGVuIFNhbnNcIiwgc2Fucy1zZXJpZjtcclxuICBmb250LXN0eWxlOiBpdGFsaWM7XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICBmb250LXNpemU6IC45cmVtO1xyXG4gIGxpbmUtaGVpZ2h0OiAxNnB4O1xyXG4gIGNvbG9yOiAjOGQ3NTAwO1xyXG59XHJcbi5jYXJkIHtcclxuICBib3gtc2hhZG93OiBub25lO1xyXG4gIGJvcmRlci1yYWRpdXM6IDBweDtcclxufVxyXG4uZXJyb3Jtc2d7XHJcbiAgZm9udC1zaXplOiAxM3B4O1xyXG4gIGNvbG9yOnJlZDtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG59XHJcbi50ZXh0LWRhbmdlciB7XHJcbiAgICBjb2xvcjogI0Q5MDAwMCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4vKiAubG9naW4tcGFnZSB7XHJcbmJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgwZGVnLCAjZmZmZmZmIDEuNjglLCAjZjhmOGY4IDEwMCUpO1xyXG59ICovXHJcbi5sb2dpbi1wYWdlIC5mb3JtLWNvbnRyb2wge1xyXG5jb2xvcjogIzAyMDUxNDtcclxuaGVpZ2h0OiBjYWxjKDJlbSArIC43NXJlbSArIDJweCk7XHJcbmxpbmUtaGVpZ2h0OiAxLjU7XHJcbmJhY2tncm91bmQ6I2ZmZmZmZjtcclxuZm9udC1zaXplOiAwLjk1cmVtO1xyXG5mb250LXdlaWdodDogNTAwO1xyXG5ib3JkZXI6MDtcclxuYm9yZGVyLWJvdHRvbToxcHggc29saWQgI2YxZjFmMjtcclxuYm9yZGVyLXJhZGl1czogMDtcclxucGFkZGluZy1sZWZ0OiAwO1xyXG59XHJcbi5sb2dpbi1wYWdlIC5pbnB1dC1ncm91cCAuZm9ybS1jb250cm9sOmFjdGl2ZSwgLmxvZ2luLXBhZ2UgLmlucHV0LWdyb3VwIC5mb3JtLWNvbnRyb2w6Zm9jdXMsIC5sb2dpbi1wYWdlIC5pbnB1dC1ncm91cCAuZm9ybS1jb250cm9sOmhvdmVyIHtcclxuY29sb3I6ICMwMjA1MTQ7XHJcbmxpbmUtaGVpZ2h0OiAxLjU7XHJcbmJhY2tncm91bmQ6I2ZmZmZmZjtcclxuYm9yZGVyOjA7XHJcbmJvcmRlci1ib3R0b206MXB4IHNvbGlkICNmMWYxZjI7XHJcbmJvcmRlci1yYWRpdXM6IDA7XHJcbn1cclxuLmxvZ2luLXBhZ2UgLmlucHV0LWdyb3VwLWFkZG9uIHtcclxucGFkZGluZzogLjVyZW0gLjc1cmVtO1xyXG5mb250LXdlaWdodDogNDAwO1xyXG5saW5lLWhlaWdodDogMS41O1xyXG5jb2xvcjogI2ZmNDUxOTtcclxudGV4dC1hbGlnbjogY2VudGVyO1xyXG5iYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xyXG5ib3JkZXI6MDtcclxuYm9yZGVyLWJvdHRvbToxcHggc29saWQgI2YxZjFmMjtcclxuYm9yZGVyLXJhZGl1czogMDtcclxufVxyXG4ubG9naW4tcGFnZSAuaW5wdXQtZ3JvdXAtdGV4dCB7XHJcbnBhZGRpbmc6IC43NXJlbSAxcmVtO1xyXG5jb2xvcjogI2ZmNDUxOTtcclxuYmFja2dyb3VuZC1jb2xvcjojZmZmZmZmO1xyXG5ib3JkZXI6MDtcclxuLyogYm9yZGVyLXJpZ2h0OiA0cHggc29saWQgI2ZmZjsgKi9cclxuYm9yZGVyLXJhZGl1czogMDtcclxuYm9yZGVyLWJvdHRvbToxcHggc29saWQgI2YxZjFmMjtcclxufVxyXG4ubG9naW4tcGFnZSAuYnRuIHtcclxuZm9udC13ZWlnaHQ6IDYwMDtcclxuYm94LXNoYWRvdzogMHB4IDhweCAxNnB4IHJnYigyMjEgMjIxIDIyMSAvIDgxJSk7XHJcbn1cclxuLmJ0bi1sb2dpbiB7XHJcbmNvbG9yOiAjZmZmO1xyXG5iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMGRlZywgI2ZmOGI0YyAxLjY4JSwgI2ZmNDUxOSAxMDAlKTtcclxuYm9yZGVyLWNvbG9yOiAjZmZiMTg0O1xyXG59XHJcbi5idG4tbG9naW46aG92ZXIge1xyXG5jb2xvcjogI2ZmZjtcclxuYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDBkZWcsICNmZjQ1MTkgMS42OCUsICNmODNiMGMgMTAwJSk7XHJcbmJvcmRlci1jb2xvcjogI2ZmYjE4NDtcclxufVxyXG4uYnRuLWxvZ2luOm5vdCg6ZGlzYWJsZWQpOm5vdCguZGlzYWJsZWQpLmFjdGl2ZSwgLmJ0bi1sb2dpbjpub3QoOmRpc2FibGVkKTpub3QoLmRpc2FibGVkKTphY3RpdmUsIC5zaG93Pi5idG4tbG9naW4uZHJvcGRvd24tdG9nZ2xlIHtcclxuY29sb3I6ICNmZmY7XHJcbmJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgwZGVnLCAjZmY0NTE5IDEuNjglLCAjZjgzYjBjIDEwMCUpO1xyXG5ib3JkZXItY29sb3I6ICNmZmIxODQ7XHJcbn1cclxuLmZvcmdvdC1wYXNzd29yZCB7XHJcbmZvbnQtZmFtaWx5OiBPcGVuIFNhbnM7XHJcbmZvbnQtc3R5bGU6IG5vcm1hbDtcclxuZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbmZvbnQtc2l6ZTogMTJweDtcclxubGluZS1oZWlnaHQ6IDM2cHg7XHJcbnRleHQtZGVjb3JhdGlvbi1saW5lOiB1bmRlcmxpbmU7XHJcbmNvbG9yOiAjNDY0NjQ2O1xyXG59XHJcbi5mb3Jnb3QtcGFzc3dvcmQ6aG92ZXIge1xyXG50ZXh0LWRlY29yYXRpb24tbGluZTogbm9uZTtcclxuY29sb3I6ICM0NjQ2NDY7XHJcbn1cclxuLyoqU2lnbiBVcCoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcbmlucHV0Oi13ZWJraXQtYXV0b2ZpbGwsXHJcbmlucHV0Oi13ZWJraXQtYXV0b2ZpbGw6aG92ZXIsXHJcbmlucHV0Oi13ZWJraXQtYXV0b2ZpbGw6Zm9jdXMsXHJcbmlucHV0Oi13ZWJraXQtYXV0b2ZpbGw6YWN0aXZlIHtcclxuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgNTAwMHMgZWFzZS1pbi1vdXQgMHM7XHJcbiAgICBjb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpICFpbXBvcnRhbnQ7XHJcbn1cclxuaW5wdXQ6LXdlYmtpdC1hdXRvZmlsbCwgdGV4dGFyZWE6LXdlYmtpdC1hdXRvZmlsbCwgc2VsZWN0Oi13ZWJraXQtYXV0b2ZpbGwge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IG5vbmUgIWltcG9ydGFudDtcclxuICAgIGNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSkgIWltcG9ydGFudDtcclxufVxyXG50ZXh0YXJlYTpmb2N1cyxcclxuaW5wdXRbdHlwZT1cInRleHRcIl06Zm9jdXMsXHJcbmlucHV0W3R5cGU9XCJwYXNzd29yZFwiXTpmb2N1cyxcclxuaW5wdXRbdHlwZT1cImRhdGV0aW1lXCJdOmZvY3VzLFxyXG5pbnB1dFt0eXBlPVwiZGF0ZXRpbWUtbG9jYWxcIl06Zm9jdXMsXHJcbmlucHV0W3R5cGU9XCJkYXRlXCJdOmZvY3VzLFxyXG5pbnB1dFt0eXBlPVwibW9udGhcIl06Zm9jdXMsXHJcbmlucHV0W3R5cGU9XCJ0aW1lXCJdOmZvY3VzLFxyXG5pbnB1dFt0eXBlPVwid2Vla1wiXTpmb2N1cyxcclxuaW5wdXRbdHlwZT1cIm51bWJlclwiXTpmb2N1cyxcclxuaW5wdXRbdHlwZT1cImVtYWlsXCJdOmZvY3VzLFxyXG5pbnB1dFt0eXBlPVwidXJsXCJdOmZvY3VzLFxyXG5pbnB1dFt0eXBlPVwic2VhcmNoXCJdOmZvY3VzLFxyXG5pbnB1dFt0eXBlPVwidGVsXCJdOmZvY3VzLFxyXG5pbnB1dFt0eXBlPVwiY29sb3JcIl06Zm9jdXMsXHJcbi51bmVkaXRhYmxlLWlucHV0OmZvY3VzIHtcclxuICBib3gtc2hhZG93OiAwIDBweCAycHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjA3NSkgaW5zZXQsIDAgMCAycHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjYpO1xyXG4gIG91dGxpbmU6IDAgbm9uZTtcclxufVxyXG5cclxuIl19 */");

/***/ }),

/***/ "./src/app/pages/login/login.component.ts":
/*!************************************************!*\
  !*** ./src/app/pages/login/login.component.ts ***!
  \************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_services_api_handler_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/api-handler.service */ "./src/app/services/api-handler.service.ts");





let LoginComponent = class LoginComponent {
    constructor(router, apiHandler, http) {
        this.router = router;
        this.apiHandler = apiHandler;
        this.http = http;
        // @ViewChild('loginForm',{static: false}) mainForm:NgForm;
        // userId=new FormControl('',Validators.required);
        this.requestJson = { userId: '', password: '' };
        this.loginData = {
            userId: "",
            password: "",
        };
        this.valid = true;
        this.forgotPasswordObj = {
            userId: ""
        };
    }
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
    submitLogin(loginData) {
        var ref = this;
        ref.valid = loginData.valid;
        if (ref.valid) {
            var temp = {};
            // temp["pernr"] = loginData.value.userid;
            temp["userId"] = loginData.value.userId;
            temp["password"] = loginData.value.password;
            ref.apiHandler.authentication(temp, (response) => {
                console.log(JSON.stringify(response));
                if (response.sts === 'success') {
                    //For direct  login without force changepassword uncomment below lines
                    // window.localStorage.setItem("userId", JSON.stringify(loginData.value.userId));
                    // window.localStorage.setItem("loginData", JSON.stringify(response.content));
                    // window.localStorage.setItem("sideMenu", JSON.stringify(response.content.menuList));
                    // window.localStorage.setItem("loginToken", JSON.stringify(response.tkn));
                    // ref.router.navigate(['main-layout/dashboard']);
                    //For force change password uncomment below lines
                    var checkFlag = response.content;
                    if (checkFlag.isPwdChanged == 'Y') {
                        window.localStorage.setItem("loginData", JSON.stringify(response.content));
                        window.localStorage.setItem("sideMenu", JSON.stringify(response.content.menuList));
                        window.localStorage.setItem("loginToken", JSON.stringify(response.tkn));
                        ref.router.navigate(['main-layout/dashboard']);
                    }
                    else if (checkFlag.isPwdChanged == 'N') {
                        window.localStorage.setItem("loginData", JSON.stringify(response.content));
                        window.localStorage.setItem("sideMenu", JSON.stringify(response.content.menuList));
                        window.localStorage.setItem("loginToken", JSON.stringify(response.tkn));
                        ref.router.navigate(['forceChangePassword']);
                    }
                }
                else {
                    ref.callAlert("error", response.msg, "not");
                    loginData.reset();
                }
            }, (error) => {
                ref.callAlert("error", "Failed", "not");
                loginData.reset();
                console.log(error);
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
            }
            else {
                ref.forgotPasswordObj.userId = "";
                ref.callAlert("error", response.content, "not");
            }
        }, (error) => {
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
    openForgetPopup() {
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
        }
        else {
            $("#alertMsg1").modal("hide");
        }
    }
};
LoginComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: src_app_services_api_handler_service__WEBPACK_IMPORTED_MODULE_4__["ApiHandlerService"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
];
LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-login',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/login/login.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./login.component.css */ "./src/app/pages/login/login.component.css")).default]
    })
], LoginComponent);



/***/ }),

/***/ "./src/app/pages/main-layout/main-layout.component.css":
/*!*************************************************************!*\
  !*** ./src/app/pages/main-layout/main-layout.component.css ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL21haW4tbGF5b3V0L21haW4tbGF5b3V0LmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/pages/main-layout/main-layout.component.ts":
/*!************************************************************!*\
  !*** ./src/app/pages/main-layout/main-layout.component.ts ***!
  \************************************************************/
/*! exports provided: MainLayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainLayoutComponent", function() { return MainLayoutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let MainLayoutComponent = class MainLayoutComponent {
    constructor() {
        // this.loadScript() 
    }
    ngOnInit() {
        if (!localStorage.getItem('foo')) {
            localStorage.setItem('foo', 'no reload');
            location.reload();
        }
        else {
            // localStorage.removeItem('foo')
        }
    }
    loadScript() {
        var dynamicScripts = ["assets/js/app-menu.js"];
        for (var i = 0; i < dynamicScripts.length; i++) {
            let node = document.createElement('script');
            node.src = dynamicScripts[i];
            node.type = 'text/javascript';
            node.async = false;
            node.charset = 'utf-8';
            document.getElementsByTagName('head')[0].appendChild(node);
        }
    }
};
MainLayoutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-main-layout',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./main-layout.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/main-layout/main-layout.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./main-layout.component.css */ "./src/app/pages/main-layout/main-layout.component.css")).default]
    })
], MainLayoutComponent);



/***/ }),

/***/ "./src/app/pages/menu-authorization/menu-authorization.component.css":
/*!***************************************************************************!*\
  !*** ./src/app/pages/menu-authorization/menu-authorization.component.css ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL21lbnUtYXV0aG9yaXphdGlvbi9tZW51LWF1dGhvcml6YXRpb24uY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/pages/menu-authorization/menu-authorization.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/pages/menu-authorization/menu-authorization.component.ts ***!
  \**************************************************************************/
/*! exports provided: MenuAuthorizationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuAuthorizationComponent", function() { return MenuAuthorizationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_services_api_handler_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/api-handler.service */ "./src/app/services/api-handler.service.ts");






let MenuAuthorizationComponent = class MenuAuthorizationComponent {
    constructor(router, apiHandler, http) {
        this.router = router;
        this.apiHandler = apiHandler;
        this.http = http;
        this.profileMenuList = [];
        this.profileList = [];
        this.requestJson = {
            menu: [{ id: 0, menuId: 1, roleId: 'A', actionArray: [] },
                { id: 0, menuId: 2, roleId: 'A', actionArray: [] },
                {
                    id: 0, menuId: 4, roleId: 'A',
                    actionArray: [{ id: 0, action: 'V', isActive: 'Y' }]
                },
                {
                    id: 0, menuId: 3, roleId: 'A',
                    actionArray: [{ id: 0, action: 'E', isActive: 'Y' }, { id: 0, action: 'U', isActive: 'Y' }, { id: 0, action: 'D', isActive: 'Y' }, { id: 0, action: 'V', isActive: 'Y' }]
                },
                {
                    id: 0, menuId: 5, roleId: 'A', actionArray: [{ id: 0, action: 'E', isActive: 'Y' }, { id: 0, action: 'U', isActive: 'Y' }, { id: 0, action: 'D', isActive: 'Y' },
                        { id: 0, action: 'V', isActive: 'Y' }]
                }
            ]
        };
        this.form = {};
        this.profileCode = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('');
        //new
        this.submitObject = {
            profileCode: ""
        };
        this.profileSelectiveMenuList = [];
        this.NoChangeprofileMenuList = [];
        this.checkFlag = false;
    }
    ngOnInit() {
        const ref = this;
        ref.createForm();
        ref.apiHandler.getMenuList((response) => {
            console.log(JSON.stringify(response));
            if (response.sts.toLowerCase() === "success") {
                ref.profileMenuList = response.content;
                var tempArr = response.content;
                // ref.profileMenuList = tempArr;
                ref.NoChangeprofileMenuList = JSON.stringify(tempArr);
                ref.apiHandler.getMenuRoleMaster((response) => {
                    console.log(JSON.stringify(response));
                    if (response.sts === 'success') {
                        ref.profileList = response.content.roleMst;
                    }
                    else {
                        ref.profileList = [];
                    }
                }, (error) => {
                    ref.profileList = [];
                    console.log(error);
                });
            }
            else {
                ref.profileMenuList = [];
            }
        }, (error) => {
            ref.profileMenuList = [];
            console.log(error);
        });
    }
    onSelectRole() {
        var ref = this;
        // ref.profileMenuList = [];
        ref.apiHandler.getMenuByRole(ref.submitObject.profileCode, (response) => {
            console.log(JSON.stringify(response));
            if (response.sts === 'success') {
                // profileSelectiveMenuList  -On selecting profile response inserted in this array
                // profileMenuList  -OnLoad api response inserted in this array
                ref.profileSelectiveMenuList = response.content;
                ref.checkFlag = true;
                console.log("ref.profileSelectiveMenuList");
                console.log(ref.profileSelectiveMenuList);
                const tempArr = JSON.parse(ref.NoChangeprofileMenuList);
                ref.profileMenuList = tempArr;
                var profileMenuList = ref.profileMenuList;
                console.log(profileMenuList);
                var profileSelectiveMenuList = ref.profileSelectiveMenuList;
                for (var i = 0; i < profileMenuList.length; i++) {
                    profileMenuList[i]["checked"] = false;
                    for (var j = 0; j < profileSelectiveMenuList.length; j++) {
                        if (profileSelectiveMenuList[j].menuName == profileMenuList[i].menuName) {
                            profileMenuList[i].id = profileSelectiveMenuList[j].id;
                            profileMenuList[i].isActive = profileSelectiveMenuList[j].isActive;
                            if (profileSelectiveMenuList[j].isActive == 'Y') {
                                profileMenuList[i].isActive = 'Y';
                                // profileMenuList[i]["checked"] = true;
                                var tempSubProfileMenuList = profileMenuList[i].subMenuList;
                                var checkCount = 0;
                                for (var count = 0; count < tempSubProfileMenuList.length; count++) {
                                    tempSubProfileMenuList[count]["checked"] = false;
                                    var tempSubSelective = profileSelectiveMenuList[j].subMenuList;
                                    for (var countS = 0; countS < tempSubSelective.length; countS++) {
                                        if (tempSubProfileMenuList[count].menuName == tempSubSelective[countS].menuName) {
                                            tempSubProfileMenuList[count].isActive = tempSubSelective[countS].isActive;
                                            tempSubProfileMenuList[count].id = tempSubSelective[countS].id;
                                            if (tempSubSelective[countS].isActive == "Y") {
                                                tempSubProfileMenuList[count].id = tempSubSelective[countS].id;
                                                tempSubProfileMenuList[count].isActive = 'Y';
                                                tempSubProfileMenuList[count]["checked"] = true;
                                            }
                                        }
                                    }
                                }
                                // if(tempSubProfileMenuList.length == 0){
                                //  profileMenuList[i]["checked"] = true;
                                // }
                            }
                            else {
                                // if(profileSelectiveMenuList[j].isActive == 'N'){
                                //   profileMenuList[i].isActive = 'N'
                                //   }
                                // var willSelect = profileMenuList[i].subMenuList;
                                // var alreadySelect = profileSelectiveMenuList[j].subMenuList;
                                // for (var p = 0; p < willSelect.length; p++) {
                                //   willSelect[p]["checked"] = false;
                                //   for (var q = 0; q < alreadySelect.length; q++) {
                                //     if (alreadySelect[q].menuName == willSelect[p].menuName) {
                                //       if (alreadySelect[q].isActive == 'Y') {
                                //         willSelect[p].isActive = 'Y';
                                //         willSelect[p]["checked"] = true;
                                //         willSelect[p].id = alreadySelect[q].id;
                                //       }
                                //     }
                                //   }
                                // }
                                profileSelectiveMenuList[j].isActive;
                            }
                        }
                        else {
                            // var tempSubProfileMenuList = profileMenuList[i].subMenuList;
                            // for (var count = 0; count < tempSubProfileMenuList.length; count++) {
                            //   tempSubProfileMenuList[count].isActive = 'N';
                            //   tempSubProfileMenuList[count]["checked"] = false;
                            // }
                        }
                    }
                }
                var profileMenuListInnerCheck = ref.profileMenuList;
                for (var count = 0; count < profileMenuListInnerCheck.length; count++) {
                    var innerS = profileMenuListInnerCheck[count].subMenuList;
                    var counter1 = 0;
                    for (var countS = 0; countS < innerS.length; countS++) {
                        if (innerS[countS].isActive == "Y") {
                            counter1 = counter1 + 1;
                        }
                    }
                    if (counter1 == innerS.length) {
                        profileMenuListInnerCheck[count]["checked"] = true;
                        if (ref.profileSelectiveMenuList.length == 0) {
                            profileMenuListInnerCheck[count]["checked"] = false;
                        }
                        if (innerS.length == 0) {
                            if (profileMenuListInnerCheck[count].isActive == "Y") {
                                profileMenuListInnerCheck[count]["checked"] = true;
                            }
                            else {
                                profileMenuListInnerCheck[count]["checked"] = false;
                            }
                        }
                    }
                }
                console.log("checked");
                console.log(profileMenuList);
            }
            else {
            }
        }, (error) => {
            console.log(error);
        });
    }
    createForm() {
        const ref = this;
        ref.profileCode = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('');
    }
    onSubmit() {
        const ref = this;
        ref.apiHandler.saveRoleMenuAndActions(ref.requestJson, (response) => {
            console.log(JSON.stringify(response));
            if (response.sts === 'success') {
                alert(response.msg);
            }
        }, (error) => {
            console.log(error);
        });
    }
    checkHeader(menu) {
        var ref = this;
        console.log(menu);
        menu.subMenuList;
        menu.checked = !menu.checked;
        if (menu.checked == true) {
            menu.isActive = "Y";
            if (menu.subMenuList.length > 0) {
                var sub = menu.subMenuList;
                for (var i = 0; i < sub.length; i++) {
                    sub[i].isActive = "Y";
                    sub[i].checked = true;
                }
            }
        }
        else {
            menu.isActive = "N";
            if (menu.subMenuList.length > 0) {
                var sub = menu.subMenuList;
                for (var i = 0; i < sub.length; i++) {
                    sub[i].isActive = "N";
                    sub[i].checked = false;
                }
            }
        }
        console.log("after");
        console.log(menu);
    }
    checkSubHeader(sub, headerMenu) {
        var ref = this;
        console.log(headerMenu);
        console.log(sub);
        if (sub.checked == true) {
            sub.isActive = "N";
            sub.checked = false;
        }
        else {
            sub.isActive = "Y";
            sub.checked = true;
        }
        console.log("after");
        console.log(headerMenu);
        console.log(sub);
        var counter = 0;
        var subArrCheck = headerMenu.subMenuList;
        for (var i = 0; i < subArrCheck.length; i++) {
            if (subArrCheck[i].checked == true) {
                counter = counter + 1;
            }
        }
        if (counter == subArrCheck.length) {
            headerMenu.checked = true;
            headerMenu.isActive = "Y";
        }
        else {
            headerMenu.checked = false;
            headerMenu.isActive = "N";
        }
        if (counter > 0) {
            headerMenu.isActive = "Y";
        }
        console.log(counter);
        console.log(subArrCheck.length);
    }
    submitResult() {
        var ref = this;
        if (ref.checkFlag == false) {
            ref.callAlert("error", "Please click on search", "not");
            return false;
        }
        var tempArr = [];
        console.log("htis array");
        console.log(ref.profileMenuList);
        console.log(ref.profileSelectiveMenuList);
        // for (var p = 0; p < ref.profileMenuList.length; p++) {
        //   var subM = ref.profileMenuList[p].subMenuList
        //   if (subM.length > 0) {
        //     ref.profileMenuList[p].isActive = 'N';
        //     for (var q = 0; q < subM.length; q++) {
        //       if (subM[q].checked == true) {
        //         ref.profileMenuList[p].isActive = 'Y';
        //       }
        //     }
        //   } else {
        //     if (ref.profileMenuList[p].checked == true) {
        //       ref.profileMenuList[p].isActive = 'Y';
        //     }
        //   }
        // }
        console.log("after Y");
        console.log(ref.profileMenuList);
        for (var i = 0; i < ref.profileMenuList.length; i++) {
            if (ref.profileMenuList[i].id == '' && ref.profileMenuList[i].isActive == 'Y') {
                tempArr.push({
                    "id": "",
                    "menuId": ref.profileMenuList[i].menuId,
                    "roleId": ref.submitObject.profileCode,
                    "isActive": ref.profileMenuList[i].isActive,
                    "actionArray": []
                });
            }
            if (ref.profileMenuList[i].id != '') {
                tempArr.push({
                    "id": ref.profileMenuList[i].id,
                    "menuId": ref.profileMenuList[i].menuId,
                    "roleId": ref.submitObject.profileCode,
                    "isActive": ref.profileMenuList[i].isActive,
                    "actionArray": []
                });
            }
            var subMenu = ref.profileMenuList[i].subMenuList;
            for (var j = 0; j < subMenu.length; j++) {
                if (subMenu[j].id == '' && subMenu[j].isActive == 'Y') {
                    tempArr.push({
                        "id": subMenu[j].id,
                        "menuId": subMenu[j].menuId,
                        "roleId": ref.submitObject.profileCode,
                        "isActive": subMenu[j].isActive,
                        "actionArray": []
                    });
                }
                if (subMenu[j].id != '') {
                    tempArr.push({
                        "id": subMenu[j].id,
                        "menuId": subMenu[j].menuId,
                        "roleId": ref.submitObject.profileCode,
                        "isActive": subMenu[j].isActive,
                        "actionArray": []
                    });
                }
            }
        }
        console.log('profileMenuList');
        console.log(tempArr);
        for (var count = 0; count < tempArr.length; count++) {
            if (tempArr[count].id == "") {
                tempArr[count].id = 0;
            }
            tempArr[count].id = tempArr[count].id * 1;
            tempArr[count].menuId = tempArr[count].menuId * 1;
        }
        console.log('profileMenuList');
        console.log(tempArr);
        console.log(tempArr);
        var tempcheckArr = {};
        tempcheckArr['menu'] = tempArr;
        ref.apiHandler.saveRoleMenuAndActions1(tempcheckArr, (response) => {
            console.log(JSON.stringify(response));
            if (response.sts.toLowerCase() === "success") {
                ref.callAlert("success", "Successfully submitted", "not");
                ref.checkFlag = false;
            }
            else {
                ref.callAlert("error", "Failed", "not");
            }
        }, (error) => {
            ref.callAlert("error", "Failed", "not");
            console.log(error);
        });
    }
    changeProfile() {
        var ref = this;
        ref.checkFlag = false;
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
                // ref.router.navigate(['main-layout/quotationList']);
                $("#alertMsg").modal("hide");
            }
            $("#alertMsg").modal("hide");
        }
        else {
            $("#alertMsg").modal("hide");
        }
    }
};
MenuAuthorizationComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: src_app_services_api_handler_service__WEBPACK_IMPORTED_MODULE_5__["ApiHandlerService"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
];
MenuAuthorizationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-menu-authorization',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./menu-authorization.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/menu-authorization/menu-authorization.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./menu-authorization.component.css */ "./src/app/pages/menu-authorization/menu-authorization.component.css")).default]
    })
], MenuAuthorizationComponent);



/***/ }),

/***/ "./src/app/pages/my-profile/my-profile.component.css":
/*!***********************************************************!*\
  !*** ./src/app/pages/my-profile/my-profile.component.css ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".page-title-view {\r\n    font-size: 1.2rem;\r\n    font-family: 'Nunito', sans-serif;\r\n    color: #d96b0c;\r\n    }\r\n    .col-form-label {\r\n    color: #646464;\r\n    }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbXktcHJvZmlsZS9teS1wcm9maWxlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxpQkFBaUI7SUFDakIsaUNBQWlDO0lBQ2pDLGNBQWM7SUFDZDtJQUNBO0lBQ0EsY0FBYztJQUNkIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvbXktcHJvZmlsZS9teS1wcm9maWxlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucGFnZS10aXRsZS12aWV3IHtcclxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xyXG4gICAgZm9udC1mYW1pbHk6ICdOdW5pdG8nLCBzYW5zLXNlcmlmO1xyXG4gICAgY29sb3I6ICNkOTZiMGM7XHJcbiAgICB9XHJcbiAgICAuY29sLWZvcm0tbGFiZWwge1xyXG4gICAgY29sb3I6ICM2NDY0NjQ7XHJcbiAgICB9Il19 */");

/***/ }),

/***/ "./src/app/pages/my-profile/my-profile.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/pages/my-profile/my-profile.component.ts ***!
  \**********************************************************/
/*! exports provided: MyProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyProfileComponent", function() { return MyProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_services_api_handler_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/api-handler.service */ "./src/app/services/api-handler.service.ts");
/* harmony import */ var src_app_services_constant_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/constant.utils */ "./src/app/services/constant.utils.ts");
/* harmony import */ var src_app_services_util_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/util.service */ "./src/app/services/util.service.ts");






let MyProfileComponent = class MyProfileComponent {
    constructor(router, apiHandler, utilService) {
        this.router = router;
        this.apiHandler = apiHandler;
        this.utilService = utilService;
        this.loginData = JSON.parse(window.localStorage.getItem('loginData'));
        this.vendorDetails = {};
    }
    ngOnInit() {
        var ref = this;
        ref.apiHandler.viewProfile((response) => {
            console.log(JSON.stringify(response));
            if (response.sts.toLowerCase() === src_app_services_constant_utils__WEBPACK_IMPORTED_MODULE_4__["Constant"].SUCCESS_STATUS) {
                ref.vendorDetails = response.content;
                console.log(ref.vendorDetails);
            }
            else {
            }
        }, (error) => {
            console.log(error);
        });
    }
};
MyProfileComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: src_app_services_api_handler_service__WEBPACK_IMPORTED_MODULE_3__["ApiHandlerService"] },
    { type: src_app_services_util_service__WEBPACK_IMPORTED_MODULE_5__["UtilService"] }
];
MyProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-my-profile',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./my-profile.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/my-profile/my-profile.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./my-profile.component.css */ "./src/app/pages/my-profile/my-profile.component.css")).default]
    })
], MyProfileComponent);



/***/ }),

/***/ "./src/app/pages/order-list/order-list.component.css":
/*!***********************************************************!*\
  !*** ./src/app/pages/order-list/order-list.component.css ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL29yZGVyLWxpc3Qvb3JkZXItbGlzdC5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/pages/order-list/order-list.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/pages/order-list/order-list.component.ts ***!
  \**********************************************************/
/*! exports provided: OrderListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderListComponent", function() { return OrderListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_services_api_handler_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/api-handler.service */ "./src/app/services/api-handler.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var src_app_services_constant_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/constant.utils */ "./src/app/services/constant.utils.ts");






let OrderListComponent = class OrderListComponent {
    constructor(router, apiHandler, location) {
        this.router = router;
        this.apiHandler = apiHandler;
        this.location = location;
        this.list = [];
    }
    ngOnInit() {
        var ref = this;
        ref.apiHandler.getOrders((response) => {
            console.log(JSON.stringify(response));
            if (response.sts.toLowerCase() === src_app_services_constant_utils__WEBPACK_IMPORTED_MODULE_5__["Constant"].SUCCESS_STATUS) {
                ref.list = response.content;
                ref.initializeDatatable();
                console.log(ref.list);
            }
            else {
                ref.initializeDatatable();
            }
        }, (error) => {
            console.log(error);
            ref.initializeDatatable();
        });
    }
    view(item) {
        var ref = this;
        window.localStorage.setItem("orderData", JSON.stringify(item));
        ref.router.navigate(['main-layout/orderView']);
    }
    initializeDatatable() {
        $('#orderlist').dataTable().fnDestroy();
        setTimeout(() => {
            $('#orderlist').DataTable({
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
};
OrderListComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: src_app_services_api_handler_service__WEBPACK_IMPORTED_MODULE_3__["ApiHandlerService"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"] }
];
OrderListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-order-list',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./order-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/order-list/order-list.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./order-list.component.css */ "./src/app/pages/order-list/order-list.component.css")).default]
    })
], OrderListComponent);



/***/ }),

/***/ "./src/app/pages/order-view/order-view.component.css":
/*!***********************************************************!*\
  !*** ./src/app/pages/order-view/order-view.component.css ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL29yZGVyLXZpZXcvb3JkZXItdmlldy5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/pages/order-view/order-view.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/pages/order-view/order-view.component.ts ***!
  \**********************************************************/
/*! exports provided: OrderViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderViewComponent", function() { return OrderViewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_services_api_handler_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/api-handler.service */ "./src/app/services/api-handler.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var src_app_services_util_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/util.service */ "./src/app/services/util.service.ts");






let OrderViewComponent = class OrderViewComponent {
    constructor(router, apiHandler, location, utilService) {
        this.router = router;
        this.apiHandler = apiHandler;
        this.location = location;
        this.utilService = utilService;
        this.orderData = JSON.parse(window.localStorage.getItem("orderData"));
        this.viewObject = {};
        this.viewArr = [];
        this.rejectReason = "";
    }
    ngOnInit() {
        var ref = this;
        ref.datePickerConfig = Object.assign({}, { containerClass: 'theme-red', showWeekNumbers: false, dateInputFormat: 'DD-MM-YYYY' });
        var temp = ref.orderData.poNo;
        ref.apiHandler.viewOrder(temp, (response) => {
            console.log(JSON.stringify(response));
            if (response.sts.toLowerCase() === 'success') {
                ref.viewObject = response.content;
                ref.viewArr = response.content.itemList;
                console.log(ref.viewObject);
                console.log(ref.viewArr);
                ref.initializeDatatable();
            }
            else {
                ref.initializeDatatable();
            }
        }, (error) => {
            ref.initializeDatatable();
            console.log(error);
        });
    }
    approved() {
        var ref = this;
        var temp = {};
        temp["pkStatusId"] = ref.viewObject.pkStatusId;
        temp["vendorCode"] = ref.viewObject.vendorCode;
        temp["poNo"] = ref.viewObject.poNo;
        temp["status"] = 'A';
        temp["rejectReason"] = "";
        ref.apiHandler.orderAction(temp, (response) => {
            console.log(JSON.stringify(response));
            if (response.sts.toLowerCase() === 'success') {
                ref.callAlert("success", "Approved", "navigateToList");
            }
            else {
                ref.callAlert("error", "Failed", "not");
            }
        }, (error) => {
            console.log(error);
            ref.callAlert("error", "Failed", "not");
        });
    }
    rejectPopupOpen() {
        var ref = this;
        $('#rejectPopup').modal('show');
        ref.rejectReason = "";
    }
    rejectPopupClose() {
        var ref = this;
        $('#rejectPopup').modal('hide');
        ref.rejectReason = "";
    }
    rejectPopupSubmit() {
        var ref = this;
        var temp = {};
        temp["pkStatusId"] = ref.viewObject.pkStatusId;
        temp["vendorCode"] = ref.viewObject.vendorCode;
        temp["poNo"] = ref.viewObject.poNo;
        temp["status"] = 'R';
        temp["rejectReason"] = ref.rejectReason;
        ref.apiHandler.orderAction(temp, (response) => {
            console.log(JSON.stringify(response));
            if (response.sts.toLowerCase() === 'success') {
                $('#rejectPopup').modal('hide');
                ref.callAlert("success", "Rejected", "navigateToList");
            }
            else {
                ref.callAlert("error", "Failed", "not");
                $('#rejectPopup').modal('hide');
            }
        }, (error) => {
            console.log(error);
            ref.callAlert("error", "Failed", "not");
            $('#rejectPopup').modal('hide');
        });
    }
    back() {
        var ref = this;
        ref.location.back();
    }
    initializeDatatable() {
        $('#orderViewlist').dataTable().fnDestroy();
        setTimeout(() => {
            $('#orderViewlist').DataTable({
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
                ref.router.navigate(['main-layout/orderList']);
                $("#alertMsg").modal("hide");
            }
            $("#alertMsg").modal("hide");
        }
        else {
            $("#alertMsg").modal("hide");
        }
    }
};
OrderViewComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: src_app_services_api_handler_service__WEBPACK_IMPORTED_MODULE_3__["ApiHandlerService"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"] },
    { type: src_app_services_util_service__WEBPACK_IMPORTED_MODULE_5__["UtilService"] }
];
OrderViewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-order-view',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./order-view.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/order-view/order-view.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./order-view.component.css */ "./src/app/pages/order-view/order-view.component.css")).default]
    })
], OrderViewComponent);



/***/ }),

/***/ "./src/app/pages/query-list/query-list.component.css":
/*!***********************************************************!*\
  !*** ./src/app/pages/query-list/query-list.component.css ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3F1ZXJ5LWxpc3QvcXVlcnktbGlzdC5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/pages/query-list/query-list.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/pages/query-list/query-list.component.ts ***!
  \**********************************************************/
/*! exports provided: QueryListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QueryListComponent", function() { return QueryListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_services_api_handler_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/api-handler.service */ "./src/app/services/api-handler.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var src_app_services_constant_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/constant.utils */ "./src/app/services/constant.utils.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");








let QueryListComponent = class QueryListComponent {
    constructor(router, apiHandler, http, location) {
        this.router = router;
        this.apiHandler = apiHandler;
        this.http = http;
        this.location = location;
        this.queryList = [];
        this.queryTypes = [];
        this.alertResponse = { message: '', status: '', route: '' };
        this.attachment = null;
    }
    ngOnInit() {
        const ref = this;
        ref.callApi();
        ref.createForm();
        ref.apiHandler.getQueryMaster((response) => {
            console.log(JSON.stringify(response));
            if (response.sts === src_app_services_constant_utils__WEBPACK_IMPORTED_MODULE_6__["Constant"].SUCCESS_STATUS) {
                ref.queryTypes = response.content.queryTypes;
            }
        }, (error) => {
            console.log(error);
        });
    }
    callApi() {
        const ref = this;
        ref.apiHandler.getQueryList((response) => {
            console.log(JSON.stringify(response));
            if (response.sts === src_app_services_constant_utils__WEBPACK_IMPORTED_MODULE_6__["Constant"].SUCCESS_STATUS) {
                ref.queryList = response.content;
                ref.initializeDatatable();
            }
            else {
                ref.initializeDatatable();
            }
        }, (error) => {
            ref.initializeDatatable();
            console.log(error);
        });
    }
    createForm() {
        const ref = this;
        ref.attachment = null;
        ref.formData = new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormGroup"]({
            pkId: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"](0, [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required]),
            queryType: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required]),
            subject: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required]),
            query: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required]),
            answer: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required]),
            attachment: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"](null),
        });
    }
    onSubmit() {
        const ref = this;
        const tempobject = ref.formData.value;
        console.log(ref.formData.get('query').value);
        console.log('Json Response==>> ');
        console.log(tempobject);
        let form = new FormData();
        form.append("queryType", tempobject.queryType);
        form.append("subject", tempobject.subject);
        form.append("query", tempobject.query);
        form.append("answer", tempobject.answer);
        if (tempobject.attachment !== null) {
            form.append("attachment", tempobject.attachment);
        }
        ref.apiHandler.saveQuery(form, (response) => {
            console.log(JSON.stringify(response));
            setTimeout(() => {
                $('#createquery').modal('hide');
                $('#alertMsg').modal('show');
            }, 1000);
            ref.alertResponse.message = response.msg;
            ref.alertResponse.status = response.sts;
            ref.initializeDatatable();
        }, (error) => {
            setTimeout(() => {
                $('#alertMsg').modal('show');
            }, 1000);
            ref.alertResponse.message = src_app_services_constant_utils__WEBPACK_IMPORTED_MODULE_6__["Constant"].ERROR_MESSAGE;
            ref.alertResponse.status = src_app_services_constant_utils__WEBPACK_IMPORTED_MODULE_6__["Constant"].ERROR_STATUS;
            ref.alertResponse.route = '';
            console.log(error);
            ref.initializeDatatable();
        });
    }
    onAddQuery() {
        const ref = this;
        // const container= document.getElementById('addModal');
        // const button= document.createElement('button');
        // button.type='button';
        // button.style.display='none';
        // button.setAttribute('data-toggle','modal');
        // button.setAttribute('data-target','#createquery'); 
        // container.appendChild(button);
        // button.click();
        ref.createForm();
        setTimeout(() => {
            $('#createquery').modal('show');
        }, 500);
    }
    upload(files) {
        const ref = this;
        ref.attachment = null;
        const file = files[0];
        const fileSize = file.size / 1024;
        ref.formData.get('attachment').patchValue(null);
        if (fileSize < 5050) {
            ref.attachment = files[0];
            ref.formData.get('attachment').patchValue(ref.attachment);
        }
        else {
            alert('The attachment size should be less than 5MB');
        }
    }
    okAlert() {
        const ref = this;
        $('#alertMsg').modal('hide');
        ref.createForm();
        ref.callApi();
    }
    initializeDatatable() {
        $('#querylist12').dataTable().fnDestroy();
        setTimeout(() => {
            $('#querylist12').DataTable({
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
};
QueryListComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: src_app_services_api_handler_service__WEBPACK_IMPORTED_MODULE_4__["ApiHandlerService"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"] }
];
QueryListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-query-list',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./query-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/query-list/query-list.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./query-list.component.css */ "./src/app/pages/query-list/query-list.component.css")).default]
    })
], QueryListComponent);



/***/ }),

/***/ "./src/app/pages/query-mangement/query-mangement.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/pages/query-mangement/query-mangement.component.css ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3F1ZXJ5LW1hbmdlbWVudC9xdWVyeS1tYW5nZW1lbnQuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/pages/query-mangement/query-mangement.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/pages/query-mangement/query-mangement.component.ts ***!
  \********************************************************************/
/*! exports provided: QueryMangementComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QueryMangementComponent", function() { return QueryMangementComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let QueryMangementComponent = class QueryMangementComponent {
    constructor() { }
    ngOnInit() {
    }
};
QueryMangementComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-query-mangement',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./query-mangement.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/query-mangement/query-mangement.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./query-mangement.component.css */ "./src/app/pages/query-mangement/query-mangement.component.css")).default]
    })
], QueryMangementComponent);



/***/ }),

/***/ "./src/app/pages/query-view/query-view.component.css":
/*!***********************************************************!*\
  !*** ./src/app/pages/query-view/query-view.component.css ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n\r\n\r\n.chat-scroll {\r\n    height: 66vh;\r\n    overflow: hidden;\r\n    overflow: auto;\r\n  }\r\n  .list-group-item.active {\r\n  color: #0e141e;\r\n  background-color: #f5f7fa;\r\n  border-color: #dddddd;\r\n  }\r\n  .lead-title {\r\n    font-family: \"Open Sans\", sans-serif !important;\r\n    font-weight: 500;\r\n    color: #f57f19;\r\n    font-size: 1.3rem;\r\n    /* text-shadow: 0px 6px 5px rgb(207 207 207); */\r\n  }\r\n  .lead-quetion {\r\n    font-family: \"Open Sans\", sans-serif !important;\r\n    font-weight: 500;\r\n    color: #2c2b2c;\r\n    font-size: 1rem;\r\n    /* text-shadow: 0px 6px 5px rgb(207 207 207); */\r\n  }\r\n  .lead-header-title {\r\n    font-family: \"Open Sans\", sans-serif !important;\r\n    font-weight: 500;\r\n    color: #2c2b2c;\r\n    font-size: 1.3rem;\r\n    text-shadow: 0px 6px 5px rgb(207 207 207);\r\n  }\r\n  /* .lead-list .list-group-item {\r\n  margin-bottom: 2rem;\r\n  border-radius: 6px;\r\n  } */\r\n  .lead-list .list-group-item.active, .lead-list .list-group-item.active:focus, .lead-list .list-group-item:hover {\r\n  /* border: 1px solid #c6a150; */\r\n  background-color: #fff9eb;\r\n  border-color: #ffde8c;\r\n  /* -webkit-box-shadow: 0px 4px 38px -16px rgba(197,199,201,1);\r\n  -moz-box-shadow: 0px 4px 38px -16px rgba(197,199,201,1);\r\n  box-shadow: 0px 4px 38px -16px rgba(197,199,201,1); */\r\n  }\r\n  .card-header .heading-elements, .card-header .heading-elements-toggle {\r\n    top: 13px;\r\n    right: 21px;\r\n  }\r\n  .chat-application .chat-container {\r\n    position: relative;\r\n    height: calc(var(--vh, 1vh) * 100 - 14.7rem);\r\n    text-align: center;\r\n    padding: 1.4rem; }\r\n  .chat-application .chat-start {\r\n    height: calc(var(--vh, 1vh) * 100 - 6rem);\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    flex-direction: column; }\r\n  .chat-application .chat-window-wrapper .chat-start .chat-start-icon,\r\n    .chat-application .chat-window-wrapper .chat-start .chat-start-text {\r\n      box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.12), 0 2px 4px 0 rgba(0, 0, 0, 0.08) !important;\r\n      cursor: pointer; }\r\n  .chat-application .chat-window-wrapper .chat-start .chat-start-text {\r\n      border-radius: calc(0.25rem * 5); }\r\n  .chat-application .chat-window-wrapper .chat-start .chat-start-icon {\r\n      border-radius: 50%;\r\n      background-color: #fff; }\r\n  .chat-application .chat-content .chat-body {\r\n    overflow: hidden;\r\n    margin: 0.67rem 2rem 0 0; }\r\n  .chat-application .chat-content .chat-body .chat-message {\r\n      position: relative;\r\n      float: right;\r\n      text-align: right;\r\n      padding: 0.75rem 1rem;\r\n      margin: 0 1.33rem 1.8rem 0.3rem;\r\n      clear: both;\r\n      word-break: break-word;\r\n      color: #fff;\r\n      background: #00b5b8;\r\n      border-radius: 0.25rem;\r\n      box-shadow: 0 2px 4px 0 rgba(0, 181, 184, 0.6); }\r\n  .chat-application .chat-content .chat-body .chat-message p {\r\n        margin-bottom: 0; }\r\n  .chat-application .chat-content .chat-body .chat-message .chat-time {\r\n        position: absolute;\r\n        bottom: -20px;\r\n        right: 0px;\r\n        color: #404e67;\r\n        font-size: 0.8rem;\r\n        white-space: nowrap; }\r\n  .chat-application .chat-content .chat-avatar {\r\n    float: right; }\r\n  .chat-application .chat-content .chat-left .chat-avatar {\r\n    float: left; }\r\n  .chat-application .chat-content .chat-left .chat-message {\r\n    text-align: left;\r\n    float: left;\r\n    margin: 0 0.3rem 1.8rem 1.3rem;\r\n    color: #404e67;\r\n    background-color: #fafbfb;\r\n    box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.3); }\r\n  .chat-application .chat-content .badge {\r\n    background-color: #ccc;\r\n    color: #404e67; }\r\n  .chat-application .chat-profile {\r\n    /* chat profile right sidebar */\r\n    height: calc(var(--vh, 1vh) * 100 - 6.2rem);\r\n    width: 300px;\r\n    border-radius: 0.25rem;\r\n    border-top-left-radius: 0;\r\n    border-bottom-left-radius: 0;\r\n    background-color: #fff;\r\n    position: absolute;\r\n    transform: translateX(110%);\r\n    transition: all 0.3s ease;\r\n    z-index: 3;\r\n    right: 1.8rem;\r\n    bottom: 0;\r\n    opacity: 0; }\r\n  .chat-application .chat-profile.show {\r\n      opacity: 1;\r\n      transform: translateX(8%); }\r\n  .chat-application .chat-profile .chat-profile-header .chat-profile-close {\r\n      position: absolute;\r\n      top: 14px;\r\n      right: 13px;\r\n      cursor: pointer; }\r\n  .chat-application .chat-profile .chat-profile-content {\r\n      position: relative;\r\n      height: calc(var(--vh, 1vh) * 100 - 22.8rem); }\r\n  .chat-application img.round {\r\n    border-radius: 3.65rem; }\r\n  .chat-application .chat-content .chat-left .chat-message .chat-time {\r\n        left: 0px;\r\n        }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcXVlcnktdmlldy9xdWVyeS12aWV3LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBR0E7SUFDSSxZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLGNBQWM7RUFDaEI7RUFDQTtFQUNBLGNBQWM7RUFDZCx5QkFBeUI7RUFDekIscUJBQXFCO0VBQ3JCO0VBQ0E7SUFDRSwrQ0FBK0M7SUFDL0MsZ0JBQWdCO0lBQ2hCLGNBQWM7SUFDZCxpQkFBaUI7SUFDakIsK0NBQStDO0VBQ2pEO0VBQ0E7SUFDRSwrQ0FBK0M7SUFDL0MsZ0JBQWdCO0lBQ2hCLGNBQWM7SUFDZCxlQUFlO0lBQ2YsK0NBQStDO0VBQ2pEO0VBQ0E7SUFDRSwrQ0FBK0M7SUFDL0MsZ0JBQWdCO0lBQ2hCLGNBQWM7SUFDZCxpQkFBaUI7SUFDakIseUNBQXlDO0VBQzNDO0VBQ0E7OztLQUdHO0VBQ0g7RUFDQSwrQkFBK0I7RUFDL0IseUJBQXlCO0VBQ3pCLHFCQUFxQjtFQUNyQjs7dURBRXFEO0VBQ3JEO0VBQ0E7SUFDRSxTQUFTO0lBQ1QsV0FBVztFQUNiO0VBRUE7SUFDRSxrQkFBa0I7SUFDbEIsNENBQTRDO0lBQzVDLGtCQUFrQjtJQUNsQixlQUFlLEVBQUU7RUFFbkI7SUFDRSx5Q0FBeUM7SUFDekMsYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsc0JBQXNCLEVBQUU7RUFDeEI7O01BRUUsdUZBQXVGO01BQ3ZGLGVBQWUsRUFBRTtFQUNuQjtNQUNFLGdDQUFnQyxFQUFFO0VBQ3BDO01BQ0Usa0JBQWtCO01BQ2xCLHNCQUFzQixFQUFFO0VBRTVCO0lBQ0UsZ0JBQWdCO0lBQ2hCLHdCQUF3QixFQUFFO0VBQzFCO01BQ0Usa0JBQWtCO01BQ2xCLFlBQVk7TUFDWixpQkFBaUI7TUFDakIscUJBQXFCO01BQ3JCLCtCQUErQjtNQUMvQixXQUFXO01BQ1gsc0JBQXNCO01BQ3RCLFdBQVc7TUFDWCxtQkFBbUI7TUFDbkIsc0JBQXNCO01BQ3RCLDhDQUE4QyxFQUFFO0VBQ2hEO1FBQ0UsZ0JBQWdCLEVBQUU7RUFDcEI7UUFDRSxrQkFBa0I7UUFDbEIsYUFBYTtRQUNiLFVBQVU7UUFDVixjQUFjO1FBQ2QsaUJBQWlCO1FBQ2pCLG1CQUFtQixFQUFFO0VBRTNCO0lBQ0UsWUFBWSxFQUFFO0VBRWhCO0lBQ0UsV0FBVyxFQUFFO0VBRWY7SUFDRSxnQkFBZ0I7SUFDaEIsV0FBVztJQUNYLDhCQUE4QjtJQUM5QixjQUFjO0lBQ2QseUJBQXlCO0lBQ3pCLDBDQUEwQyxFQUFFO0VBRTlDO0lBQ0Usc0JBQXNCO0lBQ3RCLGNBQWMsRUFBRTtFQUVsQjtJQUNFLCtCQUErQjtJQUMvQiwyQ0FBMkM7SUFDM0MsWUFBWTtJQUNaLHNCQUFzQjtJQUN0Qix5QkFBeUI7SUFDekIsNEJBQTRCO0lBQzVCLHNCQUFzQjtJQUN0QixrQkFBa0I7SUFDbEIsMkJBQTJCO0lBQzNCLHlCQUF5QjtJQUN6QixVQUFVO0lBQ1YsYUFBYTtJQUNiLFNBQVM7SUFDVCxVQUFVLEVBQUU7RUFDWjtNQUNFLFVBQVU7TUFDVix5QkFBeUIsRUFBRTtFQUM3QjtNQUNFLGtCQUFrQjtNQUNsQixTQUFTO01BQ1QsV0FBVztNQUNYLGVBQWUsRUFBRTtFQUNuQjtNQUNFLGtCQUFrQjtNQUNsQiw0Q0FBNEMsRUFBRTtFQUVsRDtJQUNFLHNCQUFzQixFQUFFO0VBRXhCO1FBQ0ksU0FBUztRQUNUIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvcXVlcnktdmlldy9xdWVyeS12aWV3LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuXHJcblxyXG4uY2hhdC1zY3JvbGwge1xyXG4gICAgaGVpZ2h0OiA2NnZoO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIG92ZXJmbG93OiBhdXRvO1xyXG4gIH1cclxuICAubGlzdC1ncm91cC1pdGVtLmFjdGl2ZSB7XHJcbiAgY29sb3I6ICMwZTE0MWU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y1ZjdmYTtcclxuICBib3JkZXItY29sb3I6ICNkZGRkZGQ7XHJcbiAgfVxyXG4gIC5sZWFkLXRpdGxlIHtcclxuICAgIGZvbnQtZmFtaWx5OiBcIk9wZW4gU2Fuc1wiLCBzYW5zLXNlcmlmICFpbXBvcnRhbnQ7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgY29sb3I6ICNmNTdmMTk7XHJcbiAgICBmb250LXNpemU6IDEuM3JlbTtcclxuICAgIC8qIHRleHQtc2hhZG93OiAwcHggNnB4IDVweCByZ2IoMjA3IDIwNyAyMDcpOyAqL1xyXG4gIH1cclxuICAubGVhZC1xdWV0aW9uIHtcclxuICAgIGZvbnQtZmFtaWx5OiBcIk9wZW4gU2Fuc1wiLCBzYW5zLXNlcmlmICFpbXBvcnRhbnQ7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgY29sb3I6ICMyYzJiMmM7XHJcbiAgICBmb250LXNpemU6IDFyZW07XHJcbiAgICAvKiB0ZXh0LXNoYWRvdzogMHB4IDZweCA1cHggcmdiKDIwNyAyMDcgMjA3KTsgKi9cclxuICB9XHJcbiAgLmxlYWQtaGVhZGVyLXRpdGxlIHtcclxuICAgIGZvbnQtZmFtaWx5OiBcIk9wZW4gU2Fuc1wiLCBzYW5zLXNlcmlmICFpbXBvcnRhbnQ7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgY29sb3I6ICMyYzJiMmM7XHJcbiAgICBmb250LXNpemU6IDEuM3JlbTtcclxuICAgIHRleHQtc2hhZG93OiAwcHggNnB4IDVweCByZ2IoMjA3IDIwNyAyMDcpO1xyXG4gIH1cclxuICAvKiAubGVhZC1saXN0IC5saXN0LWdyb3VwLWl0ZW0ge1xyXG4gIG1hcmdpbi1ib3R0b206IDJyZW07XHJcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xyXG4gIH0gKi9cclxuICAubGVhZC1saXN0IC5saXN0LWdyb3VwLWl0ZW0uYWN0aXZlLCAubGVhZC1saXN0IC5saXN0LWdyb3VwLWl0ZW0uYWN0aXZlOmZvY3VzLCAubGVhZC1saXN0IC5saXN0LWdyb3VwLWl0ZW06aG92ZXIge1xyXG4gIC8qIGJvcmRlcjogMXB4IHNvbGlkICNjNmExNTA7ICovXHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjllYjtcclxuICBib3JkZXItY29sb3I6ICNmZmRlOGM7XHJcbiAgLyogLXdlYmtpdC1ib3gtc2hhZG93OiAwcHggNHB4IDM4cHggLTE2cHggcmdiYSgxOTcsMTk5LDIwMSwxKTtcclxuICAtbW96LWJveC1zaGFkb3c6IDBweCA0cHggMzhweCAtMTZweCByZ2JhKDE5NywxOTksMjAxLDEpO1xyXG4gIGJveC1zaGFkb3c6IDBweCA0cHggMzhweCAtMTZweCByZ2JhKDE5NywxOTksMjAxLDEpOyAqL1xyXG4gIH1cclxuICAuY2FyZC1oZWFkZXIgLmhlYWRpbmctZWxlbWVudHMsIC5jYXJkLWhlYWRlciAuaGVhZGluZy1lbGVtZW50cy10b2dnbGUge1xyXG4gICAgdG9wOiAxM3B4O1xyXG4gICAgcmlnaHQ6IDIxcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5jaGF0LWFwcGxpY2F0aW9uIC5jaGF0LWNvbnRhaW5lciB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBoZWlnaHQ6IGNhbGModmFyKC0tdmgsIDF2aCkgKiAxMDAgLSAxNC43cmVtKTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDEuNHJlbTsgfVxyXG4gIFxyXG4gIC5jaGF0LWFwcGxpY2F0aW9uIC5jaGF0LXN0YXJ0IHtcclxuICAgIGhlaWdodDogY2FsYyh2YXIoLS12aCwgMXZoKSAqIDEwMCAtIDZyZW0pO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47IH1cclxuICAgIC5jaGF0LWFwcGxpY2F0aW9uIC5jaGF0LXdpbmRvdy13cmFwcGVyIC5jaGF0LXN0YXJ0IC5jaGF0LXN0YXJ0LWljb24sXHJcbiAgICAuY2hhdC1hcHBsaWNhdGlvbiAuY2hhdC13aW5kb3ctd3JhcHBlciAuY2hhdC1zdGFydCAuY2hhdC1zdGFydC10ZXh0IHtcclxuICAgICAgYm94LXNoYWRvdzogMCA0cHggOHB4IDAgcmdiYSgwLCAwLCAwLCAwLjEyKSwgMCAycHggNHB4IDAgcmdiYSgwLCAwLCAwLCAwLjA4KSAhaW1wb3J0YW50O1xyXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7IH1cclxuICAgIC5jaGF0LWFwcGxpY2F0aW9uIC5jaGF0LXdpbmRvdy13cmFwcGVyIC5jaGF0LXN0YXJ0IC5jaGF0LXN0YXJ0LXRleHQge1xyXG4gICAgICBib3JkZXItcmFkaXVzOiBjYWxjKDAuMjVyZW0gKiA1KTsgfVxyXG4gICAgLmNoYXQtYXBwbGljYXRpb24gLmNoYXQtd2luZG93LXdyYXBwZXIgLmNoYXQtc3RhcnQgLmNoYXQtc3RhcnQtaWNvbiB7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjsgfVxyXG4gIFxyXG4gIC5jaGF0LWFwcGxpY2F0aW9uIC5jaGF0LWNvbnRlbnQgLmNoYXQtYm9keSB7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgbWFyZ2luOiAwLjY3cmVtIDJyZW0gMCAwOyB9XHJcbiAgICAuY2hhdC1hcHBsaWNhdGlvbiAuY2hhdC1jb250ZW50IC5jaGF0LWJvZHkgLmNoYXQtbWVzc2FnZSB7XHJcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgICAgcGFkZGluZzogMC43NXJlbSAxcmVtO1xyXG4gICAgICBtYXJnaW46IDAgMS4zM3JlbSAxLjhyZW0gMC4zcmVtO1xyXG4gICAgICBjbGVhcjogYm90aDtcclxuICAgICAgd29yZC1icmVhazogYnJlYWstd29yZDtcclxuICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgIGJhY2tncm91bmQ6ICMwMGI1Yjg7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDAuMjVyZW07XHJcbiAgICAgIGJveC1zaGFkb3c6IDAgMnB4IDRweCAwIHJnYmEoMCwgMTgxLCAxODQsIDAuNik7IH1cclxuICAgICAgLmNoYXQtYXBwbGljYXRpb24gLmNoYXQtY29udGVudCAuY2hhdC1ib2R5IC5jaGF0LW1lc3NhZ2UgcCB7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMDsgfVxyXG4gICAgICAuY2hhdC1hcHBsaWNhdGlvbiAuY2hhdC1jb250ZW50IC5jaGF0LWJvZHkgLmNoYXQtbWVzc2FnZSAuY2hhdC10aW1lIHtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgYm90dG9tOiAtMjBweDtcclxuICAgICAgICByaWdodDogMHB4O1xyXG4gICAgICAgIGNvbG9yOiAjNDA0ZTY3O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMC44cmVtO1xyXG4gICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7IH1cclxuICBcclxuICAuY2hhdC1hcHBsaWNhdGlvbiAuY2hhdC1jb250ZW50IC5jaGF0LWF2YXRhciB7XHJcbiAgICBmbG9hdDogcmlnaHQ7IH1cclxuICBcclxuICAuY2hhdC1hcHBsaWNhdGlvbiAuY2hhdC1jb250ZW50IC5jaGF0LWxlZnQgLmNoYXQtYXZhdGFyIHtcclxuICAgIGZsb2F0OiBsZWZ0OyB9XHJcbiAgXHJcbiAgLmNoYXQtYXBwbGljYXRpb24gLmNoYXQtY29udGVudCAuY2hhdC1sZWZ0IC5jaGF0LW1lc3NhZ2Uge1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgbWFyZ2luOiAwIDAuM3JlbSAxLjhyZW0gMS4zcmVtO1xyXG4gICAgY29sb3I6ICM0MDRlNjc7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmFmYmZiO1xyXG4gICAgYm94LXNoYWRvdzogMCAycHggNnB4IDAgcmdiYSgwLCAwLCAwLCAwLjMpOyB9XHJcbiAgXHJcbiAgLmNoYXQtYXBwbGljYXRpb24gLmNoYXQtY29udGVudCAuYmFkZ2Uge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2NjYztcclxuICAgIGNvbG9yOiAjNDA0ZTY3OyB9XHJcbiAgXHJcbiAgLmNoYXQtYXBwbGljYXRpb24gLmNoYXQtcHJvZmlsZSB7XHJcbiAgICAvKiBjaGF0IHByb2ZpbGUgcmlnaHQgc2lkZWJhciAqL1xyXG4gICAgaGVpZ2h0OiBjYWxjKHZhcigtLXZoLCAxdmgpICogMTAwIC0gNi4ycmVtKTtcclxuICAgIHdpZHRoOiAzMDBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDAuMjVyZW07XHJcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAwO1xyXG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTEwJSk7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xyXG4gICAgei1pbmRleDogMztcclxuICAgIHJpZ2h0OiAxLjhyZW07XHJcbiAgICBib3R0b206IDA7XHJcbiAgICBvcGFjaXR5OiAwOyB9XHJcbiAgICAuY2hhdC1hcHBsaWNhdGlvbiAuY2hhdC1wcm9maWxlLnNob3cge1xyXG4gICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoOCUpOyB9XHJcbiAgICAuY2hhdC1hcHBsaWNhdGlvbiAuY2hhdC1wcm9maWxlIC5jaGF0LXByb2ZpbGUtaGVhZGVyIC5jaGF0LXByb2ZpbGUtY2xvc2Uge1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIHRvcDogMTRweDtcclxuICAgICAgcmlnaHQ6IDEzcHg7XHJcbiAgICAgIGN1cnNvcjogcG9pbnRlcjsgfVxyXG4gICAgLmNoYXQtYXBwbGljYXRpb24gLmNoYXQtcHJvZmlsZSAuY2hhdC1wcm9maWxlLWNvbnRlbnQge1xyXG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgIGhlaWdodDogY2FsYyh2YXIoLS12aCwgMXZoKSAqIDEwMCAtIDIyLjhyZW0pOyB9XHJcbiAgXHJcbiAgLmNoYXQtYXBwbGljYXRpb24gaW1nLnJvdW5kIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDMuNjVyZW07IH1cclxuICBcclxuICAgIC5jaGF0LWFwcGxpY2F0aW9uIC5jaGF0LWNvbnRlbnQgLmNoYXQtbGVmdCAuY2hhdC1tZXNzYWdlIC5jaGF0LXRpbWUge1xyXG4gICAgICAgIGxlZnQ6IDBweDtcclxuICAgICAgICB9Il19 */");

/***/ }),

/***/ "./src/app/pages/query-view/query-view.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/pages/query-view/query-view.component.ts ***!
  \**********************************************************/
/*! exports provided: QueryViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QueryViewComponent", function() { return QueryViewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var src_app_services_api_handler_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/api-handler.service */ "./src/app/services/api-handler.service.ts");
/* harmony import */ var src_app_services_constant_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/constant.utils */ "./src/app/services/constant.utils.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");









let QueryViewComponent = class QueryViewComponent {
    constructor(activatedRoute, router, apiHandler, http, location) {
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.apiHandler = apiHandler;
        this.http = http;
        this.location = location;
        this.responseJson = {
            pkId: 0, queryId: '', queryType: '', subject: '', query: '', answer: null, createdBy: null,
            createdByName: null, createdOn: '', updatedBy: null, updatedOn: null, status: '',
            attahments: [{ pkId: 0, extention: '', name: '', type: '' }],
            answers: []
        };
        this.chatList = [];
    }
    ngOnInit() {
        console.log('in query view');
        const ref = this;
        ref.queryId = ref.activatedRoute.snapshot.params['id'];
        console.log(ref.queryId);
        ref.createForm();
        // this.activatedRoute.queryParams.subscribe(
        //   params => {
        //     console.log('Got the JWT as: ', params['jwt']);
        //     this.jwt =  params['jwt'];
        //     console.log(this.jwt)
        //   }
        // )
        ref.callApi();
    }
    callApi() {
        const ref = this;
        ref.apiHandler.viewQueryDetails(ref.queryId, (response) => {
            console.log(JSON.stringify(response));
            if (response.sts === src_app_services_constant_utils__WEBPACK_IMPORTED_MODULE_6__["Constant"].SUCCESS_STATUS) {
                ref.responseJson = response.content;
            }
            setTimeout(() => {
                ref.createForm();
            }, 500);
        }, (error) => {
            console.log(error);
        });
        // ref.apiHandler.getTopAnswers(ref.queryId,(response:any)=>{
        //   console.log(JSON.stringify(response));
        //   if(response.sts===Constant.SUCCESS_STATUS){
        //     ref.chatList=response.content;
        //   }
        // },(error: HttpErrorResponse)=>{
        //   console.log(error);
        // });
    }
    createForm() {
        const ref = this;
        ref.formData = new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormGroup"]({
            pkId: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"](0, [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required]),
            queryId: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"](ref.queryId, [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required]),
            answer: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required]),
            isActive: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]('Y', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required]),
        });
    }
    onBack() {
        const ref = this;
        ref.location.back();
    }
    onSubmit() {
        const ref = this;
        const tempObject = ref.formData.value;
        console.log(tempObject);
        ref.apiHandler.saveAnswer(tempObject, (response) => {
            console.log(JSON.stringify(response));
            if (response.sts === src_app_services_constant_utils__WEBPACK_IMPORTED_MODULE_6__["Constant"].SUCCESS_STATUS) {
                ref.callApi();
                ref.createForm();
            }
        }, (error) => {
            console.log(error);
        });
    }
};
QueryViewComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: src_app_services_api_handler_service__WEBPACK_IMPORTED_MODULE_5__["ApiHandlerService"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"] }
];
QueryViewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-query-view',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./query-view.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/query-view/query-view.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./query-view.component.css */ "./src/app/pages/query-view/query-view.component.css")).default]
    })
], QueryViewComponent);



/***/ }),

/***/ "./src/app/pages/quotation-approval-list/quotation-approval-list.component.css":
/*!*************************************************************************************!*\
  !*** ./src/app/pages/quotation-approval-list/quotation-approval-list.component.css ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3F1b3RhdGlvbi1hcHByb3ZhbC1saXN0L3F1b3RhdGlvbi1hcHByb3ZhbC1saXN0LmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/pages/quotation-approval-list/quotation-approval-list.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/pages/quotation-approval-list/quotation-approval-list.component.ts ***!
  \************************************************************************************/
/*! exports provided: QuotationApprovalListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuotationApprovalListComponent", function() { return QuotationApprovalListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_services_api_handler_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/api-handler.service */ "./src/app/services/api-handler.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var src_app_services_constant_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/constant.service */ "./src/app/services/constant.service.ts");






let QuotationApprovalListComponent = class QuotationApprovalListComponent {
    constructor(router, apiHandler, location, constantService) {
        this.router = router;
        this.apiHandler = apiHandler;
        this.location = location;
        this.constantService = constantService;
        this.loginDetails = JSON.parse(window.localStorage.getItem('loginData'));
        this.roleV = "";
        this.quotationList = [];
    }
    ngOnInit() {
        var ref = this;
        ref.roleV = ref.constantService.rolesManagement.vendorRole;
        ref.apiHandler.quotationApprovalslist((response) => {
            console.log(JSON.stringify(response));
            if (response.sts.toLowerCase() === 'success') {
                ref.quotationList = response.content;
                ref.initializeDatatable();
                console.log(ref.quotationList);
            }
            else {
                ref.initializeDatatable();
            }
        }, (error) => {
            console.log(error);
            ref.initializeDatatable();
        });
    }
    view(item) {
        var ref = this;
        window.localStorage.setItem("quotationAppData", JSON.stringify(item));
        ref.router.navigate(['main-layout/quotationApprovalsView']);
    }
    initializeDatatable() {
        $('#quotationApprovalslist').dataTable().fnDestroy();
        setTimeout(() => {
            $('#quotationApprovalslist').DataTable({
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
};
QuotationApprovalListComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: src_app_services_api_handler_service__WEBPACK_IMPORTED_MODULE_3__["ApiHandlerService"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"] },
    { type: src_app_services_constant_service__WEBPACK_IMPORTED_MODULE_5__["ConstantService"] }
];
QuotationApprovalListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-quotation-approval-list',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./quotation-approval-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/quotation-approval-list/quotation-approval-list.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./quotation-approval-list.component.css */ "./src/app/pages/quotation-approval-list/quotation-approval-list.component.css")).default]
    })
], QuotationApprovalListComponent);



/***/ }),

/***/ "./src/app/pages/quotation-approval-view/quotation-approval-view.component.css":
/*!*************************************************************************************!*\
  !*** ./src/app/pages/quotation-approval-view/quotation-approval-view.component.css ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3F1b3RhdGlvbi1hcHByb3ZhbC12aWV3L3F1b3RhdGlvbi1hcHByb3ZhbC12aWV3LmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/pages/quotation-approval-view/quotation-approval-view.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/pages/quotation-approval-view/quotation-approval-view.component.ts ***!
  \************************************************************************************/
/*! exports provided: QuotationApprovalViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuotationApprovalViewComponent", function() { return QuotationApprovalViewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_services_api_handler_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/api-handler.service */ "./src/app/services/api-handler.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var src_app_services_util_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/util.service */ "./src/app/services/util.service.ts");






let QuotationApprovalViewComponent = class QuotationApprovalViewComponent {
    constructor(router, apiHandler, location, utilService) {
        this.router = router;
        this.apiHandler = apiHandler;
        this.location = location;
        this.utilService = utilService;
        this.quotationData = JSON.parse(window.localStorage.getItem("quotationAppData"));
        this.quotationView = {};
        this.quotMaterialList = [];
        this.rejectReason = "";
    }
    ngOnInit() {
        var ref = this;
        ref.datePickerConfig = Object.assign({}, { containerClass: 'theme-red', showWeekNumbers: false, dateInputFormat: 'DD-MM-YYYY' });
        var temp = ref.quotationData.quotationNo;
        ref.apiHandler.viewQuotationDetails(temp, (response) => {
            console.log(JSON.stringify(response));
            if (response.sts.toLowerCase() === 'success') {
                ref.quotationView = response.content;
                var quotMaterialList = response.content.quotMaterialList;
                for (var i = 0; i < quotMaterialList.length; i++) {
                    if (quotMaterialList[i].estDelDate == "") {
                        quotMaterialList[i]['tempestDelDate'] = "";
                    }
                    else {
                        quotMaterialList[i]['tempestDelDate'] = quotMaterialList[i].estDelDate.split("-").reverse().join("-");
                    }
                    quotMaterialList[i]['tempprice'] = quotMaterialList[i].price == 0 ? "" : quotMaterialList[i].price;
                    quotMaterialList[i]['tempfreight'] = quotMaterialList[i].freight == 0 ? "" : quotMaterialList[i].freight;
                    quotMaterialList[i]['tempdeliveryDate'] = quotMaterialList[i].deliveryDate.split("-").reverse().join("-");
                    var matchDate = quotMaterialList[i]['tempdeliveryDate'];
                    var splitMaxDate = matchDate.split("-");
                    var finalMaxDate = splitMaxDate[1] + "-" + splitMaxDate[0] + "-" + splitMaxDate[2];
                    var checkDate;
                    checkDate = new Date(finalMaxDate);
                    checkDate.setDate(checkDate.getDate());
                    console.log(checkDate);
                    var checkDates = checkDate;
                    quotMaterialList[i]['minMaxDate'] = checkDates;
                }
                ref.quotationView.closeDate;
                var splitMaxDate = ref.quotationView.closeDate.split("-");
                var finalMaxDate = splitMaxDate[1] + "-" + splitMaxDate[0] + "-" + splitMaxDate[2];
                ref.maxDate = new Date(finalMaxDate);
                console.log(ref.maxDate);
                ref.maxDate.setDate(ref.maxDate.getDate());
                console.log(ref.maxDate);
                ref.quotMaterialList = quotMaterialList;
                console.log(ref.quotationView);
                ref.initializeDatatable();
            }
            else {
                ref.initializeDatatable();
            }
        }, (error) => {
            console.log(error);
            ref.initializeDatatable();
        });
    }
    submitResult() {
        var ref = this;
        console.log(ref.quotMaterialList);
        var tempfilterPrice = ref.quotMaterialList.filter((item) => {
            return item.tempprice == 0 || item.tempprice == "" || item.tempprice == undefined || item.tempprice == null || item.tempprice == 'undefined' || item.tempprice == 'null';
        });
        if (tempfilterPrice.length > 0) {
            ref.callAlert("error", "Please enter price", "not");
            return false;
        }
        var tempfilterfreight = ref.quotMaterialList.filter((item) => {
            console.log(item.tempfreight);
            return item.tempfreight == 0 || item.tempfreight == "" || item.tempfreight == undefined || item.tempfreight == null || item.tempfreight == 'undefined' || item.tempfreight == 'null';
        });
        console.log(tempfilterfreight);
        if (tempfilterfreight.length > 0) {
            ref.callAlert("error", "Please enter freight", "not");
            return false;
        }
        var tempfiltertempestDelDate = ref.quotMaterialList.filter((item) => {
            return item.tempestDelDate == "" || item.tempestDelDate == undefined || item.tempestDelDate == null;
        });
        if (tempfiltertempestDelDate.length > 0) {
            ref.callAlert("error", "Please enter est del date", "not");
            return false;
        }
        var tempArr = [];
        for (var i = 0; i < ref.quotMaterialList.length; i++) {
            // ref.quotMaterialList[i]['tempestDelDate'] = ref.quotMaterialList[i].estDelDate
            // ref.quotMaterialList[i]['tempprice'] = ref.quotMaterialList[i].price == 0 ? "" : ref.quotMaterialList[i].price;
            var date1;
            var tempDate2 = "" + ref.quotMaterialList[i]['tempestDelDate'];
            var temptempDate2 = tempDate2.split("-");
            if (temptempDate2.length != 3) {
                date1 = ref.utilService.convertToSqlDate(ref.utilService.getCurrentDateFromObj(ref.quotMaterialList[i]['tempestDelDate']));
            }
            else {
                date1 = ref.utilService.convertToSqlDate(tempDate2);
            }
            tempArr.push({
                "estDelDate": date1,
                "fkQuotDetId": ref.quotMaterialList[i].pkQuotDetId * 1,
                "freight": ref.quotMaterialList[i].tempfreight,
                "isActive": "Y",
                "materialCode": ref.quotMaterialList[i].materialCode,
                "pkSubId": ref.quotMaterialList[i].pkSubId * 1,
                "price": ref.quotMaterialList[i].tempprice * 1,
                "quotationNo": ref.quotationView.quotationNo,
                "itemNo": ref.quotMaterialList[i].itemNo
            });
            console.log(ref.quotMaterialList);
            console.log(tempArr);
        }
        console.log(tempArr);
        var respObj = {};
        respObj['closeDate'] = ref.quotationView.closeDate;
        respObj['quotationNo'] = ref.quotationView.quotationNo;
        respObj['vendorCode'] = ref.quotationData.vendorCode;
        respObj['quotArray'] = tempArr;
        respObj['rejReason'] = "";
        respObj['action'] = "A";
        console.log(respObj);
        ref.apiHandler.quotAction(respObj, (response) => {
            console.log(JSON.stringify(response));
            var msg = response.content;
            if (response.sts.toLowerCase() === "success") {
                ref.callAlert("success", msg, "navigateToList");
            }
            else {
                ref.callAlert("error", msg, "not");
            }
        }, (error) => {
            ref.callAlert("error", "Failed", "not");
            console.log(error);
        });
    }
    back() {
        var ref = this;
        ref.location.back();
    }
    rejectPopupOpen() {
        var ref = this;
        $('#rejectPopupQuotation').modal('show');
        ref.rejectReason = "";
    }
    rejectPopupClose() {
        var ref = this;
        $('#rejectPopupQuotation').modal('hide');
        ref.rejectReason = "";
    }
    rejectPopupSubmit() {
        var ref = this;
        console.log(ref.quotMaterialList);
        var tempfilterPrice = ref.quotMaterialList.filter((item) => {
            return item.tempprice == 0 || item.tempprice == "" || item.tempprice == undefined || item.tempprice == null || item.tempprice == 'undefined' || item.tempprice == 'null';
        });
        if (tempfilterPrice.length > 0) {
            ref.callAlert("error", "Please enter price", "not");
            return false;
        }
        var tempfilterfreight = ref.quotMaterialList.filter((item) => {
            console.log(item.tempfreight);
            return item.tempfreight == 0 || item.tempfreight == "" || item.tempfreight == undefined || item.tempfreight == null || item.tempfreight == 'undefined' || item.tempfreight == 'null';
        });
        console.log(tempfilterfreight);
        if (tempfilterfreight.length > 0) {
            ref.callAlert("error", "Please enter freight", "not");
            return false;
        }
        var tempfiltertempestDelDate = ref.quotMaterialList.filter((item) => {
            return item.tempestDelDate == "" || item.tempestDelDate == undefined || item.tempestDelDate == null;
        });
        if (tempfiltertempestDelDate.length > 0) {
            ref.callAlert("error", "Please enter est del date", "not");
            return false;
        }
        var tempArr = [];
        for (var i = 0; i < ref.quotMaterialList.length; i++) {
            // ref.quotMaterialList[i]['tempestDelDate'] = ref.quotMaterialList[i].estDelDate
            // ref.quotMaterialList[i]['tempprice'] = ref.quotMaterialList[i].price == 0 ? "" : ref.quotMaterialList[i].price;
            var date1;
            var tempDate2 = "" + ref.quotMaterialList[i]['tempestDelDate'];
            var temptempDate2 = tempDate2.split("-");
            if (temptempDate2.length != 3) {
                date1 = ref.utilService.convertToSqlDate(ref.utilService.getCurrentDateFromObj(ref.quotMaterialList[i]['tempestDelDate']));
            }
            else {
                date1 = ref.utilService.convertToSqlDate(tempDate2);
            }
            tempArr.push({
                "estDelDate": date1,
                "fkQuotDetId": ref.quotMaterialList[i].pkQuotDetId * 1,
                "freight": ref.quotMaterialList[i].tempfreight,
                "isActive": "Y",
                "materialCode": ref.quotMaterialList[i].materialCode,
                "pkSubId": ref.quotMaterialList[i].pkSubId * 1,
                "price": ref.quotMaterialList[i].tempprice * 1,
                "quotationNo": ref.quotationView.quotationNo,
                "itemNo": ref.quotMaterialList[i].itemNo
            });
            console.log(ref.quotMaterialList);
            console.log(tempArr);
        }
        console.log(tempArr);
        var respObj = {};
        respObj['closeDate'] = ref.quotationView.closeDate;
        respObj['quotationNo'] = ref.quotationView.quotationNo;
        respObj['vendorCode'] = ref.quotationData.vendorCode;
        respObj['quotArray'] = tempArr;
        respObj['rejReason'] = ref.rejectReason;
        respObj['action'] = "R";
        console.log(respObj);
        ref.apiHandler.quotAction(respObj, (response) => {
            console.log(JSON.stringify(response));
            if (response.sts.toLowerCase() === "success") {
                var msg = response.content;
                $('#rejectPopupQuotation').modal('hide');
                ref.callAlert("success", "Rejected", "navigateToList");
                // ref.callAlert("success", "Rejected", "navigateToList");
            }
            else {
                $('#rejectPopupQuotation').modal('hide');
                ref.callAlert("error", "Failed", "not");
            }
        }, (error) => {
            $('#rejectPopupQuotation').modal('hide');
            ref.callAlert("error", "Failed", "not");
            console.log(error);
        });
    }
    initializeDatatable() {
        $('#quotationApprovalsView').dataTable().fnDestroy();
        setTimeout(() => {
            $('#quotationApprovalsView').DataTable({
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
                ref.location.back();
                $("#alertMsg").modal("hide");
            }
            $("#alertMsg").modal("hide");
        }
        else {
            $("#alertMsg").modal("hide");
        }
    }
};
QuotationApprovalViewComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: src_app_services_api_handler_service__WEBPACK_IMPORTED_MODULE_3__["ApiHandlerService"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"] },
    { type: src_app_services_util_service__WEBPACK_IMPORTED_MODULE_5__["UtilService"] }
];
QuotationApprovalViewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-quotation-approval-view',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./quotation-approval-view.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/quotation-approval-view/quotation-approval-view.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./quotation-approval-view.component.css */ "./src/app/pages/quotation-approval-view/quotation-approval-view.component.css")).default]
    })
], QuotationApprovalViewComponent);



/***/ }),

/***/ "./src/app/pages/quotation-history-list/quotation-history-list.component.css":
/*!***********************************************************************************!*\
  !*** ./src/app/pages/quotation-history-list/quotation-history-list.component.css ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3F1b3RhdGlvbi1oaXN0b3J5LWxpc3QvcXVvdGF0aW9uLWhpc3RvcnktbGlzdC5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/pages/quotation-history-list/quotation-history-list.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/pages/quotation-history-list/quotation-history-list.component.ts ***!
  \**********************************************************************************/
/*! exports provided: QuotationHistoryListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuotationHistoryListComponent", function() { return QuotationHistoryListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_services_api_handler_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/api-handler.service */ "./src/app/services/api-handler.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var src_app_services_constant_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/constant.utils */ "./src/app/services/constant.utils.ts");
/* harmony import */ var src_app_services_constant_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/constant.service */ "./src/app/services/constant.service.ts");







let QuotationHistoryListComponent = class QuotationHistoryListComponent {
    constructor(router, apiHandler, location, constantService) {
        this.router = router;
        this.apiHandler = apiHandler;
        this.location = location;
        this.constantService = constantService;
        this.loginDetails = JSON.parse(window.localStorage.getItem('loginData'));
        this.quotationList = [];
        this.roleV = "";
    }
    ngOnInit() {
        var ref = this;
        ref.roleV = ref.constantService.rolesManagement.vendorRole;
        ref.apiHandler.getQuotationHistory((response) => {
            console.log(JSON.stringify(response));
            if (response.sts.toLowerCase() === src_app_services_constant_utils__WEBPACK_IMPORTED_MODULE_5__["Constant"].SUCCESS_STATUS) {
                ref.quotationList = response.content;
                ref.initializeDatatable();
                console.log(ref.quotationList);
            }
            else {
                ref.initializeDatatable();
            }
        }, (error) => {
            console.log(error);
            ref.initializeDatatable();
        });
    }
    view(item) {
        var ref = this;
        window.localStorage.setItem("quotationHistoryData", JSON.stringify(item));
        ref.router.navigate(['main-layout/quotationHistoryView']);
    }
    initializeDatatable() {
        $('#quotationHistorylist').dataTable().fnDestroy();
        setTimeout(() => {
            $('#quotationHistorylist').DataTable({
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
};
QuotationHistoryListComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: src_app_services_api_handler_service__WEBPACK_IMPORTED_MODULE_3__["ApiHandlerService"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"] },
    { type: src_app_services_constant_service__WEBPACK_IMPORTED_MODULE_6__["ConstantService"] }
];
QuotationHistoryListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-quotation-history-list',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./quotation-history-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/quotation-history-list/quotation-history-list.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./quotation-history-list.component.css */ "./src/app/pages/quotation-history-list/quotation-history-list.component.css")).default]
    })
], QuotationHistoryListComponent);



/***/ }),

/***/ "./src/app/pages/quotation-history-view/quotation-history-view.component.css":
/*!***********************************************************************************!*\
  !*** ./src/app/pages/quotation-history-view/quotation-history-view.component.css ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3F1b3RhdGlvbi1oaXN0b3J5LXZpZXcvcXVvdGF0aW9uLWhpc3Rvcnktdmlldy5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/pages/quotation-history-view/quotation-history-view.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/pages/quotation-history-view/quotation-history-view.component.ts ***!
  \**********************************************************************************/
/*! exports provided: QuotationHistoryViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuotationHistoryViewComponent", function() { return QuotationHistoryViewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_services_api_handler_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/api-handler.service */ "./src/app/services/api-handler.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var src_app_services_constant_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/constant.utils */ "./src/app/services/constant.utils.ts");
/* harmony import */ var src_app_services_util_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/util.service */ "./src/app/services/util.service.ts");







let QuotationHistoryViewComponent = class QuotationHistoryViewComponent {
    constructor(router, apiHandler, location, utilService) {
        this.router = router;
        this.apiHandler = apiHandler;
        this.location = location;
        this.utilService = utilService;
        this.quotationData = JSON.parse(window.localStorage.getItem("quotationHistoryData"));
        this.quotationView = {};
        this.quotMaterialList = [];
    }
    ngOnInit() {
        var ref = this;
        ref.datePickerConfig = Object.assign({}, { containerClass: 'theme-red', showWeekNumbers: false, dateInputFormat: 'DD-MM-YYYY' });
        var temp = ref.quotationData.quotationNo;
        ref.apiHandler.viewQuotationDetails(temp, (response) => {
            console.log(JSON.stringify(response));
            if (response.sts.toLowerCase() === src_app_services_constant_utils__WEBPACK_IMPORTED_MODULE_5__["Constant"].SUCCESS_STATUS) {
                ref.quotationView = response.content;
                var quotMaterialList = response.content.quotMaterialList;
                for (var i = 0; i < quotMaterialList.length; i++) {
                    quotMaterialList[i]['tempestDelDate'] = quotMaterialList[i].estDelDate.split("-").reverse().join("-");
                    quotMaterialList[i]['tempprice'] = quotMaterialList[i].price == 0 ? "" : quotMaterialList[i].price;
                }
                ref.quotMaterialList = quotMaterialList;
                console.log(ref.quotationView);
            }
            else {
            }
        }, (error) => {
            console.log(error);
        });
    }
    back() {
        var ref = this;
        ref.location.back();
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
                ref.router.navigate(['main-layout/quotationList']);
                $("#alertMsg").modal("hide");
            }
            $("#alertMsg").modal("hide");
        }
        else {
            $("#alertMsg").modal("hide");
        }
    }
};
QuotationHistoryViewComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: src_app_services_api_handler_service__WEBPACK_IMPORTED_MODULE_3__["ApiHandlerService"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"] },
    { type: src_app_services_util_service__WEBPACK_IMPORTED_MODULE_6__["UtilService"] }
];
QuotationHistoryViewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-quotation-history-view',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./quotation-history-view.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/quotation-history-view/quotation-history-view.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./quotation-history-view.component.css */ "./src/app/pages/quotation-history-view/quotation-history-view.component.css")).default]
    })
], QuotationHistoryViewComponent);



/***/ }),

/***/ "./src/app/pages/quotation-list/quotation-list.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/pages/quotation-list/quotation-list.component.css ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".btn-link.reject {\r\n    font-weight: 500 !important;\r\n    text-decoration: underline !important;\r\n}\r\n.btn-link.reject:hover {\r\n    text-decoration: none !important;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcXVvdGF0aW9uLWxpc3QvcXVvdGF0aW9uLWxpc3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLDJCQUEyQjtJQUMzQixxQ0FBcUM7QUFDekM7QUFDQTtJQUNJLGdDQUFnQztBQUNwQyIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3F1b3RhdGlvbi1saXN0L3F1b3RhdGlvbi1saXN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYnRuLWxpbmsucmVqZWN0IHtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDAgIWltcG9ydGFudDtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lICFpbXBvcnRhbnQ7XHJcbn1cclxuLmJ0bi1saW5rLnJlamVjdDpob3ZlciB7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmUgIWltcG9ydGFudDtcclxufSJdfQ== */");

/***/ }),

/***/ "./src/app/pages/quotation-list/quotation-list.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/pages/quotation-list/quotation-list.component.ts ***!
  \******************************************************************/
/*! exports provided: QuotationListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuotationListComponent", function() { return QuotationListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_services_api_handler_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/api-handler.service */ "./src/app/services/api-handler.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var src_app_services_constant_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/constant.utils */ "./src/app/services/constant.utils.ts");
/* harmony import */ var src_app_services_constant_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/constant.service */ "./src/app/services/constant.service.ts");







let QuotationListComponent = class QuotationListComponent {
    constructor(router, apiHandler, location, constantService) {
        this.router = router;
        this.apiHandler = apiHandler;
        this.location = location;
        this.constantService = constantService;
        this.loginDetails = JSON.parse(window.localStorage.getItem('loginData'));
        this.roleV = "";
        this.quotationList = [];
        this.reason = "";
    }
    ngOnInit() {
        var ref = this;
        ref.roleV = ref.constantService.rolesManagement.vendorRole;
        ref.apiHandler.getQuotationList((response) => {
            console.log(JSON.stringify(response));
            if (response.sts.toLowerCase() === src_app_services_constant_utils__WEBPACK_IMPORTED_MODULE_5__["Constant"].SUCCESS_STATUS) {
                ref.quotationList = response.content;
                ref.initializeDatatable();
                console.log(ref.quotationList);
            }
            else {
                ref.initializeDatatable();
            }
        }, (error) => {
            console.log(error);
            ref.initializeDatatable();
        });
    }
    showReason(item) {
        var ref = this;
        console.log("call");
        ref.reason = item.rejReason;
        ref.callAlert("error", ref.reason, "not");
    }
    view(item) {
        var ref = this;
        window.localStorage.setItem("quotationData", JSON.stringify(item));
        ref.router.navigate(['main-layout/quotationView']);
    }
    initializeDatatable() {
        $('#quotationlist').dataTable().fnDestroy();
        setTimeout(() => {
            $('#quotationlist').DataTable({
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
                ref.router.navigate(['main-layout/orderList']);
                $("#alertMsg").modal("hide");
            }
            $("#alertMsg").modal("hide");
        }
        else {
            $("#alertMsg").modal("hide");
        }
    }
};
QuotationListComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: src_app_services_api_handler_service__WEBPACK_IMPORTED_MODULE_3__["ApiHandlerService"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"] },
    { type: src_app_services_constant_service__WEBPACK_IMPORTED_MODULE_6__["ConstantService"] }
];
QuotationListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-quotation-list',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./quotation-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/quotation-list/quotation-list.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./quotation-list.component.css */ "./src/app/pages/quotation-list/quotation-list.component.css")).default]
    })
], QuotationListComponent);



/***/ }),

/***/ "./src/app/pages/quotation-view/quotation-view.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/pages/quotation-view/quotation-view.component.css ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3F1b3RhdGlvbi12aWV3L3F1b3RhdGlvbi12aWV3LmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/pages/quotation-view/quotation-view.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/pages/quotation-view/quotation-view.component.ts ***!
  \******************************************************************/
/*! exports provided: QuotationViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuotationViewComponent", function() { return QuotationViewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_services_api_handler_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/api-handler.service */ "./src/app/services/api-handler.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var src_app_services_constant_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/constant.utils */ "./src/app/services/constant.utils.ts");
/* harmony import */ var src_app_services_util_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/util.service */ "./src/app/services/util.service.ts");







let QuotationViewComponent = class QuotationViewComponent {
    constructor(router, apiHandler, location, utilService) {
        this.router = router;
        this.apiHandler = apiHandler;
        this.location = location;
        this.utilService = utilService;
        this.quotationData = JSON.parse(window.localStorage.getItem("quotationData"));
        this.quotationView = {};
        this.quotMaterialList = [];
    }
    ngOnInit() {
        var ref = this;
        $(function () {
            $('[data-toggle="popover"]').popover();
        });
        ref.datePickerConfig = Object.assign({}, { containerClass: 'theme-red', showWeekNumbers: false, dateInputFormat: 'DD-MM-YYYY' });
        var temp = ref.quotationData.quotationNo;
        ref.apiHandler.viewQuotationDetails(temp, (response) => {
            console.log(JSON.stringify(response));
            if (response.sts.toLowerCase() === src_app_services_constant_utils__WEBPACK_IMPORTED_MODULE_5__["Constant"].SUCCESS_STATUS) {
                ref.quotationView = response.content;
                ref.rejectReason = ref.quotationView.rejReason;
                console.log("ok");
                console.log(ref.rejectReason);
                var quotMaterialList = response.content.quotMaterialList;
                for (var i = 0; i < quotMaterialList.length; i++) {
                    if (quotMaterialList[i].estDelDate == "") {
                        quotMaterialList[i]['tempestDelDate'] = "";
                    }
                    else {
                        quotMaterialList[i]['tempestDelDate'] = quotMaterialList[i].estDelDate.split("-").reverse().join("-");
                    }
                    quotMaterialList[i]['tempprice'] = quotMaterialList[i].price == 0 ? "" : quotMaterialList[i].price;
                    quotMaterialList[i]['tempfreight'] = quotMaterialList[i].freight == 0 ? "" : quotMaterialList[i].freight;
                    quotMaterialList[i]['tempdeliveryDate'] = quotMaterialList[i].deliveryDate.split("-").reverse().join("-");
                    var matchDate = quotMaterialList[i]['tempdeliveryDate'];
                    var splitMaxDate = matchDate.split("-");
                    var finalMaxDate = splitMaxDate[1] + "-" + splitMaxDate[0] + "-" + splitMaxDate[2];
                    var checkDate;
                    checkDate = new Date(finalMaxDate);
                    checkDate.setDate(checkDate.getDate());
                    console.log(checkDate);
                    var checkDates = checkDate;
                    quotMaterialList[i]['minMaxDate'] = checkDates;
                }
                // ref.quotationView.closeDate
                // var matchDate = ref.quotationView.closeDate
                // var splitMaxDate = matchDate.split("-");
                // var finalMaxDate = splitMaxDate[1] + "-" + splitMaxDate[0] + "-" + splitMaxDate[2];
                // ref.maxDate = new Date(finalMaxDate);
                // console.log(ref.maxDate)
                // ref.maxDate.setDate(ref.maxDate.getDate());
                // console.log(ref.maxDate)
                ref.quotMaterialList = quotMaterialList;
                console.log("check");
                console.log(ref.quotMaterialList);
                console.log(ref.quotationView);
                ref.initializeDatatable();
            }
            else {
                ref.initializeDatatable();
            }
        }, (error) => {
            ref.initializeDatatable();
            console.log(error);
        });
    }
    priceChange(item) {
        var ref = this;
        // negative no.
        item.tempprice = item.tempprice + "";
        if (item.tempprice.search("-") > -1) {
            ref.callAlert("error", " Price cannot be negative number", "not");
            item.tempprice = 0;
            return false;
        }
    }
    freightChange(item) {
        var ref = this;
        // negative no.
        item.tempfreight = item.tempfreight + "";
        if (item.tempfreight.search("-") > -1) {
            ref.callAlert("error", " Freight cannot be negative number", "not");
            item.tempfreight = 0;
            return false;
        }
    }
    submitResult() {
        var ref = this;
        console.log(ref.quotMaterialList);
        var tempfilterPrice = ref.quotMaterialList.filter((item) => {
            return item.tempprice == 0 || item.tempprice == "" || item.tempprice == undefined || item.tempprice == null || item.tempprice == 'undefined' || item.tempprice == 'null';
        });
        if (tempfilterPrice.length > 0) {
            ref.callAlert("error", "Please enter price", "not");
            return false;
        }
        var tempfilterfreight = ref.quotMaterialList.filter((item) => {
            console.log(item.tempfreight);
            return item.tempfreight == 0 || item.tempfreight == "" || item.tempfreight == undefined || item.tempfreight == null || item.tempfreight == 'undefined' || item.tempfreight == 'null';
        });
        console.log(tempfilterfreight);
        if (tempfilterfreight.length > 0) {
            ref.callAlert("error", "Please enter freight", "not");
            return false;
        }
        var tempfiltertempestDelDate = ref.quotMaterialList.filter((item) => {
            return item.tempestDelDate == "" || item.tempestDelDate == undefined || item.tempestDelDate == null;
        });
        if (tempfiltertempestDelDate.length > 0) {
            ref.callAlert("error", "Please enter est del date", "not");
            return false;
        }
        var tempArr = [];
        for (var i = 0; i < ref.quotMaterialList.length; i++) {
            // ref.quotMaterialList[i]['tempestDelDate'] = ref.quotMaterialList[i].estDelDate
            // ref.quotMaterialList[i]['tempprice'] = ref.quotMaterialList[i].price == 0 ? "" : ref.quotMaterialList[i].price;
            var date1;
            var tempDate2 = "" + ref.quotMaterialList[i]['tempestDelDate'];
            var temptempDate2 = tempDate2.split("-");
            if (temptempDate2.length != 3) {
                date1 = ref.utilService.convertToSqlDate(ref.utilService.getCurrentDateFromObj(ref.quotMaterialList[i]['tempestDelDate']));
            }
            else {
                date1 = ref.utilService.convertToSqlDate(tempDate2);
            }
            tempArr.push({
                "estDelDate": date1,
                "fkQuotDetId": ref.quotMaterialList[i].pkQuotDetId * 1,
                "freight": ref.quotMaterialList[i].tempfreight,
                "isActive": "Y",
                "materialCode": ref.quotMaterialList[i].materialCode,
                "pkSubId": ref.quotMaterialList[i].pkSubId * 1,
                "price": ref.quotMaterialList[i].tempprice * 1,
                "quotationNo": ref.quotationView.quotationNo,
                "itemNo": ref.quotMaterialList[i].itemNo
            });
            console.log(ref.quotMaterialList);
            console.log(tempArr);
        }
        console.log(tempArr);
        var respObj = {};
        respObj['closeDate'] = ref.quotationView.closeDate;
        respObj['quotationNo'] = ref.quotationView.quotationNo;
        respObj['vendorCode'] = ref.quotationData.vendorCode;
        respObj['quotArray'] = tempArr;
        console.log(respObj);
        ref.apiHandler.saveQuotationDetails(respObj, (response) => {
            console.log(JSON.stringify(response));
            if (response.sts.toLowerCase() === "success") {
                ref.quotationView = response.content;
                ref.callAlert("success", "Successfully submitted", "navigateToList");
            }
            else {
                ref.callAlert("error", "Failed", "not");
            }
        }, (error) => {
            ref.callAlert("error", "Failed", "not");
            console.log(error);
        });
    }
    back() {
        var ref = this;
        ref.location.back();
    }
    ngOnDestroy() {
        $("#reasonId").popover('hide');
    }
    initializeDatatable() {
        $('#quotationView').dataTable().fnDestroy();
        setTimeout(() => {
            $('#quotationView').DataTable({
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
                ref.router.navigate(['main-layout/quotationList']);
                $("#alertMsg").modal("hide");
            }
            $("#alertMsg").modal("hide");
        }
        else {
            $("#alertMsg").modal("hide");
        }
    }
};
QuotationViewComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: src_app_services_api_handler_service__WEBPACK_IMPORTED_MODULE_3__["ApiHandlerService"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"] },
    { type: src_app_services_util_service__WEBPACK_IMPORTED_MODULE_6__["UtilService"] }
];
QuotationViewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-quotation-view',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./quotation-view.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/quotation-view/quotation-view.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./quotation-view.component.css */ "./src/app/pages/quotation-view/quotation-view.component.css")).default]
    })
], QuotationViewComponent);



/***/ }),

/***/ "./src/app/pages/session-expired/session-expired.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/pages/session-expired/session-expired.component.css ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".session-expired-bg {\r\n    font-family:\"Open Sans\", sans-serif;\r\n    font-size: .9rem;\r\n    font-weight: 400;\r\n    line-height: 1.5;\r\n    color:#222222;\r\n    background-color: #FF491C;\r\n    background-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 800 400'%3E%3Cdefs%3E%3CradialGradient id='a' cx='396' cy='281' r='514' gradientUnits='userSpaceOnUse'%3E%3Cstop offset='0' stop-color='%23FFF392'/%3E%3Cstop offset='1' stop-color='%23FF491C'/%3E%3C/radialGradient%3E%3ClinearGradient id='b' gradientUnits='userSpaceOnUse' x1='400' y1='148' x2='400' y2='333'%3E%3Cstop offset='0' stop-color='%23FFD68D' stop-opacity='0'/%3E%3Cstop offset='1' stop-color='%23FFD68D' stop-opacity='0.5'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect fill='url(%23a)' width='800' height='400'/%3E%3Cg fill-opacity='0.4'%3E%3Ccircle fill='url(%23b)' cx='267.5' cy='61' r='300'/%3E%3Ccircle fill='url(%23b)' cx='532.5' cy='61' r='300'/%3E%3Ccircle fill='url(%23b)' cx='400' cy='30' r='300'/%3E%3C/g%3E%3C/svg%3E\");\r\n    background-attachment: fixed;\r\n    background-size: cover;\r\n    margin-top: -4rem !important;\r\n  }\r\n  .session-expired-title {\r\n    font-family: \"Open Sans\", sans-serif !important;\r\n    font-weight: 500;\r\n    color: #222222;\r\n    font-size: 2.1rem;\r\n    text-shadow: 0px 6px 5px rgb(225 225 225);\r\n  }\r\n  .card {\r\n    box-shadow: none;\r\n    border-radius: 0px;\r\n  }\r\n  .btn-login {\r\n    color: #fff;\r\n    background: linear-gradient(0deg, #ff8b4c 1.68%, #ff4519 100%);\r\n    border-color: #ffb184;\r\n    font-weight: 600;\r\n    box-shadow: 0px 8px 16px rgb(221 221 221 / 81%);\r\n  }\r\n  .btn-login:hover {\r\n    color: #fff;\r\n    background: linear-gradient(0deg, #ff4519 1.68%, #f83b0c 100%);\r\n    border-color: #ffb184;\r\n  }\r\n  .btn-login:not(:disabled):not(.disabled).active, .btn-login:not(:disabled):not(.disabled):active, .show>.btn-login.dropdown-toggle {\r\n    color: #fff;\r\n    background: linear-gradient(0deg, #ff4519 1.68%, #f83b0c 100%);\r\n    border-color: #ffb184;\r\n  }\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvc2Vzc2lvbi1leHBpcmVkL3Nlc3Npb24tZXhwaXJlZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksbUNBQW1DO0lBQ25DLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYix5QkFBeUI7SUFDekIsZzJCQUFnMkI7SUFDaDJCLDRCQUE0QjtJQUM1QixzQkFBc0I7SUFDdEIsNEJBQTRCO0VBQzlCO0VBQ0E7SUFDRSwrQ0FBK0M7SUFDL0MsZ0JBQWdCO0lBQ2hCLGNBQWM7SUFDZCxpQkFBaUI7SUFDakIseUNBQXlDO0VBQzNDO0VBQ0E7SUFDRSxnQkFBZ0I7SUFDaEIsa0JBQWtCO0VBQ3BCO0VBQ0E7SUFDRSxXQUFXO0lBQ1gsOERBQThEO0lBQzlELHFCQUFxQjtJQUNyQixnQkFBZ0I7SUFDaEIsK0NBQStDO0VBQ2pEO0VBQ0E7SUFDRSxXQUFXO0lBQ1gsOERBQThEO0lBQzlELHFCQUFxQjtFQUN2QjtFQUNBO0lBQ0UsV0FBVztJQUNYLDhEQUE4RDtJQUM5RCxxQkFBcUI7RUFDdkIiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9zZXNzaW9uLWV4cGlyZWQvc2Vzc2lvbi1leHBpcmVkLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2Vzc2lvbi1leHBpcmVkLWJnIHtcclxuICAgIGZvbnQtZmFtaWx5OlwiT3BlbiBTYW5zXCIsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXNpemU6IC45cmVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjU7XHJcbiAgICBjb2xvcjojMjIyMjIyO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGNDkxQztcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbCwlM0NzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB3aWR0aD0nMTAwJTI1JyBoZWlnaHQ9JzEwMCUyNScgdmlld0JveD0nMCAwIDgwMCA0MDAnJTNFJTNDZGVmcyUzRSUzQ3JhZGlhbEdyYWRpZW50IGlkPSdhJyBjeD0nMzk2JyBjeT0nMjgxJyByPSc1MTQnIGdyYWRpZW50VW5pdHM9J3VzZXJTcGFjZU9uVXNlJyUzRSUzQ3N0b3Agb2Zmc2V0PScwJyBzdG9wLWNvbG9yPSclMjNGRkYzOTInLyUzRSUzQ3N0b3Agb2Zmc2V0PScxJyBzdG9wLWNvbG9yPSclMjNGRjQ5MUMnLyUzRSUzQy9yYWRpYWxHcmFkaWVudCUzRSUzQ2xpbmVhckdyYWRpZW50IGlkPSdiJyBncmFkaWVudFVuaXRzPSd1c2VyU3BhY2VPblVzZScgeDE9JzQwMCcgeTE9JzE0OCcgeDI9JzQwMCcgeTI9JzMzMyclM0UlM0NzdG9wIG9mZnNldD0nMCcgc3RvcC1jb2xvcj0nJTIzRkZENjhEJyBzdG9wLW9wYWNpdHk9JzAnLyUzRSUzQ3N0b3Agb2Zmc2V0PScxJyBzdG9wLWNvbG9yPSclMjNGRkQ2OEQnIHN0b3Atb3BhY2l0eT0nMC41Jy8lM0UlM0MvbGluZWFyR3JhZGllbnQlM0UlM0MvZGVmcyUzRSUzQ3JlY3QgZmlsbD0ndXJsKCUyM2EpJyB3aWR0aD0nODAwJyBoZWlnaHQ9JzQwMCcvJTNFJTNDZyBmaWxsLW9wYWNpdHk9JzAuNCclM0UlM0NjaXJjbGUgZmlsbD0ndXJsKCUyM2IpJyBjeD0nMjY3LjUnIGN5PSc2MScgcj0nMzAwJy8lM0UlM0NjaXJjbGUgZmlsbD0ndXJsKCUyM2IpJyBjeD0nNTMyLjUnIGN5PSc2MScgcj0nMzAwJy8lM0UlM0NjaXJjbGUgZmlsbD0ndXJsKCUyM2IpJyBjeD0nNDAwJyBjeT0nMzAnIHI9JzMwMCcvJTNFJTNDL2clM0UlM0Mvc3ZnJTNFXCIpO1xyXG4gICAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICBtYXJnaW4tdG9wOiAtNHJlbSAhaW1wb3J0YW50O1xyXG4gIH1cclxuICAuc2Vzc2lvbi1leHBpcmVkLXRpdGxlIHtcclxuICAgIGZvbnQtZmFtaWx5OiBcIk9wZW4gU2Fuc1wiLCBzYW5zLXNlcmlmICFpbXBvcnRhbnQ7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgY29sb3I6ICMyMjIyMjI7XHJcbiAgICBmb250LXNpemU6IDIuMXJlbTtcclxuICAgIHRleHQtc2hhZG93OiAwcHggNnB4IDVweCByZ2IoMjI1IDIyNSAyMjUpO1xyXG4gIH1cclxuICAuY2FyZCB7XHJcbiAgICBib3gtc2hhZG93OiBub25lO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMHB4O1xyXG4gIH1cclxuICAuYnRuLWxvZ2luIHtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDBkZWcsICNmZjhiNGMgMS42OCUsICNmZjQ1MTkgMTAwJSk7XHJcbiAgICBib3JkZXItY29sb3I6ICNmZmIxODQ7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDhweCAxNnB4IHJnYigyMjEgMjIxIDIyMSAvIDgxJSk7XHJcbiAgfVxyXG4gIC5idG4tbG9naW46aG92ZXIge1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMGRlZywgI2ZmNDUxOSAxLjY4JSwgI2Y4M2IwYyAxMDAlKTtcclxuICAgIGJvcmRlci1jb2xvcjogI2ZmYjE4NDtcclxuICB9XHJcbiAgLmJ0bi1sb2dpbjpub3QoOmRpc2FibGVkKTpub3QoLmRpc2FibGVkKS5hY3RpdmUsIC5idG4tbG9naW46bm90KDpkaXNhYmxlZCk6bm90KC5kaXNhYmxlZCk6YWN0aXZlLCAuc2hvdz4uYnRuLWxvZ2luLmRyb3Bkb3duLXRvZ2dsZSB7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgwZGVnLCAjZmY0NTE5IDEuNjglLCAjZjgzYjBjIDEwMCUpO1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjZmZiMTg0O1xyXG4gIH1cclxuIl19 */");

/***/ }),

/***/ "./src/app/pages/session-expired/session-expired.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/pages/session-expired/session-expired.component.ts ***!
  \********************************************************************/
/*! exports provided: SessionExpiredComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SessionExpiredComponent", function() { return SessionExpiredComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



let SessionExpiredComponent = class SessionExpiredComponent {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() {
    }
    navigate() {
        var ref = this;
        ref.router.navigate(['']);
    }
};
SessionExpiredComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
SessionExpiredComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-session-expired',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./session-expired.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/session-expired/session-expired.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./session-expired.component.css */ "./src/app/pages/session-expired/session-expired.component.css")).default]
    })
], SessionExpiredComponent);



/***/ }),

/***/ "./src/app/pages/side-menu/side-menu.component.css":
/*!*********************************************************!*\
  !*** ./src/app/pages/side-menu/side-menu.component.css ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3NpZGUtbWVudS9zaWRlLW1lbnUuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/pages/side-menu/side-menu.component.ts":
/*!********************************************************!*\
  !*** ./src/app/pages/side-menu/side-menu.component.ts ***!
  \********************************************************/
/*! exports provided: SideMenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SideMenuComponent", function() { return SideMenuComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let SideMenuComponent = class SideMenuComponent {
    constructor() {
        this.sideMenu = JSON.parse(window.localStorage.getItem('sideMenu'));
    }
    ngOnInit() {
    }
};
SideMenuComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-side-menu',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./side-menu.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/side-menu/side-menu.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./side-menu.component.css */ "./src/app/pages/side-menu/side-menu.component.css")).default]
    })
], SideMenuComponent);



/***/ }),

/***/ "./src/app/pages/sign-up-page/sign-up-page.component.css":
/*!***************************************************************!*\
  !*** ./src/app/pages/sign-up-page/sign-up-page.component.css ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3NpZ24tdXAtcGFnZS9zaWduLXVwLXBhZ2UuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/pages/sign-up-page/sign-up-page.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/pages/sign-up-page/sign-up-page.component.ts ***!
  \**************************************************************/
/*! exports provided: SignUpPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignUpPageComponent", function() { return SignUpPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let SignUpPageComponent = class SignUpPageComponent {
    ngOnInit() {
        throw new Error('Method not implemented.');
    }
};
SignUpPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-sign-up-page',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./sign-up-page.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/sign-up-page/sign-up-page.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./sign-up-page.component.css */ "./src/app/pages/sign-up-page/sign-up-page.component.css")).default]
    })
], SignUpPageComponent);



/***/ }),

/***/ "./src/app/pages/success-error-message/success-error-message.component.css":
/*!*********************************************************************************!*\
  !*** ./src/app/pages/success-error-message/success-error-message.component.css ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3N1Y2Nlc3MtZXJyb3ItbWVzc2FnZS9zdWNjZXNzLWVycm9yLW1lc3NhZ2UuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/pages/success-error-message/success-error-message.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/pages/success-error-message/success-error-message.component.ts ***!
  \********************************************************************************/
/*! exports provided: SuccessErrorMessageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SuccessErrorMessageComponent", function() { return SuccessErrorMessageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_services_api_handler_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/api-handler.service */ "./src/app/services/api-handler.service.ts");





let SuccessErrorMessageComponent = class SuccessErrorMessageComponent {
    constructor(router, apiHandler, http) {
        this.router = router;
        this.apiHandler = apiHandler;
        this.http = http;
        this.alertResponse = { message: '', status: '', route: '' };
    }
    ngOnInit() {
    }
    okAlert() {
        const ref = this;
        console.log(JSON.stringify(ref.alertResponse));
        const temp = ref.alertResponse.route;
        $('#alertMsg').modal('hide');
        ref.router.navigate([temp]);
    }
};
SuccessErrorMessageComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: src_app_services_api_handler_service__WEBPACK_IMPORTED_MODULE_4__["ApiHandlerService"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])()
], SuccessErrorMessageComponent.prototype, "alertResponse", void 0);
SuccessErrorMessageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-success-error-message',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./success-error-message.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/success-error-message/success-error-message.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./success-error-message.component.css */ "./src/app/pages/success-error-message/success-error-message.component.css")).default]
    })
], SuccessErrorMessageComponent);



/***/ }),

/***/ "./src/app/pages/user-creation/user-creation.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/pages/user-creation/user-creation.component.css ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3VzZXItY3JlYXRpb24vdXNlci1jcmVhdGlvbi5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/pages/user-creation/user-creation.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/pages/user-creation/user-creation.component.ts ***!
  \****************************************************************/
/*! exports provided: UserCreationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserCreationComponent", function() { return UserCreationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_services_api_handler_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/api-handler.service */ "./src/app/services/api-handler.service.ts");
/* harmony import */ var src_app_services_constant_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/constant.utils */ "./src/app/services/constant.utils.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _dialog_box_dialog_box_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../dialog-box/dialog-box.component */ "./src/app/pages/dialog-box/dialog-box.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");










let UserCreationComponent = class UserCreationComponent {
    constructor(router, apiHandler, http, location, dialog) {
        this.router = router;
        this.apiHandler = apiHandler;
        this.http = http;
        this.location = location;
        this.dialog = dialog;
        this.requestJson = {
            userId: '', firstName: '', lastName: '', mobileNo: '', emailId: '', id: 0,
            userType: '', userLogId: '', isActive: '', isLocked: ''
        };
        this.userList = [];
        this.userTypeList = [];
        this.userIdDisable = false;
        this.alertResponse = { message: '', status: '', route: '' };
        this.lock_UnlockUserObj = {};
    }
    ngOnInit() {
        const ref = this;
        ref.createForm();
        ref.callApi();
    }
    createForm() {
        const ref = this;
        ref.requestJson = {
            userId: '', firstName: '', lastName: '', mobileNo: '', emailId: '', id: 0,
            userType: '', userLogId: '', isActive: '', isLocked: ''
        };
        ref.formData = new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormGroup"]({
            userId: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].required]),
            firstName: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].pattern('^[a-zA-Z]+$')]),
            lastName: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].pattern('^[a-zA-Z]+$')]),
            mobileNo: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].pattern('^[0-9]{10}$')]),
            emailId: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]),
            id: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](0),
            userType: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].required]),
            isActive: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"]('Y'),
            isLocked: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"]('N'),
        });
    }
    onCreate() {
        const ref = this;
        ref.createForm();
        ref.userIdDisable = false;
        setTimeout(() => {
            $('#createOrUpdateUser').modal('show');
        }, 500);
    }
    onEdit(user) {
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
            console.log(user);
            $('#createOrUpdateUser').modal('show');
        }, 500);
    }
    callApi() {
        const ref = this;
        ref.apiHandler.getUserList((response) => {
            console.log(JSON.stringify(response));
            if (response.sts === src_app_services_constant_utils__WEBPACK_IMPORTED_MODULE_6__["Constant"].SUCCESS_STATUS) {
                ref.userList = response.content;
            }
            else {
                ref.userList = [];
            }
            ref.initializeDatatable();
        }, (error) => {
            console.log(error);
            ref.userList = [];
            ref.initializeDatatable();
        });
        ref.apiHandler.getUserCreationMaster((response) => {
            console.log(JSON.stringify(response));
            if (response.sts === src_app_services_constant_utils__WEBPACK_IMPORTED_MODULE_6__["Constant"].SUCCESS_STATUS) {
                ref.userTypeList = response.content.roleMst;
            }
        }, (error) => {
            console.log(error);
        });
    }
    initializeDatatable() {
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
    onDeleteCofirm(user) {
        const ref = this;
        $('#alertDeleteCoOwner').modal('show');
        ref.requestJson.firstName = user.firstName;
        ref.requestJson.lastName = user.lastName;
        ref.requestJson.emailId = user.emailId;
        ref.requestJson.mobileNo = user.mobileNo;
        ref.requestJson.userId = user.userId;
        ref.requestJson.userType = user.roleId;
        ref.requestJson.isActive = 'N';
        ref.requestJson.isLocked = user.isLocked;
        ref.requestJson.id = user.id;
    }
    onDeleteUser() {
        const ref = this;
        $('#alertDeleteCoOwner').modal('hide');
        console.log('requestJson=> ' + JSON.stringify(ref.requestJson));
        ref.apiHandler.saveUser(ref.requestJson, (response) => {
            console.log(JSON.stringify(response));
            setTimeout(() => {
                $('#alertMsg').modal('show');
            }, 1000);
            if (response.sts === src_app_services_constant_utils__WEBPACK_IMPORTED_MODULE_6__["Constant"].SUCCESS_STATUS) {
                ref.alertResponse.message = src_app_services_constant_utils__WEBPACK_IMPORTED_MODULE_6__["Constant"].SUCCESS_MESSAGE;
                // ref.alertResponse.route='userCreation';
            }
            else {
                ref.alertResponse.message = response.msg;
            }
            ref.alertResponse.status = response.sts;
        }, (error) => {
            setTimeout(() => {
                $('#alertMsg').modal('show');
            }, 1000);
            ref.alertResponse.message = src_app_services_constant_utils__WEBPACK_IMPORTED_MODULE_6__["Constant"].ERROR_MESSAGE;
            ref.alertResponse.status = src_app_services_constant_utils__WEBPACK_IMPORTED_MODULE_6__["Constant"].ERROR_STATUS;
            ref.alertResponse.route = '';
            console.log(error);
        });
    }
    onSubmit() {
        const ref = this;
        const tempObject = ref.formData.value;
        console.log('requestJson=> ' + JSON.stringify(tempObject));
        ref.apiHandler.saveUser(tempObject, (response) => {
            console.log(JSON.stringify(response));
            setTimeout(() => {
                $('#createOrUpdateUser').modal('hide');
                $('#alertMsg').modal('show');
            }, 1000);
            if (response.sts === src_app_services_constant_utils__WEBPACK_IMPORTED_MODULE_6__["Constant"].SUCCESS_STATUS) {
                ref.alertResponse.message = src_app_services_constant_utils__WEBPACK_IMPORTED_MODULE_6__["Constant"].SUCCESS_MESSAGE;
                // ref.alertResponse.route='main-layout/userCreation';
            }
            else {
                ref.alertResponse.message = response.msg;
            }
            ref.alertResponse.status = response.sts;
        }, (error) => {
            setTimeout(() => {
                $('#alertMsg').modal('show');
            }, 1000);
            ref.alertResponse.message = src_app_services_constant_utils__WEBPACK_IMPORTED_MODULE_6__["Constant"].ERROR_MESSAGE;
            ref.alertResponse.status = src_app_services_constant_utils__WEBPACK_IMPORTED_MODULE_6__["Constant"].ERROR_STATUS;
            ref.alertResponse.route = '';
            console.log(error);
        });
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
    openDialog() {
        const dialogRef = this.dialog.open(_dialog_box_dialog_box_component__WEBPACK_IMPORTED_MODULE_8__["DialogBoxComponent"], {
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
        ref.lock_UnlockUserObj;
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
        ref.lock_UnlockUserObj.userType = ref.lock_UnlockUserObj.roleId;
        ref.lock_UnlockUserObj.isLocked = ref.lock_UnlockUserObj.isLocked == "Y" ? "N" : "Y";
        console.log('requestJson=> ' + JSON.stringify(ref.lock_UnlockUserObj));
        $('#alertLock').modal('hide');
        ref.apiHandler.saveUser(ref.lock_UnlockUserObj, (response) => {
            console.log(JSON.stringify(response));
            // setTimeout(() => {
            //   $('#alertMsg').modal('show');
            // }, 1000);
            $('#alertLock').modal('hide');
            if (response.sts === "success") {
                ref.callApi();
                // ref.alertResponse.route='userCreation';
            }
            else {
                $('#alertLock').modal('hide');
                ref.callAlert("error", "Failed", "not");
            }
        }, (error) => {
            $('#alertLock').modal('hide');
            ref.callAlert("error", "Failed", "not");
            console.log(error);
        });
    }
    no_Lock_Unlock() {
        var ref = this;
        ref.lock_UnlockUserObj = {};
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
        }
        else {
            $("#alertMsg1").modal("hide");
        }
    }
};
UserCreationComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: src_app_services_api_handler_service__WEBPACK_IMPORTED_MODULE_5__["ApiHandlerService"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatDialog"] }
];
UserCreationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-user-creation',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./user-creation.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/user-creation/user-creation.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./user-creation.component.css */ "./src/app/pages/user-creation/user-creation.component.css")).default]
    })
], UserCreationComponent);



/***/ }),

/***/ "./src/app/pages/vendor-access/vendor-access.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/pages/vendor-access/vendor-access.component.css ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3ZlbmRvci1hY2Nlc3MvdmVuZG9yLWFjY2Vzcy5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/pages/vendor-access/vendor-access.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/pages/vendor-access/vendor-access.component.ts ***!
  \****************************************************************/
/*! exports provided: VendorAccessComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VendorAccessComponent", function() { return VendorAccessComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_services_api_handler_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/api-handler.service */ "./src/app/services/api-handler.service.ts");
/* harmony import */ var src_app_services_constant_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/constant.utils */ "./src/app/services/constant.utils.ts");
/* harmony import */ var src_app_services_util_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/util.service */ "./src/app/services/util.service.ts");






let VendorAccessComponent = class VendorAccessComponent {
    constructor(router, apiHandler, utilService) {
        this.router = router;
        this.apiHandler = apiHandler;
        this.utilService = utilService;
        this.vendorDetails = [];
        this.lock_UnlockUserObj = {};
        this.alertResponse = { message: '', status: '', route: '' };
    }
    ngOnInit() {
        const ref = this;
        ref.callApi();
    }
    callApi() {
        const ref = this;
        ref.apiHandler.getVendorAccess((response) => {
            console.log(JSON.stringify(response));
            if (response.sts.toLowerCase() === src_app_services_constant_utils__WEBPACK_IMPORTED_MODULE_4__["Constant"].SUCCESS_STATUS) {
                ref.vendorDetails = response.content;
                console.log(ref.vendorDetails);
            }
            else {
                ref.vendorDetails = [];
            }
            ref.initializeDatatable();
        }, (error) => {
            console.log(error);
            ref.vendorDetails = [];
            ref.initializeDatatable();
        });
    }
    initializeDatatable() {
        $('#vendorDetails').dataTable().fnDestroy();
        setTimeout(() => {
            $('#vendorDetails').DataTable({
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
    openLock_Unloc_popup(user) {
        var ref = this;
        $('#alertLock').modal('show');
        ref.lock_UnlockUserObj = user;
    }
    yes_Lock_UnLock() {
        var ref = this;
        ref.lock_UnlockUserObj;
        console.log(ref.lock_UnlockUserObj);
        // ref.lock_UnlockUserObj.userType = ref.lock_UnlockUserObj.roleId
        ref.lock_UnlockUserObj.isLocked = ref.lock_UnlockUserObj.isLocked == "Y" ? "N" : "Y";
        console.log('requestJson=> ' + JSON.stringify(ref.lock_UnlockUserObj));
        $('#alertLock').modal('hide');
        ref.apiHandler.vendorAccessAction(ref.lock_UnlockUserObj, (response) => {
            console.log(JSON.stringify(response));
            $('#alertLock').modal('hide');
            if (response.sts === "success") {
                ref.callApi();
            }
            else {
                $('#alertLock').modal('hide');
                ref.callAlert("error", "Failed", "not");
            }
        }, (error) => {
            $('#alertLock').modal('hide');
            ref.callAlert("error", "Failed", "not");
            console.log(error);
        });
    }
    no_Lock_Unlock() {
        var ref = this;
        ref.lock_UnlockUserObj = {};
    }
    navigateTo(item) {
        var ref = this;
        window.localStorage.setItem("vendorAccessDetails", JSON.stringify(item));
        ref.router.navigate(['main-layout/vendorView']);
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
        }
        else {
            $("#alertMsg1").modal("hide");
        }
    }
};
VendorAccessComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: src_app_services_api_handler_service__WEBPACK_IMPORTED_MODULE_3__["ApiHandlerService"] },
    { type: src_app_services_util_service__WEBPACK_IMPORTED_MODULE_5__["UtilService"] }
];
VendorAccessComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-vendor-access',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./vendor-access.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/vendor-access/vendor-access.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./vendor-access.component.css */ "./src/app/pages/vendor-access/vendor-access.component.css")).default]
    })
], VendorAccessComponent);



/***/ }),

/***/ "./src/app/pages/vendor-management/vendor-management.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/pages/vendor-management/vendor-management.component.css ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3ZlbmRvci1tYW5hZ2VtZW50L3ZlbmRvci1tYW5hZ2VtZW50LmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/pages/vendor-management/vendor-management.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/pages/vendor-management/vendor-management.component.ts ***!
  \************************************************************************/
/*! exports provided: VendorManagementComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VendorManagementComponent", function() { return VendorManagementComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let VendorManagementComponent = class VendorManagementComponent {
    constructor() { }
    ngOnInit() {
    }
};
VendorManagementComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-vendor-management',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./vendor-management.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/vendor-management/vendor-management.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./vendor-management.component.css */ "./src/app/pages/vendor-management/vendor-management.component.css")).default]
    })
], VendorManagementComponent);



/***/ }),

/***/ "./src/app/pages/vendor-registration-list/vendor-registration-list.component.css":
/*!***************************************************************************************!*\
  !*** ./src/app/pages/vendor-registration-list/vendor-registration-list.component.css ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3ZlbmRvci1yZWdpc3RyYXRpb24tbGlzdC92ZW5kb3ItcmVnaXN0cmF0aW9uLWxpc3QuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/pages/vendor-registration-list/vendor-registration-list.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/pages/vendor-registration-list/vendor-registration-list.component.ts ***!
  \**************************************************************************************/
/*! exports provided: VendorRegistrationListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VendorRegistrationListComponent", function() { return VendorRegistrationListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_services_api_handler_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/api-handler.service */ "./src/app/services/api-handler.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var src_app_services_constant_utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/constant.utils */ "./src/app/services/constant.utils.ts");








let VendorRegistrationListComponent = class VendorRegistrationListComponent {
    constructor(router, apiHandler, http, location, dialog) {
        this.router = router;
        this.apiHandler = apiHandler;
        this.http = http;
        this.location = location;
        this.dialog = dialog;
        this.vendorList = [];
    }
    ngOnInit() {
        const ref = this;
        ref.callApi();
    }
    callApi() {
        const ref = this;
        ref.apiHandler.getRegistrationList((response) => {
            console.log(JSON.stringify(response));
            if (response.sts === src_app_services_constant_utils__WEBPACK_IMPORTED_MODULE_7__["Constant"].SUCCESS_STATUS) {
                ref.vendorList = response.content;
                ref.initializeDatatable();
            }
            else {
                ref.initializeDatatable();
            }
        }, (error) => {
            ref.initializeDatatable();
            console.log(error);
        });
    }
    initializeDatatable() {
        $('#List').dataTable().fnDestroy();
        setTimeout(() => {
            $('#List').DataTable({
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
        }, 500);
    }
};
VendorRegistrationListComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: src_app_services_api_handler_service__WEBPACK_IMPORTED_MODULE_5__["ApiHandlerService"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_6__["Location"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"] }
];
VendorRegistrationListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-vendor-registration-list',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./vendor-registration-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/vendor-registration-list/vendor-registration-list.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./vendor-registration-list.component.css */ "./src/app/pages/vendor-registration-list/vendor-registration-list.component.css")).default]
    })
], VendorRegistrationListComponent);



/***/ }),

/***/ "./src/app/pages/vendor-registration-view/vendor-registration-view.component.css":
/*!***************************************************************************************!*\
  !*** ./src/app/pages/vendor-registration-view/vendor-registration-view.component.css ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".nav-pills .nav-link {\r\n    color: #0e141e;\r\n    }\r\n    .nav-pills .nav-link.active, .nav-pills .show > .nav-link {\r\n    color: #fff;\r\n    background-color: #eb7b1b;\r\n    }\r\n    .view-vendor-scroll {\r\n    max-height: 62vh;\r\n    overflow: hidden;\r\n    overflow: auto;\r\n    }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdmVuZG9yLXJlZ2lzdHJhdGlvbi12aWV3L3ZlbmRvci1yZWdpc3RyYXRpb24tdmlldy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksY0FBYztJQUNkO0lBQ0E7SUFDQSxXQUFXO0lBQ1gseUJBQXlCO0lBQ3pCO0lBQ0E7SUFDQSxnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLGNBQWM7SUFDZCIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3ZlbmRvci1yZWdpc3RyYXRpb24tdmlldy92ZW5kb3ItcmVnaXN0cmF0aW9uLXZpZXcuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5uYXYtcGlsbHMgLm5hdi1saW5rIHtcclxuICAgIGNvbG9yOiAjMGUxNDFlO1xyXG4gICAgfVxyXG4gICAgLm5hdi1waWxscyAubmF2LWxpbmsuYWN0aXZlLCAubmF2LXBpbGxzIC5zaG93ID4gLm5hdi1saW5rIHtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ViN2IxYjtcclxuICAgIH1cclxuICAgIC52aWV3LXZlbmRvci1zY3JvbGwge1xyXG4gICAgbWF4LWhlaWdodDogNjJ2aDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBvdmVyZmxvdzogYXV0bztcclxuICAgIH0iXX0= */");

/***/ }),

/***/ "./src/app/pages/vendor-registration-view/vendor-registration-view.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/pages/vendor-registration-view/vendor-registration-view.component.ts ***!
  \**************************************************************************************/
/*! exports provided: VendorRegistrationViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VendorRegistrationViewComponent", function() { return VendorRegistrationViewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_services_api_handler_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/api-handler.service */ "./src/app/services/api-handler.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var src_app_services_constant_utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/constant.utils */ "./src/app/services/constant.utils.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var src_app_services_util_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/services/util.service */ "./src/app/services/util.service.ts");
/* harmony import */ var src_app_services_constant_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/services/constant.service */ "./src/app/services/constant.service.ts");











let VendorRegistrationViewComponent = class VendorRegistrationViewComponent {
    constructor(router, apiHandler, http, location, dialog, activatedRoute, utilService, constantService) {
        this.router = router;
        this.apiHandler = apiHandler;
        this.http = http;
        this.location = location;
        this.dialog = dialog;
        this.activatedRoute = activatedRoute;
        this.utilService = utilService;
        this.constantService = constantService;
        this.responseJson = {
            pkId: 1, regId: '', city: '', emailId: '', country: '', currency: '', region: '', title: '',
            gstnNo: '', isApproved: '', mobileNo: '', name1: '', name2: '', panNo: '', panRefNo: '', postCode: '',
            street: '', street2: '', street3: '', taxNo: '', telNo: '', status: ''
        };
        this.countryMst = [];
        this.currencyMst = [];
        this.regionMst = [];
        this.titleMst = [];
        this.fileList = [];
        this.alertResponse = { message: '', status: '', route: '' };
        // panFile: any = null;
        // gstFile: any = null;
        this.tab = 1;
        this.submitObjectTab1 = {
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
        this.submitObjectTab2 = {
            ifscCode: "",
            accountNo: "",
            accountHolder: "",
            bankName: "",
            bankControlKey: "",
            tin: "",
            msme: "",
            msmeCertificateNo: ""
        };
        this.submitObjectTab3 = {
            serchTerm: "",
            recconNo: "",
            paymentTerm: "",
            withHoldTaxType: "",
            withHoldTaxCode: "",
            exemptionCertNo: "",
            exemptionRate: "",
            exemptionStartDate: "",
            exemptionEndDate: "",
            schemeSupply: "",
            houseBank: ""
        };
        this.dropDownMaster = {
            countryMst: [],
            currencyMst: [],
            groupingMst: [],
            payTermMst: [],
            racconMst: [],
            regionMst: [],
            titleMst: [],
            incotermMst: [],
            withHolddingTaxType: [],
            houseBankMst: []
        };
        this.validTab1 = true;
        this.validTab2 = true;
        this.validTab3 = true;
        this.panFile = null;
        this.gstFile = null;
        // cancelCheque: any = null
        this.VRFCopy = null;
        this.rejectReason = "";
        this.emailPattern = "^[_A-Za-z0-9-\\+]+(\\.[_A-Za-z0-9-]+)*@[A-Za-z0-9-]+(\\.[A-Za-z0-9]+)*(\\.[A-Za-z]{2,})$";
        this.mobilePattern = /^[0-9]{10}$/;
        this.panPattern = "[A-Z]{5}[0-9]{4}[A-Z]{1}";
        this.gstPattern = "^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}Z[0-9A-Z]{1}$";
        this.regexpMobilePattern = new RegExp(/^[0-9]{10}$/);
        this.regexpEmailPattern = new RegExp("^[_A-Za-z0-9-\\+]+(\\.[_A-Za-z0-9-]+)*@[A-Za-z0-9-]+(\\.[A-Za-z0-9]+)*(\\.[A-Za-z]{2,})$");
        this.regexpGstPattern = new RegExp("^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}Z[0-9A-Z]{1}$");
        this.regexpPanPattern = new RegExp("[A-Z]{5}[0-9]{4}[A-Z]{1}");
        this.approveFlag = "update";
    }
    ngOnInit() {
        const ref = this;
        var minDateToday = ref.utilService.getCurrentDate();
        console.log(ref.minDateToday);
        var splitMinDate = minDateToday.split("-");
        var finalMinDate = splitMinDate[1] + "-" + splitMinDate[0] + "-" + splitMinDate[2];
        ref.minDateToday = new Date(finalMinDate);
        console.log(ref.minDateToday);
        ref.minDateToday.setDate(ref.minDateToday.getDate());
        console.log(ref.minDateToday);
        ref.datePickerConfig = Object.assign({}, { containerClass: 'theme-red', showWeekNumbers: false, dateInputFormat: 'DD-MM-YYYY' });
        ref.createForm();
        ref.reqId = ref.activatedRoute.snapshot.params['id'];
        console.log('id===>' + ref.reqId);
        let obj = { code: '', type: 'ALL' };
        ref.apiHandler.getRegistrationMaster(obj, (response) => {
            console.log(JSON.stringify(response));
            const tempObject = response.content;
            if (response.sts === "success") {
                ref.dropDownMaster.countryMst = tempObject.countryMst;
                ref.dropDownMaster.currencyMst = tempObject.currencyMst;
                ref.dropDownMaster.groupingMst = tempObject.groupingMst;
                ref.dropDownMaster.payTermMst = tempObject.payTermMst;
                ref.dropDownMaster.racconMst = tempObject.racconMst;
                ref.dropDownMaster.regionMst = tempObject.regionMst;
                ref.dropDownMaster.titleMst = tempObject.titleMst;
                ref.dropDownMaster.payTermMst = tempObject.payTermMst;
                // ref.dropDownMaster.withHolddingTaxType = tempObject.withHolddingTaxType;
                ref.dropDownMaster.incotermMst = tempObject.incotermMst;
                ref.dropDownMaster.schemeSupplyMst = tempObject.schemeSupplyMst;
                ref.dropDownMaster.houseBankMst = tempObject.houseBankMst;
                // ref.regionMst = tempObject.regionMst;
                ref.titleMst = tempObject.titleMst;
                ref.callApi();
            }
        }, (error) => {
            console.log(error);
        });
    }
    callApi() {
        const ref = this;
        ref.apiHandler.viewRegistration(ref.reqId, (response) => {
            console.log("viewApi");
            console.log(JSON.stringify(response));
            if (response.sts === src_app_services_constant_utils__WEBPACK_IMPORTED_MODULE_7__["Constant"].SUCCESS_STATUS) {
                const tempObject = response.content;
                ref.responseJson = tempObject;
                ref.submitObjectTab1 = tempObject;
                ref.submitObjectTab2 = tempObject;
                ref.submitObjectTab3 = tempObject;
                ref.submitObjectTab3.serchTerm = ref.submitObjectTab3.serchTerm == "null" ? "" : ref.submitObjectTab3.serchTerm;
                ref.submitObjectTab3.recconNo = ref.submitObjectTab3.recconNo == "null" ? "" : ref.submitObjectTab3.recconNo;
                ref.submitObjectTab3.paymentTerm = ref.submitObjectTab3.paymentTerm == "null" ? "" : ref.submitObjectTab3.paymentTerm;
                ref.submitObjectTab3.withHoldTaxType = ref.submitObjectTab3.withHoldTaxType == "null" ? "" : ref.submitObjectTab3.withHoldTaxType;
                ref.submitObjectTab3.withHoldTaxCode = ref.submitObjectTab3.withHoldTaxCode == "null" ? "" : ref.submitObjectTab3.withHoldTaxCode;
                ref.submitObjectTab3.exemptionCertNo = ref.submitObjectTab3.exemptionCertNo == "null" ? "" : ref.submitObjectTab3.exemptionCertNo;
                ref.submitObjectTab3.exemptionRate = ref.submitObjectTab3.exemptionRate == "null" ? "" : ref.submitObjectTab3.exemptionRate;
                ref.submitObjectTab3.exemptionStartDate = ref.submitObjectTab3.exemptionStartDate == "null" ? "" : ref.submitObjectTab3.exemptionStartDate.split("-").reverse().join("-");
                ;
                ref.submitObjectTab3.exemptionEndDate = ref.submitObjectTab3.exemptionEndDate == "null" ? "" : ref.submitObjectTab3.exemptionEndDate.split("-").reverse().join("-");
                ref.submitObjectTab3.schemeSupply = ref.submitObjectTab3.schemeSupply == "null" ? "" : ref.submitObjectTab3.schemeSupply;
                ref.submitObjectTab3.houseBank = ref.submitObjectTab3.schemeSupply == "null" ? "" : ref.submitObjectTab3.schemeSupply;
                var splitMaxDate = ref.submitObjectTab3.exemptionStartDate.split("-");
                var finalMaxDate = splitMaxDate[2] + "-" + splitMaxDate[1] + "-" + splitMaxDate[0];
                ref.minDate = new Date(finalMaxDate);
                console.log(ref.minDate);
                ref.minDate.setDate(ref.minDate.getDate());
                console.log(ref.minDate);
                ref.fileList = tempObject.fileList;
                console.log("ref.submitObjectTab1.fkCountry");
                console.log(ref.submitObjectTab1.fkCountry);
                console.log(ref.submitObjectTab1.fkRegion);
                console.log(ref.submitObjectTab3.withHoldTaxType);
                var countryCode = ref.submitObjectTab1.fkCountry;
                ref.onInitChangeCountry(countryCode);
            }
            setTimeout(() => {
                ref.createForm();
            }, 500);
        }, (error) => {
            console.log(error);
        });
    }
    createForm() {
        const ref = this;
        ref.formData = new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormGroup"]({
            fkTittle: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](ref.responseJson.title, [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required]),
            name1: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](ref.responseJson.name1, [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required]),
            name2: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](ref.responseJson.name2, [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required]),
            street: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](ref.responseJson.street, [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required]),
            street2: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](ref.responseJson.street2, [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required]),
            street3: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](ref.responseJson.street3, [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required]),
            postCode: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](ref.responseJson.postCode, [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required]),
            city: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](ref.responseJson.city, [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required]),
            fkCountry: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](ref.responseJson.country, [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required]),
            fkRegion: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](ref.responseJson.region),
            telephonNo: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](ref.responseJson.telNo, [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required]),
            mobileNo: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](ref.responseJson.mobileNo, [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required]),
            emailId: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](ref.responseJson.emailId, [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required]),
            fkCurrency: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](ref.responseJson.currency, [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required]),
            taxNo: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](ref.responseJson.taxNo, [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required]),
            gstnNo: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](ref.responseJson.gstnNo, [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required]),
            panNo: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](ref.responseJson.panNo, [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required]),
            panRefNo: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](ref.responseJson.panRefNo, [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required]),
            panFile: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](null),
            gstnFile: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](null),
        });
    }
    onInitChangeCountry(code) {
        const ref = this;
        ref.dropDownMaster.regionMst = [];
        ref.dropDownMaster.withHolddingTaxType = [];
        // ref.submitObjectTab1.fkRegion = "";
        let obj = { code: code, type: 'REGION' };
        console.log('code==>' + code);
        if (code != "") {
            ref.apiHandler.getRegistrationMaster(obj, (response) => {
                console.log(JSON.stringify(response));
                const tempObject = response.content;
                if (response.sts.toLowerCase() === "success") {
                    ref.dropDownMaster.regionMst = tempObject.regionMst;
                    ref.dropDownMaster.withHolddingTaxType = tempObject.withHolddingTaxType;
                }
                else {
                    ref.dropDownMaster.regionMst = [];
                }
            }, (error) => {
                ref.dropDownMaster.regionMst = [];
                console.log(error);
            });
        }
    }
    onChangeCountry(code) {
        const ref = this;
        ref.dropDownMaster.regionMst = [];
        ref.dropDownMaster.withHolddingTaxType = [];
        ref.submitObjectTab1.fkRegion = "";
        ref.submitObjectTab3.withHoldTaxType = "";
        let obj = { code: code, type: 'REGION' };
        console.log('code==>' + code);
        if (code != "") {
            ref.apiHandler.getRegistrationMaster(obj, (response) => {
                console.log(JSON.stringify(response));
                const tempObject = response.content;
                if (response.sts.toLowerCase() === "success") {
                    ref.dropDownMaster.regionMst = tempObject.regionMst;
                    ref.dropDownMaster.withHolddingTaxType = tempObject.withHolddingTaxType;
                }
                else {
                    ref.dropDownMaster.regionMst = [];
                }
            }, (error) => {
                ref.dropDownMaster.regionMst = [];
                console.log(error);
            });
        }
    }
    onSubmit() {
        const ref = this;
        let form = new FormData();
        const tempObject = ref.formData.value;
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
        ref.apiHandler.saveRegDetails(form, (response) => {
            console.log(JSON.stringify(response));
            setTimeout(() => {
                $('#alertMsg').modal('show');
            }, 1000);
            if (response.sts === src_app_services_constant_utils__WEBPACK_IMPORTED_MODULE_7__["Constant"].SUCCESS_STATUS) {
                ref.alertResponse.message = src_app_services_constant_utils__WEBPACK_IMPORTED_MODULE_7__["Constant"].SUCCESS_MESSAGE;
                ref.alertResponse.route = '';
            }
            else {
                ref.alertResponse.message = response.msg;
            }
            ref.alertResponse.status = response.sts;
        }, (error) => {
            setTimeout(() => {
                $('#alertMsg').modal('show');
            }, 1000);
            ref.alertResponse.message = src_app_services_constant_utils__WEBPACK_IMPORTED_MODULE_7__["Constant"].ERROR_MESSAGE;
            ref.alertResponse.status = src_app_services_constant_utils__WEBPACK_IMPORTED_MODULE_7__["Constant"].ERROR_STATUS;
            ref.alertResponse.route = '';
            console.log(error);
        });
    }
    //Tab 1
    submitResultTab1(tab1Form) {
        var ref = this;
        ref.approveFlag = "update";
        console.log("calltab1");
        ref.validTab1 = tab1Form.valid;
        console.log(ref.validTab1);
        if (ref.validTab1) {
            ref.checkAllTabValidation();
        }
        else {
        }
    }
    //Tab 2
    submitResultTab2(tab2Form) {
        var ref = this;
        ref.approveFlag = "update";
        console.log("calltab2");
        ref.validTab2 = tab2Form.valid;
        console.log(tab2Form.valid);
        console.log(ref.validTab2);
        if (ref.validTab2) {
            ref.checkAllTabValidation();
        }
    }
    // Tab 3
    getExStartDate(event) {
        var ref = this;
        console.log(event);
        ref.submitObjectTab3.exemptionEndDate = "";
        ref.submitObjectTab3.exemptionStartDate;
        ref.minDate = event;
        //  ref.minDate = new Date(ref.submitObjectTab3.exemptionStartDate);
        // console.log(ref.minDate)
        // ref.minDate.setDate(ref.submitObjectTab3.exemptionStartDate.getDate());
        console.log(ref.minDate);
    }
    submitResultTab3(tab3Form) {
        var ref = this;
        ref.approveFlag = "update";
        console.log("calltab3");
        console.log(tab3Form);
        console.log(tab3Form.valid);
        ref.validTab3 = tab3Form.valid;
        console.log(ref.validTab3);
        console.log(ref.submitObjectTab3);
        if (ref.validTab3) {
            ref.checkAllTabValidation();
        }
    }
    //Tab 4
    submitResultTab4(tab4Form) {
        var ref = this;
        ref.approveFlag = "update";
        var vrfFlag = "";
        for (var i = 0; i < ref.fileList.length; i++) {
            if (ref.fileList[i].type == "VRF") {
                vrfFlag = "VRF";
            }
        }
        if (vrfFlag == "VRF") {
            ref.checkAllTabValidation();
            // return false;
        }
        else {
            if (ref.VRFCopy == null) {
                ref.callAlert("error", "Please Upload VRF Copy.", "not");
                return false;
            }
            else {
                ref.checkAllTabValidation();
            }
        }
    }
    // okAlert() {
    //   const ref = this;
    //   ref.callApi();
    // }
    onViewFile(file) {
        console.log();
        const ref = this;
        // window.open('http://localhost:8081/vendor-registration/viewFile?pkId=' + file.pkId,"blank");
        var url = ref.constantService.rootUrl + ref.constantService.webservices.viewFilepkId + file.pkId;
        window.open(url, '_blank');
        // var url = 'http://localhost:8081/vendor-registration/viewFile?pkId=' + file.pkId
        // window.open(url,'Image','width=largeImage.stylewidth,height=largeImage.style.height,resizable=1')
        // ref.apiHandler.viewFile2(file.pkId,'').subscribe(
        //   (response: any) => {
        //     const fileURL = URL.createObjectURL(response);
        //     // window.open(fileURL, '_blank');
        //     // let file = new Blob([response.content], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
        //     // var fileURL = URL.createObjectURL(file);
        //     window.open(fileURL);
        //   },
        //   (error: HttpErrorResponse) => {
        //     console.log(error.message);
        //   }
        // );
    }
    uploadVRFCopy(files, fileType) {
        const ref = this;
        const file = files[0];
        const fileSize = file.size / 1024;
        console.log(files);
        console.log(fileType);
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
        if (fileType === 'VRF') {
            ref.VRFCopy = null;
            // ref.formData.get('cancelCheck').patchValue(null);
            if (fileSize < 5050) {
                ref.VRFCopy = files[0];
                // ref.formData.get('cancelCheck').patchValue(ref.VRFCopy);
            }
            else {
                ref.callAlert("error", "The attachment size should be less than 2MB", "not");
            }
        }
    }
    approve() {
        var ref = this;
        ref.approveFlag = "approve";
        ref.checkAllTabValidation();
    }
    approveFinal() {
        var ref = this;
        var date1;
        var tempDate1 = "" + ref.submitObjectTab3.exemptionStartDate;
        var temptempDate1 = tempDate1.split("-");
        if (temptempDate1.length != 3) {
            date1 = ref.utilService.convertToSqlDate(ref.utilService.getCurrentDateFromObj(ref.submitObjectTab3.exemptionStartDate));
        }
        else {
            date1 = ref.utilService.convertToSqlDate(tempDate1);
        }
        //End Date
        var date2;
        var tempDate2 = "" + ref.submitObjectTab3.exemptionEndDate;
        var temptempDate2 = tempDate2.split("-");
        if (temptempDate2.length != 3) {
            date2 = ref.utilService.convertToSqlDate(ref.utilService.getCurrentDateFromObj(ref.submitObjectTab3.exemptionEndDate));
        }
        else {
            date2 = ref.utilService.convertToSqlDate(tempDate2);
        }
        let form = new FormData();
        const tempObject = ref.formData.value;
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
        form.append('incoterm', ref.submitObjectTab1.incoterm);
        // form.append('panRefNo', ref.submitObjectTab1.panRefNo);
        // form.append('panFile', ref.panFile);
        // form.append('gstnFile', ref.gstFile);
        form.append('leadTime', ref.submitObjectTab1.leadTime);
        // form.append('blanceSheetFile', ref.cancelCheque);
        //Tab 2
        // form.append('groupingMst', ref.submitObjectTab2.groupingMst);
        form.append('ifscCode', ref.submitObjectTab2.ifscCode);
        form.append('accountNo', ref.submitObjectTab2.accountNo);
        form.append('accountHolder', ref.submitObjectTab2.accountHolder);
        // form.append('incoterm', ref.submitObjectTab2.incoterm);
        form.append('bankName', ref.submitObjectTab2.bankName);
        form.append('bankControlKey', ref.submitObjectTab2.bankControlKey);
        // form.append('msme', ref.submitObjectTab2.msme);
        form.append('msmeCertificateNo', ref.submitObjectTab2.msmeCertificateNo);
        form.append('tin', ref.submitObjectTab2.tin);
        form.append('fkInvtId', ref.submitObjectTab2.fkInvtId);
        form.append('regId', ref.submitObjectTab2.regId);
        form.append('pkId', ref.submitObjectTab2.pkId);
        //finance
        if (ref.VRFCopy != null) {
            form.append('vrfCopyFile', ref.VRFCopy);
        }
        form.append('serchTerm', ref.submitObjectTab3.serchTerm);
        form.append('recconNo', ref.submitObjectTab3.recconNo);
        form.append('paymentTerm', ref.submitObjectTab3.paymentTerm);
        form.append('withHoldTaxType', ref.submitObjectTab3.withHoldTaxType);
        form.append('withHoldTaxCode', ref.submitObjectTab3.withHoldTaxCode);
        form.append('exemptionCertNo', ref.submitObjectTab3.exemptionCertNo);
        form.append('exemptionRate', ref.submitObjectTab3.exemptionRate);
        form.append('exemptionStartDate', date1);
        form.append('exemptionEndDate', date2);
        form.append('schemeSupply', ref.submitObjectTab3.schemeSupply);
        form.append('houseBank', ref.submitObjectTab3.houseBank);
        var tempObj = {};
        tempObj['fkTittle'] = ref.submitObjectTab1.fkTittle;
        tempObj['name1'] = ref.submitObjectTab1.name1;
        tempObj['name2'] = ref.submitObjectTab1.name2;
        tempObj['street'] = ref.submitObjectTab1.street;
        tempObj['street2'] = ref.submitObjectTab1.street2;
        tempObj['postCode'] = ref.submitObjectTab1.postCode;
        tempObj['city'] = ref.submitObjectTab1.city;
        tempObj['fkCountry'] = ref.submitObjectTab1.fkCountry;
        tempObj['fkRegion'] = ref.submitObjectTab1.fkRegion;
        tempObj['mobileNo'] = ref.submitObjectTab1.mobileNo;
        tempObj['emailId'] = ref.submitObjectTab1.emailId;
        tempObj['fkCurrency'] = ref.submitObjectTab1.fkCurrency;
        tempObj['gstnNo'] = ref.submitObjectTab1.gstnNo;
        tempObj['panNo'] = ref.submitObjectTab1.panNo;
        tempObj['leadTime'] = ref.submitObjectTab1.leadTime * 1;
        tempObj['grouping'] = ref.submitObjectTab1.grouping;
        tempObj['incoterm'] = ref.submitObjectTab1.incoterm;
        tempObj['bankName'] = ref.submitObjectTab2.bankName;
        tempObj['accountNo'] = ref.submitObjectTab2.accountNo;
        tempObj['accountHolder'] = ref.submitObjectTab2.accountHolder;
        tempObj['ifscCode'] = ref.submitObjectTab2.ifscCode;
        tempObj['bankControlKey'] = ref.submitObjectTab2.bankControlKey;
        // tempObj['msme'] = ref.submitObjectTab2.msme;
        tempObj['msmeCertificateNo'] = ref.submitObjectTab2.msmeCertificateNo;
        tempObj['tin'] = ref.submitObjectTab2.tin;
        tempObj['fkInvtId'] = ref.submitObjectTab2.fkInvtId;
        tempObj['regId'] = ref.submitObjectTab2.regId;
        tempObj['pkId'] = ref.submitObjectTab2.pkId;
        // tempObj['vrfCopyFile'] = ref.VRFCopy;
        tempObj['serchTerm'] = ref.submitObjectTab3.serchTerm;
        tempObj['recconNo'] = ref.submitObjectTab3.recconNo;
        tempObj['paymentTerm'] = ref.submitObjectTab3.paymentTerm;
        tempObj['withHoldTaxType'] = ref.submitObjectTab3.withHoldTaxType;
        tempObj['withHoldTaxCode'] = ref.submitObjectTab3.withHoldTaxCode;
        tempObj['exemptionCertNo'] = ref.submitObjectTab3.exemptionCertNo;
        tempObj['exemptionRate'] = ref.submitObjectTab3.exemptionRate;
        tempObj['exemptionStartDate'] = date1;
        tempObj['exemptionEndDate'] = date2;
        tempObj['schemeSupply'] = ref.submitObjectTab3.schemeSupply;
        tempObj['houseBank'] = ref.submitObjectTab3.houseBank;
        var temp = {};
        temp['action'] = "A";
        temp['reason'] = "";
        temp['regId'] = ref.submitObjectTab2.regId;
        temp['approvalLevel'] = ref.submitObjectTab2.approvalLevel;
        temp['dto'] = tempObj;
        console.log(temp);
        ref.apiHandler.regAction(temp, (response) => {
            console.log(JSON.stringify(response));
            if (response.sts.toLowerCase() === 'success') {
                ref.callAlert("success", response.content, "navigateToList");
            }
            else {
                ref.callAlert("error", response.content, "not");
            }
        }, (error) => {
            console.log(error);
            ref.callAlert("error", "Failed", "not");
        });
    }
    rejectPopupOpen() {
        var ref = this;
        $('#rejectPopup').modal('show');
        ref.rejectReason = "";
    }
    rejectPopupClose() {
        var ref = this;
        $('#rejectPopup').modal('hide');
        ref.rejectReason = "";
    }
    rejectPopupSubmit() {
        var ref = this;
        var date1;
        var tempDate1 = "" + ref.submitObjectTab3.exemptionStartDate;
        var temptempDate1 = tempDate1.split("-");
        if (temptempDate1.length != 3) {
            date1 = ref.utilService.convertToSqlDate(ref.utilService.getCurrentDateFromObj(ref.submitObjectTab3.exemptionStartDate));
        }
        else {
            date1 = ref.utilService.convertToSqlDate(tempDate1);
        }
        //End Date
        var date2;
        var tempDate2 = "" + ref.submitObjectTab3.exemptionEndDate;
        var temptempDate2 = tempDate2.split("-");
        if (temptempDate2.length != 3) {
            date2 = ref.utilService.convertToSqlDate(ref.utilService.getCurrentDateFromObj(ref.submitObjectTab3.exemptionEndDate));
        }
        else {
            date2 = ref.utilService.convertToSqlDate(tempDate2);
        }
        var tempObj = {};
        tempObj['fkTittle'] = ref.submitObjectTab1.fkTittle;
        tempObj['name1'] = ref.submitObjectTab1.name1;
        tempObj['name2'] = ref.submitObjectTab1.name2;
        tempObj['street'] = ref.submitObjectTab1.street;
        tempObj['street2'] = ref.submitObjectTab1.street2;
        tempObj['postCode'] = ref.submitObjectTab1.postCode;
        tempObj['city'] = ref.submitObjectTab1.city;
        tempObj['fkCountry'] = ref.submitObjectTab1.fkCountry;
        tempObj['fkRegion'] = ref.submitObjectTab1.fkRegion;
        tempObj['mobileNo'] = ref.submitObjectTab1.mobileNo;
        tempObj['emailId'] = ref.submitObjectTab1.emailId;
        tempObj['fkCurrency'] = ref.submitObjectTab1.fkCurrency;
        tempObj['gstnNo'] = ref.submitObjectTab1.gstnNo;
        tempObj['panNo'] = ref.submitObjectTab1.panNo;
        tempObj['incoterm'] = ref.submitObjectTab1.incoterm;
        tempObj['bankName'] = ref.submitObjectTab2.bankName;
        tempObj['bankControlKey'] = ref.submitObjectTab2.bankControlKey;
        // tempObj['msme'] = ref.submitObjectTab2.msme;
        tempObj['msmeCertificateNo'] = ref.submitObjectTab2.msmeCertificateNo;
        tempObj['tin'] = ref.submitObjectTab2.tin;
        tempObj['fkInvtId'] = ref.submitObjectTab2.fkInvtId;
        tempObj['regId'] = ref.submitObjectTab2.regId;
        tempObj['pkId'] = ref.submitObjectTab2.pkId;
        // tempObj['vrfCopyFile'] = ref.VRFCopy;
        tempObj['serchTerm'] = ref.submitObjectTab3.serchTerm;
        tempObj['recconNo'] = ref.submitObjectTab3.recconNo;
        tempObj['paymentTerm'] = ref.submitObjectTab3.paymentTerm;
        tempObj['withHoldTaxType'] = ref.submitObjectTab3.withHoldTaxType;
        tempObj['withHoldTaxCode'] = ref.submitObjectTab3.withHoldTaxCode;
        tempObj['exemptionCertNo'] = ref.submitObjectTab3.exemptionCertNo;
        tempObj['exemptionRate'] = ref.submitObjectTab3.exemptionRate;
        tempObj['exemptionStartDate'] = date1;
        tempObj['exemptionEndDate'] = date2;
        tempObj['schemeSupply'] = ref.submitObjectTab3.schemeSupply;
        tempObj['houseBank'] = ref.submitObjectTab3.houseBank;
        var temp = {};
        temp['action'] = "R";
        temp['reason'] = ref.rejectReason;
        ;
        temp['regId'] = ref.submitObjectTab2.regId;
        temp['approvalLevel'] = ref.submitObjectTab2.approvalLevel;
        temp['dto'] = tempObj;
        console.log(temp);
        ref.apiHandler.regAction(temp, (response) => {
            console.log(JSON.stringify(response));
            if (response.sts.toLowerCase() === 'success') {
                $('#rejectPopup').modal('hide');
                ref.callAlert("success", "Rejected", "navigateToList");
            }
            else {
                ref.callAlert("error", "Failed", "not");
                $('#rejectPopup').modal('hide');
            }
        }, (error) => {
            console.log(error);
            ref.callAlert("error", "Failed", "not");
            $('#rejectPopup').modal('hide');
        });
    }
    back() {
        var ref = this;
        ref.location.back();
    }
    //General Details
    checkTab1() {
        var ref = this;
        var validFlag = true;
        if (ref.submitObjectTab1.fkTittle == "") {
            // ref.callAlert("error", " Please enter search term in finance details tab.", "not");
            validFlag = false;
            return false;
        }
        if (ref.submitObjectTab1.name1 == "") {
            // ref.callAlert("error", " Please enter search term in finance details tab.", "not");
            validFlag = false;
            return false;
        }
        if (ref.submitObjectTab1.name2 == "") {
            // ref.callAlert("error", " Please enter search term in finance details tab.", "not");
            validFlag = false;
            return false;
        }
        if (ref.submitObjectTab1.street == "") {
            // ref.callAlert("error", " Please enter search term in finance details tab.", "not");
            validFlag = false;
            return false;
        }
        if (ref.submitObjectTab1.street2 == "") {
            // ref.callAlert("error", " Please enter search term in finance details tab.", "not");
            validFlag = false;
            return false;
        }
        if (ref.submitObjectTab1.postCode == "") {
            // ref.callAlert("error", " Please enter search term in finance details tab.", "not");
            validFlag = false;
            return false;
        }
        if (ref.submitObjectTab1.city == "") {
            // ref.callAlert("error", " Please enter search term in finance details tab.", "not");
            validFlag = false;
            return false;
        }
        if (ref.submitObjectTab1.fkCountry == "") {
            // ref.callAlert("error", " Please enter search term in finance details tab.", "not");
            validFlag = false;
            return false;
        }
        if (ref.submitObjectTab1.fkRegion == "") {
            // ref.callAlert("error", " Please enter search term in finance details tab.", "not");
            validFlag = false;
            return false;
        }
        if (ref.submitObjectTab1.mobileNo == "") {
            // ref.callAlert("error", " Please enter search term in finance details tab.", "not");
            validFlag = false;
            return false;
        }
        if (ref.submitObjectTab1.mobileNo != "") {
            if (!ref.regexpMobilePattern.test(ref.submitObjectTab1.mobileNo)) {
                validFlag = false;
                return false;
            }
        }
        if (ref.submitObjectTab1.emailId == "") {
            // ref.callAlert("error", " Please enter search term in finance details tab.", "not");
            validFlag = false;
            return false;
        }
        if (ref.submitObjectTab1.emailId != "") {
            if (!ref.regexpEmailPattern.test(ref.submitObjectTab1.emailId)) {
                validFlag = false;
                return false;
            }
        }
        if (ref.submitObjectTab1.fkCurrency == "") {
            // ref.callAlert("error", " Please enter search term in finance details tab.", "not");
            validFlag = false;
            return false;
        }
        // if (ref.submitObjectTab1.gstnNo == "") {
        //     validFlag = false
        //     return false;
        // }
        if (ref.submitObjectTab1.gstnNo != "") {
            if (!ref.regexpGstPattern.test(ref.submitObjectTab1.gstnNo)) {
                validFlag = false;
                return false;
            }
        }
        if (ref.submitObjectTab1.panNo == "") {
            validFlag = false;
            return false;
        }
        if (ref.submitObjectTab1.panNo != "") {
            if (!ref.regexpPanPattern.test(ref.submitObjectTab1.panNo)) {
                validFlag = false;
                return false;
            }
        }
        if (ref.submitObjectTab1.gstnNo != "") {
            var tempGST = ref.submitObjectTab1.gstnNo;
            var tempCheck = tempGST.substring(2, 12);
            console.log("tempCheck");
            console.log(tempCheck);
            if (ref.submitObjectTab1.panNo != tempCheck) {
                ref.callAlert("error", " Please enter valid GST and PAN number.", "not");
                validFlag = false;
                return false;
            }
        }
        if (ref.submitObjectTab1.leadTime == "") {
            // ref.callAlert("error", " Please enter search term in finance details tab.", "not");
            validFlag = false;
            return false;
        }
        if (ref.submitObjectTab1.incoterm == "") {
            // ref.callAlert("error", " Please enter search term in finance details tab.", "not");
            validFlag = false;
            return false;
        }
        if (ref.submitObjectTab1.grouping == "") {
            // ref.callAlert("error", " Please enter search term in finance details tab.", "not");
            validFlag = false;
            return false;
        }
        return validFlag;
    }
    // Bank Details
    checkTab2() {
        var ref = this;
        var validFlag = true;
        if (ref.submitObjectTab2.bankName == "") {
            // ref.callAlert("error", " Please enter search term in finance details tab.", "not");
            validFlag = false;
            return false;
        }
        if (ref.submitObjectTab2.accountNo == "") {
            // ref.callAlert("error", " Please enter search term in finance details tab.", "not");
            validFlag = false;
            return false;
        }
        if (ref.submitObjectTab2.accountHolder == "") {
            // ref.callAlert("error", " Please enter search term in finance details tab.", "not");
            validFlag = false;
            return false;
        }
        if (ref.submitObjectTab2.ifscCode == "") {
            // ref.callAlert("error", " Please enter search term in finance details tab.", "not");
            validFlag = false;
            return false;
        }
        if (ref.submitObjectTab2.ifscCode == "") {
            // ref.callAlert("error", " Please enter search term in finance details tab.", "not");
            validFlag = false;
            return false;
        }
        if (ref.submitObjectTab1.fkCountry != "IN") {
            if (ref.submitObjectTab2.bankControlKey == "") {
                // ref.callAlert("error", "Please enter bank control key", "not");
                validFlag = false;
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
                validFlag = false;
                return false;
            }
        }
        return validFlag;
    }
    // Finance Details
    checkTab3() {
        var ref = this;
        var validFlag = true;
        if (ref.submitObjectTab1.serchTerm == "") {
            // ref.callAlert("error", " Please enter search term in finance details tab.", "not");
            validFlag = false;
            return false;
        }
        if (ref.submitObjectTab1.recconNo == "") {
            // ref.callAlert("error", " Please select reconciliation account no in finance details tab.", "not");
            validFlag = false;
            return false;
        }
        if (ref.submitObjectTab1.paymentTerm == "") {
            // ref.callAlert("error", "  Please select payment term in finance details tab.", "not");
            validFlag = false;
            return false;
        }
        if (ref.submitObjectTab1.withHoldTaxType == "") {
            // ref.callAlert("error", " Please enter with hold tax type in finance details tab.", "not");
            validFlag = false;
            return false;
        }
        if (ref.submitObjectTab1.withHoldTaxCode == "") {
            // ref.callAlert("error", " Please enter with hold tax code in finance details tab.", "not");
            validFlag = false;
            return false;
        }
        if (ref.submitObjectTab1.exemptionCertNo == "") {
            // ref.callAlert("error", " Please enter exemption certificate no in finance details tab.", "not");
            validFlag = false;
            return false;
        }
        if (ref.submitObjectTab1.exemptionRate == "") {
            // ref.callAlert("error", " Please enter exemption rate in finance details tab.", "not");
            validFlag = false;
            return false;
        }
        if (ref.submitObjectTab1.exemptionStartDate == "") {
            // ref.callAlert("error", " Please enter exemption start date in finance details tab.", "not");
            validFlag = false;
            return false;
        }
        if (ref.submitObjectTab1.exemptionEndDate == "") {
            // ref.callAlert("error", " Please enter exemption end date in finance details tab.", "not");
            validFlag = false;
            return false;
        }
        if (ref.submitObjectTab1.schemeSupply == "") {
            // ref.callAlert("error", "Please enter scheme supply in finance details tab.", "not");
            validFlag = false;
            return false;
        }
        if (ref.submitObjectTab1.houseBank == "") {
            // ref.callAlert("error", "Please enter house bank in finance details tab.", "not");
            validFlag = false;
            return false;
        }
        return validFlag;
    }
    //Attachments
    checkTab4() {
        var ref = this;
        var validFlag = true;
        var vrfFlag = "";
        for (var i = 0; i < ref.fileList.length; i++) {
            if (ref.fileList[i].type == "VRF") {
                vrfFlag = "VRF";
            }
        }
        if (vrfFlag == "VRF") {
            validFlag = true;
            return true;
        }
        else {
            if (ref.VRFCopy == null) {
                ref.callAlert("error", "Please Upload Vendor Agreement.", "not");
                validFlag = false;
                return false;
            }
            else {
                validFlag = true;
            }
        }
        return validFlag;
    }
    checkAllTabValidation() {
        var ref = this;
        var checkTab11 = ref.checkTab1();
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
        }
        var checkTab33 = ref.checkTab3();
        if (!checkTab33) {
            ref.tab = 3;
            ref.validTab3 = false;
            return false;
        }
        var checkTab44 = ref.checkTab4();
        if (!checkTab44) {
            ref.tab = 4;
            // ref.validTab4 = false;
            return false;
        }
        else {
            ref.finalSubmit();
        }
    }
    finalSubmit() {
        var ref = this;
        // startdate
        var date1;
        var tempDate1 = "" + ref.submitObjectTab3.exemptionStartDate;
        var temptempDate1 = tempDate1.split("-");
        if (temptempDate1.length != 3) {
            date1 = ref.utilService.convertToSqlDate(ref.utilService.getCurrentDateFromObj(ref.submitObjectTab3.exemptionStartDate));
        }
        else {
            date1 = ref.utilService.convertToSqlDate(tempDate1);
        }
        //End Date
        var date2;
        var tempDate2 = "" + ref.submitObjectTab3.exemptionEndDate;
        var temptempDate2 = tempDate2.split("-");
        if (temptempDate2.length != 3) {
            date2 = ref.utilService.convertToSqlDate(ref.utilService.getCurrentDateFromObj(ref.submitObjectTab3.exemptionEndDate));
        }
        else {
            date2 = ref.utilService.convertToSqlDate(tempDate2);
        }
        let form = new FormData();
        const tempObject = ref.formData.value;
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
        form.append('incoterm', ref.submitObjectTab1.incoterm);
        form.append('grouping', ref.submitObjectTab1.grouping);
        // form.append('panRefNo', ref.submitObjectTab1.panRefNo);
        // form.append('panFile', ref.panFile);
        // form.append('gstnFile', ref.gstFile);
        form.append('leadTime', ref.submitObjectTab1.leadTime);
        // form.append('blanceSheetFile', ref.cancelCheque);
        //Tab 2
        // form.append('groupingMst', ref.submitObjectTab2.groupingMst);
        form.append('ifscCode', ref.submitObjectTab2.ifscCode);
        form.append('accountNo', ref.submitObjectTab2.accountNo);
        form.append('accountHolder', ref.submitObjectTab2.accountHolder);
        // form.append('incoterm', ref.submitObjectTab2.incoterm);
        form.append('bankName', ref.submitObjectTab2.bankName);
        form.append('bankControlKey', ref.submitObjectTab2.bankControlKey);
        // form.append('msme', ref.submitObjectTab2.msme);
        form.append('msmeCertificateNo', ref.submitObjectTab2.msmeCertificateNo);
        form.append('tin', ref.submitObjectTab2.tin);
        form.append('fkInvtId', ref.submitObjectTab2.fkInvtId);
        form.append('regId', ref.submitObjectTab2.regId);
        form.append('pkId', ref.submitObjectTab2.pkId);
        //finance
        if (ref.VRFCopy != null) {
            form.append('vrfCopyFile', ref.VRFCopy);
        }
        form.append('serchTerm', ref.submitObjectTab3.serchTerm);
        form.append('recconNo', ref.submitObjectTab3.recconNo);
        form.append('paymentTerm', ref.submitObjectTab3.paymentTerm);
        form.append('withHoldTaxType', ref.submitObjectTab3.withHoldTaxType);
        form.append('withHoldTaxCode', ref.submitObjectTab3.withHoldTaxCode);
        form.append('exemptionCertNo', ref.submitObjectTab3.exemptionCertNo);
        form.append('exemptionRate', ref.submitObjectTab3.exemptionRate);
        form.append('exemptionStartDate', date1);
        form.append('exemptionEndDate', date2);
        form.append('schemeSupply', ref.submitObjectTab3.schemeSupply);
        form.append('houseBank', ref.submitObjectTab3.houseBank);
        console.log(form);
        ref.apiHandler.updateRegDetails(form, (response) => {
            console.log(JSON.stringify(response));
            // setTimeout(() => {
            //   $('#alertMsg').modal('show');
            // }, 1000);
            if (response.sts === "success") {
                if (ref.approveFlag == "approve") {
                    ref.approveFinal();
                }
                if (ref.approveFlag == "update") {
                    ref.callApi();
                    ref.VRFCopy = null;
                    ref.callAlert("success", "Successfully updated", "not");
                }
            }
            else {
                ref.callAlert("error", "Failed", "not");
            }
            // ref.alertResponse.status = response.sts;
        }, (error) => {
            // setTimeout(() => {
            //   $('#alertMsg').modal('show');
            // }, 1000);
            // ref.alertResponse.message = Constant.ERROR_MESSAGE;
            // ref.alertResponse.status = Constant.ERROR_STATUS;
            // ref.alertResponse.route = '';
            ref.callAlert("error", "Failed", "not");
            console.log(error);
        });
    }
    callAlert(alertFlag, message, navigate) {
        var ref = this;
        ref.alertFlag = alertFlag;
        ref.alertMessage = message;
        ref.alertNavigate = navigate;
        $('#alertMsgNew').modal('show');
    }
    okAlert() {
        var ref = this;
        if (ref.alertFlag === "success") {
            if (ref.alertNavigate == 'navigateToList') {
                // ref.callApi();
                ref.location.back();
                // ref.router.navigate(['vendorManagement']);
                $("#alertMsgNew").modal("hide");
            }
            $("#alertMsgNew").modal("hide");
        }
        else {
            $("#alertMsgNew").modal("hide");
        }
    }
};
VendorRegistrationViewComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: src_app_services_api_handler_service__WEBPACK_IMPORTED_MODULE_4__["ApiHandlerService"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_6__["Location"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: src_app_services_util_service__WEBPACK_IMPORTED_MODULE_9__["UtilService"] },
    { type: src_app_services_constant_service__WEBPACK_IMPORTED_MODULE_10__["ConstantService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('pdfViewer', { static: true })
], VendorRegistrationViewComponent.prototype, "pdfViewer", void 0);
VendorRegistrationViewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-vendor-registration-view',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./vendor-registration-view.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/vendor-registration-view/vendor-registration-view.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./vendor-registration-view.component.css */ "./src/app/pages/vendor-registration-view/vendor-registration-view.component.css")).default]
    })
], VendorRegistrationViewComponent);



/***/ }),

/***/ "./src/app/pages/vendor-registration/vendor-registration.component.css":
/*!*****************************************************************************!*\
  !*** ./src/app/pages/vendor-registration/vendor-registration.component.css ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".page-vendor-sign {\r\n  margin-top: -4rem !important;\r\n}\r\n.page-vendor-sign .bg-left-vendor {\r\n  width: 100%;\r\n  background-image: url('vendor-sign-bg.jpg'),radial-gradient(rgb(255 230 212), rgb(247 237 235));\r\n  background-position: center;\r\n  background-repeat: no-repeat;\r\n  background-size: contain;\r\n}\r\n.page-vendor-sign .login-title {\r\n  font-family: \"Open Sans\", sans-serif !important;\r\n  font-weight: 500;\r\n  color: #e21e26;\r\n  font-size: 2.1rem;\r\n  text-shadow: 0px 6px 5px rgb(225 225 225);\r\n}\r\n.page-vendor-sign .login-title-2 {\r\n  font-family: \"Open Sans\", sans-serif !important;\r\n  font-weight: 500;\r\n  color: #c04f3b;\r\n  font-size: 1.15rem;\r\n  text-shadow: 0px 4px 9px rgb(225 225 225);\r\n}\r\n.page-vendor-sign .nav-pills .nav-link {\r\n  color: #0e141e;\r\n}\r\n.page-vendor-sign .nav-pills .nav-link.active, .page-vendor-sign .nav-pills .show > .nav-link {\r\n  color: #fff;\r\n  background-color: #eb7b1b;\r\n}\r\n.page-vendor-sign .card-footer {\r\n  padding: 0.5rem 1.5rem;\r\n}\r\n.page-vendor-sign .page-scroll {\r\n  max-height: 66.4vh;\r\n  overflow: hidden;\r\n  overflow: auto;\r\n}\r\n.page-vendor-sign .page-view-scroll {\r\n  height: 91vh;\r\n  overflow: hidden;\r\n  overflow: auto;\r\n}\r\n.page-vendor-sign .custom-file {\r\n  /* font-size:.9rem; */\r\n  /* height: calc(1.8em + 0.8rem + 2px); */\r\n  height: 2.25rem;\r\n}\r\n.page-vendor-sign .custom-file-input {\r\n  height: 2.25rem;\r\n}\r\n.page-vendor-sign .custom-file-label {\r\n  height: 2.25rem;\r\n  padding: 0.25rem 0.5rem;\r\n  line-height: 1.6;\r\n  background-color: #ffffff;\r\n  border: 1px solid #ebebeb;\r\n}\r\n.page-vendor-sign .custom-file-label::after {\r\n  height: 2.25rem;\r\n  padding: 0.25rem 0.5rem;\r\n  line-height: 1.6;\r\n  color: #000000;\r\n  background-color: #dbdbdb;\r\n}\r\n.page-vendor-sign .footer {\r\n  margin-left: 0 !important;\r\n  width: 100% !important;\r\n  }\r\n\r\n  \r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdmVuZG9yLXJlZ2lzdHJhdGlvbi92ZW5kb3ItcmVnaXN0cmF0aW9uLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSw0QkFBNEI7QUFDOUI7QUFDQTtFQUNFLFdBQVc7RUFDWCwrRkFBbUg7RUFDbkgsMkJBQTJCO0VBQzNCLDRCQUE0QjtFQUM1Qix3QkFBd0I7QUFDMUI7QUFDQTtFQUNFLCtDQUErQztFQUMvQyxnQkFBZ0I7RUFDaEIsY0FBYztFQUNkLGlCQUFpQjtFQUNqQix5Q0FBeUM7QUFDM0M7QUFDQTtFQUNFLCtDQUErQztFQUMvQyxnQkFBZ0I7RUFDaEIsY0FBYztFQUNkLGtCQUFrQjtFQUNsQix5Q0FBeUM7QUFDM0M7QUFDQTtFQUNFLGNBQWM7QUFDaEI7QUFDQTtFQUNFLFdBQVc7RUFDWCx5QkFBeUI7QUFDM0I7QUFDQTtFQUNFLHNCQUFzQjtBQUN4QjtBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixjQUFjO0FBQ2hCO0FBQ0E7RUFDRSxZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLGNBQWM7QUFDaEI7QUFDQTtFQUNFLHFCQUFxQjtFQUNyQix3Q0FBd0M7RUFDeEMsZUFBZTtBQUNqQjtBQUNBO0VBQ0UsZUFBZTtBQUNqQjtBQUNBO0VBQ0UsZUFBZTtFQUNmLHVCQUF1QjtFQUN2QixnQkFBZ0I7RUFDaEIseUJBQXlCO0VBQ3pCLHlCQUF5QjtBQUMzQjtBQUNBO0VBQ0UsZUFBZTtFQUNmLHVCQUF1QjtFQUN2QixnQkFBZ0I7RUFDaEIsY0FBYztFQUNkLHlCQUF5QjtBQUMzQjtBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLHNCQUFzQjtFQUN0QiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3ZlbmRvci1yZWdpc3RyYXRpb24vdmVuZG9yLXJlZ2lzdHJhdGlvbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnBhZ2UtdmVuZG9yLXNpZ24ge1xyXG4gIG1hcmdpbi10b3A6IC00cmVtICFpbXBvcnRhbnQ7XHJcbn1cclxuLnBhZ2UtdmVuZG9yLXNpZ24gLmJnLWxlZnQtdmVuZG9yIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi8uLi9hc3NldHMvaW1nL3ZlbmRvci1zaWduLWJnLmpwZ1wiKSxyYWRpYWwtZ3JhZGllbnQocmdiKDI1NSAyMzAgMjEyKSwgcmdiKDI0NyAyMzcgMjM1KSk7XHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xyXG59XHJcbi5wYWdlLXZlbmRvci1zaWduIC5sb2dpbi10aXRsZSB7XHJcbiAgZm9udC1mYW1pbHk6IFwiT3BlbiBTYW5zXCIsIHNhbnMtc2VyaWYgIWltcG9ydGFudDtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG4gIGNvbG9yOiAjZTIxZTI2O1xyXG4gIGZvbnQtc2l6ZTogMi4xcmVtO1xyXG4gIHRleHQtc2hhZG93OiAwcHggNnB4IDVweCByZ2IoMjI1IDIyNSAyMjUpO1xyXG59XHJcbi5wYWdlLXZlbmRvci1zaWduIC5sb2dpbi10aXRsZS0yIHtcclxuICBmb250LWZhbWlseTogXCJPcGVuIFNhbnNcIiwgc2Fucy1zZXJpZiAhaW1wb3J0YW50O1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgY29sb3I6ICNjMDRmM2I7XHJcbiAgZm9udC1zaXplOiAxLjE1cmVtO1xyXG4gIHRleHQtc2hhZG93OiAwcHggNHB4IDlweCByZ2IoMjI1IDIyNSAyMjUpO1xyXG59XHJcbi5wYWdlLXZlbmRvci1zaWduIC5uYXYtcGlsbHMgLm5hdi1saW5rIHtcclxuICBjb2xvcjogIzBlMTQxZTtcclxufVxyXG4ucGFnZS12ZW5kb3Itc2lnbiAubmF2LXBpbGxzIC5uYXYtbGluay5hY3RpdmUsIC5wYWdlLXZlbmRvci1zaWduIC5uYXYtcGlsbHMgLnNob3cgPiAubmF2LWxpbmsge1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNlYjdiMWI7XHJcbn1cclxuLnBhZ2UtdmVuZG9yLXNpZ24gLmNhcmQtZm9vdGVyIHtcclxuICBwYWRkaW5nOiAwLjVyZW0gMS41cmVtO1xyXG59XHJcbi5wYWdlLXZlbmRvci1zaWduIC5wYWdlLXNjcm9sbCB7XHJcbiAgbWF4LWhlaWdodDogNjYuNHZoO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgb3ZlcmZsb3c6IGF1dG87XHJcbn1cclxuLnBhZ2UtdmVuZG9yLXNpZ24gLnBhZ2Utdmlldy1zY3JvbGwge1xyXG4gIGhlaWdodDogOTF2aDtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIG92ZXJmbG93OiBhdXRvO1xyXG59XHJcbi5wYWdlLXZlbmRvci1zaWduIC5jdXN0b20tZmlsZSB7XHJcbiAgLyogZm9udC1zaXplOi45cmVtOyAqL1xyXG4gIC8qIGhlaWdodDogY2FsYygxLjhlbSArIDAuOHJlbSArIDJweCk7ICovXHJcbiAgaGVpZ2h0OiAyLjI1cmVtO1xyXG59XHJcbi5wYWdlLXZlbmRvci1zaWduIC5jdXN0b20tZmlsZS1pbnB1dCB7XHJcbiAgaGVpZ2h0OiAyLjI1cmVtO1xyXG59XHJcbi5wYWdlLXZlbmRvci1zaWduIC5jdXN0b20tZmlsZS1sYWJlbCB7XHJcbiAgaGVpZ2h0OiAyLjI1cmVtO1xyXG4gIHBhZGRpbmc6IDAuMjVyZW0gMC41cmVtO1xyXG4gIGxpbmUtaGVpZ2h0OiAxLjY7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjZWJlYmViO1xyXG59XHJcbi5wYWdlLXZlbmRvci1zaWduIC5jdXN0b20tZmlsZS1sYWJlbDo6YWZ0ZXIge1xyXG4gIGhlaWdodDogMi4yNXJlbTtcclxuICBwYWRkaW5nOiAwLjI1cmVtIDAuNXJlbTtcclxuICBsaW5lLWhlaWdodDogMS42O1xyXG4gIGNvbG9yOiAjMDAwMDAwO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNkYmRiZGI7XHJcbn1cclxuXHJcbi5wYWdlLXZlbmRvci1zaWduIC5mb290ZXIge1xyXG4gIG1hcmdpbi1sZWZ0OiAwICFpbXBvcnRhbnQ7XHJcbiAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4gIFxyXG5cclxuIl19 */");

/***/ }),

/***/ "./src/app/pages/vendor-registration/vendor-registration.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/pages/vendor-registration/vendor-registration.component.ts ***!
  \****************************************************************************/
/*! exports provided: VendorRegistrationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VendorRegistrationComponent", function() { return VendorRegistrationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_services_api_handler_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/api-handler.service */ "./src/app/services/api-handler.service.ts");
/* harmony import */ var src_app_services_constant_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/constant.utils */ "./src/app/services/constant.utils.ts");







let VendorRegistrationComponent = class VendorRegistrationComponent {
    constructor(router, apiHandler, http, activatedRoute) {
        this.router = router;
        this.apiHandler = apiHandler;
        this.http = http;
        this.activatedRoute = activatedRoute;
        this.submitObjectTab1 = {
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
        this.submitObjectTab2 = {
            ifscCode: "",
            accountNo: "",
            accountHolder: "",
            bankName: "",
            bankControlKey: "",
            tin: "",
            msme: "",
            msmeCertificateNo: ""
        };
        this.dropDownMaster = {
            countryMst: [],
            currencyMst: [],
            groupingMst: [],
            payTermMst: [],
            racconMst: [],
            regionMst: [],
            titleMst: [],
            incotermMst: []
        };
        this.countryMst = [];
        this.currencyMst = [];
        this.regionMst = [];
        this.titleMst = [];
        this.alertResponse = { message: '', status: '', route: '' };
        this.panFile = null;
        this.gstFile = null;
        this.cancelCheque = null;
        this.tab = 1;
        this.validTab1 = true;
        this.validTab2 = true;
        this.validTab3 = true;
        this.emailPattern = "^[_A-Za-z0-9-\\+]+(\\.[_A-Za-z0-9-]+)*@[A-Za-z0-9-]+(\\.[A-Za-z0-9]+)*(\\.[A-Za-z]{2,})$";
        this.mobilePattern = /^[0-9]{10}$/;
        this.panPattern = "[A-Z]{5}[0-9]{4}[A-Z]{1}";
        this.gstPattern = "^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}Z[0-9A-Z]{1}$";
        this.regexpMobilePattern = new RegExp(/^[0-9]{10}$/);
        this.regexpEmailPattern = new RegExp("^[_A-Za-z0-9-\\+]+(\\.[_A-Za-z0-9-]+)*@[A-Za-z0-9-]+(\\.[A-Za-z0-9]+)*(\\.[A-Za-z]{2,})$");
        this.regexpGstPattern = new RegExp("^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}Z[0-9A-Z]{1}$");
        this.regexpPanPattern = new RegExp("[A-Z]{5}[0-9]{4}[A-Z]{1}");
    }
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
        ref.apiHandler.validateRegLink(ref.requestNo, (response) => {
            console.log(JSON.stringify(response));
            if (response.sts === src_app_services_constant_utils__WEBPACK_IMPORTED_MODULE_6__["Constant"].SUCCESS_STATUS) {
                ref.fkInvtId = response.content;
            }
            else {
                ref.router.navigate(['session-expired']);
            }
        }, (error) => {
            console.log(error);
        });
        let obj = { code: '', type: 'ALL' };
        ref.apiHandler.getRegistrationMaster(obj, (response) => {
            console.log(JSON.stringify(response));
            const tempObject = response.content;
            if (response.sts === src_app_services_constant_utils__WEBPACK_IMPORTED_MODULE_6__["Constant"].SUCCESS_STATUS) {
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
        }, (error) => {
            console.log(error);
        });
    }
    createForm() {
        const ref = this;
        ref.formData = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            pkId: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
            regId: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
            fkTittle: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]),
            name1: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]),
            name2: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]),
            street: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]),
            street2: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]),
            // street3: new FormControl('', [Validators.required]),
            postCode: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]),
            city: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]),
            fkCountry: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]),
            fkRegion: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
            // telephonNo: new FormControl('', [Validators.required]),
            mobileNo: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]),
            emailId: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]),
            fkCurrency: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]),
            // taxNo: new FormControl('', [Validators.required]),   
            gstnNo: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]),
            panNo: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]),
            // panRefNo: new FormControl('', [Validators.required]),
            fkInvtId: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
            grouping: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
            ifscCode: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
            accountNo: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
            accountHolder: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
            incoterm: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
            panFile: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null),
            gstnFile: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null),
        });
    }
    onSubmit() {
        const ref = this;
        ref.createForm();
        let form = new FormData();
        const tempObject = ref.formData.value;
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
    upload(files, fileType) {
        const ref = this;
        const file = files[0];
        const fileSize = file.size / 1024;
        console.log(files);
        console.log(fileType);
        let fileList = files;
        console.log(fileList);
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
        }
        else if (fileType === 'PAN') {
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
    uploadCancelledCheque(files, fileType) {
        const ref = this;
        const file = files[0];
        const fileSize = file.size / 1024;
        console.log(files);
        console.log(fileType);
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
    onChangeCountry(code) {
        const ref = this;
        ref.dropDownMaster.regionMst = [];
        ref.submitObjectTab1.fkRegion = "";
        let obj = { code: code, type: 'REGION' };
        console.log('code==>' + code);
        if (code != "") {
            ref.apiHandler.getRegistrationMaster(obj, (response) => {
                console.log(JSON.stringify(response));
                const tempObject = response.content;
                if (response.sts.toLowerCase() === "success") {
                    ref.dropDownMaster.regionMst = tempObject.regionMst;
                }
                else {
                    ref.dropDownMaster.regionMst = [];
                }
            }, (error) => {
                ref.dropDownMaster.regionMst = [];
                console.log(error);
            });
        }
    }
    submitResultTab1(tab1Form) {
        var ref = this;
        console.log("calltab1");
        console.log(tab1Form);
        ref.validTab1 = tab1Form.valid;
        if (ref.validTab1) {
            var temp = {};
            if (ref.submitObjectTab1.gstnNo != "") {
                var tempGST = ref.submitObjectTab1.gstnNo;
                var tempCheck = tempGST.substring(2, 12);
                console.log("tempCheck");
                console.log(tempCheck);
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
        console.log("calltab2");
        console.log(tab2Form);
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
            var checkTab11 = ref.checkTab1();
            if (!checkTab11) {
                ref.tab = 1;
                ref.validTab1 = false;
                return false;
            }
            else {
                ref.tab = 3;
            }
        }
    }
    submitResultTab3(tab3Form) {
        var ref = this;
        console.log("calltab3");
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
        var checkTab11 = ref.checkTab1();
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
        }
        else {
            ref.finalApiCall();
        }
    }
    finalApiCall() {
        var ref = this;
        let form = new FormData();
        const tempObject = ref.formData.value;
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
        console.log(form);
        ref.apiHandler.saveRegDetails(form, (response) => {
            console.log(JSON.stringify(response));
            // setTimeout(() => {
            //   $('#alertMsg').modal('show');
            // }, 1000);
            if (response.sts === "success") {
                ref.callAlert("success", "Thankyou,You have successfully registered", "navigateToList");
            }
            else {
                ref.callAlert("error", "Failed", "not");
            }
            ref.alertResponse.status = response.sts;
        }, (error) => {
            // setTimeout(() => {
            //   $('#alertMsg').modal('show');
            // }, 1000);
            // ref.alertResponse.message = Constant.ERROR_MESSAGE;
            // ref.alertResponse.status = Constant.ERROR_STATUS;
            // ref.alertResponse.route = '';
            ref.callAlert("error", "Failed", "not");
            console.log(error);
        });
    }
    //tabs validation check
    //General Tab
    checkTab1() {
        var ref = this;
        var validFlag = true;
        if (ref.submitObjectTab1.fkTittle == "") {
            // ref.callAlert("error", " Please enter search term in finance details tab.", "not");
            validFlag = false;
            return false;
        }
        if (ref.submitObjectTab1.name1 == "") {
            // ref.callAlert("error", " Please enter search term in finance details tab.", "not");
            validFlag = false;
            return false;
        }
        if (ref.submitObjectTab1.name2 == "") {
            // ref.callAlert("error", " Please enter search term in finance details tab.", "not");
            validFlag = false;
            return false;
        }
        if (ref.submitObjectTab1.street == "") {
            // ref.callAlert("error", " Please enter search term in finance details tab.", "not");
            validFlag = false;
            return false;
        }
        if (ref.submitObjectTab1.street2 == "") {
            // ref.callAlert("error", " Please enter search term in finance details tab.", "not");
            validFlag = false;
            return false;
        }
        if (ref.submitObjectTab1.postCode == "") {
            // ref.callAlert("error", " Please enter search term in finance details tab.", "not");
            validFlag = false;
            return false;
        }
        if (ref.submitObjectTab1.city == "") {
            // ref.callAlert("error", " Please enter search term in finance details tab.", "not");
            validFlag = false;
            return false;
        }
        if (ref.submitObjectTab1.fkCountry == "") {
            // ref.callAlert("error", " Please enter search term in finance details tab.", "not");
            validFlag = false;
            return false;
        }
        if (ref.submitObjectTab1.fkRegion == "") {
            // ref.callAlert("error", " Please enter search term in finance details tab.", "not");
            validFlag = false;
            return false;
        }
        if (ref.submitObjectTab1.mobileNo == "") {
            // ref.callAlert("error", " Please enter search term in finance details tab.", "not");
            validFlag = false;
            return false;
        }
        if (ref.submitObjectTab1.mobileNo != "") {
            if (!ref.regexpMobilePattern.test(ref.submitObjectTab1.mobileNo)) {
                validFlag = false;
                return false;
            }
        }
        if (ref.submitObjectTab1.emailId == "") {
            // ref.callAlert("error", " Please enter search term in finance details tab.", "not");
            validFlag = false;
            return false;
        }
        if (ref.submitObjectTab1.emailId != "") {
            if (!ref.regexpEmailPattern.test(ref.submitObjectTab1.emailId)) {
                validFlag = false;
                return false;
            }
        }
        if (ref.submitObjectTab1.fkCurrency == "") {
            // ref.callAlert("error", " Please enter search term in finance details tab.", "not");
            validFlag = false;
            return false;
        }
        // if (ref.submitObjectTab1.gstnNo == "") {
        //   validFlag = false
        //   return false;
        // }
        if (ref.submitObjectTab1.gstnNo != "") {
            if (!ref.regexpGstPattern.test(ref.submitObjectTab1.gstnNo)) {
                validFlag = false;
                return false;
            }
        }
        if (ref.submitObjectTab1.panNo == "") {
            validFlag = false;
            return false;
        }
        if (ref.submitObjectTab1.panNo != "") {
            if (!ref.regexpPanPattern.test(ref.submitObjectTab1.panNo)) {
                validFlag = false;
                return false;
            }
        }
        if (ref.submitObjectTab1.gstnNo != "") {
            var tempGST = ref.submitObjectTab1.gstnNo;
            var tempCheck = tempGST.substring(2, 12);
            console.log("tempCheck");
            console.log(tempCheck);
            if (ref.submitObjectTab1.panNo != tempCheck) {
                ref.callAlert("error", " Please enter valid GST and PAN number.", "not");
                validFlag = false;
                return false;
            }
        }
        if (ref.submitObjectTab1.leadTime == "") {
            // ref.callAlert("error", " Please enter search term in finance details tab.", "not");
            validFlag = false;
            return false;
        }
        if (ref.submitObjectTab1.incoterm == "") {
            // ref.callAlert("error", " Please enter search term in finance details tab.", "not");
            validFlag = false;
            return false;
        }
        if (ref.submitObjectTab1.grouping == "") {
            // ref.callAlert("error", " Please enter search term in finance details tab.", "not");
            validFlag = false;
            return false;
        }
        return validFlag;
    }
    // BAnk Details
    checkTab2() {
        var ref = this;
        var validFlag = true;
        if (ref.submitObjectTab2.bankName == "") {
            // ref.callAlert("error", " Please enter search term in finance details tab.", "not");
            validFlag = false;
            return false;
        }
        if (ref.submitObjectTab2.accountNo == "") {
            // ref.callAlert("error", " Please enter search term in finance details tab.", "not");
            validFlag = false;
            return false;
        }
        if (ref.submitObjectTab2.accountHolder == "") {
            // ref.callAlert("error", " Please enter search term in finance details tab.", "not");
            validFlag = false;
            return false;
        }
        if (ref.submitObjectTab2.ifscCode == "") {
            // ref.callAlert("error", " Please enter search term in finance details tab.", "not");
            validFlag = false;
            return false;
        }
        if (ref.submitObjectTab2.ifscCode == "") {
            // ref.callAlert("error", " Please enter search term in finance details tab.", "not");
            validFlag = false;
            return false;
        }
        if (ref.submitObjectTab1.fkCountry != "IN") {
            if (ref.submitObjectTab2.bankControlKey == "") {
                // ref.callAlert("error", "Please enter bank control key", "not");
                validFlag = false;
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
                validFlag = false;
                return false;
            }
        }
        return validFlag;
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
        }
        else {
            $("#alertMsg").modal("hide");
        }
    }
};
VendorRegistrationComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: src_app_services_api_handler_service__WEBPACK_IMPORTED_MODULE_5__["ApiHandlerService"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] }
];
VendorRegistrationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-vendor-registration',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./vendor-registration.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/vendor-registration/vendor-registration.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./vendor-registration.component.css */ "./src/app/pages/vendor-registration/vendor-registration.component.css")).default]
    })
], VendorRegistrationComponent);



/***/ }),

/***/ "./src/app/pages/vendor-view/vendor-view.component.css":
/*!*************************************************************!*\
  !*** ./src/app/pages/vendor-view/vendor-view.component.css ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".page-title-view {\r\n    font-size: 1.2rem;\r\n    font-family: 'Nunito', sans-serif;\r\n    color: #d96b0c;\r\n    }\r\n    .col-form-label {\r\n    color: #646464;\r\n    }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdmVuZG9yLXZpZXcvdmVuZG9yLXZpZXcuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGlCQUFpQjtJQUNqQixpQ0FBaUM7SUFDakMsY0FBYztJQUNkO0lBQ0E7SUFDQSxjQUFjO0lBQ2QiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy92ZW5kb3Itdmlldy92ZW5kb3Itdmlldy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnBhZ2UtdGl0bGUtdmlldyB7XHJcbiAgICBmb250LXNpemU6IDEuMnJlbTtcclxuICAgIGZvbnQtZmFtaWx5OiAnTnVuaXRvJywgc2Fucy1zZXJpZjtcclxuICAgIGNvbG9yOiAjZDk2YjBjO1xyXG4gICAgfVxyXG4gICAgLmNvbC1mb3JtLWxhYmVsIHtcclxuICAgIGNvbG9yOiAjNjQ2NDY0O1xyXG4gICAgfSJdfQ== */");

/***/ }),

/***/ "./src/app/pages/vendor-view/vendor-view.component.ts":
/*!************************************************************!*\
  !*** ./src/app/pages/vendor-view/vendor-view.component.ts ***!
  \************************************************************/
/*! exports provided: VendorViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VendorViewComponent", function() { return VendorViewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_services_api_handler_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/api-handler.service */ "./src/app/services/api-handler.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");






let VendorViewComponent = class VendorViewComponent {
    constructor(route, router, apiHandler, http, location) {
        this.route = route;
        this.router = router;
        this.apiHandler = apiHandler;
        this.http = http;
        this.location = location;
        this.vendorDetails = {};
        this.vendorAccessDetails = JSON.parse(window.localStorage.getItem("vendorAccessDetails"));
    }
    ngOnInit() {
        const ref = this;
        ref.callApi();
    }
    callApi() {
        const ref = this;
        var temp = ref.vendorAccessDetails.userId;
        ref.apiHandler.viewVendor(temp, (response) => {
            console.log(JSON.stringify(response));
            if (response.sts === "success") {
                ref.vendorDetails = response.content;
            }
            else {
            }
        }, (error) => {
            console.log(error);
        });
    }
    back() {
        var ref = this;
        ref.location.back();
    }
};
VendorViewComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: src_app_services_api_handler_service__WEBPACK_IMPORTED_MODULE_4__["ApiHandlerService"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"] }
];
VendorViewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-vendor-view',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./vendor-view.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/vendor-view/vendor-view.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./vendor-view.component.css */ "./src/app/pages/vendor-view/vendor-view.component.css")).default]
    })
], VendorViewComponent);



/***/ }),

/***/ "./src/app/services/api-handler.service.ts":
/*!*************************************************!*\
  !*** ./src/app/services/api-handler.service.ts ***!
  \*************************************************/
/*! exports provided: ApiHandlerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiHandlerService", function() { return ApiHandlerService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _constant_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./constant.service */ "./src/app/services/constant.service.ts");
/* harmony import */ var _util_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./util.service */ "./src/app/services/util.service.ts");





let ApiHandlerService = class ApiHandlerService {
    constructor(constantService, utilService) {
        this.constantService = constantService;
        this.utilService = utilService;
    }
    getUserDetails(userId, onSuccess, onError) {
        let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]().append('userId', userId);
        // params=params.append('name',userId);
        var url = this.constantService.rootUrl + this.constantService.webservices.getUserDetails;
        this.utilService.callGetParamsAPI(url, params, function (successCallback) {
            onSuccess(successCallback);
        }, function (errorCallback) {
            onError(errorCallback);
        });
    }
    getMenuList(onSuccess, onError) {
        var url = this.constantService.rootUrl + this.constantService.webservices.getMenuList;
        this.utilService.callGetApi(url, function (successCallback) {
            onSuccess(successCallback);
        }, function (errorCallback) {
            onError(errorCallback);
        });
    }
    getMenuByRole(roleId, onSuccess, onError) {
        let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]().append('roleId', roleId);
        // params=params.append('name',userId);
        var url = this.constantService.rootUrl + this.constantService.webservices.getMenuByRole;
        this.utilService.callGetParamsAPI(url, params, function (successCallback) {
            onSuccess(successCallback);
        }, function (errorCallback) {
            onError(errorCallback);
        });
    }
    saveRoleMenuAndActions(obj, onSuccess, onError) {
        var url = this.constantService.rootUrl + this.constantService.webservices.getMenuList;
        this.utilService.callPostAPI(url, obj, function (successCallback) {
            onSuccess(successCallback);
        }, function (errorCallback) {
            onError(errorCallback);
        });
    }
    getMenuRoleMaster(onSuccess, onError) {
        var url = this.constantService.rootUrl + this.constantService.webservices.getMenuRoleMaster;
        this.utilService.callGetApi(url, function (successCallback) {
            onSuccess(successCallback);
        }, function (errorCallback) {
            onError(errorCallback);
        });
    }
    updatePassword(obj, onSuccess, onError) {
        var url = this.constantService.rootUrl + this.constantService.webservices.updatePassword;
        this.utilService.callPostAPI(url, obj, function (successCallback) {
            onSuccess(successCallback);
        }, function (errorCallback) {
            onError(errorCallback);
        });
    }
    authentication(obj, onSuccess, onError) {
        var url = this.constantService.rootUrl + this.constantService.webservices.authentication;
        this.utilService.callPostAPI(url, obj, function (successCallback) {
            onSuccess(successCallback);
        }, function (errorCallback) {
            onError(errorCallback);
        });
    }
    saveUser(obj, onSuccess, onError) {
        var url = this.constantService.rootUrl + this.constantService.webservices.saveUser;
        this.utilService.callPostAPI(url, obj, function (successCallback) {
            onSuccess(successCallback);
        }, function (errorCallback) {
            onError(errorCallback);
        });
    }
    getUserCreationMaster(onSuccess, onError) {
        var url = this.constantService.rootUrl + this.constantService.webservices.getUserCreationMaster;
        this.utilService.callGetApi(url, function (successCallback) {
            onSuccess(successCallback);
        }, function (errorCallback) {
            onError(errorCallback);
        });
    }
    getUserList(onSuccess, onError) {
        var url = this.constantService.rootUrl + this.constantService.webservices.getUserList;
        this.utilService.callGetApi(url, function (successCallback) {
            onSuccess(successCallback);
        }, function (errorCallback) {
            onError(errorCallback);
        });
    }
    forgotPassword(userId, onSuccess, onError) {
        let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]().append('userId', userId);
        // params=params.append('name',userId);
        var url = this.constantService.rootUrl + this.constantService.webservices.forgotPassword;
        this.utilService.callGetParamsAPI(url, params, function (successCallback) {
            onSuccess(successCallback);
        }, function (errorCallback) {
            onError(errorCallback);
        });
    }
    saveVendorInvitation(obj, onSuccess, onError) {
        var url = this.constantService.rootUrl + this.constantService.webservices.saveVendorInvitation;
        this.utilService.callPostAPI(url, obj, function (successCallback) {
            onSuccess(successCallback);
        }, function (errorCallback) {
            onError(errorCallback);
        });
    }
    getInvitationList(onSuccess, onError) {
        var url = this.constantService.rootUrl + this.constantService.webservices.getInvitationList;
        this.utilService.callGetApi(url, function (successCallback) {
            onSuccess(successCallback);
        }, function (errorCallback) {
            onError(errorCallback);
        });
    }
    getInvitationMaster(onSuccess, onError) {
        var url = this.constantService.rootUrl + this.constantService.webservices.getInvitationMaster;
        this.utilService.callGetApi(url, function (successCallback) {
            onSuccess(successCallback);
        }, function (errorCallback) {
            onError(errorCallback);
        });
    }
    sendInvitation(obj, onSuccess, onError) {
        var url = this.constantService.rootUrl + this.constantService.webservices.sendInvitation;
        this.utilService.callPostAPI(url, obj, function (successCallback) {
            onSuccess(successCallback);
        }, function (errorCallback) {
            onError(errorCallback);
        });
    }
    getInvitationById(pkId, onSuccess, onError) {
        let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]().append('pkId', pkId);
        // params=params.append('name',userId);
        var url = this.constantService.rootUrl + this.constantService.webservices.getInvitationById;
        this.utilService.callGetParamsAPI(url, params, function (successCallback) {
            onSuccess(successCallback);
        }, function (errorCallback) {
            onError(errorCallback);
        });
    }
    saveLead(obj, onSuccess, onError) {
        var url = this.constantService.rootUrl + this.constantService.webservices.saveLead;
        this.utilService.callPostAPI(url, obj, function (successCallback) {
            onSuccess(successCallback);
        }, function (errorCallback) {
            onError(errorCallback);
        });
    }
    getLeadGenerationMaster(onSuccess, onError) {
        var url = this.constantService.rootUrl + this.constantService.webservices.getLeadGenerationMaster;
        this.utilService.callGetApi(url, function (successCallback) {
            onSuccess(successCallback);
        }, function (errorCallback) {
            onError(errorCallback);
        });
    }
    getLeadUserList(onSuccess, onError) {
        var url = this.constantService.rootUrl + this.constantService.webservices.getLeadUserList;
        this.utilService.callGetApi(url, function (successCallback) {
            onSuccess(successCallback);
        }, function (errorCallback) {
            onError(errorCallback);
        });
    }
    getLeadUserDetails(pkLeadId, onSuccess, onError) {
        let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]().append('pkLeadId', pkLeadId);
        // params=params.append('name',userId);
        var url = this.constantService.rootUrl + this.constantService.webservices.getLeadUserDetails;
        this.utilService.callGetParamsAPI(url, params, function (successCallback) {
            onSuccess(successCallback);
        }, function (errorCallback) {
            onError(errorCallback);
        });
    }
    leadAction(obj, onSuccess, onError) {
        var url = this.constantService.rootUrl + this.constantService.webservices.leadAction;
        this.utilService.callPostAPI(url, obj, function (successCallback) {
            onSuccess(successCallback);
        }, function (errorCallback) {
            onError(errorCallback);
        });
    }
    validateRegLink(requestNo, onSuccess, onError) {
        let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]().append('requestNo', requestNo);
        // params=params.append('name',userId);
        var url = this.constantService.rootUrl + this.constantService.webservices.validateRegLink;
        this.utilService.callGetParamsAPI(url, params, function (successCallback) {
            onSuccess(successCallback);
        }, function (errorCallback) {
            onError(errorCallback);
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
    getRegistrationMaster(obj, onSuccess, onError) {
        var url = this.constantService.rootUrl + this.constantService.webservices.getRegistrationMaster;
        this.utilService.callPostAPI(url, obj, function (successCallback) {
            onSuccess(successCallback);
        }, function (errorCallback) {
            onError(errorCallback);
        });
    }
    saveRegDetails(obj, onSuccess, onError) {
        var url = this.constantService.rootUrl + this.constantService.webservices.saveRegDetails;
        this.utilService.callPostFileAPI(url, obj, function (successCallback) {
            onSuccess(successCallback);
        }, function (errorCallback) {
            onError(errorCallback);
        });
    }
    getRegistrationList(onSuccess, onError) {
        var url = this.constantService.rootUrl + this.constantService.webservices.getRegistrationList;
        this.utilService.callGetApi(url, function (successCallback) {
            onSuccess(successCallback);
        }, function (errorCallback) {
            onError(errorCallback);
        });
    }
    viewRegistration(regId, onSuccess, onError) {
        let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]().append('regId', regId);
        // params=params.append('name',userId);
        var url = this.constantService.rootUrl + this.constantService.webservices.viewRegistration;
        this.utilService.callGetParamsAPI(url, params, function (successCallback) {
            onSuccess(successCallback);
        }, function (errorCallback) {
            onError(errorCallback);
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
    saveQuery(obj, onSuccess, onError) {
        var url = this.constantService.rootUrl + this.constantService.webservices.saveQuery;
        this.utilService.callPostFileAPI(url, obj, function (successCallback) {
            onSuccess(successCallback);
        }, function (errorCallback) {
            onError(errorCallback);
        });
    }
    getQueryList(onSuccess, onError) {
        var url = this.constantService.rootUrl + this.constantService.webservices.getQueryList;
        this.utilService.callGetApi(url, function (successCallback) {
            onSuccess(successCallback);
        }, function (errorCallback) {
            onError(errorCallback);
        });
    }
    getQueryMaster(onSuccess, onError) {
        var url = this.constantService.rootUrl + this.constantService.webservices.getQueryMaster;
        this.utilService.callGetApi(url, function (successCallback) {
            onSuccess(successCallback);
        }, function (errorCallback) {
            onError(errorCallback);
        });
    }
    viewQueryDetails(queryId, onSuccess, onError) {
        let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]().append('queryId', queryId);
        // params=params.append('name',userId);
        var url = this.constantService.rootUrl + this.constantService.webservices.viewQueryDetails;
        this.utilService.callGetParamsAPI(url, params, function (successCallback) {
            onSuccess(successCallback);
        }, function (errorCallback) {
            onError(errorCallback);
        });
    }
    getTopAnswers(queryId, onSuccess, onError) {
        let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]().append('queryId', queryId);
        // params=params.append('name',userId);
        var url = this.constantService.rootUrl + this.constantService.webservices.getTopAnswers;
        this.utilService.callGetParamsAPI(url, params, function (successCallback) {
            onSuccess(successCallback);
        }, function (errorCallback) {
            onError(errorCallback);
        });
    }
    saveAnswer(obj, onSuccess, onError) {
        var url = this.constantService.rootUrl + this.constantService.webservices.saveAnswer;
        this.utilService.callPostAPI(url, obj, function (successCallback) {
            onSuccess(successCallback);
        }, function (errorCallback) {
            onError(errorCallback);
        });
    }
    ///........shrikant.............
    getQuotationList(onSuccess, onError) {
        var url = this.constantService.rootUrl + this.constantService.webservices.getQuotationList;
        this.utilService.callGetApi(url, function (successCallback) {
            onSuccess(successCallback);
        }, function (errorCallback) {
            onError(errorCallback);
        });
    }
    viewQuotationDetails(obj, onSuccess, onError) {
        let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]().append('quotationNo', obj);
        // params=params.append('name',userId);
        var url = this.constantService.rootUrl + this.constantService.webservices.viewQuotationDetails;
        this.utilService.callGetParamsAPI(url, params, function (successCallback) {
            onSuccess(successCallback);
        }, function (errorCallback) {
            onError(errorCallback);
        });
    }
    saveQuotationDetails(obj, onSuccess, onError) {
        var url = this.constantService.rootUrl + this.constantService.webservices.saveQuotationDetails;
        this.utilService.callPostAPI(url, obj, function (successCallback) {
            onSuccess(successCallback);
        }, function (errorCallback) {
            onError(errorCallback);
        });
    }
    getQuotationHistory(onSuccess, onError) {
        var url = this.constantService.rootUrl + this.constantService.webservices.getQuotationHistory;
        this.utilService.callGetApi(url, function (successCallback) {
            onSuccess(successCallback);
        }, function (errorCallback) {
            onError(errorCallback);
        });
    }
    getOrders(onSuccess, onError) {
        var url = this.constantService.rootUrl + this.constantService.webservices.getOrders;
        this.utilService.callGetApi(url, function (successCallback) {
            onSuccess(successCallback);
        }, function (errorCallback) {
            onError(errorCallback);
        });
    }
    viewOrder(obj, onSuccess, onError) {
        let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]().append('pono', obj);
        // params=params.append('name',userId);
        var url = this.constantService.rootUrl + this.constantService.webservices.viewOrder;
        this.utilService.callGetParamsAPI(url, params, function (successCallback) {
            onSuccess(successCallback);
        }, function (errorCallback) {
            onError(errorCallback);
        });
    }
    orderAction(obj, onSuccess, onError) {
        var url = this.constantService.rootUrl + this.constantService.webservices.orderAction;
        this.utilService.callPostAPI(url, obj, function (successCallback) {
            onSuccess(successCallback);
        }, function (errorCallback) {
            onError(errorCallback);
        });
    }
    orderDispachList(onSuccess, onError) {
        var url = this.constantService.rootUrl + this.constantService.webservices.orderDispachList;
        this.utilService.callGetApi(url, function (successCallback) {
            onSuccess(successCallback);
        }, function (errorCallback) {
            onError(errorCallback);
        });
    }
    viewDispatch(obj, onSuccess, onError) {
        let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]().append('pono', obj[1]).append('pkDispatchId', obj[0]);
        // params=params.append('name',userId);
        var url = this.constantService.rootUrl + this.constantService.webservices.viewDispatch;
        this.utilService.callGetParamsAPI(url, params, function (successCallback) {
            onSuccess(successCallback);
        }, function (errorCallback) {
            onError(errorCallback);
        });
    }
    updateRegDetails(obj, onSuccess, onError) {
        var url = this.constantService.rootUrl + this.constantService.webservices.updateRegDetails;
        this.utilService.callPostFileAPI(url, obj, function (successCallback) {
            onSuccess(successCallback);
        }, function (errorCallback) {
            onError(errorCallback);
        });
    }
    regAction(obj, onSuccess, onError) {
        var url = this.constantService.rootUrl + this.constantService.webservices.regAction;
        this.utilService.callPostAPI(url, obj, function (successCallback) {
            onSuccess(successCallback);
        }, function (errorCallback) {
            onError(errorCallback);
        });
    }
    validateForgotPwdLink(userId, onSuccess, onError) {
        let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]().append('reqNo', userId);
        // params=params.append('name',userId);
        var url = this.constantService.rootUrl + this.constantService.webservices.validateForgotPwdLink;
        this.utilService.callGetParamsAPI(url, params, function (successCallback) {
            onSuccess(successCallback);
        }, function (errorCallback) {
            onError(errorCallback);
        });
    }
    updateForcePassword(obj, onSuccess, onError) {
        var url = this.constantService.rootUrl + this.constantService.webservices.updateForcePassword;
        this.utilService.callPostAPI(url, obj, function (successCallback) {
            onSuccess(successCallback);
        }, function (errorCallback) {
            onError(errorCallback);
        });
    }
    getProfileDetails(obj, onSuccess, onError) {
        let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]().append('userId', obj[1]).append('userType', obj[0]);
        // params=params.append('name',userId);
        var url = this.constantService.rootUrl + this.constantService.webservices.getProfileDetails;
        this.utilService.callGetParamsAPI(url, params, function (successCallback) {
            onSuccess(successCallback);
        }, function (errorCallback) {
            onError(errorCallback);
        });
    }
    viewProfile(onSuccess, onError) {
        // params=params.append('name',userId);
        var url = this.constantService.rootUrl + this.constantService.webservices.viewProfile;
        this.utilService.callGetApi(url, function (successCallback) {
            onSuccess(successCallback);
        }, function (errorCallback) {
            onError(errorCallback);
        });
    }
    saveRoleMenuAndActions1(obj, onSuccess, onError) {
        var url = this.constantService.rootUrl + this.constantService.webservices.saveRoleMenuAndActions1;
        this.utilService.callPostAPI(url, obj, function (successCallback) {
            onSuccess(successCallback);
        }, function (errorCallback) {
            onError(errorCallback);
        });
    }
    viewDashboard(obj, onSuccess, onError) {
        let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]().append('type', obj);
        // params=params.append('name',userId);
        var url = this.constantService.rootUrl + this.constantService.webservices.viewDashboard;
        this.utilService.callGetParamsAPI(url, params, function (successCallback) {
            onSuccess(successCallback);
        }, function (errorCallback) {
            onError(errorCallback);
        });
    }
    getVendorAccess(onSuccess, onError) {
        // params=params.append('name',userId);
        var url = this.constantService.rootUrl + this.constantService.webservices.getVendorAccess;
        this.utilService.callGetApi(url, function (successCallback) {
            onSuccess(successCallback);
        }, function (errorCallback) {
            onError(errorCallback);
        });
    }
    vendorAccessAction(obj, onSuccess, onError) {
        var url = this.constantService.rootUrl + this.constantService.webservices.vendorAccessAction;
        this.utilService.callPostAPI(url, obj, function (successCallback) {
            onSuccess(successCallback);
        }, function (errorCallback) {
            onError(errorCallback);
        });
    }
    viewVendor(vendorCode, onSuccess, onError) {
        let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]().append('vendorCode', vendorCode);
        // params=params.append('name',userId);
        var url = this.constantService.rootUrl + this.constantService.webservices.viewVendor;
        this.utilService.callGetParamsAPI(url, params, function (successCallback) {
            onSuccess(successCallback);
        }, function (errorCallback) {
            onError(errorCallback);
        });
    }
    quotationApprovalslist(onSuccess, onError) {
        var url = this.constantService.rootUrl + this.constantService.webservices.quotationApprovalslist;
        this.utilService.callGetApi(url, function (successCallback) {
            onSuccess(successCallback);
        }, function (errorCallback) {
            onError(errorCallback);
        });
    }
    quotAction(obj, onSuccess, onError) {
        var url = this.constantService.rootUrl + this.constantService.webservices.quotAction;
        this.utilService.callPostAPI(url, obj, function (successCallback) {
            onSuccess(successCallback);
        }, function (errorCallback) {
            onError(errorCallback);
        });
    }
};
ApiHandlerService.ctorParameters = () => [
    { type: _constant_service__WEBPACK_IMPORTED_MODULE_3__["ConstantService"] },
    { type: _util_service__WEBPACK_IMPORTED_MODULE_4__["UtilService"] }
];
ApiHandlerService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
    })
], ApiHandlerService);



/***/ }),

/***/ "./src/app/services/auth.guard.ts":
/*!****************************************!*\
  !*** ./src/app/services/auth.guard.ts ***!
  \****************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth.service */ "./src/app/services/auth.service.ts");




let AuthGuard = class AuthGuard {
    constructor(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    canActivate(route, state) {
        if (this.authService.isAuth()) {
            return true;
        }
        else {
            this.router.navigate(['/']);
        }
    }
    canActivateChild(childRoute, state) {
        if (this.authService.isAuth()) {
            return true;
        }
        else {
            this.router.navigate(['/']);
        }
    }
};
AuthGuard.ctorParameters = () => [
    { type: _auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], AuthGuard);



/***/ }),

/***/ "./src/app/services/auth.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");




let AuthService = class AuthService {
    constructor(router) {
        this.router = router;
        this.authChange = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
    }
    isAuth() {
        return window.localStorage.getItem("loginToken") !== null;
    }
};
AuthService.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], AuthService);



/***/ }),

/***/ "./src/app/services/constant.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/constant.service.ts ***!
  \**********************************************/
/*! exports provided: ConstantService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConstantService", function() { return ConstantService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ConstantService = class ConstantService {
    constructor() {
        this.projectconstants = {
            version: "1.0",
            env: "Dev",
            gpsRadius: 50,
            systemDocFolder: "HomelaneVendorPortal"
        };
        this.rolesManagement = {
            vendorRole: "V",
            adminRole: "A",
            financeRole: "F",
        };
        this.rootUrl = "";
        this.webservices = {
            // menu-role/
            getMenuList: 'menu-role/getMenuList',
            getMenuByRole: 'menu-role/getMenuByRole',
            // common-master/
            getMenuRoleMaster: 'common-master/getMenuRoleMaster',
            getUserCreationMaster: 'common-master/getUserCreationMaster',
            getInvitationMaster: 'common-master/getInvitationMaster',
            getLeadGenerationMaster: 'common-master/getLeadGenerationMaster',
            getRegistrationMaster: 'common-master/getRegistrationMaster',
            getQueryMaster: 'common-master/getQueryMaster',
            //  user/
            getUserDetails: 'user/getUserDetails',
            updatePassword: 'user/updatePassword',
            authentication: 'user/authentication',
            saveUser: 'user/saveUser',
            getUserList: 'user/getUserList',
            forgotPassword: 'user/forgotPassword',
            validateForgotPwdLink: 'user/validateForgotPwdLink',
            updateForcePassword: 'user/updateForcePassword',
            getProfileDetails: 'user/getProfileDetails',
            // vendor /
            viewProfile: 'vendor/viewProfile',
            getVendorAccess: 'vendor/getVendorAccess',
            vendorAccessAction: 'vendor/vendorAccessAction',
            viewVendor: 'vendor/viewVendor',
            // invitation/
            saveVendorInvitation: 'vendor-invitation/saveVendorInvitation',
            getInvitationList: 'vendor-invitation/getInvitationList',
            sendInvitation: 'vendor-invitation/sendInvitation',
            getInvitationById: 'vendor-invitation/getInvitationById',
            // lead-generate/
            saveLead: 'lead-generate/saveLead',
            getLeadUserList: 'lead-generate/getLeadUserList',
            getLeadUserDetails: 'lead-generate/getLeadUserDetails',
            leadAction: 'lead-generate/leadAction',
            // vendor-registration/
            validateRegLink: 'vendor-registration/validateRegLink',
            saveRegDetails: 'vendor-registration/saveRegDetails',
            getRegistrationList: 'vendor-registration/getRegistrationList',
            viewRegistration: 'vendor-registration/viewRegistration',
            viewFile: 'vendor-registration/viewFile',
            updateRegDetails: 'vendor-registration/updateRegDetails',
            regAction: 'vendor-registration/regAction',
            viewFilepkId: 'vendor-registration/viewFile?pkId=',
            // query/
            saveQuery: 'query/saveQuery',
            getQueryList: 'query/getQueryList',
            viewQueryDetails: 'query/viewQueryDetails',
            getTopAnswers: 'query/getTopAnswers',
            saveAnswer: 'query/saveAnswer',
            //Quotation
            getQuotationList: 'quotation/getQuotationList',
            viewQuotationDetails: 'quotation/viewQuotationDetails',
            saveQuotationDetails: 'quotation/saveQuotationDetails',
            getQuotationHistory: 'quotation/getQuotationHistory',
            quotationApprovalslist: 'quotation/getQuotApprovalList',
            quotAction: 'quotation/quotAction',
            //order
            getOrders: 'purchase-order/getOrders',
            viewOrder: 'purchase-order/viewOrder',
            orderAction: 'purchase-order/orderAction',
            //dispatch
            orderDispachList: 'dispatch/orderDispachList',
            viewDispatch: 'dispatch/viewDispatch',
            // menu
            saveRoleMenuAndActions1: 'menu-role/saveRoleMenuAndActions',
            //dashboard
            viewDashboard: 'user/viewDashboard'
        };
        this.successMessage = {
            "successMSG1": "Your form has been submitted successfully"
        };
        this.errorMessage = {
            "errorMSG1": "Unable to reach server. Please try again after sometime"
        };
        if (window.location.host == "localhost:4200") {
            // this.rootUrl = "http://localhost:4200/";
            // this.rootUrl = "http://localhost:8082/GarwareCustomerPortal/";
            this.rootUrl = "http://localhost:8081/";
        }
        else {
            this.rootUrl = window.location.protocol + "//" + window.location.host + window.location.pathname;
            // this.rootUrl = window.location.protocol +"//"+ window.location.host + "/gpl_customer/";
        }
    }
};
ConstantService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], ConstantService);



/***/ }),

/***/ "./src/app/services/constant.utils.ts":
/*!********************************************!*\
  !*** ./src/app/services/constant.utils.ts ***!
  \********************************************/
/*! exports provided: Constant */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Constant", function() { return Constant; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class Constant {
}
Constant.SUCCESS_STATUS = 'success';
Constant.SUCCESS_MESSAGE = 'Your action has been successfully submitted !';
Constant.ERROR_STATUS = 'error';
Constant.ERROR_MESSAGE = 'Something went wrong.';
Constant.APPROVAL_STATUS = 'A';
Constant.REJECT_STATUS = 'R';
Constant.HOLD_STATUS = 'H';


/***/ }),

/***/ "./src/app/services/util.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/util.service.ts ***!
  \******************************************/
/*! exports provided: UtilService, authInterceptorProviders */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UtilService", function() { return UtilService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "authInterceptorProviders", function() { return authInterceptorProviders; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");





const TOKEN_HEADER_KEY = 'Authorization';
let UtilService = class UtilService {
    constructor(http, router) {
        this.http = http;
        this.router = router;
        this.navigationStack = [];
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Accept': 'application/json;',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET, POST, OPTIONS, PUT, PATCH, DELETE',
                'Access-Control-Allow-Headers': 'Authorization, Lang, XMLHttpRequest',
            })
        };
        this.httpOptionsFile = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Accept': 'application/json'
            })
        };
        this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Content-Type': 'application/json',
            'Accept': 'application/json;',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET, POST, OPTIONS, PUT, PATCH, DELETE',
            'Access-Control-Allow-Headers': 'Authorization, Lang, XMLHttpRequest',
        });
        this.service_count = 0;
    }
    intercept(req, next) {
        let authReq = req;
        const token = JSON.parse(window.localStorage.getItem("loginToken"));
        this.service_count++;
        console.log('token::' + token);
        if (token != null) {
            // for Spring Boot back-end
            authReq = req.clone({ headers: req.headers.set(TOKEN_HEADER_KEY, 'Bearer ' + token) });
        }
        return next.handle(authReq)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["finalize"])(() => {
            this.service_count--;
            console.log('this.service_count::::' + this.service_count);
            if (this.service_count === 0) {
                setTimeout(() => {
                    $('#loaderdiv').modal('hide');
                }, 1000);
            }
        }));
    }
    callGetApi(url, onSuccess, onError) {
        $('#loaderdiv').modal('show');
        console.log(url);
        this.http.get(url, this.httpOptions).subscribe(response => {
            if (response['sts'] === 'UN-AUTHERIZED') {
                console.log('UN-AUTHERIZED');
                window.localStorage.clear();
                setTimeout(() => {
                    this.router.navigate([""]);
                }, 300);
            }
            // window.setTimeout(function(){
            //   $('#loaderdiv').modal('hide');
            // }, 1000);
            // console.log("Response: "+JSON.stringify(response));
            onSuccess(response);
        }, error => {
            // window.setTimeout(function(){
            //   $('#loaderdiv').modal('hide');
            // }, 1000);
            // console.log('error:::/n'+error);
            onError(error);
            console.log('error:::');
            console.log(error);
        });
    }
    callPostAPI(url, submitObj, onSuccess, onError) {
        console.log(url);
        $('#loaderdiv').modal('show');
        // console.log(JSON.stringify(submitObj));
        this.http.post(url, JSON.stringify(submitObj), this.httpOptions)
            .subscribe(response => {
            if (response['sts'] === 'UN-AUTHERIZED') {
                console.log('UN-AUTHERIZED');
                window.localStorage.clear();
                setTimeout(() => {
                    this.router.navigate([""]);
                }, 300);
            }
            // window.setTimeout(function(){
            //   $("#loaderdiv").modal("hide");
            // }, 1000);
            onSuccess(response);
        }, error => {
            // window.setTimeout(function(){
            //   $("#loaderdiv").modal("hide");
            // }, 1000);
            onError(error);
            console.log('error:::');
            console.log(error);
        });
    }
    callGetParamsAPI(url, params, onSuccess, onError) {
        $('#loaderdiv').modal('show');
        this.http.get(url, { headers: this.headers, params: params })
            .subscribe(response => {
            // window.setTimeout(function () {
            //   $('#loaderdiv').modal('hide');
            // }, 1000);
            onSuccess(response);
            if (response['sts'] === 'UN-AUTHERIZED') {
                window.localStorage.clear();
                setTimeout(() => {
                    this.router.navigate([""]);
                }, 300);
            }
        }, error => {
            // window.setTimeout(function () {
            //   $('#loaderdiv').modal('hide');
            // }, 1000);
            onError(error);
            console.log('error:::');
            console.log(error);
        });
    }
    // callGetFileAPI(url:any): Observable<any>{
    //  return this.http.get(url, { responseType: 'blob', observe: 'response'}).pipe(
    //   map((res: any) => {
    //     return new Blob([res.body], { type: 'application/pdf' });
    //   })
    // );
    //   return this.http.get<any>(url)
    // }
    //   callGetExcelFileAPI(url:any): Observable<any>{
    //     return this.http.get(url, { responseType: 'blob', observe: 'response'}).pipe(
    //      map((res: any) => {
    //        return new Blob([res.body], { type: 'application/vnd.ms-excel' });
    //      })
    //    );
    //  }
    navigateTo(location, navCtrl) {
        if (this.navigationStack.indexOf(location) > -1) {
            var tempArr = [];
            for (var i = 0; i < this.navigationStack.length; i++) {
                if (this.navigationStack[i] === location)
                    break;
                tempArr.push(this.navigationStack[i]);
            }
            this.navigationStack = new Array();
            this.navigationStack = tempArr;
        }
        this.navigationStack.push(location);
        navCtrl.navigateByUrl(location);
    }
    navigateBack(navCtrl) {
        this.navigationStack.pop();
        navCtrl.navigateByUrl(this.navigationStack[this.navigationStack.length - 1]);
    }
    trim(x) {
        return x ? x.replace(/^\s+|\s+$/gm, '') : '';
    }
    validateEmail(email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }
    validateMobile(mobile) {
        var re = /^[0-9]{10}$/;
        return re.test(String(mobile).toLowerCase());
    }
    validateOnlyCharacters(input) {
        var re = /^[a-zA-Z]{1,50}$/;
        return re.test(String(input).toLowerCase());
    }
    checkForUndefined(inputStr) {
        if (inputStr == undefined || inputStr == "undefined" || inputStr == null
            || inputStr == "null" || inputStr == "NULL") {
            return "";
        }
        else {
            return inputStr;
        }
    }
    getDifferenceBetweenLatLong(currentLat, currentLong, targetLat, targetLong) {
        var ref = this;
        var radiusOfEarth = 6371; // Radius of the earth in km
        var diffLat = ref.deg2rad(targetLat - currentLat);
        var diffLong = ref.deg2rad(targetLong - currentLong);
        var approxDiff = Math.sin(diffLat / 2) * Math.sin(diffLat / 2) +
            Math.cos(ref.deg2rad(currentLat)) * Math.cos(ref.deg2rad(targetLat)) *
                Math.sin(diffLong / 2) * Math.sin(diffLong / 2);
        var calculativeDiff = 2 * Math.atan2(Math.sqrt(approxDiff), Math.sqrt(1 - approxDiff));
        var distance = radiusOfEarth * calculativeDiff; // Distance in km
        return distance.toFixed(2);
    }
    deg2rad(deg) {
        return deg * (Math.PI / 180);
    }
    getDateFromDateTimeStr(inputStr) {
        if (inputStr != "") {
            var tempDate = inputStr.split(" ");
            return this.convertToSqlDate(tempDate[0]);
        }
        else {
            return inputStr;
        }
    }
    convertToSqlDate(inputStr) {
        if (inputStr != "") {
            var tempDate = inputStr.split("-");
            return tempDate[2] + "-" + tempDate[1] + "-" + tempDate[0];
        }
        else {
            return inputStr;
        }
    }
    getWeekendDaysCount(dString1, dString2) {
        var count = 0;
        var oneDay = 24 * 60 * 60 * 1000;
        for (var d, i = dString1, n = dString2; i <= n; i += oneDay) {
            d = new Date(i).getDay();
            if (d === 6 || d === 0) {
                count++;
            }
        }
        return count;
    }
    getWeekNoOfMonth(date) {
        var firstDay = new Date(date.getFullYear(), date.getMonth(), 1).getDay();
        return Math.ceil((date.getDate() + firstDay) / 7);
    }
    convertAPIDatetoAppDate(inputStr) {
        if (inputStr != "") {
            var monthArr = ["Start", "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
            var tempDate = inputStr.split("-");
            return tempDate[2] + "-" + monthArr[parseInt(tempDate[1])] + "-" + tempDate[0];
        }
        else {
            return inputStr;
        }
    }
    getMonthIndex(inputStr) {
        var monthArr = ["Start", "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        return monthArr.indexOf(inputStr);
    }
    getMonthName(index) {
        var monthArr = ["Start", "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        return monthArr[index];
    }
    convertToAppDate(inputStr) {
        if (inputStr != "" && inputStr != undefined) {
            var tempDate = inputStr.split("-");
            var fullDate = ((parseInt(tempDate[0]) < 10) ? "0" + parseInt(tempDate[0]) : tempDate[0]) + "-" +
                ((parseInt(tempDate[1]) < 10) ? "0" + parseInt(tempDate[1]) : tempDate[1]) + "-" + tempDate[2];
            return fullDate;
        }
        else {
            return inputStr;
        }
    }
    getCurrentDateTime() {
        var dateObj = new Date();
        return dateObj.getTime();
        //return dateObj.getFullYear()+"-"+dateObj.getMonth()+1+"-"+dateObj.getDate()+" "+dateObj.getHours()+":"+dateObj.getMinutes()+":"+dateObj.getSeconds()+"."+dateObj.getMilliseconds();
    }
    getDateTime(dateObj) {
        var tempDateObj = new Date(dateObj.getFullYear(), dateObj.getMonth(), dateObj.getDate());
        return tempDateObj.getTime();
    }
    getDateTimeFromTimeObj(dateObj, timeObj) {
        var tempDateObj = new Date(dateObj.getFullYear(), dateObj.getMonth(), dateObj.getDate(), timeObj.getHours(), timeObj.getMinutes());
        return tempDateObj.getTime();
    }
    //accepts format: YYYY-MM-DD
    getDateTimeFromDateStr(dateStr) {
        var dateArr = dateStr.split("-");
        var tempDateObj = new Date(parseInt(dateArr[0]), parseInt(dateArr[1]) - 1, parseInt(dateArr[2]));
        return tempDateObj.getTime();
    }
    //accepts format: YYYY-MM-DD HH:MM
    getDateTimeFromDateTimeStr(dateStr, timeStr) {
        var dateArr = dateStr.split("-");
        var timeArr = timeStr.split(":");
        var tempDateObj = new Date(parseInt(dateArr[0]), parseInt(dateArr[1]) - 1, parseInt(dateArr[2]), parseInt(timeArr[0]), parseInt(timeArr[1]));
        return tempDateObj.getTime();
    }
    getCurrentTime() {
        var dateObj = new Date();
        var hour = dateObj.getHours();
        var minute = dateObj.getMinutes();
        var second = dateObj.getSeconds();
        var timeZone = ((hour >= 12) ? "PM" : "AM");
        hour = ((hour > 12) ? (hour - 12) : hour);
        var fullTime = ((hour < 10) ? "0" + hour : hour) + ":" + ((minute < 10) ? "0" + minute : minute) + ":" + ((second < 10) ? "0" + second : second) + " " + timeZone;
        return fullTime;
    }
    getCurrentDate() {
        var dateObj = new Date();
        var day = dateObj.getDate();
        var month = dateObj.getMonth() + 1;
        var year = dateObj.getFullYear();
        var fullDate = ((day < 10) ? "0" + day : day) + "-" + ((month < 10) ? "0" + month : month) + "-" + year;
        return fullDate;
    }
    capitalizeFirstCharacter(inputString) {
        return inputString.replace(/\w\S*/g, function (txt) { return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase(); });
    }
    getCurrentDateFromObj(dateObj) {
        if (dateObj == undefined || dateObj == "undefined" || dateObj == null
            || dateObj == "null" || dateObj == "NULL" || dateObj == "") {
            return "";
        }
        else {
            var day = dateObj.getDate();
            var month = dateObj.getMonth() + 1;
            var year = dateObj.getFullYear();
            var fullDate = ((day < 10) ? "0" + day : day) + "-" + ((month < 10) ? "0" + month : month) + "-" + year;
            return fullDate;
        }
    }
    //accepts format: new Date().getTime()
    getDateRangeArr(dString1, dString2) {
        var dateRangeArr = [];
        var oneDay = 24 * 60 * 60 * 1000;
        for (var i = dString1, n = dString2; i <= n; i += oneDay) {
            dateRangeArr.push(this.getCurrentDateFromObj(new Date(i)));
        }
        return dateRangeArr;
    }
    getDuration(date, time1, time2) {
        if (date != "" && time1 != "" && time2 != "") {
            var tempDateArr = date.split("-");
            var tempTime1Arr = time1.split(":");
            var tempTime2Arr = time2.split(":");
            var time1Obj = new Date(parseInt(tempDateArr[2]), parseInt(tempDateArr[1]) - 1, parseInt(tempDateArr[0]), parseInt(tempTime1Arr[0]), parseInt(tempTime1Arr[1]), parseInt(tempTime1Arr[2])).getTime();
            var time2Obj = new Date(parseInt(tempDateArr[2]), parseInt(tempDateArr[1]) - 1, parseInt(tempDateArr[0]), parseInt(tempTime2Arr[0]), parseInt(tempTime2Arr[1]), parseInt(tempTime2Arr[2])).getTime();
            var diff = (time2Obj - time1Obj) / 60000;
            var minutes = diff % 60;
            var hours = (diff / 60) % 24;
            return Math.floor(hours) + "hrs " + Math.floor(minutes) + "min";
        }
        else {
            return "";
        }
    }
    callPostFileAPI(url, submitObj, onSuccess, onError) {
        $('#loaderdiv').modal('show');
        this.http.post(url, submitObj, this.httpOptionsFile)
            .subscribe(response => {
            if (response['sts'] === 'UN-AUTHERIZED') {
                console.log('UN-AUTHERIZED');
                window.localStorage.clear();
                setTimeout(() => {
                    this.router.navigate([""]);
                }, 300);
            }
            window.setTimeout(function () {
            }, 1000);
            onSuccess(response);
        }, error => {
            window.setTimeout(function () {
            }, 1000);
            onError(error);
            console.log(error);
        });
    }
};
UtilService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
UtilService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], UtilService);

const authInterceptorProviders = [
    { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HTTP_INTERCEPTORS"], useClass: UtilService, multi: true }
];
function retry(arg0) {
    throw new Error('Function not implemented.');
}
function throwError(errorMessage) {
    throw new Error('Function not implemented.');
}
// function finalize(arg0: () => void): import("rxjs").OperatorFunction<HttpEvent<any>, unknown> {
//   throw new Error('Function not implemented.');
// }
// function finalize(arg0: () => void): import("rxjs").OperatorFunction<import("@angular/common/http").HttpEvent<any>, unknown> {
//   throw new Error('Function not implemented.');
// }


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Homelane-Vendor-Portal-FE\Homelane-Vendor-Portal-FE\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map