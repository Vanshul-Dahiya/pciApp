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
    switch (index) {
      case 1:
        this.router.navigate(['/detail']);
        break;
      case 2:
        this.router.navigate(['/report']);
        break;
      case 3:
        this.router.navigate(['/pending']);
        break;
      case 4:
        this.router.navigate(['/claimForm']);
        break;
      default:
        break;
    }
  }
}
