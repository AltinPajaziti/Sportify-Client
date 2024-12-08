import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ProductsService } from 'src/app/core/Services/products.service';

@Component({
  selector: 'app-stock-dialog',
  templateUrl: './stock-dialog.component.html',
  styleUrls: ['./stock-dialog.component.css']
})
export class StockDialogComponent implements OnInit {

  public formGroup!: FormGroup;




  public visibility : boolean = true
  public products! : any

  constructor(private dialog: MatDialog , private productserivce : ProductsService , private fb :FormBuilder) {
    this.formGroup = this.fb.group({
      product: ['', Validators.required],
      quantity: [0, [Validators.required, Validators.min(1)]] 
    });
  }

  ngOnInit(): void {
    this.productserivce.getProducts().subscribe((resp) =>{
      this.products = resp
    })
  }




  addStock(){


    console.log(this.formGroup.value)

  }

  cancel(){

    this.visibility = false

  }



}
