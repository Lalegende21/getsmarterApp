import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'app-add-student',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatInputModule,
    MatSelectModule,
    FormsModule,
    MatFormFieldModule,
    ReactiveFormsModule,
  ],
  templateUrl: './add-student.component.html',
  styleUrl: './add-student.component.scss',
})
export class AddStudentComponent {

  addStudentToTutorForm!:FormGroup;
  searchText: string = '';
  filteredStudents = [];

  private dialog = inject(MatDialog);
  private ref = inject(MatDialogRef<AddStudentComponent>);



  filterStudents(event: any){}

  //Methode pour fermer le modal
  closePopup() {
    this.ref.close();
  }


  //Methode pour ajouter un student au tutor
  addStudentToTutor(){}
}
