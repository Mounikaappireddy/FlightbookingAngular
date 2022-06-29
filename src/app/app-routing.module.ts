import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FlightbookingComponent } from './flightbooking/flightbooking.component';
import { BookinghistoryComponent } from './bookinghistory/bookinghistory.component';
//import { SearchflightComponent } from './managebooking/searchflight.component';
import { UserregistrationComponent } from './userregistration/userregistration.component';
import { LoginComponent } from './login/login.component';
import { ManagebookingComponent } from './managebooking/managebooking.component';
import { UserComponent } from './user/user.component';
import { AdminComponent } from './admin/admin.component';
import { ManageairlineComponent } from './manageairline/manageairline.component';
import { ManagescheduleComponent } from './manageschedule/manageschedule.component';
import { BlockairlineComponent } from './blockairline/blockairline.component';
import { FlightsearchComponent } from './flightsearch/flightsearch.component';
import { ManagediscountComponent } from './managediscount/managediscount.component';
import { BlocktheairlineComponent } from './blocktheairline/blocktheairline.component';
import { ManageComponent } from './manage/manage.component';
const routes: Routes = [
  {
    path:'',
    component:LoginComponent
  },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'user',
    component:UserComponent
  },
  {
    path:'userregistration',
    component:UserregistrationComponent
  },
  {
    path:'bookinghistory',
    component:BookinghistoryComponent
  },
  {
    path:'flightbooking',
    component:FlightbookingComponent
  },
  {
    path:'managebooking',
    component:ManagebookingComponent
  },
  {
    path:'admin',
    component:AdminComponent
  },
  {
    path:'manageairline',
    component:ManageairlineComponent
  },
  {
    path:'manageschedule',
    component:ManagescheduleComponent
  },
  {
    path:'blocktheairline',
    component:BlocktheairlineComponent
  },
  {
    path:'flightsearch',
    component:FlightsearchComponent
  },
  {
    path:'managediscount',
    component:ManagediscountComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
