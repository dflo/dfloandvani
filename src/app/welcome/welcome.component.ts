import { Component, Input, OnInit } from '@angular/core';

import { Countdown } from '../models/countdown';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss'],
})
export class WelcomeComponent implements OnInit {
  @Input() countdown: Countdown;
  @Input() weddingDate: Date;

  constructor() {}

  ngOnInit(): void {}
}
