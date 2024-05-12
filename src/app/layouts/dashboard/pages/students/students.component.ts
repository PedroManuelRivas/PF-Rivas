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
  displayedColumns: string[] = ['id', 'firstName', 'lastName', 'age', 'email', 'createdAt', 'role', 'manage'];
  students: IStudent[] = [
    {
      id: 1,
      firstName: "Bruno",
      lastName: "Albeiro",
      age: 2,
      email: "brunoalbeiro@gmail.com",
      createdAt: new Date(),
      role: 'ADMIN'
    },
    {
      id: 2,
      firstName: "Marcela",
      lastName: "Valentina",
      age: 1,
      email: "marcelavalentina@gmail.com",
      createdAt: new Date(),
      role: 'STUDENT'
    }
  ]
  constructor(private matDialog: MatDialog) {
  }

  // roleSession = 'ADMIN'
  openDialog(studentToEdit?: IStudent): void {
    this.matDialog.open(StudentDialogComponent, {
      data: studentToEdit
    }).afterClosed().subscribe({
      next: (result) => {
        if (result) {
          if (studentToEdit) {
            this.students = this.students.map(student => student.id === studentToEdit.id ? {...student, ...result} : student)
          }
          else {
            result.id = new Date().getTime().toString().substring(0, 3);
            result.createdAt = new Date();
            this.students = [...this.students, result]
          }
        }
      }
    })
  }

  onDeleteStudent(id: number): void {
    this.students = this.students.filter(student => student.id !== id)
  }
}
