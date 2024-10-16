import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';

@Component({
  selector: 'app-voir-formations',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  templateUrl: './voir-formations.component.html',
  styleUrl: './voir-formations.component.scss'
})
export class VoirFormationsComponent {
  private router = inject(Router);

  //Methode pour revenir sur la page precedente
  backPage(){
    this.router.navigateByUrl('/dashboard/liste-formations');
  }
}
