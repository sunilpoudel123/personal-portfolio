import {Component} from '@angular/core';
import {Router, RouterLinkActive} from "@angular/router";

@Component({
  selector: 'app-header',
  imports: [
    RouterLinkActive
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  constructor(private router: Router) {
  }

  navigateToPage(path: string): void {
    this.router.navigate([path]);
  }
}
