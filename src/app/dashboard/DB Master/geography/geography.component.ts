import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';

@Component({
  selector: 'app-geography',
  templateUrl: './geography.component.html',
  styleUrls: ['./geography.component.css']
})
export class GeographyComponent implements AfterViewInit {
  displayedColumns: string[] = ['position', 'countrycode', 'description', 'regioncode','Description','cityname','column3'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  editItem(item: any) {
    // Handle the edit action for the item
    console.log('Edit item:', item);
  }
  
  viewItem(item: any) {
    // Handle the view action for the item
    console.log('View item:', item);
  }
}

export interface PeriodicElement {
  countrycode: string;
  position: number;
  description: string;
  regioncode: string;
  Description: string;
  cityname: string;
  
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, countrycode: '002', description: 'enter the description', regioncode: '4567',Description:'enter the description',cityname:'hyd'},
  {position: 2, countrycode: '892', description: 'enter the description',regioncode: 'H4265',Description:'enter the description',cityname:'hyd'},
  {position: 3, countrycode: '165', description: 'enter the description',regioncode: '123',Description:'enter the description' ,cityname:'hyd'},
  {position: 4, countrycode: '777', description: 'enter the description', regioncode: 'b767',Description:'enter the description',cityname:'hyd'},
  {position: 5, countrycode: '456', description: 'enter the description', regioncode: '54rg',Description:'enter the description',cityname:'hyd'},
  {position: 6, countrycode: '123', description: 'enter the description', regioncode: 'ga6',Description:'enter the description',cityname:'hyd'},
  {position: 7, countrycode: '098', description: 'enter the description', regioncode: 'N',Description:'enter the description',cityname:'hyd'},
  {position: 8, countrycode: '123', description: 'enter the description', regioncode: 'O',Description:'enter the description',cityname:'hyd'},
  {position: 9, countrycode: '886', description: 'enter the description', regioncode: 'F',Description:'enter the description',cityname:'hyd'},
  {position: 10, countrycode: '123', description: 'enter the description', regioncode: 'Ne',Description:'enter the description',cityname:'hyd'},
  {position: 11, countrycode: '867', description: 'enter the description', regioncode: 'Na',Description:'enter the description',cityname:'hyd'},
  {position: 12, countrycode: '662', description: 'enter the description', regioncode: 'Mg',Description:'enter the description',cityname:'hyd'},
  {position: 13, countrycode: '123', description: 'enter the description', regioncode: 'Al',Description:'enter the description',cityname:'hyd'},
  {position: 14, countrycode: '888', description: 'enter the description', regioncode: 'Si',Description:'enter the description',cityname:'hyd'},
  {position: 15, countrycode: '332', description: 'enter the description', regioncode: 'P',Description:'enter the description',cityname:'hyd'},
  {position: 16, countrycode: '1234', description: 'enter the description',regioncode: 'S',Description:'enter the description',cityname:'hyd'},
  {position: 17, countrycode: '543', description: 'enter the description', regioncode: 'Cl',Description:'enter the description',cityname:'hyd'},
  {position: 18, countrycode: '246', description: 'enter the description', regioncode: 'Ar',Description:'enter the description',cityname:'hyd'},
  {position: 19, countrycode: '453', description: 'enter the description', regioncode: 'K',Description:'enter the description',cityname:'hyd'},
  {position: 20, countrycode: '785', description: 'enter the description', regioncode: 'Ca',Description:'enter the description',cityname:'hyd'},
];
