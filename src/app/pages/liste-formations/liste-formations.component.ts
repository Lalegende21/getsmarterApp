import { CommonModule } from '@angular/common';
import { Component, HostListener, inject, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';
import { AddFormationsComponent } from './add-formations/add-formations.component';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { UpdateFormationsComponent } from './update-formations/update-formations.component';

@Component({
  selector: 'app-liste-formations',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  templateUrl: './liste-formations.component.html',
  styleUrl: './liste-formations.component.scss',
})
export class ListeFormationsComponent implements OnInit {
  isModalVisible: boolean[] = [false, false, false, false, false];
  width!: string;

  private router = inject(Router);
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

  consulterFormation() {
    this.router.navigateByUrl('/dashboard/liste-formations/id');
  }

  addFormation() {
    this.dialog.open(AddFormationsComponent, {
      enterAnimationDuration: '500ms',
      exitAnimationDuration: '300ms',
      width: this.width,
    });
  }

  updateFormation() {
    this.dialog.open(UpdateFormationsComponent, {
      enterAnimationDuration: '500ms',
      exitAnimationDuration: '300ms',
      width: this.width,
    });
  }
}
