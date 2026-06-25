import { CanDeactivateFn } from '@angular/router';
import { AddGenreApiComponent } from '../add-genre-api-component/add-genre-api-component';

export const componentDeactivateGuard: CanDeactivateFn<AddGenreApiComponent> = (
  component,
  currentRoute,
  currentState,
  nextState,
) => {
  return component.canDeactivate();

};
