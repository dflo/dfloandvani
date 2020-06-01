import { Component, OnInit } from '@angular/core';

import { Observable, timer } from 'rxjs';
import { map } from 'rxjs/operators';

import { AppMedia } from './core/models/app-media';
import { AppMediaService } from './core/services/app-media.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  weddingDate = new Date('2020-09-12 2:30 PM');
  showerDate = new Date('2020-07-26 3:00 PM');
  countdown$: Observable<Countdown>;
  appMedia$ = this.appMediaService.appMedia$;

  public get AppMedia() {
    return AppMedia;
  }

  constructor(private appMediaService: AppMediaService) {}

  ngOnInit(): void {
    this.countdown$ = timer(0, 1000).pipe(
      map(() => {
        const diff = this.weddingDate.getTime() - Date.now();
        return {
          days: Math.abs(Math.floor(diff / (1000 * 60 * 60 * 24))),
          hours: Math.abs(Math.floor((diff / (1000 * 60 * 60)) % 24)),
          mins: Math.abs(Math.floor((diff / (1000 * 60)) % 60)),
          secs: Math.abs(Math.floor((diff / 1000) % 60)),
          suffix: diff > 0 ? 'until we say "I do"' : 'Happily Married!',
        };
      }),
    );
  }
}
