import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RECOMMENDATIONS, OWNER } from '../../data/portfolio.data';
import { Recommendation } from '../../data/portfolio.types';

@Component({
  selector: 'app-recommendations',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './recommendations.component.html',
  styleUrl: './recommendations.component.scss'
})
export class RecommendationsComponent {
  readonly recommendations: Recommendation[] = RECOMMENDATIONS;
  readonly linkedinUrl = OWNER.linkedin;

  activeIndex = 0;
  expanded = new Set<number>();

  prev() {
    this.activeIndex = (this.activeIndex - 1 + this.recommendations.length) % this.recommendations.length;
  }

  next() {
    this.activeIndex = (this.activeIndex + 1) % this.recommendations.length;
  }

  setActive(i: number) {
    this.activeIndex = i;
  }

  toggleExpand(i: number) {
    if (this.expanded.has(i)) {
      this.expanded.delete(i);
    } else {
      this.expanded.add(i);
    }
  }

  isExpanded(i: number): boolean {
    return this.expanded.has(i);
  }

  truncate(text: string, max = 200): string {
    return text.length > max ? text.slice(0, max).trim() + '…' : text;
  }
}
