import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from '../../core/auth.service';
import { Observable, Subscription } from 'rxjs';
import { IStudent } from './pages/students/models';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent implements OnInit, OnDestroy {
  showFiller = false;
  authUser$: Observable<IStudent | null>;
  authUserSinPipe: IStudent | null = null;
  authUserSubscription?: Subscription;
  
  ngOnInit(): void {
    this.authUserSubscription = this._authService.authUser$.subscribe({
      next: (user) => {
        this.authUserSinPipe = user
      }
    })
  }
  ngOnDestroy(): void {
    this.authUserSubscription?.unsubscribe();
  }
  constructor(private _authService: AuthService, private router: Router) {
    this.authUser$ = _authService.authUser$;
  }

  login(): void {
    this._authService.login()
  }
  logout(): void {
    this._authService.logout()
    this.router.navigate(['auth'])
  }

  isMobile(): boolean {
    return window.innerWidth <= 280;
  }
}
