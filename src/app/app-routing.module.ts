import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashboardComponent } from './component/admin-dashboard/admin-dashboard.component';
import { HomepageComponent } from './component/homepage/homepage.component';
import { TrainsListComponent } from './component/trains-list/trains-list.component';

const routes: Routes = [

  {path:'', redirectTo:'home',pathMatch:'full'},
  {path:'home' , component:HomepageComponent} ,
  {path:'trains', component:TrainsListComponent},
  {path:'adminDashboard' , component:AdminDashboardComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents=[TrainsListComponent]
