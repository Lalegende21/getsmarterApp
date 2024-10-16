import { CommonModule } from '@angular/common';
import { Component, HostListener, inject } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';

@Component({
  selector: 'app-demarrer-matiere',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  templateUrl: './demarrer-matiere.component.html',
  styleUrl: './demarrer-matiere.component.scss',
})
export class DemarrerMatiereComponent {
  isModalVisible: boolean[] = [false, false, false, false, false];
  private router = inject(Router);

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

  consulterMatiere() {
    this.router.navigateByUrl('/dashboard/demarrer-matiere/id');
  }
}
