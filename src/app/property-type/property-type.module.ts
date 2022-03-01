import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PropertyTypeRoutingModule } from './property-type-routing.module';
import { ListComponent } from './list/list.component';
import { CreateComponent } from './create/create.component';
import { UpdateComponent } from './update/update.component';
import { GlobalModule } from '../global/global.module';


@NgModule({
  declarations: [
    ListComponent,
    CreateComponent,
    UpdateComponent
  ],
  imports: [
    CommonModule,
    PropertyTypeRoutingModule,
    GlobalModule
  ]
})
export class PropertyTypeModule { }
