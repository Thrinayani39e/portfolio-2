import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SKILLS } from '../../data/portfolio.data';
import { SkillGroup } from '../../data/portfolio.types';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent {
  readonly skillGroups: SkillGroup[] = SKILLS;
}
