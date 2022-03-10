import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { PropertyRoutingModule } from './property-routing.module';
import { ListComponent } from './list/list.component';
import { CreateComponent } from './create/create.component';
import { UpdateComponent } from './update/update.component';
import { ViewComponent } from './view/view.component';
import { GlobalModule } from '../global/global.module';
import { GoogleMapsModule } from '@angular/google-maps';
import { HttpClientJsonpModule } from '@angular/common/http';
import {MatGridListModule} from '@angular/material/grid-list';
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
    GoogleMapsModule,
    MatGridListModule
  ],
})
export class PropertyModule {}
