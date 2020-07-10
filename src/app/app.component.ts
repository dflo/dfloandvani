import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { LocalizeRouterService } from '@gilsdav/ngx-translate-router';

import { AppMedia } from './core/models/app-media';
import { AppMediaService } from './core/services/app-media.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  appMedia$ = this.appMediaService.appMedia$;

  navLinks = [
    { path: '/', label: 'Welcome' },
    { path: '/shower', label: 'Shower' },
    { path: '/registry', label: 'Registry' },
  ];

  public get AppMedia() {
    return AppMedia;
  }

  constructor(
    private appMediaService: AppMediaService,
    private router: Router,
    private localize: LocalizeRouterService,
  ) {
    const redirectPath = localStorage.getItem('path');
    if (redirectPath) {
      localStorage.removeItem('path');
      const urlSegments = redirectPath.split('/').filter((s) => !!s);

      if (this.localize.parser.locales.includes(urlSegments[0])) {
        if (urlSegments[0] !== this.localize.parser.currentLang) {
          setTimeout(() => {
            this.router.navigate(urlSegments);
          });
        } else {
          this.router.navigate(urlSegments);
        }
      } else {
        this.router.navigateByUrl('/');
      }
    }
  }

  isActive(path: any) {
    path = this.localize.translateRoute(path);
    return this.router.isActive(path, true);
  }

  useLanguage(language: string) {
    const urlSegments = this.router.url.split('/').filter((s) => !!s);
    if (urlSegments[0] !== language) {
      urlSegments[0] = language;
      this.router.navigate(urlSegments);
    }
  }
}
