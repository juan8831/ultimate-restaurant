import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/observable';
import { Client } from '../models/Client';
import { Order } from '../models/Order';
import { AuthService } from '../services/auth.service';
import { CustomerService } from '../services/customer.service';


@Injectable()
export class OrderService {
  ordersCollection: AngularFirestoreCollection<Order>;
  orderDoc: AngularFirestoreDocument<Order>;
  orders: Observable<Order[]>;
  order: Observable<Order>;
  userEmail: string;
  isAdmin: boolean;

  constructor(
    private afs: AngularFirestore,
    private authService: AuthService,
    private customerSerivce: CustomerService
  ) {
    this.ordersCollection = this.afs.collection('orders');
  }

  getTodayOrders(email: string, isAdmin: boolean): Observable < Order[] > {

    let today = new Date();
    today.setHours(0,0,0,0);
  
    if(isAdmin){
      this.ordersCollection = this.afs.collection('orders', ref => 
      ref.orderBy("timeReceived", "desc").
      where('timeReceived', ">", today));
    }
    else{
      this.ordersCollection = this.afs.collection('orders', ref => 
      ref.orderBy("timeReceived", "desc").
      where("customerEmail", "==", email).
      where('timeReceived', ">", today));
    }
    this.orders = this.ordersCollection.snapshotChanges().map(changes => {
      return changes.map(action => {
        const data = action.payload.doc.data() as Order;
        data.id = action.payload.doc.id;
        return data;
      });
    });
  
    return this.orders;
  
  }

  getOrdersInRange(email: string, isAdmin: boolean, fromDate: Date, toDate:Date): Observable < Order[] > {

    var newFromDate = new Date(fromDate);
    var newToDate = new Date(toDate);
    newFromDate.setHours(0,0,0,0);
    newToDate.setDate(toDate.getDate()+1);
    newToDate.setHours(0,0,0,0);

    if(isAdmin){
      this.ordersCollection = this.afs.collection('orders', ref => 
      ref.orderBy("timeReceived", "desc").
      where('timeReceived', ">", newFromDate).
      where('timeReceived', "<", newToDate));
    }
    else{
      this.ordersCollection = this.afs.collection('orders', ref => 
      ref.orderBy("timeReceived", "desc").
      where("customerEmail", "==", email).
      where('timeReceived', ">", newFromDate).
      where('timeReceived', "<", newToDate));
    }
    this.orders = this.ordersCollection.snapshotChanges().map(changes => {
      return changes.map(action => {
        const data = action.payload.doc.data() as Order;
        data.id = action.payload.doc.id;
        return data;
      });
    });
  
    return this.orders;
  
  }
  


getOrders(email: string, isAdmin: boolean): Observable < Order[] > {
  if(isAdmin){
    this.ordersCollection = this.afs.collection('orders', ref => ref.orderBy("timeReceived", "desc"));
  }
  else{
    this.ordersCollection = this.afs.collection('orders', ref => ref.orderBy("timeReceived", "desc").where("customerEmail", "==", email));
  }
  this.orders = this.ordersCollection.snapshotChanges().map(changes => {
    return changes.map(action => {
      const data = action.payload.doc.data() as Order;
      data.id = action.payload.doc.id;
      return data;
    });
  });

  return this.orders;
}

newOrder(order: Order){
  this.ordersCollection.add(order)
  .then(res =>{
    console.log("success order added");
  })
  .catch(err => {
    console.log("error" + err);
  })
}

getOrder(id: string): Observable < Order > {
  this.orderDoc = this.afs.doc<Order>(`orders/${id}`);
  this.order = this.orderDoc.snapshotChanges().map(action => {
    if (action.payload.exists === false) {
      return null;
    }
    else {
      const data = action.payload.data() as Order;
      data.id = action.payload.id;
      return data;
    }
  });

  return this.order;
}

updateOrder(order: Order){
  this.orderDoc = this.afs.doc(`orders/${order.id}`);
  this.orderDoc.update(order);
}

deleteOrder(order: Order){
  this.orderDoc = this.afs.doc(`orders/${order.id}`);
  this.orderDoc.delete();
}

}
