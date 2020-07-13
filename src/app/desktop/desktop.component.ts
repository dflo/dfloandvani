import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';

import { LocalizeRouterService } from '@gilsdav/ngx-translate-router';

@Component({
  selector: 'app-desktop',
  templateUrl: './desktop.component.html',
  styleUrls: ['./desktop.component.scss'],
})
export class DesktopComponent {
  @Input() navLinks: { path: string; label: string }[];
  @Output() languageChange = new EventEmitter<string>();

  constructor(
    private router: Router,
    private localize: LocalizeRouterService,
  ) {}

  onLanguageChange(lang: string): void {
    this.languageChange.emit(lang);
  }

  isActive(path: any) {
    path = this.localize.translateRoute(path);
    return this.router.isActive(path, true);
  }
}
