import { Component, Input } from '@angular/core';

@Component({
  selector: 'm-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent {
  @Input() imgSrc: string = '';

  constructor() {}
}
