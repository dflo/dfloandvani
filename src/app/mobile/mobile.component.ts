import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-mobile',
  templateUrl: './mobile.component.html',
  styleUrls: ['./mobile.component.scss'],
})
export class MobileComponent {
  @Output() languageChange = new EventEmitter<string>();

  constructor() {}

  onLanguageChange(lang: string): void {
    this.languageChange.emit(lang);
  }
}
