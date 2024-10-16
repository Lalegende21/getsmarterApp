import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';

@Component({
  selector: 'app-voir-etudiant',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  templateUrl: './voir-etudiant.component.html',
  styleUrl: './voir-etudiant.component.scss'
})
export class VoirEtudiantComponent {
  private router = inject(Router);

  //Methode pour revenir sur la page precedente
  backPage() {
    this.router.navigateByUrl('/dashboard/etudiant')
  }
}
