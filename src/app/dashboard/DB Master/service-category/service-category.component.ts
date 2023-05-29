import { Component } from '@angular/core';

export interface ServiceCategory {
  sno: number;
  serviceCategory: string;
  description: string;
}

@Component({
  selector: 'app-service-category',
  templateUrl: './service-category.component.html',
  styleUrls: ['./service-category.component.css']
})
export class ServiceCategoryComponent {
  displayedColumns: string[] = ['sno', 'serviceCategory', 'description', 'actions'];
  dataSource: ServiceCategory[] = [
    { sno: 1, serviceCategory: 'S1', description: 'Patient Transport Services' },
    { sno: 2, serviceCategory: 'S2', description: 'Diagnostic' },
    { sno: 3, serviceCategory: 'S3', description: 'Imaging' }
  ];
}
