import { Component } from '@angular/core';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent {

  public dataSource : any;


  constructor() {
    this.dataSource = [
      {
        id: 1,
        photo: 'https://via.placeholder.com/150', // Dummy image URL
        name: 'Product 1',
        description: 'This is a description of Product 1.',
        quantity: 5,
        price: 100.0,
      },
      {
        id: 2,
        photo: 'https://via.placeholder.com/150',
        name: 'Product 2',
        description: 'This is a description of Product 2.',
        quantity: 2,
        price: 50.0,
      },
      {
        id: 3,
        photo: 'https://via.placeholder.com/150',
        name: 'Product 3',
        description: 'This is a description of Product 3.',
        quantity: 1,
        price: 150.0,
      },
    ];
  }




  displayedColumns: string[] = ['PersonNAme', 'ProductName','Description', 'Quantity' , 'Price' , 'Buybutton' , 'DeleteButton'];

  BuyNow(element : any)
  {

  }

  Delete(element : any){

  }

}
