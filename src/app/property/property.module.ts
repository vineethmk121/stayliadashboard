import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { PropertyRoutingModule } from './property-routing.module';
import { ListComponent } from './list/list.component';
import { CreateComponent } from './create/create.component';
import { UpdateComponent } from './update/update.component';
import { ViewComponent } from './view/view.component';
import { GlobalModule } from '../global/global.module';
import { HttpClientJsonpModule, HttpClientModule } from '@angular/common/http';
import { MatGridListModule } from '@angular/material/grid-list';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatDialogModule} from '@angular/material/dialog';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
@NgModule({
  declarations: [
    ListComponent,
    CreateComponent,
    UpdateComponent,
    ViewComponent,
  ],
  imports: [
    CommonModule,
    PropertyRoutingModule,
    GlobalModule,
    ReactiveFormsModule,
    HttpClientJsonpModule,
    MatGridListModule,
    HttpClientModule,
    MatCheckboxModule,
    MatDialogModule,
    Ng2SearchPipeModule,
    FormsModule,
    NgxPaginationModule
  ],
})
export class PropertyModule {}
