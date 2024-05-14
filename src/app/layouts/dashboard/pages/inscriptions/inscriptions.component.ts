import { Component, OnInit } from '@angular/core';
import { InscriptionsService } from './inscriptions.service';
import { IInscription, ISubmitInscription, ISubmitInscriptionForm } from './models';
import { FormControl, FormGroup } from '@angular/forms';
import { CoursesService } from '../courses/courses.service';
import { ICourses } from '../courses/models';
import { StudentsService } from '../students/students.service';
import { IStudent } from '../students/models';

@Component({
  selector: 'app-inscriptions',
  templateUrl: './inscriptions.component.html',
  styleUrl: './inscriptions.component.scss'
})
export class InscriptionsComponent implements OnInit {
  inscriptions: IInscription[] = [];
  courses: ICourses[] = []
  students: IStudent[] = []
  inscriptionForm = new FormGroup<ISubmitInscriptionForm>({
    quantity: new FormControl(1),
    value: new FormControl(null),
    subject: new FormControl(null),
    student: new FormControl(null)
  })
  constructor(private _inscriptionsService: InscriptionsService, private _coursesService: CoursesService, private _studentsService: StudentsService) {
  }

  loadCourses() {
    this.courses = this._coursesService.getCourses()
  }
  loadInscriptions() {
    this._inscriptionsService.getInscriptions().subscribe({
      next: (inscriptions) => {
        this.inscriptions = inscriptions
      },
      error: (err) => {
        alert("ERROR")
      },
      complete: () => { },
    })
  }
  loadStudents() {
    this._studentsService.getStudents().subscribe({
      next: (students) => {
        this.students = students
      },
      error: (err) => {
        alert("ERROR")
      },
      complete: () => { },
    })
  }
  submitCourse() {
    this._inscriptionsService.createInscription(this.inscriptionForm.getRawValue()).subscribe({
      next: (value) => {
        console.log(value)
      }
    })
  }
  ngOnInit(): void {
    this.loadInscriptions()
    this.loadCourses()
    this.loadStudents()
  }
}
