import { Component } from '@angular/core';
import { Router } from '@angular/router';
// import {  OnInit, Output, EventEmitter  } from '@angular/core';

@Component({
  selector: 'app-pending-dashboard',
  templateUrl: './pending-dashboard.component.html',
  styleUrls: ['./pending-dashboard.component.css']
})
export class PendingDashboardComponent {   
  //  @Output() public sidenavToggle = new EventEmitter();
  // public onToggleSidenav = () => {
  //   this.sidenavToggle.emit();
  // }
  constructor(private router :Router){}
  navigate(index : number){
    alert(`You clicked on ${index}`);
    console.log('working!')
    switch (index) {
      case 1:
        console.log('working?')
        this.router.navigate(['/inspectionDashboard']);
        break;
      case 2:
        this.router.navigate(['/report']);
        break;
      case 3:
        this.router.navigate(['/pendingDetail']);
        break;
      case 4:
        this.router.navigate(['/claimForm']);
        break;
      default:
        break;
    }
  }
}
