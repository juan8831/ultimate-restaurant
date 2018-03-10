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

  bebibas: InventoryItem[];
  secos: InventoryItem[];
  porciones: InventoryItem[];
  sopas: InventoryItem[];

  selectedList: InventoryItem[];
  selectedListName: string;

  inventoryItemTypes = ['Secos', 'Bebibas', 'Porciones', 'Sopas'];


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

    this.inventoryService.getBebibas().subscribe(items => this.bebibas = items);
    this.inventoryService.getSecos().subscribe(items => {
      this.secos = items
      this.setSelectedList('Secos');
    });
    this.inventoryService.getSopas().subscribe(items => this.sopas = items);
    this.inventoryService.getPorciones().subscribe(items => this.porciones = items);

    
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

  setSelectedList(event){
    this.selectedListName = event;
    switch(event){  
      case "Secos": 
        this.selectedList = this.secos;     
        break;
      case "Bebibas":
        this.selectedList = this.bebibas;
        break;
      case "Sopas":
        this.selectedList = this.sopas;
        break;
      case "Porciones":
        this.selectedList = this.porciones;
        break;  
    }
  }

  updateItem(item ){

    if(item.isAvailable == "false"){
      item.isAvailable = false;
    }
    if(item.isAvailable == "true")
      item.isAvailable = true;
  
    this.inventoryService.updateInventoryItem(item); 
    this.flashMessage.show('Disponibilidad actualizada' , {
      cssClass: 'alert-success', timeout: 2000
    }); 
  }

}
