import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule, MatCardActions } from '@angular/material/card';
import { MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'app-add-formations',
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
  templateUrl: './add-formations.component.html',
  styleUrl: './add-formations.component.scss',
})
export class AddFormationsComponent {
  addFormationForm!: FormGroup;

  private ref = inject(MatDialogRef<AddFormationsComponent>)

  //Methode pour fermer le modal
  closePopup() {
    this.ref.close();
  }


  addFormation(){}
}
