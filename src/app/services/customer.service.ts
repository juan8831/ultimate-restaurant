import { Injectable } from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from 'angularfire2/firestore';
import {Observable} from 'rxjs/observable';
import {Customer} from '../models/Customer';



@Injectable()
export class CustomerService {
  customersCollection: AngularFirestoreCollection<Customer>;
  customerDoc: AngularFirestoreDocument<Customer>;
  customers: Observable<Customer[]>;
  customer: Observable<Customer>;

  constructor(private afs: AngularFirestore) {
    this.customersCollection = this.afs.collection('customers', ref => ref.orderBy('name', 'asc'));
   }

   getCustomers(): Observable<Customer[]>{
    this.customers = this.customersCollection.snapshotChanges().map(changes => {
      return changes.map(action => {
        const data = action.payload.doc.data() as Customer;
        data.id = action.payload.doc.id;
        return data;
      });
    });

    return this.customers;
   }

   newCustomer(customer: Customer){
     this.customersCollection.add(customer);
   }

   getCustomer(id: string): Observable<Customer>{
     this.customerDoc = this.afs.doc<Customer>(`customers/${id}`);
     this.customer = this.customerDoc.snapshotChanges().map(action =>{
        if(action.payload.exists === false){
          return null;
        }
        else{
          const data = action.payload.data() as Customer;
          data.id = action.payload.id;
          return data;
        }
     });

     return this.customer;  
   }

   updateCustomer(customer: Customer){
     this.customerDoc = this.afs.doc(`customers/${customer.id}`);
     this.customerDoc.update(customer);
   }

   deleteCustomer(customer: Customer){
    this.customerDoc = this.afs.doc(`customers/${customer.id}`);
    this.customerDoc.delete();
  }



   

}
