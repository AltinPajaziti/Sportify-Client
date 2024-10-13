import { Component, type OnInit } from '@angular/core';
import  { Product } from 'src/app/core/constants/Interfaces/Product';
import { AuthenticationService } from 'src/app/core/Services/authentication.service';
import { CartService } from 'src/app/core/Services/cart.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-favorite-products',
  templateUrl: './favorite-products.component.html',
  styleUrls: ['./favorite-products.component.css']
})
export class FavoriteProductsComponent implements OnInit{
  displayedColumns: string[] = ['Image', 'ProductName','Description', 'Quantity' , 'Price' , 'Buybutton' , 'DeleteButton'];
  public dataSource! : Product[];
  ngOnInit(): void {
    
  }

  constructor(private Cart : CartService , private Auth : AuthenticationService) {
    this.GetAllProducts()
  }

  GetAllProducts(){
    this.Cart.GetAllProducts().subscribe({
      next : Response =>{
        
        console.log("THe data" , this.dataSource)
      }

      
    })
  }

  DeleteItem(id: number) {
    console.log(id);
  
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        const shporta = localStorage.getItem("Shporta");
        const basket: Product[] = JSON.parse(shporta || "[]");
  
        const updatedBasket = basket.filter((item: Product) => item.id !== id);
  
        localStorage.setItem("Shporta", JSON.stringify(updatedBasket));

        Swal.fire({
          title: "Deleted!",
          text: "Your item has been deleted.",
          icon: "success"
        });
        this.dataSource = updatedBasket;
        this.Cart.getItems()
        
      }
    });
  }
  

  BuyNow(id:number){


    const Token = localStorage.getItem("Role");
    if(Token){
      let product = this.Cart.GetAllProducts().subscribe({
        next : Response =>{
          const product = Response[0]; 
          this.Cart.BuyProduct(product  ).subscribe({
            next : Response=>{
              console.log(Response)
            }
          }
          
          )
        }
      })

      
      // this.Cart.addToBasket()
    Swal.fire({
      position: "top",
      icon: "success",
      title: "Successfully Purchased",
      showConfirmButton: false,
      timer: 1500
    });
  }

  else{
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Something went wrong!",
      footer: '<a href="/login">You need to Login First</a>'
    });
    

}


  }
}
