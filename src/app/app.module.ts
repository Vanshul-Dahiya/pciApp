import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

import {FlexLayoutModule} from '@angular/flex-layout'
import { HttpClientModule } from '@angular/common/http';

// Material imports
import {MatIconModule} from '@angular/material/icon'
import { MatTableModule } from '@angular/material/table';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatTabsModule} from '@angular/material/tabs';
import { MatListModule } from '@angular/material/list';

// component imports
import { PendingDashboardComponent } from './pending-dashboard/pending-dashboard.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BottomBarComponent } from './bottom-bar/bottom-bar.component';
import { SplashscreenComponent } from './splashscreen/splashscreen.component';
import { LoginComponent } from './login/login.component';
import { GeneralinformationComponent } from './generalinformation/generalinformation.component';
import { TableComponent } from './table/table.component';
import { TravellingAllowanceComponent } from './travelling-allowance/travelling-allowance.component';
import { ClaimCalculationComponent } from './claim-calculation/claim-calculation.component';
import { ClaimFormComponent } from './claim-form/claim-form.component';
import { AttachmentComponent } from './attachment/attachment.component';
import { ReportComponent } from './report/report.component';
import { InspectionDashboardComponent } from './inspection-dashboard/inspection-dashboard.component';
import { InspectionDetailComponent } from './inspection-detail/inspection-detail.component';
import { PendingDetailComponent } from './pending-detail/pending-detail.component';


@NgModule({
  declarations: [
    AppComponent,
    PendingDashboardComponent,
    NavBarComponent,
    BottomBarComponent,
    SplashscreenComponent,
    LoginComponent,
    GeneralinformationComponent,
    TableComponent,
    TravellingAllowanceComponent,
    ClaimCalculationComponent,
    ClaimFormComponent,
    AttachmentComponent,
    ReportComponent,
    InspectionDashboardComponent,
    InspectionDetailComponent,
    PendingDetailComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FlexLayoutModule,
    MatIconModule,
    MatMenuModule,
    MatTableModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    MatTabsModule,
    MatListModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports:[
    MatIconModule,
    MatMenuModule,
    MatTableModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    MatTabsModule,
  ]
})
export class AppModule { }
