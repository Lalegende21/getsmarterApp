import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-forgot-password',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatIconModule,
    RouterModule,
  ],
  templateUrl: './forgot-password.component.html',
  styleUrl: './forgot-password.component.scss',
})
export class ForgotPasswordComponent {
  forgortPasswordForm!: FormGroup;

  constructor() {
    //Validator pour valider un email
    const emailValidator = Validators.pattern(
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    );

    this.forgortPasswordForm = new FormGroup({
      email: new FormControl('', [
        Validators.required,
        Validators.email,
        emailValidator,
      ]),
    });
  }

  confirm() {
    if (this.forgortPasswordForm.valid) {
    } else {
      this.forgortPasswordForm.markAllAsTouched();
    }
  }
}
