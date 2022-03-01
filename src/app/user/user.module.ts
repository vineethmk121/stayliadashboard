import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { ListComponent } from './list/list.component';
import { CreateComponent } from './create/create.component';
import { UpdateComponent } from './update/update.component';
import { ViewComponent } from './view/view.component';
import { GlobalModule } from '../global/global.module';
import { AgentListComponent } from './agent-list/agent-list.component';


@NgModule({
  declarations: [
    ListComponent,
    CreateComponent,
    UpdateComponent,
    ViewComponent,
    AgentListComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    GlobalModule
  ]
})
export class UserModule { }
