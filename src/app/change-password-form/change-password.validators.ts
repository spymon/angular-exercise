import { AbstractControl, ValidationErrors } from '@angular/forms';

export class PasswordValidators {
  static passwordsMatch(control: AbstractControl): ValidationErrors | null {
    const newPassword = control.get('newPassword')?.value;
    const confirmPassword = control.get('confirmPassword')?.value;

    return newPassword !== confirmPassword ? { invalidPasswords: true } : null;
  }

  static matchOldPassword(
    control: AbstractControl
  ): Promise<ValidationErrors | null> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if ((control.value as string) !== 'asdf123') {
          resolve({ invalidOldPassword: true });
        } else {
          resolve(null);
        }
      }, 2000);
    });
  }
}
