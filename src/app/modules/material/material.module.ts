import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {MatInputModule} from "@angular/material/input";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatNativeDateModule} from "@angular/material/core";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatListModule, MatNavList} from "@angular/material/list";
import {MatTabsModule} from "@angular/material/tabs";
import { MatCardModule} from "@angular/material/card";
import { MatSelectModule} from "@angular/material/select";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {MatDialogModule} from "@angular/material/dialog";
import { MatTableModule} from "@angular/material/table";
import {MatSort, MatSortModule} from "@angular/material/sort";
import {MatPaginatorModule} from "@angular/material/paginator";


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
  ],
  exports: [MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatDatepickerModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCheckboxModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatTabsModule,
    MatCardModule,
    MatSelectModule,
    MatProgressSpinnerModule,
    MatDialogModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule
  ]
})
export class MaterialModule {
}
