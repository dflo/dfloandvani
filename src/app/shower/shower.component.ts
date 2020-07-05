import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-shower',
  templateUrl: './shower.component.html',
  styleUrls: ['./shower.component.scss'],
})
export class ShowerComponent implements OnInit {
  @Input() showerDate: Date;
  @Input() showerEndDate: Date;

  constructor() {}

  ngOnInit(): void {}
}
