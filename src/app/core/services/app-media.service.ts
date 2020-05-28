import { BreakpointObserver } from '@angular/cdk/layout';
import { Injectable } from '@angular/core';

import { map } from 'rxjs/operators';
import { AppMedia } from '../models/app-media';

@Injectable({ providedIn: 'root' })
export class AppMediaService {
  private readonly mobileMaxWidth = '(max-width: 719px)';
  private readonly tabletMaxWidth = '(max-width: 1023px)';

  constructor(private breakpointObserver: BreakpointObserver) {}

  appMedia$ = this.breakpointObserver
    .observe([this.mobileMaxWidth, this.tabletMaxWidth])
    .pipe(
      map((state) =>
        state.breakpoints[this.mobileMaxWidth]
          ? AppMedia.Mobile
          : state.breakpoints[this.tabletMaxWidth]
          ? AppMedia.Tablet
          : AppMedia.Desktop,
      ),
    );
}
