import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticatedComponent } from './layout/authenticated/authenticated.component';

const routes: Routes = [
  {
    path:'',
    loadChildren:()=>import('./layout/authenticated/authenticated.module').then(m=>m.AuthenticatedModule),
    component:AuthenticatedComponent
  },
  {path:'',redirectTo:'/dashboard',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
