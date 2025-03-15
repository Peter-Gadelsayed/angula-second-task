import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { AppService } from '../app.service';

export const recipeGuard: CanActivateFn = (route, state) => {
  const appService = inject(AppService);

  if (appService.allowAccess) {
    return true;
  } else {
    return false;
  }
};
