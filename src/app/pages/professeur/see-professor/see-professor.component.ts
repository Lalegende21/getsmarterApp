import { CommonModule } from '@angular/common';
import { Component, inject, Inject } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';
import { UpdateProfessorComponent } from '../update-professor/update-professor.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-see-professor',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  templateUrl: './see-professor.component.html',
  styleUrl: './see-professor.component.scss',
})
export class SeeProfessorComponent {
  private dialog = inject(MatDialog);
  private router = inject(Router);

  
  //Methode pour revenir sur la page precedente
  backPage() {
    this.router.navigateByUrl('professeur');
  }


  //Methode pour ouvrir le modal de modification d'un professeur
  updateProfessor() {
    this.dialog.open(UpdateProfessorComponent, {
      enterAnimationDuration: '500ms',
      exitAnimationDuration: '300ms',
      width: '30%',
    });
  }
}
