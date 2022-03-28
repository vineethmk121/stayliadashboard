import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { AuthenticatedComponent } from './layout/authenticated/authenticated.component';
import { UnauthenticatedComponent } from './layout/unauthenticated/unauthenticated.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./layout/authenticated/authenticated.module').then(
        (m) => m.AuthenticatedModule
      ),
    component: AuthenticatedComponent,
    // canActivate:[AuthGuard]
  },
  {
    path: '',
    loadChildren: () =>
      import('./layout/unauthenticated/unauthenticated.module').then(
        (m) => m.UnauthenticatedModule
      ),
    component: UnauthenticatedComponent,
  },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
