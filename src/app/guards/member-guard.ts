import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth-service';
import { Roles } from '../models/role_enum';

export const memberGuard: CanActivateFn = (route, state) => {
  const service = inject(AuthService);
  const routere = inject(Router);
  if(service.getToken())
  {
    console.log(service.getRole());
    if(service.getRole() == Roles[Roles.Member]){
      return true;
    }
    console.log("Role not valid");
    return false;
    
  }
  routere.navigate(['login']);
  return false;
};
