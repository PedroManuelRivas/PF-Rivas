import { InjectionToken, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoursesRoutingModule } from './courses-routing.module';
import { CoursesComponent } from './courses.component';
import { SharedModule } from '../../../../shared/shared.module';
import { CoursesService } from './courses.service';

export const COURSES = new InjectionToken('COURSES');

@NgModule({
  declarations: [
    CoursesComponent
  ],
  imports: [
    CommonModule,
    CoursesRoutingModule,
    SharedModule
  ],
  exports: [
    CoursesComponent,
  ],
  providers: [
    CoursesService
    // {
    //   provide: COURSES,
    //   useFactory: (_coursesService: CoursesService) => {
    //     return _coursesService.getCourses()
    //   },
    //   deps: [CoursesService]
    // }
  ]
})
export class CoursesModule { }
