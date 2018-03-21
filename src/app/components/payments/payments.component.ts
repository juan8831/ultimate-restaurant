import { Component, OnInit } from '@angular/core';
import { ClientService } from '../../services/client.service';
import { Client } from '../../models/Client';

import { OrderService } from '../../services/order.service';
import { Customer } from '../../models/Customer';
import { CustomerService } from '../../services/customer.service';
import { AuthService } from '../../services/auth.service';
import { InventoryService } from '../../services/inventory.service';
import { PaymentService } from '../../services/payment.service';

import { MatDialog, MatDialogConfig } from '@angular/material';
import { AddItemDialogComponent } from '../add-item-dialog/add-item-dialog.component';

import { MatDatepickerInputEvent } from '@angular/material/datepicker';

import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
import { FormControl } from '@angular/forms';
import { Payment } from '../../models/Payment';

@Component({
  selector: 'app-payments',
  templateUrl: './payments.component.html',
  styleUrls: ['./payments.component.css']
})
export class PaymentsComponent implements OnInit {


  today: Date;
  toDate: Date;
  fromDate: Date;

  customers: Customer[];
  totalOwed: number;
  isAdmin: boolean;
  email: string;
  customerSearch: FormControl = new FormControl();
  selectedDate: Date;
  payments: Payment[];
  filteredPayments: Payment[];

  constructor(
    private paymentService: PaymentService,
    private customerService: CustomerService,
    private authService: AuthService,
    private dialog: MatDialog,
    private adapter: DateAdapter<any>
  ) { }




  fromDateEvent(type: string, event: MatDatepickerInputEvent<Date>) {
    this.fromDate = event.value;
    //this.filterOrdersByDate();
  }
  toDateEvent(type: string, event: MatDatepickerInputEvent<Date>) {
    this.toDate = event.value;
    // this.filterOrdersByDate();
  }


  filterPaymentsByCustomer(name) {
    if (name == null)
      name = "";
    this.filteredPayments = this.payments.filter(payment =>
      payment.customerName.toLowerCase().includes(name.toLowerCase()));
  }


  searchPaymentsInRange() {
    this.paymentService.getPaymentsInRange(this.email, this.isAdmin, this.fromDate, this.toDate).subscribe(payments => {
      this.payments = payments;
      this.filterPaymentsByCustomer(this.customerSearch.value);
    });
  }

  fromDateSelect = new FormControl(this.today);
  toDateSelect = new FormControl(this.today);



  ngOnInit() {

    this.today = new Date();
    this.toDate = new Date();
    this.fromDate = new Date();
    this.selectedDate = this.today; /*delete*/

    this.toDate.setDate(this.today.getDate()); //yesterday
    this.fromDate.setDate(this.today.getDate() - 7); //7 days ago
    this.toDateSelect.setValue(this.toDate);
    this.fromDateSelect.setValue(this.fromDate);
    this.adapter.setLocale('es');

    this.customerSearch.valueChanges.subscribe(value => {
      this.filteredPayments = this.payments.filter(order =>
        order.customerName.toLowerCase().includes(value.toLowerCase()))
    });



    this.authService.getAuth().subscribe(auth => {
      if (auth) {
        this.email = auth.email;
      }
      //Get customer
      this.customerService.getCustomer(this.email).subscribe(customer => {
        if (customer != null) {
          this.isAdmin = customer.role == "admin" ? true : false;
        }

        this.customerService.getCustomers().subscribe(customers => {
          this.customers = customers;
        });
      });
    });
  }
}