import { CommonModule } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatCardModule, MatCardActions } from '@angular/material/card';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-add-campus',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    MatCardActions,
    ReactiveFormsModule,
  ],
  templateUrl: './add-campus.component.html',
  styleUrl: './add-campus.component.scss',
})
export class AddCampusComponent {
  constructor(
    private ref: MatDialogRef<AddCampusComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  //Methode pour fermer le modal
  closePopup() {
    this.ref.close();
  }
}
