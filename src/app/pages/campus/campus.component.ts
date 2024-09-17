import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { AddButttonComponent } from '../../components/add-buttton/add-buttton.component';
import { AddCampusComponent } from './add-campus/add-campus.component';
import { UpdateCampusComponent } from './update-campus/update-campus.component';

@Component({
  selector: 'app-campus',
  standalone: true,
  imports: [CommonModule, MatIconModule, AddButttonComponent],
  templateUrl: './campus.component.html',
  styleUrl: './campus.component.scss',
})
export class CampusComponent {
  isModalVisible: boolean[] = [false, false, false];

  constructor(private dialog: MatDialog) {}

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

  //Methode pour ouvrir le modal d'ajout d'une session
  addCampus() {
    this.dialog.open(AddCampusComponent, {
      enterAnimationDuration: '500ms',
      exitAnimationDuration: '300ms',
      width: '30%',
    });
  }

  //Methode pour ouvrir le modal de modification d'une session
  updateCampus() {
    this.dialog.open(UpdateCampusComponent, {
      enterAnimationDuration: '500ms',
      exitAnimationDuration: '300ms',
      width: '30%',
    });
  }
}
