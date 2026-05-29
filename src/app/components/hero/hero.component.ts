import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HERO, OWNER } from '../../data/portfolio.data';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent implements OnInit, OnDestroy {
  readonly owner = OWNER;
  readonly stats = HERO.stats;

  displayedRole = '';
  showOutput = false;
  showStats = false;
  showActions = false;

  private readonly roles = HERO.roles;
  private roleIndex = 0;
  private charIndex = 0;
  private isDeleting = false;
  private typingTimer: any;
  private initTimer: any;

  ngOnInit() {
    this.initTimer = setTimeout(() => {
      this.showOutput = true;
      setTimeout(() => {
        this.startTyping();
        setTimeout(() => { this.showStats = true; }, 1800);
        setTimeout(() => { this.showActions = true; }, 2400);
      }, 300);
    }, 400);
  }

  ngOnDestroy() {
    clearTimeout(this.typingTimer);
    clearTimeout(this.initTimer);
  }

  private startTyping() {
    const tick = () => {
      const current = this.roles[this.roleIndex];
      if (this.isDeleting) {
        this.displayedRole = current.slice(0, this.charIndex - 1);
        this.charIndex--;
      } else {
        this.displayedRole = current.slice(0, this.charIndex + 1);
        this.charIndex++;
      }

      if (!this.isDeleting && this.charIndex === current.length) {
        this.typingTimer = setTimeout(() => { this.isDeleting = true; tick(); }, 2200);
        return;
      }
      if (this.isDeleting && this.charIndex === 0) {
        this.isDeleting = false;
        this.roleIndex = (this.roleIndex + 1) % this.roles.length;
      }
      this.typingTimer = setTimeout(tick, this.isDeleting ? 45 : 95);
    };

    tick();
  }

  scrollToNext() {
    document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}
