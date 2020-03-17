import { Directive } from '@angular/core';
import {AbstractControl, NG_VALIDATORS, ValidationErrors, Validator} from '@angular/forms';

@Directive({
  selector: '[appConfirmEmail]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: ConfirmEmailDirective,
      multi: true
    }
  ]
})
export class ConfirmEmailDirective implements Validator{

  validate(control: AbstractControl): ValidationErrors | null {
    const email = control.get('email');
    const confirmEmail = control.get('confirmEmail');

    if (email && confirmEmail && email.value !== confirmEmail.value) {
      return {notEqual: true};
    }

    return null;
  }

  constructor() { }

}
