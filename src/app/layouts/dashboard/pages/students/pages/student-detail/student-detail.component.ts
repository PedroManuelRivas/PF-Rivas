import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-student-detail',
  templateUrl: './student-detail.component.html',
  styleUrl: './student-detail.component.scss'
})
export class StudentDetailComponent {
  constructor(private activatedRoute: ActivatedRoute) {
    // this.activatedRoute.params.subscribe({
    //   next: (v) => console.log(v)
    // })
    this.activatedRoute.snapshot.params['id']
  }
}
