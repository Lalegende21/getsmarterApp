import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'login',
  },
  {
    path: 'login',
    loadComponent: () =>
      import('./login/login.component').then((m) => m.LoginComponent),
  },
  {
    path: 'register',
    loadComponent: () =>
      import('./register/register.component').then((m) => m.RegisterComponent),
  },
  {
    path: 'forgot-password',
    loadComponent: () =>
      import('./forgot-password/forgot-password.component').then(
        (m) => m.ForgotPasswordComponent
      ),
  },
  {
    path: 'code-activation',
    loadComponent: () =>
      import('./code-validation/code-validation.component').then(
        (m) => m.CodeValidationComponent
      ),
  },
  {
    path: 'dashboard',
    loadComponent: () =>
      import('./dashboard/dashboard.component').then(
        (m) => m.DashboardComponent
      ),
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'accueil',
      },
      {
        path: 'profil',
        loadComponent: () =>
          import('./pages/profil/profil.component').then(
            (m) => m.ProfilComponent
          ),
      },
      {
        path: 'parametres',
        loadComponent: () =>
          import('./pages/parametres/parametres.component').then(
            (m) => m.ParametresComponent
          ),
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
        path: 'etudiant/id',
        loadComponent: () =>
          import('./pages/etudiant/voir-etudiant/voir-etudiant.component').then(
            (m) => m.VoirEtudiantComponent
          ),
      },
      {
        path: 'specificite',
        loadComponent: () =>
          import('./pages/specificite/specificite.component').then(
            (m) => m.SpecificiteComponent
          ),
      },
      {
        path: 'liste-formations',
        loadComponent: () =>
          import('./pages/liste-formations/liste-formations.component').then(
            (m) => m.ListeFormationsComponent
          ),
      },
      {
        path: 'liste-formations/id',
        loadComponent: () =>
          import(
            './pages/liste-formations/voir-formations/voir-formations.component'
          ).then((m) => m.VoirFormationsComponent),
      },
      {
        path: 'campus',
        loadComponent: () =>
          import('./pages/campus/campus.component').then(
            (m) => m.CampusComponent
          ),
      },
      {
        path: 'paiement',
        loadComponent: () =>
          import('./pages/paiement/paiement.component').then(
            (m) => m.PaiementComponent
          ),
      },
      {
        path: 'paiement/id',
        loadComponent: () =>
          import('./pages/paiement/see-paiement/see-paiement.component').then(
            (m) => m.SeePaiementComponent
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
        path: 'demarrer-matiere/id',
        loadComponent: () =>
          import(
            './pages/demarrer-matiere/voir-matiere/voir-matiere.component'
          ).then((m) => m.VoirMatiereComponent),
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
          import(
            './pages/professeur/see-professor/see-professor.component'
          ).then((m) => m.SeeProfessorComponent),
      },
      {
        path: 'tuteur',
        loadComponent: () =>
          import('./pages/tuteur/tuteur.component').then(
            (m) => m.TuteurComponent
          ),
      },
      {
        path: 'tuteur/id',
        loadComponent: () =>
          import('./pages/tuteur/see-tutor/see-tutor.component').then(
            (m) => m.SeeTutorComponent
          ),
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
          import(
            './pages/liste-utilisateurs/liste-utilisateurs.component'
          ).then((m) => m.ListeUtilisateursComponent),
      },
      {
        path: 'liste-utilisateurs/id',
        loadComponent: () =>
          import(
            './pages/liste-utilisateurs/voir-utilisateur/voir-utilisateur.component'
          ).then((m) => m.VoirUtilisateurComponent),
      },
      {
        path: 'dashboard/**',
        loadComponent: () =>
          import('./pages/not-found-page/not-found-page.component').then(
            (m) => m.NotFoundPageComponent
          ),
      },
    ],
  },

  {
    path: '**',
    loadComponent: () =>
      import('./page-not-found/page-not-found.component').then(
        (m) => m.PageNotFoundComponent
      ),
  },
];
