import { Component, Input } from '@angular/core';

import { Countdown } from '../models/countdown';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss'],
})
export class WelcomeComponent {
  @Input() countdown: Countdown;
  @Input() weddingDate: Date;
}
