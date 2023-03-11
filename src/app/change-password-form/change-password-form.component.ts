import { PasswordValidators } from './change-password.validators';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'change-password-form',
  templateUrl: './change-password-form.component.html',
  styleUrls: ['./change-password-form.component.css'],
})
export class ChangePasswordFormComponent {
  form: FormGroup;
  isSubmitted = false;

  constructor(fb: FormBuilder) {
    this.form = fb.group(
      {
        oldPassword: [
          '',
          Validators.required,
          PasswordValidators.matchOldPassword,
        ],

        newPassword: ['', [Validators.required, Validators.minLength(8)]],
        confirmPassword: ['', Validators.required],
      },
      {
        validators: PasswordValidators.passwordsMatch,
      }
    );
  }

  get oldPassword() {
    return this.form.get('oldPassword');
  }

  get newPassword() {
    return this.form.get('newPassword');
  }

  get confirmPassword() {
    return this.form.get('confirmPassword');
  }

  submit() {
    this.isSubmitted = true;

    if (this.form.valid) {
      this.isSubmitted = false;
      this.form.reset();
      alert('Password changed successfully!');
    } else {
      alert('Incorrect credentials.');
    }
  }
}
