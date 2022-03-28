import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { ListComponent } from './list/list.component';
import { CreateComponent } from './create/create.component';
import { UpdateComponent } from './update/update.component';
import { ViewComponent } from './view/view.component';
import { GlobalModule } from '../global/global.module';
import { AgentListComponent } from './agent-list/agent-list.component';
import { CreateAgentComponent } from './create-agent/create-agent.component';
import { ChangePasswordComponent } from './change-password/change-password.component';


@NgModule({
  declarations: [
    ListComponent,
    CreateComponent,
    UpdateComponent,
    ViewComponent,
    AgentListComponent,
    CreateAgentComponent,
    ChangePasswordComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    GlobalModule
  
  ]
})
export class UserModule { }
