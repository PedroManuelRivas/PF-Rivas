import { Injectable } from '@angular/core';
import { ICourses } from './models';

@Injectable()
export class CoursesService {

  constructor() {
  }
  getCourses(): ICourses[] {
    return [
      {
        id: 1,
        name: "Angular",
        value: 40000
      }
    ]
  }
}
