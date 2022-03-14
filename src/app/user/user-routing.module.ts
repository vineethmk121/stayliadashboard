import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgentListComponent } from './agent-list/agent-list.component';
import { CreateAgentComponent } from './create-agent/create-agent.component';
import { CreateComponent } from './create/create.component';
import { ListComponent } from './list/list.component';
import { UpdateComponent } from './update/update.component';
import { ViewComponent } from './view/view.component';

const routes: Routes = [
  {path:'',component:ListComponent,pathMatch:'full'},
  {path:'create',component:CreateComponent},
  {path:'update',component:UpdateComponent},
  {path:'view/:id',component:ViewComponent},
  {path:'create-agent',component:CreateAgentComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
