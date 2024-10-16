import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule, MatCardActions } from '@angular/material/card';
import { MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'app-update-specificite',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatInputModule,
    MatSelectModule,
    MatFormFieldModule,
    MatCardActions,
    FormsModule,
    ReactiveFormsModule,
  ],
  templateUrl: './update-specificite.component.html',
  styleUrl: './update-specificite.component.scss',
})
export class UpdateSpecificiteComponent {
  updateCodeForm!: FormGroup;

  private dialog = inject(MatDialogRef<UpdateSpecificiteComponent>);

  //Methode pour fermer le modal
  closePopup() {
    this.dialog.close();
  }

  //Methode pour enregistrer une specificte de formation
  updateSpecificiteFormation() {}
}
