import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth-service';
import { inject } from '@angular/core';
import { Roles } from '../models/role_enum';

export const adminGuard: CanActivateFn = (route, state) => {
  
  const service = inject(AuthService);
  const router  = inject(Router);

  if(service.getToken()){
    if(service.getRole() == Roles[Roles.Admin]){
      return true;
    }
    console.log('Role not valid');
    return false;
    
  }
  router.navigate(['login']);
  return false;
};
