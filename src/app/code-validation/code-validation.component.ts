import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-code-validation',
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
  templateUrl: './code-validation.component.html',
  styleUrl: './code-validation.component.scss',
})
export class CodeValidationComponent {
  codeActivationForm!: FormGroup;

  constructor() {
    //Validator pour n'autoriser que des chiffres
    const onlyDigitsValidator = Validators.pattern(/^[0-9]*$/);

    //Validator pour exiger exactement 6 chiffres
    const sixDigitsValidator = Validators.pattern(/^\d{6}$/);

    this.codeActivationForm = new FormGroup({
      code: new FormControl('', [
        Validators.required,
        sixDigitsValidator,
        onlyDigitsValidator,
      ]),
    });
  }

  confirm() {
    if (this.codeActivationForm.valid) {
    } else {
      this.codeActivationForm.markAllAsTouched();
    }
  }
}
