import { Component, OnDestroy, OnInit } from '@angular/core';
import { AuthService } from '../../core/auth.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.scss'
})
export class AuthComponent implements OnDestroy, OnInit {
  constructor(private _authService: AuthService, private router: Router) {
  }
  ngOnInit(): void {
    this.subscribeToAuthUserChange();
  }
  authUserChangeSubscription?: Subscription;
  subscribeToAuthUserChange(): void {
    this.authUserChangeSubscription = this._authService.authUser$.subscribe({
      next: (authUser) => {
        if (authUser != null) {
          this.router.navigate(['dashboard', 'home'])
        }
      }
    })
  }

  login() {
    this._authService.login()
  }
  ngOnDestroy(): void {
    this.authUserChangeSubscription?.unsubscribe();
  }
}
