import { Component, OnInit } from '@angular/core';
import { DataserviceService } from '../services/dataservice.service';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { FormControl } from '@angular/forms';
import {DomSanitizer} from '@angular/platform-browser';
import {MatIconRegistry} from '@angular/material/icon';
import {MatTableDataSource} from '@angular/material/table';

export interface vendorDataStruct {
  "GRN#": Number,
  "Created": Date,
  "Vendor": string,
  "VendorID": string,
  "Delivery Date": Date,
  "Approved Date": Date,
  "Flag": string,
  "Created By": string,
  "Approved By": string,
  "Stored Date": Date,
  "PO Number": string[],
  "Arrived Date": Date,
  "Remarks": string
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ]
})


export class DashboardComponent implements OnInit {

  vendorList;
  headerLabel = "Good Receipt Notes (GRN)";

  createdDate = new FormControl(new Date());
  arrivedDate = new FormControl(new Date());
  deliveryDate = new FormControl(new Date());
  poNumber = new FormControl();

  dataSource = this.vendorList;

  columnsToDisplay = ["GRN#", "Created", "Vendor", "Delivery Date", "Approved Date", "Flag", "Created By", "Approved By", "Stored Date"];
  expandedElement: vendorDataStruct | null;

  constructor(private _dataService: DataserviceService, iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    iconRegistry.addSvgIcon(
      'search',
      sanitizer.bypassSecurityTrustResourceUrl('assets/icons/search-black-18dp.svg'));
   }

  ngOnInit() {
    this._dataService.getVendorList().subscribe(res => {
      this.vendorList = new MatTableDataSource(res);
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.vendorList.filter = filterValue.trim().toLowerCase();
  }

}
