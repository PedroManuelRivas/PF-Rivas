import { Component } from '@angular/core';
import { IStudent } from './models';
import { MatDialog } from '@angular/material/dialog';
import { StudentDialogComponent } from './components/student-dialog/student-dialog.component';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrl: './students.component.scss'
})
export class StudentsComponent {
  displayedColumns: string[] = ['id', 'firstName', 'lastName', 'age', 'email', 'createdAt', 'role'];
  students: IStudent[] = [
    {
      id: 1,
      firstName: "Bruno",
      lastName: "Albeiro",
      age: 2,
      email: "brunoalbeiro@gmail.com",
      createdAt: new Date(),
    },
    {
      id: 2,
      firstName: "Marcela",
      lastName: "Valentina",
      age: 1,
      email: "marcelavalentina@gmail.com",
      createdAt: new Date(),
    }
  ]
  constructor(private matDialog: MatDialog) {
  }
  openDialog(): void {
    this.matDialog.open(StudentDialogComponent).afterClosed().subscribe({
      next: (result) => {
        if(result) {
          this.students = [...this.students, result ]
        }
      }
    })
  }
}
