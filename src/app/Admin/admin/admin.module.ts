import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { PieChartComponent } from './pie-chart/pie-chart.component';
import { AppMonthlyOrdersChartComponent } from './app-monthly-orders-chart/app-monthly-orders-chart.component';
import { DashboardComponent } from '../dashboard/dashboard.component';


@NgModule({
  declarations: [
    PieChartComponent,
    AppMonthlyOrdersChartComponent,
    DashboardComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
