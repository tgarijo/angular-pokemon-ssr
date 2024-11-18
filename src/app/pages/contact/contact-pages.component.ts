import { ChangeDetectionStrategy, Component, inject, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'page-contact',
  standalone: true,
  imports: [],
  templateUrl: './contact-pages.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export default class ContactPagesComponent  implements OnInit{


  private title = inject(Title)
  private meta = inject(Meta);


  ngOnInit(): void {
    this.title.setTitle('Contact Page');
    this.meta.updateTag({ name: 'description', content: 'Este es mi Contact Page'})
    this.meta.updateTag({ name: 'og:title', content: 'Contact Page'})

  }
}
