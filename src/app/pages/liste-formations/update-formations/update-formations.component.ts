import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule, MatCardActions } from '@angular/material/card';
import { MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'app-update-formations',
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
  templateUrl: './update-formations.component.html',
  styleUrl: './update-formations.component.scss',
})
export class UpdateFormationsComponent {
  updateFormationForm!: FormGroup;

  private ref = inject(MatDialogRef<UpdateFormationsComponent>);

  //Methode pour fermer le modal
  closePopup() {
    this.ref.close();
  }

  updateFormation() {}
}
