import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatrialModule } from './matrial/matrial.module';
import { UserregistrationComponent } from './userregistration/userregistration.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component'
import { FlightbookingComponent } from './flightbooking/flightbooking.component';
import { BookinghistoryComponent } from './bookinghistory/bookinghistory.component';
import { ManagebookingComponent } from './managebooking/managebooking.component';
import { UserComponent } from './user/user.component';
import { AdminComponent } from './admin/admin.component';
import { ManageairlineComponent } from './manageairline/manageairline.component';
import { ManagescheduleComponent } from './manageschedule/manageschedule.component';
import { BlockairlineComponent } from './blockairline/blockairline.component';
import { HttpClientModule } from '@angular/common/http';
import { BlocktheairlineComponent } from './blocktheairline/blocktheairline.component';
import { FlightsearchComponent } from './flightsearch/flightsearch.component';
import { ManagediscountComponent } from './managediscount/managediscount.component';
import { ManageComponent } from './manage/manage.component';
//import { BlockingairlineComponent } from './blockingairline/blockingairline.component';
//import { ScrollDispatcher } from '@angular/cdk/';
@NgModule({
  declarations: [
    AppComponent,
    UserregistrationComponent,
    LoginComponent,
    FlightbookingComponent,
    BookinghistoryComponent,
    ManagebookingComponent,
    UserComponent,
    AdminComponent,
    ManageairlineComponent,
    ManagescheduleComponent,
    BlockairlineComponent,
    BlocktheairlineComponent,
    FlightsearchComponent,
    ManagediscountComponent,
    ManageComponent
    
  ],
  imports: [
    BrowserModule,
   
    AppRoutingModule,
    MatrialModule,
   
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientModule
   
    
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
