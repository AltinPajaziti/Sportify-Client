import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ProductsService } from 'src/app/core/Services/products.service';
import { StockMAnagmentSErviceService } from 'src/app/core/Services/stock-managment-service.service';
import { StockDialogComponent } from '../Dialogs/stock-managment/stock-dialog/stock-dialog.component';
import { MatDialog } from '@angular/material/dialog';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

@Component({
  selector: 'app-stock-managment',
  templateUrl: './stock-managment.component.html',
  styleUrls: ['./stock-managment.component.css']
})
export class StockManagmentComponent implements AfterViewInit , OnInit {
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol' , 'Quantity' , 'OutofStock'];



  constructor(private stockSErvice : StockMAnagmentSErviceService ,    private dialog: MatDialog
  ) {

    
  }

  ngOnInit(): void {
    this.stockSErvice.GetStockManagment().subscribe(
      (respounse)=>{

        this.dataSource = respounse
        console.log("the respounse" , respounse)
      }
    )
  }

  openPopup(): void {
    // Open the dialog
    const dialogRef = this.dialog.open(StockDialogComponent, {
      width: '500px'
    });

    // Handle the dialog result
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        console.log('Dialog result:', result);
        // Optionally refresh or update the stock data here
      }
    });
  }


  dataSource = new MatTableDataSource<PeriodicElement>();

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
}
