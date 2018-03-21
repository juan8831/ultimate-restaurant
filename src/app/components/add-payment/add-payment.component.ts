
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';
import { timeout } from 'q';
import { CustomerService } from '../../services/customer.service';
import { PaymentService } from '../../services/payment.service';
import { AuthService } from '../../services/auth.service';
import { InventoryService } from '../../services/inventory.service';
import { InventoryItem } from '../../models/InventoryItem';
import { Customer } from '../../models/Customer';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { AddItemDialogComponent } from '../add-item-dialog/add-item-dialog.component';
import { DeliveryDialogComponent } from '../delivery-dialog/delivery-dialog.component';
import { RejectionDialogComponent} from '../rejection-dialog/rejection-dialog.component';
import { Payment } from '../../models/Payment';
import { FormsModule,  FormControl, ReactiveFormsModule} from '@angular/forms';
import { Observable} from 'rxjs/Observable';
import { startWith} from 'rxjs/operators/startWith';
import { map} from 'rxjs/operators/map';

@Component({
  selector: 'app-add-payment',
  templateUrl: './add-payment.component.html',
  styleUrls: ['./add-payment.component.css']
})
export class AddPaymentComponent implements OnInit{

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
  payment: Payment = {
    id: '',
    amount: 0,
    customerEmail: '',
    customerName: '',
    date: null,
    note: ''
  }

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

    //get all customers
    this.customerService.getCustomers().subscribe(customers => {
      this.customers = customers;
      this.filteredCustomers = this.myControl.valueChanges
      .pipe(
        startWith(''),
        map(val => this.filter(val))
      );
      this.filteredCustomers.subscribe(customers => {
        if(customers.length == this.customers.length){
          this.payment.customerName = "No Hay Ningun Cliente Selecionado";
        }
        else if(customers.length > 0){
          this.payment.customerName = customers[0].name;
          var selectedCustomer = this.customers.find(customer => customer.name == this.payment.customerName );
          this.payment.customerEmail = selectedCustomer.id;
          this.customerAddress = selectedCustomer.address;
        }
        else{
          this.payment.customerName = "Cliente Invalido";
        }
      });
    });
  }

  customerAddress: string;
  myControl: FormControl = new FormControl();
  quantityOptions = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  filteredCustomers: Observable<Customer[]>;
  customers: Customer[];
  getCustomerAddress(email) {
    this.customerService.getCustomer(email).subscribe(customer => {
      if (customer != null) {
        this.customerAddress = customer.address;
      }
    });
  }

  filter(val: string): Customer[] {
    return this.customers.filter(customer =>
      //customer.name.toLowerCase().indexOf(val.toLowerCase()) === 0);
      customer.name.toLowerCase().includes(val.toLowerCase()));
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


  createPayment() {
    if(this.payment.amount <= 0 || this.payment.customerName == "No Hay Ningun Cliente Selecionado")
      return; //add error message

      this.payment.date = new Date();
      this.paymentService.newPayment(this.payment);
      this.flashMessage.show('Nuevo pago creado', {
        cssClass: 'alert-success', timeout: 4000
      });
      this.router.navigate(['/pagos']);
    
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
