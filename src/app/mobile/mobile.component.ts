import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';

import { LocalizeRouterService } from '@gilsdav/ngx-translate-router';

@Component({
  selector: 'app-mobile',
  templateUrl: './mobile.component.html',
  styleUrls: ['./mobile.component.scss'],
})
export class MobileComponent {
  @Input() navLinks: { path: string; label: string }[];
  @Output() languageChange = new EventEmitter<string>();

  constructor(
    private router: Router,
    private localize: LocalizeRouterService,
  ) {}

  onLanguageChange(lang: string): void {
    this.languageChange.emit(lang);
  }

  localizedRoute(path: string) {
    return [this.localize.translateRoute(path)];
  }

  isActive(path: any) {
    path = this.localize.translateRoute(path);
    return this.router.isActive(path, true);
  }
}
