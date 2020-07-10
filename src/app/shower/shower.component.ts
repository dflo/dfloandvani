import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-shower',
  templateUrl: './shower.component.html',
  styleUrls: ['./shower.component.scss'],
})
export class ShowerComponent {
  @Input() showerDate: Date;
  @Input() showerEndDate: Date;
}
