import { CommonModule } from '@angular/common';
import { Component, Inject, inject } from '@angular/core';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule, MatCardActions } from '@angular/material/card';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

interface TypeTutor {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-update-tutor',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatInputModule,
    MatSelectModule,
    FormsModule,
    MatFormFieldModule,
    ReactiveFormsModule,
  ],
  templateUrl: './update-tutor.component.html',
  styleUrl: './update-tutor.component.scss',
})
export class UpdateTutorComponent {
  updateTutorForm!: FormGroup;
  typeTutor: TypeTutor[] = [];

  @Inject(MAT_DIALOG_DATA)
  private ref = inject(MatDialogRef<UpdateTutorComponent>);

  //Type de tuteur
  typeTuteur: TypeTutor[] = [
    { value: 'PARENT', viewValue: 'Parent' },
    { value: 'ONCLE', viewValue: 'Oncle' },
    { value: 'TANTE', viewValue: 'Tante' },
    { value: 'GRAND_PARENT', viewValue: 'Grand-parent' },
    { value: 'FRERE', viewValue: 'Frere' },
    { value: 'SOEUR', viewValue: 'Soeur' },
  ];

  closePopup() {
    this.ref.close();
  }
  updateTutor() {}
}
