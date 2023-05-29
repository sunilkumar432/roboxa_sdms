import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-otp-dialog',
  templateUrl: './otp-dialog.component.html',
  styleUrls: ['./otp-dialog.component.css']
})
export class OtpDialogComponent {
  digits: string[] = [''];

  constructor(public dialogRef: MatDialogRef<OtpDialogComponent>) { }

  onSubmit(): void {
    // Perform validation or further processing here
    this.dialogRef.close();
  }
}
