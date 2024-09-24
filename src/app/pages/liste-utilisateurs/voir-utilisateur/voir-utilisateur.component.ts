import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';

@Component({
  selector: 'app-voir-utilisateur',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  templateUrl: './voir-utilisateur.component.html',
  styleUrl: './voir-utilisateur.component.scss',
})
export class VoirUtilisateurComponent {
  private router = inject(Router);
  //Methode pour revenir sur la page precedente
  backPage() {
    this.router.navigateByUrl('liste-utilisateurs');
  }


  updateProfessor(){}
}
