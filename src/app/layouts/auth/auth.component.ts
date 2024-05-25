import { Component, OnDestroy, OnInit } from '@angular/core';
import { AuthService } from '../../core/services/auth.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ILoginData } from './models';
import { Store } from '@ngrx/store';
import { authActions } from '../../store/auth/auth.actions';


@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.scss'
})
export class AuthComponent implements OnDestroy, OnInit {
  authUserChangeSubscription?: Subscription;

  loginForm: FormGroup;

  constructor(private _authService: AuthService, private router: Router, private formBuilder: FormBuilder, private store: Store) {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    })
  }
  ngOnInit(): void {
    // this.subscribeToAuthUserChange();
  }
  // subscribeToAuthUserChange(): void {
  //   this.authUserChangeSubscription = this._authService.authUser$.subscribe({
  //     next: (authUser) => {
  //       if (authUser != null) {
  //         this.router.navigate(['dashboard', 'home'])
  //       }
  //     }
  //   })
  // }

  login() {
    if (this.loginForm.invalid) {
      this.loginForm.markAllAsTouched();
    } else {
      this.store.dispatch(authActions.login({
        payload: this.loginForm.getRawValue()
      }))
      // this._authService.login(this.loginForm.getRawValue())
    }
  }
  ngOnDestroy(): void {
    this.authUserChangeSubscription?.unsubscribe();
  }
}
