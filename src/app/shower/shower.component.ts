import { Component } from '@angular/core';

@Component({
  selector: 'app-shower',
  templateUrl: './shower.component.html',
  styleUrls: ['./shower.component.scss'],
})
export class ShowerComponent {
  showerDate = new Date(2020, 6, 26, 15, 0);
  showerEndDate = new Date(2020, 6, 26, 18, 0);
}
