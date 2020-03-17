import { Directive } from '@angular/core';
import {AbstractControl, NG_VALIDATORS, ValidationErrors, Validator} from '@angular/forms';

@Directive({
  selector: '[appSelectRequired]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: SelectRequiredDirective,
      multi: true
    }
  ]
})
export class SelectRequiredDirective implements Validator{

  validate(control: AbstractControl): ValidationErrors | null {
    return control.value === -1 ? {notSelected: true} : null;
  }

  constructor() { }

}
