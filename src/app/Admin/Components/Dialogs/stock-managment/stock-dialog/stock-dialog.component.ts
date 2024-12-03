import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ProductsService } from 'src/app/core/Services/products.service';

@Component({
  selector: 'app-stock-dialog',
  templateUrl: './stock-dialog.component.html',
  styleUrls: ['./stock-dialog.component.css']
})
export class StockDialogComponent implements OnInit {

  public visibility : boolean = false
  public products! : any

  constructor(private dialog: MatDialog , private productserivce : ProductsService) {
    
  }

  ngOnInit(): void {
    this.productserivce.getProducts().subscribe((resp) =>{
      this.products = resp
    })
  }




  addStock(){

  }

  cancel(){

  }



}
