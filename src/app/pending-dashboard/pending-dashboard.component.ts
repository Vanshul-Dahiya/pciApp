import { Component } from '@angular/core';
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
  navigate(index : number){
    alert(`You clicked on ${index}`);
  }
}
