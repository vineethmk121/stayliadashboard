import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SpecalityRoutingModule } from './specality-routing.module';
import { ListComponent } from './list/list.component';
import { CreateComponent } from './create/create.component';
import { UpdateComponent } from './update/update.component';
import { GlobalModule } from '../global/global.module';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  declarations: [
    ListComponent,
    CreateComponent,
    UpdateComponent
  ],
  imports: [
    CommonModule,
    SpecalityRoutingModule,
    GlobalModule,
    NgxPaginationModule
  ]
})
export class SpecalityModule { }
