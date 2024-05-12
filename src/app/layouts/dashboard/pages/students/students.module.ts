import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentsRoutingModule } from './students-routing.module';
import { StudentsComponent } from './students.component';
// import { MatTableModule } from '@angular/material/table';
// import { MatDialogModule } from '@angular/material/dialog';
import { StudentDialogComponent } from './components/student-dialog/student-dialog.component';
// import { MatButtonModule } from '@angular/material/button';
// import { MatFormFieldModule } from '@angular/material/form-field';
// import { MatInputModule } from '@angular/material/input';
// import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../../../../shared/shared.module';


@NgModule({
  declarations: [
    StudentsComponent,
    StudentDialogComponent
  ],
  imports: [
    CommonModule,
    StudentsRoutingModule,
    // MatTableModule,
    // MatDialogModule,
    // MatButtonModule,
    // MatFormFieldModule,
    // MatInputModule,
    // ReactiveFormsModule,
    SharedModule
  ],
  exports: [StudentsComponent]
})
export class StudentsModule { }
