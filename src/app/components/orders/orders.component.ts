import { Component, OnInit } from '@angular/core';
import { ClientService } from '../../services/client.service';
import { Client } from '../../models/Client';

import { OrderService } from '../../services/order.service';
import { Order } from '../../models/Order';
import { Customer } from '../../models/Customer';
import { CustomerService } from '../../services/customer.service';
import { AuthService } from '../../services/auth.service';
import { InventoryService } from '../../services/inventory.service';

import {MatDialog, MatDialogConfig} from '@angular/material';
import {AddItemDialogComponent} from '../add-item-dialog/add-item-dialog.component';

import {MatDatepickerInputEvent} from '@angular/material/datepicker';

import {DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE} from '@angular/material/core';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
  

  today : Date;
  toDate: Date;
  fromDate: Date;
  orders: Order[];
  todayOrders: Order[]
  filteredOrders: Order[];
  customers: Customer[];
  totalOwed: number;
  isAdmin: boolean;
  email: string;
  menuDelDia: string;
  isMenuDay: boolean;
  todaySearch: FormControl = new FormControl();
  historySearch: FormControl = new FormControl();

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
    this.filterOrdersByDate();
  }
  toDateEvent(type: string, event: MatDatepickerInputEvent<Date>) {
    this.toDate = event.value;
    this.filterOrdersByDate();
  }
  

  filterOrdersByDate(){
    this.filteredOrders = this.orders.filter(order => {
      var tempDate = new Date(order.timeReceived) ;
      tempDate.setHours(0,0,0,0);
      if(tempDate <= this.toDate && tempDate >= this.fromDate){
        return true;
      }
      else{
        return false;
      }


    }
    );
  }

  filterTodayOrders(){
    this.todayOrders = this.orders.filter(order => 

      order.timeReceived.getDay() == this.today.getDay() 
      && order.timeReceived.getMonth() == this.today.getMonth()
      && order.timeReceived.getFullYear() == this.today.getFullYear()
    );
  }
  
  fromDateSelect = new FormControl(this.today);
  toDateSelect = new FormControl(this.today);

  ngOnInit() {

    this.today = new Date();
    this.toDate = new Date();
    this.fromDate = new Date();
    this.isMenuDay = true;
    this.selectedDate = this.today; /*delete*/

    this.toDate.setDate(this.today.getDate()-1); //yesterday
    this.fromDate.setDate(this.today.getDate()-15); //15 daya ago
    this.toDateSelect.setValue(this.toDate);
    this.fromDateSelect.setValue(this.fromDate);
    this.adapter.setLocale('es');

    this.historySearch.valueChanges.subscribe(value => {
      this.filterOrdersByDate();
      this.filteredOrders = this.filteredOrders.filter(order => 
        order.customerName.toLowerCase().includes(value.toLowerCase()))
    });

    this.todaySearch.valueChanges.subscribe(value => {
      this.filterTodayOrders();
      this.todayOrders = this.todayOrders.filter(order => 
        order.customerName.toLowerCase().includes(value.toLowerCase()))
    });
    

   
    
    //sunday is 0 
    if(this.today.getDay() == 0){
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
        this.orderService.getOrders(this.email, this.isAdmin).subscribe(orders => {
          this.orders = orders;
          this.filterOrdersByDate();
          this.filterTodayOrders();

          this.customerService.getCustomers().subscribe(customers => {
            this.customers = customers;

            this.orders.forEach((value, index) => {
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

