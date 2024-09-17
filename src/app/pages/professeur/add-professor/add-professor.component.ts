import { CommonModule } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule, MatCardActions } from '@angular/material/card';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-add-professor',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    MatCardActions,
    FormsModule,
    ReactiveFormsModule,
  ],
  templateUrl: './add-professor.component.html',
  styleUrl: './add-professor.component.scss',
})
export class AddProfessorComponent {
  addProfessorForm!: FormGroup;

  constructor(
    private dialog: MatDialog,
    private ref: MatDialogRef<AddProfessorComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ){}

  //Methode pour fermer le modal
  closePopup() {
    this.ref.close();
  }


  //Methode pour ajouter un professeur
  addProfessor(){}
}
