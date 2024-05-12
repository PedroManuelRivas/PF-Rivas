import { Component, Inject, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { IStudent } from '../../models';

@Component({
  selector: 'app-student-dialog',
  templateUrl: './student-dialog.component.html',
  styleUrl: './student-dialog.component.scss'
})
export class StudentDialogComponent {
  studentForm: FormGroup;
  constructor(private formBuilder: FormBuilder, private matDialogRef: MatDialogRef<StudentDialogComponent>, @Inject(MAT_DIALOG_DATA) private student?: IStudent) {
    console.log(student)
    this.studentForm = this.formBuilder.group({
      firstName: ['', [Validators.required, Validators.pattern(/^[a-zA-ZÀ-ÿ\s']+$/)]],
      lastName: ['', [Validators.required, Validators.pattern(/^[a-zA-ZÀ-ÿ\s']+$/)]],
      age: ['', [Validators.required, Validators.pattern(/^(0?[1-9]|[1-9][0-9])$/)]],
      role: ['STUDENT', [Validators.required]],
      email: ['', [Validators.required, Validators.pattern(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)]],
    })
    if (student) this.studentForm.patchValue(student)
  }
  saveAction(): void {
    if (this.studentForm.invalid) {
      this.studentForm.markAllAsTouched();
    } else {
      this.matDialogRef.close(this.studentForm.value)
    }
  }
}
