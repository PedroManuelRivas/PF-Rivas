import { Injectable } from '@angular/core';
import { ICourses } from './models';
import { HttpClient } from "@angular/common/http";

@Injectable()
export class CoursesService {
  constructor(private httpClient: HttpClient){
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
