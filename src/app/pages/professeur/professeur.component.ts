import { CommonModule } from '@angular/common';
import { Component, HostListener, inject, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { AddButttonComponent } from '../../components/add-buttton/add-buttton.component';
import { MatDialog } from '@angular/material/dialog';
import { AddProfessorComponent } from './add-professor/add-professor.component';
import { UpdateProfessorComponent } from './update-professor/update-professor.component';
import { Router } from '@angular/router';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

@Component({
  selector: 'app-professeur',
  standalone: true,
  imports: [CommonModule, MatIconModule, AddButttonComponent],
  templateUrl: './professeur.component.html',
  styleUrl: './professeur.component.scss',
})
export class ProfesseurComponent implements OnInit {
  isModalVisible: boolean[] = [false, false, false, false, false];
  width!: string;

  private dialog = inject(MatDialog);
  private route = inject(Router);
  private breakPointObserver = inject(BreakpointObserver);

  ngOnInit(): void {
    this.breakPointObserver
      .observe([Breakpoints.Medium, Breakpoints.Large, Breakpoints.XLarge])
      .subscribe((result) => {
        if (result.matches) {
          this.width = '30%';
        } else {
          this.width = '80%';
        }
      });
  }

  toggleModal(index: number, event: Event) {
    event.stopPropagation();
    this.isModalVisible = this.isModalVisible.map((visible, i) =>
      i === index ? !visible : false
    );
  }

  onOptionSelected(index: number, event: Event) {
    event.stopPropagation(); // Empêche la propagation du clic
    this.isModalVisible[index] = false; // Ferme le modal correspondant
    console.log('Option sélectionnée dans le modal', index);
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: Event) {
    const target = event.target as HTMLElement;

    // Fermez tous les modals si le clic est en dehors d'un modal et d'un bouton
    if (!target.closest('.modal') && !target.closest('.more-icon')) {
      this.isModalVisible = [false, false, false, false, false];
    }
  }

  //Methode pour afficher les informations du professeur
  consulterProfessor() {
    this.route.navigateByUrl('/dashboard/professeur/id');
  }

  //Methode pour ouvrir le modal d'ajout d'un professeur
  addProfessor() {
    this.dialog.open(AddProfessorComponent, {
      enterAnimationDuration: '500ms',
      exitAnimationDuration: '300ms',
      width: this.width,
    });
  }

  //Methode pour ouvrir le modal de modification d'un professeur
  updateProfessor() {
    this.dialog.open(UpdateProfessorComponent, {
      enterAnimationDuration: '500ms',
      exitAnimationDuration: '300ms',
      width: this.width,
    });
  }
}
