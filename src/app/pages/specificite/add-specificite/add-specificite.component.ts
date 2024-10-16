import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule, MatCardActions } from '@angular/material/card';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'app-add-specificite',
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
  templateUrl: './add-specificite.component.html',
  styleUrl: './add-specificite.component.scss',
})
export class AddSpecificiteComponent {
  addCodeForm!: FormGroup;

  private dialog = inject(MatDialogRef<AddSpecificiteComponent>);


  //Methode pour fermer le modal
  closePopup(){
    this.dialog.close();
  }


  //Methode pour enregistrer une specificte de formation
  addSpecificiteFormation(){}
}
