import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ILoginData } from '../../layouts/auth/models/index';
import { Router } from '@angular/router';
import { IStudent } from '../../layouts/dashboard/pages/students/models';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private MOCK_AUTH_USER: IStudent = {
    id: 1,
    createdAt: new Date(),
    email: "bruno@gmail.com",
    firstName: "Bruno",
    lastName: "Albeiro",
    role: "ADMIN",
    age: 2
  };

  private _authUser$ = new BehaviorSubject<IStudent | null>(null);
  public authUser$ = this._authUser$.asObservable();

  constructor(private router: Router) { }

  login(data: ILoginData): void {
       if (data.email !== 'bruno@gmail.com' || data.password !== '123') {

      alert('Correo o password incorrectos');
    } else {
      this._authUser$.next(this.MOCK_AUTH_USER);
      localStorage.setItem(
        'authorizacion',
        'tokenUltraSecreto123123123'
      );
      this.router.navigate(['dashboard', 'home']);
    }
  }

    verifyToken(): boolean {
      const token = localStorage.getItem('authorizacion');
      if (token) {
        this._authUser$.next(this.MOCK_AUTH_USER);
        return true;
      } else {
        return false;
      }
    }

  logout(): void {
    this._authUser$.next(null);
    localStorage.removeItem('authorizacion');
  }
}
