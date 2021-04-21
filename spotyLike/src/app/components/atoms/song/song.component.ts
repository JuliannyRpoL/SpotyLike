import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'a-song',
  templateUrl: './song.component.html',
  styleUrls: ['./song.component.scss'],
})
export class SongComponent {
  @Input() user_name: string = '';
  @Input() playlist_name: string = '';
  @Input() imgSrc: string = '';
  @Input() canBeSelect: boolean = false;

  constructor() {}
}
