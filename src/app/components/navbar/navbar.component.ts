import { Component, OnInit, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NAV_LINKS, NAV_SECTIONS } from '../../data/portfolio.data';
import { NavLink } from '../../data/portfolio.types';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent implements OnInit {
  scrolled = false;
  menuOpen = false;
  activeSection = 'hero';

  readonly navLinks: NavLink[] = NAV_LINKS;
  private readonly sections: string[] = NAV_SECTIONS;

  ngOnInit() {
    this.checkScroll();
  }

  @HostListener('window:scroll')
  checkScroll() {
    this.scrolled = window.scrollY > 40;
    this.updateActiveSection();
  }

  private updateActiveSection() {
    const offset = 120;
    for (let i = this.sections.length - 1; i >= 0; i--) {
      const el = document.getElementById(this.sections[i]);
      if (el && el.getBoundingClientRect().top <= offset) {
        this.activeSection = this.sections[i];
        return;
      }
    }
    this.activeSection = 'hero';
  }

  scrollTo(id: string) {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    this.menuOpen = false;
  }

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }
}
