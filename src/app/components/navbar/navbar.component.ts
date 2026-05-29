import { Component, inject, HostListener, signal } from '@angular/core';
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
  readonly menuOpen = signal(false);

  get active() { return this.nav.active(); }

  navigate(id: string) {
    this.nav.navigate(id);
    this.menuOpen.set(false);
  }

  toggleMenu() {
    this.menuOpen.update(v => !v);
  }

  @HostListener('document:keydown.escape')
  closeMenu() {
    this.menuOpen.set(false);
  }
}
