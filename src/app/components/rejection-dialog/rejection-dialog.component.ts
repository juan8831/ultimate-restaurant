import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material";
import { Component, OnInit, Inject } from '@angular/core';
import { ClientService } from '../../services/client.service';
import { Client } from '../../models/Client';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';
import { timeout } from 'q';

@Component({
  selector: 'app-rejection-dialog',
  templateUrl: './rejection-dialog.component.html',
  styleUrls: ['./rejection-dialog.component.css']
})
export class RejectionDialogComponent implements OnInit {

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private flashMessage: FlashMessagesService,
    private dialogRef: MatDialogRef<RejectionDialogComponent>,
    @Inject(MAT_DIALOG_DATA) data
  ) {
      this.selectedListTitle = "Seleccionar Razon para Rechazar Orden"
   }

  ngOnInit() {
  
  }

  selectedListTitle: string;
  rejectionReason: string;
  rejectionReasonOptions = ["El menu se acabo", "Uno de los items esta agotado", "Otra razon"];

  selectRejectionReason() {
    if (this.rejectionReason.length == 0 ) {
      return; //add error message
    }
      var data = {
        rejectionReason: this.rejectionReason
      }
      this.dialogRef.close(data);
  }

  close() {
    this.dialogRef.close();
  }

}

