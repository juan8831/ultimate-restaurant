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

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  today : Date;

  orders: Order[];
  customers: Customer[];
  totalOwed: number;
  isAdmin: boolean;
  email: string;
  menuDelDia: string;
  isMenuDay: boolean;

  constructor(
    private clientService: ClientService,
    private orderService: OrderService,
    private customerService: CustomerService,
    private authService: AuthService,
    private inventoryService: InventoryService,
    private dialog: MatDialog
  ) { }

  ngOnInit() {

    this.today = new Date();
    this.isMenuDay = true;
    this.today.setFullYear(2018);
    this.today.setMonth(2);
    this.today.setDate(24);
    

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

