import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const _authService = inject(AuthService);
  const isAuth = _authService.verifyToken();
  return isAuth ||  router.createUrlTree(['auth'])
};
 