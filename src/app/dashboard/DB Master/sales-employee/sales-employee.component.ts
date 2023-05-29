import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';

@Component({
  selector: 'app-sales-employee',
  templateUrl: './sales-employee.component.html',
  styleUrls: ['./sales-employee.component.css']
})
export class SalesEmployeeComponent implements AfterViewInit {
  displayedColumns: string[] = ['position', 'empcode', 'employeename', 'role','startdate','enddate','column3'];
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
  empcode: string;
  position: number;
  employeename: string;
  startdate: string;
  enddate: string;
  role: string;
  
}

const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, empcode: '2435', employeename: 'John Doe', startdate: '2002-09-15', enddate: '2004-05-20', role: 'Manager' },
  { position: 2, empcode: '7689', employeename: 'Jane Smith', startdate: '2005-12-10', enddate: '2007-07-02', role: 'Developer' },
  { position: 3, empcode: '4521', employeename: 'Mike Johnson', startdate: '2010-03-28', enddate: '2012-11-15', role: 'Analyst' },
  { position: 4, empcode: '1987', employeename: 'Emily Davis', startdate: '2013-06-17', enddate: '2015-01-30', role: 'Designer' },
  { position: 5, empcode: '6243', employeename: 'David Wilson', startdate: '2016-09-05', enddate: '2018-04-11', role: 'Tester' },
  { position: 6, empcode: '5678', employeename: 'Sarah Thompson', startdate: '2019-11-24', enddate: '2021-06-08', role: 'Administrator' },
  { position: 7, empcode: '3210', employeename: 'Michael Brown', startdate: '2022-02-18', enddate: '2023-09-22', role: 'Engineer' },
  { position: 8, empcode: '8765', employeename: 'Jessica Taylor', startdate: '2024-05-09', enddate: '2026-01-03', role: 'Supervisor' },
  { position: 9, empcode: '1098', employeename: 'Christopher Harris', startdate: '2027-08-01', enddate: '2029-03-18', role: 'Consultant' },
  { position: 10, empcode: '2345', employeename: 'Amanda Martinez', startdate: '2030-10-28', enddate: '2032-06-04', role: 'Coordinator' },
];


