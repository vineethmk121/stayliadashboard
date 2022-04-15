import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdditionalInformationRoutingModule } from './additional-information-routing.module';
import { ListComponent } from './list/list.component';
import { CreateComponent } from './create/create.component';
import { UpdateComponent } from './update/update.component';
import { GlobalModule } from '../global/global.module';
import { NgxPaginationModule } from 'ngx-pagination';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    ListComponent,
    CreateComponent,
    UpdateComponent
  ],
  imports: [
    CommonModule,
    AdditionalInformationRoutingModule,
    GlobalModule,
    NgxPaginationModule,
    Ng2SearchPipeModule,
    FormsModule
  ]
})
export class AdditionalInformationModule { }
