import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { OtpDialogComponent } from './otp-dialog/otp-dialog.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username!: string;
  password!: string;

  constructor(public dialog: MatDialog,private router:Router) { }

  openOTPModal(): void {
    const dialogRef = this.dialog.open(OtpDialogComponent, {
      width: '300px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The OTP dialog was closed');
      // Process the entered OTP here
    });
  }
  login(){
    this.router.navigateByUrl('/dashboard/dashboard');
  }
}
