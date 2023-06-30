import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-splashscreen',
  templateUrl: './splashscreen.component.html',
  styleUrls: ['./splashscreen.component.css']
})
export class SplashscreenComponent {
  constructor(private router : Router){}

  ngOnInit(){
    setTimeout(() => {
      this.router.navigate(['/login']);
    }, 2200);
  }
}
