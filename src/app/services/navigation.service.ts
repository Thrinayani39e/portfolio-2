import { Injectable, signal } from '@angular/core';
import { NAV_LINKS } from '../data/portfolio.data';

export type SectionId = string;

@Injectable({ providedIn: 'root' })
export class NavigationService {
  readonly sections: SectionId[] = ['hero', ...NAV_LINKS.map(l => l.id)];
  readonly active   = signal<SectionId>('hero');
  readonly menuOpen = signal(false);

  navigate(id: SectionId) {
    this.active.set(id);
    this.menuOpen.set(false);
  }

  toggleMenu() {
    this.menuOpen.update(v => !v);
  }

  closeMenu() {
    this.menuOpen.set(false);
  }
}
