import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PendingDashboardComponent } from './pending-dashboard/pending-dashboard.component';
import { CommonModule } from '@angular/common';

const routes: Routes = [
  {
    path : '', component:PendingDashboardComponent
  },
  {
    path : 'pendingDashboard', component:PendingDashboardComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
