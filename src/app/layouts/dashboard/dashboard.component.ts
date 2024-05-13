import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../core/auth.service';
import { Observable } from 'rxjs';
import { IStudent } from './pages/students/models';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent implements OnInit {
  showFiller = false;

  authUser$: Observable<IStudent | null>;

  ngOnInit(): void {
  }

  constructor(private _authService: AuthService, private router: Router) { 
    this.authUser$ = _authService.authUser$;
  }

  // login(): void {
  //   this._authService.login()
  // }
  logout(): void {
    this._authService.logout()
    this.router.navigate(['auth'])
  }

  isMobile(): boolean {
    return window.innerWidth <= 280;
  }
}
