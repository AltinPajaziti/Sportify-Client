import type { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit , inject} from '@angular/core';
import { ProductsService } from 'src/app/core/Services/products.service';
import { Product } from 'src/app/core/constants/Interfaces/Product'; // Ensure correct import path
import { environment } from 'src/environments/envirement';
import { MatDialog } from '@angular/material/dialog';
import { ProductDialogComponent } from '../product-dialog/product-dialog.component';
import { CartService } from 'src/app/core/Services/cart.service';
import Swal from 'sweetalert2';

export interface DialogData {
  name: string, 
        description :  string, 
        price :  string, 
        photo :  string, 
}
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent   {
  @Input() Produkti!: Product[];  // This will hold the input value

  dialog = inject(MatDialog);

  constructor(private cartservice : CartService) {

    
  }



  openDialog(id : any) {
    console.log(id)
    const product = this.Produkti.filter(p => p.id == id )
  
    this.dialog.open(ProductDialogComponent, {
      data: {
        id : product[0].id,
        name: product[0].name, 
        description : product[0].description,
        price : product[0].price,
        photo : product[0].photo
      },
      
      
    });


    

  }




  AddToCart(data:any){
    console.log(data)
    console.log("buton clicked")
    const product = {
      id: data.id,
      name: data.name,
      description: data.description,
      price: data.price,
      photo: data.photo,
      quantity: 1
    };

    this.cartservice.addToBasket(product ,1)

    Swal.fire({
      position: "top",
      icon: "success",
      title: "Product Added to basket Successfully",
      showConfirmButton: false,
      timer: 1500
    });
  }






}
