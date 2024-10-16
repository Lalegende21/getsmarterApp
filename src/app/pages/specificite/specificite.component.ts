import { CommonModule } from '@angular/common';
import { Component, HostListener, inject, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { AddSpecificiteComponent } from './add-specificite/add-specificite.component';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { UpdateSpecificiteComponent } from './update-specificite/update-specificite.component';

@Component({
  selector: 'app-specificite',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  templateUrl: './specificite.component.html',
  styleUrl: './specificite.component.scss',
})
export class SpecificiteComponent implements OnInit {
  isModalVisible: boolean[] = [false, false, false, false, false];
  width!: string;

  private dialog = inject(MatDialog);
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

  //Methode pour ajouter une specificite de formation
  addSpecificite() {
    this.dialog.open(AddSpecificiteComponent, {
      enterAnimationDuration: '500ms',
      exitAnimationDuration: '300ms',
      width: this.width,
    });
  }

  //Methode pour mettre a jour une specificite de formation
  updateSpecificte() {
    this.dialog.open(UpdateSpecificiteComponent, {
      enterAnimationDuration: '500ms',
      exitAnimationDuration: '300ms',
      width: this.width,
    });
  }
}
