import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashBoardComponent } from './dash-board/dash-board.component';
import { HeaderComponent } from './header/header.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { AddCustomerComponent } from './add-customer/add-customer.component';
import { EditCustomerComponent } from './edit-customer/edit-customer.component';
import { AllCustomersComponent } from './all-customers/all-customers.component';
import { AllRoomsComponent } from './all-rooms/all-rooms.component';
import { AddRoomsComponent } from './add-rooms/add-rooms.component';
import { EditRoomsComponent } from './edit-rooms/edit-rooms.component';
import { PaymentsComponent } from './payments/payments.component';
import { PaymentInvoicesComponent } from './payment-invoices/payment-invoices.component';
import { ReportsComponent } from './reports/reports.component';
import { LocationComponent } from './location/location.component';
import { CalendarComponent } from './calendar/calendar.component';
import { CreateInvoiceComponent } from './create-invoice/create-invoice.component';
import { CompanySettingsComponent } from './company-settings/company-settings.component';
import { RolesPermissionsComponent } from './roles-permissions/roles-permissions.component';
import { EmailSettingsComponent } from './email-settings/email-settings.component';
import { InvoiceSettingsComponent } from './invoice-settings/invoice-settings.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { AddRoleComponent } from './add-role/add-role.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { PaymentReceiptComponent } from './payment-receipt/payment-receipt.component';
import { EditTestimonialsComponent } from './edit-testimonials/edit-testimonials.component';
import { ListTestimonialComponent } from './list-testimonial/list-testimonial.component';
import { AddTestimonialsComponent } from './add-testimonials/add-testimonials.component';
import { InventoryComponent } from './inventory/inventory.component';
import { BranchesComponent } from './branches/branches.component';
import { AddBranchComponent } from './add-branch/add-branch.component';
import { EmployeeComponent } from './employee/employee.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { EmpLoginComponent } from './emp-login/emp-login.component';
import { AuthGuard } from './gaurds/auth.gaurd';
import { AllBookingComponent } from './all-booking/all-booking.component';
import { AddBookingComponent } from './add-booking/add-booking.component';
import { EditBookingComponent } from './edit-booking/edit-booking.component';
import { EditBranchComponent } from './edit-branch/edit-branch.component';


const routes: Routes = [
  {
    path: '',
  redirectTo:'dash-board',pathMatch:'full'

  },
  {
    path: 'dash-board',
    component: DashBoardComponent,canActivate: [AuthGuard]
  },


  {
    path: 'add-customer',
    component: AddCustomerComponent,
  },
  {
    path: 'edit-customer',
    component: EditCustomerComponent
  },
  {
    path:'edit-branch/:_id',
    component:EditBranchComponent
  },
  {
    path: 'all-customers',
    component: AllCustomersComponent
  },
 

  {
    path: 'all-rooms',
    component: AllRoomsComponent
  },
  {
    path: 'add-rooms',
    component: AddRoomsComponent
  },
  {
    path: 'edit-rooms/:_id',
    component: EditRoomsComponent
  },

  {
    path: 'payments',
    component: PaymentsComponent
  },
  {
    path: 'payment-invoices',
    component: PaymentInvoicesComponent
  },

  {
    path: 'reports',
    component: ReportsComponent
  },
 
  {
    path: 'location',
    component: LocationComponent
  },
  {
    path: 'calendar',
    component: CalendarComponent
  },
  {
    path: 'create-invoice',
    component: CreateInvoiceComponent
  },
  {
    path: 'company-settings',
    component: CompanySettingsComponent
  },
  {
    path: 'roles-permissions',
    component: RolesPermissionsComponent
  },
  {
    path: 'email-settings',
    component: EmailSettingsComponent
  },
  {
    path: 'invoice-settings',
    component: InvoiceSettingsComponent
  },
  {
    path: 'notifications',
    component: NotificationsComponent
  },
  {
    path: 'edit-booking/:_id',
    component: EditBookingComponent
  },
  {
    path: 'change-password',
    component: ChangePasswordComponent
  },
  {
    path: 'add-role',
    component: AddRoleComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },


  {
    path: 'profile',
    component: ProfileComponent
  },
  {
    path: 'payment-receipt',
    component: PaymentReceiptComponent
  },

  {
    path: 'edit-testimonials',
    component: EditTestimonialsComponent
  },
  {
    path: 'list-testimonials',
    component: ListTestimonialComponent
  },
  {
    path: 'add-testimonials',
    component: AddTestimonialsComponent
  },
  {
    path: 'inventory',
    component: InventoryComponent
  },
  {
    path: 'branches',
    component: BranchesComponent
  },
  {
    path: 'add-branch',
    component: AddBranchComponent
  },
  {
    path: 'employee',
    component: EmployeeComponent
  },
  {
    path: 'add-employee',
    component: AddEmployeeComponent
  },
  {
    path: 'emp-login',
    component: EmpLoginComponent
  },
  {
    path: 'all-booking',
    component: AllBookingComponent
  },
  {
    path: 'add-booking',
    component: AddBookingComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: "enabled" })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
