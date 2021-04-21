import { Component, Input, OnInit } from '@angular/core';
import { PlaylistService } from 'src/app/services/playlist.service';

@Component({
  selector: 'a-song',
  templateUrl: './song.component.html',
  styleUrls: ['./song.component.scss'],
})
export class SongComponent {
  @Input() user_name: string = '';
  @Input() playlist_name: string = '';
  @Input() imgSrc: string = '';
  @Input() playlist_id: string = '';
  @Input() canBeSelect: boolean = false;

  constructor(public _playlistService: PlaylistService) {}

  async handleUnfollowPlaylist(playlist_id: string) {
    await this._playlistService.unfollowPlaylist(playlist_id);
  }
}
