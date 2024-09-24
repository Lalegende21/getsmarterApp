import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ReactiveFormsModule, FormGroup } from '@angular/forms';
import { MatCardModule, MatCardActions } from '@angular/material/card';
import { MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { AddMatiereComponent } from '../add-matiere/add-matiere.component';

@Component({
  selector: 'app-update-matiere',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatInputModule,
    MatSelectModule,
    MatFormFieldModule,
    MatCardActions,
    ReactiveFormsModule,
  ],
  templateUrl: './update-matiere.component.html',
  styleUrl: './update-matiere.component.scss',
})
export class UpdateMatiereComponent {
  updateCourseForm!: FormGroup;
  filteredProfessors = [];

  private ref = inject(MatDialogRef<AddMatiereComponent>);

  filterProfessors(event: any) {}

  //Methode pour fermer le modal
  closePopup() {
    this.ref.close();
  }

  //Methode pour enregistrer une matiere
  updateCourse() {}
}
