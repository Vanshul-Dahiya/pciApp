import { Component } from '@angular/core';
import {  OnInit, Output, EventEmitter  } from '@angular/core';
import {Routes,RouterModule} from '@angular/router'

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {
    @Output() public sidenavToggle = new EventEmitter();
    constructor() { }
    ngOnInit() {
    }
    public onToggleSidenav = () => {
      this.sidenavToggle.emit();
    }
    
  // public onToggleSidenav() {
  //   if (this.sidenavToggle) {
  //     this.sidenavToggle.toggle();
  //   }
  // }
}
