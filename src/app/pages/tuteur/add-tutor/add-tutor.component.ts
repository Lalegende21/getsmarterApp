import { Component, Inject, inject } from '@angular/core';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { UpdateTutorComponent } from '../update-tutor/update-tutor.component';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

interface TypeTutor {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-add-tutor',
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
  templateUrl: './add-tutor.component.html',
  styleUrl: './add-tutor.component.scss',
})
export class AddTutorComponent {
  addTutorForm!: FormGroup;
  typeTutor: TypeTutor[] = [];

  @Inject(MAT_DIALOG_DATA)
  private ref = inject(MatDialogRef<AddTutorComponent>);

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
