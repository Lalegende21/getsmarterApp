import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'accueil',
  },
  {
    path: 'accueil',
    loadComponent: () =>
      import('./pages/accueil/accueil.component').then(
        (m) => m.AccueilComponent
      ),
  },
  {
    path: 'session',
    loadComponent: () =>
      import('./pages/session/session.component').then(
        (m) => m.SessionComponent
      ),
  },
  {
    path: 'etudiant',
    loadComponent: () =>
      import('./pages/etudiant/etudiant.component').then(
        (m) => m.EtudiantComponent
      ),
  },
  {
    path: 'formations',
    loadComponent: () =>
      import('./pages/formation/formation.component').then(
        (m) => m.FormationComponent
      ),
  },
  {
    path: 'campus',
    loadComponent: () =>
      import('./pages/campus/campus.component').then((m) => m.CampusComponent),
  },
  {
    path: 'paiement',
    loadComponent: () =>
      import('./pages/paiement/paiement.component').then(
        (m) => m.PaiementComponent
      ),
  },
  {
    path: 'matiere',
    loadComponent: () =>
      import('./pages/matiere/matiere.component').then(
        (m) => m.MatiereComponent
      ),
  },
  {
    path: 'demarrer-matiere',
    loadComponent: () =>
      import('./pages/demarrer-matiere/demarrer-matiere.component').then(
        (m) => m.DemarrerMatiereComponent
      ),
  },
  {
    path: 'professeur',
    loadComponent: () =>
      import('./pages/professeur/professeur.component').then(
        (m) => m.ProfesseurComponent
      ),
  },
  {
    path: 'professeur/id',
    loadComponent: () =>
      import('./pages/professeur/see-professor/see-professor.component').then(
        (m) => m.SeeProfessorComponent
      ),
  },
  {
    path: 'tuteur',
    loadComponent: () =>
      import('./pages/tuteur/tuteur.component').then((m) => m.TuteurComponent),
  },
  {
    path: 'statistique',
    loadComponent: () =>
      import('./pages/statistique/statistique.component').then(
        (m) => m.StatistiqueComponent
      ),
  },
  {
    path: 'liste-utilisateurs',
    loadComponent: () =>
      import('./pages/liste-utilisateurs/liste-utilisateurs.component').then(
        (m) => m.ListeUtilisateursComponent
      ),
  },
  {
    path: '**',
    loadComponent: () =>
      import('./pages/not-found-page/not-found-page.component').then(
        (m) => m.NotFoundPageComponent
      ),
  },
];
