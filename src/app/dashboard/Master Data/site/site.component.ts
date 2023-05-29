import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import { SiteAddEditComponent } from './site-add-edit/site-add-edit.component';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
@Component({
  selector: 'app-site',
  templateUrl: './site.component.html',
  styleUrls: ['./site.component.css']
})
export class SiteComponent implements AfterViewInit {
  displayedColumns: string[] = ['position', 'sitecode', 'sitename', 'legalsitename','institutionname','contactperson','referencedby','column3'];
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
  constructor(private dialog: MatDialog) {}

  openModalForm(): void {
    const dialogRef = this.dialog.open(SiteAddEditComponent, {
      width: '800px',
      disableClose: true,
      
    });
  }

}

export interface PeriodicElement {
  sitecode: string;
  position: number;
  sitename: string;
  legalsitename: string;
  institutionname: string;
  contactperson: string;
  referencedby:string
  
}
const ELEMENT_DATA: PeriodicElement[] = [
  {
    sitecode: '001',
    position: 1,
    sitename: 'Site 1',
    legalsitename: 'Legal Site 1',
    institutionname: 'Institution 1',
    contactperson: 'John Doe',
    referencedby: 'Reference 1'
  },
  {
    sitecode: '002',
    position: 2,
    sitename: 'Site 2',
    legalsitename: 'Legal Site 2',
    institutionname: 'Institution 2',
    contactperson: 'Jane Smith',
    referencedby: 'Reference 2'
  },
  {
    sitecode: '003',
    position: 3,
    sitename: 'Site 3',
    legalsitename: 'Legal Site 3',
    institutionname: 'Institution 3',
    contactperson: 'Mark Johnson',
    referencedby: 'Reference 3'
  },
  {
    sitecode: '004',
    position: 4,
    sitename: 'Site 4',
    legalsitename: 'Legal Site 4',
    institutionname: 'Institution 4',
    contactperson: 'Emily Davis',
    referencedby: 'Reference 4'
  },
  {
    sitecode: '005',
    position: 5,
    sitename: 'Site 5',
    legalsitename: 'Legal Site 5',
    institutionname: 'Institution 5',
    contactperson: 'Michael Wilson',
    referencedby: 'Reference 5'
  },
  {
    sitecode: '006',
    position: 6,
    sitename: 'Site 6',
    legalsitename: 'Legal Site 6',
    institutionname: 'Institution 6',
    contactperson: 'Sophia Brown',
    referencedby: 'Reference 6'
  },
  {
    sitecode: '007',
    position: 7,
    sitename: 'Site 7',
    legalsitename: 'Legal Site 7',
    institutionname: 'Institution 7',
    contactperson: 'William Lee',
    referencedby: 'Reference 7'
  },
  {
    sitecode: '008',
    position: 8,
    sitename: 'Site 8',
    legalsitename: 'Legal Site 8',
    institutionname: 'Institution 8',
    contactperson: 'Olivia Wilson',
    referencedby: 'Reference 8'
  },
  {
    sitecode: '009',
    position: 9,
    sitename: 'Site 9',
    legalsitename: 'Legal Site 9',
    institutionname: 'Institution 9',
    contactperson: 'James Thompson',
    referencedby: 'Reference 9'
  },
  {
    sitecode: '010',
    position: 10,
    sitename: 'Site 10',
    legalsitename: 'Legal Site 10',
    institutionname: 'Institution 10',
    contactperson: 'Emma Anderson',
    referencedby: 'Reference 10'
  }
];
