import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from "@angular/router"

import { AppComponent } from './app.component';
import { SidebarComponent } from './dashboard/sidebar/sidebar.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AdvancementComponent } from './dashboard/advancement/advancement.component';
import { HomeComponent } from './home/home.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSortModule, MatTableModule } from "@angular/material";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { DescriptionComponent } from './dashboard/description/description.component';
import { StaffingComponent } from './dashboard/staffing/staffing.component';
import { DocumentComponent } from './dashboard/document/document.component';
import { ContactComponent } from './dashboard/contact/contact.component';
import { ToDoListComponent } from './dashboard/to-do-list/to-do-list.component';
import { ApointmentComponent } from './dashboard/apointment/apointment.component';
import { DeliveryManagementComponent } from './dashboard/delivery-management/delivery-management.component';
import { MeetingManagementComponent } from './dashboard/meeting-management/meeting-management.component';
import { PlanProjectComponent } from './dashboard/plan-project/plan-project.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FlowComponent } from './flow/flow.component';
import { ReportComponent } from './report/report.component';
import { AppRoutes } from './app.routing';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    NavbarComponent,
    AdvancementComponent,
    HomeComponent,
    DescriptionComponent,
    StaffingComponent,
    DocumentComponent,
    ContactComponent,
    ToDoListComponent,
    ApointmentComponent,
    DeliveryManagementComponent,
    MeetingManagementComponent,
    PlanProjectComponent,
    DashboardComponent,
    FlowComponent,
    ReportComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    RouterModule.forRoot(AppRoutes),
    BrowserAnimationsModule,
    MatSlideToggleModule,
    MatSortModule, MatTableModule
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
