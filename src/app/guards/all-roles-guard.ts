import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth-service';

export const allRolesGuard: CanActivateFn = (route, state) => {
  const servie = inject(AuthService);
  const router = inject(Router);

  if(servie.getToken()){
    return true;
  }
  return false;
};
