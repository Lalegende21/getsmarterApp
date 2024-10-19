import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatCardActions, MatCardModule } from '@angular/material/card';
import { provideNativeDateAdapter } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { RouterModule } from '@angular/router';

interface Gender {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-update-profil',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatRadioModule,
    MatSelectModule,
    MatCardModule,
    MatCardActions,
  ],
  providers: [provideNativeDateAdapter()],
  templateUrl: './update-profil.component.html',
  styleUrl: './update-profil.component.scss',
})
export class UpdateProfilComponent {
  updateProfilForm!: FormGroup;

  private ref = inject(MatDialogRef<UpdateProfilComponent>);

  //Type de sexe
  gender: Gender[] = [
    { value: 'HOMME', viewValue: 'Homme' },
    { value: 'FEMME', viewValue: 'Femme' },
  ];

  constructor() {
    // Validator pour exiger un minimum de 8 caractères
    const minLengthValidator3 = Validators.minLength(3);

    // Validator pour exiger un minimum de 9 chiffres
    const nineDigitsValidator = Validators.pattern(
      /^(?=.*\d.*\d.*\d.*\d.*\d.*\d.*\d.*\d.*\d).{9,}$/
    );

    //Validator pour n'autoriser que des chiffres
    const onlyDigitsValidator = Validators.pattern(/^[0-9]*$/);

    //Validator pour n'autoriser que des chiffres
    // const nineDigitsValidator = Validators.pattern(/^[0-9]{9}$/);

    //Validator pour valider un email
    const emailValidator = Validators.pattern(
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    );

    this.updateProfilForm = new FormGroup({
      id: new FormControl(''),
      firstname: new FormControl('', [
        Validators.required,
        minLengthValidator3,
      ]),
      lastname: new FormControl('', [Validators.required, minLengthValidator3]),
      sexe: new FormControl('', [Validators.required]),
      dob: new FormControl('', [Validators.required]),
      country: new FormControl('', [Validators.required]),
      city: new FormControl('', [Validators.required]),
      phonenumber: new FormControl('', [
        Validators.required,
        nineDigitsValidator,
        onlyDigitsValidator,
      ]),
      email: new FormControl('', [
        Validators.required,
        Validators.email,
        emailValidator,
      ]),
    });
  }

  close() {
    this.ref.close();
  }

  updateProfil() {}
}
