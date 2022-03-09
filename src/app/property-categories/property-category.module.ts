import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { ListComponent } from './list/list.component';
import { CreateComponent } from './create/create.component';
import { UpdateComponent } from './update/update.component';
import { GlobalModule } from '../global/global.module';
import { PropertyCategoryRoutingModule } from './property-category-routing.module';


@NgModule({
  declarations: [
    ListComponent,
    CreateComponent,
    UpdateComponent
  ],
  imports: [
    CommonModule,
    PropertyCategoryRoutingModule,
    GlobalModule
  ]
})
export class PropertyCategoryModule { }
