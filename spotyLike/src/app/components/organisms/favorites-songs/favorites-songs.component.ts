import { Component, Input, AfterContentInit } from '@angular/core';
import { PlaylistService } from 'src/app/services/playlist.service';

@Component({
  selector: 'o-favorites-songs',
  templateUrl: './favorites-songs.component.html',
  styleUrls: ['./favorites-songs.component.scss'],
})
export class FavoritesSongsComponent implements AfterContentInit {
  favorites_songs: any;

  @Input() user: any;

  constructor(public playlist: PlaylistService) {}

  getPlaylists() {
    return this.playlist.getPlaylistUser();
  }

  ngAfterContentInit(): void {
    this.favorites_songs = [
      {
        name: 'Pop Inglés',
        user: 'Juli',
        img: 'https://i.scdn.co/image/ab67616d0000b273232711f7d66a1e19e89e28c5',
      },
      {
        name: 'Pop Inglés',
        user: 'Juli',
        img:
          'https://ca-times.brightspotcdn.com/dims4/default/a3a078a/2147483647/strip/true/crop/2160x2160+0+0/resize/840x840!/quality/90/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2F8f%2F8f%2F462226764ec386fc2a325793885d%2Fpic-10-1sophie-muller-copy.jpg',
      },
      {
        name: 'Pop Inglés',
        user: 'Juli',
        img:
          'https://i.pinimg.com/originals/eb/94/cd/eb94cde41819f512d21dd32cf1797162.jpg',
      },
      {
        name: 'Pop Inglés',
        user: 'Juli',
        img:
          'https://ca-times.brightspotcdn.com/dims4/default/a3a078a/2147483647/strip/true/crop/2160x2160+0+0/resize/840x840!/quality/90/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2F8f%2F8f%2F462226764ec386fc2a325793885d%2Fpic-10-1sophie-muller-copy.jpg',
      },
      {
        name: 'Pop Inglés',
        user: 'Juli',
        img:
          'https://i.pinimg.com/originals/eb/94/cd/eb94cde41819f512d21dd32cf1797162.jpg',
      },
    ];
  }
}
