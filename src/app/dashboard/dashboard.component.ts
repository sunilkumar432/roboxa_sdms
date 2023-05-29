import { Component,ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { Router } from '@angular/router';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  constructor(private _router:Router){}
  @ViewChild(MatSidenav) sidenav!: MatSidenav;

  logout(){
    this._router.navigateByUrl("/login/signin");
    sessionStorage.removeItem('SDMS-ROBOXA-token')
  }

}
