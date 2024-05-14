import { Component, OnInit } from '@angular/core';
import { IStudent } from './models';
import { MatDialog } from '@angular/material/dialog';
import { StudentDialogComponent } from './components/student-dialog/student-dialog.component';
import { StudentsService } from './students.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrl: './students.component.scss'
})
export class StudentsComponent implements OnInit {
  displayedColumns: string[] = ['id', 'firstName', 'lastName', 'fullName', 'age', 'email', 'createdAt', 'role', 'manage'];
  students: IStudent[] = [

  ]
  constructor(private matDialog: MatDialog, private studentsService: StudentsService) {
  }
  ngOnInit(): void {
    this.studentsService.getStudents().subscribe({
      next: (students) => {
        this.students = students
      },
      error: (error) => {
        console.log("next", error);
      },
      complete: () => {
        console.log("complete");

      }
    })
  }

  // roleSession = 'ADMIN'
  openDialog(studentToEdit?: IStudent): void {
    this.matDialog.open(StudentDialogComponent, {
      data: studentToEdit
    }).afterClosed().subscribe({
      next: (result) => {
        if (result) {
          if (studentToEdit) {
            this.students = this.students.map(student => student.id === studentToEdit.id ? { ...student, ...result } : student)
          }
          else {
            result.createdAt = new Date();
            this.studentsService.createUser(result).subscribe({
              next: (student) => {
                this.students = [...this.students, student]
              }
            })
          }
        }
      }
    })
  }

  onDeleteStudent(id: number): void {
    this.students = this.students.filter(student => student.id !== id)
  }
}
