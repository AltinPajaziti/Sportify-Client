import { Component } from '@angular/core';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent {
  dataSource : any

  displayedColumns: string[] = ['PersonNAme', 'ProductName','Description', 'Quantity' , 'Price' , 'Buybutton' , 'DeleteButton'];

  BuyNow(element : any)
  {

  }

  Delete(element : any){

  }

}
