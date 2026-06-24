import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { AuthService } from './services/auth-service';

export const authInterceptorInterceptor: HttpInterceptorFn = (req, next) => {
  const authToken = inject(AuthService); //dependency injection 
  //get the saved token in localstorage 
  //const token = localstorage.getItem('token');

  const token = authToken.getToken();
  console.log('token found');

  if(token){
    const cloned = req.clone({setHeaders:{
      Authorization : `Bearer ${token}`
    }});
    return next(cloned);
  }
  console.log('No token found skippig auth header');
  return next(req);
};
