import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {FlashMessagesService} from 'angular2-flash-messages';
import {SettingsService} from '../../services/settings.service';
import {Settings} from '../../models/Settings';
import {InventoryService} from '../../services/inventory.service';
import { InventoryItem } from '../../models/InventoryItem';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

  settings: Settings;
  menuDelDia: InventoryItem = {
    id : 'menu-del-dia',
    description: '',
    type: '',
    price: 0
  }

  constructor(
    private router: Router,
    private flashMessage: FlashMessagesService,
    private settingsService: SettingsService,
    private inventoryService: InventoryService

  ) { }

  ngOnInit() {
    this.settings = this.settingsService.getSettings();
    this.inventoryService.getInventoryItem('menu-del-dia').subscribe(item =>{
      this.menuDelDia = item;
    });
  }

  onSubmit(){
    this.settingsService.changeSettings(this.settings);
    this.flashMessage.show("Settings saved!", {
      cssClass: 'alert-success', time: 4000
    });
  }

  updateMenu(){
    this.inventoryService.updateInventoryItem(this.menuDelDia);
  }

}
