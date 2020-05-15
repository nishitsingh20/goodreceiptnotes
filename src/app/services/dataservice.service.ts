import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataserviceService {
  private _vendorListUrl: string = "./assets/data/vendorList.json";

  constructor(private http: HttpClient) { }

  getVendorList(){ //Replace with API calls
    return this.http.get<any[]>(this._vendorListUrl);
  }
}
