import { OnDestroy } from '@angular/core';

import { Subject } from 'rxjs';

export class BaseContainer implements OnDestroy {
  protected readonly destroySignal$ = new Subject<void>();

  ngOnDestroy(): void {
    this.destroySignal$.next();
    this.destroySignal$.complete();
  }
}