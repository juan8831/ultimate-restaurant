import { Component, OnInit } from '@angular/core';
import { ClientService } from '../../services/client.service';
import { Client } from '../../models/Client';

import { OrderService } from '../../services/order.service';
import { Order } from '../../models/Order';
import { Customer } from '../../models/Customer';
import { CustomerService } from '../../services/customer.service';
import { AuthService } from '../../services/auth.service';
import { InventoryService } from '../../services/inventory.service';

import { MatDialog, MatDialogConfig } from '@angular/material';
import { AddItemDialogComponent } from '../add-item-dialog/add-item-dialog.component';

import { MatDatepickerInputEvent } from '@angular/material/datepicker';

import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {


  today: Date;
  toDate: Date;
  fromDate: Date;

  customers: Customer[];
  totalOwed: number;
  isAdmin: boolean;
  email: string;
  menuDelDia: string;
  isMenuDay: boolean;
  todaySearch: FormControl = new FormControl();
  deliverySearch: FormControl = new FormControl();
  historySearch: FormControl = new FormControl();

  todayOrders: Order[]
  todayFilteredOrders: Order[];
  historyOrders: Order[];
  historyFilteredOrders: Order[];



  constructor(
    private clientService: ClientService,
    private orderService: OrderService,
    private customerService: CustomerService,
    private authService: AuthService,
    private inventoryService: InventoryService,
    private dialog: MatDialog,
    private adapter: DateAdapter<any>
  ) { }

  selectedDate: Date;


  fromDateEvent(type: string, event: MatDatepickerInputEvent<Date>) {
    this.fromDate = event.value;
    //this.filterOrdersByDate();
  }
  toDateEvent(type: string, event: MatDatepickerInputEvent<Date>) {
    this.toDate = event.value;
    // this.filterOrdersByDate();
  }


  filterHistoryOrdersByCustomer(name) {
    if (name == null)
      name = "";
    this.historyFilteredOrders = this.historyOrders.filter(order =>
      order.customerName.toLowerCase().includes(name.toLowerCase()));
  }


  filterTodayOrders() {

  }

  searchHistoryOrdersInRange() {
    this.orderService.getOrdersInRange(this.email, this.isAdmin, this.fromDate, this.toDate).subscribe(orders => {
      this.historyOrders = orders;
      this.filterHistoryOrdersByCustomer(this.historySearch.value);
      //this.filterHistoryOrders();

      this.customerService.getCustomers().subscribe(customers => {
        this.customers = customers;

        this.historyOrders.forEach((value, index) => {
          var customer = this.customers.find((customer) => {
            return customer.id === value.customerEmail;
          });
          if (customer) {
            value.customerName = customer.name;
          }
          else {
            value.customerName = "Name not found";
          }
        });
      });
    });
  }

  fromDateSelect = new FormControl(this.today);
  toDateSelect = new FormControl(this.today);

  filterTodayOrdersByCustomer(name: String) {
    if (name == null)
      name = "";
    this.todayFilteredOrders = this.todayOrders.filter(order =>
      order.customerName.toLowerCase().includes(name.toLowerCase()));
  }

  filterTodayOrdersByDelivery(name: String) {
    if (name == null || name.length == 0)
      return;
    this.todayFilteredOrders = this.todayFilteredOrders.filter(order => {
      if (order.deliveryBoy == null) return false;
      else {
        if (order.deliveryBoy.toLowerCase().includes(name.toLowerCase())) return true;
        else return false;
      }
    });

  }




  ngOnInit() {

    this.today = new Date();
    this.toDate = new Date();
    this.fromDate = new Date();
    this.isMenuDay = true;
    this.selectedDate = this.today; /*delete*/

    this.toDate.setDate(this.today.getDate() - 1); //yesterday
    this.fromDate.setDate(this.today.getDate() - 7); //7 days ago
    this.toDateSelect.setValue(this.toDate);
    this.fromDateSelect.setValue(this.fromDate);
    this.adapter.setLocale('es');

    this.historySearch.valueChanges.subscribe(value => {
      this.historyFilteredOrders = this.historyOrders.filter(order =>
        order.customerName.toLowerCase().includes(value.toLowerCase()))
    });

    this.todaySearch.valueChanges.subscribe(value => {

      this.filterTodayOrdersByCustomer(value);
      this.filterTodayOrdersByDelivery(this.deliverySearch.value);


    });

    this.deliverySearch.valueChanges.subscribe(value => {
      this.filterTodayOrdersByCustomer(this.todaySearch.value);
      this.filterTodayOrdersByDelivery(value);
    });


    //sunday is 0 
    if (this.today.getDay() == 0) {
      this.isMenuDay = false;
    }

    this.inventoryService.getInventoryItem('menu-del-dia').subscribe(item => {
      this.menuDelDia = item.description;
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

        this.orderService.getTodayOrders(this.email, this.isAdmin).subscribe(orders => {
          this.todayOrders = orders;
          this.todayFilteredOrders = this.todayOrders;
          this.todayOrders.forEach((value, index) => {
            var customer = this.customers.find((customer) => {
              return customer.id === value.customerEmail;
            });
            if (customer) {
              value.customerName = customer.name;
            }
            else {
              value.customerName = "Name not found";
            }
          });
        });
      });
      });
    });
  }
}