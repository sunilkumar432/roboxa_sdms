import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from "@angular/flex-layout";
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { MaterialModule } from 'src/material.module';
import { GeographyComponent } from './DB Master/geography/geography.component';
import { SalesEmployeeComponent } from './DB Master/sales-employee/sales-employee.component';
import { SiteRecognitionComponent } from './DB Master/site-recognition/site-recognition.component';
import { ServiceCategoryComponent } from './DB Master/service-category/service-category.component';
import { DocumentCategoryComponent } from './DB Master/document-category/document-category.component';
import { SpecialitiesComponent } from './DB Master/specialities/specialities.component';
import { PopulationGrpComponent } from './DB Master/population-grp/population-grp.component';
import { SiteServicesComponent } from './DB Master/site-services/site-services.component';
import { SiteCertificationsComponent } from './DB Master/site-certifications/site-certifications.component';
import { EquipmentTypeComponent } from './DB Master/equipment-type/equipment-type.component';
import { StudyTypesComponent } from './DB Master/study-types/study-types.component';
import { StudyPhasesComponent } from './DB Master/study-phases/study-phases.component';
import { ResearchProductsComponent } from './DB Master/research-products/research-products.component';
import { CrRolesComponent } from './DB Master/cr-roles/cr-roles.component';
import { CrLicenseTypeComponent } from './DB Master/cr-license-type/cr-license-type.component';
import { CrStatusComponent } from './DB Master/cr-status/cr-status.component';
import { SiteComponent } from './Master Data/site/site.component';
import { SiteAddEditComponent } from './Master Data/site/site-add-edit/site-add-edit.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    DashboardComponent,
    GeographyComponent,
    SalesEmployeeComponent,
    SiteRecognitionComponent,
    ServiceCategoryComponent,
    DocumentCategoryComponent,
    SpecialitiesComponent,
    PopulationGrpComponent,
    SiteServicesComponent,
    SiteCertificationsComponent,
    EquipmentTypeComponent,
    StudyTypesComponent,
    StudyPhasesComponent,
    ResearchProductsComponent,
    CrRolesComponent,
    CrLicenseTypeComponent,
    CrStatusComponent,
    SiteComponent,
    SiteAddEditComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
    FlexLayoutModule,
  ]
})
export class DashboardModule { }
