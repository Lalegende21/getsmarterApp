import { Component, HostListener, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  title = 'getsmarterApp';

  ngOnInit(): void {
    // Supprimez le loader une fois l'application Angular chargée
    // setTimeout(() => {
    //   const loader = document.getElementById('global-loader');
    //   if (loader) {
    //     loader.style.display = 'none';
    //   }
    // }, 1000);
  }
}
