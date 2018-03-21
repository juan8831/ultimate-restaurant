
import { Component, OnInit } from '@angular/core';
import { ClientService } from '../../services/client.service';
import { Client } from '../../models/Client';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';
import { timeout } from 'q';
import { CustomerService } from '../../services/customer.service';
import { PaymentService } from '../../services/payment.service';
import { Order } from '../../models/Order';
import { LineItem } from '../../models/LineItem';
import { AuthService } from '../../services/auth.service';
import { InventoryService } from '../../services/inventory.service';
import { InventoryItem } from '../../models/InventoryItem';
import { Completo } from '../../models/Completo';
import { Customer } from '../../models/Customer';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { AddItemDialogComponent } from '../add-item-dialog/add-item-dialog.component';
import { DeliveryDialogComponent } from '../delivery-dialog/delivery-dialog.component';
import {RejectionDialogComponent} from '../rejection-dialog/rejection-dialog.component';
import { Payment } from '../../models/Payment';



@Component({
  selector: 'app-payment-details',
  templateUrl: './payment-details.component.html',
  styleUrls: ['./payment-details.component.css']
})
export class PaymentDetailsComponent implements OnInit {

  constructor(
    private paymentService: PaymentService,
    private customerService: CustomerService,
    private router: Router,
    private route: ActivatedRoute,
    private flashMessage: FlashMessagesService,
    private authService: AuthService,
    private inventoryService: InventoryService,
    private dialog: MatDialog
  ) { }


  id: string;
  payment: Payment;
  hasBalance: boolean = false;

  isAdmin: boolean;
  email: string;


  selectedInvetory: string;
  ErrorMessageIsVisible: boolean;

  public visible = false;
  private visibleAnimate = false;


  secoIsVisible: boolean;
  sopaIsVisible: boolean;
  bebibaIsVisible: boolean;
  totalPrice: number = 0;

  statusSelectionIsVisible: boolean;

  search: string;
  selectedList: InventoryItem[];
  selectedListTitle: string;

  customer: Customer;


  ngOnInit() {

    window.scrollTo(0, 0);

    this.authService.getAuth().subscribe(auth => {
      if (auth) {
        this.email = auth.email;
      }
      //Get customer
      this.customerService.getCustomer(this.email).subscribe(customer => {
        if (customer != null) {
          this.isAdmin = customer.role == "admin" ? true : false;
          this.customer = customer;
        }
      });
    });


    //Get id from url 
    this.id = this.route.snapshot.params['id'];

    //Get payment 
    this.paymentService.getPayment(this.id).subscribe(payment => {
      if (payment != null) {
        this.payment = payment;
        this.getCustomerAddress(payment.customerEmail);
      }
    });
  }

  customerAddress: string;

  quantityOptions = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  getCustomerAddress(email) {
    this.customerService.getCustomer(email).subscribe(customer => {
      if (customer != null) {
        this.customerAddress = customer.address;
      }
    });
  }

  onDeleteClick() {
    if (confirm('Seguro que quieres borrarlo ?')) {
      this.paymentService.deletePayment(this.payment);
      this.flashMessage.show('Pago Borrado', {
        cssClass: 'alert-success', timeout: 4000
      });
      this.router.navigate(['/pagos']);
    }
  }


  print(){
    this.PrintElem('print');
  }


  PrintElem(elem)
{
    //var mywindow = window.open('', 'PRINT', 'height=100,width=100');
    var mywindow = window.open('', 'PRINT');

    mywindow.document.write('<html><head><title>' + document.title  + '</title>');
    mywindow.document.write('</head><body >');
    //mywindow.document.write('<h1>' + document.title  + '</h1>');
    mywindow.document.write(document.getElementById(elem).innerHTML);
    mywindow.document.write('</body></html>');

    mywindow.document.close(); // necessary for IE >= 10
    mywindow.focus(); // necessary for IE >= 10*/

    mywindow.print();
    mywindow.close();

    return true;
}

  submitUpdatedPayment(){
    this.paymentService.updatePayment(this.payment);
    this.flashMessage.show('Pago actualizado', {
      cssClass: 'alert-success', timeout: 4000
    });
    this.router.navigate(['/pagos']);
  }

  updatePayment() {
    if(this.payment.amount <= 0)
      return; //add error message
    this.submitUpdatedPayment();
    
  }

  openDialog() {
    // const dialogConfig = new MatDialogConfig();
    // dialogConfig.disableClose = false;
    // dialogConfig.autoFocus = false;

    // this.selectedListTitle = "Item Nuevo";

    // dialogConfig.data = {
    //   selectedListTitle: "Item Nuevo"
    // };
    // const dialogRef = this.dialog.open(AddItemDialogComponent, dialogConfig);
    // dialogRef.afterClosed().subscribe(data => {
    //   this.addNewLineItem(data.newLineItem);
    // });

  }


}
