import { Component, Input } from '@angular/core';

@Component({
  selector: 'a-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.scss'],
})
export class LogoComponent {
  applicattionName: string = 'SpotyLike';

  @Input() size: string = '';
}
