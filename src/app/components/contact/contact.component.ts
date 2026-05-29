import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CONTACT_INFO, CONTACT_INTRO } from '../../data/portfolio.data';
import { ContactItem } from '../../data/portfolio.types';

interface ContactForm {
  name: string;
  email: string;
  subject: string;
  message: string;
}

type FormStatus = 'idle' | 'sending' | 'success' | 'error';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  readonly contactInfo: ContactItem[] = CONTACT_INFO;
  readonly introHtml = CONTACT_INTRO;

  form: ContactForm = { name: '', email: '', subject: '', message: '' };
  status: FormStatus = 'idle';

  async onSubmit() {
    if (this.status === 'sending') return;
    this.status = 'sending';

    try {
      const body = new URLSearchParams({
        'form-name': 'contact',
        name:        this.form.name,
        email:       this.form.email,
        subject:     this.form.subject,
        message:     this.form.message,
      });

      const res = await fetch('/', {
        method:  'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body:    body.toString(),
      });

      if (res.ok) {
        this.status = 'success';
        this.form = { name: '', email: '', subject: '', message: '' };
      } else {
        this.status = 'error';
      }
    } catch {
      this.status = 'error';
    } finally {
      if (this.status !== 'success') {
        setTimeout(() => { this.status = 'idle'; }, 5000);
      }
    }
  }

  get isValid(): boolean {
    return !!(this.form.name.trim() && this.form.email.trim() && this.form.message.trim());
  }
}
