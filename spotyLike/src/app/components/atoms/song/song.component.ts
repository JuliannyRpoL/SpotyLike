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
  @Input() songType: string = '';

  constructor(public _playlistService: PlaylistService) {}

  async handleRemoveTrack(track_id: string) {
    try {
      await this._playlistService.removeTrack(track_id);
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  }

  async handleAddTrack(track_id: string) {
    try {
      await this._playlistService.saveNewTrack(track_id);
    } catch (error) {
      console.log(error);
    }
  }
}
