import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/app/auth.guard';
import { AgentListComponent } from 'src/app/user/agent-list/agent-list.component';
import { AuthenticatedComponent } from './authenticated.component';

const routes: Routes = [
  {
    path:'dashboard',
    loadChildren:()=>import('../../dashboard/dashboard.module').then(m=>m.DashboardModule),
    canActivate:[AuthGuard]
  },
  {
    path:'user',
    loadChildren:()=>import('../../user/user.module').then(m=>m.UserModule),
    canActivate:[AuthGuard]
  },
  {
    path:'agent',
    component:AgentListComponent,
    canActivate:[AuthGuard]
  },
  {
    path:'property',
    loadChildren:()=>import('../../property/property.module').then(m=>m.PropertyModule),
    canActivate:[AuthGuard]
  },
  {
    path:'property-type',
    loadChildren:()=>import('../../property-type/property-type.module').then(m=>m.PropertyTypeModule),
    canActivate:[AuthGuard]
  },
  {
    path:'property-category',
    loadChildren:()=>import('../../property-categories/property-category.module').then(m=>m.PropertyCategoryModule),
    canActivate:[AuthGuard]
  },
 
  {
    path:'additional-information',
    loadChildren:()=>import('../../additional-information/additional-information.module').then(m=>m.AdditionalInformationModule),
    canActivate:[AuthGuard]
  },
  {
    path:'amenities',
    loadChildren:()=>import('../../amenities/amenities.module').then(m=>m.AmenitiesModule),
    canActivate:[AuthGuard]
  },
  {
    path:'bedroom-type',
    loadChildren:()=>import('../../bedroom-type/bedroom-type.module').then(m=>m.BedroomTypeModule),
    canActivate:[AuthGuard]
  },
  {
    path:'furnishing-type',
    loadChildren:()=>import('../../furnishing-type/furnishing-type.module').then(m=>m.FurnishingTypeModule),
    canActivate:[AuthGuard]
  },
  {
    path:'nationality',
    loadChildren:()=>import('../../nationality/nationality.module').then(m=>m.NationalityModule),
    canActivate:[AuthGuard]
  },
  {
    path:'overview',
    loadChildren:()=>import('../../overview/overview.module').then(m=>m.OverviewModule),
    canActivate:[AuthGuard]
  },
  {
    path:'specality',
    loadChildren:()=>import('../../specality/specality.module').then(m=>m.SpecalityModule),
    canActivate:[AuthGuard]
  },
  {
    path:'tag',
    loadChildren:()=>import('../../tag/tag.module').then(m=>m.TagModule),
    canActivate:[AuthGuard]
  },
  {
    path:'filter',
    loadChildren:()=>import('../../filter/filter.module').then(m=>m.FilterModule),
    canActivate:[AuthGuard]
  },
  {
    path:'faq',
    loadChildren:()=>import('../../faq/faq.module').then(m=>m.FAQModule),
    canActivate:[AuthGuard]
  },
  {path:'',redirectTo:'/dashboard',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthenticatedRoutingModule { }
