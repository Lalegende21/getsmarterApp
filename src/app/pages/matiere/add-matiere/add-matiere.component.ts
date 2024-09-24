import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule, MatCardActions } from '@angular/material/card';
import { MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'app-add-matiere',
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
  templateUrl: './add-matiere.component.html',
  styleUrl: './add-matiere.component.scss',
})
export class AddMatiereComponent {
  addCourseForm!:FormGroup;
  filteredProfessors = [];

  private ref = inject(MatDialogRef<AddMatiereComponent>)


  filterProfessors(event: any){}


  //Methode pour fermer le modal
  closePopup(){
    this.ref.close();
  }


  //Methode pour enregistrer une matiere
  addCourse(){}
}
