import { CommonModule } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatCardModule, MatCardActions } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { AddSessionComponent } from '../add-session/add-session.component';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-update-session',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatInputModule,
    MatCardActions,
    ReactiveFormsModule,
  ],
  templateUrl: './update-session.component.html',
  styleUrl: './update-session.component.scss',
})
export class UpdateSessionComponent {
  constructor(
    private ref: MatDialogRef<AddSessionComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  //Methode pour fermer le modal
  closePopup() {
    this.ref.close();
  }
}
