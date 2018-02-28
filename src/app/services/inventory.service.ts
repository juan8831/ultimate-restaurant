import { Injectable } from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from 'angularfire2/firestore';
import {Observable} from 'rxjs/observable';
import {Client} from '../models/Client';
import {InventoryItem} from '../models/InventoryItem';
import {Completo} from '../models/Completo';


@Injectable()
export class InventoryService {
  inventoryItemsCollection: AngularFirestoreCollection<InventoryItem>;
  inventoryItemDoc: AngularFirestoreDocument<InventoryItem>;
  inventoryItems: Observable<InventoryItem[]>;
  inventoryItem: Observable<InventoryItem>;

  completosCollection: AngularFirestoreCollection<Completo>;
  completoDoc: AngularFirestoreDocument<Completo>;
  completos: Observable<Completo[]>;
  completo: Observable<Completo>;

  secosCollection: AngularFirestoreCollection<InventoryItem>;
  secos: Observable<InventoryItem[]>;
  sopasCollection: AngularFirestoreCollection<InventoryItem>;
  sopas: Observable<InventoryItem[]>;
  bebibasCollection: AngularFirestoreCollection<InventoryItem>;
  bebibas: Observable<InventoryItem[]>;

  constructor(private afs: AngularFirestore) {
    this.inventoryItemsCollection = this.afs.collection('inventory_items');
    this.completosCollection = this.afs.collection('completos');
    this.secosCollection = this.afs.collection('inventory_items', ref => ref.where("type", "==", "seco"));
    this.sopasCollection = this.afs.collection('inventory_items', ref => ref.where("type", "==", "sopa"));
    this.bebibasCollection = this.afs.collection('inventory_items', ref => ref.where("type", "==", "bebiba"));
   }

   getInventoryItems(): Observable<InventoryItem[]>{
    this.inventoryItems = this.inventoryItemsCollection.snapshotChanges().map(changes => {
      return changes.map(action => {
        const data = action.payload.doc.data() as InventoryItem;
        data.id = action.payload.doc.id;
        return data;
      });
    });
    return this.inventoryItems;
   }

   getCompletos(): Observable<Completo[]>{
    this.completos = this.completosCollection.snapshotChanges().map(changes => {
      return changes.map(action => {
        const data = action.payload.doc.data() as Completo;
        data.id = action.payload.doc.id;
        return data;
      });
    });
    return this.completos;
   }

   getSecos(): Observable<InventoryItem[]>{
    this.secos = this.secosCollection.snapshotChanges().map(changes => {
      return changes.map(action => {
        const data = action.payload.doc.data() as InventoryItem;
        data.id = action.payload.doc.id;
        return data;
      });
    });
    return this.secos;
   }

   getSopas(): Observable<InventoryItem[]>{
    this.sopas = this.sopasCollection.snapshotChanges().map(changes => {
      return changes.map(action => {
        const data = action.payload.doc.data() as InventoryItem;
        data.id = action.payload.doc.id;
        return data;
      });
    });
    return this.sopas;
   }
   getBebibas(): Observable<InventoryItem[]>{
    this.bebibas = this.bebibasCollection.snapshotChanges().map(changes => {
      return changes.map(action => {
        const data = action.payload.doc.data() as InventoryItem;
        data.id = action.payload.doc.id;
        return data;
      });
    });
    return this.bebibas;
   }

  
   newInventoryItem(inventoryItem: InventoryItem){
     this.inventoryItemsCollection.add(inventoryItem);
   }

   getInventoryItem(id: string): Observable<InventoryItem>{
     this.inventoryItemDoc = this.afs.doc<InventoryItem>(`inventory_items/${id}`);
     this.inventoryItem = this.inventoryItemDoc.snapshotChanges().map(action =>{
        if(action.payload.exists === false){
          return null;
        }
        else{
          const data = action.payload.data() as InventoryItem;
          data.id = action.payload.id;
          return data;
        }
     });

     return this.inventoryItem;  
   }

   updateInventoryItem(inventoryItem: InventoryItem){
     this.inventoryItemDoc = this.afs.doc(`inventory_items/${inventoryItem.id}`);
     this.inventoryItemDoc.update(inventoryItem);
   }

   deleteInventoryItem(inventoryItem: InventoryItem){
    this.inventoryItemDoc = this.afs.doc(`inventory_items/${inventoryItem.id}`);
    this.inventoryItemDoc.delete();
  }

}
