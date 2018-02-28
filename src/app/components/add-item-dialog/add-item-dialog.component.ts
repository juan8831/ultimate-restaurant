import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material";
import { Component, OnInit, Inject } from '@angular/core';
import { ClientService } from '../../services/client.service';
import { Client } from '../../models/Client';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';
import { timeout } from 'q';
import { OrderService } from '../../services/order.service';
import { CustomerService } from '../../services/customer.service';
import { Order } from '../../models/Order';
import { LineItem } from '../../models/LineItem';
import { AuthService } from '../../services/auth.service';
import { InventoryService } from '../../services/inventory.service';
import { InventoryItem } from '../../models/InventoryItem';
import { Completo } from '../../models/Completo';
import { Customer } from '../../models/Customer';



@Component({
  selector: 'app-add-item-dialog',
  templateUrl: './add-item-dialog.component.html',
  styleUrls: ['./add-item-dialog.component.css']
})
export class AddItemDialogComponent implements OnInit {

  id: string;
  order: Order;
  hasBalance: boolean = false;
  showBalanceUpdateInput: boolean = false;
  inventoryItems: InventoryItem[];
  completos: Completo[];
  secoItems: InventoryItem[];
  sopaItems: InventoryItem[];
  bebibaItems: InventoryItem[];

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

  newLineItem: LineItem = {
    inventoryId: '',
    quantity: 1,
    description: '',
    pricePerUnit: 0
  }

  newCompletoItem: Completo = {
    id: '',
    quantity: 1,
    bebiba: '',
    seco: '',
    sopa: ''
  }

  statusOptions = ['Recibida', 'Aprobada', 'Rechazada', 'Lista', 'Enviada'];

  constructor(
    private orderService: OrderService,
    private customerService: CustomerService,
    private router: Router,
    private route: ActivatedRoute,
    private flashMessage: FlashMessagesService,
    private authService: AuthService,
    private inventoryService: InventoryService,
    private dialogRef: MatDialogRef<AddItemDialogComponent>,
    @Inject(MAT_DIALOG_DATA) data
  ) {
    this.selectedListTitle = data.selectedListTitle;
   }

  customer: Customer;
  

  save() {
    var data = {
      menuDelDia: "pizza"
    }
    this.dialogRef.close(data);
  }

  close() {
    this.dialogRef.close();
  }


  ngOnInit() {


    this.statusSelectionIsVisible = true;

    this.secoIsVisible = this.sopaIsVisible = this.bebibaIsVisible = false;

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
    //this.ErrorMessageIsVisible = false;

    this.inventoryService.getInventoryItems().subscribe(inventoryItems => {
      this.inventoryItems = inventoryItems;
    });
    this.inventoryService.getCompletos().subscribe(completos => {
      this.completos = completos;
    });
    this.inventoryService.getSecos().subscribe(secos => {
      this.secoItems = secos;
      this.selectedList = this.secoItems;
    });
    this.inventoryService.getSopas().subscribe(sopas => {
      this.sopaItems = sopas;
    });
    this.inventoryService.getBebibas().subscribe(bebibas => {
      this.bebibaItems = bebibas;
    });



    //Get order
    this.orderService.getOrder(this.id).subscribe(order => {
      if (order != null) {
        this.order = order;
        this.getTotalPrice();
        this.getCustomerAddress(order.customerEmail);
      }
    });
  }

  updateBalance() {
    this.orderService.updateOrder(this.order);
    this.flashMessage.show('Balance updated', {
      cssClass: 'alert-success', timeout: 4000
    });
  
    
  }

  currentOrderEmail: string;

  quantityOptions = [1,2,3,4,5,6,7,8,9,10];

  getCustomerAddress(email){
    this.customerService.getCustomer(email).subscribe(customer => {
      if (customer != null) {
        this.currentOrderEmail = customer.address;
      }
    });
  }

  onDeleteClick() {
    if (confirm('Seguro que quieres borrarlo ?')) {
      this.orderService.deleteOrder(this.order);
      this.flashMessage.show('Order Removed', {
        cssClass: 'alert-success', timeout: 4000
      });
      this.router.navigate(['/']);

    }
  }

  onTest() {
    //this.order.lineItems.unshift({"inventoryId": '4', isComplete: true, quantity: 2});
    this.show();
    // $('#editModal').modal('show');
  }

  public show(): void {
    this.visible = true;
    setTimeout(() => this.visibleAnimate = true, 100);
    this.secoIsVisible = this.sopaIsVisible = this.bebibaIsVisible = false;
    this.selectedListTitle = "Item Nuevo";
  }

