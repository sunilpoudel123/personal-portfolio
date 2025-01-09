import { Component } from '@angular/core';
import {Router, RouterLinkActive, RouterOutlet} from '@angular/router';
import {FooterComponent} from './footer/footer.component';
import {HeaderComponent} from './header/header.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLinkActive, FooterComponent, HeaderComponent],
  templateUrl: './app.component.html',
  standalone: true,
  styleUrl: './app.component.css'
})
export class AppComponent {
  constructor(private router: Router) {
    router.events.subscribe((event) => {
      console.log(event);
    });
  }

  navigateToPage(path: string): void {
    this.router.navigate([path]);
  }

  logRoutes() {
    console.log(this.router.config);
  }
}
