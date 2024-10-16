import { CommonModule } from '@angular/common';
import { Component, inject, Inject, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';
import { UpdateProfessorComponent } from '../update-professor/update-professor.component';
import { MatDialog } from '@angular/material/dialog';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

@Component({
  selector: 'app-see-professor',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  templateUrl: './see-professor.component.html',
  styleUrl: './see-professor.component.scss',
})
export class SeeProfessorComponent implements OnInit {

  width!: string;

  private dialog = inject(MatDialog);
  private router = inject(Router);
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

  
  //Methode pour revenir sur la page precedente
  backPage() {
    this.router.navigateByUrl('/dashboard/professeur');
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
