import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgentListComponent } from 'src/app/user/agent-list/agent-list.component';
import { AuthenticatedComponent } from './authenticated.component';

const routes: Routes = [
  {
    path:'dashboard',
    loadChildren:()=>import('../../dashboard/dashboard.module').then(m=>m.DashboardModule)
  },
  {
    path:'user',
    loadChildren:()=>import('../../user/user.module').then(m=>m.UserModule)
  },
  {
    path:'agent',
    component:AgentListComponent
  },
  {
    path:'property',
    loadChildren:()=>import('../../property/property.module').then(m=>m.PropertyModule)
  },
  {
    path:'property-type',
    loadChildren:()=>import('../../property-type/property-type.module').then(m=>m.PropertyTypeModule)
  },
  {
    path:'property-category',
    loadChildren:()=>import('../../property-categories/property-category.module').then(m=>m.PropertyCategoryModule)
  },
 
  {
    path:'additional-information',
    loadChildren:()=>import('../../additional-information/additional-information.module').then(m=>m.AdditionalInformationModule)
  },
  {
    path:'amenities',
    loadChildren:()=>import('../../amenities/amenities.module').then(m=>m.AmenitiesModule)
  },
  {
    path:'bedroom-type',
    loadChildren:()=>import('../../bedroom-type/bedroom-type.module').then(m=>m.BedroomTypeModule)
  },
  {
    path:'furnishing-type',
    loadChildren:()=>import('../../furnishing-type/furnishing-type.module').then(m=>m.FurnishingTypeModule)
  },
  {
    path:'nationality',
    loadChildren:()=>import('../../nationality/nationality.module').then(m=>m.NationalityModule)
  },
  {
    path:'overview',
    loadChildren:()=>import('../../overview/overview.module').then(m=>m.OverviewModule)
  },
  {
    path:'specality',
    loadChildren:()=>import('../../specality/specality.module').then(m=>m.SpecalityModule)
  },
  {
    path:'tag',
    loadChildren:()=>import('../../tag/tag.module').then(m=>m.TagModule)
  },
  {
    path:'filter',
    loadChildren:()=>import('../../filter/filter.module').then(m=>m.FilterModule)
  },
  {
    path:'faq',
    loadChildren:()=>import('../../faq/faq.module').then(m=>m.FAQModule)
  },
  {path:'',redirectTo:'/dashboard',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthenticatedRoutingModule { }
