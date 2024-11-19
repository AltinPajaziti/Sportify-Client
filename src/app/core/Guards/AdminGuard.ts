import { inject } from "@angular/core";
import { CanActivateFn, Router } from '@angular/router';

export const AuthGuard: CanActivateFn = (route, state) => {
  const role = localStorage.getItem('Role');
  const router = inject(Router);
    console.log("roli" , role)
  if (role !== 'Admin' ) {
    router.navigate(['/']); 
    return false; 
  }

  return true; 
};
