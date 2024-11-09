import  { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import type { Observable } from 'rxjs';
import { environment } from 'src/environments/envirement';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  private api = environment.api_Url + 'Category'
  constructor(private http : HttpClient) { }


  GetCategoryAll():Observable<any>{

    return this.http.get<any>(this.api)
  }







}
