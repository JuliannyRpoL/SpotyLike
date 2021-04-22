import { Component, Input } from '@angular/core';

@Component({
  selector: 'm-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent {
  profile_name: string = '';
  @Input() imgSrc: string = '';

  constructor() {
    const user_data = sessionStorage.getItem('user_data');
    user_data
      ? (this.profile_name = JSON.parse(user_data).display_name)
      : (this.profile_name = '');

    if (user_data && JSON.parse(user_data).images[0]) {
      this.imgSrc = JSON.parse(user_data).images[0];
    }
  }
}
