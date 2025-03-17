import { AbstractControl, ValidationErrors } from '@angular/forms';

export function noSpacesValidator(control: AbstractControl): ValidationErrors | null {
  if (control.value.includes(' ')) {
    return { noSpaces: true };
  }
  return null;
}
