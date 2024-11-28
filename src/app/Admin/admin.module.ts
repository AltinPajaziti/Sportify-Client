import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { PieChartComponent } from './Charts/pie-chart/pie-chart.component';
import { AppMonthlyOrdersChartComponent } from './Charts/app-monthly-orders-chart/app-monthly-orders-chart.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { OrdersComponent } from './orders/orders.component';
import {MatIconModule} from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { UsersComponent } from './users/users.component';
import { MessagesComponent } from './messages/messages.component';
import { CategorysComponent } from './categorys/categorys.component';
import { AdminLeyoutComponent } from './admin-leyout/admin-leyout.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { MatBadgeModule } from '@angular/material/badge';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    PieChartComponent,
    AppMonthlyOrdersChartComponent,
    DashboardComponent,
    OrdersComponent ,
    UsersComponent,
    MessagesComponent,
    CategorysComponent,
    AdminLeyoutComponent
  ],
  imports: [
    
    CommonModule,
    AdminRoutingModule,
    MatIconModule,
    MatTableModule,
    CommonModule,
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
       RouterModule
  ]
})
export class AdminModule { }
