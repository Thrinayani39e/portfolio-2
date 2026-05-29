import { Component, OnInit, OnDestroy, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent }          from './components/navbar/navbar.component';
import { HeroComponent }            from './components/hero/hero.component';
import { AboutComponent }           from './components/about/about.component';
import { SkillsComponent }          from './components/skills/skills.component';
import { ExperienceComponent }      from './components/experience/experience.component';
import { ProjectsComponent }        from './components/projects/projects.component';
import { PublicationsComponent }    from './components/publications/publications.component';
import { ContactComponent }         from './components/contact/contact.component';
import { RecommendationsComponent } from './components/recommendations/recommendations.component';
import { FooterComponent }          from './components/footer/footer.component';
import { NavigationService }        from './services/navigation.service';
import { NAV_LINKS, OWNER }         from './data/portfolio.data';
import { NavLink }                  from './data/portfolio.types';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    NavbarComponent, HeroComponent, AboutComponent, SkillsComponent,
    ExperienceComponent, ProjectsComponent, PublicationsComponent,
    ContactComponent, RecommendationsComponent, FooterComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit, OnDestroy {
  readonly nav = inject(NavigationService);
  readonly navLinks: NavLink[] = NAV_LINKS;
  readonly ownerGithub = OWNER.github;
  private matrixId: any;

  get active() { return this.nav.active(); }

  ngOnInit()    { this.startMatrixRain(); }
  ngOnDestroy() { cancelAnimationFrame(this.matrixId); }

  private startMatrixRain() {
    const canvas = document.getElementById('matrix-canvas') as HTMLCanvasElement;
    if (!canvas) return;
    const ctx = canvas.getContext('2d')!;
    const resize = () => { canvas.width = window.innerWidth; canvas.height = window.innerHeight; };
    resize();
    window.addEventListener('resize', resize);
    const CHARS = 'アァカサタナハマヤラワガザダバパイキシチニヒミリギジヂビピウクスツヌフムユルグズブヅプエケセテネヘメゲゼデベオコソトノホモヨロゴゾドボ0123456789ABCDEF';
    const fontSize = 11;
    const drops: number[] = Array(Math.floor(window.innerWidth / fontSize)).fill(1);
    const draw = () => {
      ctx.fillStyle = 'rgba(10,13,18,0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = '#3fb950';
      ctx.font = `${fontSize}px "JetBrains Mono",monospace`;
      drops.forEach((d, i) => {
        ctx.fillText(CHARS[Math.floor(Math.random() * CHARS.length)], i * fontSize, d * fontSize);
        if (d * fontSize > canvas.height && Math.random() > 0.975) drops[i] = 0;
        drops[i]++;
      });
      this.matrixId = requestAnimationFrame(draw);
    };
    draw();
  }
}
