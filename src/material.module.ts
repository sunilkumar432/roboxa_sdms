import { NgModule } from "@angular/core";
import{MatInputModule} from "@angular/material/input";
import{MatCardModule} from "@angular/material/card";
import{MatRadioModule} from "@angular/material/radio";
import{MatSelectModule} from "@angular/material/select";
import{MatCheckboxModule} from "@angular/material/checkbox";
import{MatTableModule} from "@angular/material/table";
import{MatPaginatorModule} from "@angular/material/paginator";
import{MatSortModule} from "@angular/material/sort";
import{MatDialogModule} from "@angular/material/dialog";
import{MatFormFieldModule} from "@angular/material/form-field";
import { MatButtonModule } from "@angular/material/button";
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatExpansionModule } from '@angular/material/expansion';






@NgModule({
    exports:[
        MatInputModule,
        MatCardModule,
        MatRadioModule,
        MatSelectModule,
        MatCheckboxModule,
        MatTableModule,
        MatPaginatorModule,
        MatSortModule,
        MatDialogModule,
        MatFormFieldModule,
        MatButtonModule,
        MatSidenavModule,
        MatIconModule,
        MatToolbarModule,
        MatExpansionModule,
        
        
    ]
})
export class MaterialModule{}