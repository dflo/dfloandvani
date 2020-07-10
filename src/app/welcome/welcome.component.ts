import { Component, OnInit } from '@angular/core';

import { Observable, timer } from 'rxjs';
import { map } from 'rxjs/operators';

import { Countdown } from '../models/countdown';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss'],
})
export class WelcomeComponent implements OnInit {
  weddingDate = new Date(2020, 8, 12, 14, 30);
  countdown$: Observable<Countdown>;

  ngOnInit(): void {
    this.countdown$ = timer(0, 1000).pipe(
      map(() => {
        const diff = this.weddingDate.getTime() - Date.now();
        return {
          days: Math.abs(Math.floor(diff / (1000 * 60 * 60 * 24))),
          hours: Math.abs(Math.floor((diff / (1000 * 60 * 60)) % 24)),
          mins: Math.abs(Math.floor((diff / (1000 * 60)) % 60)),
          secs: Math.abs(Math.floor((diff / 1000) % 60)),
          suffix: diff > 0 ? 'engagedSuffix' : 'marriedSuffix',
        };
      }),
    );
  }
}
