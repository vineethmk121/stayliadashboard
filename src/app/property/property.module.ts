import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PropertyRoutingModule } from './property-routing.module';
import { ListComponent } from './list/list.component';
import { CreateComponent } from './create/create.component';
import { UpdateComponent } from './update/update.component';
import { ViewComponent } from './view/view.component';
import { GlobalModule } from '../global/global.module';


@NgModule({
  declarations: [
    ListComponent,
    CreateComponent,
    UpdateComponent,
    ViewComponent
  ],
  imports: [
    CommonModule,
    PropertyRoutingModule,
    GlobalModule
  ]
})
export class PropertyModule { }
