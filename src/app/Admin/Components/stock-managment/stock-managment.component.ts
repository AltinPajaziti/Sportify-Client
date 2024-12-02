import { Component } from '@angular/core';

@Component({
  selector: 'app-stock-managment',
  templateUrl: './stock-managment.component.html',
  styleUrls: ['./stock-managment.component.css']
})
export class StockManagmentComponent {
  dataSource: any[] = []; // Store purchased products data
  displayedColumns: string[] = ['Image', 'ProductName', 'Description', 'Stock'];
}
