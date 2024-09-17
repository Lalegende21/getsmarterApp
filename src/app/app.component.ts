import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component, HostListener } from '@angular/core';
import {
  NavigationEnd,
  Router,
  RouterModule,
  RouterOutlet,
} from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { filter } from 'rxjs';
import { NgxSpinnerModule, NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    CommonModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    RouterModule,
    HttpClientModule,
    MatTooltipModule,
    TranslateModule,
    NgxSpinnerModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'getsmarterApp';
  isSidenavOpen = true;
  isLargeScreen = true;
  sidenavMode: 'side' | 'over' = 'side';

  isLoading = true;

  constructor(
    private breakpointObserver: BreakpointObserver,
    private translate: TranslateService,
    private router: Router
  ) {}

  changeLang(selectedLang: string) {
    this.translate.use(selectedLang);
  }

  ngOnInit(): void {
    // Supprimez le loader une fois l'application Angular chargée
    setTimeout(() => {
      const loader = document.getElementById('global-loader');
      if (loader) {
        loader.style.display = 'none';
      }
    }, 1000);

    this.breakpointObserver
      .observe([Breakpoints.Medium, Breakpoints.Large, Breakpoints.XLarge])
      .subscribe((result) => {
        if (result.matches) {
          this.isLargeScreen = true;
          this.sidenavMode = 'side';
          this.isSidenavOpen = true;
          this.router.events
            .pipe(filter((event) => event instanceof NavigationEnd))
            .subscribe(() => {
              this.isSidenavOpen = true; // Fermer le sidenav après la navigation
            });
        } else {
          this.isLargeScreen = false;
          this.sidenavMode = 'over';
          this.isSidenavOpen = false;
          this.router.events
            .pipe(filter((event) => event instanceof NavigationEnd))
            .subscribe(() => {
              this.isSidenavOpen = false; // Fermer le sidenav après la navigation
            });
        }
      });
  }

  //Gerer le basculement de la sidenav du dashboard
  toggleSidenav(): void {
    if (this.isLargeScreen) {
      this.isSidenavOpen = !this.isSidenavOpen;
    } else {
      this.isSidenavOpen = !this.isSidenavOpen;
    }
  }

  /**************SELECTEUR DE LANGUE **********************/
  isActive = false;
  selectedCountry = 'FR';

  toggleMenu() {
    this.isActive = !this.isActive;
  }

  selectOption(event: Event, country: string) {
    this.selectedCountry = country;
    this.isActive = false;
    this.changeLang(country);
  }

  /******************* AFFICHER ET MASQUER LE MODAL DES OPTIONS DU PROFILS ************************/
  isModalVisible: boolean = false;

  toggleModal(event: Event) {
    event.stopPropagation(); // Empêche la propagation du clic pour éviter de fermer la modal immédiatement
    this.isModalVisible = !this.isModalVisible;
  }

  closeModal() {
    this.isModalVisible = false;
  }

  onOptionSelected(event: Event) {
    console.log('Option sélectionnée');
    this.closeModal(); // Ferme le modal après avoir sélectionné une option
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: Event) {
    const target = event.target as HTMLElement;

    // Vérifiez si le clic s'est produit à l'intérieur de la modal ou du bouton "more-icon"
    const clickedInsideModal = target.closest('.list');
    const clickedOnButton = target.closest('.profil');

    if (!clickedInsideModal && !clickedOnButton) {
      this.isModalVisible = false;
    }
  }
}
