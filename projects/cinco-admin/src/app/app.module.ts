import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { DashBoardComponent } from './dash-board/dash-board.component';
import { EditCustomerComponent } from './edit-customer/edit-customer.component';
import { AddCustomerComponent } from './add-customer/add-customer.component';
import { AllCustomersComponent } from './all-customers/all-customers.component';
import { AllRoomsComponent } from './all-rooms/all-rooms.component';
import { EditRoomsComponent } from './edit-rooms/edit-rooms.component';
import { AddRoomsComponent } from './add-rooms/add-rooms.component';
import { ReportsComponent } from './reports/reports.component';
import { LocationComponent } from './location/location.component';
import { FormsModule, ReactiveFormsModule, ɵInternalFormsSharedModule } from '@angular/forms';
import { CalendarComponent } from './calendar/calendar.component';
import { DataService } from './data.service';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { DayPilotModule } from '@daypilot/daypilot-lite-angular';
import { PaymentInvoicesComponent } from './payment-invoices/payment-invoices.component';
import { PaymentsComponent } from './payments/payments.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { TimepickerModule } from 'ngx-bootstrap/timepicker';
import { CreateInvoiceComponent } from './create-invoice/create-invoice.component';
import { CompanySettingsComponent } from './company-settings/company-settings.component';
import { RolesPermissionsComponent } from './roles-permissions/roles-permissions.component';
import { EmailSettingsComponent } from './email-settings/email-settings.component';
import { InvoiceSettingsComponent } from './invoice-settings/invoice-settings.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { AddRoleComponent } from './add-role/add-role.component';
import { LoginComponent } from './login/login.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ProfileComponent } from './profile/profile.component';
import { DataTablesModule } from 'angular-datatables';
import { PaymentReceiptComponent } from './payment-receipt/payment-receipt.component';
import { AddTestimonialsComponent } from './add-testimonials/add-testimonials.component';
import { EditTestimonialsComponent } from './edit-testimonials/edit-testimonials.component';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrModule } from 'ngx-toastr';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { ApiService } from './api.client';
import { AuthService } from './service/autho.service';
import { AuthInterceptor } from './interceptors/auth-interceptor';
import { AuthGuard } from './gaurds/auth.gaurd';
import { ListTestimonialComponent } from './list-testimonial/list-testimonial.component';
import { InventoryComponent } from './inventory/inventory.component';
import { BranchesComponent } from './branches/branches.component';
import { AddBranchComponent } from './add-branch/add-branch.component';
import { EmployeeComponent } from './employee/employee.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { EmpLoginComponent } from './emp-login/emp-login.component';
import { AllBookingComponent } from './all-booking/all-booking.component';
import { AddBookingComponent } from './add-booking/add-booking.component';
import { EditBookingComponent } from './edit-booking/edit-booking.component';
import { EditBranchComponent } from './edit-branch/edit-branch.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SideBarComponent,
    DashBoardComponent,

    EditCustomerComponent,
    AddCustomerComponent,
    AllCustomersComponent,
    AllRoomsComponent,
    EditRoomsComponent,
    AddRoomsComponent,
    CalendarComponent,
    PaymentInvoicesComponent,
    PaymentsComponent,
    ReportsComponent,
    CreateInvoiceComponent,
    CompanySettingsComponent,
    RolesPermissionsComponent,
    EmailSettingsComponent,
    InvoiceSettingsComponent,
    NotificationsComponent,
    ChangePasswordComponent,
    AddRoleComponent,
    ForgotPasswordComponent,
    ProfileComponent,
    LoginComponent,
    LocationComponent,
    PaymentReceiptComponent,
    AddTestimonialsComponent,
    EditTestimonialsComponent,
    ListTestimonialComponent,
    InventoryComponent,
    BranchesComponent,
    AddBranchComponent,
    EmployeeComponent,
    AddEmployeeComponent,
    EmpLoginComponent,
    AllBookingComponent,
    AddBookingComponent,
    EditBookingComponent,
    EditBranchComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    DayPilotModule,
    BrowserModule,
    BrowserAnimationsModule,
    BsDatepickerModule,
    TimepickerModule.forRoot(),
    DataTablesModule,
    ɵInternalFormsSharedModule,
    HttpClientModule,
    ToastrModule.forRoot({
      timeOut: 1000,
      positionClass: "toast-top-right",
    }),
  ],
  providers: [
    DataService,
    NgbModal,
    ApiService,
    AuthGuard,
    AuthService,
  

    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
