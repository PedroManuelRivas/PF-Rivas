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
      firstName: ['', [Validators.required, Validators.pattern('^[a-zA-ZÁÉÍÓÚáéíóúñÑ]+$'), Validators.maxLength(5)]],
      lastName: ['', [Validators.required, Validators.pattern('^[a-zA-ZÁÉÍÓÚáéíóúñÑ]+$')]],
      age: ['', [Validators.required, Validators.pattern('^(0?[1-9]|[1-9][0-9])$')]],
      role: ['STUDENT', [Validators.required]],
      email: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}')]],
    })
    if (student) this.studentForm.patchValue(student);
  }
  get firstNameControl() {
    return this.studentForm.get('firstName')
  }

  get lastNameControl() {
    return this.studentForm.get('lastName')
  }

  get ageControl() {
    return this.studentForm.get('age')
  }

  get emailControl() {
    return this.studentForm.get('email')
  }
  saveAction(): void {
    if (this.studentForm.invalid) {
      this.studentForm.markAllAsTouched();
    } else {
      this.matDialogRef.close(this.studentForm.value)
    }
  }
}
