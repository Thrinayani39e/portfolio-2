import { Component, inject, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NAV_LINKS, OWNER } from '../../data/portfolio.data';
import { NavLink } from '../../data/portfolio.types';
import { NavigationService } from '../../services/navigation.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  private nav = inject(NavigationService);
  readonly navLinks: NavLink[] = NAV_LINKS;
  readonly owner = OWNER;

  get active()    { return this.nav.active(); }
  get menuOpen()  { return this.nav.menuOpen(); }

  navigate(id: string) { this.nav.navigate(id); }
  toggleMenu()         { this.nav.toggleMenu(); }

  @HostListener('document:keydown.escape')
  onEsc() { this.nav.closeMenu(); }
}
