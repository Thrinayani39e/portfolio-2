import { Component, OnInit, OnDestroy, HostListener } from '@angular/core';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeroComponent } from './components/hero/hero.component';
import { AboutComponent } from './components/about/about.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { PublicationsComponent } from './components/publications/publications.component';
import { ContactComponent } from './components/contact/contact.component';
import { FooterComponent } from './components/footer/footer.component';
import { RecommendationsComponent } from './components/recommendations/recommendations.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    NavbarComponent,
    HeroComponent,
    AboutComponent,
    SkillsComponent,
    ExperienceComponent,
    ProjectsComponent,
    PublicationsComponent,
    ContactComponent,
    RecommendationsComponent,
    FooterComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit, OnDestroy {
  private matrixId: any;
  private observer: IntersectionObserver | null = null;

  ngOnInit() {
    this.startMatrixRain();
    this.setupScrollReveal();
  }

  ngOnDestroy() {
    cancelAnimationFrame(this.matrixId);
    this.observer?.disconnect();
  }

  @HostListener('window:scroll')
  onScroll() {
    const reveals = document.querySelectorAll(
      '.reveal:not(.visible), .reveal-left:not(.visible), .reveal-right:not(.visible)'
    );
    reveals.forEach(el => {
      if (el.getBoundingClientRect().top < window.innerHeight - 60) {
        el.classList.add('visible');
      }
    });
  }

  private setupScrollReveal() {
    if (typeof IntersectionObserver === 'undefined') return;
    this.observer = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); }),
      { threshold: 0.07, rootMargin: '0px 0px -40px 0px' }
    );
    setTimeout(() => {
      document.querySelectorAll('.reveal, .reveal-left, .reveal-right')
        .forEach(el => this.observer!.observe(el));
    }, 150);
  }

  private startMatrixRain() {
    const canvas = document.getElementById('matrix-canvas') as HTMLCanvasElement;
    if (!canvas) return;
    const ctx = canvas.getContext('2d')!;

    const resize = () => {
      canvas.width  = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    const CHARS = 'アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズブヅプエェケセテネヘメレヱゲゼデベペオォコソトノホモヨョロヲゴゾドボポヴッン0123456789ABCDEF';
    const fontSize = 11;
    const cols = Math.floor(window.innerWidth / fontSize);
    const drops: number[] = Array(cols).fill(1);

    const draw = () => {
      ctx.fillStyle = 'rgba(10, 13, 18, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = '#3fb950';
      ctx.font = `${fontSize}px "JetBrains Mono", monospace`;
      for (let i = 0; i < drops.length; i++) {
        const ch = CHARS[Math.floor(Math.random() * CHARS.length)];
        ctx.fillText(ch, i * fontSize, drops[i] * fontSize);
        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) drops[i] = 0;
        drops[i]++;
      }
      this.matrixId = requestAnimationFrame(draw);
    };

    draw();
  }
}
