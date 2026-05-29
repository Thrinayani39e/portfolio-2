import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EDUCATION, EXPERIENCE } from '../../data/portfolio.data';
import { Education, ExperienceEntry } from '../../data/portfolio.types';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss'
})
export class ExperienceComponent {
  readonly education: Education = EDUCATION;
  readonly experiences: ExperienceEntry[] = EXPERIENCE;
}
