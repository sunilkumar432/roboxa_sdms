import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-site-add-edit',
  templateUrl: './site-add-edit.component.html',
  styleUrls: ['./site-add-edit.component.css']
})
export class SiteAddEditComponent implements OnInit {
  form!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private dialogRef: MatDialogRef<SiteAddEditComponent>
  ) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      sitecode: ['', Validators.required],
      sitename: ['', Validators.required],
      legalsitename: ['', Validators.required],
      institutionname: ['', Validators.required],
      contactperson: ['', Validators.required],
      referencedby: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.form.valid) {
      // Perform the save operation
      console.log(this.form.value);

      // Close the dialog
      this.dialogRef.close();
    }
  }

  onClose() {
    // Close the dialog without saving
    this.dialogRef.close();
  }
}
