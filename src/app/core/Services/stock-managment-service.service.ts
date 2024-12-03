import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/envirement';

@Injectable({
  providedIn: 'root'
})
export class StockMAnagmentSErviceService {
  private api = environment.api_Url + 'StockManagment/'
  constructor(private http : HttpClient) { }


  GetStockManagment(){
    return this.http.get<any>(this.api + 'Get-all-products-with-stock')
  }

}
