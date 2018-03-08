import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { FlashMessagesModule } from 'angular2-flash-messages';
import {environment} from '../environments/environment';
import {AngularFireModule} from 'angularfire2';
import {AngularFirestoreModule, AngularFirestore} from 'angularfire2/firestore';
import {AngularFireAuthModule} from 'angularfire2/auth';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { AddClientComponent } from './components/add-client/add-client.component';
import { EditClientComponent } from './components/edit-client/edit-client.component';
import { ClientDetailsComponent } from './components/client-details/client-details.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { SettingsComponent } from './components/settings/settings.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { AppRoutingModule } from './/app-routing.module';

import { ClientService } from './services/client.service';
import { AuthService} from './services/auth.service';
import {SettingsService} from './services/settings.service';
import {OrderService} from './services/order.service';
import {CustomerService} from './services/customer.service';
import { InventoryService } from './services/inventory.service';

import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { AddOrderComponent } from './components/add-order/add-order.component';
import { EditOrderComponent } from './components/edit-order/edit-order.component';
import { AdminOrdersComponent } from './components/admin-orders/admin-orders.component';
import { OrdersComponent } from './components/orders/orders.component';
import { OrderDetailsComponent } from './components/order-details/order-details.component';
import { AdminAddOrderComponent } from './components/admin-add-order/admin-add-order.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {
  MatAutocompleteModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatDividerModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatStepperModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,

} from '@angular/material';
import { ChangeDecimalPipe } from './change-decimal.pipe';
import { FooterComponent } from './components/footer/footer.component';
import { AddItemDialogComponent } from './components/add-item-dialog/add-item-dialog.component';
import { DeliveryDialogComponent } from './components/delivery-dialog/delivery-dialog.component';
import { RejectionDialogComponent } from './components/rejection-dialog/rejection-dialog.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    DashboardComponent,
    SidebarComponent,
    AddClientComponent,
    EditClientComponent,
    ClientDetailsComponent,
    LoginComponent,
    RegisterComponent,
    SettingsComponent,
    NotFoundComponent,
    AdminDashboardComponent,
    AddOrderComponent,
    EditOrderComponent,
    AdminOrdersComponent,
    OrdersComponent,
    OrderDetailsComponent,
    AdminAddOrderComponent,
    ChangeDecimalPipe,
    FooterComponent,
    AddItemDialogComponent,
    DeliveryDialogComponent,
    RejectionDialogComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase,
    'apollo1'),
    AngularFirestoreModule,
    AngularFireAuthModule,
    FormsModule,
    FlashMessagesModule.forRoot(),
    MatAutocompleteModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatDatepickerModule,
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatStepperModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    BrowserAnimationsModule,
    ReactiveFormsModule
  ],
  providers: [ClientService, AuthService, SettingsService, OrderService, CustomerService, InventoryService],
  bootstrap: [AppComponent],
  entryComponents: [AddItemDialogComponent, DeliveryDialogComponent, RejectionDialogComponent]
})
export class AppModule { }
