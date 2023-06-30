import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PendingDashboardComponent } from './pending-dashboard/pending-dashboard.component';
import { CommonModule } from '@angular/common';
import { SplashscreenComponent } from './splashscreen/splashscreen.component';
import { LoginComponent } from './login/login.component';
import { GeneralinformationComponent } from './generalinformation/generalinformation.component';
import { TableComponent } from './table/table.component';
import { TravellingAllowanceComponent } from './travelling-allowance/travelling-allowance.component';
import { ClaimCalculationComponent } from './claim-calculation/claim-calculation.component';

const routes: Routes = [
  {
    component: SplashscreenComponent,
    path: ''
  },
  {
    component: LoginComponent,
    path: 'login'
  },
  {
    path : '', component:PendingDashboardComponent
  },
  {
    path : 'pendingDashboard', component:PendingDashboardComponent
  },
  { path: 'generalInfo', component: GeneralinformationComponent},
  { path: 'table/:id', component: TableComponent},
  { path: 'travelingAllowance', component: TravellingAllowanceComponent},
  { path: 'calculation', component: ClaimCalculationComponent},
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
