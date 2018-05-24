import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core/src/metadata/ng_module';
import { HomeComponent } from './home/home.component';
import { ReportComponent } from './report/report.component';
import { FlowComponent } from './flow/flow.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DescriptionComponent } from './dashboard/description/description.component';
import { StaffingComponent } from './dashboard/staffing/staffing.component';
import { DocumentComponent } from './dashboard/document/document.component';
import { AdvancementComponent } from './dashboard/advancement/advancement.component';
import { ContactComponent } from './dashboard/contact/contact.component';
import { ToDoListComponent } from './dashboard/to-do-list/to-do-list.component';
import { ApointmentComponent } from './dashboard/apointment/apointment.component';
import { DeliveryManagementComponent } from './dashboard/delivery-management/delivery-management.component';
import { PlanProjectComponent } from './dashboard/plan-project/plan-project.component';
import { MeetingManagementComponent } from './dashboard/meeting-management/meeting-management.component';
 
export const AppRoutes: Routes = [
    {
      path: 'home',
      pathMatch: 'full',
      component: HomeComponent,
    },
    {
      path: 'report',
      pathMatch: 'full',
      component: ReportComponent,
    },
    {
      path: 'flow',
      pathMatch: 'full',
      component: FlowComponent,
    },
    {
      path: 'dashboard',
      component: DashboardComponent,
      children: [
        {
          path: '',
          pathMatch: 'full',
          redirectTo: 'advancement',
        },
        {
          path: 'description',
          component: DescriptionComponent,
          pathMatch: 'full',
        },
        {
          path: 'staffing',
          component: StaffingComponent,
          pathMatch: 'full',
        },
        {
          path: 'document',
          component: DocumentComponent,
          pathMatch: 'full',
        },
        {
          path: 'advancement',
          component: AdvancementComponent,
          pathMatch: 'full',
        },
        {
          path: 'contact',
          component: ContactComponent,
          pathMatch: 'full',
        },
        {
          path: 'to-do-list',
          component: ToDoListComponent,
          pathMatch: 'full',
        },
        {
          path: 'appointment',
          component: ApointmentComponent,
          pathMatch: 'full',
        },
        {
          path: 'delivery-management',
          component: DeliveryManagementComponent,
          pathMatch: 'full',
        },
        {
          path: 'plan-project',
          component: PlanProjectComponent,
          pathMatch: 'full',
        },
        {
          path: 'meeting-management',
          component: MeetingManagementComponent,
          pathMatch: 'full',
        }
      ]
    }
  ]
export const ROUTING: ModuleWithProviders = RouterModule.forRoot(AppRoutes);