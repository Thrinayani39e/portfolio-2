import { Component, ElementRef, AfterViewInit, QueryList, ViewChildren } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PROJECTS } from '../../data/portfolio.data';
import { Project } from '../../data/portfolio.types';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent implements AfterViewInit {
  @ViewChildren('projectCard') cards!: QueryList<ElementRef<HTMLElement>>;

  readonly projects: Project[] = PROJECTS;

  ngAfterViewInit() {
    this.cards.forEach(card => {
      const el = card.nativeElement;
      el.addEventListener('mousemove', (e: MouseEvent) => this.tiltCard(e, el));
      el.addEventListener('mouseleave', () => this.resetCard(el));
    });
  }

  private tiltCard(e: MouseEvent, el: HTMLElement) {
    const rect = el.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const dx = (e.clientX - cx) / (rect.width / 2);
    const dy = (e.clientY - cy) / (rect.height / 2);
    el.style.transform = `perspective(800px) rotateY(${dx * 5}deg) rotateX(${-dy * 4}deg) translateZ(6px)`;
  }

  private resetCard(el: HTMLElement) {
    el.style.transition = 'transform 0.45s cubic-bezier(0.16, 1, 0.3, 1)';
    el.style.transform = 'perspective(800px) rotateY(0deg) rotateX(0deg) translateZ(0px)';
    setTimeout(() => { el.style.transition = ''; }, 450);
  }
}
