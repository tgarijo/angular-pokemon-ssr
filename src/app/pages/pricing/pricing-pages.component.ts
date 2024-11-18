import { isPlatformBrowser } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject, OnInit, PLATFORM_ID } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'page-pricing',
  standalone: true,
  imports: [],
  templateUrl: './pricing-pages.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export default class PricingPagesComponent   implements OnInit{


  private title = inject(Title)
  private meta = inject(Meta);
  private platform = inject(PLATFORM_ID);

  ngOnInit(): void {

    // if ( isPlatformBrowser(this.platform)) { // Si estamos en el navegador
    //   document.title = 'Pricing Page';
    // }


    this.title.setTitle('Pricing Page');
    this.meta.updateTag({ name: 'description', content: 'Este es mi Pricing Page'})
    this.meta.updateTag({ name: 'og:title', content: 'Pricing Page'})

  }
}
