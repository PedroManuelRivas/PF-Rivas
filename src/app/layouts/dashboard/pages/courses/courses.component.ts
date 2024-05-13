import { Component, Inject, OnInit } from '@angular/core';
import { CoursesService } from './courses.service';
import { ICourses } from './models';
import { COURSES } from './courses.module';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.scss'
})
export class CoursesComponent implements OnInit {
  displayedColumns = ['id', 'name', 'value', 'manage'];
  courses: ICourses[] = []
  ngOnInit(): void {
    this.courses = this._coursesService.getCourses()
  }
  constructor(
    private _coursesService: CoursesService,
    // @Inject(COURSES) public courses: ICourses[]
  ) {

  }
}
