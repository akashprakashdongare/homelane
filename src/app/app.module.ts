import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { MainLayoutComponent } from './pages/main-layout/main-layout.component';
import { HeaderComponent } from './pages/header/header.component';
import { SideMenuComponent } from './pages/side-menu/side-menu.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SignUpPageComponent } from './pages/sign-up-page/sign-up-page.component';
import { MenuAuthorizationComponent } from './pages/menu-authorization/menu-authorization.component';
import { UserCreationComponent } from './pages/user-creation/user-creation.component';
import { ChangePasswordComponent } from './pages/change-password/change-password.component';
import { MaterialModule } from './material/material.module';
import { ApiHandlerService } from './services/api-handler.service';
import { ConstantService } from './services/constant.service';
import { authInterceptorProviders, UtilService } from './services/util.service';

import { AuthService } from './services/auth.service';
import { SuccessErrorMessageComponent } from './pages/success-error-message/success-error-message.component';
import { ForgotPasswordComponent } from './pages/forgot-password/forgot-password.component';
import { CustomerInvitationComponent } from './pages/customer-invitation/customer-invitation.component';
import { VendorRegistrationComponent } from './pages/vendor-registration/vendor-registration.component';
import { DialogBoxComponent } from './pages/dialog-box/dialog-box.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 
import { FlexLayoutModule } from '@angular/flex-layout';
import { LeadGenerationComponent } from './pages/lead-generation/lead-generation.component';
import { LeadGenerationListComponent } from './pages/lead-generation-list/lead-generation-list.component';
import { LeadManagementComponent } from './pages/lead-management/lead-management.component';
import { LeadGenerationViewComponent } from './pages/lead-generation-view/lead-generation-view.component';
import { VendorRegistrationListComponent } from './pages/vendor-registration-list/vendor-registration-list.component';
import { VendorRegistrationViewComponent } from './pages/vendor-registration-view/vendor-registration-view.component';
import { VendorManagementComponent } from './pages/vendor-management/vendor-management.component';
import { QueryMangementComponent } from './pages/query-mangement/query-mangement.component';
import { QueryListComponent } from './pages/query-list/query-list.component';
import { QueryViewComponent } from './pages/query-view/query-view.component';
import { QuotationListComponent } from './pages/quotation-list/quotation-list.component';
import { QuotationViewComponent } from './pages/quotation-view/quotation-view.component';
import { QuotationHistoryListComponent } from './pages/quotation-history-list/quotation-history-list.component';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { QuotationHistoryViewComponent } from './pages/quotation-history-view/quotation-history-view.component';
import { OrderListComponent } from './pages/order-list/order-list.component';
import { OrderViewComponent } from './pages/order-view/order-view.component';
import { DispatchOrderListComponent } from './pages/dispatch-order-list/dispatch-order-list.component';
import { DispatchViewComponent } from './pages/dispatch-view/dispatch-view.component';
import { SessionExpiredComponent } from './pages/session-expired/session-expired.component';
import { MyProfileComponent } from './pages/my-profile/my-profile.component';
import { VendorAccessComponent } from './pages/vendor-access/vendor-access.component';
import { VendorViewComponent } from './pages/vendor-view/vendor-view.component';
import { ForceChangePasswordComponent } from './pages/force-change-password/force-change-password.component';
import { QuotationApprovalListComponent } from './pages/quotation-approval-list/quotation-approval-list.component';
import { QuotationApprovalViewComponent } from './pages/quotation-approval-view/quotation-approval-view.component';
import { OrderViewDivdeComponent } from './pages/order-view-divde/order-view-divde.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    MainLayoutComponent,
    HeaderComponent,
    SideMenuComponent,
    SignUpPageComponent,
    MenuAuthorizationComponent,
    UserCreationComponent,
    ChangePasswordComponent,

    SuccessErrorMessageComponent,
    ForgotPasswordComponent,
    VendorRegistrationComponent,
    CustomerInvitationComponent,
    DialogBoxComponent,
    LeadGenerationComponent,
    LeadGenerationListComponent,
    LeadManagementComponent,
    LeadGenerationViewComponent,
    VendorRegistrationListComponent,
    VendorRegistrationViewComponent,
    VendorManagementComponent,
    QueryMangementComponent,
    QueryListComponent,
    QueryViewComponent,
    QuotationListComponent,
    QuotationViewComponent,
    QuotationHistoryListComponent,
    QuotationHistoryViewComponent,
    OrderListComponent,
    OrderViewComponent,
    DispatchOrderListComponent,
    DispatchViewComponent,
    SessionExpiredComponent,
    MyProfileComponent,
    VendorAccessComponent,
    VendorViewComponent,
    ForceChangePasswordComponent,
    QuotationApprovalListComponent,
    QuotationApprovalViewComponent,
    OrderViewDivdeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule.withConfig({warnOnNgModelWithFormControl: 'never'}),
    MaterialModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    BsDatepickerModule.forRoot(),
  ],
  providers: [
    ApiHandlerService,
    ConstantService,
    UtilService,
    authInterceptorProviders,
    AuthService
    
  ],
  entryComponents:[DialogBoxComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
