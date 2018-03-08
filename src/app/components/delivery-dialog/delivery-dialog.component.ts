import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material";
import { Component, OnInit, Inject } from '@angular/core';
import { ClientService } from '../../services/client.service';
import { Client } from '../../models/Client';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';
import { timeout } from 'q';

@Component({
  selector: 'app-delivery-dialog',
  templateUrl: './delivery-dialog.component.html',
  styleUrls: ['./delivery-dialog.component.css']
})
export class DeliveryDialogComponent implements OnInit {

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private flashMessage: FlashMessagesService,
    private dialogRef: MatDialogRef<DeliveryDialogComponent>,
    @Inject(MAT_DIALOG_DATA) data
  ) {
      this.selectedListTitle = "Seleccionar Domicilio"
   }

  ngOnInit() {
  
  }

  selectedListTitle: string;
  deliveryBoy: string;
  deliveryBoyOptions = ["David", "Yovanni", "Daniel", "Otro"];

  selectDeliveryBoy() {
    if (this.deliveryBoy.length == 0 ) {
      return; //add error message
    }
      var data = {
        deliveryBoy: this.deliveryBoy
      }
      this.dialogRef.close(data);
  }

  close() {
    this.dialogRef.close();
  }

}

