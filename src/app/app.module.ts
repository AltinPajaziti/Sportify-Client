import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatSelectModule} from '@angular/material/select';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { ProductComponent } from './Components/product/product.component';
import { ProductsService } from './core/Services/products.service';
import {MatCardModule} from '@angular/material/card';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SliderComponent } from './Components/slider/slider.component';
import {MatMenuModule} from '@angular/material/menu';
import { ProductsComponent } from './Components/products/products.component';
import {MatGridListModule} from '@angular/material/grid-list';
import { MainLayoutComponentComponent } from './Layout/main-layout-component/main-layout-component.component';
import {MatDialogModule} from '@angular/material/dialog';
import {MatTableModule} from '@angular/material/table';
import { MatBadgeModule } from '@angular/material/badge';

import { ProductDialogComponent } from './Components/product-dialog/product-dialog.component';
import { CartComponent } from './Components/cart/cart.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { FavoriteProductsComponent } from './Components/favorite-products/favorite-products.component';
import { PurchasedProductsComponent } from './Components/purchased-products/purchased-products.component';

import {FormsModule} from '@angular/forms';
import { AuthInterceptorService } from './core/Services/auth.interceptor.service';
import { PieChartComponent } from './Components/pie-chart/pie-chart.component';
import { AppMonthlyOrdersChartComponent } from './Components/app-monthly-orders-chart/app-monthly-orders-chart.component';
import { UsersComponent } from './Admin/users/users.component';
import { CategorysComponent } from './Admin/categorys/categorys.component';
import { OrdersComponent } from './Admin/orders/orders.component';
import { MessagesComponent } from './Admin/messages/messages.component';



@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ProductComponent,
    SliderComponent,
    ProductsComponent,
    MainLayoutComponentComponent,
    ProductDialogComponent,
    CartComponent,
    FavoriteProductsComponent,
    PurchasedProductsComponent,
    // PieChartComponent,
    // AppMonthlyOrdersChartComponent,
    UsersComponent,
    CategorysComponent,
    OrdersComponent,
    MessagesComponent,
    
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatToolbarModule,
     MatButtonModule,
      MatIconModule,
      MatListModule,
      MatSidenavModule,
      MatCardModule,
      NgbModule,
      MatMenuModule,
      MatGridListModule,
      MatDialogModule,
       MatButtonModule,
       MatTableModule,
       MatBadgeModule,
       MatFormFieldModule,
       MatInputModule,
       MatSelectModule,
       ReactiveFormsModule,
      
       
      
      
      
      
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      multi: true  
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
