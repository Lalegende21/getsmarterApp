import { CommonModule } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatCardActions, MatCardModule } from '@angular/material/card';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';

@Component({
  selector: 'app-add-session',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatInputModule,
    MatCardActions,
    ReactiveFormsModule,
  ],
  templateUrl: './add-session.component.html',
  styleUrl: './add-session.component.scss',
})
export class AddSessionComponent {
  constructor(
    private ref: MatDialogRef<AddSessionComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  //Methode pour fermer le modal
  closePopup() {
    this.ref.close();
  }
}
