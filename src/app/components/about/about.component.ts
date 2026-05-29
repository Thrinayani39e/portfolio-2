import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ABOUT, OWNER } from '../../data/portfolio.data';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  readonly about = ABOUT;
  readonly owner = OWNER;
}
