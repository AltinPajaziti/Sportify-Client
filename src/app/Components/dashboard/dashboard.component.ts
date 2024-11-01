import { Component, type OnInit } from '@angular/core';
import type { HttpClient } from '@angular/common/http';
import { ProductsService } from 'src/app/core/Services/products.service';
import { Product } from 'src/app/core/constants/Interfaces/Product'; 
import { Subscription } from 'rxjs';
import { CartService } from 'src/app/core/Services/cart.service';
import  { AuthenticationService } from 'src/app/core/Services/authentication.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit{

  
  products: Product[] = []; 
  latestproduct : Product[] = []
  public totalQuantity = 0;
  public totalFavorites = 0;
  private subscription: Subscription = new Subscription();
  public Login: any = null
  public isloogediin! : boolean

  constructor(public productsService: ProductsService ,private cartService: CartService,private auth : AuthenticationService  ) { }

  ngOnInit(): void {
    if(localStorage.getItem('Role')){
      this.isloogediin = true
    }
    this.auth.loggedinholder.subscribe({
      next : Response =>{
        this.isloogediin = Response
      }
    })
    this.totalFavorites = this.productsService.FavProduct.value
    if(this.productsService.trigger){
      this.productsService.GetCount().subscribe({
        next: Response =>{
          this.totalFavorites = Response
        }
      })
      

    }

   
   let  images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);
    this.LatestProducts();

    const shporta = localStorage.getItem("Shporta");
    

    const storedQuantity = localStorage.getItem('totalQuantity');
    this.totalQuantity =  Number(storedQuantity);
    this.Login = localStorage.getItem('Role')

    this.subscription.add(
      this.cartService.itemCount$.subscribe({
        next: (response: number) => {
          this.totalQuantity = response; 
          console.log('Updated total quantity:', this.totalQuantity);
          
          localStorage.setItem('totalQuantity', String(this.totalQuantity));
        }
      })
    );
  }
  logout(){
    this.auth.Logout();
  }

  


  LatestProducts()  {
    this.productsService.getProducts().subscribe({
      next : (Respounse : any) =>{
        Respounse.forEach((e:any) => {
          console.log(e)
        });
        
        this.latestproduct = Respounse.splice(0, 4)

      }
    })
  }


  

}
