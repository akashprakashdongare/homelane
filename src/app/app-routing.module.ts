import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChangePasswordComponent } from './pages/change-password/change-password.component';

import { CustomerInvitationComponent } from './pages/customer-invitation/customer-invitation.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LeadGenerationListComponent } from './pages/lead-generation-list/lead-generation-list.component';
import { LeadGenerationViewComponent } from './pages/lead-generation-view/lead-generation-view.component';
import { LeadGenerationComponent } from './pages/lead-generation/lead-generation.component';
import { LeadManagementComponent } from './pages/lead-management/lead-management.component';
import { LoginComponent } from './pages/login/login.component';
import { MainLayoutComponent } from './pages/main-layout/main-layout.component';
import { MenuAuthorizationComponent } from './pages/menu-authorization/menu-authorization.component';
import { OrderListComponent } from './pages/order-list/order-list.component';
import { OrderViewComponent } from './pages/order-view/order-view.component';
import { QueryListComponent } from './pages/query-list/query-list.component';
import { QueryMangementComponent } from './pages/query-mangement/query-mangement.component';
import { QueryViewComponent } from './pages/query-view/query-view.component';
import { QuotationHistoryListComponent } from './pages/quotation-history-list/quotation-history-list.component';
import { QuotationHistoryViewComponent } from './pages/quotation-history-view/quotation-history-view.component';
import { QuotationListComponent } from './pages/quotation-list/quotation-list.component';
import { QuotationViewComponent } from './pages/quotation-view/quotation-view.component';
import { SignUpPageComponent } from './pages/sign-up-page/sign-up-page.component';

import { UserCreationComponent } from './pages/user-creation/user-creation.component';
import { VendorManagementComponent } from './pages/vendor-management/vendor-management.component';
import { VendorRegistrationListComponent } from './pages/vendor-registration-list/vendor-registration-list.component';
import { VendorRegistrationViewComponent } from './pages/vendor-registration-view/vendor-registration-view.component';
import { VendorRegistrationComponent } from './pages/vendor-registration/vendor-registration.component';
import { AuthGuard } from './services/auth.guard';
import { DispatchOrderListComponent } from './pages/dispatch-order-list/dispatch-order-list.component';
import { DispatchViewComponent } from './pages/dispatch-view/dispatch-view.component';
import { SessionExpiredComponent } from './pages/session-expired/session-expired.component';
import { MyProfileComponent } from './pages/my-profile/my-profile.component';
import { ForgotPasswordComponent } from './pages/forgot-password/forgot-password.component';
import { VendorAccessComponent } from './pages/vendor-access/vendor-access.component';
import { VendorViewComponent } from './pages/vendor-view/vendor-view.component';
import { ForceChangePasswordComponent } from './pages/force-change-password/force-change-password.component';
import { QuotationApprovalListComponent } from './pages/quotation-approval-list/quotation-approval-list.component';
import { QuotationApprovalViewComponent } from './pages/quotation-approval-view/quotation-approval-view.component';
import { OrderViewDivdeComponent } from './pages/order-view-divde/order-view-divde.component';
const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'sign-up',
    component: SignUpPageComponent

  },
  {
    path: 'vendorRegistraion/:id',
    component: VendorRegistrationComponent

  },
  // {
  //   path: 'menuAuthorization',
  //   component: MenuAuthorizationComponent

  // },
  {
    path: 'leadCreation',
    component: LeadGenerationComponent,

  },
  {
    path: 'session-expired',
    component: SessionExpiredComponent,

  },
  {
    path: 'forgotPassword/:id',
    component: ForgotPasswordComponent
  },
  {
    path: 'forceChangePassword',
    component: ForceChangePasswordComponent,
    canActivate: [AuthGuard],

  },
  {
    path: 'main-layout',
    component: MainLayoutComponent,
    canActivate: [AuthGuard],
    canActivateChild: [AuthGuard],
    children: [
      // {
      //   path: '',
      //   component: DashboardComponent,

      // },
      {
        path: 'dashboard',
        component: DashboardComponent,

      },
      {
        path: 'changePassword',
        component: ChangePasswordComponent,

      },
      {
        path: 'userCreation',
        component: UserCreationComponent,
      },
      {
        path: 'customerInvitation',
        component: CustomerInvitationComponent,
      },
      {
        path: 'leadGeneration',
        component: LeadManagementComponent,
        canActivateChild: [AuthGuard],
        children: [
          {
            path: '',
            component: LeadGenerationListComponent

          },
          {
            path: 'view/:id',
            component: LeadGenerationViewComponent

          },

        ]

      },
      {
        path: 'vendorManagement',
        component: VendorManagementComponent,
        canActivateChild: [AuthGuard],
        children: [
          {
            path: '',
            component: VendorRegistrationListComponent

          },
          {
            path: 'view/:id',
            component: VendorRegistrationViewComponent

          },
        ]
      },

      {
        path: 'menuAuthorization',
        component: MenuAuthorizationComponent

      },
      {
        path: 'queryManagement',
        component: QueryMangementComponent,
        canActivateChild: [AuthGuard],
        children: [
          {
            path: '',
            component: QueryListComponent

          },
          {
            path: 'view/:id',
            component: QueryViewComponent

          },

        ]
      },
      {
        path: 'quotationList',
        component: QuotationListComponent,
      },
      {
        path: 'quotationView',
        component: QuotationViewComponent,
      },
      {
        path: 'quotationHistory',
        component: QuotationHistoryListComponent,
      },
      {
        path: 'quotationHistoryView',
        component: QuotationHistoryViewComponent,
      },
      {
        path: 'orderList',
        component: OrderListComponent,
      },
      {
        path: 'orderView',
        component: OrderViewComponent,
      },
      {
        path: 'dispatchOrderList',
        component: DispatchOrderListComponent
      },
      {
        path: 'dispatchView',
        component: DispatchViewComponent
      },
      {
        path: 'myProfile',
        component: MyProfileComponent
      },
      {
        path: 'vendorAccess',
        component: VendorAccessComponent
      },
      {
        path: 'vendorView',
        component: VendorViewComponent
      },
       {
        path: 'quotationApprovals',
        component: QuotationApprovalListComponent
      },
      {
        path: 'quotationApprovalsView',
        component: QuotationApprovalViewComponent
      },
      {
        path: 'poConfirmation',
        component: OrderViewDivdeComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class AppRoutingModule { }
