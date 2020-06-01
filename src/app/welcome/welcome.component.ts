import { Component, Input, OnInit } from '@angular/core';

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
