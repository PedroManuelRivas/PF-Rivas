import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { IStudent } from '../../models';
import { StudentsService } from '../../students.service';

@Component({
  selector: 'app-student-detail',
  templateUrl: './student-detail.component.html',
  styleUrl: './student-detail.component.scss'
})
export class StudentDetailComponent {
  student$: Observable<IStudent | undefined>
  constructor(private activatedRoute: ActivatedRoute, private _studentsService: StudentsService) {
    this.student$ = this._studentsService.getStudentsById(this.activatedRoute.snapshot.params['id'])
  }
}
