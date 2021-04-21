import {
  Component,
  Input,
  OnChanges,
  SimpleChange,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'm-songs-group',
  templateUrl: './songs-group.component.html',
  styleUrls: ['./songs-group.component.scss'],
})
export class SongsGroupComponent {
  @Input() title: string = '';
  @Input() variant: string = '';
  @Input() songs: any = '';
  @Input() favoriteSong: any = '';

  constructor() {}
}
