import { Component, ViewChild, OnInit } from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';
import {MatIconRegistry} from '@angular/material/icon';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  
  selectedIndex = 1;
  selectedRecievingDisplay = {};
  selectedInspectionDisplay = {};

  baseDataRecieving = [{
    "PO Number":"2019-20/1086",
    "Item#":"D001",
    "IDENT":"D13ER671",
    "Supplier ID":"100P_GR",
    "Description 1":"DELRIN_100P_GREY",
    "Description 2":"Nylon 666",
    "PO Qty":2800,
    "Pending Qty":2500,
    "GRN Qty":1500,
    "Delivered":3000,
    "Unit":"KG",
    "QC ReQ'D":"14-03-2020",
    "QC Completion Target":"14-03-2020",
    "INSP date":"14-03-2020",
    "Good Qty":1500
  },
  {
    "PO Number":"2019-20/1086",
    "Item#":"D003",
    "IDENT":"D13ER673",
    "Supplier ID":"100P_NC",
    "Description 1":"DELRIN_100P_No COLOUR",
    "Description 2":"Nylon 666",
    "PO Qty":3650,
    "Pending Qty":2500,
    "GRN Qty":500,
    "Delivered":3500,
    "Unit":"KG",
    "QC ReQ'D":"14-03-2020",
    "QC Completion Target":"14-03-2020",
    "INSP date":"14-03-2020",
    "Good Qty":500
  }];

  displayColumnRecieving = ["PO Number",
  "Item#",
  "IDENT",
  "Supplier ID",
  "Description 1",
  "Description 2",
  "PO Qty",
  "GRN Qty",
  "Delivered",
  "Unit",
  "QC ReQ'D"];

  displayColumnInspection = ["PO Number",
  "Item#",
  "IDENT",
  "Supplier ID",
  "Description 1",
  "Description 2",
  "PO Qty",
  "GRN Qty",
  "Good Qty",
  "Delivered",
  "Unit",
  "INSP date"];

  // To be Merged Later
  inputRecieving = [{
    "Manufacturer Lot#":"1921520152",
    'Lot Quantity':1000,
    'Unit':["KG","g"],
    "selectedUnit":"KG",
    "Off-Spec":0,
    "Shortage":0,
    "Damage":0,
    "Good Qty":1500,
    "addBtn":false,
    "addBtnDesc":""
  },
  {
    "Manufacturer Lot#":"1921520152",
    'Lot Quantity':500,
    'Unit':["KG","g"],
    "selectedUnit":"g",
    "Off-Spec":0,
    "Shortage":0,
    "Damage":0,
    "Good Qty":500,
    "addBtn":true,
    "addBtnDesc":""
  }];
  inputRecievingHeaders = ["Manufacturer Lot#", 'Lot Quantity', 'Unit',"addBtnDesc"];
  inputInspectionHeaders = ["Manufacturer Lot#",'Lot Quantity','Unit',"Good Qty","Off-Spec","Shortage","Damage"];

  constructor( iconRegistry: MatIconRegistry, sanitizer: DomSanitizer ) {
    iconRegistry.addSvgIcon(
      'control_point',
      sanitizer.bypassSecurityTrustResourceUrl('assets/icons/control_point-black-18dp.svg'));
   }

  ngOnInit() {

    this.selectedRecievingDisplay = this.baseDataRecieving[0];
    this.selectedInspectionDisplay = this.baseDataRecieving[0];
    
  }

  addNextItems(){
    
  }

  // Form Control and other to be added Later
  

}
