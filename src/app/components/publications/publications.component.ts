import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PUBLICATIONS } from '../../data/portfolio.data';
import { Publication } from '../../data/portfolio.types';

@Component({
  selector: 'app-publications',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './publications.component.html',
  styleUrl: './publications.component.scss'
})
export class PublicationsComponent {
  readonly publications: Publication[] = PUBLICATIONS;
}