  public hide(): void {
    this.visibleAnimate = false;
    setTimeout(() => this.visible = false, 300);
    this.resetNewLineItem();
    this.selectionIsVisible = false;
    this.completoIsVisible = false;
    //this.selectedListTitle = "Nuevo Item";
  }

  public onContainerClicked(event: MouseEvent): void {
    if ((<HTMLElement>event.target).classList.contains('modal')) {
      this.hide();
    }
  }

  public showSeco() {
    this.secoIsVisible = true;
    this.selectedList = this.sopaItems;
  }
  public showSopa() {
    this.sopaIsVisible = true;

  }
  public showBebiba() {
    this.bebibaIsVisible = true;
  }
  completoIsVisible: boolean;

  public showCompleto() {
    this.completoIsVisible = true;
    this.selectionIsVisible = false;
    this.selectedListTitle = "Almuerzo Completo";
  }

  selectionIsVisible: boolean;

  public showSelection(type) {
    this.selectionIsVisible = true;
    switch (type) {
      case "sopa": this.selectedList = this.sopaItems;
        this.selectedListTitle = "Sopa";
        break;
      case "seco": this.selectedList = this.secoItems;
        this.selectedListTitle = "Seco";
        break;
      case "bebiba": this.selectedList = this.bebibaItems;
        this.selectedListTitle = "Bebiba";
        break;
    }
    this.resetNewLineItem();
  }

  resetNewLineItem() {
    this.newLineItem = {
      'inventoryId': '',
      'quantity': 1,
      'description': '',
      'pricePerUnit': 0
    }
  }

  resetCompleto() {
    this.newCompletoItem = {
      id: '',
      quantity: 1,
      bebiba: '',
      seco: '',
      sopa: ''
    }
  }

  addNewItem() {
    if (!this.newLineItem.inventoryId || this.newLineItem.quantity == 0) {
      return; //add error message
    }

      var inventoryItem = this.getNewLineInventoryItem();
      this.newLineItem.pricePerUnit = inventoryItem.price;
      this.newLineItem.description = inventoryItem.description;

      var data = {
        newLineItem: this.newLineItem
      }
      this.dialogRef.close(data);

  }

  addNewCompleto() {
    if(!this.newCompletoItem.bebiba || !this.newCompletoItem.seco || !this.newCompletoItem.sopa ){
      return; //TODO Add error message
    }

    this.newLineItem.inventoryId = "completo";
    this.newLineItem.quantity = this.newCompletoItem.quantity;
    this.newLineItem.pricePerUnit = this.getNewCompletoPrice();
    this.newLineItem.description = `${this.newCompletoItem.seco} | ${this.newCompletoItem.sopa} | ${this.newCompletoItem.bebiba}`

    var data = {
      newLineItem: this.newLineItem
    }
    this.dialogRef.close(data);
  }

  getNewLineItemPrice() {
    var tempItem = this.inventoryItems.find((item) => {
      return item.id === this.newLineItem.inventoryId;
    });
    return tempItem ? tempItem.price : 0;
  }
  getNewCompletoPrice() {
    var tempItem = this.inventoryItems.find((item) => {
      return item.id === 'completo'
    });
    return tempItem ? tempItem.price : 0;

  }

  getNewLineInventoryItem(): InventoryItem {
    return this.inventoryItems.find((item) => {
      return item.id === this.newLineItem.inventoryId;
    });
  }

  getTotalPrice() {
    var sum = 0;
    this.order.lineItems.forEach((value, index) => {
      sum += (value.pricePerUnit * value.quantity);
    });
    this.totalPrice = sum;
  }

  deleteLineItem(index) {
    if (confirm('Seguro que quieres borrarlo?')) {
      this.order.lineItems.splice(index, 1);
      this.flashMessage.show('Item Eliminado', {
        cssClass: 'alert-success', timeout: 4000
      });
    }
    this.getTotalPrice();
  }

  getOrderTotalPrice(){
    var sum = 0;
    this.order.lineItems.forEach((value,index) =>{
      sum += (value.pricePerUnit * value.quantity);
    })
    return sum;
  }

  submitOrder() {
    this.updateStatus();
    this.flashMessage.show('Orden actualizada', {
      cssClass: 'alert-success', timeout: 4000
    });
    this.router.navigate(['/']);
  }

  updateStatus() {
    this.order.totalPrice = this.getOrderTotalPrice();
    if(this.order.status == 'Enviada'){
      this.order.timeEnviada = new Date();
    }
    if(this.order.status == 'Rechazada'){
      this.order.timeEnviada = '';
    }
    this.orderService.updateOrder(this.order);
    this.flashMessage.show('Estado actualizado', {
      cssClass: 'alert-success', timeout: 4000
    });
  }

}

