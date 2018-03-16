import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/observable';
import { Client } from '../models/Client';
import { Payment} from '../models/Payment';

import { AuthService } from '../services/auth.service';
import { CustomerService } from '../services/customer.service';


@Injectable()
export class PaymentService {
  paymentsCollection: AngularFirestoreCollection<Payment>;
  paymentDoc: AngularFirestoreDocument<Payment>;
  payments: Observable<Payment[]>;
  payment: Observable<Payment>;
  userEmail: string;
  isAdmin: boolean;

  constructor(
    private afs: AngularFirestore,
    private authService: AuthService,
    private customerSerivce: CustomerService
  ) {
    this.paymentsCollection = this.afs.collection('payments');
  }

  getTodayPayments(email: string, isAdmin: boolean): Observable < Payment[] > {

    let today = new Date();
    today.setHours(0,0,0,0);
  
    if(isAdmin){
      this.paymentsCollection = this.afs.collection('payments', ref => 
      ref.orderBy("timeReceived", "desc").
      where('timeReceived', ">", today));
    }
    else{
      this.paymentsCollection = this.afs.collection('payments', ref => 
      ref.orderBy("timeReceived", "desc").
      where("customerEmail", "==", email).
      where('timeReceived', ">", today));
    }
    this.payments = this.paymentsCollection.snapshotChanges().map(changes => {
      return changes.map(action => {
        const data = action.payload.doc.data() as Payment;
        data.id = action.payload.doc.id;
        return data;
      });
    });
  
    return this.payments;
  
  }

  getPaymentsInRange(email: string, isAdmin: boolean, fromDate: Date, toDate:Date): Observable < Payment[] > {

    var newFromDate = new Date(fromDate);
    var newToDate = new Date(toDate);
    newFromDate.setHours(0,0,0,0);
    newToDate.setDate(toDate.getDate()+1);
    newToDate.setHours(0,0,0,0);

    if(isAdmin){
      this.paymentsCollection = this.afs.collection('payments', ref => 
      ref.orderBy("date", "desc").
      where('date', ">", newFromDate).
      where('date', "<", newToDate));
    }
    else{
      this.paymentsCollection = this.afs.collection('payments', ref => 
      ref.orderBy("date", "desc").
      where("customerEmail", "==", email).
      where('date', ">", newFromDate).
      where('date', "<", newToDate));
    }
    this.payments = this.paymentsCollection.snapshotChanges().map(changes => {
      return changes.map(action => {
        const data = action.payload.doc.data() as Payment;
        data.id = action.payload.doc.id;
        return data;
      });
    });
  
    return this.payments;
  
  }
  


getPayments(email: string, isAdmin: boolean): Observable < Payment[] > {
  if(isAdmin){
    this.paymentsCollection = this.afs.collection('payments', ref => ref.orderBy("date", "desc"));
  }
  else{
    this.paymentsCollection = this.afs.collection('payments', ref => ref.orderBy("date", "desc").where("customerEmail", "==", email));
  }
  this.payments = this.paymentsCollection.snapshotChanges().map(changes => {
    return changes.map(action => {
      const data = action.payload.doc.data() as Payment;
      data.id = action.payload.doc.id;
      return data;
    });
  });

  return this.payments;
}

newPayment(payment: Payment){
  this.paymentsCollection.add(payment)
  .then(res =>{
    console.log("success payment added");
  })
  .catch(err => {
    console.log("error" + err);
  })
}

getPayment(id: string): Observable < Payment > {
  this.paymentDoc = this.afs.doc<Payment>(`payments/${id}`);
  this.payment = this.paymentDoc.snapshotChanges().map(action => {
    if (action.payload.exists === false) {
      return null;
    }
    else {
      const data = action.payload.data() as Payment;
      data.id = action.payload.id;
      return data;
    }
  });

  return this.payment;
}

updatePayment(payment: Payment){
  this.paymentDoc = this.afs.doc(`payments/${payment.id}`);
  this.paymentDoc.update(payment);
}

deletePayment(payment: Payment){
  this.paymentDoc = this.afs.doc(`payments/${payment.id}`);
  this.paymentDoc.delete();
}

}
