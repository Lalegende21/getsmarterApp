import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatDialog } from '@angular/material/dialog';
import { AddButttonComponent } from '../../components/add-buttton/add-buttton.component';
import { AddSessionComponent } from './add-session/add-session.component';
import { UpdateSessionComponent } from './update-session/update-session.component';

@Component({
  selector: 'app-session',
  standalone: true,
  imports: [CommonModule, MatIconModule, AddButttonComponent],
  templateUrl: './session.component.html',
  styleUrl: './session.component.scss',
})
export class SessionComponent {
  isModalVisible: boolean[] = [false, false, false, false, false];

  constructor(private dialog: MatDialog) {}

  toggleModal(index: number, event: Event) {
    event.stopPropagation();
    this.isModalVisible = this.isModalVisible.map((visible, i) =>
      i === index ? !visible : false
    );
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
  addSession() {
    this.dialog.open(AddSessionComponent, {
      enterAnimationDuration: '500ms',
      exitAnimationDuration: '300ms',
    });
  }

  //Methode pour ouvrir le modal de modification d'une session
  updateSession() {
    this.dialog.open(UpdateSessionComponent, {
      enterAnimationDuration: '500ms',
      exitAnimationDuration: '300ms',
    });
  }
}
