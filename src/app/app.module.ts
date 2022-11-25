import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule , routingComponents} from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './component/homepage/homepage.component';
import { MaterialModule } from './material/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { TrainsListComponent } from './component/trains-list/trains-list.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserLoginComponent } from './component/user-login/user-login.component';
import { AdminDashboardComponent } from './component/admin-dashboard/admin-dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    routingComponents,
    UserLoginComponent,
    AdminDashboardComponent

    // TrainsListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
