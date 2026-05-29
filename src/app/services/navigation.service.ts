import { Injectable, signal } from '@angular/core';
import { NAV_LINKS } from '../data/portfolio.data';

export type SectionId = string;

@Injectable({ providedIn: 'root' })
export class NavigationService {
  readonly sections: SectionId[] = ['hero', ...NAV_LINKS.map(l => l.id)];
  readonly active = signal<SectionId>('hero');

  navigate(id: SectionId) {
    this.active.set(id);
  }
}
