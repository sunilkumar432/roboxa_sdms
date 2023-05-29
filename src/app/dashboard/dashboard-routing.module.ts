import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { CrLicenseTypeComponent } from './DB Master/cr-license-type/cr-license-type.component';
import { CrRolesComponent } from './DB Master/cr-roles/cr-roles.component';
import { DocumentCategoryComponent } from './DB Master/document-category/document-category.component';
import { EquipmentTypeComponent } from './DB Master/equipment-type/equipment-type.component';
import { GeographyComponent } from './DB Master/geography/geography.component';
import { PopulationGrpComponent } from './DB Master/population-grp/population-grp.component';
import { ResearchProductsComponent } from './DB Master/research-products/research-products.component';
import { SalesEmployeeComponent } from './DB Master/sales-employee/sales-employee.component';
import { ServiceCategoryComponent } from './DB Master/service-category/service-category.component';
import { SiteCertificationsComponent } from './DB Master/site-certifications/site-certifications.component';
import { SiteServicesComponent } from './DB Master/site-services/site-services.component';
import { SpecialitiesComponent } from './DB Master/specialities/specialities.component';
import { StudyPhasesComponent } from './DB Master/study-phases/study-phases.component';
import { StudyTypesComponent } from './DB Master/study-types/study-types.component';
import { SiteComponent } from './Master Data/site/site.component';

const routes: Routes = [
  
  {path:'dashboard',component:DashboardComponent,
  children: [
    { path: 'geography', component: GeographyComponent },
    { path: 'sales-employee', component: SalesEmployeeComponent },
    { path: 'service-category', component: ServiceCategoryComponent },
    { path: 'document-category', component: DocumentCategoryComponent },
    { path: 'specialities', component: SpecialitiesComponent },
    { path: 'population-grp', component: PopulationGrpComponent },
    { path: 'site-services', component: SiteServicesComponent },
    { path: 'site-certifications', component: SiteCertificationsComponent },
    { path: 'equipment-type', component: EquipmentTypeComponent },
    { path: 'study-phases', component: StudyPhasesComponent },
    { path: 'study-types', component: StudyTypesComponent },
    { path: 'research-products', component: ResearchProductsComponent },
    { path: 'cr-roles', component: CrRolesComponent },
    { path: 'cr-license-type', component: CrLicenseTypeComponent },
    {path:'sites',component:SiteComponent}
  ],

},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
