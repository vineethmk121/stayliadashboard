import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FurnishingTypeRoutingModule } from './furnishing-type-routing.module';
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
    FurnishingTypeRoutingModule,
    GlobalModule
  ]
})
export class FurnishingTypeModule { }
