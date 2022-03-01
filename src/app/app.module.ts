import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AuthenticatedComponent } from './layout/authenticated/authenticated.component';
import { UnauthenticatedComponent } from './layout/unauthenticated/unauthenticated.component';
import { GlobalModule } from './global/global.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    AuthenticatedComponent,
    UnauthenticatedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GlobalModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
